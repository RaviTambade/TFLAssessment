# US_ADMIN_14 Workflow

This file explains step-by-step how the data flows from the browser to the database, and what each module does.

## 1. User action (Frontend)

- User opens `http://localhost:3000`.
- User fills:
  - User ID
  - Role IDs (comma-separated string)
- User clicks `Update Roles`.

## 2. Frontend request

- Component: `src/App.tsx`
- `handleUpdateRoles` builds payload:
  - `user_id` (string)
  - `role_ids` (number array)
- Sends `PUT` to `http://localhost:3898/api/roles/updateUserRoles` via axios.

## 3. Backend receives request

- Entry point: `Backend/index.js`.
- Uses Express, body-parser, and CORS.
- Router: `Backend/routers/roles-router.js`.
- Endpoint: `PUT /updateUserRoles` calls `controller.updateUserRoles`.

## 4. Controller logic

- File: `Backend/controllers/roles-controller.js`.
- Extracts `user_id`, `role_ids` from `req.body`.
- Calls service method:
  - `rolesService.updateUserRoles(user_id, role_ids, callback)`.

## 5. Service layer

- File: `Backend/services/roles-services.js`.
- Forwarded to repository method to interact with DB.

## 6. Repository / DB operations

- File: `Backend/repositories/roles-repository.js`.
- Uses MySQL connection from `Backend/connectivity/db.js`.
- Transaction steps:
  1. `DELETE FROM user_roles WHERE user_id = ?` (clear existing roles).
  2. `INSERT ... ON DUPLICATE KEY UPDATE` for new role IDs.
  3. Commit/rollback on error.

## 7. Response path

- On success: callback returns `{ message: 'User roles updated successfully' }`.
- On failure: callback returns error via `res.status(500).json(err)`.

## 8. Frontend success/failure display

- On success:
  - `App` sets `response` object and displays `ResponseDisplay`.
- On error:
  - `App` sets `error` and `response` (with failure). GUI shows red banner.

---

## Layer diagram (simplified)

Use this diagram to quickly understand request flow and component roles.

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User Browser  │────▶│ RolesUpdateForm │────▶│ App.handleUpdate│
│                 │     │                 │     │ Roles           │
│  (localhost:3000) │     │  (React Form)  │     │  (React State) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         │                                               │
         ▼                                               ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Backend Express │────▶│ roles-router.js │────▶│ roles-controlle │
│                 │     │                 │     │ r.js            │
│  (localhost:3898) │     │  (PUT /updateU │     │  (Business Log │
│                 │     │ serRoles)       │     │ ic)             │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         │                                               │
         ▼                                               ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ roles-services. │────▶│ roles-repositor│────▶│ MySQL Database │
│ js              │     │ y.js           │     │                 │
│  (Service Layer)│     │  (Data Access) │     │  (user_roles    │
│                 │     │                 │     │   table)        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                                               │
         │                                               │
         ▼                                               ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ HTTP Response   │◀────│ ResponseDisplay │◀────│ App (UI Update)│
│                 │     │                 │     │                 │
│  (JSON Success/ │     │  (React Display)│     │  (React State) │
│   Error)        │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**Flow Steps:**

1. User fills form → RolesUpdateForm
2. Form submit → App.handleUpdateRoles
3. HTTP PUT → Backend Express
4. Router → Controller → Service → Repository
5. Repository → MySQL (DELETE + INSERT)
6. MySQL response → Repository → Service → Controller → Router
7. HTTP response → App.handleUpdateRoles
8. UI update → ResponseDisplay

Frontend (React)
└── App.tsx
└── RolesUpdateForm
└── ResponseDisplay
-> PUT http://localhost:3898/api/roles/updateUserRoles
Backend (Express)
└── index.js
└── roles-router.js
└── roles-controller.js
└── roles-services.js
└── roles-repository.js
└── connectivity/db.js (MySQL)

---

## Daily workflow for contributors

1. Start DB and backend.
2. Start frontend.
3. Try via UI or Postman to ensure endpoint works.
4. Change code in controllers/services/repository for feature updates.
5. Test end-to-end.
