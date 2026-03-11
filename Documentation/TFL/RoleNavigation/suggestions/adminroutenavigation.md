# 1️⃣ Admin UI Routes (Navigation)

For **TFLCoMentor Admin role**, routes should follow a **clean REST-style + UI navigation hierarchy** so that developers and frontend teams can easily map **pages → APIs → database modules**.

We will structure the routes in **three layers**:

1️⃣ **Admin UI Routes (Frontend Navigation)**
2️⃣ **Backend API Routes (REST endpoints)**
3️⃣ **Logical Module Structure**

This will make the architecture **clear for students and developers.**

These are **frontend routes** used in the admin panel.

```text
/admin
│
├── /admin/dashboard
│      ├── /admin/dashboard/overview
│
├── /admin/assessments
│      ├── /admin/assessments/statistics
│      ├── /admin/assessments/list
│      ├── /admin/assessments/assign
│      ├── /admin/assessments/:assessmentId/summary
│      ├── /admin/assessments/:assessmentId/students
│      ├── /admin/assessments/:assessmentId/reschedule
│
├── /admin/sessions
│      ├── /admin/sessions/stats
│      ├── /admin/sessions/logs
│      ├── /admin/sessions/logs/:studentId
│
├── /admin/users
│      ├── /admin/users/list
│      ├── /admin/users/:userId/profile
│      ├── /admin/users/:userId/roles
│
└── /admin/settings
```

This structure keeps **every admin feature under `/admin`** which is a common practice in **ASP.NET Core**, **Node.js**, and modern **admin dashboards**.

# 2️⃣ Backend REST API Routes

These are **server-side APIs** used by the UI.

## 1. Overview APIs

```http
GET /api/admin/dashboard/overview
```

Response

```json
{
  "totalUsers": 1200,
  "activeUsers": 245,
  "totalAssessments": 48
}
```

## 2. Assessment Management

### Get Assessment Stats

```http
GET /api/admin/assessments/statistics
```

Response

```json
{
 "ongoingAssessments": 12,
 "unassignedAssessments": 5
}
```

### Get Assessment List

```http
GET /api/admin/assessments
```

### Assign Assessment

```http
POST /api/admin/assessments/{assessmentId}/assign
```

Body

```json
{
 "studentIds":[12,45,67],
 "scheduleDate":"2026-03-15"
}
```

### Delete Assessment

```http
DELETE /api/admin/assessments/{assessmentId}
```
### Assessment Summary

```http
GET /api/admin/assessments/{assessmentId}/summary
```

### Student Wise Status

```http
GET /api/admin/assessments/{assessmentId}/students
```

Response

```json
[
 {
   "studentId":21,
   "name":"Rahul",
   "status":"Attempted"
 },
 {
   "studentId":22,
   "name":"Sneha",
   "status":"Missed"
 }
]
```

### Reschedule

```http
PUT /api/admin/assessments/{assessmentId}/reschedule
```

# 3️⃣ Session Management APIs

### Session Statistics

```http
GET /api/admin/sessions/statistics
```

Response

```json
{
 "activeSessions":85,
 "avgSessionTime":"00:32:15",
 "totalLogins":1240
}
```

### Session Logs

```http
GET /api/admin/sessions/logs
```

### Student Session Logs

```http
GET /api/admin/sessions/logs/{studentId}
```

Response

```json
{
 "loginTime":"10:20",
 "logoutTime":"11:10",
 "role":"Student",
 "status":"Inactive",
 "sessionTime":"50 mins"
}
```
# 4️⃣ User Management APIs

### User List

```http
GET /api/admin/users
```

Query Example

```
/api/admin/users?role=student
```

### User Profile

```http
GET /api/admin/users/{userId}
```

### Modify Roles

```http
PUT /api/admin/users/{userId}/roles
```

Body

```json
{
 "roles":[
   "Student",
   "Mentor"
 ]
}
```

### Remove User

```http
DELETE /api/admin/users/{userId}
```
# 3️⃣ Recommended Admin Module Structure

This helps students understand architecture.

```text
Admin Module
│
├── Dashboard Module
│
├── Assessment Module
│     ├── Assessment
│     ├── AssessmentAssignment
│     ├── AssessmentAttempt
│
├── Session Module
│     ├── SessionLog
│
├── User Module
│     ├── User
│     ├── Roles
│
└── Analytics Module
```

# 4️⃣ Very Important Architecture Suggestion

For **TFLCoMentor**, use **role-based routes**:

```text
/student/*
/mentor/*
/sme/*
/employer/*
/admin/*
```

This makes the platform **scalable and maintainable**.
