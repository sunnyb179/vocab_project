
# Vocabulary Web App

This project is a modular web application for learning and managing vocabulary. It is built using:
- **Frontend**: Next.js (React)
- **Backend**: Node.js with Express
- **Database**: Cloud Firestore

## Features
1. **Authentication**
   - Firebase Authentication (Login, Register, Logout).
2. **Words**
   - Persistent and refreshing words displayed on all pages.
   - Words fetched from the backend API.
3. **Modular Design**
   - Ready for future extensions like quizzes, progress tracking, etc.

## Directory Structure

### Backend
```plaintext
backend/
├── config/                # Configurations (Firebase, etc.)
├── controllers/           # API logic for routes
├── middlewares/           # Middleware for authentication, validation, etc.
├── models/                # Database models (optional for Firestore integration)
├── routes/                # API route definitions
├── services/              # Reusable business logic
├── utils/                 # Helper utilities
├── .env                   # Environment variables
└── server.js              # Main server entry point
```

### Frontend
```plaintext
frontend/
├── public/                # Static assets
├── src/                   # Source files
│   ├── app/               # Next.js pages and layouts
│   ├── components/        # Reusable UI components
│   ├── contexts/          # Global state management
│   ├── services/          # API interaction logic
│   ├── styles/            # Global and component styles
│   └── firebase.ts        # Firebase initialization
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Setup Instructions

### Prerequisites
1. Node.js (v16+ recommended)
2. Firebase account and project set up.
3. Tailwind CSS for styling.

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Add your `firebaseServiceAccountKey.json` file to `backend/config/`.
   - Create a `.env` file with the following content:
     ```env
     FIREBASE_API_KEY=<Your_Firebase_API_Key>
     FIREBASE_AUTH_DOMAIN=<Your_Auth_Domain>
     FIREBASE_PROJECT_ID=<Your_Project_ID>
     FIREBASE_STORAGE_BUCKET=<Your_Storage_Bucket>
     FIREBASE_MESSAGING_SENDER_ID=<Your_Sender_ID>
     FIREBASE_APP_ID=<Your_App_ID>
     ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Add your Firebase configuration in `src/firebase.ts`.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Extending the Project
- **New Modules**: Add new backend routes and frontend pages under `routes/` and `src/app/`, respectively.
- **Database Integration**: Use Firestore collections for storing and managing words, users, and progress data.
- **Testing**: Implement unit and integration tests using Jest or a similar framework.

## License
This project is licensed under the MIT License.
