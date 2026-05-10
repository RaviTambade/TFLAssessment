# TFL Assessment System
The **TFL Assessment System** is not just for tests — it supports a **complete learning, mentoring, evaluation, and hiring ecosystem**.
So the business queries should help mentors, SMEs, administrators, and companies answer **real operational questions**. 

Let us  group the most useful **business queries** into categories so they can later be converted into **APIs, dashboards, and reports**.


## 1️⃣ Student Profile & Academic Queries

These help mentors understand **student background**.

### List all students with academic details

```sql
SELECT 
    u.id AS student_id,
    p.full_name,
    a.stream_name,
    a.specialization,
    a.college_name,
    a.passing_year,
    a.percentage
FROM users u
JOIN personal_informations p ON u.id = p.user_id
JOIN academic_informations a ON u.id = a.user_id;
```

### Students from a specific college

```sql
SELECT 
    p.full_name,
    a.college_name,
    a.stream_name,
    a.specialization
FROM academic_informations a
JOIN personal_informations p ON a.user_id = p.user_id
WHERE a.college_name = 'PCCOE';
```

# 2️⃣ Mentor–Mentee Management Queries

Useful for mentoring dashboards.

### List mentees of a mentor

```sql
SELECT 
    m.mentor_id,
    p.full_name AS mentee_name,
    mm.assigned_on
FROM mentor_mentees mm
JOIN personal_informations p ON mm.mentee_id = p.user_id
JOIN mentor_mentees m ON mm.mentor_id = m.mentor_id
WHERE mm.mentor_id = 5;
```

### Count mentees per mentor

```sql
SELECT 
    mentor_id,
    COUNT(mentee_id) AS total_mentees
FROM mentor_mentees
GROUP BY mentor_id;
```


# 3️⃣ Assessment Tracking Queries

Track **assessment lifecycle**.

### List assessments assigned to students

```sql
SELECT 
    a.id,
    a.student_id,
    a.test_id,
    a.status,
    a.assigned_at,
    a.scheduled_at
FROM assessments a;
```

### Pending assessments

```sql
SELECT 
    student_id,
    test_id,
    scheduled_at
FROM assessments
WHERE status = 'Pending';
```

### Completed assessments

```sql
SELECT 
    student_id,
    test_id,
    assigned_at
FROM assessments
WHERE status = 'Completed';
```

# 4️⃣ Hands-on Lab Performance Queries

Evaluate coding and practical skills.

### Students who submitted hands-on assignments

```sql
SELECT 
    h.user_id,
    hs.github_link,
    hs.submitted_at
FROM hands_on h
JOIN hands_on_submissions hs 
ON h.id = hs.hands_on_id;
```

### Hands-on evaluation scores

```sql
SELECT 
    user_id,
    score,
    submitted_at
FROM hands_on_results
ORDER BY score DESC;
```

### Top performing students in hands-on tasks

```sql
SELECT 
    user_id,
    AVG(score) AS avg_score
FROM hands_on_results
GROUP BY user_id
ORDER BY avg_score DESC;
```


# 5️⃣ Oral Assessment Queries

Track SME evaluation.

### Oral assessment schedule

```sql
SELECT 
    student_id,
    sme_id,
    time_schedule_at,
    status
FROM oral_assessments;
```

### SME ratings for oral answers

```sql
SELECT 
    student_id,
    questions,
    rating,
    remark
FROM oral_question_answers;
```

# 6️⃣ Learning Path Progress Queries

Measure learning improvement.

### Learning progress of students

```sql
SELECT 
    student_id,
    overall_score,
    average_percentage,
    improvement_rate
FROM learning_path_progress;
```

### Students with highest improvement rate

```sql
SELECT 
    student_id,
    improvement_rate
FROM learning_path_progress
ORDER BY improvement_rate DESC;
```

# 7️⃣ Mentor Appointment Queries

Mentor scheduling and sessions.

### Upcoming mentor sessions

```sql
SELECT 
    mentor_id,
    student_id,
    appointment_date,
    start_time
FROM mentor_appointments
WHERE status = 'SCHEDULED';
```

### Completed mentoring sessions

```sql
SELECT 
    mentor_id,
    student_id,
    appointment_date
FROM mentor_appointments
WHERE status = 'COMPLETED';
```

# 8️⃣ Job Placement Queries

Track student employment outcomes.

### Students who applied for jobs

```sql
SELECT 
    student_id,
    job_id,
    applied_at
FROM job_applications;
```

### Job openings posted by companies

```sql
SELECT 
    jd.job_id,
    c.company_name,
    jd.title,
    jd.location
FROM job_descriptions jd
JOIN companies c 
ON jd.employer_id = c.id;
```

# 9️⃣ Interview Tracking Queries

Track recruitment progress.

### Scheduled interviews

```sql
SELECT 
    application_id,
    scheduled_at,
    mode,
    status
FROM interviews;
```

### Interview outcomes

```sql
SELECT 
    application_id,
    outcome,
    remark
FROM interviews;
```

# 🔟 Mentor Feedback Queries

Evaluate mentor effectiveness.

### Mentor ratings

```sql
SELECT 
    mentor_id,
    AVG(rating) AS avg_rating
FROM mentor_feedbacks
GROUP BY mentor_id;
```


# 1️⃣1️⃣ Notification Queries

Platform communication.

### Notifications sent to users

```sql
SELECT 
    user_id,
    message,
    created_at
FROM notifications;
```

# 1️⃣2️⃣ Skill Framework Queries

Technology learning structure.

### Frameworks and related concepts

```sql
SELECT 
    f.name AS framework,
    c.name AS concept
FROM framework_concepts fc
JOIN frameworks f ON fc.framework_id = f.id
JOIN concepts c ON fc.concept_id = c.id;
```


# ⭐ Most Important Dashboard Queries

These are **critical business KPIs**.

### Total students

```sql
SELECT COUNT(*) FROM users;
```

### Total mentors

```sql
SELECT COUNT(DISTINCT mentor_id) FROM mentor_mentees;
```

### Total assessments completed

```sql
SELECT COUNT(*) 
FROM assessments
WHERE status='Completed';
```

### Placement success rate

```sql
SELECT 
COUNT(DISTINCT student_id) AS placed_students
FROM job_applications
WHERE status = 1;
```


# Mentor Insight

Your schema supports **three major capabilities**:

1️⃣ **Skill Assessment Engine**

* MCQ
* Hands-on
* Oral

2️⃣ **Mentorship Platform**

* Mentor sessions
* Feedback
* Learning paths

3️⃣ **Talent Placement Platform**

* Job applications
* Interviews
* Alumni tracking

## **TFL Assessment is actually a full Talent Development Platform**, not just an exam system.

 
 