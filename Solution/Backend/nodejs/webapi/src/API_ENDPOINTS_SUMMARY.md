# TFL Assessment API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api
```

---

## 1. Authentication Endpoints (`/api/auth/`)

### 1.1 User Login

- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticate user with username, password, and role
- **Input Format**:
  ```json
  {
    "username": "string",
    "password": "string",
    "role": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Validation successful",
    "status": 200,
    "data": {
      "userid": "number",
      "firstname": "string",
      "lastname": "string",
      "rolename": "string",
      "role_id": "number"
    }
  }
  ```

### 1.2 User Registration

- **Endpoint**: `POST /api/auth/register`
- **Description**: Register a new user
- **Input Format**:
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "contact": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "insertId": "number"
    }
  }
  ```

### 1.3 Change Password

- **Endpoint**: `PUT /api/auth/changepassword`
- **Description**: Change user password
- **Input Format**:
  ```json
  {
    "id": "number",
    "newPassword": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Password updated successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

---

## 2. User Management Endpoints (`/api/users/`)

### 2.1 Get All Users

- **Endpoint**: `GET /api/users/getAllUsers`
- **Description**: Retrieve list of all users
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Users retrive successfully",
    "status": 200,
    "data": [
      {
        "user_id": "number",
        "full_name": "string",
        "created_at": "DateTime",
        "status": "string",
        "role_name": "string"
      }
    ]
  }
  ```

### 2.2 Get User Details By ID

- **Endpoint**: `GET /api/users/:userId`
- **Description**: Retrieve complete user details by user ID
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User details retrieved successfully",
    "status": 200,
    "data": {
      "user_id": "number",
      "contact": "string",
      "status": "string",
      "first_name": "string",
      "last_name": "string",
      "gender": "string",
      "date_of_birth": "DateTime",
      "email": "string",
      "enrollment_year": "number",
      "passing_year": "number",
      "percentage": "number",
      "college_name": "string",
      "skills": "string"
    }
  }
  ```

### 2.3 Get User Personal Details

- **Endpoint**: `GET /api/users/:userId/personal`
- **Description**: Retrieve user's personal information
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Personal information retrive successfully",
    "status": 200,
    "data": {
      "first_name": "string",
      "last_name": "string",
      "gender": "string",
      "date_of_birth": "DateTime",
      "email": "string",
      "address": "string",
      "pincode": "string",
      "contact": "string"
    }
  }
  ```

### 2.4 Get User Academic Details

- **Endpoint**: `GET /api/users/:userId/academic`
- **Description**: Retrieve user's academic information
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Academic information retrive successfully",
    "status": 200,
    "data": {
      "enrollment_year": "number",
      "passing_year": "number",
      "percentage": "number",
      "college_name": "string",
      "stream_name": "string",
      "specialization": "string"
    }
  }
  ```

### 2.5 Get User Professional Details

- **Endpoint**: `GET /api/users/:userId/professional`
- **Description**: Retrieve user's professional information
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Professinal information retrive successfully",
    "status": 200,
    "data": {
      "company_name": "string",
      "job_title": "string",
      "employment_type": "string",
      "start_date": "DateTime",
      "end_date": "DateTime | null",
      "is_current_job": "number",
      "experience_years": "number",
      "location": "string",
      "skills": "string"
    }
  }
  ```

### 2.6 Update User Personal Information

- **Endpoint**: `PATCH /api/users/:userId/personal-info`
- **Description**: Update user's personal details
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**:
  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "email": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Personal information Update successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

### 2.7 Update User Professional Information

- **Endpoint**: `PATCH /api/users/:userId/professional-info`
- **Description**: Update user's professional details
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**:
  ```json
  {
    "job_title": "string",
    "company_name": "string",
    "experience_years": "number"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Professional information Update successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

### 2.8 Update User Academic Information

- **Endpoint**: `PATCH /api/users/:userId/academic-info`
- **Description**: Update user's academic details
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**:
  ```json
  {
    "education_level": "string",
    "institution": "string",
    "specialization": "string",
    "gpa": "number",
    "graduation_year": "number"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Academic information Update successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

### 2.9 Update User Status

- **Endpoint**: `PATCH /api/users/:userId/status`
- **Description**: Update user's status
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**:
  ```json
  {
    "user_id": "number",
    "status": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Status update successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

---

## 3. Role Management Endpoints (`/api/roles/`)

### 3.1 Get All Roles

- **Endpoint**: `GET /api/roles/getAllRoles`
- **Description**: Retrieve all available roles
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Retrive roles successful",
    "status": 200,
    "data": [
      {
        "role_id": "number",
        "role_name": "string",
        "description": "string"
      }
    ]
  }
  ```

### 3.2 Create New Role

- **Endpoint**: `POST /api/roles/insert`
- **Description**: Create a new role
- **Input Format**:
  ```json
  {
    "roleName": "string",
    "description": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "role added successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "insertId": "number"
    }
  }
  ```

### 3.3 Update Role

- **Endpoint**: `PUT /api/roles/update/:id`
- **Description**: Update an existing role
- **Parameters**:
  - `id` (URL parameter): Role ID (number)
- **Input Format**:
  ```json
  {
    "roleName": "string",
    "description": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "role updated successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

### 3.4 Get User Roles By User ID

- **Endpoint**: `GET /api/roles/getUserRolesByUserId/:userId`
- **Description**: Retrieve all active roles assigned to a user
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User's roles retrieved successfully",
    "status": 200,
    "data": [
      {
        "user_id": "number",
        "role_name": "string"
      }
    ]
  }
  ```

### 3.5 Get Users By Role ID

- **Endpoint**: `GET /api/roles/getUsersByRoleId/:roleId`
- **Description**: Retrieve all active users with a specific role
- **Parameters**:
  - `roleId` (URL parameter): Role ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Users retrieved successfully",
    "status": 200,
    "data": [
      {
        "user_id": "number",
        "full_name": "string",
        "role_id": "number",
        "role_name": "string"
      }
    ]
  }
  ```

### 3.6 Assign Role to User

- **Endpoint**: `POST /api/roles/assignRole/:userId/role/:roleId`
- **Description**: Assign a role to a user
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
  - `roleId` (URL parameter): Role ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Role assigned successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "insertId": "number",
      "changedRows": "number"
    }
  }
  ```

### 3.7 Unassign Role from User

- **Endpoint**: `PUT /api/roles/unAssignRole/:userId/role/:roleId`
- **Description**: Remove a role from a user by marking it inactive
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
  - `roleId` (URL parameter): Role ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Role unassigned successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "changedRows": "number"
    }
  }
  ```

---

## 4. User Activity Endpoints (`/api/useractivity/`)

### 4.1 User Login Activity

- **Endpoint**: `POST /api/useractivity/login/:userId/role/:roleId`
- **Description**: Record user login activity
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
  - `roleId` (URL parameter): Role ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Validation successful",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "insertId": "number",
      "changedRows": "number"
    }
  }
  ```

### 4.2 User Logout Activity

- **Endpoint**: `PUT /api/useractivity/logout/:userId/role/:roleId`
- **Description**: Record user logout activity
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
  - `roleId` (URL parameter): Role ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Logout entry recorded successfully",
    "status": 200,
    "data": {
      "affectedRows": "number",
      "insertId": "number",
      "changedRows": "number"
    }
  }
  ```

### 4.3 Get Recent Login Count

- **Endpoint**: `GET /api/useractivity/logins-24h`
- **Description**: Get total logins in the last 24 hours
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Login statistics retrieved",
    "status": 200,
    "data": {
      "totalLogins24Hours": "number",
      "timestamp": "DateTime"
    }
  }
  ```

### 4.4 Get Average Session Time

- **Endpoint**: `GET /api/useractivity/average-time`
- **Description**: Get average session duration
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Average session time retrieved",
    "status": 200,
    "data": {
      "avgSessionTime": "string"
    }
  }
  ```

### 4.5 Get Active Sessions Count

- **Endpoint**: `GET /api/useractivity/active-count`
- **Description**: Get number of currently active sessions
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Total active sessions retrieved",
    "status": 200,
    "data": {
      "totalActiveSessions": "number",
      "timestamp": "DateTime"
    }
  }
  ```

### 4.6 Get Live Users

- **Endpoint**: `GET /api/useractivity/active-users`
- **Description**: Get list of currently active users
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Active users retrieved",
    "status": 200,
    "data": [
      {
        "userId": "number",
        "fullName": "string",
        "loginTime": "DateTime",
        "status": "string"
      }
    ]
  }
  ```

### 4.7 Get All User Activity Logs

- **Endpoint**: `GET /api/useractivity/logs`
- **Description**: Get all user activity logs with optional name filter
- **Query Parameters**:
  - `name` (optional): Filter by user name
  - `page` (optional): Page number
  - `limit` (optional): Records per page
- **Input Format**: Query parameters only
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Session logs retrieved successfully",
    "status": 200,
    "data": [
      {
        "session_id": "number",
        "user_id": "number",
        "full_name": "string",
        "role": "string",
        "login_time": "DateTime",
        "logout_time": "DateTime | null",
        "session_duration_minutes": "number"
      }
    ]
  }
  ```

---

## 5. Mentor Management Endpoints (`/api/mentors/`)

### 5.1 Get Mentee Count

- **Endpoint**: `GET /api/mentors/:id/mentees/count`
- **Description**: Get the number of mentees assigned to a mentor
- **Parameters**:
  - `id` (URL parameter): Mentor ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Mentees count retrieved successfully",
    "status": 200,
    "data": [
      {
        "menteeCount": "number"
      }
    ]
  }
  ```

### 5.2 Get Mentees List

- **Endpoint**: `GET /api/mentors/:id/mentees`
- **Description**: Get list of all mentees for a specific mentor
- **Parameters**:
  - `id` (URL parameter): Mentor ID (number)
- **Input Format**: No body required
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Mentees retrieved successfully",
    "status": 200,
    "data": [
      {
        "mentee_id": "number",
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "contact": "string",
        "status": "string",
        "assignment_date": "Date"
      }
    ]
  }
  ```

---

## Common Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "status": "number",
  "data": null
}
```

---

## Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request parameters |
| 401 | Unauthorized - Invalid credentials |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Server error |

---

## Notes

- All timestamps are in ISO-8601 format.
- User IDs and Role IDs are numeric identifiers.
- `PATCH` is used for partial updates.
- `PUT` is used for full updates or status changes.
- The documentation uses a consistent `success`, `message`, `status`, and `data` response envelope for all endpoints.
