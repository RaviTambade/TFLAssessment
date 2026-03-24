Below are **Agile User Stories mapped to each SME (Subject Matter Expert) REST API endpoint** for the **TFLCoMentor SME Portal**.
This helps **developers, testers, product owners, and students understand the purpose of each API clearly**.

# 🧑‍🔬 1️⃣ Test Management APIs

SMEs are responsible for **creating assessments used by students, mentors, and employers**.

# User Story: Create a Test

**As an SME**
I want to create a technical test
So that student skills can be evaluated.

**API**

```http
POST /api/sme/tests
```

Example Request

```json
{
 "title": "C Programming Basics",
 "duration": 60,
 "totalMarks": 50,
 "difficulty": "Intermediate"
}
```

**Acceptance Criteria**

* SME can define test title
* SME can set duration
* SME can set total marks
* Test should appear in test library

**Business Value**

Creates **structured assessments for evaluating student knowledge**.

# User Story: View Test List

**As an SME**
I want to see all tests created by me
So that I can manage and reuse them.

**API**

```http
GET /api/sme/tests
```

**Acceptance Criteria**

* System should return list of tests
* Include title, difficulty, and creation date


# User Story: View Test Details

**As an SME**
I want to see the details of a test
So that I can review its configuration.

**API**

```http
GET /api/sme/tests/{testId}
```

**Acceptance Criteria**

* Display test duration
* Display total marks
* Display number of questions

# User Story: Update Test

**As an SME**
I want to update test details
So that I can modify test configuration.

**API**

```http
PUT /api/sme/tests/{testId}
```

**Acceptance Criteria**

* SME can modify duration
* SME can modify difficulty
* Changes should update immediately

# User Story: Delete Test

**As an SME**
I want to delete a test
So that outdated assessments are removed.

**API**

```http
DELETE /api/sme/tests/{testId}
```

**Acceptance Criteria**

* Test should be removed from test library
* System should prevent deletion if students attempted the test

# 📚 2️⃣ Question Bank APIs

SMEs maintain the **core knowledge repository of the platform**.

# User Story: View Question Bank

**As an SME**
I want to view all questions in the question bank
So that I can reuse them while creating tests.

**API**

```http
GET /api/sme/questions
```

Example

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

**Acceptance Criteria**

* Questions should be filterable by type
* Questions should show difficulty level

# User Story: Add a Question

**As an SME**
I want to add a question to the question bank
So that it can be used in assessments.

**API**

```http
POST /api/sme/questions
```

Example

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

**Acceptance Criteria**

* Question should be stored in question bank
* Question should be tagged by type and difficulty

# User Story: View Question Details

**As an SME**
I want to view a specific question
So that I can verify its correctness.

**API**

```http
GET /api/sme/questions/{questionId}
```

**Acceptance Criteria**

* System should display question text
* System should display options and correct answer

# User Story: Update Question

**As an SME**
I want to update a question
So that errors can be corrected.

**API**

```http
PUT /api/sme/questions/{questionId}
```

**Acceptance Criteria**

* SME can modify question text
* SME can modify options or difficulty

# User Story: Delete Question

**As an SME**
I want to remove a question from the question bank
So that outdated questions are removed.

**API**

```http
DELETE /api/sme/questions/{questionId}
```

**Acceptance Criteria**

* Question should be removed
* System should prevent deletion if used in active tests


# 🧩 3️⃣ Test Question Mapping APIs

When creating tests, SMEs **select questions from the question bank**.

# User Story: Add Questions to Test

**As an SME**
I want to add questions to a test
So that the test can evaluate students.

**API**

```http
POST /api/sme/tests/{testId}/questions
```

Example Request

```json
{
 "questionIds":[12,18,34]
}
```

**Acceptance Criteria**

* Questions should be linked to test
* Total marks should update automatically

# 👤 4️⃣ SME Profile APIs

# User Story: View SME Profile

**As an SME**
I want to see my profile information
So that I can verify my expertise details.

**API**

```http
GET /api/sme/profile
```

**Acceptance Criteria**

* Profile should show expertise areas
* Profile should show tests created

# User Story: Update SME Profile

**As an SME**
I want to update my profile
So that my expertise information remains accurate.

**API**

```http
PUT /api/sme/profile
```

**Acceptance Criteria**

* SME can update skills
* SME can update experience


# 🧠 Role of SME in TFLCoMentor Ecosystem

The SME role is responsible for **knowledge and assessment quality**.

```text
SME creates questions
        │
        ▼
Tests are created
        │
        ▼
Students attempt assessments
        │
        ▼
Mentors evaluate performance
        │
        ▼
Employers review results
```

This is similar to **assessment systems used in modern learning platforms** like:

* Coursera
* Udacity
* HackerRank

# 🧩 Complete TFLCoMentor Role Architecture

The platform is designed with **clear role-based routing**:

```text
/admin/*
/student/*
/mentor/*
/sme/*
/employer/*
```

This ensures:

- ✔ modular architecture
- ✔ scalable system design
- ✔ easier development and maintenance
