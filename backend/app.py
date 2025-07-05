from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from pymongo import MongoClient
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
from bson import ObjectId

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-change-this')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'jwt-secret-key-change-this')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

# Initialize extensions
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app, supports_credentials=True)

# MongoDB connection
mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
client = MongoClient(mongo_uri)
db = client['auth_db']
users_collection = db['users']
agent_requests_collection = db['agent_requests']

@app.route('/')
def home():
    return jsonify({"message": "Flask Auth API with MongoDB - Backend is running!"})

@app.route('/api')
def api_home():
    return jsonify({"message": "Flask Auth API with MongoDB"})

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or not data.get('email') or not data.get('password') or not data.get('username'):
            return jsonify({"error": "Email, password, and username are required"}), 400
        
        email = data['email'].lower().strip()
        password = data['password']
        username = data['username'].strip()
        
        # Check if user already exists
        existing_user = users_collection.find_one({"$or": [{"email": email}, {"username": username}]})
        if existing_user:
            return jsonify({"error": "User with this email or username already exists"}), 409
        
        # Hash password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
        # Create user document
        user_doc = {
            "email": email,
            "username": username,
            "password": hashed_password,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        # Insert user into database
        result = users_collection.insert_one(user_doc)
        
        # Create access token
        access_token = create_access_token(identity=str(result.inserted_id))
        
        return jsonify({
            "message": "User created successfully",
            "user": {
                "id": str(result.inserted_id),
                "email": email,
                "username": username
            },
            "access_token": access_token
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or not data.get('email') or not data.get('password'):
            return jsonify({"error": "Email and password are required"}), 400
        
        email = data['email'].lower().strip()
        password = data['password']
        
        # Find user by email
        user = users_collection.find_one({"email": email})
        if not user:
            return jsonify({"error": "Invalid email or password"}), 401
        
        # Check password
        if not bcrypt.check_password_hash(user['password'], password):
            return jsonify({"error": "Invalid email or password"}), 401
        
        # Create access token
        access_token = create_access_token(identity=str(user['_id']))
        
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": str(user['_id']),
                "email": user['email'],
                "username": user['username']
            },
            "access_token": access_token
        }), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/profile', methods=['GET'])
@jwt_required()
def get_profile():
    try:
        current_user_id = get_jwt_identity()
        user = users_collection.find_one({"_id": ObjectId(current_user_id)})
        
        if not user:
            return jsonify({"error": "User not found"}), 404
        
        return jsonify({
            "user": {
                "id": str(user['_id']),
                "email": user['email'],
                "username": user['username'],
                "created_at": user['created_at'].isoformat()
            }
        }), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/logout', methods=['POST'])
@jwt_required()
def logout():
    # In a real application, you might want to blacklist the token
    return jsonify({"message": "Logged out successfully"}), 200

@app.route('/api/change-password', methods=['PUT'])
@jwt_required()
def change_password():
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or not data.get('current_password') or not data.get('new_password'):
            return jsonify({"error": "Current password and new password are required"}), 400
        
        user = users_collection.find_one({"_id": ObjectId(current_user_id)})
        if not user:
            return jsonify({"error": "User not found"}), 404
        
        # Verify current password
        if not bcrypt.check_password_hash(user['password'], data['current_password']):
            return jsonify({"error": "Current password is incorrect"}), 401
        
        # Hash new password
        new_hashed_password = bcrypt.generate_password_hash(data['new_password']).decode('utf-8')
        
        # Update password in database
        users_collection.update_one(
            {"_id": ObjectId(current_user_id)},
            {
                "$set": {
                    "password": new_hashed_password,
                    "updated_at": datetime.utcnow()
                }
            }
        )
        
        return jsonify({"message": "Password updated successfully"}), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/agent-request', methods=['POST'])
@jwt_required()
def agent_request():
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        full_name = data.get('full_name')
        email = data.get('email')
        company = data.get('company')
        agent = data.get('agent')
        requirements = data.get('requirements')
        timestamp = datetime.utcnow()

        # Validate required fields
        if not full_name or not email or not agent or not requirements:
            return jsonify({"error": "full_name, email, agent, and requirements are required"}), 400

        # Store the request
        request_doc = {
            "user_id": current_user_id,
            "full_name": full_name,
            "email": email,
            "company": company,
            "agent": agent,
            "requirements": requirements,
            "timestamp": timestamp
        }
        result = agent_requests_collection.insert_one(request_doc)

        return jsonify({
            "message": "Agent request submitted successfully",
            "request_id": str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 