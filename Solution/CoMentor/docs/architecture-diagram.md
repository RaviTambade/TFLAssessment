






# 🏗 TFL CoMentor – Microservices Architecture (ASCII Diagram)
Below is a **clean ASCII Architecture Diagram** for  **TFL CoMentor Solution**.


```
                                     ┌──────────────────────────────┐
                                     │        Client Layer          │
                                     │  (Web / Mobile / Admin UI)   │
                                     └──────────────┬───────────────┘
                                                    │
                                                    ▼
                                    ┌───────────────────────────────┐
                                    │         API Gateway           │
                                    │ (Routing / Auth / Logging)    │
                                    └──────────────┬────────────────┘
                                                   │
 ──────────────────────────────────────────────────┼────────────────────────────────────────────
                                                   │
                                                   ▼
 ┌───────────────────────────┐      ┌──────────────────────────────┐
 │ 1 Skill Taxonomy Engine   │      │ 2 Evaluation Content         │
 │   (Java - Spring Boot)    │      │    Management (Java)         │
 │                           │      │                              │
 │ - Subjects                │      │ - Question Bank              │
 │ - Concepts                │      │ - Problem Statements         │
 │ - Subject_Concepts        │      │ - Mock Questions             │
 │                           │      │ - Code Snippets              │
 │  MySQL: skill_taxonomy_db │      │ - Mini Projects              │
 └──────────────┬────────────┘      │                              │
                │                   │ MySQL: evaluation_content_db │
                │                   └──────────────┬───────────────┘
                │                                  │
                └───────────────┬──────────────────┘
                                │
                                ▼
                 ┌─────────────────────────────────┐
                 │ 3 TFL Assessment Orchestrator   │
                 │      (.NET Core Web API)        │
                 │                                 │
                 │ - Tests                         │
                 │ - Test_Schedules                │
                 │ - Test_Questions                │
                 │ - Assessment Criteria           │
                 │ - Assessments                   │
                 │                                 │
                 │ MySQL: assessment_db            │
                 └──────────────┬──────────────────┘
                                │
                                ▼
                 ┌─────────────────────────────────┐
                 │ 4 Evaluation Service            │
                 │    (Node.js + Express)          │
                 │                                 │
                 │ - Candidate Answers             │
                 │ - Concept-wise Results          │
                 │                                 │
                 │ MySQL: evaluation_service_db    │
                 └──────────────┬──────────────────┘
                                │
                                ▼
                 ┌─────────────────────────────────┐
                 │ 5 TFL Insight Core (Future)     │
                 │      (.NET Analytics API)       │
                 │                                 │
                 │ - Candidate Performance         │
                 │ - Rankings                      │
                 │ - Marking Schemes               │
                 │ - Test Results                  │
                 │                                 │
                 │ MySQL: insight_core_db          │
                 └──────────────┬──────────────────┘
                                │
                                ▼
                 ┌─────────────────────────────────┐
                 │ 6 TFL Growth Engine (Future)    │
                 │      (Python + AI Models)       │
                 │                                 │
                 │ - Interview Data                │
                 │ - AI Recommendations            │
                 │ - Skill Gap Analysis            │
                 │                                 │
                 │ DB: growth_engine_db            │
                 └──────────────┬──────────────────┘
                                │
                                ▼
                 ┌─────────────────────────────────┐
                 │ 7  Membership & Roles Mgmt      │
                 │      (Java - Spring Security)   │
                 │                                 │
                 │ - Users                         │
                 │ - Roles                         │
                 │ - User_Roles                    │
                 │ - Sessions                      │
                 │                                 │
                 │ MySQL: membership_db            │
                 └─────────────────────────────────┘
```


# 🔁 Service Communication Flow (High-Level)

```
Client → API Gateway
        → Membership Service (Authentication)
        → Skill Taxonomy (Fetch Subject/Concepts)
        → Content Management (Fetch Questions)
        → Assessment Orchestrator (Create Test)
        → Evaluation Service (Submit Answers)
        → Insight Core (Generate Report)
        → Growth Engine (AI Recommendation)
```


# 🧠 How You Can Explain This To Students

Since you prefer mentor-style explanation:

### 🏢 Analogy: Engineering College System

| Microservice            | Real World Analogy               |
| ----------------------- | -------------------------------- |
| Skill Taxonomy          | University syllabus department   |
| Content Management      | Question paper setting committee |
| Assessment Orchestrator | Exam controller office           |
| Evaluation Service      | Paper correction department      |
| Insight Core            | Result and ranking section       |
| Growth Engine           | Career guidance cell             |
| Membership              | College admin office             |

This makes microservices intuitive for freshers.


# 🔐 Database Isolation Principle

Each service:

- ✔ Has its own database
- ✔ No direct DB-to-DB access
- ✔ Communicates via APIs only
- ✔ Independent deployment possible

This is **true microservice design**, not just “multiple projects”.

