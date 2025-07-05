#!/usr/bin/env python3
"""
Simple environment setup for Flask Authentication Backend
Generates secret keys and creates .env file
"""

import secrets
import string
import os

def generate_secret_key(length=32):
    """Generate a secure random secret key"""
    alphabet = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def main():
    print("🔐 Flask Auth Backend - Environment Setup")
    print("=" * 40)
    
    # Generate keys
    flask_secret = generate_secret_key(32)
    jwt_secret = generate_secret_key(64)
    
    # Create .env file
    env_content = f"""# Flask Configuration
SECRET_KEY={flask_secret}
JWT_SECRET_KEY={jwt_secret}

# MongoDB Configuration (Local)
MONGO_URI=mongodb://localhost:27017/

# Flask Environment
FLASK_ENV=development
FLASK_DEBUG=True
"""
    
    with open('.env', 'w') as f:
        f.write(env_content)
    
    print("✅ .env file created with secure keys!")
    print("🚀 You can now start the backend with: python app.py")

if __name__ == "__main__":
    main() 