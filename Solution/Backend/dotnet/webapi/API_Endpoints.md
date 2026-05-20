# Project API Endpoints Summary

## Base URL
```text
http://localhost:PORT/api
```

---

# 1. Assessment Endpoints (`/api/Assessment`)

---

## 1.1 Get Upcoming Assessments by User
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

## 1.2 Get All Assessments
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

## 1.3 Get All Tests
- **Endpoint**: `GET /api/Assessment/tests`
- **Description**: Retrieve all available tests

### Output Format
```json
[
  {
    "testId": 1,
    "testName": "Test Name"
  }
]
```

---

## 1.4 Get All Students
- **Endpoint**: `GET /api/Assessment/students`
- **Description**: Retrieve all students

### Output Format
```json
[
  {
    "studentId": 101,
    "studentName": "John Doe"
  }
]
```

---

## 1.5 Assign Assessment
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

## 1.6 Get Assessment Questions
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

## 1.7 Submit Assessment Answers
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
{
  "message": "Assessment submitted successfully"
}
```

---

## 1.8 Get Assessment Result
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

## 1.9 Get Total Assessments Count
- **Endpoint**: `GET /api/Assessment/total`
- **Description**: Retrieve the total number of assessments

### Output Format
```json
{
  "totalAssessment": 25
}
```

---

## 1.10 Get Completed Assessments Count
- **Endpoint**: `GET /api/Assessment/completed`
- **Description**: Retrieve the count of completed assessments

### Output Format
```json
{
  "completedAssessment": 18
}
```

---

## 1.11 Deactivate Assessment
- **Endpoint**: `DELETE /api/Assessment/InActive/{id}`
- **Description**: Mark an assessment as inactive

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | long | Assessment ID |

### Output Format
```json
{
  "message": "Assessment InActive successfully"
}
```

---

## 1.12 Cancel Assessments by Test
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

## 1.13 Restore Assessment
- **Endpoint**: `POST /api/Assessment/restore/{id}`
- **Description**: Restore a previously deactivated assessment

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| id | long | Assessment ID |

### Output Format
```json
{
  "message": "Assessment restored successfully"
}
```

---

## 1.14 Get Assessment Summaries for Student
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

## 1.15 Get Student Assessment Status
- **Endpoint**: `GET /api/Assessment/student-assessments-status`
- **Description**: Retrieve all assessments with student status

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

# 2. CreateTest Endpoints (`/api/CreateTest`)

---

## 2.1 Get Questions by Concept
- **Endpoint**: `GET /api/CreateTest/questions`
- **Description**: Retrieve questions filtered by concept

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| concept | string | Concept name to filter questions |

### Output Format
```json
[
  {
    "questionId": 1,
    "questionText": "What is...?",
    "concept": "OOP"
  }
]
```

---

## 2.2 Create Test
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
{
  "testId": 1
}
```

---

## 2.3 Cancel Test
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

## 2.4 Add Questions to Test
- **Endpoint**: `POST /api/CreateTest/add-questions`
- **Description**: Add multiple questions to an existing test

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| testId | long | Test ID |

### Input Format
```json
{
  "questionIds": [1, 2, 3, 4]
}
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

## 2.5 Get 20 Questions
- **Endpoint**: `GET /api/CreateTest/20questions`
- **Description**: Retrieve the first 20 questions ordered by ID

### Output Format
```json
[
  {
    "questionId": 1,
    "questionText": "What is...?",
    "concept": "OOP"
  }
]
```

---

# 3. Auth Endpoints (`/api/auth`)

---

## 3.1 Send Password
- **Endpoint**: `POST /api/auth/send-password`
- **Description**: Generate and send a one-time password to the given email

### Query Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| email | string | User's email address |

### Output Format
```json
{
  "password": "generatedPassword123"
}
```

---

## 3.2 Verify Password
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

# 4. Expertise Endpoints (`/api/Expertise`)

---

## 4.1 Add Expertise
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

# 5. Questions Endpoints (`/api/Questions`)

---

## 5.1 Get All Concepts
- **Endpoint**: `GET /api/Questions/concepts`
- **Description**: Retrieve all available concepts

### Output Format
```json
[
  {
    "conceptId": 1,
    "conceptName": "OOP"
  }
]
```

---

## 5.2 Get Student Assessment Question Results
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

## 5.3 Get Question Details with Answer
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

## 5.4 Get Question Details
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

# 6. Score Endpoints (`/api/Score`)

---

## 6.1 Get Average Score by Student ID
- **Endpoint**: `GET /api/Score/GetAverageScoreById/{studentId}`
- **Description**: Retrieve average assessment score for a specific student

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| studentId | int | Student ID |

### Output Format
```json
{
  "studentId": 11,
  "averageScore": 78.5
}
```

---

## 6.2 Get All Students Average Score
- **Endpoint**: `GET /api/Score/GetAllStudentsAverageScore`
- **Description**: Retrieve average scores for all students

### Output Format
```json
[
  {
    "studentId": 11,
    "averageScore": 78.5
  }
]
```

---

## 6.3 Get Assessment Result Data
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

# 7. StudentResult Endpoints (`/api/StudentResult`)

---

## 7.1 Get All Student Results
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

## 7.2 Get Student Answer Result
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

# 8. Students Endpoints (`/api/Students`)

---

## 8.1 Get Total Students
- **Endpoint**: `GET /api/Students/total`
- **Description**: Retrieve the total number of students

### Output Format
```json
{
  "totalStudents": 40
}
```

---

# 9. Users Endpoints (`/api/Users`)

---

## 9.1 Get Personal Details
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

## 9.2 Get Professional Details
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

## 9.3 Get Academic Details
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

## 9.4 Get Full Name
- **Endpoint**: `GET /api/Users/fullname/{userId}`
- **Description**: Retrieve the full name of a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
{
  "fullName": "Sahil Kamble"
}
```

---

## 9.5 Get Role by User ID
- **Endpoint**: `GET /api/Users/role/{userId}`
- **Description**: Retrieve all roles assigned to a user

### Path Variable
| Parameter | Type | Description |
|-----------|------|-------------|
| userId | int | User ID |

### Output Format
```json
[
  {
    "roleId": 1,
    "roleName": "Admin"
  }
]
```

---

# 10. UserSessions Endpoints (`/api/UserSessions`)

---

## 10.1 Get All User Sessions
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

## 10.2 Get Total User Sessions
- **Endpoint**: `GET /api/UserSessions/total-sessions`
- **Description**: Retrieve the total count of user sessions

### Output Format
```json
{
  "totalSessions": 320
}
```

