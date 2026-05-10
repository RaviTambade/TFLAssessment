# TFLCoMentor Platform — Monolithic Architecture

If **TFLCoMentor** is built as a **Monolithic Architecture**, all modules run inside **one single application and one database**, instead of independent microservices.

This is actually **a very practical starting point** for a new platform because:

* Faster development
* Easier deployment
* Easier debugging
* Smaller team can manage it

Later it can evolve to **Modular Monolith → Microservices**.

## Core Idea

All modules live inside **one deployable application**.

Example

```
TFLCoMentor.WebApp
```

Inside the application we organize **modules as internal components**.

# High-Level Monolithic Architecture

```
                 Web / Mobile UI
                       |
                 ASP.NET Core Web App
                       |
------------------------------------------------------
|        |         |          |        |              |
Membership Skill  Evaluation  Assessment Evaluation  Insight
Module    Taxonomy Content    Orchestrator Engine    Core
Module    Module   Module     Module       Module    Module
                         |
                    Growth Engine
                        Module
```

All modules share:

```
Single Application
Single Database
Shared Domain Models
```

# Monolithic Layered Architecture

Inside the application we organize layers.

```
Presentation Layer
        |
Application Layer
        |
Domain Layer
        |
Infrastructure Layer
        |
Database
```

Example

```
Controllers
Services
Domain Models
Repositories
Database
```

# TFLCoMentor Monolithic Folder Structure

Example **ASP.NET Core solution structure**.

```
TFLCoMentor
|
|-- Controllers
|
|-- Modules
|     |
|     |-- Membership
|     |     |-- Controllers
|     |     |-- Services
|     |     |-- Models
|     |
|     |-- SkillTaxonomy
|     |     |-- Controllers
|     |     |-- Services
|     |     |-- Models
|     |
|     |-- EvaluationContent
|     |
|     |-- AssessmentOrchestrator
|     |
|     |-- EvaluationEngine
|     |
|     |-- InsightCore
|     |
|     |-- GrowthEngine
|
|-- Infrastructure
|     |-- Repositories
|     |-- DbContext
|
|-- Shared
|
|-- Program.cs
```

# Module Responsibilities

## 1️⃣ Membership Module

Handles:

```
Users
Roles
Authentication
Profiles
Companies
Session Logs
```

Main Entities

```
User
Role
Profile
Company
SessionLog
```

Example APIs

```
POST /api/auth/login
GET  /api/users
GET  /api/users/{id}
```

# 2️⃣ Skill Taxonomy Module

Defines the **Skill Graph**.

Structure

```
Domain
   |
Technology
   |
Skill
   |
Concept
```

Example

```
Software Engineering
     |
Backend
     |
ASP.NET Core
     |
Web API
```

Entities

```
Domain
Technology
Skill
Concept
LearningPath
```

Example APIs

```
GET /api/skills
GET /api/concepts
POST /api/concepts
```

# 3️⃣ Evaluation Content Module

Stores all **assessment assets**.

Entities

```
Question
CodingProblem
Test
Assignment
HandsOn
```

APIs

```
GET /api/questions
POST /api/questions
GET /api/tests
POST /api/tests
```

# 4️⃣ Assessment Orchestrator Module

Controls **assessment lifecycle**.

Responsibilities

```
Assign assessments
Schedule tests
Start attempts
Submit attempts
Track status
```

Entities

```
Assessment
AssessmentAssignment
AssessmentAttempt
Schedule
```

APIs

```
POST /api/assessments/assign
POST /api/assessments/start
POST /api/assessments/submit
```

# 5️⃣ Evaluation Engine Module

Evaluates student work.

Types

```
MCQ evaluation
Coding evaluation
Assignment evaluation
```

Entities

```
Submission
ExecutionResult
Score
```

APIs

```
POST /api/evaluation/mcq
POST /api/evaluation/code
```

# 6️⃣ Insight Core Module

Generates **learning analytics**.

Examples

```
Skill strengths
Skill gaps
Test analytics
Concept weakness
```

Entities

```
StudentInsight
SkillScore
TestAnalytics
QuestionAnalytics
```

APIs

```
GET /api/insights/student/{id}
GET /api/insights/test/{id}
```

# 7️⃣ Growth Engine Module

Converts insights into **career growth actions**.

Includes

```
Mentorship
Projects
Discussion forum
Jobs
Interviews
```

Entities

```
Mentor
MentoringSession
Project
Job
Application
Interview
```

APIs

```
GET /api/jobs
POST /api/job/apply
POST /api/mentoring/session
```

# Monolithic Database Design

All modules share **one relational database**.

Example tables

```
Users
Roles
Profiles
Companies

Domains
Technologies
Skills
Concepts

Questions
Tests
Assignments

Assessments
Attempts
Submissions

Scores
SkillScores

Mentors
Projects
Jobs
Applications
```

# Data Flow Inside Monolith

```
Student starts test
        ↓
Assessment Module
        ↓
Evaluation Engine
        ↓
Score stored
        ↓
Insight Core updates skill score
        ↓
Growth Engine recommends mentor/job
```

# Monolithic Deployment Architecture

```
                Browser
                   |
              Web Server
            (ASP.NET Core)
                   |
            TFLCoMentor App
                   |
               SQL Database
```

Example deployment

```
Nginx
   |
ASP.NET Core App
   |
PostgreSQL / SQL Server
```

# Why Modular Monolith is Ideal for TFLCoMentor (Initial Phase)

Advantages

### 1️⃣ Simpler development

Single codebase.

### 2️⃣ Faster feature development

No distributed complexity.

### 3️⃣ Easier debugging

Single runtime.

### 4️⃣ Easier deployment

Single container.

### 5️⃣ Future microservice migration

Modules already separated.


# Best Architecture Path for TFLCoMentor

```
Phase 1
Modular Monolith
        ↓
Phase 2
Modular Monolith + Event Bus
        ↓
Phase 3
Extract Microservices
```