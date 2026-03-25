# US_ADMIN_14 - React TypeScript Frontend

This is a React TypeScript frontend application for testing the User Story **US_ADMIN_14** - Roles Management functionality.

## Project Structure

```
Frontend/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── RolesUpdateForm.tsx    # Form component for updating roles
│   │   ├── RolesUpdateForm.css    # Form styles
│   │   ├── ResponseDisplay.tsx    # Component to display API responses
│   │   └── ResponseDisplay.css    # Response display styles
│   ├── App.tsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.tsx           # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## Features

- ✅ **React 18** with TypeScript support
- ✅ **Form-based UI** for testing the roles update endpoint
- ✅ **Real-time API calls** to the backend running on port 3898
- ✅ **Response visualization** with success/failure indicators
- ✅ **Responsive design** that works on desktop and mobile devices
- ✅ **Error handling** with user-friendly messages
- ✅ **Loading states** during API requests

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- The backend server (US_ADMIN_14/Backend) running on port 3898

## Installation

1. Navigate to the Frontend directory:

   ```bash
   cd UserStoryImlementation/US_ADMIN_14/Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## API Endpoint

The frontend connects to the following backend endpoint:

- **URL**: `http://localhost:3898/api/roles/updateUserRoles`
- **Method**: PUT
- **Content-Type**: application/json
- **Request Body**:
  ```json
  {
    "user_id": "string",
    "role_ids": [number]
  }
  ```

## Usage

1. **Start the backend server**:

   ```bash
   cd ../Backend
   node index.js
   ```

2. **In another terminal, start the frontend**:

   ```bash
   cd ../Frontend
   npm start
   ```

3. **Using the Frontend**:
   - Enter a User ID (e.g., "user123")
   - Enter Role IDs as comma-separated numbers (e.g., "1, 2, 3")
   - Click "Update Roles" button
   - View the API response in the response panel

## Example Test Cases

### Test Case 1: Valid Request

- **User ID**: `user001`
- **Role IDs**: `1, 2, 3`

### Test Case 2: Single Role

- **User ID**: `admin-user`
- **Role IDs**: `5`

### Test Case 3: Multiple Roles

- **User ID**: `dept-manager`
- **Role IDs**: `10, 20, 30, 40`

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Axios**: HTTP client for API requests
- **CSS3**: Styling with animations and responsive design

## Components

### RolesUpdateForm

Renders a form with two input fields:

- User ID input field
- Role IDs input field (comma-separated)
- Submit button with loading state
- Reset button to clear the form

### ResponseDisplay

Displays the API response with:

- Success/Error status badge
- Response message
- Raw JSON response data
- Color-coded styling based on success/failure

### App

Main component that:

- Manages form state and API calls
- Handles errors gracefully
- Passes data between components

## Error Handling

The application handles various error scenarios:

- **Network errors**: Displays connection error messages
- **Server errors**: Shows server response errors
- **Validation errors**: Client-side validation before API calls
- **Loading states**: Prevents multiple submissions during request

## Styling

The application features:

- **Gradient background** (purple to blue)
- **Smooth animations** for component transitions
- **Responsive layout** that adapts to different screen sizes
- **Accessible form controls** with proper labels
- **Clear visual feedback** for user interactions

## Future Enhancements

Possible improvements for this testing application:

- Add ability to fetch/list current user roles
- Implement role creation/deletion features
- Add data validation on the backend
- Implement authentication/authorization
- Add more detailed error messages
- Create additional test scenarios

## Troubleshooting

### CORS Error

If you see CORS errors, ensure the backend has CORS enabled (it should by default).

### Connection Refused

Ensure the backend server is running on port 3898:

```bash
cd ../Backend
node index.js
```

### Port Already in Use

If port 3000 is already in use, the app will automatically prompt you to use a different port.

## License

This project is part of the TFL Comentor Node.js Team training materials.
