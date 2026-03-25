# Quick Start Guide - US_ADMIN_15 Frontend

## 5-Minute Setup

### Step 1: Prerequisites Check
Ensure you have:
- Node.js v16+ installed
- Backend running on port 3899

### Step 2: Install Dependencies
```bash
cd UserStoryImlementation/US_ADMIN_15/Frontend
npm install
```

### Step 3: Start the Application
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

### Step 4: Test the Functionality

1. **Activate a User:**
   - Enter a user ID (e.g., "1")
   - Click "Activate User"
   - See the success response on the right

2. **Inactivate a User:**
   - Enter the same user ID
   - Click "Inactivate User"
   - Check the response

3. **Block a User:**
   - Enter a user ID
   - Click "Block User"
   - View the result

## Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows PowerShell
netstat -ano | findstr :3000

# Kill the process using the port
taskkill /PID <PID> /F
```

### Backend Not Responding
- Verify backend is running: `npm start` from `US_ADMIN_15/Backend`
- Check it's on port 3899
- Look for CORS errors in browser console

### Dependencies Issues
```bash
rm -r node_modules package-lock.json
npm install
```

## Project Structure
```
Frontend/
├── public/           # Static files
├── src/
│   ├── components/   # React components
│   ├── services/     # API configuration
│   ├── hooks/        # Custom hooks
│   └── App.tsx       # Main app
└── package.json
```

## Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main application logic |
| `UserManagementForm.tsx` | User input form |
| `ResponseDisplay.tsx` | API response display |
| `api.config.ts` | Backend endpoint configuration |

## Available Scripts

```bash
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
npm eject      # Eject from create-react-app
```

## Next Steps

1. Modify `api.config.ts` if your backend runs on a different port
2. Customize styling in `.css` files
3. Add additional features as needed
4. Deploy to production using `npm run build`

---

For detailed information, see [README.md](README.md)
