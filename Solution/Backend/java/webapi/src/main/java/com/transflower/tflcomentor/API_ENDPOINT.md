# Project API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api/projects
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

# Question API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api/questions
```

---

# 1. Question Endpoints (`/api/questions`)

---

## 1.1 Get Question By ID

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

## 1.2 Get All Questions

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

## 1.3 Get Questions By Difficulty

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

## 1.4 Get Draft Questions

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

## 1.5 Update Single Question Status

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

## 1.6 Update Multiple Question Status

- **Endpoint**: `PATCH /api/questions/status/{status}`
- **Description**: Update status of multiple questions

### Path Variable

| Parameter | Type | Description |
|-----------|------|-------------|
| status | QuestionStatus | APPROVED / REJECTED / DRAFT |

### Input Format

```json
[
  1,
  2,
  3
]
```

### Output Format

```json
"Question status updated successfully"
```

---

## 1.7 Get Questions Between Dates

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

## 1.8 Get Complete Question Details

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

## 1.9 Update Question Details

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

## 1.10 Get Questions By Status

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

## 1.11 Get Questions By Concept ID

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

## 1.12 Get Question Count By Concept

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

## 1.13 Get Questions By Type

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

## 1.14 Insert Complete Question

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

# Question Filter API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api/filter
```

---

# 1. Question Filter Endpoints (`/api/filter`)

---

## 1.1 Filter Questions

- **Endpoint**: `GET /api/filter/questions`
- **Description**: Retrieve questions using multiple optional filters such as question type, difficulty level, status, language, layer, framework, and concept.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|-----------|-------------|
| question_type | QuestionType | No | MCQ / DESCRIPTIVE |
| difficulty_level | DifficultyLevel | No | BEGINNER / INTERMEDIATE / ADVANCE |
| status | QuestionStatus | No | DRAFT / APPROVED / REJECTED |
| language | String | No | Programming language |
| layer | String | No | Application layer |
| framework | String | No | Framework name |
| concept | String | No | Concept name |

---

### Example Request

```text
GET /api/filter/questions?question_type=MCQ&difficulty_level=BEGINNER&language=Java
```

---

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

# Interview API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api/interview
```

---

# 1. Interview Endpoints (`/api/interview`)

---

## 1.1 Schedule Interview

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

### Output

```json
Interview Scheduled Successfully
```

---

## 1.2 Get Interview Details

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

## 1.3 Get Upcoming Interviews

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

## 1.4 Get Interview History

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

## 1.5 Cancel Interview

- **Endpoint**: `PUT /api/interview/{interviewId}/cancel`
- **Description**: Cancel an interview

### Path Variables

| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format

```json
"Interview canceled successfully"
```

---

## 1.6 Accept Interview

- **Endpoint**: `PUT /api/interview/accept/{interviewId}`
- **Description**: Mark interview outcome as accepted

### Path Variables

| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format

```json
"Interview accepted successfully"
```

---

## 1.7 Reject Interview

- **Endpoint**: `PUT /api/interview/reject/{interviewId}`
- **Description**: Mark interview outcome as rejected

### Path Variables

| Parameter | Type | Description |
|-----------|------|-------------|
| interviewId | int | Interview ID |

### Output Format

```json
"Interview rejected successfully"
```

---

## 1.8 Add Interview Feedback

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

## 1.9 Get Interviews By Role

- **Endpoint**: `GET /api/interview/{roleId}`
- **Description**: Retrieve interviews based on role ID

### Path Variables

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

# Technology API Endpoints Summary

## Base URL

```text
http://localhost:PORT/api/technologies
```

---

# 1. Technology Endpoints (`/api/technologies`)

---

## 1.1 Get Concept Wise Question Count

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

## 1.2 Get Difficulty Wise Question Count

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
