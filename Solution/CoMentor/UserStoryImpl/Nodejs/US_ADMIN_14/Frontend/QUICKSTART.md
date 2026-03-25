# Quick Start Guide

## Setup in 3 Steps

### Step 1: Install Dependencies

```bash
cd UserStoryImlementation/US_ADMIN_14/Frontend
npm install
```

### Step 2: Start the Backend

```bash
cd ../Backend
node index.js
```

You should see: `Server is running on port 3898`

### Step 3: Start the Frontend

In another terminal:

```bash
cd ../Frontend
npm start
```

The app will automatically open at `http://localhost:3000`

## Testing the API

1. **Enter User ID**: Type any user ID (e.g., "user123")
2. **Enter Role IDs**: Type comma-separated role IDs (e.g., "1, 2, 3")
3. **Click "Update Roles"**: Submit the form
4. **View Response**: The API response will be displayed below

## What to Expect

- ✅ Test that the backend correctly receives and processes role updates
- ✅ Verify the API response structure
- ✅ Check error handling and validation
- ✅ Confirm CORS is working properly

## Need Help?

See the full [README.md](./README.md) for detailed documentation.
