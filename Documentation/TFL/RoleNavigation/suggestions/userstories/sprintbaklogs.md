# 🚀 TFLCoMentor Sprint Backlog (First 4 Sprints)

Below is a **Sprint Backlog for the first 4 Sprints of the TFLCoMentor platform**.
This is designed for a **typical Agile Scrum team building an MVP in ~8 weeks**.

Assumption:

* **Sprint Duration:** 2 weeks
* **Team:** 6–8 members
* Frontend (React)
* Backend (ASP.NET Core / Node.js)
* Database (MySQL)
* UI/UX
* QA

Goal: **Deliver a working mentorship + assessment MVP early**.


```text
Sprint Duration: 2 weeks
Total Sprints in Phase 1: 4
Primary Goal: Build MVP Platform
```

---

# 🟢 Sprint 1 — Platform Foundation

Goal: **User authentication + role system + basic dashboard**

This sprint builds the **core platform skeleton**.

## Backend Tasks

| Task                         | Description                           |
| ---------------------------- | ------------------------------------- |
| Create User Table            | id, email, password, role             |
| Create Role Table            | Student, Mentor, SME, Employer, Admin |
| Implement JWT Authentication | Login API                             |
| User Registration API        | POST /api/auth/register               |
| User Login API               | POST /api/auth/login                  |
| Role Assignment API          | Admin assigns roles                   |
| Middleware                   | Role-based access control             |

---

## Frontend Tasks

| Task                | Description                     |
| ------------------- | ------------------------------- |
| Login Page          | `/login`                        |
| Registration Page   | `/register`                     |
| Dashboard Layout    | sidebar + header                |
| Role-based redirect | Student/Mentor/Admin dashboards |

---

## Database Tables

```text
Users
Roles
UserRoles
Sessions
```

---

## Deliverables

* Login system working
* JWT authentication
* Role-based navigation

---

# 🟡 Sprint 2 — Student Portal (Learning + Profile)

Goal: **Students can create profile and access courses**

---

## Backend Tasks

| Task                | API                                       |
| ------------------- | ----------------------------------------- |
| Student Profile API | GET /api/student/profile                  |
| Update Profile      | PUT /api/student/profile                  |
| Courses API         | GET /api/student/courses                  |
| Assignments API     | GET /api/student/courses/{id}/assignments |
| Labs API            | GET /api/student/courses/{id}/labs        |

---

## Frontend Tasks

| Task              | Route                                        |
| ----------------- | -------------------------------------------- |
| Student Dashboard | `/student/dashboard`                         |
| Profile Page      | `/student/profile`                           |
| Courses Page      | `/student/learnings/courses`                 |
| Assignments Page  | `/student/learnings/courses/:id/assignments` |
| Labs Page         | `/student/learnings/courses/:id/labs`        |

---

## Database Tables

```text
StudentProfile
Courses
Assignments
Labs
StudentCourses
```

---

## Deliverables

Students can

* update profile
* view courses
* see assignments

---

# 🔵 Sprint 3 — Assessment Engine

Goal: **SME can create tests and students can attempt them**

This is **the core learning evaluation system**.

---

## Backend Tasks

| Task              | API                                       |
| ----------------- | ----------------------------------------- |
| Create Test       | POST /api/sme/tests                       |
| Get Tests         | GET /api/sme/tests                        |
| Question Bank     | POST /api/sme/questions                   |
| Get Questions     | GET /api/sme/questions                    |
| Assign Test       | POST /api/admin/assessments/{id}/assign   |
| Start Assessment  | GET /api/student/assessments/{id}         |
| Submit Assessment | POST /api/student/assessments/{id}/submit |

---

## Frontend Tasks

| Task                | Route                                       |
| ------------------- | ------------------------------------------- |
| SME Dashboard       | `/sme/dashboard`                            |
| Create Test         | `/sme/tests/create`                         |
| Question Bank       | `/sme/questions`                            |
| Student Assessments | `/student/assessments/scheduled`            |
| Assessment Player   | `/student/assessments/:assessmentId`        |
| Result Page         | `/student/assessments/:assessmentId/result` |

---

## Database Tables

```text
Tests
Questions
QuestionOptions
TestQuestions
AssessmentAssignment
StudentAssessment
StudentAnswers
```

---

## Deliverables

* SME creates tests
* Admin assigns tests
* Student attempts test
* Result generated

---

# 🟣 Sprint 4 — Mentorship System

Goal: **Mentor guides students and reviews progress**

---

## Backend Tasks

| Task             | API                                  |
| ---------------- | ------------------------------------ |
| Assign Mentor    | POST /api/admin/mentorship           |
| Get Mentor       | GET /api/student/mentor              |
| Schedule Session | POST /api/student/mentorship/session |
| Session List     | GET /api/mentor/sessions             |
| Session History  | GET /api/mentor/sessions/history     |
| Mentor Notes     | POST /api/mentor/mentees/{id}/notes  |

---

## Frontend Tasks

| Task                | Route                             |
| ------------------- | --------------------------------- |
| Mentor Dashboard    | `/mentor/dashboard`               |
| Mentee List         | `/mentor/mentees`                 |
| Student Performance | `/mentor/mentees/:id/performance` |
| Schedule Session    | `/student/mentorship/schedule`    |
| Session History     | `/mentor/sessions/history`        |

---

## Database Tables

```text
Mentors
MentorStudentMapping
MentorshipSessions
SessionAttendance
MentorNotes
```

---

## Deliverables

Students can

* see mentor
* schedule sessions

Mentors can

* track student performance
* write notes

---

# 📊 MVP Progress After 4 Sprints

At the end of Sprint 4, **TFLCoMentor MVP will support:**

```text
User Authentication
Role Management
Student Learning
Assessment Engine
Mentorship System
```

---

# 🧠 Platform Capability After Sprint 4

```text
SME → creates assessments
Admin → assigns assessments
Student → attempts tests
Mentor → guides students
```

This creates the **core learning loop**.

---

# 📅 Next Planned Sprints (Future)

Sprint 5

* Discussion forum
* Student questions

Sprint 6

* Project submission
* Mentor project review

Sprint 7

* Job portal
* Employer hiring

Sprint 8

* Analytics dashboard
* Skill graph engine

---

# ⚙️ Estimated MVP Timeline

| Phase    | Duration |
| -------- | -------- |
| Sprint 1 | 2 weeks  |
| Sprint 2 | 2 weeks  |
| Sprint 3 | 2 weeks  |
| Sprint 4 | 2 weeks  |

Total

**~8 weeks MVP**

---

✅ If you want, I can also generate the **most powerful artifact for your students and developers:**

**Complete TFLCoMentor System Architecture Diagram**

It will show visually:

```
Admin
Student
Mentor
SME
Employer
        │
        ▼
API Gateway
        │
        ▼
Microservices
        │
        ▼
Skill Graph + Assessment Engine + Hiring Engine
```

This diagram will make your **entire platform architecture crystal clear for engineering students.**
