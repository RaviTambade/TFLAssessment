# TFLCoMentor Platform — Microservices Architecture

Instead of a single monolithic application, we design it as **modular microservices aligned with the domain modules** you defined earlier.

This also aligns perfectly with **Vertical Slice Architecture + Domain Driven Design (DDD)**.
## Core Platform Vision

The system converts **Untapped Potential → Skilled Professional → Employable Candidate**

Flow:

```
Skill Graph
   ↓
Learning + Evaluation Content
   ↓
Assessment Execution
   ↓
Evaluation
   ↓
Skill Insight
   ↓
Mentorship + Growth
   ↓
Hiring
```


# 1️⃣ Skill Taxonomy Service

### Purpose

Central **Skill Graph of the platform**

Everything in the system connects to this service.

Example hierarchy

```
Domain
   ↓
Technology
   ↓
Skill
   ↓
Concept
```

Example

```
Software Engineering
      ↓
Backend Development
      ↓
ASP.NET Core
      ↓
Web API
```

### Responsibilities

• Manage domains
• Manage technologies
• Manage skills
• Manage concepts
• Build learning paths
• Skill graph relationships

### APIs

```
GET  /domains
POST /domains

GET  /technologies
POST /technologies

GET  /skills
POST /skills

GET  /concepts
POST /concepts
```

### Database

```
Domains
Technologies
Skills
Concepts
SkillRelationships
LearningPaths
```


# 2️⃣ Evaluation Content Service

### Purpose

Stores **all evaluation assets**.

Examples

```
Questions
Coding Problems
Assignments
Labs
Tests
```

### Responsibilities

• Question bank
• Coding problems
• Test creation
• Question review workflow

### APIs

```
GET  /questions
POST /questions

GET  /tests
POST /tests

GET  /assignments
POST /assignments
```

### Database

```
Questions
QuestionOptions
CodingProblems
Tests
TestQuestions
Assignments
```


# 3️⃣ Assessment Orchestrator Service

### Purpose

Controls **assessment lifecycle**.

This acts like a **workflow engine**.

### Responsibilities

• Assign tests
• Schedule tests
• Manage attempts
• Start / stop tests
• Track assessment status

### APIs

```
POST /assessments/assign
GET  /assessments

POST /assessments/start
POST /assessments/submit
```

### Database

```
Assessments
AssessmentAssignments
AssessmentAttempts
AssessmentSchedules
```

# 4️⃣ Evaluation Engine Service

### Purpose

Evaluates student submissions.

Handles

```
MCQ evaluation
Coding execution
Assignment grading
```

### Responsibilities

• Code execution
• Auto grading
• Score calculation

### APIs

```
POST /evaluate/mcq
POST /evaluate/code
POST /evaluate/assignment
```

### Database

```
Submissions
ExecutionResults
Scores
EvaluationLogs
```

Often integrates with:

```
Docker sandbox
Code runner
Language compilers
```

# 5️⃣ Insight Core Service

### Purpose

Transforms raw evaluation data into **meaningful insights**.

Examples

```
Skill strength
Skill gap
Concept weakness
Test analytics
```

### Responsibilities

• Learning analytics
• Test analytics
• Question analytics
• Student skill report

### APIs

```
GET /insights/student/{id}
GET /insights/test/{id}
GET /insights/question/{id}
```

### Database

```
SkillScores
StudentInsights
TestAnalytics
QuestionAnalytics
```

# 6️⃣ Growth Engine Service

### Purpose

Converts **insight into action**.

This is where **mentorship + projects + hiring** happen.

### Responsibilities

```
Mentorship
Projects
Community discussions
Job matching
Career growth
```

### APIs

```
GET /mentors
POST /mentoring-sessions

GET /projects
POST /projects

GET /jobs
POST /job-applications
```

### Database

```
MentorAssignments
MentoringSessions
Projects
ProjectTeams
Jobs
Applications
Interviews
```

# 7️⃣ Membership Service

### Purpose

Handles **identity and access**.

### Responsibilities

```
Users
Roles
Authentication
Profiles
Organizations
```

### APIs

```
POST /auth/login
POST /auth/register

GET  /users
GET  /users/{id}

POST /roles
```

### Database

```
Users
Roles
UserRoles
Profiles
Companies
SessionLogs
```

# Complete Microservices Architecture

```
                   API Gateway
                        |
 -----------------------------------------------------
 |        |           |           |          |        |
Membership Skill    Evaluation   Assessment  Insight  Growth
Service   Taxonomy  Content      Orchestrator Core    Engine
          Service   Service      Service      Service Service
                        |
                 Evaluation Engine
```

# Event Driven Communication

These services should communicate using **events**.

Example

```
AssessmentSubmitted
        ↓
EvaluationEngine evaluates
        ↓
EvaluationCompleted
        ↓
InsightCore updates skill score
        ↓
GrowthEngine recommends mentor
```

# Event Flow

```
Student submits assessment
        ↓
AssessmentOrchestrator
        ↓
EvaluationEngine
        ↓
InsightCore
        ↓
GrowthEngine
        ↓
Mentor + Job recommendations
```

# Technology Stack (Suggested)

### Backend

```
.NET Core Web API
or
Node.js Microservices
```

### Communication

```
RabbitMQ
Kafka
gRPC
```

### Databases

```
PostgreSQL
MongoDB (analytics)
Redis (cache)
```

### Infrastructure

```
Docker
Kubernetes
API Gateway
Identity Server
```

# Final System Architecture

```
             Web / Mobile Apps
                   |
               API Gateway
                   |
--------------------------------------------------------
|         |           |         |        |              |
Membership Skill   Evaluation  Assessment Evaluation  Insight
Service   Taxonomy Content     Orchestrator Engine    Core
                                      |
                                  Growth Engine
                                      |
                           Mentors | Projects | Jobs
```


# Why This Architecture is Powerful

This architecture enables:

1️⃣ **Skill-first education**
2️⃣ **Real measurable growth**
3️⃣ **Mentor-driven improvement**
4️⃣ **Employer-ready hiring pipeline**

It becomes a **complete Employability OS**.

