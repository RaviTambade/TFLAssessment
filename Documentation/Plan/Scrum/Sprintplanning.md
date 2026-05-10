# TFLCoMentor Development Roadmap

Below is the **TFLCoMentor Development Roadmap** that converts the **Feature Map (100+ vertical slices)** into a **24-Sprint / 6-Month Build Plan**.

This structure is very useful for **mentoring engineering students**, because it simulates a **real industry Agile product development cycle**.

### 6 Month Product Build Plan

```
Total Duration : 6 Months
Sprint Duration: 2 Weeks
Total Sprints  : 24
```

Development happens in **5 phases**.

```
Foundation
Platform Core
Assessment Engine
Insight Intelligence
Growth + Hiring
```

# Phase 1 — Platform Foundation

### Sprint 1 – Sprint 4

Goal: Build the **core platform infrastructure**.

### Sprint 1 — Project Setup

Features

```
Create Git Repository
Create .NET Solution
Setup MySQL Database
Create Base Project Structure
Add Authentication Framework
```

Deliverables

```
Working API project
Basic database connection
User authentication setup
```


### Sprint 2 — Membership Module (Part 1)

Features

```
RegisterUser
LoginUser
LogoutUser
RefreshToken
AssignRole
```

APIs

```
POST /api/users/register
POST /api/users/login
POST /api/users/logout
```


### Sprint 3 — Membership Module (Part 2)

Features

```
UpdateProfile
ViewProfile
DeactivateUser
ActivateUser
UploadPhoto
```

Deliverables

```
Complete user identity system
```


### Sprint 4 — Portal Foundations

Build **role based dashboards**

```
Student Dashboard
Mentor Dashboard
Admin Dashboard
SME Dashboard
Employer Dashboard
```


# Phase 2 — Skill Intelligence Layer

### Sprint 5 – Sprint 8

Goal: Build **Skill Graph of the platform**


### Sprint 5 — Skill Taxonomy

Features

```
CreateDomain
CreateTechnology
CreateSkill
CreateConcept
```

Example

```
Software Engineering
   |
Backend Development
   |
ASP.NET Core
   |
Web API
```

### Sprint 6 — Skill Graph Engine

Features

```
UpdateSkill
ViewSkillGraph
AssignSkillToLearningPath
```

### Sprint 7 — Student Skill Tracking

Features

```
TrackStudentSkill
ViewStudentSkills
UpdateSkillProgress
```

Deliverable

```
Skill Progress Engine
```

### Sprint 8 — Learning Paths

Features

```
CreateLearningPath
AssignSkillsToPath
RecommendLearningPath
```

# Phase 3 — Assessment System

### Sprint 9 – Sprint 14

This becomes the **core engine of the platform**.

### Sprint 9 — Question Bank

Features

```
CreateQuestion
UpdateQuestion
DeleteQuestion
GetQuestions
```

### Sprint 10 — Coding Problems

Features

```
CreateCodingProblem
AddTestCases
RunTestCases
```

### Sprint 11 — Test Builder

Features

```
CreateTest
AddQuestionToTest
CreateAssignment
CreateLab
```

### Sprint 12 — Assessment Orchestrator

Features

```
ScheduleAssessment
AssignAssessment
StartAssessment
SubmitAssessment
```

### Sprint 13 — Attempt Management

Features

```
PauseAssessment
ResumeAssessment
TrackTime
ProctorLog
```

### Sprint 14 — Evaluation Engine

Features

```
EvaluateMCQ
ExecuteCode
CalculateScore
GenerateReport
```

Deliverable

```
Complete Online Test System
```


# Phase 4 — Learning Intelligence

### Sprint 15 – Sprint 18

This is where **TFLCoMentor becomes an AI driven learning platform**.


### Sprint 15 — Skill Scoring

Features

```
GenerateSkillScore
ConceptMastery
WeakTopicDetection
```


### Sprint 16 — Student Insights

Features

```
GenerateStudentInsight
SkillGapAnalysis
```

Example output

```
Student: Ravi
Strength: C# OOP
Weakness: Data Structures
```

### Sprint 17 — Analytics Engine

Features

```
TestAnalytics
StudentPerformanceTrends
ConceptDifficultyAnalysis
```

### Sprint 18 — Recommendation Engine

Features

```
LearningRecommendation
ProjectRecommendation
MentorRecommendation
```

# Phase 5 — Growth & Hiring

### Sprint 19 – Sprint 24

This converts the platform from **learning system → employability system**.

### Sprint 19 — Mentor Engine

Features

```
CreateMentorSession
BookMentorSession
MentorFeedback
```

### Sprint 20 — Project System

Features

```
CreateProject
JoinProject
ReviewProject
```

### Sprint 21 — Employer System

Features

```
CreateCompany
PostJob
ManageJobs
```

### Sprint 22 — Hiring Pipeline

Features

```
ApplyJob
ShortlistCandidate
ScheduleInterview
```

### Sprint 23 — Interview Management

Features

```
ConductInterview
SubmitInterviewFeedback
OfferCandidate
```

### Sprint 24 — Platform Integration

Final integration

```
Skill Graph
Assessment Engine
Insight Core
Growth Engine
Hiring Engine
```

Deliverable

```
Complete Employability Platform
```

# Final Platform Architecture After 24 Sprints

```
                  TFLCoMentor Platform

         Students | Mentors | SMEs | Employers | Admin

                         |

                    API Gateway

                         |

--------------------------------------------------------------
Membership | Skills | Evaluation | Assessments | Insights
--------------------------------------------------------------

                         |

--------------------------------------------------------------
Mentorship | Projects | Hiring Engine
--------------------------------------------------------------

                         |

                      MySQL DB
```

# What Students Learn from This Project

This project teaches **complete software engineering**.

Students experience:

```
System Architecture
Database Design
REST APIs
Authentication
Assessment Systems
Analytics
Recommendation Engines
Hiring Platforms
```
