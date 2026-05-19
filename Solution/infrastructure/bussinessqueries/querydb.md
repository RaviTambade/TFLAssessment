# SQL QUERIES USED IN WEB APIs #
## USERS ##
- ### getUserDetailsByID ###
  ` SELECT  u.id AS user_id, u.contact, u.status, p.first_name, p.last_name,
        p.gender, p.date_of_birth,  p.email, a.enrollment_year,
        a.passing_year, a.percentage, a.college_name, prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ? `
- ### getUserPersonalDetails ###
  ` SELECT p.first_name, p.last_name, p.gender, p.date_of_birth, p.email, p.address, p.pincode,u.contact
      FROM personal_informations p 
      join users u on u.id = p.user_id
      WHERE user_id = ? `
- ### getUserAcademicDetails ###
  ` SELECT enrollment_year, passing_year, percentage, college_name, stream_name, specialization
      FROM academic_informations
      WHERE user_id = ? `
- ### getUserProfessionalDetails ###
  ` SELECT company_name, job_title, employment_type, start_date, end_date, is_current_job, experience_years, location, skills
      FROM professional_informations
      WHERE user_id = ? `
- ### updateUserPersonalDetails ###
  ` UPDATE personal_informations SET ${fields} WHERE user_id = ? `
- ### updateUserProfessionalDetails ###
  ` UPDATE professional_informations SET ${fields} WHERE user_id = ? `
- ### updateUserAcademicDetails ###
  ` UPDATE academic_informations SET ${fields} WHERE user_id = ? `
- ### updateUserStatus ###
  ` UPDATE users SET status = ? WHERE id = ? `
- ### getAllUsers ###
  ` SELECT 
        p.user_id, 
        p.full_name, 
        u.created_at,
        u.status,
        r.role_name
    FROM personal_informations p
    LEFT JOIN user_roles ur ON p.user_id = ur.user_id
    LEFT JOIN roles r ON ur.role_id = r.role_id
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.user_id `

## USER ACTIVITY ##
- ### login ###
  ` INSERT INTO user_logs (user_id,login_time) VALUES(?,NOW() ) `
- ### logout ###
  ` UPDATE user_logs SET logout_time=now() WHERE user_id=? AND logout_time is null `
- ### getRecentLoginCount ###
  ` SELECT COUNT(*) AS totalLogins24h
      FROM user_logs
      WHERE login_time >= NOW() `
- ### getRecentAverageSessionTime ###
  ` SELECT AVG(TIMESTAMPDIFF(SECOND, login_time, logout_time)) AS avgSessionTime
      FROM (
        SELECT login_time, logout_time
        FROM user_logs
        WHERE logout_time IS NOT NULL
        ORDER BY login_time DESC
        LIMIT 50
      ) AS last50 `
- ### getActiveSessionsCount ###
  ` SELECT COUNT(*) AS activeSessions
      FROM user_logs
      WHERE logout_time IS NULL `
- ### getLiveUsers ###
  ` SELECT 
        CONCAT(p.first_name,' ', p.last_name) AS full_name,
        l.login_time,
        TIMESTAMPDIFF(SECOND, l.login_time, NOW()) AS active_seconds
      FROM user_logs l
      JOIN personal_informations p ON l.user_id = p.user_id
      WHERE l.logout_time IS NULL `
- ### getAllUserActivity ###
  ` SELECT
        u.id AS session_id,
        ul.user_id,
        CONCAT(p.first_name,' ', p.last_name) AS full_name,
        r.role_name AS role,
        ul.login_time,
        ul.logout_time,
        TIMESTAMPDIFF(MINUTE, ul.login_time, COALESCE(ul.logout_time, NOW())) AS session_duration_minutes 
      FROM user_logs ul
      LEFT JOIN users u ON ul.user_id = u.id
      LEFT JOIN personal_informations p ON ul.user_id = p.user_id
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      LEFT JOIN roles r ON ur.role_id = r.role_id `
## ROLES ##
- ### getAllRoles ###
 ` SELECT * from roles `
- ### insert ###
  ` INSERT INTO roles(role_name,description) VALUES(?,?) `
- ### update ###
  ` UPDATE roles SET role_name=?, description=? WHERE role_id=? `
- ### getUserRolesByUserId ###
  ` SELECT r.role_id, r.role_name FROM user_roles ur JOIN roles r ON ur.role_id = r.role_id WHERE ur.user_id = ? `
- ### unAssignRole ###
  ` DELETE FROM user_roles WHERE user_id = ? AND role_id = ? `
- ### unAssignRoles ###
  ` DELETE FROM user_roles WHERE user_id = ? AND role_id IN (?) `
- ### assignRole ###
  ` INSERT INTO user_roles (user_id, role_id, assigned_at)
    VALUES ${placeholders}
    ON DUPLICATE KEY UPDATE assigned_at = NOW() `
## AUTH ##
- ### validateUser ###
  ` SELECT u.id, p.first_name, p.last_name, r.role_name from users u
                  JOIN user_roles ur ON u.id= ur.user_id 
                  JOIN roles r ON r.role_id = ur.role_id
                  JOIN personal_informations p on p.user_id = u.id
                    WHERE u.contact=? AND u.password=? AND u.status="ACTIVE" AND r.role_name=? `
- ### register ###
  ` CALL RegisterUser(?,?,?,?,?) `
- ### changePassword ###
  ` UPDATE users SET password = ?, updated_at =now() WHERE id = ? `


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

---

# SQL QUERIES USED IN PROJECT REPOSITORY

## PROJECTS ##

- ### getAllProjects ###
  ` SELECT * FROM projects `

- ### getProjectById ###
  ` SELECT * FROM tflcomentor_db.projects WHERE project_id = ? `

- ### getProjectByStudentId ###
  ` SELECT 
        p.project_name,
        p.project_id,
        p.mentor_id,
        p.description,
        p.repository_url,
        p.status,
        p.created_at
    FROM project_allocations pa
    JOIN projects p ON pa.project_id = p.project_id
    WHERE pa.student_id = ? `

---

## PROJECT ALLOCATIONS ##

- ### addMember ###
  ` INSERT INTO project_allocations(project_id, student_id, joined_date)
    VALUES (?, ?, NOW()) `

- ### removeMember ###
  ` UPDATE project_allocations
    SET release_date = NOW()
    WHERE project_id = ? AND student_id = ? `

- ### getProjectAllocationDetails ###
  ` SELECT
        pa.project_id,
        p.project_name,
        pa.student_id,
        CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
        pa.joined_date,
        pa.release_date
    FROM project_allocations pa
    JOIN projects p ON pa.project_id = p.project_id
    JOIN users u ON pa.student_id = u.id
    JOIN personal_informations pi ON u.id = pi.user_id
    ORDER BY pa.project_id `

- ### getProjectMember ###
  ` SELECT
        pa.project_id,
        p.project_name,
        pa.student_id,
        CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
        pa.joined_date,
        pa.release_date
    FROM project_allocations pa
    JOIN projects p ON pa.project_id = p.project_id
    JOIN users u ON pa.student_id = u.id
    JOIN personal_informations pi ON u.id = pi.user_id
    WHERE pa.project_id = ? `

- ### getStudentByProjectId ###
  ` SELECT
        pa.project_id,
        p.project_name,
        pa.student_id,
        CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
        pa.joined_date,
        pa.release_date
    FROM project_allocations pa
    JOIN projects p ON pa.project_id = p.project_id
    JOIN users u ON pa.student_id = u.id
    JOIN personal_informations pi ON u.id = pi.user_id
    WHERE pa.project_id = ? `

---

## SQL STATEMENTS WITH EXPLANATIONS ##

### `ProjectRepositoryImpl`

- `SELECT * FROM projects`
  - Retrieves all project records from the `projects` table.

- `SELECT * FROM tflcomentor_db.projects WHERE project_id = ?`
  - Retrieves a specific project using its `project_id`.

- `INSERT INTO project_allocations(project_id, student_id, joined_date) VALUES (?, ?, NOW())`
  - Allocates a student to a project and stores the joining timestamp.

- `UPDATE project_allocations SET release_date = NOW() WHERE project_id = ? AND student_id = ?`
  - Marks a student as released from a project by updating `release_date`.

- `SELECT pa.project_id, p.project_name, pa.student_id, CONCAT(pi.first_name, ' ', pi.last_name) AS student_name, pa.joined_date, pa.release_date FROM project_allocations pa JOIN projects p ON pa.project_id = p.project_id JOIN users u ON pa.student_id = u.id JOIN personal_informations pi ON u.id = pi.user_id ORDER BY pa.project_id`
  - Retrieves complete project allocation details along with student names.

- `SELECT pa.project_id, p.project_name, pa.student_id, CONCAT(pi.first_name, ' ', pi.last_name) AS student_name, pa.joined_date, pa.release_date FROM project_allocations pa JOIN projects p ON pa.project_id = p.project_id JOIN users u ON pa.student_id = u.id JOIN personal_informations pi ON u.id = pi.user_id WHERE pa.project_id = ?`
  - Retrieves all students assigned to a particular project.

- `SELECT p.project_name, p.project_id, p.mentor_id, p.description, p.repository_url, p.status, p.created_at FROM project_allocations pa JOIN projects p ON pa.project_id = p.project_id WHERE pa.student_id = ?`
  - Retrieves all projects assigned to a particular student.
---

# SQL QUERIES USED IN QUESTION FILTER REPOSITORY

## QUESTIONS ##

- ### getQuestions ###
  ` SELECT *
    FROM questions q
    WHERE (? IS NULL OR q.language = ?)
    AND (? IS NULL OR q.layer = ?)
    AND (? IS NULL OR q.concept = ?)
    AND (? IS NULL OR q.framework = ?)
    AND (? IS NULL OR q.question_type = ?)
    AND (? IS NULL OR q.difficulty_level = ?)
    AND (? IS NULL OR q.status = ?) `

---

## SQL STATEMENTS WITH EXPLANATIONS ##

### `QuestionFilterRepositoryImpl`

- `SELECT * FROM questions q WHERE (? IS NULL OR q.language = ?) AND (? IS NULL OR q.layer = ?) AND (? IS NULL OR q.concept = ?) AND (? IS NULL OR q.framework = ?) AND (? IS NULL OR q.question_type = ?) AND (? IS NULL OR q.difficulty_level = ?) AND (? IS NULL OR q.status = ?)`
  - Retrieves questions dynamically based on optional filters such as:
    - Language
    - Layer
    - Concept
    - Framework
    - Question Type
    - Difficulty Level
    - Status

  - If a parameter is `NULL`, that filter is ignored.

  - This query supports flexible searching without building SQL dynamically in Java code.

  ---

  # SQL QUERIES USED IN QUESTION REPOSITORY

## QUESTIONS ##

- ### getQuestionById ###
  ` SELECT * FROM questions WHERE question_id = ? `

- ### getAllQuestions ###
  ` SELECT * FROM questions `

- ### getQuestionsByDifficulty ###
  ` SELECT * FROM questions WHERE difficulty_level = ? `

- ### getDescriptiveQuestion ###
  ` SELECT question_id, question_type, description, difficulty_level
    FROM questions
    WHERE question_type = ?
    ORDER BY question_id `

- ### insertCompleteQuestion ###
  ` INSERT INTO questions(description, question_type, difficulty_level, created_at, status, language, layer, framework, concept)
    VALUES (?, ?, ?, NOW(), 'DRAFT', ?, ?, ?, ?) `

- ### insertMCQOptions ###
  ` INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id)
    VALUES (?, ?, ?, ?, ?, ?) `

- ### getQuestionDetails ###
  ` SELECT * FROM questions WHERE question_id=? `

- ### getQuestionOptions ###
  ` SELECT * FROM mcq_options WHERE question_id=? `

- ### updateQuestionDetailsById ###
  ` UPDATE questions
    SET description=?,
        question_type=?,
        difficulty_level=?,
        status=?,
        language=?,
        layer=?,
        framework=?,
        concept=?
    WHERE question_id=? `

- ### updateMCQOptions ###
  ` UPDATE mcq_options
    SET option_a=?,
        option_b=?,
        option_c=?,
        option_d=?,
        correct_answer=?
    WHERE question_id=? `

- ### getQuestionsByStatus ###
  ` SELECT question_id, question_type, description, difficulty_level, status
    FROM questions
    WHERE status = ?
    ORDER BY question_id `

- ### getQuestionsByConceptId ###
  ` SELECT q.question_id, q.description, q.question_type
    FROM questions q
    JOIN question_framework_concepts qfc
        ON q.question_id = qfc.question_id
    JOIN framework_concepts fc
        ON qfc.framework_concepts_id = fc.id
    WHERE fc.concept_id = ? `

- ### getQuestionsByDateRange ###
  ` SELECT * FROM questions
    WHERE DATE(created_at) BETWEEN ? AND ? `

- ### updateQuestionStatusBulk ###
  ` UPDATE questions
    SET status = ?
    WHERE status = 'DRAFT'
    AND question_id IN (?) `

- ### updateQuestionStatus ###
  ` UPDATE questions
    SET status=?
    WHERE question_id=? `

- ### getFrameworkConceptId ###
  ` SELECT id
    FROM framework_concepts
    WHERE concept_id = ? AND framework_id = ? `

- ### insertQuestionFrameworkConceptMapping ###
  ` INSERT INTO question_framework_concepts(question_id, framework_concepts_id)
    VALUES (?, ?) `

- ### getQuestionCountByConcept ###
  ` SELECT COUNT(*)
    FROM questions
    WHERE concept=? `

---

## MCQ OPTIONS ##

- ### insertMCQOptions ###
  ` INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id)
    VALUES (?, ?, ?, ?, ?, ?) `

- ### getQuestionOptions ###
  ` SELECT * FROM mcq_options WHERE question_id=? `

- ### updateMCQOptions ###
  ` UPDATE mcq_options
    SET option_a=?,
        option_b=?,
        option_c=?,
        option_d=?,
        correct_answer=?
    WHERE question_id=? `

---

## SQL STATEMENTS WITH EXPLANATIONS ##

### `QuestionRepositoryImpl`

- `SELECT * FROM questions WHERE question_id = ?`
  - Retrieves a specific question using its question ID.

- `SELECT * FROM questions`
  - Retrieves all questions from the questions table.

- `SELECT * FROM questions WHERE difficulty_level = ?`
  - Retrieves questions filtered by difficulty level.

- `SELECT question_id, question_type, description, difficulty_level FROM questions WHERE question_type = ? ORDER BY question_id`
  - Retrieves descriptive questions filtered by question type.

- `INSERT INTO questions(description, question_type, difficulty_level, created_at, status, language, layer, framework, concept) VALUES (?, ?, ?, NOW(), 'DRAFT', ?, ?, ?, ?)`
  - Inserts a new question with draft status and metadata.

- `INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)`
  - Inserts MCQ options linked to a question.

- `SELECT * FROM mcq_options WHERE question_id=?`
  - Retrieves MCQ options for a specific question.

- `UPDATE questions SET description=?, question_type=?, difficulty_level=?, status=?, language=?, layer=?, framework=?, concept=? WHERE question_id=?`
  - Updates question details and metadata.

- `UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?`
  - Updates MCQ option details for a question.

- `SELECT question_id, question_type, description, difficulty_level, status FROM questions WHERE status = ? ORDER BY question_id`
  - Retrieves questions filtered by status.

- `SELECT q.question_id, q.description, q.question_type FROM questions q JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id WHERE fc.concept_id = ?`
  - Retrieves questions associated with a specific concept.

- `SELECT * FROM questions WHERE DATE(created_at) BETWEEN ? AND ?`
  - Retrieves questions created within a date range.

- `UPDATE questions SET status = ? WHERE status = 'DRAFT' AND question_id IN (?)`
  - Updates status of multiple draft questions in bulk.

- `UPDATE questions SET status=? WHERE question_id=?`
  - Updates the status of a specific question.

- `SELECT id FROM framework_concepts WHERE concept_id = ? AND framework_id = ?`
  - Retrieves framework concept mapping ID.

- `INSERT INTO question_framework_concepts(question_id, framework_concepts_id) VALUES (?, ?)`
  - Creates mapping between question and framework concept.

- `SELECT COUNT(*) FROM questions WHERE concept=?`
  - Counts total questions for a specific concept.

  ---

  # SQL QUERIES USED IN TECHNOLOGY REPOSITORY

## TECHNOLOGY / ANALYTICS ##

- ### getAllConceptsCount ###
  ` SELECT DISTINCT concept,
           COUNT(*) AS question_count
    FROM questions
    GROUP BY concept `

- ### getAllQuestionsByDifficulty ###
  ` SELECT DISTINCT difficulty_level,
           COUNT(*) AS question_count
    FROM questions
    GROUP BY difficulty_level `

---

## SQL STATEMENTS WITH EXPLANATIONS ##

### `TechnologyRepositoryImpl`

- `SELECT DISTINCT concept, COUNT(*) AS question_count FROM questions GROUP BY concept`
  - Retrieves all concepts along with the total number of questions available for each concept.

- `SELECT DISTINCT difficulty_level, COUNT(*) AS question_count FROM questions GROUP BY difficulty_level`
  - Retrieves question counts grouped by difficulty level.

---

## ANALYTICS PURPOSE ##

### Concept-wise Question Count
- Helps generate dashboards showing:
  - Number of questions available per concept
  - Popular or heavily used concepts
  - Content distribution across concepts

### Difficulty-wise Question Count
- Helps analyze:
  - Number of EASY, MEDIUM, and HARD questions
  - Balance of question difficulty in the system
  - Question bank statistics for reporting/dashboard modules