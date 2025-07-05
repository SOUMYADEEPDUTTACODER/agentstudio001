# Flask Authentication API Backend

A clean, API-only Flask backend for authentication with MongoDB integration. Designed to work with React frontend.

## 🏗️ Project Structure

```
flask-auth-backend/
├── app.py              # Main Flask application (API only)
├── requirements.txt    # Python dependencies
├── setup_env.py       # Environment setup script
├── env_template.txt   # Environment variables template
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Setup Environment
```bash
python setup_env.py
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Start Backend
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status |
| POST | `/api/signup` | User registration |
| POST | `/api/login` | User login |
| GET | `/api/profile` | Get user profile |
| PUT | `/api/change-password` | Change password |
| POST | `/api/logout` | User logout |

## 🔧 Configuration

The `.env` file contains:
- `SECRET_KEY`: Flask secret key
- `JWT_SECRET_KEY`: JWT token secret
- `MONGO_URI`: MongoDB connection string

## 🎯 Frontend Integration

This backend is designed to work with the React frontend in `../ai-agent-vista/`.

- Frontend runs on: `http://localhost:5173`
- Backend API on: `http://localhost:5000`
- CORS is configured for cross-origin requests

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input validation
- CORS support
- Environment variable configuration

## 📊 Database

- MongoDB with `auth_db` database
- `users` collection for user data
- Automatic collection creation

## 🛠️ Development

For development, ensure:
1. MongoDB is running locally
2. Python dependencies are installed
3. `.env` file is configured
4. Frontend is running on port 5173

## 📚 Documentation

- [Frontend Integration Guide](../ai-agent-vista/FRONTEND_INTEGRATION.md)
- [API Documentation](#api-endpoints) 