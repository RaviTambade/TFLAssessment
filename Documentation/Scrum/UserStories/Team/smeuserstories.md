
* 🧑‍🔬 **User Story**
* 🔗 **API Endpoint**
* ✅ **Acceptance Criteria**
* 🎯 **Business Value**

---

# 🎓 1️⃣ Lecture Management
---

# User Story: Create Lecture

**🧑‍🔬 User Story**

As an **SME**
I want to **create a lecture**
So that students can access learning material for a topic.

**🔗 API Endpoint**

```
POST /api/sme/lectures
```

**Example Request**

```json
{
 "title": "Introduction to Algorithms",
 "description": "Basics of algorithm design and complexity",
 "videoUrl": "https://youtube.com/example",
 "conceptId": 3
}
```

**✅ Acceptance Criteria**

* SME can enter lecture title
* SME can enter lecture description
* SME can attach video/content link
* Lecture should be stored successfully

**🎯 Business Value**

Provides **structured learning material** for students.

---

# User Story: View Lecture List

**🧑‍🔬 User Story**

As an **SME**
I want to **view all lectures**
So that I can manage uploaded learning materials.

**🔗 API Endpoint**

```
GET /api/sme/lectures
```

**✅ Acceptance Criteria**

* System returns list of lectures
* Each lecture shows title and creation date
* SME can select a lecture to view details

**🎯 Business Value**

Helps SMEs **manage educational content efficiently**.

---

# User Story: View Lecture Details

**🧑‍🔬 User Story**

As an **SME**
I want to **view lecture details**
So that I can review the lecture content.

**🔗 API Endpoint**

```
GET /api/sme/lectures/{lectureId}
```

**✅ Acceptance Criteria**

* System displays lecture title
* System displays description
* System displays video/content link
* System shows related concept

**🎯 Business Value**

Ensures **content quality and verification**.

---

# User Story: Search Lecture

**🧑‍🔬 User Story**

As an **SME**
I want to **search lectures**
So that I can quickly find a specific lecture.

**🔗 API Endpoint**

```
GET /api/sme/lectures/search?keyword={keyword}
```

**Example**

```
GET /api/sme/lectures/search?keyword=algorithm
```

**✅ Acceptance Criteria**

* System should allow keyword search
* Results should show matching lectures
* Search should be fast and accurate

**🎯 Business Value**

Improves **content discoverability**.

---

# User Story: Update Lecture

**🧑‍🔬 User Story**

As an **SME**
I want to **update lecture content**
So that outdated information can be corrected.

**🔗 API Endpoint**

```
PUT /api/sme/lectures/{lectureId}
```

**Example**

```json
{
 "title": "Advanced Algorithms",
 "description": "Updated lecture with more examples"
}
```

**✅ Acceptance Criteria**

* SME can edit title
* SME can edit description
* SME can update video/content
* Changes should be saved successfully

**🎯 Business Value**

Keeps **learning content updated**.

---

# 📝 2️⃣ Assignment Management

---

# User Story: Create Assignment

**🧑‍🔬 User Story**

As an **SME**
I want to **create an assignment**
So that students can practice concepts learned in lectures.

**🔗 API Endpoint**

```
POST /api/sme/assignments
```

**Example Request**

```json
{
 "title": "Sorting Algorithms Assignment",
 "description": "Implement bubble sort and quick sort",
 "deadline": "2026-04-01"
}
```

**✅ Acceptance Criteria**

* SME can enter assignment title
* SME can add description
* SME can set submission deadline

**🎯 Business Value**

Encourages **hands-on student learning**.

---

# User Story: View Assignment List

**🧑‍🔬 User Story**

As an **SME**
I want to **view all assignments**
So that I can manage assignments easily.

**🔗 API Endpoint**

```
GET /api/sme/assignments
```

**✅ Acceptance Criteria**

* System returns assignment list
* Each assignment shows title and deadline

**🎯 Business Value**

Allows **centralized assignment management**.

---

# User Story: View Assignment Details

**🧑‍🔬 User Story**

As an **SME**
I want to **view assignment details**
So that I can review assignment instructions.

**🔗 API Endpoint**

```
GET /api/sme/assignments/{assignmentId}
```

**✅ Acceptance Criteria**

* System displays title
* System displays description
* System displays submission deadline

**🎯 Business Value**

Ensures **clear assignment instructions**.

---

# User Story: Update Assignment

**🧑‍🔬 User Story**

As an **SME**
I want to **edit assignment details**
So that corrections can be made.

**🔗 API Endpoint**

```
PUT /api/sme/assignments/{assignmentId}
```

**✅ Acceptance Criteria**

* SME can update title
* SME can update instructions
* SME can update deadline

**🎯 Business Value**

Maintains **accurate assignment information**.

---

# User Story: View Assignment Submissions

**🧑‍🔬 User Story**

As an **SME**
I want to **view student submissions**
So that I can review student work.

**🔗 API Endpoint**

```
GET /api/sme/assignments/{assignmentId}/submissions
```

**✅ Acceptance Criteria**

* System displays student submissions
* Shows student name
* Shows submission time

**🎯 Business Value**

Allows **tracking student work**.

---

# User Story: Evaluate Assignment

**🧑‍🔬 User Story**

As an **SME**
I want to **evaluate assignments submitted by students**
So that I can give marks and feedback.

**🔗 API Endpoint**

```
POST /api/sme/assignments/{assignmentId}/evaluate
```

**Example**

```json
{
 "studentId": 101,
 "marks": 8,
 "feedback": "Good implementation but optimize complexity"
}
```

**✅ Acceptance Criteria**

* SME can assign marks
* SME can add feedback
* Evaluation should be stored successfully

**🎯 Business Value**

Supports **student performance evaluation**.

---

# 🧠 3️⃣ Concept Management

---

# User Story: View Concepts

**🧑‍🔬 User Story**

As an **SME**
I want to **view all concepts**
So that I can organize lectures and questions.

**🔗 API Endpoint**

```
GET /api/sme/concepts
```

**✅ Acceptance Criteria**

* System returns concept list
* Each concept shows name and description

**🎯 Business Value**

Helps **structure the curriculum**.

---

# User Story: Add Concept

**🧑‍🔬 User Story**

As an **SME**
I want to **add a new concept**
So that lectures and questions can be categorized.

**🔗 API Endpoint**

```
POST /api/sme/concepts
```

**Example**

```json
{
 "name": "Data Structures",
 "description": "Concepts related to data organization"
}
```

**✅ Acceptance Criteria**

* SME can enter concept name
* SME can enter description

**🎯 Business Value**

Improves **content organization**.

---

# User Story: View Concept Details

**🧑‍🔬 User Story**

As an **SME**
I want to **view concept details**
So that I can review concept information.

**🔗 API Endpoint**

```
GET /api/sme/concepts/{conceptId}
```

**✅ Acceptance Criteria**

* System shows concept name
* System shows description
* System shows related lectures

**🎯 Business Value**

Helps SMEs **manage curriculum topics**.

---

# User Story: Update Concept

**🧑‍🔬 User Story**

As an **SME**
I want to **update concept information**
So that concept details remain accurate.

**🔗 API Endpoint**

```
PUT /api/sme/concepts/{conceptId}
```

**✅ Acceptance Criteria**

* SME can update concept name
* SME can update description
* SME can Deactivate an outdated concept
**🎯 Business Value**

Keeps **concept data updated**.


# ⚙️ 4️⃣ Runtime Management

---

# User Story: View Runtime

🧑‍🔬 **User Story**

As an **SME**
I want to **view all runtime environments**
So that I know which programming environments are available for coding questions.

🔗 **API Endpoint**

```
GET /api/sme/runtimes
```

✅ **Acceptance Criteria**

* System returns list of runtimes
* Each runtime shows language name and version
* SME can select runtime for viewing details

🎯 **Business Value**

Helps manage **supported programming environments**.

---

# User Story: Add Runtime

🧑‍🔬 **User Story**

As an **SME**
I want to **add a runtime environment**
So that coding questions can be executed in the correct programming language.

🔗 **API Endpoint**

```
POST /api/sme/runtimes
```

Example Request

```json
{
 "language": "Java",
 "version": "17",
 "compiler": "javac"
}
```

✅ **Acceptance Criteria**

* SME can enter language name
* SME can enter runtime version
* Runtime should be saved successfully

🎯 **Business Value**

Allows platform to **support multiple coding languages**.

---

# User Story: View Runtime Detail

🧑‍🔬 **User Story**

As an **SME**
I want to **view runtime configuration details**
So that I can verify execution settings.

🔗 **API Endpoint**

```
GET /api/sme/runtimes/{runtimeId}
```

✅ **Acceptance Criteria**

* System displays runtime language
* System displays version
* System displays execution command

🎯 **Business Value**

Ensures **correct configuration for coding execution**.

---

# User Story: Update Runtime

🧑‍🔬 **User Story**

As an **SME**
I want to **update runtime configuration**
So that outdated versions can be replaced.

🔗 **API Endpoint**

```
PUT /api/sme/runtimes/{runtimeId}
```

✅ **Acceptance Criteria**

* SME can modify runtime version
* SME can update compiler or execution command

🎯 **Business Value**

Keeps **execution environment updated**.

---

# 📊 5️⃣ Analytics

---

# User Story: View Completed Tests

🧑‍🔬 **User Story**

As an **SME**
I want to **view completed tests**
So that I can analyze test results.

🔗 **API Endpoint**

```
GET /api/sme/analytics/completed-tests
```

✅ **Acceptance Criteria**

* System shows list of completed tests
* Each test shows title and completion date

🎯 **Business Value**

Allows **result tracking and performance analysis**.

---

# User Story: View Appeared Students

🧑‍🔬 **User Story**

As an **SME**
I want to **view students who appeared for a test**
So that I can analyze participation.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/appeared-students
```

✅ **Acceptance Criteria**

* System lists students who attempted the test
* Shows student name and score

🎯 **Business Value**

Helps track **student participation rate**.

---

# User Story: View Passed Students

🧑‍🔬 **User Story**

As an **SME**
I want to **view students who passed the test**
So that I can identify successful candidates.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/passed-students
```

✅ **Acceptance Criteria**

* System lists students who scored above passing marks

🎯 **Business Value**

Helps identify **top performers**.

---

# User Story: View Failed Students

🧑‍🔬 **User Story**

As an **SME**
I want to **view students who failed the test**
So that I can identify students who need improvement.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/failed-students
```

✅ **Acceptance Criteria**

* System lists students below the passing score

🎯 **Business Value**

Helps provide **targeted support to weak students**.

---

# User Story: View Average Score of Test

🧑‍🔬 **User Story**

As an **SME**
I want to **view the average score of a test**
So that I can evaluate overall student performance.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/average-score
```

✅ **Acceptance Criteria**

* System calculates average score
* Displays average result of all students

🎯 **Business Value**

Measures **overall test performance**.

---

# User Story: Analyze Student Performance

🧑‍🔬 **User Story**

As an **SME**
I want to **analyze individual student performance**
So that I can understand strengths and weaknesses.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/student-performance
```

✅ **Acceptance Criteria**

* System shows score per student
* Shows correct vs incorrect answers
* System Should show if studnet is above or below average
🎯 **Business Value**

Helps **identify learning gaps**.

---

# User Story: Analyze Question Difficulty

🧑‍🔬 **User Story**

As an **SME**
I want to **analyze question difficulty**
So that I can improve the quality of assessments.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/question-difficulty
```

✅ **Acceptance Criteria**

* System shows percentage of students who answered correctly

🎯 **Business Value**

Improves **question bank quality**.

---

# User Story: View Score Distribution

🧑‍🔬 **User Story**

As an **SME**
I want to **view score distribution**
So that I can understand score patterns.

🔗 **API Endpoint**

```
GET /api/sme/analytics/tests/{testId}/score-distribution
```

✅ **Acceptance Criteria**

* System displays score ranges
* Shows number of students in each range

🎯 **Business Value**

Provides **visual insight into test results**.

---

# 🧪 6️⃣ Test Management

---

# User Story: View Test History

🧑‍🔬 **User Story**

As an **SME**
I want to **view test history**
So that I can manage previously created tests.

🔗 **API Endpoint**

```
GET /api/sme/tests/history
```

✅ **Acceptance Criteria**

* System returns list of tests created by SME
* Shows test title and date

🎯 **Business Value**

Helps **manage previous assessments**.

---

# User Story: Create Test

🧑‍🔬 **User Story**

As an **SME**
I want to **create a test**
So that student knowledge can be evaluated.

🔗 **API Endpoint**

```
POST /api/sme/tests
```

Example

```json
{
 "title": "Data Structures Test",
 "duration": 60,
 "difficulty": "Medium"
}
```

✅ **Acceptance Criteria**

* SME can enter test title
* SME can set test duration
* SME can add questions

🎯 **Business Value**

Enables **student assessment system**.

---

# User Story: View Test Detail

🧑‍🔬 **User Story**

As an **SME**
I want to **view test details**
So that I can review the configuration.

🔗 **API Endpoint**

```
GET /api/sme/tests/{testId}
```

✅ **Acceptance Criteria**

* System displays test title
* System displays duration
* System displays question list

🎯 **Business Value**

Ensures **test configuration verification**.

---

# User Story: Update Test

🧑‍🔬 **User Story**

As an **SME**
I want to **update a test**
So that I can modify test configuration.

🔗 **API Endpoint**

```
PUT /api/sme/tests/{testId}
```

✅ **Acceptance Criteria**

* SME can modify duration
* SME can update questions

🎯 **Business Value**

Keeps **tests flexible and updated**.

# 📚 7️⃣  Question Bank

---

# User Story: View Questions

**As an SME**
I want to view questions by type
So that I can reuse them in tests.

**API**

```
GET /api/sme/questions?type={type}
```

**Acceptance Criteria**

* System filters questions by type (MCQ, Coding, etc.)

---

# User Story: Add Question

**As an SME**
I want to add a new question
So that it can be used in assessments.

**API**

```
POST /api/sme/questions
```

Example

```json
{
 "type":"MCQ",
 "question":"What is encapsulation?",
 "options":["OOP concept","Database","Loop","Algorithm"],
 "correctAnswer":"OOP concept"
}
```


**✅ Acceptance Criteria**

* SME should be able to select the **question type (MCQ, Coding, etc.)**
* SME should be able to enter the **question text**
* System should **validate that required fields are filled**

---

# User Story: View Question Details

**As an SME**
I want to view detailed question information
So that I can review question content.

**API**

```
GET /api/sme/questions/{questionId}
```

**✅ Acceptance Criteria**

* System should retrieve the **question based on questionId**
* System should display the **question text**
* System should display **question type**
---

# User Story: Update Question

**As an SME**
I want to modify an existing question
So that incorrect or outdated content can be corrected.

**API**

```
PUT /api/sme/questions/{questionId}
```
**✅ Acceptance Criteria**

* SME should be able to **edit the question text**
* SME should be able to **modify options**


---

# 🌐   8️⃣ Language Management

---

# User Story: View Languages

**As an SME**
I want to see programming languages assigned to me
So that I know which languages I can create coding questions for.

**API**

```
GET /api/sme/languages
```

**Acceptance Criteria**

* System shows languages assigned to SME
* Shows runtime compatibility

**Business Value**

Ensures **SME works only with authorized programming languages**.

---
