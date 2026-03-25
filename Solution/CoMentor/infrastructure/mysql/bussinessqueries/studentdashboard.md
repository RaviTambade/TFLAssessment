# Student Dashboard Queries

In **TFL Assessment platform**, the **Student Dashboard** is very important because it shows a student's **learning journey, assessments, mentor guidance, and job readiness**.

A student dashboard usually answers these real questions:

* What assessments are assigned to me?
* Which ones are pending or completed?
* What is my overall performance?
* What is my learning progress?
* What hands-on tasks should I submit?
* What mentor meetings are scheduled?
* What jobs can I apply for?

Below are **real dashboard queries used by a Student in production learning platforms**. 

 

## 1️⃣ Student Profile Information

```sql
SELECT 
    pi.full_name,
    pi.email,
    pi.gender,
    ai.stream_name,
    ai.specialization,
    ai.college_name
FROM personal_informations pi
JOIN academic_informations ai 
ON ai.user_id = pi.user_id
WHERE pi.user_id = :student_id;
```

---

## 2️⃣ Total Assessments Assigned

```sql
SELECT COUNT(*) AS total_assessments
FROM assessments
WHERE student_id = :student_id;
```

---

## 3️⃣ Pending Assessments

```sql
SELECT 
    a.id,
    a.scheduled_at,
    a.status
FROM assessments a
WHERE a.student_id = :student_id
AND a.status = 'Pending';
```

---

## 4️⃣ Completed Assessments

```sql
SELECT 
    a.id,
    a.assigned_at,
    a.scheduled_at,
    a.status
FROM assessments a
WHERE a.student_id = :student_id
AND a.status = 'Completed';
```

---

## 5️⃣ Upcoming Assessments

```sql
SELECT 
    id,
    scheduled_at
FROM assessments
WHERE student_id = :student_id
AND scheduled_at >= NOW()
ORDER BY scheduled_at ASC;
```

---

## 6️⃣ Hands-on Tasks Assigned

```sql
SELECT 
    ho.id,
    ho.description,
    ho.duration,
    ho.created_at
FROM hands_on ho
WHERE ho.user_id = :student_id;
```

---

## 7️⃣ Hands-on Submissions

```sql
SELECT 
    hs.github_link,
    hs.submitted_at
FROM hands_on_submissions hs
WHERE hs.user_id = :student_id;
```

---

## 8️⃣ Hands-on Scores

```sql
SELECT 
    hr.score,
    hr.submitted_at
FROM hands_on_results hr
WHERE hr.user_id = :student_id;
```

---

## 9️⃣ Student Learning Path Progress

```sql
SELECT 
    overall_score,
    average_percentage,
    improvement_rate,
    min_score,
    max_score
FROM learning_path_progress
WHERE student_id = :student_id;
```

This powers **progress charts in dashboard**.

---

## 🔟 Mentor Assigned to Student

```sql
SELECT 
    pi.full_name AS mentor_name
FROM mentor_mentees mm
JOIN personal_informations pi
ON pi.user_id = mm.mentor_id
WHERE mm.mentee_id = :student_id;
```

---

## 1️⃣1️⃣ Upcoming Mentor Appointments

```sql
SELECT 
    appointment_date,
    start_time,
    meeting_link,
    agenda
FROM mentor_appointments
WHERE student_id = :student_id
AND status = 'SCHEDULED'
ORDER BY appointment_date;
```

---

## 1️⃣2️⃣ Notifications for Student

```sql
SELECT 
    message,
    created_at
FROM notifications
WHERE user_id = :student_id
ORDER BY created_at DESC
LIMIT 10;
```

---

## 1️⃣3️⃣ Oral Assessments Scheduled

```sql
SELECT 
    time_schedule_at,
    status
FROM oral_assessments
WHERE student_id = :student_id;
```

---

## 1️⃣4️⃣ Student Job Applications

```sql
SELECT 
    jd.title,
    jd.location,
    ja.status,
    ja.applied_at
FROM job_applications ja
JOIN job_descriptions jd 
ON jd.job_id = ja.job_id
WHERE ja.student_id = :student_id;
```

---

## 1️⃣5️⃣ Available Jobs

```sql
SELECT 
    jd.job_id,
    jd.title,
    jd.location,
    c.company_name
FROM job_descriptions jd
JOIN companies c 
ON c.id = jd.employer_id;
```

---

## 1️⃣6️⃣ Student Performance Snapshot

```sql
SELECT 
    snapshot_date,
    performance_json
FROM performance_snapshots
WHERE student_id = :student_id
ORDER BY snapshot_date DESC;
```

Used for **performance analytics graphs**.

---

## 1️⃣7️⃣ Student Concept Learning Progress

```sql
SELECT 
    c.name AS concept_name
FROM concepts c
JOIN framework_concepts fc
ON fc.concept_id = c.id;
```

Used in **skill progress visualization**.

---

## 📊 Typical Student Dashboard Widgets

| Dashboard Widget  | Query                  |
| ----------------- | ---------------------- |
| Profile           | personal_informations  |
| Total Assessments | assessments            |
| Pending Tasks     | assessments            |
| Hands-on Tasks    | hands_on               |
| Mentor Meetings   | mentor_appointments    |
| Performance Score | learning_path_progress |
| Job Applications  | job_applications       |
| Notifications     | notifications          |

---

## ⭐ Powerful Analytics for Student Dashboard

### Skill Growth Trend

```sql
SELECT 
    snapshot_date,
    JSON_EXTRACT(performance_json, '$.score') AS score
FROM performance_snapshots
WHERE student_id = :student_id
ORDER BY snapshot_date;
```

This enables **learning progress charts**.

---

## 🎯 When All Dashboards Work Together

Your **TFL system becomes a full skill intelligence platform**:

| Role    | Dashboard Focus    |
| ------- | ------------------ |
| Admin   | Platform analytics |
| Mentor  | Student growth     |
| SME     | Skill evaluation   |
| Student | Learning progress  |

This is how **modern EdTech platforms like Coursera / Scaler / InterviewBit build their dashboards**.
 