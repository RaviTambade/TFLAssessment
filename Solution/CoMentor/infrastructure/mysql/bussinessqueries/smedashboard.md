In the **TFL Assessment platform**, an **SME (Subject Matter Expert)** mainly evaluates:

* Oral assessments
* Hands-on submissions
* Technical answers
* Student skill depth

So the **SME Dashboard** focuses on:

* Evaluation tasks
* Pending reviews
* Scheduled oral assessments
* Student answers
* Evaluation performance

Think of the SME dashboard answering questions like:

* What evaluations are pending for me?
* Which oral assessments are scheduled today?
* Which answers need rating?
* How many students did I evaluate?
* What is my evaluation workload?

Below are **real-world SQL queries used by an SME Dashboard**. 📊

---

# 1️⃣ SME Profile Overview

```sql
SELECT 
    id,
    full_name,
    email,
    expertise_area
FROM users
WHERE id = :sme_id;
```

---

# 2️⃣ Total Evaluations Assigned to SME

```sql
SELECT COUNT(*) AS total_assessments
FROM oral_assessments
WHERE sme_id = :sme_id;
```

---

# 3️⃣ Pending Oral Assessments

```sql
SELECT 
    pi.full_name AS student_name,
    oa.time_schedule_at,
    oa.status
FROM oral_assessments oa
JOIN personal_informations pi 
ON pi.user_id = oa.student_id
WHERE oa.sme_id = :sme_id
AND oa.status = 'Scheduled';
```

---

# 4️⃣ Completed Oral Assessments

```sql
SELECT 
    pi.full_name AS student_name,
    oa.time_schedule_at,
    oa.status
FROM oral_assessments oa
JOIN personal_informations pi 
ON pi.user_id = oa.student_id
WHERE oa.sme_id = :sme_id
AND oa.status = 'Completed';
```

---

# 5️⃣ Oral Questions Answered by Students

```sql
SELECT 
    oqa.student_id,
    oqa.questions,
    oqa.answers,
    oqa.rating
FROM oral_question_answers oqa
WHERE oqa.sme_id = :sme_id;
```

---

# 6️⃣ Answers Pending Evaluation

```sql
SELECT 
    pi.full_name,
    oqa.questions,
    oqa.answers
FROM oral_question_answers oqa
JOIN personal_informations pi 
ON pi.user_id = oqa.student_id
WHERE oqa.sme_id = :sme_id
AND oqa.rating IS NULL;
```

👉 Helps SME know **which answers still need rating**

---

# 7️⃣ Hands-on Submissions to Evaluate

```sql
SELECT 
    pi.full_name,
    hs.github_link,
    hs.submitted_at
FROM hands_on_submissions hs
JOIN personal_informations pi 
ON pi.user_id = hs.user_id
WHERE hs.evaluated_by = :sme_id;
```

---

# 8️⃣ Hands-on Results Evaluated by SME

```sql
SELECT 
    hr.user_id,
    hr.score,
    hr.submitted_at
FROM hands_on_results hr
WHERE hr.evaluated_by = :sme_id;
```

---

# 9️⃣ Today's Oral Assessment Schedule

```sql
SELECT 
    pi.full_name,
    oa.time_schedule_at
FROM oral_assessments oa
JOIN personal_informations pi 
ON pi.user_id = oa.student_id
WHERE oa.sme_id = :sme_id
AND DATE(oa.time_schedule_at) = CURDATE();
```

---

# 🔟 Student Skill Evaluation Summary

```sql
SELECT 
    student_id,
    AVG(rating) AS avg_rating
FROM oral_question_answers
WHERE sme_id = :sme_id
GROUP BY student_id;
```

---

# 1️⃣1️⃣ SME Evaluation Workload

```sql
SELECT 
    DATE(time_schedule_at) AS evaluation_date,
    COUNT(*) AS total_evaluations
FROM oral_assessments
WHERE sme_id = :sme_id
GROUP BY DATE(time_schedule_at);
```

---

# 1️⃣2️⃣ Top Performing Students Evaluated by SME

```sql
SELECT 
    pi.full_name,
    AVG(oqa.rating) AS avg_rating
FROM oral_question_answers oqa
JOIN personal_informations pi 
ON pi.user_id = oqa.student_id
WHERE oqa.sme_id = :sme_id
GROUP BY pi.full_name
ORDER BY avg_rating DESC
LIMIT 10;
```

---

# 1️⃣3️⃣ Students With Low Technical Understanding

```sql
SELECT 
    pi.full_name,
    AVG(oqa.rating) AS avg_rating
FROM oral_question_answers oqa
JOIN personal_informations pi 
ON pi.user_id = oqa.student_id
WHERE oqa.sme_id = :sme_id
GROUP BY pi.full_name
HAVING avg_rating < 2;
```

---

# 1️⃣4️⃣ Recently Evaluated Students

```sql
SELECT 
    pi.full_name,
    oqa.rating,
    oqa.remark,
    oqa.created_at
FROM oral_question_answers oqa
JOIN personal_informations pi 
ON pi.user_id = oqa.student_id
WHERE oqa.sme_id = :sme_id
ORDER BY oqa.created_at DESC
LIMIT 10;
```

---

# 📊 Typical SME Dashboard Widgets

These queries power SME dashboard panels:

| Dashboard Widget      | Query Source          |
| --------------------- | --------------------- |
| Total Evaluations     | oral_assessments      |
| Today's Evaluations   | oral_assessments      |
| Pending Reviews       | oral_question_answers |
| Hands-on Evaluations  | hands_on_results      |
| Student Skill Ratings | oral_question_answers |
| Evaluation Workload   | oral_assessments      |

---

# ⭐ Advanced SME Analytics (Real EdTech Feature)

### Skill Gap Detection

```sql
SELECT 
    oqa.questions,
    AVG(oqa.rating) AS avg_rating
FROM oral_question_answers oqa
WHERE oqa.sme_id = :sme_id
GROUP BY oqa.questions
ORDER BY avg_rating ASC;
```

👉 Helps detect **which concepts students struggle with**

Example insight:

| Concept       | Avg Rating |
| ------------- | ---------- |
| REST API      | 2.1        |
| SQL Joins     | 3.5        |
| Microservices | 1.9        |

This is extremely useful for **curriculum improvement**.

---

💡 If we combine all dashboards (Admin + Mentor + SME + Student), your **TFL Assessment platform becomes a full analytics-driven skill ecosystem**.

If you want, I can also show you something **very powerful for your system**:

**40 Advanced Learning Analytics Queries** such as:

* Skill gap detection
* Student capability clustering
* Mentor effectiveness analytics
* SME difficulty index
* Question difficulty scoring
* AI-ready learning insights

These are the **queries used in real EdTech intelligence systems**. 🚀
