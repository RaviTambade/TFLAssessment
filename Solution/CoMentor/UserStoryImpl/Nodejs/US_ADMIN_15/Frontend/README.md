# US_ADMIN_15 Frontend

React TypeScript frontend for testing US_ADMIN_15 user management functionality.

## Overview

This frontend application allows administrators to manage user statuses by:
- **Activating** users
- **Inactivating** users  
- **Blocking** users

## Project Structure

```
src/
├── components/
│   ├── UserManagementForm.tsx       # Form component for user management operations
│   ├── UserManagementForm.css
│   ├── ResponseDisplay.tsx           # Component to display API responses
│   └── ResponseDisplay.css
├── services/
│   └── api.config.ts                # API configuration and service methods
├── hooks/
│   └── useApi.ts                    # Custom hook for handling API calls
├── App.tsx                          # Main application component
├── App.css
├── index.tsx                        # React entry point
└── index.css
```

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd UserStoryImlementation/US_ADMIN_15/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Ensure the backend is running on port 3899:
```bash
cd ../Backend
npm install
npm start
```

### Running the Frontend

From the Frontend directory:
```bash
npm start
```

The application will open at `http://localhost:3000` and connect to the backend at `http://localhost:3899`.

## API Endpoints

The frontend communicates with the following endpoints:

| Action | Method | Endpoint | Payload |
|--------|--------|----------|---------|
| Activate | PUT | `/api/users/activateUser` | `{ id: "userId" }` |
| Inactivate | PUT | `/api/users/inactivateUser` | `{ id: "userId" }` |
| Block | PUT | `/api/users/blockUser` | `{ id: "userId" }` |

## Features

- **User-Friendly Interface**: Clean, intuitive form for entering user IDs
- **Multiple Actions**: Three buttons for different user management operations
- **Real-time Feedback**: Loading states and error handling
- **Response Display**: Shows API responses in JSON format
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript Support**: Full type safety throughout the application

## Technologies Used

- **React** 18.3.1
- **TypeScript** 4.9.5
- **Axios** 1.13.6 (HTTP client)
- **CSS3** (Styling with Flexbox/Grid)

## Usage

1. Enter a User ID in the input field
2. Click one of the action buttons:
   - **Activate User**: Changes user status to ACTIVE
   - **Inactivate User**: Changes user status to INACTIVE
   - **Block User**: Changes user status to BLOCKED
3. View the response in the right panel

## Error Handling

The application handles:
- Network errors
- Invalid user IDs
- Server errors (5xx)
- Client errors (4xx)

All errors are displayed clearly to the user with error messages.

## Development

### Building

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

### Testing

```bash
npm test
```

Runs the test suite (if configured).

## Configuration

API Base URL and endpoints are configured in `src/services/api.config.ts`. Modify if needed:

```typescript
export const API_CONFIG = {
  BASE_URL: 'http://localhost:3899',
  ENDPOINTS: {
    ACTIVATE_USER: '/api/users/activateUser',
    INACTIVATE_USER: '/api/users/inactivateUser',
    BLOCK_USER: '/api/users/blockUser',
  },
};
```

## Notes

- Ensure the backend server is running before starting the frontend
- CORS is enabled on the backend to allow frontend requests
- All API calls are PUT requests with JSON payloads
- The backend runs on port 3899 by default

## License

MIT
