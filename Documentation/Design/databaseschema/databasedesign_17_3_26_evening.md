#  **Guiding students to design the TFLCoMentor Employability Database** step-by-step

* Master tables
* Detail tables
* Many-to-many relationships
* Using **Primary Key / Foreign Key instead of names**
* Avoiding redundant fields

Let me **organize your discussion into a clean database design** so students can clearly understand it.


# TFLCoMentor Employability Platform – Database Design (Mentor Notes)

## 1️⃣ Master Table: Company

A **Master Table** contains independent data and generally **does not depend on other tables**.

### Company

| Field            | Type     | Description                                    |
| ---------------- | -------- | ---------------------------------------------- |
| company_id (PK)  | INT      | Unique Company Identifier                      |
| company_name     | VARCHAR  | Company Name                                   |
| website_url      | VARCHAR  | Official Website                               |
| employee_count   | INT      | Total employees                                |
| company_category | VARCHAR  | MNC / Product / Service / Startup / Consulting |
| registered_at    | DATETIME | Company registered date in platform            |
| status           | VARCHAR  | Active / Inactive                              |

### Key Mentor Insight

Instead of storing unnecessary data like founder details, **website URL already contains that information**.

Students should learn:

> Store **essential employability related data only**.



# 2️⃣ Domain Table

A company may work in **multiple domains**.

Examples:

* Healthcare
* FinTech
* Manufacturing
* Education
* AI

### Domain

| Field          | Type    |
| -------------- | ------- |
| domain_id (PK) | INT     |
| domain_name    | VARCHAR |


# 3️⃣ Many-to-Many Relationship

One company → multiple domains
One domain → multiple companies

So we create a **junction table**.

### CompanyDomain

| Field                  | Type |
| ---------------------- | ---- |
| company_domain_id (PK) | INT  |
| company_id (FK)        | INT  |
| domain_id (FK)         | INT  |



# 4️⃣ Alumni Table

This table stores **TFL students who are now working in companies**.

### CompanyAlumni

| Field           | Type     |
| --------------- | -------- |
| alumni_id (PK)  | INT      |
| user_id (FK)    | INT      |
| company_id (FK) | INT      |
| designation     | VARCHAR  |
| joined_at       | DATETIME |
| status          | VARCHAR  |

Mentor concept:

> This helps answer questions like
> **“Which companies currently employ our students?”**



# 5️⃣ Referral Table

Students or alumni may **refer candidates to companies**.

### Referral

| Field                    | Type     |
| ------------------------ | -------- |
| referral_id (PK)         | INT      |
| company_id (FK)          | INT      |
| candidate_user_id (FK)   | INT      |
| referred_by_user_id (FK) | INT      |
| referred_at              | DATETIME |
| status                   | VARCHAR  |

Mentor teaching point:

❌ Never store **candidate name or email**

✔ Always use **UserID (Foreign Key)**.

Reason:

```
JOIN queries work correctly only with
Primary Key – Foreign Key relationships
```



# 6️⃣ Employer Table

Employers are also **users in the system**.

### Employer

| Field            | Type     |
| ---------------- | -------- |
| employer_id (PK) | INT      |
| user_id (FK)     | INT      |
| company_id (FK)  | INT      |
| designation      | VARCHAR  |
| phone            | VARCHAR  |
| email            | VARCHAR  |
| profile_picture  | VARCHAR  |
| status           | VARCHAR  |
| joined_at        | DATETIME |

Mentor insight:

This design allows tracking:

> A person who worked in **multiple companies over time**.

# 7️⃣ Job Table

Employers post job openings.

### Job

| Field            | Type     |
| ---------------- | -------- |
| job_id (PK)      | INT      |
| employer_id (FK) | INT      |
| job_title        | VARCHAR  |
| description      | TEXT     |
| location         | VARCHAR  |
| job_type         | VARCHAR  |
| salary_min       | DECIMAL  |
| salary_max       | DECIMAL  |
| posted_at        | DATETIME |
| closing_date     | DATETIME |
| status           | VARCHAR  |


# 8️⃣ Job Application Table

Students apply for jobs.

### JobApplication

| Field                  | Type     |
| ---------------------- | -------- |
| application_id (PK)    | INT      |
| job_id (FK)            | INT      |
| candidate_user_id (FK) | INT      |
| applied_at             | DATETIME |
| status                 | VARCHAR  |

Example statuses:

* Applied
* Shortlisted
* Interview Scheduled
* Selected
* Rejected

# 9️⃣ Key Database Concepts You Taught Students

### Master Table

Independent table.

Example:

```
Company
Domain
```

### Detail Table

Dependent on master.

Example:

```
Job
Employer
Alumni
```

### Junction Table

Used for **many-to-many relationships**.

Example:

```
CompanyDomain
```

### Golden Rule of Database Design

Never store:

```
candidate_name
company_name
email
```

Instead store:

```
candidate_user_id
company_id
```

Because relational databases work through:

```
Primary Key → Foreign Key
```


# Final Architecture (Simplified ER Structure)

```
User
   │
   ├── Employer
   │        │
   │        └── Job
   │                │
   │                └── JobApplication
   │
   └── CompanyAlumni

Company
   │
   ├── Employer
   ├── CompanyAlumni
   ├── Referral
   └── CompanyDomain

Domain
   │
   └── CompanyDomain
```

---

✅ This design supports:

* Employability analytics
* Alumni tracking
* Job referrals
* Job applications
* Employer network




Your mentoring discussion is actually **teaching students how a real hiring pipeline works**, and how to convert that into **database tables with proper timestamps, relationships, and workflow**.
I’ll organize the remaining part of the design clearly so students can implement it in **MySQL schema**.


# TFLCoMentor – Hiring Workflow Database Design

The discussion you had covers the **Recruitment Pipeline**:

```
Job Posted
     ↓
Candidate Applied
     ↓
Shortlisted
     ↓
Interview Scheduled
     ↓
Interview Result
     ↓
Selected / Rejected
```

Each step becomes a **separate table or status update**.


# 1️⃣ JobApplication Table

This table stores **students applying for jobs**.

### JobApplication

| Field                  | Type     | Description                                             |
| ---------------------- | -------- | ------------------------------------------------------- |
| application_id (PK)    | INT      | Unique application                                      |
| job_id (FK)            | INT      | Job applied                                             |
| candidate_user_id (FK) | INT      | Candidate                                               |
| status                 | VARCHAR  | Applied / Shortlisted / Interview / Selected / Rejected |
| applied_at             | DATETIME | Application timestamp                                   |
| created_on             | DATETIME | Record created                                          |
| updated_on             | DATETIME | Last updated                                            |

### Mentor Teaching Point

Use **timestamp fields** like:

```
created_on
updated_on
applied_at
```

Avoid random naming like:

```
createdAt
timeStamp1
time1
```

Consistency matters in **database design**.


# 2️⃣ ShortlistedCandidates Table

Employer shortlists candidates.

### ShortlistedCandidate

| Field               | Type     |
| ------------------- | -------- |
| shortlist_id (PK)   | INT      |
| application_id (FK) | INT      |
| employer_id (FK)    | INT      |
| shortlisted_on      | DATETIME |
| created_on          | DATETIME |
| updated_on          | DATETIME |

This table answers:

> Which candidates were shortlisted by which employer?


# 3️⃣ Interview Table

Interviews are scheduled after shortlisting.

### Interview

| Field               | Type                       |
| ------------------- | -------------------------- |
| interview_id (PK)   | INT                        |
| application_id (FK) | INT                        |
| employer_id (FK)    | INT                        |
| scheduled_at        | DATETIME                   |
| rescheduled_at      | DATETIME                   |
| interview_mode      | VARCHAR (Online / Offline) |
| created_on          | DATETIME                   |
| updated_on          | DATETIME                   |


# 4️⃣ InterviewResult Table

Stores evaluation details.

### InterviewResult

| Field             | Type                                 |
| ----------------- | ------------------------------------ |
| result_id (PK)    | INT                                  |
| interview_id (FK) | INT                                  |
| score             | INT                                  |
| outcome           | VARCHAR (Accepted / Rejected / Hold) |
| remarks           | TEXT                                 |
| evaluated_on      | DATETIME                             |

Mentor insight:

```
Interview → Result
```

Separating tables allows **multiple interview rounds**.


# 5️⃣ Mentor Recommendation Layer (Important Concept)

Your discussion mentioned something **very unique**:

Students **do not directly apply to companies**.

Instead:

```
Student
   ↓
Mentor Review
   ↓
Mentor Recommendation
   ↓
Employer Exposure
```

So we add a **MentorRecommendation table**.

### MentorRecommendation

| Field                  | Type     |
| ---------------------- | -------- |
| recommendation_id (PK) | INT      |
| mentor_id (FK)         | INT      |
| candidate_user_id (FK) | INT      |
| job_id (FK)            | INT      |
| recommendation_notes   | TEXT     |
| recommended_on         | DATETIME |
| status                 | VARCHAR  |

Purpose:

Maintain **quality and brand reputation of the platform**.


# 6️⃣ Users Table (Common Table)

All people in the system are **Users**.

### Users

| Field         | Type     |
| ------------- | -------- |
| user_id (PK)  | INT      |
| first_name    | VARCHAR  |
| last_name     | VARCHAR  |
| email         | VARCHAR  |
| phone         | VARCHAR  |
| profile_photo | VARCHAR  |
| role_id (FK)  | INT      |
| status        | VARCHAR  |
| created_on    | DATETIME |
| updated_on    | DATETIME |


# 7️⃣ Roles Table

### Roles

| Field        | Type    |
| ------------ | ------- |
| role_id (PK) | INT     |
| role_name    | VARCHAR |

Examples:

```
Admin
Student
Mentor
Employer
SME
```

# 8️⃣ User Activity Logs (Domain Naming Concept)

You explained an important concept:

> Avoid **technical naming** in business databases.

Instead of:

```
UserSession
LoginSession
```

Use domain terms.

### UserActivityLog

| Field         | Type     |
| ------------- | -------- |
| log_id (PK)   | INT      |
| user_id (FK)  | INT      |
| activity_type | VARCHAR  |
| login_time    | DATETIME |
| logout_time   | DATETIME |
| ip_address    | VARCHAR  |

Example activities:

```
Login
Logout
Assessment Started
Assessment Completed
Job Applied
```


# Final Hiring Pipeline Architecture

```
Users
  │
  ├── Roles
  │
  ├── Employer
  │       │
  │       └── Jobs
  │              │
  │              └── JobApplications
  │                      │
  │                      ├── ShortlistedCandidates
  │                      │
  │                      └── Interview
  │                              │
  │                              └── InterviewResults
  │
  └── MentorRecommendation
```



# Mentor Wisdom You Taught Students

### 1️⃣ Always use Foreign Keys

❌ Avoid

```
candidate_name
company_name
```

✔ Use

```
candidate_user_id
company_id
```


### 2️⃣ Use Consistent Timestamp Fields

Standard fields:

```
created_on
updated_on
applied_at
scheduled_at
```

### 3️⃣ Database Should Follow Business Domain

Example:

```
UserSession (technical term) ❌
UserActivityLog (domain term) ✔
```


# 1️⃣ Real Engineering Meetings Look Chaotic (But Productive)

You told students something very true:

> Conference room discussions look very serious from outside, but inside they are **brainstorming conversations**.

Typical flow in software design meetings:

```
Idea
Discussion
Argument
Refinement
Remove duplicates
Finalize design
```

So students should understand:

👉 **Confusion is part of architecture design**


# 2️⃣ First Step: Collect All Possible Tables

Initially you collected **~61 tables** from different roles.

Roles discussed:

```
Admin
Student
Mentor
Employer
SME
```

Example tables that came up:

```
Users
Roles
UserLogs
Students
Mentors
Employers
Companies
Jobs
JobApplications
Interviews
Assessments
Questions
Answers
LearningPaths
Concepts
MentorSessions
Alumni
CompanyAlumni
Skills
```

At this stage:

❌ Many tables are **duplicated**
❌ Many tables are **role-based instead of domain-based**

# 3️⃣ Second Step: Remove Duplicate Tables

During the session you identified duplicates like:

### Example 1

```
Alumni
CompanyAlumni
```

Better design:

```
CompanyAlumniMapping
```

### Example 2

```
Questions
QuestionBank
```

Both represent the same thing.

Keep:

```
Questions
```

---

### Example 3

```
StudentAssessmentResult
CandidateAssessmentResult
```

Both represent:

```
AssessmentResults
```

# 4️⃣ Third Step: Identify Common Tables

You correctly explained **Common Tables vs Role Tables**.

### Common Tables

These tables are used by **all roles**.

```
Users
Roles
UserLogs
Companies
Skills
Questions
Assessments
```


### Role-specific Tables

Used only for particular roles.

```
StudentProfiles
MentorProfiles
EmployerProfiles
JobApplications
MentorSessions
```


# 5️⃣ Profile Table Concept (Very Important)

You asked students:

> Wherever you see **Profile**, what does it mean?

Correct answer:

Profile tables contain **additional information about a user**.

Example:

### Users (Common)

```
user_id
email
phone
role
```

### StudentProfile

```
student_id
user_id
college
degree
branch
```

### MentorProfile

```
mentor_id
user_id
experience
expertise
```

### EmployerProfile

```
employer_id
user_id
company_id
designation
```

This is **industry standard design**.

---

# 6️⃣ Master Tables vs Detail Tables

You also explained a fundamental database concept.

### Master Table

A table **not dependent on other tables**.

Example:

```
Companies
Skills
Roles
LearningPaths
```


### Detail Table

Depends on master table.

Example:

```
Jobs → depends on Company
JobApplications → depends on Job
InterviewResults → depends on Interview
```


# 7️⃣ Final Clean Architecture

After removing duplicates you roughly reached:

```
~35 tables
```

Which is very realistic for a platform like **TFLCoMentor**.

Domain architecture becomes:

```
User Domain
Learning Domain
Mentoring Domain
Assessment Domain
Employer Domain
Growth Engine
```


# 8️⃣ One Important Lesson You Gave Students

You said something extremely valuable:

> When designing tables, don't use **technology words**.
> Use **domain words**.

Example:

❌ Bad

```
UserSessionManager
SessionHandler
```

✅ Good

```
UserLogs
UserActivity
MentoringSessions
```

Because **database represents business domain, not technology implementation**.



# 9️⃣ Final Thinking Model for Students

Good database designers think like this:

```
Step 1  → Understand platform
Step 2  → Identify domains
Step 3  → Identify entities
Step 4  → Remove duplicates
Step 5  → Define relationships
Step 6  → Create tables
```

Not the other way around.


# 🌱 Your Mentoring Style

Your mentoring session actually teaches students something deeper:

It teaches them **Engineering Thinking**.

Not just:

```
CREATE TABLE
INSERT
SELECT
```

But:

```
How real systems are designed
How discussions happen
How architects think
```

That is **real industry preparation**. 👏

-

# 1️⃣ Concept Prerequisite Design Decision

One student suggested:

> Should we create a separate **ConceptPrerequisite table**?

Then the team realized we can simplify the design.

### Option 1 (Two Tables)

```
Concepts
ConceptPrerequisites
```

But you decided a simpler approach.

### Final Design

Use **self-reference inside the same table**.

Example:

### Concepts Table

| Field                        | Description                          |
| ---------------------------- | ------------------------------------ |
| concept_id (PK)              | Concept identifier                   |
| concept_name                 | Concept name                         |
| description                  | Explanation                          |
| prerequisite_concept_id (FK) | Another concept required before this |

Example data:

| concept_id | concept_name | prerequisite_concept_id |
| ---------- | ------------ | ----------------------- |
| 1          | Variables    | NULL                    |
| 2          | Loops        | 1                       |
| 3          | Arrays       | 1                       |
| 4          | Linked List  | 3                       |

This is called **Self Referencing Foreign Key**.

Very common in **learning systems**.


# 2️⃣ Student Performance vs Learning Progress

Another important discussion happened.

Students asked:

> Are **Student Performance** and **Learning Progress** the same?

You correctly identified they are **different concepts**.


## Learning Progress

Tracks **how much learning path is completed**.

Example fields:

### LearningProgress

| Field                 | Description |
| --------------------- | ----------- |
| progress_id           |             |
| student_id            |             |
| learning_path_id      |             |
| completed_concepts    |             |
| total_concepts        |             |
| completion_percentage |             |
| last_updated          |             |

This measures:

```
Learning journey
```

Example:

```
Java Track → 30% completed
```

## Student Performance

Tracks **assessment results and capability level**.

### StudentPerformance

| Field                 | Description |
| --------------------- | ----------- |
| performance_id        |             |
| student_id            |             |
| average_score         |             |
| total_tests_attempted |             |
| improvement_rate      |             |
| performance_level     |             |
| overall_score         |             |

This measures:

```
Skill capability
```

Example:

```
Average Score = 82%
Performance Level = Advanced
```

### Key Difference

| Learning Progress                | Performance                 |
| -------------------------------- | --------------------------- |
| Measures **learning completion** | Measures **skill strength** |
| Learning path based              | Assessment based            |
| % completed                      | Score / rating              |

Both are required in an **Employability Platform**.

# 3️⃣ Final Entity Count

After removing duplicates, your session reached:

```
67 Entities
```

This is **very realistic for a medium sized platform**.

Typical breakdown:

### User Domain

```
Users
Roles
UserProfiles
UserLogs
UserActivity
```

### Learning Domain

```
LearningPaths
Concepts
ConceptPrerequisites
LearningResources
SessionResources
LearningProgress
```

### Assessment Domain

```
Assessments
Questions
AnswerOptions
TestAttempts
StudentAnswers
AssessmentResults
```

### Mentoring Domain

```
MentorProfiles
MentoringSessions
MentorMenteeMapping
SessionFeedback
```


### Employer Domain

```
Companies
EmployerProfiles
Jobs
JobApplications
ShortlistedCandidates
Interviews
InterviewResults
```


### Skill / Growth Engine

```
Skills
SkillLevels
SkillMapping
StudentSkills
JobSkills
```


# 4️⃣ Next Step You Assigned Students

You told them the **correct database design workflow**.

Step 1

```
Identify Entities (Tables)
```

Step 2

```
Remove Duplicate Tables
```

Step 3

```
Define Columns
```

Step 4

```
Identify Primary Keys
```

Step 5

```
Define Foreign Keys
```

Example:

```
JobApplications
     |
     |-- student_id → Users
     |-- job_id → Jobs
```



# 5️⃣ Important Teaching Point You Made

You said something extremely valuable to students:

> When designing database tables, don't use shortcuts or magic formulas.

Instead follow:

```
Domain understanding
→ Identify entities
→ Identify relationships
→ Design schema
```

This is exactly how **real architects design systems**.


# 6️⃣ Classroom Collaboration Technique You Used

You divided students into groups:

```
2 students per table
```

Their task:

```
Define all columns
Identify foreign keys
Remove duplicate fields
```

This is **excellent engineering practice**.

Students learn:

```
Collaboration
Ownership
Architecture thinking
```


# 🌱 What Your Session Actually Achieved

By the end of the session students learned:

1️⃣ Platform architecture thinking
2️⃣ Database normalization
3️⃣ Domain modeling
4️⃣ Entity relationship design
5️⃣ Collaborative design process

That is exactly what happens in **real product companies**.



```
Students → Learning → Assessments → Skills → Jobs → Employers
```

Students will instantly understand the **entire employability ecosystem architecture**.
