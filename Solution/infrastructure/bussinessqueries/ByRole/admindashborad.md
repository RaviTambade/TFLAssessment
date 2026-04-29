# Admin Dashboard Queries

For an **Admin Dashboard** in the TFL Assessment platform, the goal is to answer important **business questions** like:

* How many students are active?
* How many assessments are completed?
* Which mentors are active?
* Which companies are hiring?
* Student performance trends.

Below are **real-world Admin Dashboard SQL queries** based on your schema. These are the types of queries typically used in **analytics dashboards, reports, and monitoring panels**. 
 

## 1️⃣ Total Platform Users

```sql
SELECT COUNT(*) AS total_users
FROM users;
```

## 2️⃣ Total Students

```sql
SELECT COUNT(*) AS total_students
FROM users
WHERE role = 'STUDENT';
```

## 3️⃣ Total Mentors

```sql
SELECT COUNT(*) AS total_mentors
FROM users
WHERE role = 'MENTOR';
```

## 4️⃣ Total Companies Registered

```sql
SELECT COUNT(*) AS total_companies
FROM companies;
```

## 5️⃣ Total Learning Paths Created

```sql
SELECT COUNT(*) AS total_learning_paths
FROM learning_paths;
```

##6️⃣ Students Assigned to Mentors

```sql
SELECT 
    u.id AS mentor_id,
    COUNT(mm.mentee_id) AS total_mentees
FROM mentor_mentees mm
JOIN users u ON u.id = mm.mentor_id
GROUP BY u.id;
```

## 7️⃣ Assessments Status Summary

```sql
SELECT 
    status,
    COUNT(*) AS total
FROM assessments
GROUP BY status;
```

Result Example:

| status    | total |
| --------- | ----- |
| Assigned  | 15    |
| Pending   | 40    |
| Completed | 25    |

## 8️⃣ Assessments Scheduled Today

```sql
SELECT COUNT(*) AS today_assessments
FROM assessments
WHERE DATE(scheduled_at) = CURDATE();
```

## 9️⃣ Students With Highest Scores

```sql
SELECT 
    student_id,
    overall_score,
    average_percentage
FROM learning_path_progress
ORDER BY overall_score DESC
LIMIT 10;
```

## 🔟 Students Performance Distribution

```sql
SELECT 
    performance_level_id,
    COUNT(*) AS total_students
FROM learning_path_progress
GROUP BY performance_level_id;
```

## 1️⃣1️⃣ Hands-On Submissions Count

```sql
SELECT COUNT(*) AS total_submissions
FROM hands_on_submissions;
```

## 1️⃣2️⃣ Hands-On Results Average Score

```sql
SELECT 
    AVG(score) AS average_score
FROM hands_on_results;
```

## 1️⃣3️⃣ Mentor Feedback Average Rating

```sql
SELECT 
    mentor_id,
    AVG(rating) AS avg_rating
FROM mentor_feedbacks
GROUP BY mentor_id;
```


## 1️⃣4️⃣ Upcoming Mentor Appointments

```sql
SELECT 
    mentor_id,
    student_id,
    appointment_date,
    start_time
FROM mentor_appointments
WHERE appointment_date >= CURDATE()
AND status = 'SCHEDULED';
```

## 1️⃣5️⃣ Jobs Posted by Companies

```sql
SELECT 
    c.company_name,
    COUNT(jd.job_id) AS total_jobs
FROM companies c
LEFT JOIN job_descriptions jd
ON c.id = jd.employer_id
GROUP BY c.company_name;
```

## 1️⃣6️⃣ Job Applications Per Job

```sql
SELECT 
    jd.title,
    COUNT(ja.id) AS total_applications
FROM job_descriptions jd
LEFT JOIN job_applications ja
ON jd.job_id = ja.job_id
GROUP BY jd.title;
```

## 1️⃣7️⃣ Interviews Scheduled

```sql
SELECT COUNT(*) AS total_interviews
FROM interviews;
```


## 1️⃣8️⃣ Interviews Outcome Summary

```sql
SELECT 
    outcome,
    COUNT(*) AS total
FROM interviews
GROUP BY outcome;
```

## 1️⃣9️⃣ Most Used Learning Resources

```sql
SELECT 
    type,
    COUNT(*) AS total_resources
FROM learning_resources
GROUP BY type;
```

## 2️⃣0️⃣ Notifications Sent Today

```sql
SELECT COUNT(*) AS notifications_today
FROM notifications
WHERE DATE(created_at) = CURDATE();
```

## Top Performing Students

```sql
SELECT 
    pi.full_name,
    lpp.overall_score
FROM learning_path_progress lpp
JOIN personal_informations pi 
ON lpp.student_id = pi.user_id
ORDER BY lpp.overall_score DESC
LIMIT 5;
```

## Students Without Assessments

```sql
SELECT u.id
FROM users u
LEFT JOIN assessments a 
ON u.id = a.student_id
WHERE a.student_id IS NULL;
```

## Most Active Mentors

```sql
SELECT 
    mentor_id,
    COUNT(*) AS mentee_count
FROM mentor_mentees
GROUP BY mentor_id
ORDER BY mentee_count DESC;
```

## Students With Pending Assessments

```sql
SELECT 
    student_id,
    COUNT(*) AS pending_tests
FROM assessments
WHERE status = 'Pending'
GROUP BY student_id;
```

## Daily Assessment Activity

```sql
SELECT 
    DATE(assigned_at) AS date,
    COUNT(*) AS assessments_assigned
FROM assessments
GROUP BY DATE(assigned_at);
```


## 📊 Real Admin Dashboard Widgets

These queries power dashboard cards like:

| Dashboard Widget        | Query                  |
| ----------------------- | ---------------------- |
| Total Students          | users table            |
| Total Assessments       | assessments            |
| Top Students            | learning_path_progress |
| Mentor Ratings          | mentor_feedbacks       |
| Job Applications        | job_applications       |
| Upcoming Interviews     | interviews             |
| Learning Resource Usage | learning_resources     |

  