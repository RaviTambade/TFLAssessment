# 🚀 TFLCoMentor — Admin API Documentation

> **Base URL:** `https://yourdomain.com/api/admin`  
> **Auth:** All endpoints require `Authorization: Bearer <token>` header  
> **Format:** All requests and responses are `application/json`

---

## 📋 Table of Contents

- [Dashboard](#-dashboard)
- [Assessment Management](#-assessment-management)
- [Session Management](#-session-management)
- [User Management](#-user-management)
- [System Settings](#-system-settings)
- [API Pattern Reference](#-api-pattern-reference)

---

## 📊 Dashboard

### Get Platform Overview

```
GET /api/admin/dashboard/overview
```

Returns platform-wide statistics including user counts, assessment counts, and role breakdown.

**Response**

```json
{
  "totalUsers": 1200,
  "activeUsers": 245,
  "totalAssessments": 48,
  "ongoingAssessments": 12,
  "roleSummary": {
    "Student": 1044,
    "Mentor": 87,
    "SME": 24,
    "Employer": 45,
    "Admin": 3
  }
}
```

---

## 📝 Assessment Management

### Get Assessment Statistics

```
GET /api/admin/assessments/statistics
```

**Response**

```json
{
  "ongoingAssessments": 12,
  "unassignedAssessments": 5
}
```

---

### Get All Assessments

```
GET /api/admin/assessments
```

**Response**

```json
{
  "total": 48,
  "data": [
    {
      "testId": 5,
      "title": "Java Backend Assessment",
      "description": "Core Java + Spring Boot",
      "durationMinutes": 90,
      "status": "PUBLISHED",
      "createdAt": "2026-01-10T09:00:00Z"
    }
  ]
}
```

---

### Create Assessment

```
POST /api/admin/assessments
```

**Request Body**

```json
{
  "title": "Java Backend Assessment",
  "description": "Core Java + Spring Boot concepts",
  "durationMinutes": 90,
  "questionIds": [101, 102, 103],
  "status": "DRAFT"
}
```

**Response**

```json
{
  "testId": 10,
  "title": "Java Backend Assessment",
  "status": "DRAFT",
  "createdAt": "2026-03-12T10:00:00Z"
}
```

---

### Assign Assessment to Students

```
POST /api/admin/assessments/{assessmentId}/assign
```

**Request Body**

```json
{
  "studentIds": [12, 45, 67],
  "scheduleDate": "2026-03-15",
  "scheduleTime": "10:00"
}
```

**Response**

```json
{
  "assigned": 3,
  "testId": 5,
  "scheduleDate": "2026-03-15T10:00:00Z",
  "students": [
    { "studentId": 12, "name": "Rahul Sharma", "status": "Assigned" },
    { "studentId": 45, "name": "Sneha Patil",  "status": "Assigned" },
    { "studentId": 67, "name": "Arjun Mehta",  "status": "Assigned" }
  ]
}
```

---

### Get Assessment Summary

```
GET /api/admin/assessments/{assessmentId}/summary
```

**Response**

```json
{
  "testId": 5,
  "title": "Java Backend Assessment",
  "durationMinutes": 90,
  "totalAssigned": 30,
  "attempted": 22,
  "missed": 5,
  "pending": 3,
  "averageScore": 68.4,
  "highestScore": 95,
  "lowestScore": 32
}
```

---

### Get Students of an Assessment

```
GET /api/admin/assessments/{assessmentId}/students
```

**Response**

```json
[
  {
    "studentId": 21,
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "status": "Attempted",
    "score": 78.5,
    "timeTakenMinutes": 74,
    "attemptDate": "2026-03-15T10:45:00Z"
  }
]
```

**Student Status Values**

| Value | Description |
|---|---|
| `Attempted` | Student completed the assessment |
| `Missed` | Student did not attempt by deadline |
| `Pending` | Assessment is scheduled but not yet attempted |

---

### Reschedule Student Assessment

```
PUT /api/admin/assessments/{assessmentId}/students/{studentId}/reschedule
```

**Request Body**

```json
{
  "newScheduleDate": "2026-04-01",
  "newScheduleTime": "10:00"
}
```

**Response**

```json
{
  "assessmentId": 5,
  "studentId": 22,
  "studentName": "Sneha Patil",
  "previousSchedule": "2026-03-15T10:00:00Z",
  "newSchedule": "2026-04-01T10:00:00Z",
  "rescheduledAt": "2026-03-12T09:00:00Z"
}
```

---

## 🔐 Session Management

### Get Session Statistics

```
GET /api/admin/sessions/statistics
```

**Response**

```json
{
  "activeSessions": 85,
  "avgSessionTime": "00:32:15",
  "totalLogins": 1240,
  "todayLogins": 134
}
```

---

### Get All Session Logs

```
GET /api/admin/sessions/logs
```

Supports optional query filters: `?role=Student`, `?date=2026-03-10`, `?status=Inactive`

**Response**

```json
[
  {
    "sessionId": 301,
    "userId": 42,
    "name": "Rahul Sharma",
    "role": "Student",
    "loginTime": "2026-03-10T10:20:00Z",
    "logoutTime": "2026-03-10T11:10:00Z",
    "sessionDuration": "50 mins",
    "status": "Inactive"
  }
]
```

**Session Status Values**

| Value | Description |
|---|---|
| `Active` | User is currently logged in (`logoutTime` is null) |
| `Inactive` | Session has ended |

---

### Get Session Logs by User

```
GET /api/admin/sessions/logs/{userId}
```

**Response**

```json
{
  "userId": 42,
  "name": "Rahul Sharma",
  "totalSessions": 18,
  "logs": [
    {
      "sessionId": 301,
      "loginTime": "2026-03-10T10:20:00Z",
      "logoutTime": "2026-03-10T11:10:00Z",
      "sessionDuration": "50 mins"
    }
  ]
}
```

---

## 👥 User Management

### Get All Users

```
GET /api/admin/users
```

Supports query filters: `?role=Student`, `?status=ACTIVE`, `?search=rahul`, `?page=1&limit=20`

**Response**

```json
[
  {
    "userId": 101,
    "firstName": "Rahul",
    "lastName": "Sharma",
    "email": "rahul@example.com",
    "contact": "9876543210",
    "roles": ["Student"],
    "status": "ACTIVE",
    "createdAt": "2025-08-01T00:00:00Z"
  }
]
```

---

### Filter Users by Role

```
GET /api/admin/users?role=Student
GET /api/admin/users?role=Mentor
GET /api/admin/users?role=SME
GET /api/admin/users?role=Employer
```

Returns the same response structure as **Get All Users**, filtered by the specified role. Each role includes additional role-specific profile fields in the response.

---

### Get Role Summary

```
GET /api/admin/users/role-summary
```

**Response**

```json
{
  "total": 1200,
  "Student": 1044,
  "Mentor": 87,
  "SME": 24,
  "Employer": 45,
  "Admin": 3
}
```

---

### Create User

```
POST /api/admin/users
```

**Request Body**

```json
{
  "firstName": "Priya",
  "lastName": "Nair",
  "email": "priya@example.com",
  "contact": "9123456789",
  "role": "Student",
  "password": "TempPass@123"
}
```

---

### Get User Details

```
GET /api/admin/users/{userId}
```

Returns full user profile including role-specific details (student academic info, mentor specialization, employer company, etc.).

---

### Update User

```
PUT /api/admin/users/{userId}
```

Updates basic user information such as name, contact, and email.

---

### Update User Roles

```
PUT /api/admin/users/{userId}/roles
```

**Request Body**

```json
{
  "roles": ["Student", "Mentor"]
}
```

> Replaces all existing roles. Send the complete new list of roles for the user.

---

### Change User Status

```
PUT /api/admin/users/{userId}/status
```

**Request Body**

```json
{
  "status": "INACTIVE"
}
```

**Status Values**

| Value | Description |
|---|---|
| `ACTIVE` | User can log in and use the platform |
| `INACTIVE` | User account is disabled |
| `BLOCKED` | User is permanently blocked |

---

### Get User Assessments

```
GET /api/admin/users/{userId}/assessments
```

Returns all assessments assigned to the specified user along with their attempt status and scores.

---

## ⚙️ System Settings

### Get System Settings

```
GET /api/admin/settings
```

**Response**

```json
{
  "platformName": "EduPortal",
  "maxSessionDurationMinutes": 120,
  "allowSelfRegistration": true,
  "defaultRole": "Student",
  "emailNotificationsEnabled": true,
  "maintenanceMode": false
}
```

---

### Update System Settings

```
PUT /api/admin/settings
```

**Request Body**

```json
{
  "platformName": "EduPortal v2",
  "maxSessionDurationMinutes": 90,
  "allowSelfRegistration": false,
  "maintenanceMode": false
}
```

---

### Get All Roles

```
GET /api/admin/settings/roles
```

**Response**

```json
[
  { "roleId": 1, "roleName": "Student" },
  { "roleId": 2, "roleName": "Mentor" },
  { "roleId": 3, "roleName": "SME" },
  { "roleId": 4, "roleName": "Employer" },
  { "roleId": 5, "roleName": "Admin" }
]
```

---

### Create Role

```
POST /api/admin/settings/roles
```

**Request Body**

```json
{
  "roleName": "Evaluator",
  "description": "Reviews and grades assessments"
}
```

---

## 🗺️ API Pattern Reference

All admin APIs follow this consistent pattern:

```
/api/admin/{module}/{resource}
```

### Complete Endpoint Map

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/dashboard/overview` | Platform statistics |
| `GET` | `/api/admin/assessments/statistics` | Assessment counts |
| `GET` | `/api/admin/assessments` | List all assessments |
| `POST` | `/api/admin/assessments` | Create assessment |
| `POST` | `/api/admin/assessments/{id}/assign` | Assign to students |
| `GET` | `/api/admin/assessments/{id}/summary` | Assessment summary |
| `GET` | `/api/admin/assessments/{id}/students` | Students of assessment |
| `PUT` | `/api/admin/assessments/{id}/students/{sid}/reschedule` | Reschedule for student |
| `GET` | `/api/admin/sessions/statistics` | Session statistics |
| `GET` | `/api/admin/sessions/logs` | All session logs |
| `GET` | `/api/admin/sessions/logs/{userId}` | User session logs |
| `GET` | `/api/admin/users` | List all users |
| `POST` | `/api/admin/users` | Create user |
| `GET` | `/api/admin/users/role-summary` | Role count summary |
| `GET` | `/api/admin/users/{userId}` | User details |
| `PUT` | `/api/admin/users/{userId}` | Update user |
| `PUT` | `/api/admin/users/{userId}/roles` | Update user roles |
| `PUT` | `/api/admin/users/{userId}/status` | Change user status |
| `GET` | `/api/admin/users/{userId}/assessments` | User assessments |
| `GET` | `/api/admin/settings` | Get settings |
| `PUT` | `/api/admin/settings` | Update settings |
| `GET` | `/api/admin/settings/roles` | List roles |
| `POST` | `/api/admin/settings/roles` | Create role |

---

### Recommended Full Platform API Structure

For a scalable, microservice-ready backend, structure all APIs by role:

```
/api/admin/*       → Admin panel operations
/api/student/*     → Student-facing features
/api/mentor/*      → Mentor-facing features
/api/sme/*         → SME-facing features
/api/employer/*    → Employer-facing features
```

This keeps each module independently deployable and easy to maintain as the platform grows.

---

> 📌 **Platform:** TFLCoMentor  
> **Stack:** React Frontend · .NET Backend · MySQL Microservices  
> **Maintained by:** TFLCoMentor Engineering Team