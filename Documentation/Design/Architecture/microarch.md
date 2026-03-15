# 🚀 TFLCoMentor Complete System Architecture (ASCII)
 
This diagram is extremely useful when teaching **system design to students**, similar to architectures used by companies like Netflix, Amazon, and Uber.

This architecture shows **how the entire platform works from UI → API Gateway → Services → Database → Messaging**.


```text
                               INTERNET USERS
                                      │
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │                TFLCoMentor Frontend Applications            │
      │                                                             │
      │  Student Portal     Mentor Portal     SME Portal            │
      │                                                             │
      │  Employer Portal    Admin Portal                            │
      │                                                             │
      │  (React / Angular / Vue / Mobile Apps)                      │
      └───────────────────────────┬─────────────────────────────────┘
                                  │
                                  │
                                  ▼
                       ┌──────────────────────┐
                       │      API GATEWAY     │
                       │----------------------│
                       │ Authentication       │
                       │ Authorization        │
                       │ Rate Limiting        │
                       │ Routing              │
                       └───────────┬──────────┘
                                   │
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
      ┌───────────────┐   ┌─────────────────┐   ┌────────────────┐
      │ Auth Service  │   │ User Service    │   │ Notification   │
      │---------------│   │-----------------|   │ Service        │
      │ Login         │   │ Student         │   │ Email          │
      │ JWT Token     │   │ Mentor          │   │ SMS            │
      │ Roles         │   │ SME             │   │ In-App         │
      └──────┬────────┘   │ Employer        │   └─────────┬──────┘
             │            │ Admin           │             │
             │            └─────────┬───────┘             │
             │                      │                     │
             │                      ▼                     │
             │             ┌──────────────────┐           │
             │             │ Skill Graph      │           │
             │             │ Service          │           │
             │             │------------------│           │
             │             │ Skills           │           │
             │             │ Skill Mapping    │           │
             │             │ Growth Score     │           │
             │             └─────────┬────────┘           │
             │                       │                    │
             │                       │                    │
             ▼                       ▼                    ▼
      ┌───────────────┐   ┌───────────────────┐   ┌─────────────────┐
      │ Learning      │   │ Assessment        │   │ Mentorship      │
      │ Service       │   │ Service           │   │ Service         │
      │---------------│   │-------------------│   │-----------------│
      │ Courses       │   │ Tests             │   │ Mentor Mapping  │
      │ Labs          │   │ Question Bank     │   │ Sessions        │
      │ Assignments   │   │ Evaluation        │   │ Feedback        │
      └──────┬────────┘   └─────────┬─────────┘   └────────┬────────┘
             │                      │                      │
             │                      │                      │
             ▼                      ▼                      ▼
      ┌───────────────┐   ┌───────────────────┐   ┌─────────────────┐
      │ Project       │   │ Placement         │   │ Hiring Pipeline │
      │ Service       │   │ Service           │   │ Service         │
      │---------------│   │-------------------│   │-----------------│
      │ Project Repo  │   │ Jobs              │   │ Shortlisting    │
      │ Submissions   │   │ Applications      │   │ Interviews      │
      │ Reviews       │   │ Employer Access   │   │ Offers          │
      └──────┬────────┘   └─────────┬─────────┘   └────────┬────────┘
             │                      │                      │
             │                      │                      │
             └──────────────┬───────┴──────────────┬───────┘
                            │                      │
                            ▼                      ▼
                 ┌──────────────────────┐
                 │   EVENT BUS / MQ     │
                 │----------------------│
                 │ RabbitMQ / Kafka     │
                 │ Async Communication  │
                 └──────────┬───────────┘
                            │
                            │
                            ▼
               ┌──────────────────────────────┐
               │         DATA LAYER           │
               │------------------------------│
               │ MySQL / PostgreSQL           │
               │ MongoDB (Logs/Analytics)     │
               │ Redis (Caching)              │
               └──────────────┬───────────────┘
                              │
                              │
                              ▼
                    ┌─────────────────────┐
                    │  FILE STORAGE       │
                    │---------------------│
                    │ GitHub Repositories │
                    │ Project Files       │
                    │ Video Recordings    │
                    │ Diagrams            │
                    └─────────────────────┘
```


# 🧠 Platform Event Flow (Example)

### Student completes assessment

```text
Student Submits Test
        │
        ▼
Assessment Service Evaluates
        │
        ▼
Event Published → MQ
        │
        ▼
Skill Graph Service Updates Skill Score
        │
        ▼
Growth Engine Updates Student Progress
        │
        ▼
Notification Sent to Mentor
```

# 🧩 Major Platform Services

| Service      | Responsibility          |
| ------------ | ----------------------- |
| Auth Service | Login, JWT              |
| User Service | Students, Mentors, SMEs |
| Skill Graph  | Skill relationships     |
| Learning     | Courses, labs           |
| Assessment   | Tests, question bank    |
| Mentorship   | Sessions, feedback      |
| Project      | Projects and GitHub     |
| Placement    | Job applications        |
| Hiring       | Interview pipeline      |
| Notification | Email/SMS               |

Collaboraters learn:
- ✔ Full stack architecture
- ✔ Microservices design
- ✔ API gateway pattern
- ✔ Event-driven architecture
- ✔ Skill-based hiring systems

### **Complete TFLCoMentor Database ER Diagram (30+ Tables)**

This will show:

```text
Users
Skills
Courses
Assessments
Questions
Projects
Jobs
Applications
MentorSessions
Notifications
```

Students will **immediately understand how the platform database works**.