

# 🧑‍🔬 2️⃣ Lecture Management APIs

SMEs can **create and manage learning lectures for students**.

---

# User Story: Create a Lecture

**As an SME**
I want to create a lecture
So that students can learn a concept through structured content.

**API**

```http
POST /api/sme/lectures
```

Example Request

```json
{
 "title": "Introduction to Data Structures",
 "description": "Basic overview of arrays and linked lists",
 "videoUrl": "https://video-platform/lecture1",
 "conceptId": 10
}
```

**Acceptance Criteria**

* SME can add lecture title
* SME can attach video or learning material
* Lecture should be linked to a concept
* Lecture should appear in lecture list

**Business Value**

Provides **structured learning content for students before assessments**.

---

# User Story: View Lecture List

**As an SME**
I want to view all lectures created by me
So that I can manage course content.

**API**

```http
GET /api/sme/lectures
```

**Acceptance Criteria**

* System should return list of lectures
* Each lecture should show title and creation date

---

# User Story: View Lecture Details

**As an SME**
I want to view lecture details
So that I can verify the content.

**API**

```http
GET /api/sme/lectures/{lectureId}
```

**Acceptance Criteria**

* System should show lecture title
* System should show description
* System should show video or material link

---

# User Story: Update Lecture

**As an SME**
I want to edit lecture details
So that I can improve learning content.

**API**

```http
PUT /api/sme/lectures/{lectureId}
```

**Acceptance Criteria**

* SME can update title
* SME can update description
* SME can replace video/material

---

# User Story: Delete Lecture

**As an SME**
I want to delete a lecture
So that outdated learning content is removed.

**API**

```http
DELETE /api/sme/lectures/{lectureId}
```

**Acceptance Criteria**

* Lecture should be removed from lecture library
* Students should not see deleted lectures

---

# 🧑‍🏫 3️⃣ Assignment Management APIs

Assignments help **evaluate student understanding after lectures**.

---

# User Story: Create Assignment

**As an SME**
I want to create an assignment
So that students can practice learned concepts.

**API**

```http
POST /api/sme/assignments
```

Example Request

```json
{
 "title": "Linked List Implementation",
 "description": "Implement singly linked list in C",
 "deadline": "2026-04-15",
 "totalMarks": 20
}
```

**Acceptance Criteria**

* SME can define assignment title
* SME can define deadline
* Assignment should appear in assignment list

**Business Value**

Encourages **practice-based learning for students**.

---

# User Story: View Assignment List

**As an SME**
I want to see all assignments
So that I can manage student tasks.

**API**

```http
GET /api/sme/assignments
```

**Acceptance Criteria**

* System should return list of assignments
* Each assignment should show title and deadline

---

# User Story: View Assignment Details

**As an SME**
I want to view assignment details
So that I can review task instructions.

**API**

```http
GET /api/sme/assignments/{assignmentId}
```

**Acceptance Criteria**

* System should display description
* System should display deadline
* System should display total marks

---

# User Story: Update Assignment

**As an SME**
I want to modify assignment details
So that I can adjust deadlines or instructions.

**API**

```http
PUT /api/sme/assignments/{assignmentId}
```

**Acceptance Criteria**

* SME can update deadline
* SME can update description
* Changes should reflect immediately

---

# User Story: Delete Assignment

**As an SME**
I want to delete an assignment
So that outdated tasks are removed.

**API**

```http
DELETE /api/sme/assignments/{assignmentId}
```

**Acceptance Criteria**

* Assignment should be removed from list
* System should prevent deletion if submissions exist

---

# User Story: View Assignment Submissions

**As an SME**
I want to see student submissions for an assignment
So that I can review student work.

**API**

```http
GET /api/sme/assignments/{assignmentId}/submissions
```

**Acceptance Criteria**

* System should return list of students
* Each submission should show submission time
* SME should be able to view submission files

**Business Value**

Allows **performance evaluation and feedback for students**.

---

# 🧠 4️⃣ Concept Management APIs

Concepts represent **core knowledge units of a course**.

---

# User Story: View Concepts

**As an SME**
I want to view all concepts
So that I can organize lectures and questions.

**API**

```http
GET /api/sme/concepts
```

**Acceptance Criteria**

* System should return concept list
* Each concept should show name and description

---

# User Story: Add Concept

**As an SME**
I want to create a concept
So that lectures and questions can be categorized.

**API**

```http
POST /api/sme/concepts
```

Example Request

```json
{
 "name": "Pointers",
 "description": "Memory address variables in C programming"
}
```

**Acceptance Criteria**

* Concept should be stored in database
* Concept should be usable in lectures and questions

---

# User Story: View Concept Details

**As an SME**
I want to view concept details
So that I can verify learning content mapping.

**API**

```http
GET /api/sme/concepts/{conceptId}
```

**Acceptance Criteria**

* System should display concept name
* System should display description

---

# User Story: Update Concept

**As an SME**
I want to modify a concept
So that concept descriptions stay accurate.

**API**

```http
PUT /api/sme/concepts/{conceptId}
```

**Acceptance Criteria**

* SME can update concept description
* Changes should update immediately

---

# User Story: Delete Concept

**As an SME**
I want to delete a concept
So that unused concepts are removed.

**API**

```http
DELETE /api/sme/concepts/{conceptId}
```

**Acceptance Criteria**

* Concept should be removed
* System should prevent deletion if linked to lectures or questions

---

# 📊 5️⃣ Analytics APIs

Analytics help SMEs **analyze student performance and improve assessments**.

---

# User Story: View Completed Tests

**As an SME**
I want to see completed tests
So that I can analyze student results.

**API**

```http
GET /api/sme/analytics/completed-tests
```

**Acceptance Criteria**

* System should return completed test list
* Each test should show number of attempts

---

# User Story: Analyze Student Performance

**As an SME**
I want to see student performance for a test
So that I can understand learning gaps.

**API**

```http
GET /api/sme/analytics/test/{testId}/student-performance
```

**Acceptance Criteria**

* System should return student scores
* System should show pass/fail status

---

# User Story: Analyze Question Difficulty

**As an SME**
I want to analyze question difficulty
So that I can improve assessment quality.

**API**

```http
GET /api/sme/analytics/test/{testId}/question-difficulty
```

**Acceptance Criteria**

* System should show question success rate
* Difficult questions should be highlighted

---

# User Story: View Score Distribution

**As an SME**
I want to see score distribution
So that I can understand test difficulty.

**API**

```http
GET /api/sme/analytics/test/{testId}/score-distribution
```

**Acceptance Criteria**

* System should show score ranges
* System should generate score distribution graph

---

# 🧩 Complete SME Responsibilities in TFLCoMentor

```
SME creates concepts
        │
        ▼
SME creates lectures
        │
        ▼
Students learn concepts
        │
        ▼
SME creates assignments & tests
        │
        ▼
Students attempt assessments
        │
        ▼
Analytics helps improve course quality
```

---