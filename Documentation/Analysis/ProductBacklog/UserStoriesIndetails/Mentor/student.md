Below are **Agile User Stories mapped to each Student REST API endpoint** for the **TFLCoMentor Student Portal**.
This makes the system **clear for product managers, developers, testers, and students learning full-stack architecture**.

Structure used:

* 👨‍🎓 **User Story**
* 🔗 **API Endpoint**
* ✅ **Acceptance Criteria**
* 🎯 **Business Value**

---

# 👤 1️⃣ Student Profile APIs

---

# User Story: View Profile

**As a Student**
I want to view my profile information
So that I can verify my personal and professional details.

**API**

```http
GET /api/student/profile
```

**Acceptance Criteria**

* System should display name, skills, GitHub, and LinkedIn
* Student should see profile completion status

**Business Value**

Helps students **maintain a professional developer profile**.

---

# User Story: Update Profile

**As a Student**
I want to update my profile
So that employers and mentors see accurate information.

**API**

```http
PUT /api/student/profile
```

Example

```json
{
 "name":"Rahul Patil",
 "about":"Full stack developer",
 "skills":["C++","NodeJS",".NET"],
 "github":"github.com/rahul",
 "linkedin":"linkedin.com/rahul"
}
```

**Acceptance Criteria**

* Student can update skills
* Student can update portfolio links
* Changes should reflect immediately

---

# User Story: Change Password

**As a Student**
I want to change my password
So that my account remains secure.

**API**

```http
PUT /api/student/profile/password
```

**Acceptance Criteria**

* Old password must be verified
* New password must meet security rules

---

# 📚 2️⃣ Learning APIs

---

# User Story: View Enrolled Courses

**As a Student**
I want to see my courses
So that I can continue my learning journey.

**API**

```http
GET /api/student/courses
```

**Acceptance Criteria**

* System should list courses assigned to the student
* Include course progress percentage

---

# User Story: View Assignments

**As a Student**
I want to see assignments of a course
So that I can complete them on time.

**API**

```http
GET /api/student/courses/{courseId}/assignments
```

**Acceptance Criteria**

* Show assignment title
* Show due date
* Show submission status

---

# User Story: Access Labs

**As a Student**
I want to access course labs
So that I can practice coding exercises.

**API**

```http
GET /api/student/courses/{courseId}/labs
```

**Acceptance Criteria**

* System should list lab exercises
* Student can access instructions and resources

---

# 🧪 3️⃣ Assessment APIs

---

# User Story: View Scheduled Assessments

**As a Student**
I want to see upcoming assessments
So that I can prepare for them.

**API**

```http
GET /api/student/assessments/scheduled
```

**Acceptance Criteria**

* Show assessment date and time
* Show assessment technology

---

# User Story: Start Assessment

**As a Student**
I want to start an assessment
So that my skills can be evaluated.

**API**

```http
GET /api/student/assessments/{assessmentId}
```

**Acceptance Criteria**

* System should load questions
* Timer should start

---

# User Story: Submit Assessment

**As a Student**
I want to submit my answers
So that the system can evaluate my performance.

**API**

```http
POST /api/student/assessments/{assessmentId}/submit
```

**Acceptance Criteria**

* Answers should be stored
* System should calculate score

---

# User Story: View Assessment Result

**As a Student**
I want to see my assessment results
So that I can understand my strengths and weaknesses.

**API**

```http
GET /api/student/assessments/{assessmentId}/result
```

**Acceptance Criteria**

* Display score
* Display correct vs incorrect answers

---

# 👨‍🏫 4️⃣ Mentorship APIs

---

# User Story: View Assigned Mentor

**As a Student**
I want to see my assigned mentor
So that I can seek guidance.

**API**

```http
GET /api/student/mentor
```

**Acceptance Criteria**

* Show mentor name
* Show mentor expertise

---

# User Story: Schedule Mentorship Session

**As a Student**
I want to schedule a session with my mentor
So that I can discuss learning challenges.

**API**

```http
POST /api/student/mentorship/session
```

Example

```json
{
 "mentorId":4,
 "date":"2026-03-20",
 "time":"15:00"
}
```

**Acceptance Criteria**

* Session should appear in mentor calendar
* Student receives confirmation

---

# 💬 5️⃣ Discussion / Question APIs

---

# User Story: Post a Question

**As a Student**
I want to post a question in the discussion forum
So that mentors and SMEs can help me.

**API**

```http
POST /api/student/questions
```

**Acceptance Criteria**

* Question should appear in discussion board
* Mentors and SMEs can respond

---

# User Story: View Discussions

**As a Student**
I want to browse discussion questions
So that I can learn from others.

**API**

```http
GET /api/student/questions
```

**Acceptance Criteria**

* Show recent discussions
* Show number of replies

---

# User Story: View Question Details

**As a Student**
I want to view a specific question
So that I can read answers.

**API**

```http
GET /api/student/questions/{questionId}
```

**Acceptance Criteria**

* Show question
* Show answers

---

# 🚀 6️⃣ Project APIs

---

# User Story: View My Projects

**As a Student**
I want to see my projects
So that I can track my development work.

**API**

```http
GET /api/student/projects
```

**Acceptance Criteria**

* Show project title
* Show technology stack
* Show mentor review status

---

# User Story: Submit Project

**As a Student**
I want to submit my project
So that mentors can review my work.

**API**

```http
POST /api/student/projects
```

Example

```json
{
 "title":"E-Commerce API",
 "technology":["NodeJS","MongoDB"],
 "github":"github.com/student/project"
}
```

**Acceptance Criteria**

* Project should be stored
* Mentor should receive notification

---

# 💼 7️⃣ Placement APIs

---

# User Story: View Job Opportunities

**As a Student**
I want to see available jobs
So that I can apply for suitable positions.

**API**

```http
GET /api/student/jobs
```

**Acceptance Criteria**

* Show job title
* Show company name
* Show salary range

---

# User Story: Apply for Job

**As a Student**
I want to apply for a job
So that I can participate in hiring process.

**API**

```http
POST /api/student/jobs/{jobId}/apply
```

**Acceptance Criteria**

* Application should be stored
* Employer should receive notification

---

# User Story: View My Applications

**As a Student**
I want to track my job applications
So that I know my hiring status.

**API**

```http
GET /api/student/applications
```

**Acceptance Criteria**

* Show applied jobs
* Show application status

---

# User Story: View Job Offers

**As a Student**
I want to see job offers
So that I can accept or decline them.

**API**

```http
GET /api/student/offers
```

**Acceptance Criteria**

* Show company name
* Show salary
* Show joining date

---

# 📊 8️⃣ Progress APIs

---

# User Story: View Learning Progress

**As a Student**
I want to see my progress dashboard
So that I can understand my learning growth.

**API**

```http
GET /api/student/progress
```

Example Response

```json
{
 "skills":32,
 "projects":4,
 "assessmentsCompleted":18,
 "growthScore":78
}
```

**Acceptance Criteria**

* Show skill count
* Show project count
* Show assessment completion
* Calculate growth score

---

# 🔔 9️⃣ Notification APIs

---

# User Story: View Notifications

**As a Student**
I want to receive notifications
So that I stay informed about platform activities.

**API**

```http
GET /api/student/notifications
```

Notification Sources

```
SME
Admin
Mentor
Employer
```

**Acceptance Criteria**

* Show notification message
* Show notification source
* Show time received

---

# 🧠 Complete TFLCoMentor Ecosystem Flow

The **student portal connects the entire platform**:

```text
Student joins platform
        │
        ▼
Learning courses
        │
        ▼
Assignments & Labs
        │
        ▼
Assessments
        │
        ▼
Mentor guidance
        │
        ▼
Projects
        │
        ▼
Employer hiring
```

Platforms like:

* LinkedIn
* Coursera
* HackerRank

follow **very similar learning → assessment → hiring pipelines**.

