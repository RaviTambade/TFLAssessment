# Mentor APIs Documentation

## 🔐 Authentication → Mentor Login Flow

### 1. Mentor Login
`POST /api/mentor/login`

**Purpose**  
Authenticates mentor and returns JWT token for accessing mentor APIs.

**Request Body**
```json
{
  "email": "mentor@tfl.com",
  "password": "password123"
}
```

---

# 👨‍🎓 1️⃣ Mentees APIs

## Get All Mentees
`GET /api/mentor/mentee`

**Purpose**  
Returns all students assigned to mentor.

---

## Add Student to Mentee List
`POST /api/mentor/mentee`

**Purpose**  
Assigns a new student to the mentor.

**Request Body**
```json
{
  "studentId": 34,
  "name": "Rohan Das",
  "technology": "React"
}
```

---

## Remove Student from Mentee List
`DELETE /api/mentor/mentee/[studentID]`

**Purpose**  
Removes a student from the mentor's assigned list.

**Response**
```json
{
  "status": "success",
  "message": "Student removed successfully from mentee list"
}
```

# 🔎 Search and Filter APIs

## Search Mentee
`GET /api/mentor/mentee/students-name`

**Purpose**  
Search mentee by name.

---

## Filter Mentees by Technology
`GET /api/mentor/mentees?technology={tech}`

**Purpose**  
Shows mentees learning a specific technology.

---

## Get Mentee Profile
`GET /api/mentor/mentee/student-profile`

**Purpose**  
Returns student personal + academic details.

**Response**
```json
{
 "studentId": 21,
 "name": "Amit Patil",
 "email": "amit@gmail.com",
 "technology": "NodeJS",
 "joiningDate": "2025-08-12",
 "mentor": "Rahul Sharma"
}
```

---

# 📈 2️⃣ Mentee Performance APIs

## Get Learning Path
`GET /api/mentor/mentee/[studentID]/learning-path`

**Purpose**  
Shows student learning roadmap.

**Response**
```json
{
 "technology": "NodeJS",
 "completedModules": 6,
 "remainingModules": 3
}
```

---

## Get Skills
`GET /api/mentor/mentee/[studentID]/student-skills`

**Purpose**  
Shows technical skill levels.

**Response**
```json
[
 {"skill":"JavaScript","level":"Advanced"},
 {"skill":"NodeJS","level":"Intermediate"}
]
```

---

## Get SME Feedback
`GET /api/mentor/mentee/[studentID]/SMEfeedback`

**Purpose**  
Shows feedback provided by SME.

**Response**
```json
[
 {
  "feedback":"Good backend logic",
  "date":"2026-02-12"
 }
]
```

---

## Get Employer Feedback
`GET /api/mentor/mentee/[studentID]/employer-feedback`

**Purpose**  
Feedback from internship employer.

**Response**
```json
[
  {
    "company": "TechFlow Solutions",
    "rating": 4.5,
    "feedback": "Excellent problem-solving skills and great team collaboration.",
    "date": "2026-03-01"
  }
]
```

---

# 📑 3️⃣ Assignment APIs

## Completed Assignments
`GET /api/mentor/mentee/[studentID]/assignment?status=completed`

**Response**
```json
[
  {
    "assignmentId": 101,
    "title": "Build a REST API",
    "score": 88,
    "submittedOn": "2026-03-10"
  }
]
```

# 📑 3️⃣ Assignment APIs

## Scheduled Assignments
`GET /api/mentor/mentee/[studentID]/assignments?status=scheduled`

**Response**
```json
[
  {
    "assignmentId": 105,
    "title": "Database Optimization",
    "dueDate": "2026-03-20",
    "status": "Pending"
  }
]
```

---

## Assignment Score Analysis
`GET /api/mentor/mentee/[studentID]/assignments-score`

**Purpose**  
Shows score distribution.

**Response**
```json
{
 "averageScore": 76,
 "highestScore": 92,
 "lowestScore": 54
}
```

---

# 🎓 4️⃣ Session APIs

## Assigned Sessions
`GET /api/mentor/mentee/[studentID]/sessions/assigned`

---

## Attended Sessions
`GET /api/mentor/mentee/[studentID]/sessions/attended`

**Response**
```json
[
 {
  "sessionName":"NodeJS Basics",
  "date":"2026-02-11",
  "attendance":"Present"
 }
]
```

---

# 📝 5️⃣ Mentor Notes

## Get Mentor Notes (Viewed/Referred Notes)
`GET /api/mentor/mentee/[studentID]/notes/viewed`

**Purpose**  
Shows mentor observations.

---

# 💬 6️⃣ Mentor Feedback

## Add Mentor Feedback
`POST /api/mentor/mentee/[studentID]/feedback`

**Purpose**  
Mentor sends improvement feedback + resources.

**Request Body**
```json
{
 "message":"Focus more on problem solving",
 "resources":[
   "https://leetcode.com",
   "https://geeksforgeeks.org"
 ]
}
```

---

# 🚀 7️⃣ Project APIs

## Get All Projects
`GET /api/mentor/projects`

---

## Running Projects
`GET /api/mentor/projects?status=running`

**Response**
```json
[
  {
    "projectId": 401,
    "name": "E-Commerce Backend",
    "technology": "NodeJS",
    "progressPercentage": 65,
    "deadline": "2026-04-10"
  }
]
```

---

## Completed Projects
`GET /api/mentor/projects?status=completed`

**Response**
```json
[
  {
    "projectId": 305,
    "name": "Chat Application",
    "technology": "React & Firebase",
    "completionDate": "2026-02-28",
    "finalGrade": "A"
  }
]
```

---

## Project Details
`GET /api/mentor/projects/details`

**Response**
```json
{
  "projectId": 401,
  "name": "E-Commerce Backend",
  "description": "Building a scalable backend using Express and MongoDB.",
  "status": "Running",
  "studentsAssigned": [
    {"studentId": 21, "name": "Amit Patil"},
    {"studentId": 25, "name": "Sneha Kulkarni"}
  ],
  "githubRepo": "https://github.com/amit/ecommerce-backend"
}
```

---

## Add Student to Project
`POST /api/mentor/projects/[projectID]/students`

**Purpose**  
Assigns a student to an existing project.

**Request Body**
```json
{
  "studentId": 21
}
```

---

## Remove Student from Project
`DELETE /api/mentor/projects/[projectID]/students/[studentID]`

**Purpose**  
Removes a student from a project.

**Response**
```json
{
  "status": "success",
  "message": "Student successfully removed from the project."
}
```

---

## Project Feedback
`POST /api/mentor/projects/[projectID]/feedback`

---

## Schedule Project Meeting
`POST /api/mentor/projects/[projectID]/meeting`

**Request Body**
```json
{
 "date":"2026-03-18",
 "time":"11:00",
 "meetingLink":"zoom-link"
}
```

---

# 📅 8️⃣ Session Management APIs

## Upcoming Sessions
`GET /api/mentor/sessions?status=upcoming`

---

## Create Session
`POST /api/mentor/sessions`

**Request Body**
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

---

## Session History
`GET /api/mentor/sessions?status=completed`

---

# 📚 9️⃣ Resources APIs

## Get all Resources
`GET /api/mentor/resources`

---

## Get Recordings
`GET /api/mentor/resources/recordings`

---

## Get Notes
`GET /api/mentor/resources/notes`

---

## Get Diagrams
`GET /api/mentor/resources/daigrams`

---

## Upload Resource
`POST /api/mentor/resources`

---

## Delete Resource
`DELETE /api/mentor/resources/[resourceId]`

---

# 👤 🔟 Mentor Profile APIs

## Get Profile
`GET /api/mentor/profile`

---

## Update Profile
`PUT /api/mentor/profile`

---

## Get Mentor Mentees
`GET /api/mentor/mentees`

---

## Get Session Stats
`GET /api/mentor/profile/session-stats`

**Purpose**  
Shows mentor teaching activity.

**Response**
```json
{
 "totalSessions": 45,
 "topicsCovered":[
   "Java OOP",
   "NodeJS APIs",
   "React Hooks"
 ]
}
```

---

## Update Settings
`PUT /api/mentor/profile/settings`

---

# 🔄 Complete Mentor Flow

```
Login
   ↓
View Mentees (Add/Remove Mentees)
   ↓
Open Mentee Profile
   ↓
Check Performance
   ↓
Assignments / Sessions / Skills
   ↓
Give Feedback
   ↓
Review Projects (Add/Remove Students in Projects)
   ↓
Schedule Meetings
   ↓
Upload Resources
```
# 🗂 API Directory Structure

```
/mentor
│
├── /mentor/mentees
│     └── GET /api/mentor/mentee
│     
│     ├── /mentor/mentees/search
│     │     └── GET /api/mentor/mentee/students-name
│
│     ├── /mentor/mentees/filter
│     │     └── GET /api/mentor/mentees?technology={tech}
│      
│     ├── /mentor/mentees/delete
│     │     └── DELETE /api/mentor/mentee/[studentID] (Delete Mentees)
│
│     ├── /mentor/mentees/add
│     │     └── POST /api/mentor/mentee (Add Mentees)
│
│     └── /mentor/mentees/:studentId
│           │
│           ├── profile
│           │     └── GET /api/mentor/mentee/student-profile
│           │
│           ├── performance
│           │     │
│           │     ├── learning-path
│           │     │     └── GET /api/mentor/mentee/[studentID]/learning-path
│           │     │
│           │     ├── skills
│           │     │     └── GET /api/mentor/mentee/[studentID]/student-skills
│           │     │
│           │     ├── sme-feedback
│           │     │     └── GET /api/mentor/mentee/[studentID]/SMEfeedback
│           │     │
│           │     ├── employer-feedback
│           │     │     └── GET /api/mentor/mentee/[studentID]/employer-feedback
│           │     │
│           │     ├── assignments
│           │     │     │
│           │     │     ├── completed
│           │     │     │     └── GET /api/mentor/mentee/[studentID]/assignment?status=completed
│           │     │     │
│           │     │     ├── scheduled
│           │     │     │     └── GET /api/mentor/mentee/[studentID]/assignments?status=scheduled
│           │     │     │
│           │     │     └── score-analysis
│           │     │           └── GET /api/mentor/mentee/[studentID]/assignments-score
│           │     │
│           │     ├── sessions
│           │     │     │
│           │     │     ├── attended
│           │     │     │     └── GET /api/mentor/mentee/[studentID]/sessions/attended
│           │     │     │
│           │     │     └── assigned
│           │     │           └── GET /api/mentor/mentee/[studentID]/sessions/assigned
│           │     │
│           │     └── notes
│           │           └── GET /api/mentor/mentee/[studentID]/notes/viewed
│           │
│           └── feedback
│                 └── POST /api/mentor/mentee/[studentID]/feedback
│
├── /mentor/projects
│     │
│     ├── /mentor/projects/all
│     │     └── GET /api/mentor/projects
│     │
│     ├── /mentor/projects/running
│     │     └── GET /api/mentor/projects?status=running
│     │
│     ├── /mentor/projects/completed
│     │     └── GET /api/mentor/projects?status=completed
│     │
│     └── /mentor/projects/:projectId
│           │
│           ├── details
│           │     └── GET /api/mentor/projects/details
│           │
│           ├── students
│           │     ├── add
│           │     │     └── POST /api/mentor/projects/[projectID]/students
│           │     └── remove
│           │           └── DELETE /api/mentor/projects/[projectID]/students/[studentID]
│           │
│           ├── feedback
│           │     └── POST /api/mentor/projects/[projectID]/feedback
│           │
│           └── schedule-meeting
│                 └── POST /api/mentor/projects/[projectID]/meeting
│
├── /mentor/sessions
│     │
│     ├── /mentor/sessions/upcoming
│     │     └── GET /api/mentor/sessions?status=upcoming
│     │
│     ├── /mentor/sessions/create
│     │     └── POST /api/mentor/sessions
│     │
│     └── /mentor/sessions/history
│           └── GET /api/mentor/sessions?status=completed
│
├── /mentor/resources
│     │
│     ├── /mentor/resources/all
│     │     └── GET /api/mentor/resources
│     │
│     ├── /mentor/resources/recordings
│     │     └── GET /api/mentor/resources/recordings
│     │
│     ├── /mentor/resources/notes
│     │     └── GET /api/mentor/resources/notes
│     │
│     ├── /mentor/resources/diagrams
│     │     └── GET /api/mentor/resources/daigrams
│     │
│     ├── upload
│     │     └── POST /api/mentor/resources
│     │
│     └── delete
│           └── DELETE /api/mentor/resources/[resourceId]
│
└── /mentor/profile
      │
      ├── /mentor/profile/details (this profile will be seen by other roles)
      │     └── GET /api/mentors/{mentorId}
      │
      ├── /mentor/profile/details
      │     └── GET /api/mentor/profile
      │
      ├── /mentor/profile/update
      │     └── PUT /api/mentor/profile
      │
      ├── /mentor/profile/mentees
      │     └── GET /api/mentor/mentees
      │
      ├── /mentor/profile/session-stats
      │     └── GET /api/mentor/profile/session-stats
      │
      └── /mentor/profile/settings
            └── PUT /api/mentor/profile/settings
```
