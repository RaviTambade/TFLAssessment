# Frontend - API Testing Interface

This is a React TypeScript frontend application designed to test the User Profile API from the backend.

## Features

- Input field to enter User ID
- Fetch user profile from the API
- Display the raw JSON response
- Formatted display of user profile details
- Error handling for failed requests

## API Endpoint

The frontend calls: `GET http://localhost:4001/api/userprofile/getUserProfile/{userId}`

## Running the Application

1. Ensure the backend is running on port 4001
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the browser to the displayed URL (usually http://localhost:5173)

## Project Structure

- `src/App.tsx` - Main component with API testing interface
- `src/App.css` - Styling for the application
- `src/main.tsx` - Entry point
- `src/index.css` - Global styles