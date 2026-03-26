# Employer Dashboard
In a **real-world learning / assessment platform** (like the system you are designing for students, mentors, SMEs, and employers), each role views the **dashboard through different questions**. A dashboard is basically a **visual answer to operational queries**. 📊

Below are examples of **real dashboard queries used by different roles**.

## 1️⃣ Admin Dashboard Queries

Admin focuses on **system health, operations, and platform growth**.

Typical questions an Admin dashboard answers:

* How many **students registered today / this week / this month**?
* How many **active users** are currently using the platform?
* Which **courses or technologies** are most popular?
* How many **assessments are completed vs pending**?
* Which mentors are **most active**?
* Which SMEs have **contributed most questions**?
* How many **companies are using the platform**?
* What is the **system usage trend**?
* Which **assessments have highest failure rate**?
* How many **students became employable after assessment**?

Example SQL queries:

```sql
-- Total registered students
SELECT COUNT(*) FROM Students;

-- Active users today
SELECT COUNT(DISTINCT UserId)
FROM UserActivity
WHERE DATE(LoginTime) = CURDATE();

-- Top technologies
SELECT Technology, COUNT(*) 
FROM Assessments
GROUP BY Technology
ORDER BY COUNT(*) DESC;
```

Admin dashboard = **System intelligence** 🧠


## 2️⃣ Mentor Dashboard Queries

Mentor dashboard focuses on **student progress and mentoring effectiveness**.

Typical questions:

* How many **students are assigned to me**?
* Which students **completed assessments**?
* Which students are **struggling with topics**?
* Which topics have **lowest scores**?
* Which students **need mentoring intervention**?
* Which students improved **week over week**?
* How many **coding assignments are pending review**?

Example queries:

```sql
-- Students assigned to mentor
SELECT * 
FROM Students
WHERE MentorId = 101;

-- Student performance
SELECT StudentId, AVG(Score)
FROM AssessmentResults
GROUP BY StudentId;

-- Weak topics
SELECT Topic, AVG(Score)
FROM AssessmentResults
GROUP BY Topic
ORDER BY AVG(Score);
```

Mentor dashboard = **Student development insight** 🌱

## 3️⃣ SME (Subject Matter Expert) Dashboard Queries

SME focuses on **content quality and question bank health**.

Typical questions:

* How many **questions exist per topic**?
* Which questions have **high failure rate**?
* Which questions are **too easy**?
* Which questions are **most attempted**?
* Which questions need **revision or replacement**?
* How many **new questions added this week**?

Example queries:

```sql
-- Questions per topic
SELECT Topic, COUNT(*)
FROM Questions
GROUP BY Topic;

-- Difficult questions
SELECT QuestionId, AVG(Score)
FROM AssessmentResponses
GROUP BY QuestionId
ORDER BY AVG(Score) ASC;

-- Most attempted questions
SELECT QuestionId, COUNT(*)
FROM AssessmentResponses
GROUP BY QuestionId
ORDER BY COUNT(*) DESC;
```

SME dashboard = **Content intelligence** 📚

## 4️⃣ Student Dashboard Queries

Student dashboard focuses on **learning progress and improvement**.

Typical questions:

* What **assessments are pending**?
* What **scores did I get**?
* Which topics are **my strengths**?
* Which topics are **my weaknesses**?
* How do I **rank among other students**?
* What **skills should I improve**?
* Which **learning resources** are recommended?

Example queries:

```sql
-- Student assessment results
SELECT AssessmentId, Score
FROM AssessmentResults
WHERE StudentId = 501;

-- Pending assessments
SELECT *
FROM Assessments
WHERE AssessmentId NOT IN (
    SELECT AssessmentId
    FROM AssessmentResults
    WHERE StudentId = 501
);

-- Topic wise performance
SELECT Topic, AVG(Score)
FROM AssessmentResults
WHERE StudentId = 501
GROUP BY Topic;
```

Student dashboard = **Self-improvement mirror** 🪞

## 5️⃣ Employer Dashboard Queries

Employer dashboard focuses on **talent discovery and hiring insights**.

Typical questions:

* Which students are **job ready**?
* Who are the **top performers in a specific technology**?
* Which students have **strong coding skills**?
* Which students match **our job role requirements**?
* What is the **skill distribution of available candidates**?

Example queries:

```sql
-- Top students
SELECT StudentId, AVG(Score) AS AvgScore
FROM AssessmentResults
GROUP BY StudentId
ORDER BY AvgScore DESC
LIMIT 10;

-- Students skilled in .NET
SELECT StudentId
FROM Skills
WHERE SkillName = '.NET';

-- Job-ready students
SELECT StudentId
FROM Students
WHERE EmployabilityScore > 80;
```

Employer dashboard = **Talent discovery engine** 🎯

## 🧠 Mentor Insight (Important for Students)

When students build **real software systems**, they should understand:

> **Dashboards are not just UI charts — they represent real business questions.**

Every chart is answering a **SQL query**.

```
Business Question
        ↓
Data Query
        ↓
API Endpoint
        ↓
Dashboard Visualization
```

Example:

```
Top Students
     ↓
SQL Query
     ↓
REST API
     ↓
React / Angular Chart
```

This is **real full-stack thinking**.
