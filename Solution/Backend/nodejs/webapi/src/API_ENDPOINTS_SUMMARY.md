# TFL Assessment API Endpoints Summary

## Base URL
```
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
- **Error Response**:
  ```json
  {
    "success": false,
    "message": "Invalid credentials",
    "status": 401
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
    "data": {}
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
    "status": 200
  }
  ```
- **Error Response**:
  ```json
  {
    "success": false,
    "message": "User not found",
    "status": 404
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
    "message": "Users retrieve successfully",
    "status": 200,
    "data": [
      {
        "user_id": "number",
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "contact": "string",
        "status": "string"
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
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "contact": "string",
      "status": "string",
      "personal_info": {},
      "academic_info": {},
      "professional_info": {}
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
    "message": "User Personal information retrieve successfully",
    "status": 200,
    "data": {
      "user_id": "number",
      "first_name": "string",
      "last_name": "string",
      "email": "string",
      "contact": "string",
      "dob": "string (YYYY-MM-DD)",
      "address": "string"
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
    "message": "User Academic information retrieve successfully",
    "status": 200,
    "data": {
      "user_id": "number",
      "education_level": "string",
      "institution": "string",
      "specialization": "string",
      "gpa": "number",
      "graduation_year": "number"
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
    "message": "User Professional information retrieve successfully",
    "status": 200,
    "data": {
      "user_id": "number",
      "job_title": "string",
      "company": "string",
      "experience_years": "number",
      "skills": "string",
      "linkedin_url": "string"
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
    "email": "string",
    "contact": "string",
    "dob": "string (YYYY-MM-DD)",
    "address": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Personal information Update successfully",
    "status": 200,
    "data": {}
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
    "company": "string",
    "experience_years": "number",
    "skills": "string",
    "linkedin_url": "string"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Professional information Update successfully",
    "status": 200,
    "data": {}
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
    "data": {}
  }
  ```

### 2.9 Update User Status
- **Endpoint**: `PATCH /api/users/:userId/status`
- **Description**: Update user's status (active/inactive)
- **Parameters**:
  - `userId` (URL parameter): User ID (number)
- **Input Format**:
  ```json
  {
    "user_id": "number",
    "status": "string (active/inactive)"
  }
  ```
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User Status update successfully",
    "status": 200,
    "data": {}
  }
  ```

---

## 3. Role Management Endpoints (`/api/roles/`)

### 3.1 Get All Roles
- **Endpoint**: `GET /api/roles/getAllRoles`
- **Description**: Retrieve all available roles

### Request

```http
GET /api/roles/getAllRoles
```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Retrieve roles successful",
    "status": 200,
    "data": [
      {
        "role_id": 1,
        "role_name": "Admin",
        "description": "Orchestrate over Roles and Membership Management"
      },
      {
        "role_id": 2,
        "role_name": "Student",
        "description": "Takes assessments and views results"
      },
      {
        "role_id": 3,
        "role_name": "Mentor",
        "description": "Guides students and reviews performance"
      },
      {
        "role_id": 4,
        "role_name": "SME",
        "description": "Creates and reviews questions"
      },
      {
        "role_id": 5,
        "role_name": "Employer",
        "description": "Views candidates and assessments"
      },
      {
        "role_id": 6,
        "role_name": "Alumni",
        "description": "Former students associated with the system"
      },
      {
        "role_id": 7,
        "role_name": "UnAssigned",
        "description": "Users not assigned with any role"
      }
    ]
  }
  ```

---

### 3.2 Create New Role
- **Endpoint**: `POST /api/roles/insert`
- **Description**: Create a new role

### Request

```http
POST /api/roles/insert
```

- **Input Format**:
  ```json
  {
    "roleName": "HR",
    "description": "Handles employee management and recruitment"
  }
  ```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "role added successfully",
    "status": 200,
    "data": {
      "role_id": 8,
      "role_name": "HR",
      "description": "Handles employee management and recruitment"
    }
  }
  ```

---

### 3.3 Update Role
- **Endpoint**: `PUT /api/roles/update/:id`
- **Description**: Update an existing role

### Request

```http
PUT /api/roles/update/5
```

- **Input Format**:
  ```json
  {
    "roleName": "Employer",
    "description": "Views candidate profiles and hiring assessments"
  }
  ```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "role updated successfully",
    "status": 200,
    "data": {}
  }
  ```

---

### 3.4 Get User Roles By User ID
- **Endpoint**: `GET /api/roles/getUserRolesByUserId/:userId`
- **Description**: Retrieve all roles assigned to a user

### Request

```http
GET /api/roles/getUserRolesByUserId/3
```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "User's roles retrieved successfully",
    "status": 200,
    "data": [
      {
        "role_id": 1,
        "role_name": "Admin"
      },
      {
        "role_id": 2,
        "role_name": "Student"
      },
      {
        "role_id": 3,
        "role_name": "Mentor"
      },
      {
        "role_id": 4,
        "role_name": "SME"
      }
    ]
  }
  ```

---

### 3.5 Get Users By Role ID
- **Endpoint**: `GET /api/roles/getUsersByRoleId/:roleId`
- **Description**: Retrieve all users with a specific role

### Request

```http
GET /api/roles/getUsersByRoleId/2
```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Users retrieved successfully",
    "status": 200,
    "data": [
      {
        "user_id": 4,
        "full_name": "Tejas Pawale",
        "email": "pawaletejas98@gmail.com",
        "role_name": "Student"
      },
      {
        "user_id": 7,
        "full_name": "Samruddhi Rasal",
        "email": "samruddhirasal03@gmail.com",
        "role_name": "Student"
      },
      {
        "user_id": 8,
        "full_name": "Anish Adak",
        "email": "anishadak4210@gmail.com",
        "role_name": "Student"
      }
    ]
  }
  ```

---

### 3.6 Assign Role to User
- **Endpoint**: `POST /api/roles/assignRole/:userId/role/:roleId`
- **Description**: Assign a role to a user

### Request

```http
POST /api/roles/assignRole/6/role/5
```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Role assigned successfully",
    "status": 200,
    "data": {}
  }
  ```

### Database Effect

```text
User ID 6 assigned with role Employer (Role ID 5)
```

---

### 3.7 Unassign Role from User
- **Endpoint**: `PUT /api/roles/unAssignRole/:userId/role/:roleId`
- **Description**: Remove a role from a user

### Request

```http
PUT /api/roles/unAssignRole/6/role/5
```

- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Role unassigned successfully",
    "status": 200,
    "data": {}
  }
  ```

### Database Effect

```text
Role ID 5 marked as INACTIVE for User ID 6
```

---

## 4. User Activity Endpoints (`/api/useractivity/`)

### 4.1 User Login (Activity Tracking)
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
      "login_id": "number",
      "user_id": "number",
      "role_id": "number",
      "login_time": "string (ISO-8601)",
      "status": "string"
    }
  }
  ```

### 4.2 User Logout (Activity Tracking)
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
      "logout_time": "string (ISO-8601)"
    }
  }
  ```

### 4.3 Get Recent Login Count (Last 24 Hours)
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
      "timestamp": "string (ISO-8601)"
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
      "averageSessionTime": "number (minutes)",
      "timestamp": "string (ISO-8601)"
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
      "timestamp": "string (ISO-8601)"
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
    "message": "Live users retrieved",
    "status": 200,
    "data": [
      {
        "user_id": "number",
        "first_name": "string",
        "last_name": "string",
        "role_name": "string",
        "login_time": "string (ISO-8601)",
        "last_activity": "string (ISO-8601)"
      }
    ]
  }
  ```

### 4.7 Get All User Activity Logs
- **Endpoint**: `GET /api/useractivity/logs`
- **Description**: Get all user activity logs with pagination
- **Query Parameters**:
  - `name` (optional): Filter by user name
  - `page` (optional, default: 1): Page number
  - `limit` (optional, default: 10): Records per page
- **Input Format**: Query parameters (no body)
- **Output Format**:
  ```json
  {
    "success": true,
    "message": "Activity logs retrieved",
    "status": 200,
    "data": [
      {
        "activity_id": "number",
        "user_id": "number",
        "first_name": "string",
        "activity_type": "string (login/logout)",
        "activity_time": "string (ISO-8601)",
        "role_name": "string",
        "session_duration": "number (minutes)"
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "total": "number"
    }
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
    "data": {
      "mentee_count": "number"
    }
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
        "assignment_date": "string (YYYY-MM-DD)"
      }
    ]
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

## Authentication Notes

- The `/api/auth/login` endpoint should be called first to authenticate the user.
- Upon successful login, the response includes user details and role information.
- Subsequent API calls can use the user ID and role ID for authorization checks.
- Token-based authentication may be implemented for production environments.

---

## Error Handling

All endpoints follow a consistent error response format:
```json
{
  "success": false,
  "message": "Error description",
  "status": "error_code"
}
```

---

## Notes

- All timestamps are in ISO-8601 format (UTC)
- User IDs and Role IDs are numeric identifiers
- Pagination is supported in user activity logs endpoint
- PATCH method is used for partial updates
- PUT method is used for full updates or status changes
