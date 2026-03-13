

# SME Module Documentation

## 1. SME UI Navigation Structure

```
/sme
│
└── /sme/dashboard
    │
    ├── /sme/lectures
    │   ├── /sme/lectures/create
    │   ├── /sme/lectures/list
    │   └── /sme/lectures/:lectureId
    │       ├── /view
    │       └── /edit
    │
    ├── /sme/assignments
    │   ├── /sme/assignments/create
    │   ├── /sme/assignments/list
    │   └── /sme/assignments/:assignmentId
    │       ├── /view
    │       ├── /edit
    │       └── /submissions 
    ├── /sme/tests
    │   │
    │   ├── /sme/tests/create
    │   │   │
    │   │   ├── /sme/tests/create/form
    │   │   │   └── Test Details Form
    │   │   │
    │   │   └── /sme/tests/create/summary
    │   │       └── Review Test Before Publish
    │   │
    │   ├── /sme/tests/history
    │   │   │
    │   │   ├── Test Titles List
    │   │   │
    │   │   └── /sme/tests/history/:testId
    │   │       │
    │   │       ├── /view
    │   │       │   └── View Test Details
    │   │       │
    │   │       └── /edit
    │   │           └── Edit Test
    │   │
    │   └── /sme/tests/:testId
    │       └── Test Details Page
    │
    ├── /sme/questions
    │   │
    │   ├── /sme/questions/mcq
    │   │   │
    │   │   ├── /sme/questions/mcq/list
    │   │   ├── /sme/questions/mcq/add
    │   │   │
    │   │   └── /sme/questions/mcq/:mcqId
    │   │       ├── /view
    │   │       └── /edit
    │   │
    │   ├── /sme/questions/code
    │   │   │
    │   │   ├── /sme/questions/code/list
    │   │   ├── /sme/questions/code/add
    │   │   │
    │   │   └── /sme/questions/code/:codeId
    │   │       ├── /view
    │   │       └── /edit
    │   │
    │   ├── /sme/questions/problem
    │   │   │
    │   │   ├── /sme/questions/problem/list
    │   │   ├── /sme/questions/problem/add
    │   │   │
    │   │   └── /sme/questions/problem/:problemId
    │   │       ├── /view
    │   │       └── /edit
    │   │
    │   ├── /sme/questions/mock
    │   │   │
    │   │   ├── /sme/questions/mock/list
    │   │   ├── /sme/questions/mock/add
    │   │   │
    │   │   └── /sme/questions/mock/:mockId
    │   │       ├── /view
    │   │       └── /edit
    │   │
    │   ├── /sme/questions/miniproject
    │   │   │
    │   │   ├── /sme/questions/miniproject/list
    │   │   ├── /sme/questions/miniproject/add
    │   │   │
    │   │   └── /sme/questions/miniproject/:projectId
    │   │       ├── /view
    │   │       └── /edit
    │   │
    │   └── /sme/questions/summary
    │       └── Question Bank Overview
    │
    ├── /sme/concepts
    │   │
    │   ├── /sme/concepts/list
    │   ├── /sme/concepts/add
    │   │
    │   └── /sme/concepts/:conceptId
    │       ├── /view
    │       └── /edit
    │
    ├── /sme/analytics
    │   │
    │   ├── /sme/analytics/completed-tests
    │   │
    │   └── /sme/analytics/test/:testId
    │       ├── /student-performance
    │       ├── /question-difficulty
    │       └── /score-distribution
    │
    └── /sme/profile
        ├── /sme/profile/view
        └── /sme/profile/edit
```

---

# 2. SME REST API Design

## Base Path

```
/api/sme
```

---

# 2.1 Tests APIs

### Create Test

```
POST /api/sme/tests
```

### Get All Tests (History)

```
GET /api/sme/tests
```

### Get Test Details

```
GET /api/sme/tests/{testId}
```

### Update Test

```
PUT /api/sme/tests/{testId}
```

### Delete Test

```
DELETE /api/sme/tests/{testId}
```

---

# 2.2 Test Question Mapping

### Add Questions to Test

```
POST /api/sme/tests/{testId}/questions
```

Example Request Body

```json
{
  "questionIds": [12, 18, 34]
}
```

---

### Get Questions of a Test

```
GET /api/sme/tests/{testId}/questions
```

---

### Remove Question from Test

```
DELETE /api/sme/tests/{testId}/questions/{questionId}
```

---

# 2.3 Question Bank APIs

Use **type parameter instead of separate controllers**.

### Get Questions

```
GET /api/sme/questions
```

Example

```
/api/sme/questions?type=mcq
```

Supported Types

```
mcq
code
problem
mock
miniproject
```

---

### Add Question

```
POST /api/sme/questions
```

### Get Question Details

```
GET /api/sme/questions/{questionId}
```

### Update Question

```
PUT /api/sme/questions/{questionId}
```

### Delete Question

```
DELETE /api/sme/questions/{questionId}
```

---

### Question Bank Summary

```
GET /api/sme/questions/summary
```

---

# 2.4 Concepts APIs

### Get Concepts

```
GET /api/sme/concepts
```

### Add Concept

```
POST /api/sme/concepts
```

### Get Concept Details

```
GET /api/sme/concepts/{conceptId}
```

### Update Concept

```
PUT /api/sme/concepts/{conceptId}
```

### Delete Concept

```
DELETE /api/sme/concepts/{conceptId}
```

---

# 2.5 Analytics APIs

### Get Completed Tests

```
GET /api/sme/analytics/completed-tests
```

### Student Performance

```
GET /api/sme/analytics/test/{testId}/student-performance
```

### Question Difficulty Analysis

```
GET /api/sme/analytics/test/{testId}/question-difficulty
```

### Score Distribution

```
GET /api/sme/analytics/test/{testId}/score-distribution
```

---

# 2.6 Profile APIs

### View Profile

```
GET /api/sme/profile
```

### Update Profile

```
PUT /api/sme/profile
```

---

# 3. Final SME API Structure

```
/api/sme
│
├── /lectures
├── /assignments
├── /tests
├── /questions
├── /concepts
├── /runtimes
├── /analytics
└── /profile
```

---

