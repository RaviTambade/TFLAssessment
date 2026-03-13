Structure followed:

* 🧑‍🔬 **User Story**
* 🔗 **API Endpoint**
* ✅ **Acceptance Criteria**
* 🎯 **Business Value**

---

# 🎓 1️⃣ Lecture Management

---

# User Story: Create a Lecture

**As an SME**
I want to create a lecture
So that students can access learning material for a topic.

**API**

```
POST /api/sme/lectures
```

Example Request

```json
{
 "title": "Introduction to Data Structures",
 "description": "Overview of arrays, stacks and queues",
 "videoUrl": "https://youtube.com/example",
 "conceptId": 5
}
```

**Acceptance Criteria**

* SME can enter lecture title
* SME can add lecture description
* SME can attach lecture video or content
* Lecture should appear in lecture list

**Business Value**

Provides structured **learning content for students**.

---

# User Story: View Lecture List

**As an SME**
I want to see all lectures
So that I can manage the uploaded learning materials.

**API**

```
GET /api/sme/lectures
```

**Acceptance Criteria**

* System should return list of lectures
* Each lecture should show title and creation date

---

# User Story: View Lecture Details

**As an SME**
I want to view lecture details
So that I can review the lecture content.

**API**

```
GET /api/sme/lectures/{lectureId}
```

**Acceptance Criteria**

* System displays lecture title
* System displays description
* System displays video link

---

# User Story: Edit Lecture

**As an SME**
I want to edit lecture content
So that outdated information can be updated.

**API**

```
PUT /api/sme/lectures/{lectureId}
```

**Acceptance Criteria**

* SME can modify title
* SME can modify lecture content
* Changes should update immediately

---

# 📝 2️⃣ Assignment Management

---

# User Story: Create Assignment

**As an SME**
I want to create an assignment
So that students can practice concepts.

**API**

```
POST /api/sme/assignments
```

Example

```json
{
 "title": "Linked List Assignment",
 "description": "Implement basic linked list operations",
 "deadline": "2026-04-01"
}
```

**Acceptance Criteria**

* SME can define assignment title
* SME can add description
* SME can set submission deadline

---

# User Story: View Assignment List

**As an SME**
I want to see all assignments
So that I can manage them.

**API**

```
GET /api/sme/assignments
```

**Acceptance Criteria**

* System returns list of assignments
* Shows title and deadline

---

# User Story: View Assignment Details

**As an SME**
I want to view assignment details
So that I can review assignment configuration.

**API**

```
GET /api/sme/assignments/{assignmentId}
```

---

# User Story: Edit Assignment

**As an SME**
I want to edit assignment details
So that corrections can be made.

**API**

```
PUT /api/sme/assignments/{assignmentId}
```

---

# User Story: View Assignment Submissions

**As an SME**
I want to view student submissions
So that I can evaluate student work.

**API**

```
GET /api/sme/assignments/{assignmentId}/submissions
```

**Acceptance Criteria**

* System should list all student submissions
* Each submission should show student name and submission time

---

# 🧪 3️⃣ Test Management

---

# User Story: Create Test

**As an SME**
I want to create a technical test
So that student skills can be evaluated.

**API**

```
POST /api/sme/tests
```

Example

```json
{
 "title": "Operating Systems Test",
 "duration": 60,
 "difficulty": "Intermediate"
}
```

---

# User Story: Review Test Before Publishing

**As an SME**
I want to review the test summary
So that I can verify test configuration before publishing.

**API**

```
GET /api/sme/tests/create/summary
```

---

# User Story: View Test History

**As an SME**
I want to view all tests created by me
So that I can manage previously created assessments.

**API**

```
GET /api/sme/tests/history
```

---

# User Story: View Test Details

**As an SME**
I want to view a test
So that I can review its configuration.

**API**

```
GET /api/sme/tests/{testId}
```

---

# User Story: Edit Test

**As an SME**
I want to modify test details
So that I can update test configuration.

**API**

```
PUT /api/sme/tests/{testId}
```

---

# 📚 4️⃣ Question Bank Management

---

# User Story: View MCQ Questions

**As an SME**
I want to view MCQ questions
So that I can reuse them while creating tests.

**API**

```
GET /api/sme/questions/mcq
```

---

# User Story: Add MCQ Question

**As an SME**
I want to add a multiple-choice question
So that it can be used in assessments.

**API**

```
POST /api/sme/questions/mcq
```

Example

```json
{
 "question":"What is polymorphism?",
 "options":["OOP concept","Loop","Database","Variable"],
 "correctAnswer":"OOP concept",
 "difficulty":"Medium"
}
```

---

# User Story: View MCQ Question Details

**API**

```
GET /api/sme/questions/mcq/{mcqId}
```

---

# User Story: Edit MCQ Question

**API**

```
PUT /api/sme/questions/mcq/{mcqId}
```

---

# User Story: Manage Coding Questions

**As an SME**
I want to manage coding questions
So that students can practice programming problems.

**APIs**

```
GET /api/sme/questions/code
POST /api/sme/questions/code
GET /api/sme/questions/code/{codeId}
PUT /api/sme/questions/code/{codeId}
```

---

# User Story: Manage Problem-Solving Questions

**APIs**

```
GET /api/sme/questions/problem
POST /api/sme/questions/problem
GET /api/sme/questions/problem/{problemId}
PUT /api/sme/questions/problem/{problemId}
```

---

# User Story: Manage Mock Interview Questions

**APIs**

```
GET /api/sme/questions/mock
POST /api/sme/questions/mock
GET /api/sme/questions/mock/{mockId}
PUT /api/sme/questions/mock/{mockId}
```

---

# User Story: Manage Mini Project Questions

**APIs**

```
GET /api/sme/questions/miniproject
POST /api/sme/questions/miniproject
GET /api/sme/questions/miniproject/{projectId}
PUT /api/sme/questions/miniproject/{projectId}
```

---

# 🧠 5️⃣ Concept Management

---

# User Story: Add Concept

**As an SME**
I want to add a concept
So that lectures and questions can be categorized.

**API**

```
POST /api/sme/concepts
```

---

# User Story: View Concepts

**API**

```
GET /api/sme/concepts
```

---

# User Story: View Concept Details

**API**

```
GET /api/sme/concepts/{conceptId}
```

---

# User Story: Edit Concept

**API**

```
PUT /api/sme/concepts/{conceptId}
```

---

# 📊 6️⃣ Analytics

---

# User Story: View Completed Tests

**As an SME**
I want to see completed tests
So that I can analyze results.

**API**

```
GET /api/sme/analytics/completed-tests
```

---

# User Story: View Student Performance

**As an SME**
I want to analyze student performance in a test
So that I can understand student strengths and weaknesses.

**API**

```
GET /api/sme/analytics/test/{testId}/student-performance
```

---

# User Story: View Question Difficulty Analysis

**API**

```
GET /api/sme/analytics/test/{testId}/question-difficulty
```

---

# User Story: View Score Distribution

**API**

```
GET /api/sme/analytics/test/{testId}/score-distribution
```

---

# 👤 7️⃣ SME Profile

---

# User Story: View Profile

**As an SME**
I want to see my profile information
So that I can verify my expertise details.

**API**

```
GET /api/sme/profile
```

---

# User Story: Edit Profile

**As an SME**
I want to update my profile
So that my expertise information remains accurate.

**API**

```
PUT /api/sme/profile
```

---
