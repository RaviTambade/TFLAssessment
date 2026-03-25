# US_ADMIN_14 File-wise Explanation (Beginner-friendly)

## Top-level folders
- `Backend/` : API backend logic (Node.js + Express + MySQL).
- `Frontend/` : UI for testing the endpoint (React + TypeScript).

## Backend files

### `index.js`
- Application entry point.
- Sets up Express server, CORS, body parser.
- Defines route prefix: `/api/roles`.
- Starts server on port `3898`.
- Constructs app with dependency injection:
  - repository -> service -> controller -> router.

### `connectivity/db.js`
- Defines MySQL connection settings.
- Exports a `connection` object used by repository.
- Prints success/failure to console.

### `routers/roles-router.js`
- Creates Express router.
- Defines one route:
  - `PUT /updateUserRoles` → controller method `updateUserRoles`.

### `controllers/roles-controller.js`
- Controller class with business entry point.
- `updateUserRoles(req, res)` extracts request data and calls service.
- Sends HTTP 500 on error or JSON success response.

### `services/roles-services.js`
- Service class that can contain business logic.
- Currently forwards call to repository.

### `repositories/roles-repository.js`
- Handles database queries in transaction:
  1. delete existing user roles for user
  2. insert each new role with `ON DUPLICATE KEY UPDATE`
  3. commit or rollback on errors
- This file is where SQL is defined.

## Frontend files

### `package.json`
- Lists dependencies (`react`, `axios`, etc.).
- UIS scripts: `start`, `build`, etc.

### `tsconfig.json`
- TypeScript configuration for compile options.

### `public/index.html`
- HTML shell with `<div id="root">`.

### `src/index.tsx`
- React DOM render entry.
- Renders `<App />`.

### `src/App.tsx`
- Main component (container + state management).
- Stores `loading`, `error`, and API `response`.
- `handleUpdateRoles` sends request to backend and handles reply.
- Renders `RolesUpdateForm` and `ResponseDisplay`.

### `src/components/RolesUpdateForm.tsx`
- Form component for user input (User ID + Role IDs).
- Validates inputs and parses role IDs into array.
- Calls `onSubmit` prop with parsed values.
- Shows loading state and has reset button.

### `src/components/ResponseDisplay.tsx`
- Displays API response.
- Shows success badge or error badge.
- Dumps JSON response data for visibility.

### `src/App.css`, `src/index.css`, component CSS files
- Visual styling for layout, colors, responsiveness.

## Data flows

1. User sends request from frontend.
2. Backend receives and updates database.
3. Response flows back to frontend.
4. UI updates successful/failure message.

## Why this structure is beginner-friendly
- Clear separation of concerns:
  - `Backend` handles data and business behavior.
  - `Frontend` handles interface and user actions.
- Small number of files with single purpose.
- Named functions and comments help understand quickly.
- Designed for easy modification (e.g., add validation, new API).

## How to add a new feature (example)

1. Add new route in `routers`.
2. Add a controller method in `controllers`.
3. Add service method in `services`.
4. Add repository query in `repositories`.
5. Use frontend button/form to call new backend route.
