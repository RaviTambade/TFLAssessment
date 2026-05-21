# Master API Endpoints Documentation

> Combined reference from all three API documentation files.

---

## Quick Reference Table — All Endpoints

| # | Method | Endpoint | Description | Source |
|---|--------|----------|-------------|--------|
| 1 | GET | `/api/projects` | Get all projects | Projects API |
| 2 | GET | `/api/projects/{id}` | Get project by ID | Projects API |
| 3 | GET | `/api/projects/{projectId}/students` | Get students allocated to project | Projects API |
| 4 | GET | `/api/projects/allocations` | Get all project allocations | Projects API |
| 5 | POST | `/api/projects/add` | Add student to project | Projects API |
| 6 | GET | `/api/projects/student/{studentId}/projects` | Get projects by student ID | Projects API |
| 7 | DELETE | `/api/projects/remove` | Remove student from project | Projects API |
| 8 | GET | `/api/questions/{question_id}` | Get question by ID | Questions API |
| 9 | GET | `/api/questions` | Get all questions | Questions API |
| 10 | GET | `/api/questions/difficulty/{level}` | Get questions by difficulty | Questions API |
| 11 | GET | `/api/questions/drafts` | Get draft questions | Questions API |
| 12 | PATCH | `/api/questions/{question_id}/status` | Update single question status | Questions API |
| 13 | PATCH | `/api/questions/status/{status}` | Update multiple question statuses | Questions API |
| 14 | GET | `/api/questions/recent` | Get questions between dates | Questions API |
| 15 | GET | `/api/questions/{question_id}/details` | Get complete question details | Questions API |
| 16 | PUT | `/api/questions/{question_id}` | Update question details | Questions API |
| 17 | GET | `/api/questions/status/{status}` | Get questions by status | Questions API |
| 18 | GET | `/api/questions/concepts/{conceptId}/questions` | Get questions by concept ID | Questions API |
| 19 | GET | `/api/questions/concepts/{concept}/count` | Get question count by concept | Questions API |
| 20 | GET | `/api/questions/type/{questionType}` | Get questions by type | Questions API |
| 21 | POST | `/api/questions/complete` | Insert complete question | Questions API |
| 22 | GET | `/api/filter/questions` | Filter questions (multi-param) | Questions API |
| 23 | POST | `/api/interview/schedule` | Schedule an interview | Interview API |
| 24 | GET | `/api/interview/details/{userId}/role/{roleId}/interview/{interviewId}` | Get interview details | Interview API |
| 25 | GET | `/api/interview/upcoming/{userId}/role/{roleId}` | Get upcoming interviews | Interview API |
| 26 | GET | `/api/interview/history/{userId}/role/{roleId}` | Get interview history | Interview API |
| 27 | PUT | `/api/interview/{interviewId}/cancel` | Cancel interview | Interview API |
| 28 | PUT | `/api/interview/accept/{interviewId}` | Accept interview | Interview API |
| 29 | PUT | `/api/interview/reject/{interviewId}` | Reject interview | Interview API |
| 30 | POST | `/api/interview/feedback` | Add interview feedback | Interview API |
| 31 | GET | `/api/interview/{roleId}` | Get interviews by role | Interview API |
| 32 | GET | `/api/technologies/concepts/question-count` | Get concept-wise question count | Technology API |
| 33 | GET | `/api/technologies/difficulty/question-count` | Get difficulty-wise question count | Technology API |
| 34 | POST | `/api/auth/login` | User login | TFL Auth API |
| 35 | POST | `/api/auth/register` | User registration | TFL Auth API |
| 36 | PUT | `/api/auth/changepassword` | Change password | TFL Auth API |
| 37 | GET | `/api/users/getAllUsers` | Get all users | TFL Users API |
| 38 | GET | `/api/users/:userId` | Get user details by ID | TFL Users API |
| 39 | GET | `/api/users/:userId/personal` | Get user personal details | TFL Users API |
| 40 | GET | `/api/users/:userId/academic` | Get user academic details | TFL Users API |
| 41 | GET | `/api/users/:userId/professional` | Get user professional details | TFL Users API |
| 42 | PATCH | `/api/users/:userId/personal-info` | Update user personal info | TFL Users API |
| 43 | PATCH | `/api/users/:userId/professional-info` | Update user professional info | TFL Users API |
| 44 | PATCH | `/api/users/:userId/academic-info` | Update user academic info | TFL Users API |
| 45 | PATCH | `/api/users/:userId/status` | Update user status | TFL Users API |
| 46 | GET | `/api/roles/getAllRoles` | Get all roles | TFL Roles API |
| 47 | POST | `/api/roles/createRole` | Create new role | TFL Roles API |
| 48 | PUT | `/api/roles/updateRole/:roleId` | Update role | TFL Roles API |
| 49 | GET | `/api/roles/getUserRolesByUserId/:userId` | Get roles by user ID | TFL Roles API |
| 50 | GET | `/api/roles/getUsersByRoleId/:roleId` | Get users by role ID | TFL Roles API |
| 51 | POST | `/api/roles/assignRole/:userId/role/:roleId` | Assign role to user | TFL Roles API |
| 52 | PUT | `/api/roles/unAssignRole/:userId/role/:roleId` | Unassign role from user | TFL Roles API |
| 53 | POST | `/api/useractivity/login/:userId/role/:roleId` | Record user login activity | TFL Activity API |
| 54 | PUT | `/api/useractivity/logout/:userId/role/:roleId` | Record user logout activity | TFL Activity API |
| 55 | GET | `/api/useractivity/logins-24h` | Get recent login count (24h) | TFL Activity API |
| 56 | GET | `/api/useractivity/average-time` | Get average session time | TFL Activity API |
| 57 | GET | `/api/useractivity/active-count` | Get active session count | TFL Activity API |
| 58 | GET | `/api/useractivity/active-users` | Get live/active users | TFL Activity API |
| 59 | GET | `/api/useractivity/logs` | Get all user activity logs | TFL Activity API |
| 60 | GET | `/api/mentors/:id/mentees/count` | Get mentee count for mentor | TFL Mentors API |
| 61 | GET | `/api/mentors/:id/mentees` | Get mentees list for mentor | TFL Mentors API |
| 62 | GET | `/api/Assessment/user/{userId}` | Get upcoming assessments for user | Assessment API |
| 63 | GET | `/api/Assessment/all` | Get all assessments | Assessment API |
| 64 | GET | `/api/Assessment/tests` | Get all tests | Assessment API |
| 65 | GET | `/api/Assessment/students` | Get all students | Assessment API |
| 66 | POST | `/api/Assessment/assigned` | Assign assessment to students | Assessment API |
| 67 | GET | `/api/Assessment/{assessmentId}/questions` | Get assessment questions | Assessment API |
| 68 | POST | `/api/Assessment/submit` | Submit assessment answers | Assessment API |
| 69 | GET | `/api/Assessment/{studentId}/{assessmentId}` | Get assessment result | Assessment API |
| 70 | GET | `/api/Assessment/total` | Get total assessments count | Assessment API |
| 71 | GET | `/api/Assessment/completed` | Get completed assessments count | Assessment API |
| 72 | DELETE | `/api/Assessment/InActive/{id}` | Deactivate assessment | Assessment API |
| 73 | POST | `/api/Assessment/cancel/test/{testId}` | Cancel assessments by test | Assessment API |
| 74 | POST | `/api/Assessment/restore/{id}` | Restore assessment | Assessment API |
| 75 | GET | `/api/Assessment/summaries/{studentId}` | Get assessment summaries for student | Assessment API |
| 76 | GET | `/api/Assessment/student-assessments-status` | Get student assessment status | Assessment API |
| 77 | GET | `/api/CreateTest/questions` | Get questions by concept | CreateTest API |
| 78 | POST | `/api/CreateTest/create` | Create a new test | CreateTest API |
| 79 | PUT | `/api/CreateTest/cancel/{id}` | Cancel a test | CreateTest API |
| 80 | POST | `/api/CreateTest/add-questions` | Add questions to test | CreateTest API |
| 81 | GET | `/api/CreateTest/20questions` | Get first 20 questions | CreateTest API |
| 82 | POST | `/api/auth/send-password` | Send one-time password | Auth API |
| 83 | POST | `/api/auth/verify-password` | Verify one-time password | Auth API |
| 84 | POST | `/api/Expertise/expertise` | Add SME expertise | Expertise API |
| 85 | GET | `/api/Questions/concepts` | Get all concepts | Questions (C#) API |
| 86 | GET | `/api/Questions/{assessmentId}/student/{studentId}` | Get student question results | Questions (C#) API |
| 87 | GET | `/api/Questions/{questionId}/answer` | Get question with answer | Questions (C#) API |
| 88 | GET | `/api/Questions/{questionId}` | Get question details | Questions (C#) API |
| 89 | GET | `/api/Score/GetAverageScoreById/{studentId}` | Get average score by student | Score API |
| 90 | GET | `/api/Score/GetAllStudentsAverageScore` | Get all students average scores | Score API |
| 91 | GET | `/api/Score/GetAssessmentResultData/{studentId}/{assessmentId}` | Get assessment score data | Score API |
| 92 | GET | `/api/StudentResult` | Get all student results | StudentResult API |
| 93 | GET | `/api/StudentResult/{studentId}/{assessmentId}/{questionId}` | Get student answer result | StudentResult API |
| 94 | GET | `/api/Students/total` | Get total students count | Students API |
| 95 | GET | `/api/Users/personal/{userId}` | Get user personal details | Users (C#) API |
| 96 | GET | `/api/Users/professional/{userId}` | Get user professional details | Users (C#) API |
| 97 | GET | `/api/Users/academic/{userId}` | Get user academic details | Users (C#) API |
| 98 | GET | `/api/Users/fullname/{userId}` | Get user full name | Users (C#) API |
| 99 | GET | `/api/Users/role/{userId}` | Get user roles | Users (C#) API |
| 100 | GET | `/api/UserSessions/all` | Get all user sessions | UserSessions API |
| 101 | GET | `/api/UserSessions/total-sessions` | Get total user sessions count | UserSessions API |

---

# FILE 1 — Projects, Questions, Interview & Technology APIs

## Base URLs
```text
http://localhost:PORT/api/projects
http://localhost:PORT/api/questions
http://localhost:PORT/api/filter
http://localhost:PORT/api/interview
http://localhost:PORT/api/technologies
```

---

# 1. Project Endpoints (`/api/projects`)

---

## 1.1 Get All Projects
- **Endpoint**: `GET /api/projects`
- **Description**: Retrieve all projects

### Output Format
```json
[
  {
    "projectId": 1,
    "title": "Project Name",
    "description": "Project Description"
  }
]
```

---

## 1.2 Get Project By ID
- **Endpoint**: `GET /api/projects/{id}`
- **Description**: Retrieve project details using project ID

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | long | Project ID |

### Output Format
```json
{
  "projectId": 1,
  "title": "Project Name",
  "description": "Project Description"
}
```

---

## 1.3 Get Students Allocated To Project
- **Endpoint**: `GET /api/projects/{projectId}/students`
- **Description**: Retrieve all students assigned to a project

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| projectId | long | Project ID |

### Output Format
```json
[
  {
    "studentId": 101,
    "studentName": "Sahil Kamble",
    "projectId": 1,
    "projectName": "AI Chatbot"
  }
]
```

---

## 1.4 Get All Project Allocations
- **Endpoint**: `GET /api/projects/allocations`
- **Description**: Retrieve all project allocation details

### Output Format
```json
[
  {
    "studentId": 101,
    "studentName": "Sahil Kamble",
    "projectId": 1,
    "projectName": "AI Chatbot"
  }
]
```

---

## 1.5 Add Student To Project
- **Endpoint**: `POST /api/projects/add`
- **Description**: Allocate a student to a project

### Input Format
```json
{
  "projectId": 1,
  "studentId": 101
}
```

### Output Format
```json
"Student added successfully"
```
OR
```json
"Failed to add student"
```

---

## 1.6 Get Projects By Student ID
- **Endpoint**: `GET /api/projects/student/{studentId}/projects`
- **Description**: Retrieve all projects assigned to a student

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | long | Student ID |

### Output Format
```json
[
  {
    "projectId": 1,
    "title": "AI Chatbot",
    "description": "ML based chatbot system"
  }
]
```

---

## 1.7 Remove Student From Project
- **Endpoint**: `DELETE /api/projects/remove`
- **Description**: Remove a student allocation from a project

### Request Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| projectId | long | Project ID |
| studentId | long | Student ID |

### Example Request
```text
DELETE /api/projects/remove?projectId=1&studentId=101
```

### Output Format
```json
"Student released successfully"
```
OR
```json
"Failed to release student"
```

---

# 2. Question Endpoints (`/api/questions`)

---

## 2.1 Get Question By ID
- **Endpoint**: `GET /api/questions/{question_id}`
- **Description**: Retrieve question details using question ID

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| question_id | long | Question ID |

### Output Format
```json
{
  "questionId": 1,
  "description": "What is Java?",
  "questionType": "MCQ",
  "difficultyLevel": "BEGINNER"
}
```

---

## 2.2 Get All Questions
- **Endpoint**: `GET /api/questions`
- **Description**: Retrieve all questions

### Output Format
```json
[
  {
    "questionId": 1,
    "description": "What is Java?",
    "questionType": "MCQ"
  }
]
```

---

## 2.3 Get Questions By Difficulty
- **Endpoint**: `GET /api/questions/difficulty/{level}`
- **Description**: Retrieve questions based on difficulty level

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| level | DifficultyLevel | BEGINNER / INTERMEDIATE / ADVANCE |

### Example Request
```text
GET /api/questions/difficulty/ADVANCE
```

### Output Format
```json
[
  {
    "questionId": 10,
    "description": "Explain multithreading"
  }
]
```

---

## 2.4 Get Draft Questions
- **Endpoint**: `GET /api/questions/drafts`
- **Description**: Retrieve all draft questions

### Output Format
```json
[
  {
    "questionId": 5,
    "description": "Explain JVM",
    "status": "DRAFT"
  }
]
```

---

## 2.5 Update Single Question Status
- **Endpoint**: `PATCH /api/questions/{question_id}/status`
- **Description**: Update status of a single question

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| question_id | long | Question ID |

### Request Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| status | QuestionStatus | APPROVED / REJECTED / DRAFT |

### Example Request
```text
PATCH /api/questions/1/status?status=APPROVED
```

### Output Format
```json
"Question status updated successfully"
```

---

## 2.6 Update Multiple Question Status
- **Endpoint**: `PATCH /api/questions/status/{status}`
- **Description**: Update status of multiple questions

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| status | QuestionStatus | APPROVED / REJECTED / DRAFT |

### Input Format
```json
[1, 2, 3]
```

### Output Format
```json
"Question status updated successfully"
```

---

## 2.7 Get Questions Between Dates
- **Endpoint**: `GET /api/questions/recent`
- **Description**: Retrieve questions between given dates

### Request Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| fromDate | LocalDate | Start date |
| toDate | LocalDate | End date |

### Example Request
```text
GET /api/questions/recent?fromDate=2024-01-01&toDate=2024-12-31
```

### Output Format
```json
[
  {
    "questionId": 2,
    "description": "Explain OOP concepts"
  }
]
```

---

## 2.8 Get Complete Question Details
- **Endpoint**: `GET /api/questions/{question_id}/details`
- **Description**: Retrieve question with options/details

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| question_id | long | Question ID |

### Output Format
```json
{
  "questionId": 1,
  "description": "What is Java?",
  "options": {
    "optionA": "Programming Language",
    "optionB": "Database"
  }
}
```

---

## 2.9 Update Question Details
- **Endpoint**: `PUT /api/questions/{question_id}`
- **Description**: Update question details

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| question_id | long | Question ID |

### Input Format
```json
{
  "description": "Updated Question",
  "questionType": "MCQ"
}
```

### Output Format
```json
"Question Updated Successfully"
```

---

## 2.10 Get Questions By Status
- **Endpoint**: `GET /api/questions/status/{status}`
- **Description**: Retrieve questions based on status

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| status | QuestionStatus | APPROVED / REJECTED / DRAFT |

### Output Format
```json
[
  {
    "questionId": 1,
    "status": "APPROVED"
  }
]
```

---

## 2.11 Get Questions By Concept ID
- **Endpoint**: `GET /api/questions/concepts/{conceptId}/questions`
- **Description**: Retrieve questions using concept ID

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| conceptId | long | Concept ID |

### Output Format
```json
[
  {
    "questionId": 11,
    "description": "Explain loops in Java"
  }
]
```

---

## 2.12 Get Question Count By Concept
- **Endpoint**: `GET /api/questions/concepts/{concept}/count`
- **Description**: Retrieve total question count for a concept

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| concept | String | Concept Name |

### Example Request
```text
GET /api/questions/concepts/loops/count
```

### Output Format
```json
25
```

---

## 2.13 Get Questions By Type
- **Endpoint**: `GET /api/questions/type/{questionType}`
- **Description**: Retrieve questions based on type

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| questionType | QuestionType | MCQ / DESCRIPTIVE |

### Example Request
```text
GET /api/questions/type/MCQ
```

### Output Format
```json
[
  {
    "questionId": 7,
    "description": "What is polymorphism?"
  }
]
```

---

## 2.14 Insert Complete Question
- **Endpoint**: `POST /api/questions/complete`
- **Description**: Insert complete question with all details

### Input Format
```json
{
  "description": "What is Java?",
  "questionType": "MCQ",
  "difficultyLevel": "BEGINNER",
  "options": {
    "optionA": "Language",
    "optionB": "Compiler"
  }
}
```

### Output Format
```json
"Complete Question Inserted Successfully"
```

---

# 3. Question Filter Endpoints (`/api/filter`)

---

## 3.1 Filter Questions
- **Endpoint**: `GET /api/filter/questions`
- **Description**: Retrieve questions using multiple optional filters

### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| question_type | QuestionType | No | MCQ / DESCRIPTIVE |
| difficulty_level | DifficultyLevel | No | BEGINNER / INTERMEDIATE / ADVANCE |
| status | QuestionStatus | No | DRAFT / APPROVED / REJECTED |
| language | String | No | Programming language |
| layer | String | No | Application layer |
| framework | String | No | Framework name |
| concept | String | No | Concept name |

### Example Request
```text
GET /api/filter/questions?question_type=MCQ&difficulty_level=BEGINNER&language=Java
```

### Output Format
```json
[
  {
    "questionId": 1,
    "description": "What is Java?",
    "questionType": "MCQ",
    "difficultyLevel": "BEGINNER",
    "status": "APPROVED",
    "language": "Java",
    "layer": "Backend",
    "framework": "Spring Boot",
    "concept": "OOP"
  }
]
```

---

# 4. Interview Endpoints (`/api/interview`)

---

## 4.1 Schedule Interview
- **Endpoint**: `POST /api/interview/schedule`
- **Description**: Schedule a new interview

### Input Format
```json
{
  "scheduleAt": "2026-05-20T10:00:00",
  "mode": "ONLINE",
  "title": "Java Technical Interview",
  "interviewer": 4,
  "studentId": 10
}
```

### Output Format
```json
"Interview Scheduled Successfully"
```

---

## 4.2 Get Interview Details
- **Endpoint**: `GET /api/interview/details/{userId}/role/{roleId}/interview/{interviewId}`
- **Description**: Retrieve interview details based on role

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |
| roleId | int | Role ID (2 = Student, 4 = SME) |
| interviewId | int | Interview ID |

### Output Format
```json
{
  "interviewId": 1,
  "scheduleDate": "2026-05-20T10:00:00",
  "mode": "ONLINE",
  "title": "Java Interview",
  "interviewer": "John Doe",
  "status": "SCHEDULED"
}
```

---

## 4.3 Get Upcoming Interviews
- **Endpoint**: `GET /api/interview/upcoming/{userId}/role/{roleId}`
- **Description**: Retrieve upcoming interviews within next 4 days

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |
| roleId | int | Role ID |

### Output Format
```json
[
  {
    "interviewId": 1,
    "interviewer": 4,
    "title": "Spring Boot Interview"
  }
]
```

---

## 4.4 Get Interview History
- **Endpoint**: `GET /api/interview/history/{userId}/role/{roleId}`
- **Description**: Retrieve completed or canceled interviews

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |
| roleId | int | Role ID |

### Output Format
```json
[
  {
    "interviewId": 1,
    "title": "Java OOP Interview"
  }
]
```

---

## 4.5 Cancel Interview
- **Endpoint**: `PUT /api/interview/{interviewId}/cancel`
- **Description**: Cancel an interview

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format
```json
"Interview canceled successfully"
```

---

## 4.6 Accept Interview
- **Endpoint**: `PUT /api/interview/accept/{interviewId}`
- **Description**: Mark interview outcome as accepted

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format
```json
"Interview accepted successfully"
```

---

## 4.7 Reject Interview
- **Endpoint**: `PUT /api/interview/reject/{interviewId}`
- **Description**: Mark interview outcome as rejected

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format
```json
"Interview rejected successfully"
```

---

## 4.8 Add Interview Feedback
- **Endpoint**: `POST /api/interview/feedback`
- **Description**: Add SME feedback for interview

### Input Format
```json
{
  "interviewId": 1,
  "smeId": 4,
  "startTime": "2026-05-20T10:00:00",
  "endTime": "2026-05-20T11:00:00",
  "communicationRating": 5,
  "problemSolvingRating": 4,
  "strengths": "Strong Java fundamentals",
  "feedbackComment": "Good performance",
  "recommendation": "SELECTED"
}
```

### Output Format
```json
true
```

---

## 4.9 Get Interviews By Role
- **Endpoint**: `GET /api/interview/{roleId}`
- **Description**: Retrieve interviews based on role ID

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| roleId | int | Role ID |

### Output Format
```json
[
  {
    "interviewId": 1,
    "title": "Java Interview",
    "mode": "ONLINE",
    "scheduleDate": "2026-05-20T10:00:00",
    "status": "SCHEDULED",
    "interviewer": "Sahil Kamble"
  }
]
```

---

# 5. Technology Endpoints (`/api/technologies`)

---

## 5.1 Get Concept Wise Question Count
- **Endpoint**: `GET /api/technologies/concepts/question-count`
- **Description**: Retrieve total number of questions available for each concept

### Output Format
```json
[
  {
    "concept": "OOP",
    "questionCount": 25
  },
  {
    "concept": "Collections",
    "questionCount": 18
  }
]
```

---

## 5.2 Get Difficulty Wise Question Count
- **Endpoint**: `GET /api/technologies/difficulty/question-count`
- **Description**: Retrieve total number of questions grouped by difficulty level

### Output Format
```json
[
  {
    "difficultyLevel": "BEGINNER",
    "questionCount": 40
  },
  {
    "difficultyLevel": "INTERMEDIATE",
    "questionCount": 30
  },
  {
    "difficultyLevel": "ADVANCE",
    "questionCount": 15
  }
]
```

---

# FILE 2 — TFL Assessment API (Node.js / Express)

## Base URL
```text
http://localhost:PORT/api
```

---

## Common Response Envelope
All endpoints return a consistent response structure:
```json
{
  "success": true,
  "message": "Description of result",
  "status": 200,
  "data": { }
}
```

## Common Error Response
```json
{
  "success": false,
  "message": "Error description",
  "status": 400,
  "data": null
}
```

## HTTP Status Codes
| Status Code | Description |
|-------------|-------------|
| 200 | OK — Request successful |
| 201 | Created — Resource created successfully |
| 400 | Bad Request — Invalid request parameters |
| 401 | Unauthorized — Invalid credentials |
| 404 | Not Found — Resource not found |
| 500 | Internal Server Error |

---

# 6. Authentication Endpoints (`/api/auth/`)

---

## 6.1 User Login
- **Endpoint**: `POST /api/auth/login`
- **Description**: Authenticate user with username, password, and role

### Input Format
```json
{
  "username": "string",
  "password": "string",
  "role": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "User Validation successful",
  "status": 200,
  "data": {
    "userid": 1,
    "firstname": "string",
    "lastname": "string",
    "rolename": "string",
    "role_id": 1
  }
}
```

---

## 6.2 User Registration
- **Endpoint**: `POST /api/auth/register`
- **Description**: Register a new user

### Input Format
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "contact": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "User registered successfully",
  "status": 200,
  "data": {
    "affectedRows": 1,
    "insertId": 101
  }
}
```

---

## 6.3 Change Password
- **Endpoint**: `PUT /api/auth/changepassword`
- **Description**: Change user password

### Input Format
```json
{
  "id": 1,
  "newPassword": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "Password updated successfully",
  "status": 200,
  "data": {
    "affectedRows": 1,
    "changedRows": 1
  }
}
```

---

# 7. User Management Endpoints (`/api/users/`)

---

## 7.1 Get All Users
- **Endpoint**: `GET /api/users/getAllUsers`
- **Description**: Retrieve list of all users

### Output Format
```json
{
  "success": true,
  "message": "Users retrive successfully",
  "status": 200,
  "data": [
    {
      "user_id": 1,
      "full_name": "string",
      "created_at": "DateTime",
      "status": "string",
      "role_name": "string"
    }
  ]
}
```

---

## 7.2 Get User Details By ID
- **Endpoint**: `GET /api/users/:userId`
- **Description**: Retrieve complete user details by user ID

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Output Format
```json
{
  "success": true,
  "message": "User details retrieved successfully",
  "status": 200,
  "data": {
    "user_id": 1,
    "contact": "string",
    "status": "string",
    "first_name": "string",
    "last_name": "string",
    "gender": "string",
    "date_of_birth": "DateTime",
    "email": "string",
    "enrollment_year": 2022,
    "passing_year": 2026,
    "percentage": 85.5,
    "college_name": "string",
    "skills": "string"
  }
}
```

---

## 7.3 Get User Personal Details
- **Endpoint**: `GET /api/users/:userId/personal`
- **Description**: Retrieve user's personal information

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Output Format
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

---

## 7.4 Get User Academic Details
- **Endpoint**: `GET /api/users/:userId/academic`
- **Description**: Retrieve user's academic information

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Output Format
```json
{
  "success": true,
  "message": "User Academic information retrive successfully",
  "status": 200,
  "data": {
    "enrollment_year": 2022,
    "passing_year": 2026,
    "percentage": 85.5,
    "college_name": "string",
    "stream_name": "string",
    "specialization": "string"
  }
}
```

---

## 7.5 Get User Professional Details
- **Endpoint**: `GET /api/users/:userId/professional`
- **Description**: Retrieve user's professional information

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Output Format
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
    "is_current_job": 1,
    "experience_years": 2,
    "location": "string",
    "skills": "string"
  }
}
```

---

## 7.6 Update User Personal Information
- **Endpoint**: `PATCH /api/users/:userId/personal-info`
- **Description**: Update user's personal details

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Input Format
```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "User Personal information Update successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

## 7.7 Update User Professional Information
- **Endpoint**: `PATCH /api/users/:userId/professional-info`
- **Description**: Update user's professional details

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Input Format
```json
{
  "job_title": "string",
  "company_name": "string",
  "experience_years": 2
}
```

### Output Format
```json
{
  "success": true,
  "message": "User Professional information Update successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

## 7.8 Update User Academic Information
- **Endpoint**: `PATCH /api/users/:userId/academic-info`
- **Description**: Update user's academic details

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Input Format
```json
{
  "education_level": "string",
  "institution": "string",
  "specialization": "string",
  "gpa": 8.5,
  "graduation_year": 2026
}
```

### Output Format
```json
{
  "success": true,
  "message": "User Academic information Update successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

## 7.9 Update User Status
- **Endpoint**: `PATCH /api/users/:userId/status`
- **Description**: Update user's status

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Input Format
```json
{
  "user_id": 1,
  "status": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "User Status update successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

# 8. Role Management Endpoints (`/api/roles/`)

---

## 8.1 Get All Roles
- **Endpoint**: `GET /api/roles/getAllRoles`
- **Description**: Retrieve all available roles

### Output Format
```json
{
  "success": true,
  "message": "Roles retrieved successfully",
  "status": 200,
  "data": [
    { "role_id": 1, "role_name": "Admin" }
  ]
}
```

---

## 8.2 Create New Role
- **Endpoint**: `POST /api/roles/createRole`
- **Description**: Create a new role

### Input Format
```json
{
  "roleName": "string",
  "description": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "role created successfully",
  "status": 200,
  "data": { "affectedRows": 1, "insertId": 5 }
}
```

---

## 8.3 Update Role
- **Endpoint**: `PUT /api/roles/updateRole/:roleId`
- **Description**: Update an existing role

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| roleId | number | Role ID |

### Input Format
```json
{
  "roleName": "string",
  "description": "string"
}
```

### Output Format
```json
{
  "success": true,
  "message": "role updated successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

## 8.4 Get User Roles By User ID
- **Endpoint**: `GET /api/roles/getUserRolesByUserId/:userId`
- **Description**: Retrieve all active roles assigned to a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |

### Output Format
```json
{
  "success": true,
  "message": "User's roles retrieved successfully",
  "status": 200,
  "data": [
    { "user_id": 1, "role_name": "Admin" }
  ]
}
```

---

## 8.5 Get Users By Role ID
- **Endpoint**: `GET /api/roles/getUsersByRoleId/:roleId`
- **Description**: Retrieve all active users with a specific role

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| roleId | number | Role ID |

### Output Format
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "status": 200,
  "data": [
    {
      "user_id": 1,
      "full_name": "string",
      "role_id": 2,
      "role_name": "Student"
    }
  ]
}
```

---

## 8.6 Assign Role to User
- **Endpoint**: `POST /api/roles/assignRole/:userId/role/:roleId`
- **Description**: Assign a role to a user

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |
| roleId | number | Role ID |

### Output Format
```json
{
  "success": true,
  "message": "Role assigned successfully",
  "status": 200,
  "data": { "affectedRows": 1, "insertId": 10, "changedRows": 0 }
}
```

---

## 8.7 Unassign Role from User
- **Endpoint**: `PUT /api/roles/unAssignRole/:userId/role/:roleId`
- **Description**: Remove a role from a user by marking it inactive

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |
| roleId | number | Role ID |

### Output Format
```json
{
  "success": true,
  "message": "Role unassigned successfully",
  "status": 200,
  "data": { "affectedRows": 1, "changedRows": 1 }
}
```

---

# 9. User Activity Endpoints (`/api/useractivity/`)

---

## 9.1 User Login Activity
- **Endpoint**: `POST /api/useractivity/login/:userId/role/:roleId`
- **Description**: Record user login activity

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |
| roleId | number | Role ID |

### Output Format
```json
{
  "success": true,
  "message": "Validation successful",
  "status": 200,
  "data": { "affectedRows": 1, "insertId": 1, "changedRows": 0 }
}
```

---

## 9.2 User Logout Activity
- **Endpoint**: `PUT /api/useractivity/logout/:userId/role/:roleId`
- **Description**: Record user logout activity

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | number | User ID |
| roleId | number | Role ID |

### Output Format
```json
{
  "success": true,
  "message": "Logout entry recorded successfully",
  "status": 200,
  "data": { "affectedRows": 1, "insertId": 1, "changedRows": 0 }
}
```

---

## 9.3 Get Recent Login Count
- **Endpoint**: `GET /api/useractivity/logins-24h`
- **Description**: Get total logins in the last 24 hours

### Output Format
```json
{
  "success": true,
  "message": "Login statistics retrieved",
  "status": 200,
  "data": {
    "totalLogins24Hours": 45,
    "timestamp": "DateTime"
  }
}
```

---

## 9.4 Get Average Session Time
- **Endpoint**: `GET /api/useractivity/average-time`
- **Description**: Get average session duration

### Output Format
```json
{
  "success": true,
  "message": "Average session time retrieved",
  "status": 200,
  "data": { "avgSessionTime": "01:30:00" }
}
```

---

## 9.5 Get Active Sessions Count
- **Endpoint**: `GET /api/useractivity/active-count`
- **Description**: Get number of currently active sessions

### Output Format
```json
{
  "success": true,
  "message": "Total active sessions retrieved",
  "status": 200,
  "data": {
    "totalActiveSessions": 12,
    "timestamp": "DateTime"
  }
}
```

---

## 9.6 Get Live Users
- **Endpoint**: `GET /api/useractivity/active-users`
- **Description**: Get list of currently active users

### Output Format
```json
{
  "success": true,
  "message": "Active users retrieved",
  "status": 200,
  "data": [
    {
      "userId": 1,
      "fullName": "string",
      "loginTime": "DateTime",
      "status": "active"
    }
  ]
}
```

---

## 9.7 Get All User Activity Logs
- **Endpoint**: `GET /api/useractivity/logs`
- **Description**: Get all user activity logs with optional name filter

### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | No | Filter by user name |
| page | number | No | Page number |
| limit | number | No | Records per page |

### Output Format
```json
{
  "success": true,
  "message": "Session logs retrieved successfully",
  "status": 200,
  "data": [
    {
      "session_id": 1,
      "user_id": 1,
      "full_name": "string",
      "role": "string",
      "login_time": "DateTime",
      "logout_time": "DateTime | null",
      "session_duration_minutes": 90
    }
  ]
}
```

---

# 10. Mentor Management Endpoints (`/api/mentors/`)

---

## 10.1 Get Mentee Count
- **Endpoint**: `GET /api/mentors/:id/mentees/count`
- **Description**: Get the number of mentees assigned to a mentor

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | number | Mentor ID |

### Output Format
```json
{
  "success": true,
  "message": "Mentees count retrieved successfully",
  "status": 200,
  "data": [{ "menteeCount": 5 }]
}
```

---

## 10.2 Get Mentees List
- **Endpoint**: `GET /api/mentors/:id/mentees`
- **Description**: Get list of all mentees for a specific mentor

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | number | Mentor ID |

### Output Format
```json
{
  "success": true,
  "message": "Mentees retrieved successfully",
  "status": 200,
  "data": [
    {
      "mentee_id": 1,
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

# FILE 3 — Assessment, CreateTest, Score & Users APIs (C# / ASP.NET Core)

## Base URL
```text
http://localhost:PORT/api
```

---

# 11. Assessment Endpoints (`/api/Assessment`)

---

## 11.1 Get Upcoming Assessments by User
- **Endpoint**: `GET /api/Assessment/user/{userId}`
- **Description**: Retrieve upcoming assessments for a specific user within a date range

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | long | User ID |

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| fromDate | DateTime | Start date of the range |
| toDate | DateTime | End date of the range |

### Output Format
```json
[
  {
    "assessmentId": 1,
    "title": "Assessment Title",
    "scheduledDate": "2025-01-01T10:00:00"
  }
]
```

---

## 11.2 Get All Assessments
- **Endpoint**: `GET /api/Assessment/all`
- **Description**: Retrieve all assessments

### Output Format
```json
[
  {
    "assessmentId": 1,
    "title": "Assessment Title",
    "isActive": true
  }
]
```

---

## 11.3 Get All Tests
- **Endpoint**: `GET /api/Assessment/tests`
- **Description**: Retrieve all available tests

### Output Format
```json
[
  { "testId": 1, "testName": "Test Name" }
]
```

---

## 11.4 Get All Students
- **Endpoint**: `GET /api/Assessment/students`
- **Description**: Retrieve all students

### Output Format
```json
[
  { "studentId": 101, "studentName": "John Doe" }
]
```

---

## 11.5 Assign Assessment
- **Endpoint**: `POST /api/Assessment/assigned`
- **Description**: Assign an assessment to students

### Input Format
```json
{
  "assessmentId": 1,
  "studentIds": [101, 102, 103]
}
```

### Output Format
```json
"Assessment Assigned Successfully"
```

---

## 11.6 Get Assessment Questions
- **Endpoint**: `GET /api/Assessment/{assessmentId}/questions`
- **Description**: Retrieve all questions for a specific assessment

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| assessmentId | int | Assessment ID |

### Output Format
```json
[
  {
    "questionId": 1,
    "questionText": "What is...?",
    "options": ["A", "B", "C", "D"]
  }
]
```

---

## 11.7 Submit Assessment Answers
- **Endpoint**: `POST /api/Assessment/submit`
- **Description**: Submit answers for a completed assessment

### Input Format
```json
{
  "studentId": 101,
  "assessmentId": 1,
  "answers": [
    { "questionId": 1, "selectedOption": "A" }
  ]
}
```

### Output Format
```json
{ "message": "Assessment submitted successfully" }
```

---

## 11.8 Get Assessment Result
- **Endpoint**: `GET /api/Assessment/{studentId}/{assessmentId}`
- **Description**: Retrieve assessment result for a specific student and assessment

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | int | Student ID |
| assessmentId | int | Assessment ID |

### Output Format
```json
{
  "studentId": 101,
  "assessmentId": 1,
  "score": 85,
  "totalMarks": 100
}
```

---

## 11.9 Get Total Assessments Count
- **Endpoint**: `GET /api/Assessment/total`
- **Description**: Retrieve the total number of assessments

### Output Format
```json
{ "totalAssessment": 25 }
```

---

## 11.10 Get Completed Assessments Count
- **Endpoint**: `GET /api/Assessment/completed`
- **Description**: Retrieve the count of completed assessments

### Output Format
```json
{ "completedAssessment": 18 }
```

---

## 11.11 Deactivate Assessment
- **Endpoint**: `DELETE /api/Assessment/InActive/{id}`
- **Description**: Mark an assessment as inactive

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | long | Assessment ID |

### Output Format
```json
{ "message": "Assessment InActive successfully" }
```

---

## 11.12 Cancel Assessments by Test
- **Endpoint**: `POST /api/Assessment/cancel/test/{testId}`
- **Description**: Cancel all assessments associated with a specific test

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| testId | long | Test ID |

### Output Format
```json
{
  "message": "Test cancelled successfully.",
  "cancelledCount": 5
}
```

---

## 11.13 Restore Assessment
- **Endpoint**: `POST /api/Assessment/restore/{id}`
- **Description**: Restore a previously deactivated assessment

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | long | Assessment ID |

### Output Format
```json
{ "message": "Assessment restored successfully" }
```

---

## 11.14 Get Assessment Summaries for Student
- **Endpoint**: `GET /api/Assessment/summaries/{studentId}`
- **Description**: Retrieve all assessment summaries for a specific student

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | long | Student ID |

### Output Format
```json
[
  {
    "assessmentId": 1,
    "title": "Assessment Title",
    "score": 85,
    "status": "Completed"
  }
]
```

---

## 11.15 Get Student Assessment Status
- **Endpoint**: `GET /api/Assessment/student-assessments-status`
- **Description**: Retrieve all assessments with student status

### Output Format
```json
[
  { "assessmentId": 1, "title": "Assessment Title", "isActive": true }
]
```

---

# 12. CreateTest Endpoints (`/api/CreateTest`)

---

## 12.1 Get Questions by Concept
- **Endpoint**: `GET /api/CreateTest/questions`
- **Description**: Retrieve questions filtered by concept

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| concept | string | Concept name to filter questions |

### Output Format
```json
[
  { "questionId": 1, "questionText": "What is...?", "concept": "OOP" }
]
```

---

## 12.2 Create Test
- **Endpoint**: `POST /api/CreateTest/create`
- **Description**: Create a new test

### Input Format
```json
{
  "testName": "Test Name",
  "description": "Test Description",
  "duration": 60
}
```

### Output Format
```json
{ "testId": 1 }
```

---

## 12.3 Cancel Test
- **Endpoint**: `PUT /api/CreateTest/cancel/{id}`
- **Description**: Cancel an existing test

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | int | Test ID |

### Output Format
```json
"Test cancelled successfully"
```

---

## 12.4 Add Questions to Test
- **Endpoint**: `POST /api/CreateTest/add-questions`
- **Description**: Add multiple questions to an existing test

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| testId | long | Test ID |

### Input Format
```json
{ "questionIds": [1, 2, 3, 4] }
```

### Output Format
```json
{
  "message": "Questions added successfully",
  "testId": 1,
  "addedCount": 4,
  "skippedCount": 0
}
```

---

## 12.5 Get 20 Questions
- **Endpoint**: `GET /api/CreateTest/20questions`
- **Description**: Retrieve the first 20 questions ordered by ID

### Output Format
```json
[
  { "questionId": 1, "questionText": "What is...?", "concept": "OOP" }
]
```

---

# 13. Auth Endpoints — OTP (`/api/auth`)

---

## 13.1 Send One-Time Password
- **Endpoint**: `POST /api/auth/send-password`
- **Description**: Generate and send a one-time password to the given email

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| email | string | User's email address |

### Output Format
```json
{ "password": "generatedPassword123" }
```

---

## 13.2 Verify One-Time Password
- **Endpoint**: `POST /api/auth/verify-password`
- **Description**: Verify a one-time password for a user

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| email | string | User's email address |
| password | string | One-time password to verify |

### Output Format
```json
"password Verified Successfully"
```
OR
```json
"Invalid or Expired Password"
```

---

# 14. Expertise Endpoints (`/api/Expertise`)

---

## 14.1 Add Expertise
- **Endpoint**: `POST /api/Expertise/expertise`
- **Description**: Add expertise for an SME (Subject Matter Expert)

### Input Format
```json
{
  "expertiseId": 1,
  "concept": "Machine Learning",
  "smeId": 10
}
```

### Output Format
```json
{
  "message": "Expertise Added Successfully",
  "insertedRows": 1,
  "data": {
    "expertiseId": 1,
    "concept": "Machine Learning",
    "smeId": 10
  }
}
```

---

# 15. Questions Endpoints — C# (`/api/Questions`)

---

## 15.1 Get All Concepts
- **Endpoint**: `GET /api/Questions/concepts`
- **Description**: Retrieve all available concepts

### Output Format
```json
[
  { "conceptId": 1, "conceptName": "OOP" }
]
```

---

## 15.2 Get Student Assessment Question Results
- **Endpoint**: `GET /api/Questions/{assessmentId}/student/{studentId}`
- **Description**: Retrieve question-level results for a student in a specific assessment

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| assessmentId | int | Assessment ID |
| studentId | int | Student ID |

### Output Format
```json
[
  {
    "questionId": 1,
    "questionText": "What is...?",
    "selectedAnswer": "A",
    "correctAnswer": "A",
    "isCorrect": true
  }
]
```

---

## 15.3 Get Question Details with Answer
- **Endpoint**: `GET /api/Questions/{questionId}/answer`
- **Description**: Retrieve full question details including the correct answer

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| questionId | int | Question ID |

### Output Format
```json
{
  "questionId": 1,
  "questionText": "What is...?",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "A"
}
```

---

## 15.4 Get Question Details
- **Endpoint**: `GET /api/Questions/{questionId}`
- **Description**: Retrieve question details without the answer

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| questionId | int | Question ID |

### Output Format
```json
{
  "questionId": 1,
  "questionText": "What is...?",
  "options": ["A", "B", "C", "D"]
}
```

---

# 16. Score Endpoints (`/api/Score`)

---

## 16.1 Get Average Score by Student ID
- **Endpoint**: `GET /api/Score/GetAverageScoreById/{studentId}`
- **Description**: Retrieve average assessment score for a specific student

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | int | Student ID |

### Output Format
```json
{ "studentId": 11, "averageScore": 78.5 }
```

---

## 16.2 Get All Students Average Score
- **Endpoint**: `GET /api/Score/GetAllStudentsAverageScore`
- **Description**: Retrieve average scores for all students

### Output Format
```json
[
  { "studentId": 11, "averageScore": 78.5 }
]
```

---

## 16.3 Get Assessment Result Data
- **Endpoint**: `GET /api/Score/GetAssessmentResultData/{studentId}/{assessmentId}`
- **Description**: Retrieve detailed score data for a student's specific assessment

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | int | Student ID |
| assessmentId | int | Assessment ID |

### Output Format
```json
{
  "studentId": 11,
  "assessmentId": 1,
  "score": 8.5,
  "totalMarks": 100,
  "percentage": 85.0
}
```

---

# 17. StudentResult Endpoints (`/api/StudentResult`)

---

## 17.1 Get All Student Results
- **Endpoint**: `GET /api/StudentResult`
- **Description**: Retrieve all student assessment results

### Output Format
```json
[
  {
    "studentId": 11,
    "studentName": "Nirjala Naik",
    "assessmentId": 1,
    "score": 8
  }
]
```

---

## 17.2 Get Student Answer Result
- **Endpoint**: `GET /api/StudentResult/{studentId}/{assessmentId}/{questionId}`
- **Description**: Retrieve a student's answer result for a specific question in an assessment

### Path Variables
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | int | Student ID |
| assessmentId | int | Assessment ID |
| questionId | int | Question ID |

### Output Format
```json
{
  "questionId": 1,
  "selectedAnswer": "A",
  "correctAnswer": "A",
  "isCorrect": true
}
```

---

# 18. Students Endpoints (`/api/Students`)

---

## 18.1 Get Total Students
- **Endpoint**: `GET /api/Students/total`
- **Description**: Retrieve the total number of students

### Output Format
```json
{ "totalStudents": 40 }
```

---

# 19. Users Endpoints — C# (`/api/Users`)

---

## 19.1 Get Personal Details
- **Endpoint**: `GET /api/Users/personal/{userId}`
- **Description**: Retrieve personal details of a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
{
  "userId": 1,
  "firstName": "Sahil",
  "lastName": "Kamble",
  "email": "sahil@example.com"
}
```

---

## 19.2 Get Professional Details
- **Endpoint**: `GET /api/Users/professional/{userId}`
- **Description**: Retrieve professional details of a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
{
  "userId": 1,
  "designation": "Software Engineer",
  "department": "Engineering"
}
```

---

## 19.3 Get Academic Details
- **Endpoint**: `GET /api/Users/academic/{userId}`
- **Description**: Retrieve academic details of a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
{
  "userId": 1,
  "degree": "B.Tech",
  "institution": "JSPM"
}
```

---

## 19.4 Get Full Name
- **Endpoint**: `GET /api/Users/fullname/{userId}`
- **Description**: Retrieve the full name of a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
{ "fullName": "Sahil Kamble" }
```

---

## 19.5 Get Role by User ID
- **Endpoint**: `GET /api/Users/role/{userId}`
- **Description**: Retrieve all roles assigned to a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
[
  { "roleId": 1, "roleName": "Admin" }
]
```

---

# 20. UserSessions Endpoints (`/api/UserSessions`)

---

## 20.1 Get All User Sessions
- **Endpoint**: `GET /api/UserSessions/all`
- **Description**: Retrieve all user session records

### Output Format
```json
[
  {
    "sessionId": 1,
    "userId": 11,
    "loginTime": "2025-01-01T09:00:00",
    "logoutTime": "2025-01-01T17:00:00"
  }
]
```

---

## 20.2 Get Total User Sessions
- **Endpoint**: `GET /api/UserSessions/total-sessions`
- **Description**: Retrieve the total count of user sessions

### Output Format
```json
{ "totalSessions": 320 }
```

---

> **Notes**
> - All timestamps are in ISO-8601 format.
> - `PATCH` is used for partial updates; `PUT` for full updates or status changes.
> - The TFL Assessment API (File 2) uses a consistent `{ success, message, status, data }` response envelope.
> - The C# / ASP.NET Core APIs (Files 1 & 3) return plain JSON objects or arrays.
