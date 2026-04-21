-- login query


SELECT u.id
FROM users u
JOIN user_roles ur ON u.id = ur.user_id
JOIN roles r ON r.role_id = ur.role_id
WHERE u.contact = ?
  AND u.password = ?
  AND u.status = "ACTIVE"
  AND r.role_name = ?;



SELECT first_name, last_name
FROM personal_informations
WHERE user_id = ?
LIMIT 1;


 **Extracted SQL queries** from your `SessionRepository` 👇


### 📊 1. Total Logins in Last 24 Hours

```sql id="q1a2ws"
SELECT COUNT(*) AS totalLogins24h
FROM user_logs
WHERE login_time >= NOW() - INTERVAL 1 DAY;
```

👉 **Purpose:**

* Counts how many users logged in during the last 24 hours

---

### ⏱️ 2. Average Session Time (Last 20 Sessions)

```sql id="q2x9pl"
SELECT AVG(TIMESTAMPDIFF(SECOND, login_time, logout_time)) AS avgSessionTime
FROM (
  SELECT login_time, logout_time
  FROM user_logs
  WHERE logout_time IS NOT NULL
  ORDER BY login_time DESC
  LIMIT 20
) AS last20;
```

👉 **Purpose:**

* Calculates average session duration (in seconds)
* Uses only the **last 20 completed sessions**

---

### 🟢 3. Active Sessions Count

```sql id="q3m8rt"
SELECT COUNT(*) AS activeSessions
FROM user_logs
WHERE logout_time IS NULL;
```

👉 **Purpose:**

* Counts currently active sessions (users not logged out)

---

### 👥 4. Active Users Details

```sql id="q4z7nk"
SELECT 
  CONCAT(p.first_name, ' ', p.last_name) AS full_name,
  l.login_time,
  TIMESTAMPDIFF(SECOND, l.login_time, NOW()) AS active_seconds
FROM user_logs l
JOIN personal_informations p ON l.user_id = p.user_id
WHERE l.logout_time IS NULL;
```

👉 **Purpose:**

* Lists all active users with:

  * Full name
  * Login time
  * Duration of active session (in seconds)

---

### 💡 Quick Optimization Tips

* Add index:

```sql
CREATE INDEX idx_login_time ON user_logs(login_time);
CREATE INDEX idx_logout_time ON user_logs(logout_time);
```

* For faster joins:

```sql
CREATE INDEX idx_user_id ON personal_informations(user_id);
```



## **Extracted SQL queries** from your `userLogRepository` 👇

---

### 🔐 1. Log User Login

```sql id="l1k9sd"
INSERT INTO user_logs (user_id, login_time)
VALUES (?, NOW());
```

👉 **Parameter:**

* `?` → `userid`

👉 **Purpose:**

* Inserts a new record when a user logs in
* Stores current timestamp as `login_time`

---

### 🚪 2. Log User Logout

```sql id="l2p8we"
UPDATE user_logs
SET logout_time = NOW()
WHERE user_id = ?
  AND logout_time IS NULL;
```

👉 **Parameter:**

* `?` → `userid`

👉 **Purpose:**

* Updates the active session (where logout is still NULL)
* Marks logout time for the user

---

### ⚠️ Important Observation (Very Useful for You)

Your logout query:

```sql
WHERE user_id = ? AND logout_time IS NULL
```

👉 This will update **ALL active sessions** of that user (if multiple exist)

---

### ✅ Better Approach (Recommended)

If you want to log **only the latest session**, use:

```sql id="l3improved"
UPDATE user_logs
SET logout_time = NOW()
WHERE user_id = ?
  AND logout_time IS NULL
ORDER BY login_time DESC
LIMIT 1;
```

---

### 💡 Optional Improvement

Add session tracking:

* Add `session_id` column (UUID)
* Track login/logout more accurately (especially for multiple devices)

## **Extracted SQL queries** from your `userProfile.repository` 👇

---

### 👤 5. Get User Profile by ID

```sql
SELECT 
  u.id AS user_id,
  u.contact,
  u.status,
  p.first_name,
  p.last_name,
  p.gender,
  p.date_of_birth,
  p.email,
  a.enrollment_year,
  a.passing_year,
  a.percentage,
  a.college_name,
  prof.skills
FROM users u
LEFT JOIN personal_informations p ON u.id = p.user_id
LEFT JOIN academic_informations a ON u.id = a.user_id
LEFT JOIN professional_informations prof ON u.id = prof.user_id
WHERE u.id = ?
```

👉 **Purpose:**

* Retrieves comprehensive user profile information including personal, academic, and professional details

👉 **Parameter:**

* `?` → `userId`

👉 **Returns:**

* Single user profile record or null if not found

 
 