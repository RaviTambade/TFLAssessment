# US_ADMIN_15 Frontend - File Structure

## Directory Overview

```
US_ADMIN_15/Frontend/
│
├── public/
│   └── index.html                 # Main HTML entry point
│
├── src/
│   │
│   ├── components/
│   │   ├── UserManagementForm.tsx     # Form component with action buttons
│   │   ├── UserManagementForm.css     # Styling for form component
│   │   ├── ResponseDisplay.tsx        # Response display component
│   │   └── ResponseDisplay.css        # Styling for response display
│   │
│   ├── services/
│   │   └── api.config.ts          # API endpoints and request configurations
│   │
│   ├── hooks/
│   │   └── useApi.ts              # Custom hooks for API calls and form state
│   │
│   ├── App.tsx                    # Root application component
│   ├── App.css                    # Global application styling
│   ├── index.tsx                  # React DOM render entry point
│   └── index.css                  # Global CSS styles
│
├── .gitignore                     # Git ignore rules
├── package.json                   # npm dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── README.md                      # Detailed project documentation
├── QUICKSTART.md                  # Quick start guide
└── FILE_STRUCTURE.md             # This file

```

## File Descriptions

### Public Files

**`public/index.html`**
- Main HTML template
- Contains the root div for React rendering
- Sets page title and meta tags

### Source Files

#### Components

**`components/UserManagementForm.tsx`**
- React functional component for user management form
- Props:
  - `onSubmit`: Callback function for form submission
  - `isLoading`: Boolean to disable controls during API calls
- Features:
  - User ID input field
  - Three action buttons: Activate, Inactivate, Block
  - Clear button to reset form
  - Input validation

**`components/UserManagementForm.css`**
- Styles for user management form
- Button styling for different actions
- Input field styling
- Responsive design for mobile

**`components/ResponseDisplay.tsx`**
- Displays API responses in formatted JSON
- Props:
  - `response`: API response object
- Features:
  - Success/Error status badge
  - Response message display
  - JSON data formatting
  - Scroll for large responses

**`components/ResponseDisplay.css`**
- Styles for response display component
- Success and error styling
- JSON syntax highlighting-friendly colors
- Responsive layout

#### Services

**`services/api.config.ts`**
- Centralized API configuration
- Exports:
  - `API_CONFIG`: Base URL and endpoints
  - `UserService`: Methods for each user management action
- Defines TypeScript interfaces for:
  - Request payloads
  - Response structures
  - Error types

#### Hooks

**`hooks/useApi.ts`**
- Custom React hook for API calls
- Functions:
  - `useApi<T>()`: Generic hook for handling API states
  - `useFormState<T>()`: Hook for form state management
- Features:
  - Automatic loading state management
  - Error handling
  - Type-safe callbacks

#### Root Files

**`App.tsx`**
- Root component of the application
- State management:
  - API responses
  - Loading states
  - Error messages
- Features:
  - Handles user management requests
  - Manages response display
  - Error handling with user feedback
- Layout: Header, Form section, Response section

**`App.css`**
- Global application styling
- Layout with CSS Grid
- Header styling
- Gradient background
- Responsive design

**`index.tsx`**
- React 18 entry point
- Renders App component to root DOM element
- Strict mode enabled for development warnings

**`index.css`**
- Global/base CSS styles
- Font configuration
- Default body styles
- Box-sizing reset

### Configuration Files

**`package.json`**
- npm project metadata
- Dependencies:
  - react ^18.3.1
  - react-dom ^18.3.1
  - axios ^1.13.6
  - react-router-dom ^7.13.2
  - react-scripts 5.0.1
- Dev dependencies for TypeScript
- npm scripts: start, build, test, eject

**`tsconfig.json`**
- TypeScript compiler configuration
- Target: ES2020
- JSX: react-jsx
- Strict mode enabled
- Module resolution: node
- Strict null checks enabled

### Documentation Files

**`README.md`**
- Comprehensive project documentation
- Features, setup, API endpoints
- Technologies used
- Development guidelines

**`QUICKSTART.md`**
- Quick setup guide
- 5-minute installation
- Basic usage instructions
- Troubleshooting tips

**`FILE_STRUCTURE.md`** (This file)
- Detailed file organization
- Component descriptions
- File purposes and exports

## Component Communication Flow

```
App.tsx (State Management)
  ├── handleUserManagement()
  └── Renders:
      ├── UserManagementForm.tsx
      │   └── Props: onSubmit, isLoading
      │   └── Calls: handleUserManagement()
      └── ResponseDisplay.tsx
          └── Props: response
          └── Shows: API responses
```

## API Integration Flow

```
UserManagementForm
    ↓ (user input)
App.handleUserManagement()
    ↓ (axios PUT request)
Backend API
    ↓ (response)
ResponseDisplay
```

## Dependencies Graph

```
App.tsx
  ├── React, axios
  ├── UserManagementForm.tsx
  │   └── React
  ├── ResponseDisplay.tsx
  │   └── React
  └── api.config.ts (via axios)
```

## Installation & Usage

### Install
```bash
npm install
```

### Development
```bash
npm start
```

### Build
```bash
npm run build
```

## Notes

- All components are functional components with hooks
- TypeScript strict mode is enabled
- CORS enabled on backend to allow frontend requests
- Responsive design supports mobile and desktop
- No external UI library (vanilla CSS styling)
