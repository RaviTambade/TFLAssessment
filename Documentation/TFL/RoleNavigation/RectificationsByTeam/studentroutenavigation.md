# 🎓 Student APIs Documentation

---

# 🔐 Authentication → Student Login Flow

## 🔗 1. Student Login

`POST /student/login`

### 📌 Purpose
Authenticates the student and returns a **JWT token** for accessing student APIs.

### 📥 Request Body

```json
{
  "email": "student@email.com",
  "password": "password"
}
```

### 📤 Response

```json
{
  "token": "jwt_token",
  "student": {
    "id": 1,
    "name": "Student Name",
    "email": "student@email.com"
  }
}
```

---

# 📊 Student Dashboard & Profile APIs

## 📌 Student Dashboard

`GET /student/dashboard`

### Purpose
Returns a **dashboard summary** including:

- 📚 enrolled courses
- 📝 pending assignments
- 🧠 upcoming assessments
- 🔔 notifications

---

## 👤 View Profile

`GET /student/profile/view`

### 📤 Response

```json
{
  "id": 1,
  "name": "Student Name",
  "email": "student@email.com",
  "phone": "9876543210",
  "avatarUrl": "profile.png",
  "year": "Final Year"
}
```

---

## ✏️ Edit Profile

`PUT /student/profile/edit`

### Purpose
Updates editable student profile fields.

---

## 🔑 Change Password

`PUT /student/profile/change-password`

### 📥 Request Body

```json
{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword"
}
```

---

# 📚 Learnings & Courses APIs

## 📊 Learning Overview

`GET /student/learnings`

### Purpose
Returns learning statistics:

- 📘 assigned courses
- ✅ completed courses
- 🔄 courses in progress

---

## 📖 Enrolled Courses

`GET /student/learnings/courses`

### Query Parameters

```
?status=ongoing
?status=completed
```

Returns a list of enrolled courses.

---

## 📘 Course Details

`GET /student/learnings/courses/:courseId`

Returns:

- course information
- modules
- progress

---

## 📝 Course Assignments

`GET /student/learnings/courses/:courseId/assignments`

Returns assignments for a course.

---

## 📄 Assignment Details

`GET /student/learnings/courses/:courseId/assignments/:assignmentId`

Returns assignment information.

---

## 📤 Submit Assignment

`POST /student/learnings/courses/:courseId/assignments/:assignmentId/submit`

### Request Body

```json
{
  "textAnswer": "optional answer",
  "fileUrls": ["file1.pdf"]
}
```

---

# 🧠 Assessments APIs

## 📋 All Assessments

`GET /student/assessments`

Returns combined view of:

- scheduled assessments
- attempted assessments

---

## ⏰ Scheduled Assessments

`GET /student/assessments/scheduled`

Returns upcoming assessments.

---

## 📑 Assessment Details

`GET /student/assessments/:assessmentId`

Returns assessment metadata and questions (if accessible before start).

---

## ▶️ Start Assessment

`POST /student/assessments/:assessmentId/start`

### Response

```json
{
  "attemptId": 123,
  "startTime": "2026-03-12T10:00:00",
  "duration": 30,
  "questions": []
}
```

---

## 📤 Submit Assessment

`POST /student/assessments/:assessmentId/attempts/:attemptId/submit`

### Body

```
answers[]
```

### Response

```json
{
  "score": 85,
  "status": "completed",
  "resultId": 10
}
```

---

## 📜 Attempt History

`GET /student/assessments/attempted`

Returns past attempts.

---

## 🏆 Assessment Result

`GET /student/assessments/:assessmentId/result`

```json
{
  "score": 85,
  "maxScore": 100,
  "breakdown": {},
  "feedback": "Good performance"
}
```

---

# 👨‍🏫 Mentorship APIs

## 📊 Mentorship Overview

`GET /student/mentorship`

Returns:

- assigned mentor
- upcoming sessions

---

## 🧑‍🏫 Current Mentor

`GET /student/mentor`

Returns mentor summary.

---

## 👤 Mentor Profile

`GET /student/mentor/profile`

Includes:

- LinkedIn URL
- GitHub
- overall experience

---

## 📅 Mentorship Schedule

`GET /student/mentorship/schedule`

Returns past and upcoming sessions.

---

## 📌 Book Mentorship Session

`POST /student/mentorship/schedule`

```json
{
  "preferredSlot": "2026-03-15T11:00",
  "topic": "Java Concepts",
  "notes": "Need help with streams"
}
```

---

## ❌ Cancel Session

`PUT /student/mentorship/schedule/:sessionId/cancel`

Cancels mentorship session.

---

## ❓ Student Questions

`GET /student/mentorship/questions`

### Query Parameters

```
?courseId=
?status=open|resolved
?search=
```

Returns paginated questions.

---

## ✍️ Post Question

`POST /student/mentorship/questions/post`

```json
{
  "title": "Understanding Java Streams",
  "body": "How do streams work internally?",
  "courseId": 1,
  "tags": ["java","streams"]
}
```

---

## 💬 Question Discussion

`GET /student/mentorship/questions/discussion`

Returns latest or trending questions.

---

## 📄 Question Details

`GET /student/mentorship/questions/:questionId`

Returns question and answers.

---

## 🗨️ Post Answer

`POST /student/mentorship/questions/:questionId/answers`

```json
{
  "body": "Streams process collections using functional style."
}
```

---

# 🚀 Projects APIs

## 📂 Projects Overview

`GET /student/projects`

Returns:

- student projects
- available project topics

---

## 📁 My Projects

`GET /student/projects/myprojects`

Returns projects owned by student.

---

## 📄 Project Details

`GET /student/projects/:projectId`

Returns:

- project details
- team members
- mentor
- status

---

## 📤 Submit Project

`POST /student/projects/submit`

```json
{
  "title": "Online Test System",
  "description": "Assessment platform project",
  "repoUrl": "https://github.com/project",
  "demoUrl": "https://demo.com",
  "members": [],
  "courseId": 1
}
```

---

## ✏️ Update Project

`PUT /student/projects/:projectId`

Updates project details.

---

# 💼 Placement APIs

## 📊 Placement Overview

`GET /student/placements`

Returns:

- eligible jobs
- applications
- offers

---

## 🏢 Available Jobs

`GET /student/placements/jobs`

### Query Filters

```
?company=
?location=
?ctcMin=
?ctcMax=
?role=
?eligibleOnly=true
```

---

## 📄 Job Details

`GET /student/placements/jobs/:jobId`

Returns job details.

---

## 📤 Apply for Job

`POST /student/placements/jobs/:jobId/apply`

```json
{
  "resumeUrl": "resume.pdf",
  "coverLetter": "optional"
}
```

---

## 📋 Applications

`GET /student/placements/applications`

Returns applications with status.

---

## 📑 Application Details

`GET /student/placements/applications/:applicationId`

Returns application stages.

---

## 🎉 Placement Offers

`GET /student/placements/offers`

Returns list of offers.

---

## 📄 Offer Details

`GET /student/placements/offers/:offerId`

Returns offer information.

---

# 📈 Progress & Analytics APIs

## 📊 Student Progress

`GET /student/progress`

Returns high-level metrics.

---

## 📚 Course Progress

`GET /student/progress/courses`

Returns progress for all courses.

---

## 📘 Detailed Course Progress

`GET /student/progress/courses/:courseId`

Returns detailed analytics.

---

# 🔔 Notifications APIs

## 📬 Get Notifications

`GET /student/notifications`

### Filters

```
?status=unread|read
&type=system|assessment|placement
```

Examples:

- 🧠 assessment alerts
- 💼 placement updates
- 📝 assignment notifications
- ⚙️ technical issues

---

## ✅ Mark as Read

`PUT /student/notifications/:notificationId/read`

---

## ⭐ Star Notification

`PUT /student/notifications/:notificationId/star`