# 1️⃣ SME UI Routes (Frontend Navigation)
For the **SME (Subject Matter Expert) role** in **TFLCoMentor**, the routes should clearly separate **Test Management**, **Question Bank Management**, and **Profile**.
A clean route structure will help when implementing using frameworks like **ASP.NET Core** or **SpringBoot** or **dJango** or **Node.js**.

We will organize it in **three levels again**:

1️⃣ SME UI Routes
2️⃣ SME API Routes
3️⃣ Recommended Database/Module Mapping

```text
/sme
│
├── /sme/dashboard
│
├── /sme/tests
│     │
│     ├── /sme/tests/create
│     │      ├── /sme/tests/create/form
│     │      └── /sme/tests/create/summary
│     │
│     ├── /sme/tests/history
│     │      └── /sme/tests/history/:testId
│
├── /sme/questions
│     │
│     ├── /sme/questions/mcq
│     │      ├── /sme/questions/mcq/list
│     │      └── /sme/questions/mcq/add
│     │
│     ├── /sme/questions/code
│     │      ├── /sme/questions/code/list
│     │      └── /sme/questions/code/add
│     │
│     ├── /sme/questions/problem
│     │      ├── /sme/questions/problem/list
│     │      └── /sme/questions/problem/add
│     │
│     ├── /sme/questions/mock
│     │      ├── /sme/questions/mock/list
│     │      └── /sme/questions/mock/add
│     │
│     ├── /sme/questions/miniproject
│     │      ├── /sme/questions/miniproject/list
│     │      └── /sme/questions/miniproject/add
│     │
│     └── /sme/questions/summary
│
└── /sme/profile
```

This structure clearly separates **Test Creation vs Question Bank**.

# 2️⃣ SME REST API Routes

These APIs will power the UI.

# Test Management APIs

### Create Test

```http
POST /api/sme/tests
```

Body

```json
{
 "title": "C Programming Basics",
 "duration": 60,
 "totalMarks": 50,
 "difficulty": "Intermediate"
}
```

### Get Test List

```http
GET /api/sme/tests
```
### Get Test Details

```http
GET /api/sme/tests/{testId}
```

### Update Test

```http
PUT /api/sme/tests/{testId}
```

### Delete Test

```http
DELETE /api/sme/tests/{testId}
```

# Question Bank APIs

Instead of separate controllers, use **question type parameter**.

### Get Questions

```http
GET /api/sme/questions
```

Query Example

```
/api/sme/questions?type=mcq
```

Possible Types

```
mcq
code
problem
mock
miniproject
```

### Add Question

```http
POST /api/sme/questions
```

Example MCQ

```json
{
 "type":"mcq",
 "question":"What is pointer in C?",
 "options":[
  "Variable",
  "Memory address holder",
  "Function",
  "Loop"
 ],
 "correctAnswer":"Memory address holder",
 "difficulty":"Medium"
}
```

### Get Question Details

```http
GET /api/sme/questions/{questionId}
```

### Update Question

```http
PUT /api/sme/questions/{questionId}
```

### Delete Question

```http
DELETE /api/sme/questions/{questionId}
```


# Test Question Mapping

When SME creates a test, they choose questions from question bank.

```http
POST /api/sme/tests/{testId}/questions
```

Body

```json
{
 "questionIds":[12,18,34]
}
```
# Profile APIs

### Get SME Profile

```http
GET /api/sme/profile
```

### Update Profile

```http
PUT /api/sme/profile
```

# 3️⃣ Recommended SME Database Modules

```text
SME Module
│
├── Tests
│     ├── Test
│     ├── TestQuestions
│
├── QuestionBank
│     ├── Question
│     ├── QuestionOptions
│     ├── QuestionType
│
├── MiniProjects
│
└── SMEProfile
```

# 4️⃣ Important Design Suggestion (Very Useful)

Instead of multiple tables, use **one question table with type column**.

Example:

```text
Question
---------
questionId
questionText
type
difficulty
createdBy
createdDate
```

Types

```
MCQ
CODE
PROBLEM
MOCK
MINIPROJECT
```

This design makes **TFLCoMentor scalable**.


# 5️⃣ Full Role Route Map (Recommended)

For **TFLCoMentor**

```text
/admin/*
/student/*
/mentor/*
/sme/*
/employer/*
```
This keeps the platform **clean, scalable, and easy to maintain**.