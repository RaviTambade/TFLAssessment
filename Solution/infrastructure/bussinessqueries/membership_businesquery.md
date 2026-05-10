# 🏗 Business Query Playbook

# 1️⃣ Why This Playbook Exists

In real companies:

* We don’t write SQL for marks.
* We write SQL to solve business problems.
* Every query must answer a business question.

This playbook converts your database schema into:

* Admin features
* Security controls
* Mentor allocation logic
* Resource planning intelligence
* Platform analytics


# 2️⃣ Core Business Areas Covered

| Module              | Purpose                   |
| ------------------- | ------------------------- |
| User Management     | Account lifecycle control |
| Role Management     | RBAC enforcement          |
| Mentor Management   | Experience & profiling    |
| SME & Subjects      | Expertise mapping         |
| Security & Sessions | JWT & login control       |
| Data Integrity      | System validation         |


# 3️⃣ USER MANAGEMENT QUERIES


## 📌 3.1 Show All Active Users

### 🎯 Business Question:

> How many users are currently active on the platform?

```sql
SELECT user_id, first_name, last_name, email, status, created_at
FROM users
WHERE status = 'ACTIVE'
ORDER BY created_at DESC;
```

### 💼 Used In:

* Admin Dashboard
* Platform monitoring
* Monthly growth report



## 📌 3.2 User Status Distribution

### 🎯 Business Question:

> What percentage of users are blocked or inactive?

```sql
SELECT status, COUNT(*) AS total_users
FROM users
GROUP BY status;
```

### 💼 Used In:

* Health metrics
* Compliance monitoring
* Misuse detection



## 📌 3.3 Recently Joined Users (Growth Tracking)

```sql
SELECT *
FROM users
WHERE created_at >= NOW() - INTERVAL 7 DAY;
```

### 💼 Used In:

* Weekly growth analytics
* Marketing performance tracking


# 4️⃣ ROLE MANAGEMENT (RBAC)

---

## 📌 4.1 Get Roles of a User (JWT Claim Builder)

### 🎯 Business Question:

> What permissions should this user get?

```sql
SELECT r.role_name
FROM user_roles ur
JOIN roles r ON ur.role_id = r.role_id
WHERE ur.user_id = 1;
```

### 💼 Used In:

* Token generation
* Authorization middleware


## 📌 4.2 Get All Mentors

```sql
SELECT u.user_id, u.first_name, u.last_name, u.email
FROM users u
JOIN user_roles ur ON u.user_id = ur.user_id
JOIN roles r ON ur.role_id = r.role_id
WHERE r.role_name = 'MENTOR';
```

### 💼 Used In:

* Mentor listing page
* Project assignment module

## 📌 4.3 Count Users Per Role

```sql
SELECT r.role_name, COUNT(ur.user_id) AS total_users
FROM roles r
LEFT JOIN user_roles ur ON r.role_id = ur.role_id
GROUP BY r.role_name;
```

### 💼 Used In:

* Capacity planning
* Hiring decisions


# 5️⃣ MENTOR MANAGEMENT

## 📌 5.1 Complete Mentor Profile View

```sql
SELECT u.user_id, u.first_name, u.last_name, u.email,
       m.bio, m.experience_years
FROM mentor_profiles m
JOIN users u ON m.user_id = u.user_id
WHERE u.status = 'ACTIVE';
```

### 💼 Used In:

* Mentor profile page
* Student mentor selection UI


## 📌 5.2 Senior Mentor Filter

```sql
SELECT u.first_name, u.last_name, m.experience_years
FROM mentor_profiles m
JOIN users u ON m.user_id = u.user_id
WHERE m.experience_years > 5;
```

### 💼 Used In:

* Advanced project allocation
* Mock interview panel creation



## 📌 5.3 Top 5 Experienced Mentors

```sql
SELECT u.first_name, u.last_name, m.experience_years
FROM mentor_profiles m
JOIN users u ON m.user_id = u.user_id
ORDER BY m.experience_years DESC
LIMIT 5;
```

### 💼 Used In:

* Featured mentors section
* Landing page highlights



# 6️⃣ SME & SUBJECT MANAGEMENT


## 📌 6.1 SMEs with Subject Details

```sql
SELECT u.first_name, u.last_name,
       s.name AS subject_name,
       s.status
FROM sme_profiles sp
JOIN users u ON sp.user_id = u.user_id
JOIN subjects s ON sp.subject_id = s.subject_id
WHERE s.status = 'ACTIVE';
```

### 💼 Used In:

* Subject expertise mapping
* Interview panel assignment


## 📌 6.2 SMEs for Specific Subject

```sql
SELECT u.first_name, u.last_name
FROM sme_profiles sp
JOIN users u ON sp.user_id = u.user_id
JOIN subjects s ON sp.subject_id = s.subject_id
WHERE s.name = 'Java';
```

### 💼 Used In:

* Mock interview scheduling
* Subject-wise filtering


## 📌 6.3 Subjects Without SME

```sql
SELECT s.name
FROM subjects s
LEFT JOIN sme_profiles sp ON s.subject_id = sp.subject_id
WHERE sp.subject_id IS NULL;
```

### 💼 Used In:

* Hiring decision support
* Resource gap analysis



# 7️⃣ SECURITY & SESSION MANAGEMENT

## 📌 7.1 Active Sessions Monitoring

```sql
SELECT *
FROM user_sessions
WHERE expiry_time > NOW();
```

### 💼 Used In:

* Security dashboard
* Session monitoring


## 📌 7.2 Multiple Active Sessions Per User

```sql
SELECT u.email, COUNT(us.session_id) AS active_sessions
FROM users u
JOIN user_sessions us ON u.user_id = us.user_id
WHERE us.expiry_time > NOW()
GROUP BY u.email;
```

### 💼 Used In:

* Prevent account misuse
* Device control enforcement


## 📌 7.3 Logout From All Devices

```sql
DELETE FROM user_sessions
WHERE user_id = 1;
```

### 💼 Used In:

* Password reset flow
* Security breach response


# 8️⃣ DATA INTEGRITY CHECKS



## 📌 8.1 Users Without Roles

```sql
SELECT u.user_id, u.email
FROM users u
LEFT JOIN user_roles ur ON u.user_id = ur.user_id
WHERE ur.user_id IS NULL;
```

### 💼 Used In:

* Admin data cleanup
* Integrity audits


## 📌 8.2 Users With Multiple Roles

```sql
SELECT u.user_id, u.email, COUNT(ur.role_id) AS role_count
FROM users u
JOIN user_roles ur ON u.user_id = ur.user_id
GROUP BY u.user_id
HAVING COUNT(ur.role_id) > 1;
```

### 💼 Used In:

* Hybrid access control validation
* Privilege audit


# 9️⃣ How Students Should Use This Playbook

Students must:

1. Understand the business question first.
2. Draw table relationship diagram.
3. Write query from scratch (without copy-paste).
4. Explain where it will be used in UI/API.
5. Convert query into:

   * Stored Procedure
   * REST API endpoint
   * Repository method (EF Core / Hibernate)



# 🔟 Advanced Mentor Assignment Exercise (For Students)

Ask students to design:

* “Assign best mentor based on:

  * Subject
  * Experience
  * Active status
  * Session availability”

This forces:

* Multi-table join thinking
* Business logic reasoning
* Production mindset



> In real companies, nobody asks:
> “Write a SELECT query.”

They ask:

> “How many active mentors do we have in Java with 5+ years experience?”

That is the difference between:

* SQL learner
* Solution Developer

