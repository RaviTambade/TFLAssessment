//Place all the md files here


# 5. Learning Track Table

Stores learning track information.

## Table: Learning Track

| Field | Description |
|------|-------------|
| learningTrackId | Primary key |
| learningTrackName | Learning track name |
| description | Learning track description |
| language_id | Linked language |
| runtime | Runtime environment |
| technology | Technologies used |
| layer | Layer type |
| technologyMap | Technology combination |
| concepts | Covered concepts |

---

# 6. Student Learning Track Table

Mapping between students and learning tracks.

## Table: student_learning_track

| Field | Description |
|------|-------------|
| id | Primary key |
| studentID | Foreign key referencing Student |
| learningTrackId | Foreign key referencing Learning Track |
| progressId | Progress tracking id |
| enrolledDate | Enrollment date |

# 7. Hands-on Table (Hands-on)

Stores hands-on Hands-ons.

## Table: Hands-on

| Field | Description |
|------|-------------|
| id | Primary key |
| learningTrackId | Foreign key referencing Learning Track |
| title | Hands-on title |
| description | Hands-on description |
| duration | Estimated timespan |

---

# 8. Hands-on Submission Table

Stores student Hands-on submissions.

## Table: Hands-on_submission

| Field | Description |
|------|-------------|
| id | Primary key |
| Hands-on_id | Foreign key referencing Hands-on |
| student_id | Foreign key referencing student |
| github_link | GitHub submission link |
| submitted_at | Submission timestamp |

---

# 29. Mentoring_Sessions Table

## mentoring_sessions
Stores mentoring session details.


| Field | Type | Description |
|------|------|-------------|
| session_id | INT (PK) | Unique session ID |
| mentor_id | INT (FK) | Mentor reference |
| session_name | VARCHAR(255) | Session title |
| topic | VARCHAR(255) | Session topic |
| meeting_link | VARCHAR(255) | Meeting URL |
| session_date | DATE | Date of session |
| session_time | TIME | Time of session |
| status | ENUM('upcoming','completed','cancelled') | Session status |

---

# 30. Learning Resources Table
##  learning_resources

Stores learning materials like videos, PDFs, and links.

| Field | Type | Description |
|------|------|-------------|
| resource_id | INT (PK) | Unique resource ID |
| title | VARCHAR(255) | Resource title |
| description | TEXT | Resource details |
| resource_url | VARCHAR(255) | Resource link |
|type| ENUM('md_file,recorded_sessions')|Type of the resource|
| session_id | INT (FK) | Linked session |
| uploaded_by | BIGINT (FK) | Uploaded by user |
| created_at | DATETIME | Upload timestamp |
| status | ENUM('active','inactive') | Resource status |

---

# 31. Mentor Reviews Table
##  mentor_reviews
Stores feedback given to mentors by students.

| Field | Type | Description |
|------|------|-------------|
| review_id | BIGINT (PK) | Unique review ID |
| mentor_id | BIGINT (FK) | Mentor reference |
| student_id | BIGINT (FK) | Student reference |
| rating | INT | Rating (1–5) |
| review_text | TEXT | Feedback text |
| created_at | TIMESTAMP | Review time |
| status | ENUM('ACTIVE','HIDDEN') | Review status |

---

# 32. Learning Paths Table
## learning_paths
Stores structured learning paths for students.

| Field | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Unique learning path ID |
| mentor_id | BIGINT | Mentor reference |
| learning_track_id | BIGINT | Track/technology reference |
| title | VARCHAR(200) | Learning path name |
| description | TEXT | Path details |
| duration | INT | Duration |
| total_modules | INT | Number of modules |
| status | ENUM('ACTIVE','INACTIVE') | Path status |
| created_at | TIMESTAMP | Created time |
| updated_at | TIMESTAMP | Last updated time |


# 37. Company_Alumni Table
## Original Schema

| Column Name | Description |
|------------|------------|
| company_id | Reference to company |
| alumni_id | Reference to alumni |
| name | Alumni name |
| added_at | Timestamp of association |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| company_id | No change |
| alumni_id | No change |
| added_at | Retained |
| name | Removed (redundant) |

---


# 38. Referral Table

| Column Name | Description |
|------------|------------|
| referral_id | Unique referral ID |
| company_id | Company reference |
| candidate_name | Name of candidate |
| email | Candidate email |
| referred_at | Timestamp |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| referral_id | No change |
| company_id | No change |
| candidate_name | Retained |
| email | Retained |
| referred_from | Added (alumni_id reference) |
| referred_at | Retained |

---

# 39. Employer Table

| Column Name | Description |
|------------|------------|
| employer_id | Unique employer ID |
| company_id | Company reference |
| first_name | First name |
| last_name | Last name |
| email | Email |
| phone | Contact number |
| profile_pic_url | Profile image |
| designation | Job title |
| created_at | Created timestamp |
| updated_at | Updated timestamp |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| employer_id | No change |
| company_id | No change |
| first_name | No change |
| last_name | No change |
| email | No change |
| phone | No change |
| profile_pic_url | No change |
| designation | No change |
| created_at | No change |
| updated_at | No change |

---

# 40. Job_Description Table

| Column Name | Description |
|------------|------------|
| job_id | Unique job ID |
| employer_id | Employer reference |
| title | Job title |
| description | Job description |
| location | Job location |
| job_type | Full-time/Part-time |
| salary_min | Minimum salary |
| salary_max | Maximum salary |

## Proposed Schema Changes
| Column Name | Change |
|------------|--------|
| job_id | No change |
| employer_id | No change |
| title | No change |
| description | No change |
| location | No change |
| job_type | No change |
| salary_min | Structured |
| salary_max | Structured |
---
# 41. Job Application Table

Stores job applications made by students.

## Table: Job_Application (Original)

| Field | Description |
|------|-------------|
| id | Primary key |
| job_id | Foreign key referencing Job |
| student_id | Foreign key referencing Student |
| status | Application status |
| updated_at | Last updated timestamp |
| applied_at | Application timestamp |

## Proposed Changes

| Column Name | Change |
|------------|--------|
| id | No change |
| job_id | No change |
| student_id | No change |
| status | Standardized status values |
| updated_at | Retained |
| applied_at | Retained |

---

# 42. Shortlisted Candidates Table

Stores shortlisted students for jobs.

## Table: Shortlisted_Candidates (Original)

| Field | Description |
|------|-------------|
| shortlisted_id | Primary key |
| student_id | Foreign key referencing Student |
| job_id | Foreign key referencing Job |
| employer_id | Foreign key referencing Employer |
| shortlisted_at | Timestamp |

## Proposed Changes

| Column Name | Change |
|------------|--------|
| shortlisted_id | No change |
| student_id | No change |
| job_id | No change |
| employer_id | No change |
| shortlisted_at | Add time precision |

---

# 43. Interview Table

Stores interview scheduling and outcomes.

## Table: Interview (Original)

| Field | Description |
|------|-------------|
| interview_id | Primary key |
| application_id | Foreign key referencing Job Application |
| employer_id | Foreign key referencing Employer |
| scheduled_at | Scheduled date & time |
| rescheduled_at | Rescheduled timestamp |
| mode | Interview mode (video, in-person, phone) |
| status | Interview status |
| result | Result notes |
| outcome | Final outcome |
| created_at | Creation timestamp |

## Proposed Changes

| Column Name | Change |
|------------|--------|
| interview_id | No change |
| application_id | No change |
| employer_id | No change |
| scheduled_at | Standard datetime format |
| rescheduled_at | Retained |
| mode | Enum (video, in-person, phone) |
| status | Enum (scheduled, completed, cancelled, rescheduled) |
| result | Structured notes |
| outcome | Enum (selected, not selected, hold, pending) |
| created_at | Retained |

---

# 44. User Logs Table

Tracks user login/logout activity.

## Table: User_Logs (Original)

| Field | Description |
|------|-------------|
| log_id | Primary key |
| user_id | Foreign key referencing User |
| user_login | Login timestamp |
| user_logout | Logout timestamp |

## Proposed Changes

| Column Name | Change |
|------------|--------|
| log_id | No change |
| user_id | No change |
| user_login | Retained |
| user_logout | Retained |
| session_duration | Added (derived field) |

---



# 53. Mini Projects Table
## mini_projects

Stores mini project details linked to questions.

| Field | Type | Description |
|------|------|-------------|
| project_id | BIGINT (PK) | Unique project ID |
| question_id | BIGINT (FK, UNIQUE) | Linked question |
| project_description | TEXT | Description of the project |
| evaluation_criteria | TEXT | Criteria to evaluate project |

---

## 54. Mock Questions Table
##  mock_questions
Stores mock/test-related questions.

| Field | Type | Description |
|------|------|-------------|
| mock_id | BIGINT (PK) | Unique mock ID |
| question_id | BIGINT (FK, UNIQUE) | Linked question |
| mock_category | VARCHAR(100) | Category of mock |

---
## 57. auto_grading_results Table

### 📌 Description
Stores results generated by the auto-grading system for submitted answers.

| Field Name          | Data Type        | Description |
|--------------------|-----------------|-------------|
| result_id          | BIGINT (PK)     | Unique result identifier |
| answer_id          | BIGINT (UNIQUE) | Reference to student answer |
| score              | DECIMAL(6,2)    | Score given by auto grader |
| execution_time     | DECIMAL(8,4)    | Time taken to execute code |
| memory_used        | DECIMAL(8,2)    | Memory used during execution |
| test_cases_passed  | INT             | Number of test cases passed |
| remarks            | TEXT            | Feedback or comments |
| answer_id (FK)     | BIGINT          | References student_answers(answer_id) |

---

## 58. code_execution_logs Table

### 📌 Description
Stores logs generated during code execution.

| Field Name        | Data Type     | Description |
|------------------|--------------|-------------|
| log_id           | BIGINT (PK)  | Unique log identifier |
| answer_id        | BIGINT (FK)  | Reference to student answer |
| stdout           | LONGTEXT     | Standard output of program |
| stderr           | LONGTEXT     | Error output |
| execution_status | VARCHAR(50)  | Execution result (SUCCESS / FAILED) |

---

## 59. concept_wise_results Table

### 📌 Description
Stores student performance based on specific concepts/topics.

| Field Name      | Data Type     | Description |
|----------------|--------------|-------------|
| id             | BIGINT (PK)  | Unique identifier |
| assessment_id  | BIGINT       | Reference to assessment |
| concept_id     | BIGINT       | Reference to concept/topic |
| percentage     | DECIMAL(6,2) | Score percentage in that concept |
| mastery_level  | VARCHAR(50)  | Skill level (Beginner, Intermediate, Advanced) |

---
## 60. Student_performance Table


# 📘 Role Wise Tables

## 12) Assessment

### i) Student

| Field Name       | Data Type      | Description                        |
|-----------------|---------------|------------------------------------|
| id              | BIGINT (PK)   | Unique identifier                  |
| test_id         | BIGINT (FK)   | Reference to test                  |
| candidate_id    | BIGINT (FK)   | Reference to candidate             |
| status          | VARCHAR(50)   | Current status of assessment       |
| created_by      | BIGINT (FK)   | User who created the record        |
| created_on      | DATETIME      | Timestamp of creation              |
| modify_by       | BIGINT (FK)   | User who last modified the record  |
| modify_on       | DATETIME      | Timestamp of last modification     |
| schedule_start  | DATETIME      | Scheduled start time               |
| schedule_end    | DATETIME      | Scheduled end time                 |

### ii) Admin

| Field Name  | Data Type    | Description                  |
|------------|-------------|------------------------------|
| id         | BIGINT (PK) | Unique identifier            |
| test_id    | BIGINT (FK) | Reference to test            |
| student_id | BIGINT (FK) | Reference to student         |
| start_time | DATETIME    | Actual start time            |
| end_time   | DATETIME    | Actual end time              |
| status     | VARCHAR(50) | Current status of assessment |

---

## 13) Notification

### i) Student

| Field Name  | Data Type    | Description                        |
|------------|-------------|------------------------------------|
| id         | BIGINT (PK) | Unique identifier                  |
| student_id | BIGINT (FK) | Reference to student               |
| message    | TEXT        | Notification message content       |
| source     | VARCHAR(100)| Origin/source of the notification  |
| created_at | DATETIME    | Timestamp of creation              |

---

## 14) SME Account

### i) SME

| Field Name  | Data Type     | Description                  |
|------------|--------------|------------------------------|
| sme_id     | BIGINT (PK)  | Unique identifier for SME    |
| name       | VARCHAR(255) | Full name of the SME         |
| email      | VARCHAR(255) | Email address                |
| password   | VARCHAR(255) | Hashed password              |
| created_at | DATETIME     | Timestamp of account creation|

---

## 15) Concepts

### i) SME

| Field Name  | Data Type     | Description                     |
|------------|--------------|----------------------------------|
| concept_id | BIGINT (PK)  | Unique identifier for concept    |
| name       | VARCHAR(255) | Name of the concept              |
| description| TEXT         | Detailed description of concept  |
| status     | VARCHAR(50)  | Current status of the concept    |
| created_at | DATETIME     | Timestamp of creation            |

---

# 📘 Module Wise

## 12) Assessment

| Field Name      | Data Type    | Description                         |
|----------------|-------------|-------------------------------------|
| assessment_id  | BIGINT (PK) | Unique identifier for assessment    |
| test_id        | BIGINT (FK) | Reference to test                   |
| candidate_id   | BIGINT (FK) | Reference to candidate              |
| attempt_number | INT         | Attempt count for the assessment    |
| start_time     | DATETIME    | Actual start time                   |
| end_time       | DATETIME    | Actual end time                     |
| status         | VARCHAR(50) | Current status of assessment        |

---

## 13) Notification

> Not present

---

## 14) SME Account

> Not present

---

## 15) Concepts

| Field Name  | Data Type    | Description                          |
|------------|-------------|--------------------------------------|
| concept_id | BIGINT (PK) | Unique identifier for concept        |
| skill_id   | BIGINT (FK) | Reference to associated skill        |
| title      | VARCHAR(255)| Title of the concept                 |
| description| TEXT        | Detailed description of concept      |
| level_id   | BIGINT (FK) | Reference to difficulty/level        |
| created_at | DATETIME    | Timestamp of creation                |
| updated_at | DATETIME    | Timestamp of last update             |

---

# 📘 Final

## 12) Assessment

| Field Name      | Data Type    | Description                       |
|----------------|-------------|-----------------------------------|
| assessment_id  | BIGINT (PK) | Unique identifier for assessment  |
| test_id        | BIGINT (FK) | Reference to test                 |
| student_id     | BIGINT (FK) | Reference to student              |
| created_by     | BIGINT (FK) | User who created the record       |
| created_on     | DATETIME    | Timestamp of creation             |
| modify_by      | BIGINT (FK) | User who last modified the record |
| modify_on      | DATETIME    | Timestamp of last modification    |
| schedule_start | DATETIME    | Scheduled start time              |
| schedule_end   | DATETIME    | Scheduled end time                |
| status         | VARCHAR(50) | Current status of assessment      |

---

## 13) Notification

| Field Name       | Data Type     | Description                        |
|-----------------|---------------|------------------------------------|
| notification_id | BIGINT (PK)   | Unique identifier for notification |
| user_id         | BIGINT (FK)   | Reference to user                  |
| message         | TEXT          | Notification message content       |
| source          | VARCHAR(100)  | Origin/source of the notification  |
| created_at      | DATETIME      | Timestamp of creation              |

---

## 14) SME Account

| Field Name     | Data Type    | Description                        |
|---------------|-------------|-------------------------------------|
| sme_id        | BIGINT (PK) | Unique identifier for SME account   |
| user_id       | BIGINT (FK) | Reference to user                   |
| technology_id | BIGINT (FK) | Reference to associated technology  |

---

## 15) Concept

| Field Name  | Data Type     | Description                      |
|------------|--------------|----------------------------------|
| concept_id | BIGINT (PK)  | Unique identifier for concept    |
| name       | VARCHAR(255) | Name of the concept              |
| description| TEXT         | Detailed description of concept  |
| status     | VARCHAR(50)  | Current status of the concept    |
| created_at | DATETIME     | Timestamp of creation            |

---

### 📌 Description
Stores overall performance metrics of each student.

| Field Name              | Data Type        | Description |
|------------------------|-----------------|-------------|
| id                     | BIGINT (PK)     | Unique identifier for each record |
| Student_id             | BIGINT (UNIQUE) | Unique student ID (one record per student) |
| overall_score          | DECIMAL(6,2)    | Total score achieved by the student |
| average_percentage     | DECIMAL(6,2)    | Average percentage across all tests |
| missed_test            | INT             | Number of tests not attempted |
| tests_attempted        | INT             | Total tests attempted (default = 0) |
| improvement_rate       | DECIMAL(5,2)    | Performance improvement rate (%) |
| performance_level_id   | BIGINT (FK)     | References performance level |

---

## 🏆 61. Ranking Table

Stores ranking details of students.

| Column Name      | Data Type | Description                   |
| ---------------- | --------- | ----------------------------- |
| id (PK)          | INT       | Unique ranking ID             |
| student_id (FK)  | INT       | References users.user_id      |
| test_id          | INT       | Test identifier (logical use) |
| rank_position    | INT       | Rank of the student           |
| total_candidates | INT       | Total participants            |
| languages        | VARCHAR   | Languages used                |
| generated_at     | TIMESTAMP | Ranking generation time       |

---

## 📈 62. Performance_Snapshot Table

Stores performance history.

| Column Name      | Data Type | Description                 |
| ---------------- | --------- | --------------------------- |
| id (PK)          | INT       | Unique snapshot ID          |
| student_id (FK)  | INT       | References users.user_id    |
| snapshot_date    | DATE      | Date of snapshot            |
| performance_json | JSON      | Performance data (flexible) |

---

## 📊 63. Performance_Level Table

Defines score ranges.

| Column Name | Data Type    | Description       |
| ----------- | ------------ | ----------------- |
| id (PK)     | INT          | Unique level ID   |
| level_name  | VARCHAR(100) | Level name        |
| min_score   | INT          | Minimum score     |
| max_score   | INT          | Maximum score     |
| description | TEXT         | Level description |

---
## 🧑‍💻 64. Users Table

Stores all user information.

| Column Name    | Data Type    | Description                 |
| -------------- | ------------ | --------------------------- |
| user_id (PK)   | INT          | Unique user ID              |
| first_name     | VARCHAR(100) | User's first name           |
| last_name      | VARCHAR(100) | User's last name            |
| contact        | VARCHAR(15)  | Contact number              |
| email          | VARCHAR(150) | Unique email address        |
| password_hash  | TEXT         | Encrypted password          |
| status         | ENUM         | ACTIVE / INACTIVE / BLOCKED |
| email_verified | BOOLEAN      | Email verification status   |
| created_at     | TIMESTAMP    | Record creation time        |
| updated_at     | TIMESTAMP    | Last updated time           |

---

## 🛡️ 65. Roles Table

Defines system roles.

| Column Name  | Data Type    | Description      |
| ------------ | ------------ | ---------------- |
| role_id (PK) | INT          | Unique role ID   |
| role_name    | VARCHAR(100) | Name of the role |
| description  | TEXT         | Role description |

---

## 🔗 66. User_Role Table

Maps users to roles (Many-to-Many).

| Column Name  | Data Type | Description              |
| ------------ | --------- | ------------------------ |
| id (PK)      | INT       | Unique mapping ID        |
| user_id (FK) | INT       | References users.user_id |
| role_id (FK) | INT       | References roles.role_id |
| assigned_at  | TIMESTAMP | Role assigned time       |

---

## 🎓 67. Tap_Alumni Table

Tracks placed students.

| Column Name     | Data Type    | Description              |
| --------------- | ------------ | ------------------------ |
| id (PK)         | INT          | Unique record ID         |
| student_id (FK) | INT          | References users.user_id |
| placed_on       | DATE         | Placement date           |
| job_title       | VARCHAR(150) | Job title                |

---

