## SQL statements with explanations

### `evaluationcontentmanagement.repository.impl.QuestionsRepositoryImpl`

- `SELECT * FROM questions WHERE question_id = ?`
  - Retrieves a single question row by its primary key `question_id`.

- `SELECT * FROM questions`
  - Returns all questions in the `questions` table.

- `SELECT * FROM questions WHERE difficulty_level = ?`
  - Returns questions filtered by the given difficulty level.

- `SELECT question_id, question_type, description FROM questions WHERE question_type = ? ORDER BY question_id`
  - Retrieves question ID, type, and description for questions of a specific type, ordered by ID.

- `INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())`
  - Inserts a new question record with draft status and current timestamp.

- `INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)`
  - Inserts multiple-choice answer options for a question, linked by `question_id`.

- `SELECT * FROM questions WHERE status='DRAFT'`
  - Fetches all questions whose status is currently `DRAFT`.

- `UPDATE questions SET status='APPROVED' WHERE question_id=?`
  - Marks a specific question as approved.

- `UPDATE questions SET status='INACTIVE' WHERE question_id=?`
  - Marks a specific question as inactive/rejected.

- `UPDATE questions SET status='APPROVED' WHERE status='DRAFT'`
  - Approves all draft questions in bulk.

- `UPDATE questions SET status='INACTIVE' WHERE status='DRAFT'`
  - Rejects/inactivates all draft questions in bulk.

- `SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Gets draft questions created within the last 2 days, newest first.

- `SELECT question_id, description FROM questions WHERE status='DRAFT'`
  - Returns only ID and description for draft questions.

- `SELECT question_id, description FROM questions WHERE created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Returns recent questions created in the last 2 days with ID and description, newest first.

- `SELECT * FROM mcq_options WHERE question_id=?`
  - Loads the multiple-choice options for a specific question.

- `UPDATE questions SET description=?, question_type=?, difficulty_level=? WHERE question_id=?`
  - Updates the text, type, and difficulty of a specific question.

- `UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?`
  - Updates the MCQ option values for a specific question.

---

### `skilltaxonomy.repository.impl.ConceptsRepository`

- `SELECT  DISTINCT c.id, c.name, c.description FROM concepts c`
  - Returns all distinct concepts with their ID, name, and description.

- `SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r`
  - Returns all distinct runtimes with their ID and name.

- `SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?`
  - Returns languages associated with a specific runtime.

- `SELECT DISTINCT l.id, l.layers from layers l `
  - Returns all distinct layer records.

- `SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?`
  - Returns frameworks filtered by a specific language and layer.

- `SELECT DISTINCT c.id, c.name, c.description from concepts c JOIN framework_concepts fc ON fc.concept_id=c.id JOIN frameworks f ON f.id=fc.framework_id WHERE f.name=?`
  - Fetches concepts linked to a specific framework name through the join table.

- `SELECT * FROM concepts WHERE id = ?`
  - Retrieves a concept row by its ID.

- `SELECT q.question_id, q.description, q.question_type FROM questions q JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id WHERE fc.concept_id = ?;`
  - Returns questions associated with a given concept via framework-concept relationships.

---

### `skilltaxonomy.repository.impl.RuntimesRepositoryImpl`

- `SELECT runtime_name FROM runtimes`
  - Returns names of all runtimes available in the runtimes table.

- `insert into runtimes (runtime_name) values(?)`
  - Adds a new runtime record with the provided name.


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

 
 