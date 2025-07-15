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
app.config['CORS_HEADERS'] = 'Content-Type'

# Initialize extensions
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": ["https://agentstudio.in", "https://www.agentstudio.in"]
    }
})

# MongoDB connection
mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
client = MongoClient(mongo_uri)
db = client.get_default_database()  # Uses DB from URI, e.g., 'agentstudio'
users_collection = db['users']
agent_requests_collection = db['agent_requests']

@app.route('/')
def home():
    return jsonify({"message": "Flask Auth API with MongoDB - Backend is running!"})

@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        if not data or not data.get('email') or not data.get('password') or not data.get('username'):
            return jsonify({"error": "Email, password, and username are required"}), 400

        email = data['email'].lower().strip()
        password = data['password']
        username = data['username'].strip()

        existing_user = users_collection.find_one({"$or": [{"email": email}, {"username": username}]})
        if existing_user:
            return jsonify({"error": "User with this email or username already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        user_doc = {
            "email": email,
            "username": username,
            "password": hashed_password,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }

        result = users_collection.insert_one(user_doc)
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

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data or not data.get('email') or not data.get('password'):
            return jsonify({"error": "Email and password are required"}), 400

        email = data['email'].lower().strip()
        password = data['password']
        user = users_collection.find_one({"email": email})

        if not user or not bcrypt.check_password_hash(user['password'], password):
            return jsonify({"error": "Invalid email or password"}), 401

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

@app.route('/profile', methods=['GET'])
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

@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    return jsonify({"message": "Logged out successfully"}), 200

@app.route('/change-password', methods=['PUT'])
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

        if not bcrypt.check_password_hash(user['password'], data['current_password']):
            return jsonify({"error": "Current password is incorrect"}), 401

        new_hashed_password = bcrypt.generate_password_hash(data['new_password']).decode('utf-8')
        users_collection.update_one(
            {"_id": ObjectId(current_user_id)},
            {"$set": {"password": new_hashed_password, "updated_at": datetime.utcnow()}}
        )

        return jsonify({"message": "Password updated successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/agent-request', methods=['POST'])
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

        if not full_name or not email or not agent or not requirements:
            return jsonify({"error": "full_name, email, agent, and requirements are required"}), 400

        request_doc = {
            "user_id": current_user_id,
            "full_name": full_name,
            "email": email,
            "company": company,
            "agent": agent,
            "requirements": requirements,
            "timestamp": datetime.utcnow()
        }
        result = agent_requests_collection.insert_one(request_doc)

        return jsonify({
            "message": "Agent request submitted successfully",
            "request_id": str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
