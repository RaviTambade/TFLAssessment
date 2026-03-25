# US_ADMIN_14 - Project Documentation

This documentation covers the US_ADMIN_14 branch of the TFLComentor NodeJS project. It is designed for beginners and explains how the project is structured, how to run it, and how the main behavior works.

## Overview

The project is split into two parts:
- `Backend`: Node.js + Express API for updating user roles in MySQL.
- `Frontend`: React + TypeScript simple UI to test the backend endpoint.

## Goal

Implement and test the endpoint:
- `PUT /api/roles/updateUserRoles`
- Request: `{ user_id: string, role_ids: number[] }`
- Behavior: Replace existing roles for a user in `user_roles` table, insert new ones.

## Requirements

- Node.js (v14+)
- npm
- MySQL server reachable at credentials in `Backend/connectivity/db.js`

## Quick Setup (High Level)

### Backend
1. Open terminal.
2. `cd UserStoryImlementation/US_ADMIN_14/Backend`
3. `npm install` (if package.json exists)
4. Ensure MySQL is running and credentials are valid.
5. `node index.js`
6. Confirm output: `Server is running on port 3898` and `MySQL connected`.

### Frontend
1. Open another terminal.
2. `cd UserStoryImlementation/US_ADMIN_14/Frontend`
3. `npm install`
4. `npm start`
5. Confirm app is available at `http://localhost:3000`.

## How to Use

1. On the frontend form, type `User ID` and `Role IDs` (e.g., `1, 2, 3`).
2. Click "Update Roles".
3. Backend receives request, updates DB.
4. Frontend shows response status and data.

## Troubleshooting

- `Network Error` -> ensure backend is running and CORS is allowed (it is by default).
- `Cannot find module 'react'` -> run `npm install` in frontend.
- DB errors -> verify MySQL table exists and user has privileges.
- `ERR_NETWORK` -> check backend server and db connectivity.

---

Continue to `workflow.md` and `filewise_explaiation.md` for more details.
