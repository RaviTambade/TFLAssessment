# TFLCoMentor Platform — User Stories Grouped by Modules

To design **TFLCoMentor as a scalable employability platform**, the best architectural approach is to organize the system around **domain modules (bounded contexts)** instead of user roles.

You already defined the **core domain modules**:

1. **Skill Taxonomy**
2. **Evaluation Content**
3. **Assessment Orchestrator**
4. **Evaluation Engine**
5. **Insight Core**
6. **Growth Engine**
7. **Membership**

Now we will **map all user stories into these modules**, so the architecture becomes clear for:
* Microservices
* Vertical Slice Architecture
* Database schemas
* APIs
* Team ownership

## 1️⃣ Membership Module

**Purpose**

Manages **users, roles, profiles, authentication, and organization entities**.

Actors:
Admin, Student, Mentor, SME, Employer

### Functional Areas

* User accounts
* Roles & permissions
* Profiles
* Authentication
* Session logs
* Organization profiles

### User Stories

| UseCase ID      | Functionality                      |
| --------------- | ---------------------------------- |
| US_ADMIN_12     | View all platform users            |
| US_ADMIN_13     | View user profile                  |
| US_ADMIN_14     | Assign or modify user roles        |
| US_ADMIN_15     | Remove user                        |
| US_ADMIN_09     | View platform session statistics   |
| US_ADMIN_10     | View session logs                  |
| US_ADMIN_11     | View session logs of specific user |
| US_STUDENT_16   | View profile                       |
| US_STUDENT_17   | Update profile                     |
| US_STUDENT_18   | Change password                    |
| US_MENTOR_98    | View mentor profile                |
| US_MENTOR_99    | Update mentor profile              |
| US_EMPLOYER_104 | View employer profile              |
| US_EMPLOYER_105 | Create employer profile            |
| US_EMPLOYER_106 | Update employer profile            |
| US_EMPLOYER_107 | Delete employer profile            |
| US_EMPLOYER_100 | View company profile               |

# 2️⃣ Skill Taxonomy Module

**Purpose**

Defines **the skill graph of the employability ecosystem.**

Example

```
Domain
   |
Technology
   |
Skill
   |
Concept
   |
Learning Unit
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
      |
   REST Principles
```

### Functional Areas

* Domains
* Technologies
* Skills
* Concepts
* Learning paths

### User Stories

| UseCase ID    | Functionality                       |
| ------------- | ----------------------------------- |
| US_SME_50     | View concepts                       |
| US_SME_51     | Add concept                         |
| US_SME_52     | View concept details                |
| US_SME_53     | Update concept                      |
| US_SME_76     | View programming languages assigned |
| US_MENTOR_82  | View skills acquired by student     |
| US_MENTOR_81  | View learning path progress         |
| US_STUDENT_37 | View learning progress              |

# 3️⃣ Evaluation Content Module

**Purpose**

Manages **all evaluation assets** used in learning and assessment.

Examples

* Questions
* Coding problems
* Labs
* Assignments
* Tests

### Functional Areas

* Question bank
* Question review workflow
* Coding problems
* Test creation
* Content categorization

### User Stories

| UseCase ID | Functionality              |
| ---------- | -------------------------- |
| US_SME_70  | View questions by type     |
| US_SME_71  | Add new question draft     |
| US_SME_72  | Submit question for review |
| US_SME_73  | View question details      |
| US_SME_74  | Update question            |
| US_SME_75  | Filter questions by status |
| US_SME_67  | Create test                |
| US_SME_68  | View test details          |
| US_SME_69  | Update test                |
| US_SME_66  | View test history          |

# 4️⃣ Assessment Orchestrator Module

**Purpose**

Controls **assessment scheduling and delivery**.

This module acts like a **workflow engine**.

Responsibilities

* Assign tests
* Schedule tests
* Manage attempts
* Trigger evaluation

### Functional Areas

* Test scheduling
* Assessment assignment
* Student attempts
* Assessment status

### User Stories

| UseCase ID    | Functionality                  |
| ------------- | ------------------------------ |
| US_ADMIN_03   | View all assessments           |
| US_ADMIN_04   | Assign assessment to students  |
| US_ADMIN_05   | Delete assessment              |
| US_ADMIN_06   | View assessment summary        |
| US_ADMIN_07   | View student assessment status |
| US_ADMIN_08   | Reschedule assessment          |
| US_STUDENT_22 | View upcoming assessments      |
| US_STUDENT_23 | Start assessment               |
| US_STUDENT_24 | Submit assessment              |

# 5️⃣ Evaluation Engine Module

**Purpose**

Evaluates **student submissions and tests**.

Handles

* Auto grading
* Coding evaluation
* Assignment evaluation
* Result calculation

### Functional Areas

* Submission evaluation
* Code execution
* Scoring
* Result storage

### User Stories

| UseCase ID    | Functionality            |
| ------------- | ------------------------ |
| US_STUDENT_20 | View assignments         |
| US_STUDENT_21 | Submit assignments       |
| US_SME_48     | View student submissions |
| US_SME_49     | Evaluate submissions     |
| US_SME_58     | View completed tests     |
| US_SME_59     | View students appeared   |
| US_SME_60     | View passed students     |
| US_SME_61     | View failed students     |
| US_SME_62     | View average score       |

# 6️⃣ Insight Core Module

**Purpose**

Transforms **evaluation data into insights**.

Example insights

* Skill gap
* Strength areas
* Weak areas
* Test analytics
* Learning analytics

### Functional Areas

* Performance analytics
* Question analytics
* Score distribution
* Student reports

### User Stories

| UseCase ID    | Functionality                  |
| ------------- | ------------------------------ |
| US_ADMIN_01   | View platform statistics       |
| US_ADMIN_02   | View assessment statistics     |
| US_STUDENT_25 | View assessment results        |
| US_SME_63     | Analyze student performance    |
| US_SME_64     | Analyze question difficulty    |
| US_SME_65     | View score distribution        |
| US_MENTOR_85  | Analyze assignment scores      |
| US_MENTOR_83  | View SME and employer feedback |

# 7️⃣ Growth Engine Module

**Purpose**

Transforms **insights into employability growth actions**.

Examples

* Mentor guidance
* Learning plans
* Projects
* Jobs
* Hiring pipeline

### Functional Areas

* Mentorship
* Projects
* Community
* Hiring

### User Stories

| UseCase ID      | Functionality            |
| --------------- | ------------------------ |
| US_STUDENT_26   | View assigned mentor     |
| US_STUDENT_27   | Schedule mentor session  |
| US_STUDENT_28   | Post question            |
| US_STUDENT_29   | View discussions         |
| US_STUDENT_30   | View discussion details  |
| US_STUDENT_31   | View projects            |
| US_STUDENT_32   | Submit project           |
| US_STUDENT_33   | View job opportunities   |
| US_STUDENT_34   | Apply for job            |
| US_STUDENT_35   | View job applications    |
| US_STUDENT_36   | View job offers          |
| US_MENTOR_77    | View students            |
| US_MENTOR_79    | Add/remove mentees       |
| US_MENTOR_87    | View mentoring notes     |
| US_MENTOR_88    | Provide feedback         |
| US_MENTOR_92    | Review projects          |
| US_MENTOR_95    | Create mentoring session |
| US_EMPLOYER_108 | Post job                 |
| US_EMPLOYER_115 | View job applications    |
| US_EMPLOYER_118 | Search candidates        |
| US_EMPLOYER_119 | Shortlist candidates     |
| US_EMPLOYER_121 | View upcoming interviews |
| US_EMPLOYER_124 | View interview results   |

# Final Architecture View

```
                TFLCoMentor Platform
                        |
 ---------------------------------------------------------
 |        |           |           |         |            |
Membership Skill   Evaluation  Assessment  Evaluation   Insight
           Taxonomy  Content    Orchestrator Engine     Core
                                                        |
                                                   Growth Engine
```

Flow of the platform

```
Skill Taxonomy
      ↓
Evaluation Content
      ↓
Assessment Orchestrator
      ↓
Evaluation Engine
      ↓
Insight Core
      ↓
Growth Engine
```

Meaning

```
Define Skills
   ↓
Create Assessments
   ↓
Conduct Evaluation
   ↓
Generate Insights
   ↓
Enable Growth
```

This is exactly how **untapped potential students become employable professionals.**

