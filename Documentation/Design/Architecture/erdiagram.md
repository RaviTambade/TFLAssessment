# 🚀 Complete TFLCoMentor Database ER Diagram 
 Below is the **Complete TFLCoMentor Database Architecture (ER Diagram – ASCII)** designed for **understanding  backend architecture** and for **developers implementing the platform**.

This diagram shows how **Students, Mentors, SMEs, Employers, Assessments, Projects, Skills, and Hiring Pipeline** connect together.

```text
                           ┌─────────────────────┐
                           │        USERS        │
                           │---------------------│
                           │ userId (PK)         │
                           │ name                │
                           │ email               │
                           │ passwordHash        │
                           │ roleId (FK)         │
                           │ createdDate         │
                           └──────────┬──────────┘
                                      │
                                      │
                         ┌────────────▼────────────┐
                         │         ROLES           │
                         │-------------------------│
                         │ roleId (PK)             │
                         │ roleName                │
                         │ Student                 │
                         │ Mentor                  │
                         │ SME                     │
                         │ Employer                │
                         │ Admin                   │
                         └────────────┬────────────┘
                                      │
                                      │
                                      ▼

                ┌────────────────────────────────────┐
                │        STUDENT_PROFILE             │
                │------------------------------------│
                │ studentId (PK, FK userId)          │
                │ about                              │
                │ github                             │
                │ linkedin                           │
                │ growthScore                        │
                └────────────┬───────────────────────┘
                             │
                             │
        ┌────────────────────▼───────────────────┐
        │           STUDENT_SKILLS               │
        │----------------------------------------│
        │ id (PK)                                │
        │ studentId (FK)                         │
        │ skillId (FK)                           │
        │ level                                  │
        └────────────────────┬───────────────────┘
                             │
                             ▼
                     ┌───────────────────┐
                     │       SKILLS      │
                     │-------------------│
                     │ skillId (PK)      │
                     │ skillName         │
                     │ category          │
                     │ parentSkill       │
                     └──────────┬────────┘
                                │
                                │
                                ▼
                     ┌────────────────────┐
                     │     COURSES        │
                     │--------------------│
                     │ courseId (PK)      │
                     │ title              │
                     │ technology         │
                     │ duration           │
                     └─────────┬──────────┘
                               │
                               ▼
                     ┌─────────────────────┐
                     │   COURSE_ASSIGNMENT │
                     │---------------------│
                     │ assignmentId (PK)   │
                     │ courseId (FK)       │
                     │ title               │
                     │ description         │
                     └─────────┬───────────┘
                               │
                               ▼
                     ┌─────────────────────┐
                     │  STUDENT_ASSIGNMENT │
                     │---------------------│
                     │ id (PK)             │
                     │ studentId (FK)      │
                     │ assignmentId (FK)   │
                     │ score               │
                     │ submittedDate       │
                     └─────────┬───────────┘
                               │
                               ▼
               ┌────────────────────────────────┐
               │        ASSESSMENTS             │
               │--------------------------------│
               │ assessmentId (PK)              │
               │ title                          │
               │ duration                       │
               │ difficulty                     │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │        QUESTIONS               │
               │--------------------------------│
               │ questionId (PK)                │
               │ questionText                   │
               │ type                           │
               │ difficulty                     │
               │ createdBy (SME)                │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │       TEST_QUESTIONS           │
               │--------------------------------│
               │ id (PK)                        │
               │ assessmentId (FK)              │
               │ questionId (FK)                │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │      STUDENT_ASSESSMENT        │
               │--------------------------------│
               │ id (PK)                        │
               │ studentId (FK)                 │
               │ assessmentId (FK)              │
               │ score                          │
               │ status                         │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │           PROJECTS             │
               │--------------------------------│
               │ projectId (PK)                 │
               │ title                          │
               │ technology                     │
               │ githubLink                     │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │       PROJECT_REVIEWS          │
               │--------------------------------│
               │ reviewId (PK)                  │
               │ projectId (FK)                 │
               │ mentorId (FK)                  │
               │ feedback                       │
               │ score                          │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │           JOBS                 │
               │--------------------------------│
               │ jobId (PK)                     │
               │ companyId (FK)                 │
               │ title                          │
               │ salary                         │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │        APPLICATIONS            │
               │--------------------------------│
               │ applicationId (PK)             │
               │ studentId (FK)                 │
               │ jobId (FK)                     │
               │ status                         │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │         INTERVIEWS             │
               │--------------------------------│
               │ interviewId (PK)               │
               │ applicationId (FK)             │
               │ date                           │
               │ result                         │
               └──────────────┬─────────────────┘
                              │
                              ▼
               ┌────────────────────────────────┐
               │        NOTIFICATIONS           │
               │--------------------------------│
               │ notificationId (PK)            │
               │ userId (FK)                    │
               │ message                        │
               │ type                           │
               │ createdDate                    │
               └────────────────────────────────┘
```


# 🧠 Core Database Domains

### 1️⃣ User Domain

```text
Users
Roles
StudentProfile
MentorProfile
EmployerProfile
```

### 2️⃣ Skill Graph Domain

```text
Skills
StudentSkills
SkillRelationships
```

This powers **growth score calculation**.

### 3️⃣ Learning Domain

```text
Courses
Assignments
Labs
StudentAssignments
```

### 4️⃣ Assessment Domain

```text
Assessments
Questions
TestQuestions
StudentAssessment
```

Managed by **SME**.

### 5️⃣ Mentorship Domain

```text
MentorMenteeMapping
MentorSessions
SessionAttendance
MentorFeedback
```

### 6️⃣ Project Domain

```text
Projects
ProjectSubmissions
ProjectReviews
```

### 7️⃣ Placement Domain

```text
Companies
Jobs
Applications
Interviews
Offers
```

Used by **Employer Portal**.

### 8️⃣ Platform Domain

```text
Notifications
SessionLogs
Analytics
```

Used by **Admin Dashboard**.


# 🌍 Full TFLCoMentor Platform Ecosystem

```text
Students  → Learning + Projects + Assessments
Mentors   → Mentorship + Reviews
SME       → Test Creation + Question Bank
Employer  → Jobs + Hiring
Admin     → Platform Monitoring
```

Students learn:

- ✔ System design
- ✔ Database normalization
- ✔ Hiring pipeline systems
- ✔ Assessment platforms
- ✔ Learning management systems
