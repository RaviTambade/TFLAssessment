# Complete Database Schema (Core Tables)

 
Let us design the **Complete Database Schema for the TFLCoMentor Platform**.

This schema supports the **7 Core Modules + 5 Portals + Skill Graph + Hiring Engine**.

The design follows **clean enterprise architecture used in real platforms**.

# 1️⃣ Identity & User Management

### Users

```
Users
-----
UserId (PK)
FirstName
LastName
Email
PasswordHash
Phone
ProfilePhoto
CreatedAt
Status
```

### Roles

```
Roles
-----
RoleId (PK)
RoleName
Description
```

### UserRoles

```
UserRoles
---------
UserRoleId (PK)
UserId (FK)
RoleId (FK)
AssignedAt
```

### Employers

```
Employers
---------
EmployerId (PK)
UserId (FK)
CompanyName
Industry
FoundedYear
CompanyLogo
CompanyWebsite
CompanyDescription
```

# 2️⃣ Learning & Content Module

### Courses

```
Courses
-------
CourseId (PK)
CourseName
Technology
Description
CreatedBy
CreatedAt
```

### CourseAssignments

```
CourseAssignments
-----------------
AssignmentId (PK)
CourseId (FK)
StudentId (FK)
AssignedBy
AssignedAt
```

### Sessions

```
Sessions
--------
SessionId (PK)
CourseId (FK)
Title
Description
VideoUrl
Notes
CreatedBy
CreatedAt
```

### Concepts

```
Concepts
--------
ConceptId (PK)
ConceptName
Technology
Description
```

# 3️⃣ Hands-On & Assignments

### HandsOnActivities

```
HandsOnActivities
-----------------
HandsOnId (PK)
SessionId (FK)
Title
Description
Instructions
CreatedBy
CreatedAt
```

### AssignmentSubmissions

```
AssignmentSubmissions
---------------------
SubmissionId (PK)
AssignmentId (FK)
StudentId (FK)
SubmissionLink
UploadedFile
SubmittedAt
Score
Feedback
```

# 4️⃣ Assessment Engine

### Tests

```
Tests
-----
TestId (PK)
Title
Technology
TotalMarks
Duration
CreatedBy
CreatedAt
Status
```

### Questions

```
Questions
---------
QuestionId (PK)
ConceptId (FK)
QuestionType
DifficultyLevel
QuestionText
Options
CorrectAnswer
CreatedBy
Status
```

### TestQuestions

```
TestQuestions
-------------
TestQuestionId (PK)
TestId (FK)
QuestionId (FK)
Marks
```

### AssessmentAssignments

```
AssessmentAssignments
---------------------
AssessmentAssignmentId (PK)
TestId (FK)
StudentId (FK)
AssignedBy
AssignedAt
DueDate
```

### AssessmentAttempts

```
AssessmentAttempts
------------------
AttemptId (PK)
TestId (FK)
StudentId (FK)
StartedAt
SubmittedAt
Score
Status
```

### Answers

```
Answers
-------
AnswerId (PK)
AttemptId (FK)
QuestionId (FK)
StudentAnswer
IsCorrect
MarksObtained
```

# 5️⃣ Mentoring System

### MentorAssignments

```
MentorAssignments
-----------------
MentorAssignmentId (PK)
MentorId (FK)
StudentId (FK)
AssignedBy
AssignedAt
```

### MentorSessions

```
MentorSessions
--------------
SessionId (PK)
MentorId (FK)
StudentId (FK)
Topic
MeetingLink
SessionDate
Notes
```

### MentorFeedback

```
MentorFeedback
--------------
FeedbackId (PK)
MentorId (FK)
StudentId (FK)
Comments
Rating
CreatedAt
```

# 6️⃣ Project Management

### Projects

```
Projects
--------
ProjectId (PK)
Title
Description
Technology
CreatedBy
CreatedAt
Status
```

### ProjectAssignments

```
ProjectAssignments
------------------
ProjectAssignmentId (PK)
ProjectId (FK)
StudentId (FK)
AssignedBy
AssignedAt
```

### ProjectSubmissions

```
ProjectSubmissions
------------------
SubmissionId (PK)
ProjectId (FK)
StudentId (FK)
GithubLink
DemoLink
SubmittedAt
```

### ProjectReviews

```
ProjectReviews
--------------
ReviewId (PK)
ProjectId (FK)
MentorId (FK)
Comments
Score
ReviewedAt
```

# 7️⃣ Skill Graph & Learning Analytics

### Skills

```
Skills
------
SkillId (PK)
SkillName
Technology
Description
```

### SkillProgress

```
SkillProgress
-------------
ProgressId (PK)
StudentId (FK)
SkillId (FK)
Level
Score
UpdatedAt
```

### LearningPaths

```
LearningPaths
-------------
PathId (PK)
Technology
Description
CreatedBy
```

### LearningPathSkills

```
LearningPathSkills
------------------
PathSkillId (PK)
PathId (FK)
SkillId (FK)
SequenceOrder
```

# 8️⃣ Hiring Engine

### Jobs

```
Jobs
----
JobId (PK)
EmployerId (FK)
Title
Description
RequiredSkills
Location
SalaryRange
PostedAt
Status
```

### JobApplications

```
JobApplications
---------------
ApplicationId (PK)
JobId (FK)
StudentId (FK)
AppliedAt
Status
```

### CandidateShortlist

```
CandidateShortlist
------------------
ShortlistId (PK)
JobId (FK)
StudentId (FK)
ShortlistedAt
```

### Interviews

```
Interviews
----------
InterviewId (PK)
JobId (FK)
StudentId (FK)
InterviewDate
Mode
MeetingLink
Status
```

### InterviewResults

```
InterviewResults
----------------
ResultId (PK)
InterviewId (FK)
Score
Comments
Result
```

# 9️⃣ Platform Monitoring & Logs

### SessionLogs

```
SessionLogs
-----------
LogId (PK)
UserId (FK)
LoginTime
LogoutTime
IPAddress
Device
```

### Notifications

```
Notifications
-------------
NotificationId (PK)
UserId (FK)
Message
Type
CreatedAt
IsRead
```

# Estimated Table Count

| Module      | Tables |
| ----------- | ------ |
| Identity    | 4      |
| Learning    | 4      |
| Hands-On    | 2      |
| Assessment  | 6      |
| Mentoring   | 3      |
| Projects    | 4      |
| Skill Graph | 4      |
| Hiring      | 5      |
| Monitoring  | 2      |

**Total ≈ 34 Core Tables**

Enterprise production platforms typically extend to **50–70 tables**.


# High-Level ER Relationship Diagram (ASCII)

```
Users
  │
  ├── UserRoles
  │
  ├── MentorAssignments
  │
  ├── CourseAssignments
  │
  ├── AssessmentAttempts
  │
  ├── ProjectAssignments
  │
  └── JobApplications


Courses
   │
   └── Sessions
          │
          └── HandsOnActivities


Tests
   │
   └── TestQuestions
           │
           └── Questions
                   │
                   └── Concepts


Students
   │
   ├── SkillProgress
   ├── Projects
   ├── AssessmentAttempts
   └── JobApplications


Employers
   │
   └── Jobs
           │
           ├── JobApplications
           └── Interviews
```

---

# Final System Flow

```
Learning Content
        │
        ▼
Hands-On Practice
        │
        ▼
Assessment Engine
        │
        ▼
Mentor Evaluation
        │
        ▼
Skill Graph
        │
        ▼
Hiring Engine
```

