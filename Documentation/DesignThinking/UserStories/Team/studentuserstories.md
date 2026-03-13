
# 🎓 Student User Stories Documentation
## TFLCoMentor Student Portal

Below are **Agile User Stories mapped to each Student REST API endpoint** for the **TFLCoMentor Student Portal**.

This documentation helps:

- 👨‍💻 Developers understand system functionality
- 📋 Product managers track feature requirements
- 🧪 Testers validate expected behaviour
- 🎓 Students learn full-stack architecture

### Structure Used

* 👨‍🎓 **User Story**
* 🔗 **API Endpoint**
* ✅ **Acceptance Criteria**
* 🎯 **Business Value**

---

# 👤 1️⃣ Student Profile APIs

---

## 👨‍🎓 User Story: View Profile

**As a Student**  
I want to view my profile information  
So that I can verify my personal and professional details.

### 🔗 API Endpoint

```http
GET /api/student/profile
```

### ✅ Acceptance Criteria

* System should display name, user role, skills, GitHub, Gmail and LinkedIn
* Student should see profile completion status

### 🎯 Business Value

Helps students **maintain a professional developer profile**.

---

## 👨‍🎓 User Story: Update Profile

**As a Student**  
I want to update my profile  
So that employers and mentors see accurate information.

### 🔗 API Endpoint

```http
PUT /api/student/profile
```

### Example Request

```json
{
 "name":"Rahul Patil",
 "about":"Full stack developer",
 "skills":["C++","NodeJS",".NET"],
 "github":"github.com/rahul",
 "linkedin":"linkedin.com/rahul"
}
```

### ✅ Acceptance Criteria

* Student can update skills
* Student can update portfolio links
* Changes should reflect immediately

---

## 👨‍🎓 User Story: Change Password

**As a Student**  
I want to change my password  
So that my account remains secure.

### 🔗 API Endpoint

```http
PUT /api/student/profile/password
```

### ✅ Acceptance Criteria

* Old password must be verified
* New password must meet security rules

---

# 📚 2️⃣ Learning APIs

---

## 👨‍🎓 User Story: View Enrolled Courses

**As a Student**  
I want to see my list of courses and corresponding SME who assigned it  
So that I can continue my learning journey.

### 🔗 API Endpoint

```http
GET /api/student/courses
```

### ✅ Acceptance Criteria

* System should list courses assigned to the student
* Include course progress percentage
* Show enrolled date

---

## 👨‍🎓 User Story: View Assignments and Labs

**As a Student**  
I want to view assignments and labs for a course  
So that I can understand the tasks I need to complete and practice coding exercises.

### 🔗 API Endpoint

```http
GET /api/student/courses/{courseId}/tasks
```

### ✅ Acceptance Criteria

* System should list both assignments and lab exercises
* Show assignment title and lab title
* Show due date
* Show submission status
* Student should access lab instructions and resources

### 🎯 Business Value

Helps students **manage coursework and practice activities from a single learning interface**.

---

## 👨‍🎓 User Story: Submit Assignment

**As a Student**  
I want to submit my assignment using links or uploaded files  
So that mentors can review my work and provide feedback.

### 🔗 API Endpoint

```http
POST /api/student/courses/{courseId}/assignments/{assignmentId}/submit
```

### Example Request

```json
{
 "submissionType":"file",
 "files":[
   "assignment1.pdf",
   "code.zip"
 ]
}
```

### ✅ Acceptance Criteria

* Student can submit via **GitHub link**
* Student can **upload files**
* System stores submission timestamp
* System prevents late submission (if deadline configured)
* Mentor can review submission

### 🎯 Business Value

Allows students to **submit real development work like GitHub repositories or project demos**.

---

# 🧪 3️⃣ Assessment APIs

---

## 👨‍🎓 User Story: View Scheduled Assessments

**As a Student**  
I want to see upcoming assessments  
So that I can prepare for them.

### 🔗 API Endpoint

```http
GET /api/student/assessments/scheduled
```

### ✅ Acceptance Criteria

* Show assessment date
* Show assessment time
* Show assessment duration
* Show status (scheduled / missed / completed)
* Show technology

---

## 👨‍🎓 User Story: Start Assessment

**As a Student**  
I want to start an assessment  
So that my skills can be evaluated.

### 🔗 API Endpoint

```http
GET /api/student/assessments/{assessmentId}
```

### ✅ Acceptance Criteria

* System loads questions
* Timer should start

---

## 👨‍🎓 User Story: Submit Assessment

**As a Student**  
I want to submit my answers  
So that the system can evaluate my performance.

### 🔗 API Endpoint

```http
POST /api/student/assessments/{assessmentId}/submit
```

### ✅ Acceptance Criteria

* Answers should be stored
* System calculates score

---

## 👨‍🎓 User Story: View Assessment Result

**As a Student**  
I want to see my assessment results  
So that I can understand my strengths and weaknesses.

### 🔗 API Endpoint

```http
GET /api/student/assessments/{assessmentId}/result
```

### ✅ Acceptance Criteria

* Display score
* Display correct vs incorrect answers
* Display assessment statistics

---

# 👨‍🏫 4️⃣ Mentorship APIs

---

## 👨‍🎓 User Story: View Assigned Mentor

**As a Student**  
I want to see my assigned mentor  
So that I can seek guidance.

### 🔗 API Endpoint

```http
GET /api/student/mentor
```

### ✅ Acceptance Criteria

* Show mentor name
* Show mentor expertise

---

## 👨‍🎓 User Story: Schedule Mentorship Session

**As a Student**  
I want to schedule a session with my mentor  
So that I can discuss learning challenges.

### 🔗 API Endpoint

```http
POST /api/student/mentorship/session
```

### Example

```json
{
 "mentorId":4,
 "date":"2026-03-20",
 "time":"15:00"
}
```

### ✅ Acceptance Criteria

* Session appears in mentor calendar
* Student receives confirmation

---

# 💬 5️⃣ Discussion APIs

---

## 👨‍🎓 User Story: Post a Question
**As a Student**  
I want to post my technical or career-related questions on the discussion board  
So that mentors, SMEs and peers can help me resolve my doubts and learn faster.

### 🔗 API Endpoint

```http
POST /api/student/questions
```

### ✅ Acceptance Criteria

* Question appears in discussion board
* Mentors and SMEs can respond

---

## 👨‍🎓 User Story: View Discussions

**As a Student**  
I want to view all recent discussions and questions posted by others
So that I can learn from existing conversations and avoid asking duplicate questions.

### 🔗 API Endpoint

```http
GET /api/student/questions
```

### ✅ Acceptance Criteria

* Show recent discussions
* Show reply count

---

## 👨‍🎓 User Story: View Question Details

**As a Student**  
I want to open a specific question and see all its answers
So that I can deeply understand the solutions and reasoning shared by mentors and peers.

### 🔗 API Endpoint

```http
GET /api/student/questions/{questionId}
```

### ✅ Acceptance Criteria

* Show question
* Show answers

---

# 🚀 6️⃣ Project APIs

---

## 👨‍🎓 User Story: View My Projects

**As a Student**  
I want to view all my submitted projects and their review status
So that I can track my portfolio progress and mentor feedback.
​

### 🔗 API Endpoint

```http
GET /api/student/projects
```

### ✅ Acceptance Criteria

* Show project title
* Show technology stack
* Show mentor review status

---

## 👨‍🎓 User Story: Submit Project

**As a Student**  
I want to submit my completed project with GitHub link and tech stack
So that mentors can review my real-world development work and provide feedback.

### 🔗 API Endpoint

```http
POST /api/student/projects
```

### Example

```json
{
 "title":"E-Commerce API",
 "technology":["NodeJS","MongoDB"],
 "github":"github.com/student/project"
}
```

### ✅ Acceptance Criteria

* Project stored in system
* Mentor notified

---

# 💼 7️⃣ Placement APIs

---

## 👨‍🎓 User Story: View Job Opportunities

**As a Student**  
I want to browse available job opportunities matching my skills 
So that I can find relevant developer roles from partner companies.

### 🔗 API Endpoint

```http
GET /api/student/jobs
```

### ✅ Acceptance Criteria

* Show job title
* Show company name
* Show salary range

---

## 👨‍🎓 User Story: Apply for Job

**As a Student**  
I want to apply for a job opportunity with my profile and projects
So that employers can review my qualifications and shortlist me for interviews.

### 🔗 API Endpoint

```http
POST /api/student/jobs/{jobId}/apply
```

### ✅ Acceptance Criteria

* Application stored
* Employer notified

---

## 👨‍🎓 User Story: View My Applications

**As a Student**  
I want to track the status of all my job applications
So that I can follow up on pending opportunities and prepare for interviews.

### 🔗 API Endpoint

```http
GET /api/student/applications
```

### ✅ Acceptance Criteria

* Show applied jobs
* Show application status

---

## 👨‍🎓 User Story: View Job Offers

**As a Student**  
I want to see job offers I've received from employers
So that I can review salary, role details and decide which to accept.

### 🔗 API Endpoint

```http
GET /api/student/offers
```

### ✅ Acceptance Criteria

* Show company name
* Show salary
* Show joining date

---

# 📊 8️⃣ Progress APIs

---

## 👨‍🎓 User Story: View Learning Progress

**As a Student**  
I want to see my overall learning dashboard with metrics
So that I can track my skill growth and identify improvement areas.

### 🔗 API Endpoint

```http
GET /api/student/progress
```

### Example Response

```json
{
 "skills":32,
 "projects":4,
 "assessmentsCompleted":18,
 "growthScore":78
}
```

### ✅ Acceptance Criteria

* Show skill count
* Show project count
* Show assessment completion
* Calculate growth score

---

# 🔔 9️⃣ Notification APIs

---

## 👨‍🎓 User Story: View Notifications

**As a Student**  
I want to see all my notifications from platform activities
So that I stay updated on mentor feedback, new assignments and job opportunities.

### 🔗 API Endpoint

```http
GET /api/student/notifications
```

### Notification Sources

```
SME
Admin
Mentor
Employer
```

### ✅ Acceptance Criteria

* Show notification message
* Show notification source
* Show time received

---

# 🧠 Complete TFLCoMentor Ecosystem Flow

```
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

- LinkedIn
- Coursera
- HackerRank

follow **very similar learning → assessment → hiring pipelines**.
