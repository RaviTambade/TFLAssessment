

 

# 1️⃣ Mentor UI Routes (Frontend Navigation)
Our **Mentor Portal structure is already very strong conceptually**. Now we will convert it into a **clean route architecture** for the **TFLCoMentor** so developers can directly implement it using frameworks like **ASP.NET Core** or **Node.js**.

We will organize it into:

1️⃣ **Mentor UI Routes (Frontend Navigation)**
2️⃣ **Mentor REST API Routes**
3️⃣ **Mentor Module Architecture (Backend Design)**
4️⃣ **Important design improvements**

```text
/mentor
│
├── /mentor/dashboard
│
├── /mentor/mentees
│     │
│     ├── /mentor/mentees/search
│     ├── /mentor/mentees?technology=node
│     ├── /mentor/mentees?technology=java
│     ├── /mentor/mentees?technology=cpp
│     ├── /mentor/mentees?technology=dotnet
│     │
│     └── /mentor/mentees/:studentId
│           │
│           ├── /mentor/mentees/:studentId/profile
│           │
│           └── /mentor/mentees/:studentId/performance
│                 │
│                 ├── learning-path
│                 ├── skills
│                 ├── sme-feedback
│                 ├── employer-feedback
│                 │
│                 ├── assignments
│                 │     ├── completed
│                 │     ├── scheduled
│                 │     └── score-analysis
│                 │
│                 ├── sessions
│                 │     ├── attended
│                 │     └── assigned
│                 │
│                 ├── notes
│                 │
│                 └── feedback
│
├── /mentor/projects
│     │
│     ├── /mentor/projects/running
│     ├── /mentor/projects/completed
│     │
│     └── /mentor/projects/:projectId
│           │
│           ├── details
│           ├── review
│           ├── feedback
│           └── schedule-meeting
│
├── /mentor/sessions
│     │
│     ├── /mentor/sessions/upcoming
│     ├── /mentor/sessions/create
│     └── /mentor/sessions/history
│
├── /mentor/resources
│     │
│     ├── /mentor/resources/recordings
│     ├── /mentor/resources/notes
│     └── /mentor/resources/diagrams
│
└── /mentor/profile
      │
      ├── /mentor/profile/details
      ├── /mentor/profile/mentees
      ├── /mentor/profile/session-stats
      └── /mentor/profile/settings
```

This structure makes the mentor portal **clean and scalable**.

# 2️⃣ Mentor REST API Routes

These APIs power the mentor UI.

# Mentee APIs

### Get Mentees

```http
GET /api/mentor/mentees
```

Query Example

```
/api/mentor/mentees?technology=node
```

### Get Mentee Profile

```http
GET /api/mentor/mentees/{studentId}
```
### Get Mentee Performance

```http
GET /api/mentor/mentees/{studentId}/performance
```

### Get Skills

```http
GET /api/mentor/mentees/{studentId}/skills
```

### Get Assignments

```http
GET /api/mentor/mentees/{studentId}/assignments
```

### Add Mentor Notes

```http
POST /api/mentor/mentees/{studentId}/notes
```

Example

```json
{
 "note":"Student needs improvement in problem solving"
}
```

### Send Feedback

```http
POST /api/mentor/mentees/{studentId}/feedback
```

# Project Review APIs

### Get Projects

```http
GET /api/mentor/projects
```

Query Example

```
/api/mentor/projects?status=running
```
### Project Details

```http
GET /api/mentor/projects/{projectId}
```

### Submit Review

```http
POST /api/mentor/projects/{projectId}/review
```


### Schedule Project Meeting

```http
POST /api/mentor/projects/{projectId}/meeting
```

# Session APIs

### Upcoming Sessions

```http
GET /api/mentor/sessions/upcoming
```

### Create Session

```http
POST /api/mentor/sessions
```

Example

```json
{
 "sessionName":"C++ Memory Management",
 "topic":"Pointers",
 "date":"2026-03-20",
 "time":"10:30",
 "meetingLink":"zoom-link",
 "students":[21,25,30]
}
```

### Session History

```http
GET /api/mentor/sessions/history
```

# Resources APIs

### Get Resources

```http
GET /api/mentor/resources
```

Types

```
recordings
notes
diagrams
```
# Mentor Profile APIs

### Get Profile

```http
GET /api/mentor/profile
```

### Update Profile

```http
PUT /api/mentor/profile
```
# 3️⃣ Mentor Backend Module Architecture

```text
Mentor Module
│
├── Mentor
│     ├── MentorProfile
│     ├── MentorExpertise
│
├── Mentees
│     ├── MentorMenteeMapping
│
├── Performance
│     ├── Skills
│     ├── Feedback
│     ├── Assignments
│     ├── SessionHistory
│
├── Projects
│     ├── Project
│     ├── ProjectReview
│
├── Sessions
│     ├── MentorSession
│     ├── SessionAttendance
│
└── Resources
      ├── Resource
```

# 4️⃣ Very Important Architecture Suggestion

For **TFLCoMentor**, maintain **consistent role-based routing**:

```
/admin/*
/mentor/*
/student/*
/sme/*
/employer/*
```

This gives **clear separation of responsibilities**.
