# Mentor Dashboard

For a **Mentor Dashboard** in the TFL Assessment platform, the focus is different from Admin.
A mentor mainly needs visibility into **their mentees, learning progress, assessments, and mentoring activities**.

Think of the mentor dashboard answering questions like:

* How many mentees are assigned to me?
* What is the progress of my mentees?
* Which students need attention?
* Which assessments are pending?
* When are my next mentoring sessions?

Below are **real production-style SQL queries used by a Mentor Dashboard**. 

 

## 1️⃣ Total Mentees Assigned to Mentor

```sql
SELECT COUNT(*) AS total_mentees
FROM mentor_mentees
WHERE mentor_id = :mentor_id;
```

---

##  2️⃣ List of All Mentees With Basic Info

```sql
SELECT 
    u.id AS student_id,
    pi.full_name,
    pi.email,
    ai.stream_name,
    ai.specialization
FROM mentor_mentees mm
JOIN users u ON u.id = mm.mentee_id
LEFT JOIN personal_informations pi ON pi.user_id = u.id
LEFT JOIN academic_informations ai ON ai.user_id = u.id
WHERE mm.mentor_id = :mentor_id;
```

---

##  3️⃣ Learning Progress of Mentees

```sql
SELECT 
    lpp.student_id,
    pi.full_name,
    lpp.overall_score,
    lpp.average_percentage,
    lpp.improvement_rate
FROM learning_path_progress lpp
JOIN mentor_mentees mm 
ON mm.mentee_id = lpp.student_id
JOIN personal_informations pi 
ON pi.user_id = lpp.student_id
WHERE mm.mentor_id = :mentor_id;
```

---

##  4️⃣ Mentees With Low Performance

```sql
SELECT 
    pi.full_name,
    lpp.overall_score,
    lpp.performance_level_id
FROM learning_path_progress lpp
JOIN mentor_mentees mm 
ON mm.mentee_id = lpp.student_id
JOIN personal_informations pi 
ON pi.user_id = lpp.student_id
WHERE mm.mentor_id = :mentor_id
AND lpp.overall_score < 50;
```

👉 Helps mentors **identify struggling students**

---

##  5️⃣ Upcoming Mentor Appointments

```sql
SELECT 
    pi.full_name,
    ma.appointment_date,
    ma.start_time,
    ma.agenda
FROM mentor_appointments ma
JOIN personal_informations pi 
ON pi.user_id = ma.student_id
WHERE ma.mentor_id = :mentor_id
AND ma.appointment_date >= CURDATE()
AND ma.status = 'SCHEDULED';
```

---

##  6️⃣ Completed Mentor Sessions

```sql
SELECT 
    pi.full_name,
    ma.appointment_date,
    ma.start_time
FROM mentor_appointments ma
JOIN personal_informations pi 
ON pi.user_id = ma.student_id
WHERE ma.mentor_id = :mentor_id
AND ma.status = 'COMPLETED';
```

---

##  7️⃣ Pending Assessments of Mentees

```sql
SELECT 
    pi.full_name,
    a.test_id,
    a.scheduled_at,
    a.status
FROM assessments a
JOIN mentor_mentees mm 
ON mm.mentee_id = a.student_id
JOIN personal_informations pi 
ON pi.user_id = a.student_id
WHERE mm.mentor_id = :mentor_id
AND a.status = 'Pending';
```

---

##  8️⃣ Completed Assessments

```sql
SELECT 
    pi.full_name,
    a.test_id,
    a.assigned_at,
    a.status
FROM assessments a
JOIN mentor_mentees mm 
ON mm.mentee_id = a.student_id
JOIN personal_informations pi 
ON pi.user_id = a.student_id
WHERE mm.mentor_id = :mentor_id
AND a.status = 'Completed';
```

---

##  9️⃣ Hands-on Submissions From Mentees

```sql
SELECT 
    pi.full_name,
    hs.github_link,
    hs.submitted_at
FROM hands_on_submissions hs
JOIN mentor_mentees mm 
ON mm.mentee_id = hs.user_id
JOIN personal_informations pi 
ON pi.user_id = hs.user_id
WHERE mm.mentor_id = :mentor_id;
```

---

##  🔟 Hands-on Evaluation Pending

```sql
SELECT 
    pi.full_name,
    ho.id AS hands_on_id,
    ho.created_at
FROM hands_on ho
JOIN mentor_mentees mm 
ON mm.mentee_id = ho.user_id
JOIN personal_informations pi 
ON pi.user_id = ho.user_id
WHERE mm.mentor_id = :mentor_id;
```

---

##  1️⃣1️⃣ Oral Assessments Scheduled

```sql
SELECT 
    pi.full_name,
    oa.time_schedule_at,
    oa.status
FROM oral_assessments oa
JOIN mentor_mentees mm 
ON mm.mentee_id = oa.student_id
JOIN personal_informations pi 
ON pi.user_id = oa.student_id
WHERE mm.mentor_id = :mentor_id;
```

---

##  1️⃣2️⃣ Mentee Feedback Given to Mentor

```sql
SELECT 
    pi.full_name,
    mf.rating,
    mf.review_text,
    mf.created_at
FROM mentor_feedbacks mf
JOIN personal_informations pi 
ON pi.user_id = mf.student_id
WHERE mf.mentor_id = :mentor_id;
```

---

##  1️⃣3️⃣ Average Rating of Mentor

```sql
SELECT 
    mentor_id,
    AVG(rating) AS average_rating
FROM mentor_feedbacks
WHERE mentor_id = :mentor_id
GROUP BY mentor_id;
```

---

##  1️⃣4️⃣ Students Without Progress Data

```sql
SELECT 
    pi.full_name
FROM mentor_mentees mm
JOIN personal_informations pi 
ON pi.user_id = mm.mentee_id
LEFT JOIN learning_path_progress lpp
ON lpp.student_id = mm.mentee_id
WHERE mm.mentor_id = :mentor_id
AND lpp.student_id IS NULL;
```

👉 Shows students **not yet evaluated**

---

##  1️⃣5️⃣ Student Performance Snapshot History

```sql
SELECT 
    ps.student_id,
    ps.snapshot_date,
    ps.performance_json
FROM performance_snapshots ps
JOIN mentor_mentees mm 
ON mm.mentee_id = ps.student_id
WHERE mm.mentor_id = :mentor_id
ORDER BY ps.snapshot_date DESC;
```

---

##  📊 Typical Mentor Dashboard Widgets

These queries power mentor dashboard components:

| Dashboard Widget     | Query                  |
| -------------------- | ---------------------- |
| My Mentees           | mentor_mentees         |
| Upcoming Sessions    | mentor_appointments    |
| Student Progress     | learning_path_progress |
| Pending Assessments  | assessments            |
| Hands-on Submissions | hands_on_submissions   |
| Oral Assessments     | oral_assessments       |
| Mentor Rating        | mentor_feedbacks       |

---

##  ⭐ Advanced Mentor Analytics (Real SaaS Feature)

### Students needing immediate attention

```sql
SELECT 
    pi.full_name,
    lpp.overall_score,
    COUNT(a.id) AS pending_assessments
FROM learning_path_progress lpp
JOIN mentor_mentees mm ON mm.mentee_id = lpp.student_id
JOIN personal_informations pi ON pi.user_id = lpp.student_id
LEFT JOIN assessments a 
ON a.student_id = lpp.student_id 
AND a.status = 'Pending'
WHERE mm.mentor_id = :mentor_id
AND lpp.overall_score < 50
GROUP BY pi.full_name, lpp.overall_score;
```

