# TFLCoMentorDatabase — High Level ER Architecture

Below is the **Complete ASCII ER Diagram for `TFLCoMentorDatabase`** based on the schema we created.
This diagram shows **how the major entities of the 7 modules connect together** in a **Monolithic MySQL database**.

The goal is to visualize the **entire employability pipeline**.


```
                          +-------------------+
                          |       Roles       |
                          +-------------------+
                                   |
                                   |
                          +-------------------+
                          |     UserRoles     |
                          +-------------------+
                                   |
                                   |
+-------------+          +-------------------+           +----------------+
|  Companies  |--------->|       Users       |<----------|   UserSessions |
+-------------+          +-------------------+           +----------------+
       |                          |
       |                          |
       |                          |
       |                 +------------------+
       |                 |     Profiles     |
       |                 +------------------+
       |
       |
+-------------------+
| EmployerProfiles  |
+-------------------+
```

This section represents the **Membership Module**.

# Skill Taxonomy ER Structure

```
+-----------+
|  Domains  |
+-----------+
      |
      |
+-------------+
| Technologies|
+-------------+
      |
      |
+-----------+
|  Skills   |
+-----------+
      |
      |
+------------+
|  Concepts  |
+------------+
      |
      |
+----------------------+
| LearningPathSkills   |
+----------------------+
      |
      |
+---------------+
| LearningPaths |
+---------------+
```

Student skill progress:

```
Users
  |
  |
  v
+---------------+
| StudentSkills |
+---------------+
      |
      v
+--------+
| Skills |
+--------+
```

# Evaluation Content ER Structure

```
                +----------------+
                | QuestionTypes  |
                +----------------+
                        |
                        |
                +----------------+
                |   Questions    |
                +----------------+
                        |
          +-------------+-------------+
          |                           |
          v                           v
+----------------+           +--------------------+
| QuestionOptions|           | CodingProblems     |
+----------------+           +--------------------+
                                      |
                                      |
                           +-----------------------+
                           | CodingProblemTestCases|
                           +-----------------------+
```

Tests:

```
+---------+
|  Tests  |
+---------+
     |
     |
+---------------+
| TestQuestions |
+---------------+
     |
     v
+------------+
| Questions  |
+------------+
```

Assignments:

```
+-------------+
| Assignments |
+-------------+
```

# Assessment Orchestrator ER Structure

```
                +-------------+
                |   Tests     |
                +-------------+
                       |
                       |
                +---------------+
                |  Assessments  |
                +---------------+
                       |
         +-------------+-------------+
         |                           |
         v                           v
+-------------------+      +-------------------+
|AssessmentAssignments|    |AssessmentAttempts |
+-------------------+      +-------------------+
         |                           |
         |                           |
         v                           v
      Users                +--------------------+
                           | AssessmentResponses|
                           +--------------------+
```

# Evaluation Engine ER Structure

Submissions and scoring:

```
Users
  |
  |
  v
+-------------+
| Submissions |
+-------------+
      |
      v
+---------------+
|  Assignments  |
+---------------+
```

Code execution:

```
Users
  |
  v
+-------------------+
| ExecutionResults  |
+-------------------+
        |
        v
+-------------------+
| CodingProblems    |
+-------------------+
```

Scores:

```
Users
  |
  v
+--------+
| Scores |
+--------+
  |
  v
Assessments
```

# Insight Core ER Structure

```
Users
  |
  v
+----------------+
| StudentInsights|
+----------------+
        |
        v
+---------------+
|  SkillScores  |
+---------------+
        |
        v
+--------+
| Skills |
+--------+
```

Test analytics:

```
+-------------+
| TestAnalytics|
+-------------+
      |
      v
+-------+
| Tests |
+-------+
```

# Growth Engine ER Structure

Mentorship:

```
Users (Mentor)
      |
      |
      v
+------------------+
| MentoringSessions|
+------------------+
      |
      v
Users (Student)
```

Projects:

```
+-----------+
| Projects  |
+-----------+
      |
      v
+----------------+
| ProjectMembers |
+----------------+
      |
      v
Users
```

Hiring pipeline:

```
+-----------+
| Companies |
+-----------+
      |
      v
+-------+
| Jobs  |
+-------+
      |
      v
+----------------+
| JobApplications|
+----------------+
      |
      v
Users
      |
      v
+------------+
| Interviews |
+------------+
```

# End-to-End Platform Data Flow

This is the **most important conceptual flow** of the platform.

```
Skill Taxonomy
      |
      v
Evaluation Content
      |
      v
Tests Created
      |
      v
Assessments Scheduled
      |
      v
Student Attempts Test
      |
      v
Evaluation Engine Calculates Score
      |
      v
Insight Core Generates Skill Analysis
      |
      v
Growth Engine Recommends
   Mentors | Projects | Jobs
```

# Complete Platform Relationship (Simplified)

```
Users
 |
 +---- StudentSkills ---- Skills ---- Concepts
 |
 +---- Submissions ---- Assignments
 |
 +---- AssessmentAttempts ---- Assessments ---- Tests
 |
 +---- Scores
 |
 +---- StudentInsights
 |
 +---- MentoringSessions
 |
 +---- JobApplications ---- Jobs ---- Companies
```

# Why This Database Design is Powerful

This schema enables:

1️⃣ **Skill-based learning**
2️⃣ **Continuous evaluation**
3️⃣ **Automated skill insights**
4️⃣ **Mentor-guided growth**
5️⃣ **Employer hiring pipeline**

This makes **TFLCoMentor** not just an LMS but an **Employability Intelligence Platform**.

