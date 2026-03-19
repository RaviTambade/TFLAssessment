//Place all the md files here

# 🎓 Student Database Schema

---

## 🎓 Student Table
Stores student basic information.

### Table: Student

| Field | Data Type | Description |
|-------|----------|-------------|
| id | INT (PK) | Primary key |
| first_name | VARCHAR | First name |
| last_name | VARCHAR | Last name |
| gender | VARCHAR | Gender |
| date_of_birth | DATE | Student birthday |
| email | VARCHAR | Email address |
| password | VARCHAR | Password |
| phone_number | VARCHAR | Contact number |
| registration_number | VARCHAR | Registration number |
| created_at | DATETIME | Record created time |
| updated_at | DATETIME | Record updated time |

---

## 📘 Academic Information Table
Stores academic details of students.

### Table: Academic_Information

| Field | Data Type | Description |
|-------|----------|-------------|
| id | INT (PK) | Primary key |
| person_id | INT (FK) | Reference to student |
| professional_id | INT (FK) | Reference to professional |
| course_name | VARCHAR | Course name |
| specialization | VARCHAR | Specialization |
| enrollment_year | INT | Year of enrollment |
| passing_year | INT | Year of passing |
| percentage | DECIMAL | Percentage |
| cgpa | DECIMAL | CGPA |
| college_name | VARCHAR | College name |
| university_name | VARCHAR | University name |

---

## 🧾 Personal Information Table
Stores personal details of students.

### Table: Personal_Information

| Field | Data Type | Description |
|-------|----------|-------------|
| id | INT (PK) | Primary key |
| first_name | VARCHAR | First name |
| last_name | VARCHAR | Last name |
| gender | VARCHAR | Gender |
| date_of_birth | DATE | Date of birth |
| phone_number | VARCHAR | Phone number |
| email | VARCHAR | Email |
| address | VARCHAR | Address |
| city | VARCHAR | City |
| state | VARCHAR | State |
| country | VARCHAR | Country |
| pincode | VARCHAR | Postal code |

---

## 💼 Professional Information Table
Stores professional details of students.

### Table: Professional_Information

| Field | Data Type | Description |
|-------|----------|-------------|
| id | INT (PK) | Primary key |
| company_name | VARCHAR | Company name |
| job_title | VARCHAR | Job title |
| employment_type | VARCHAR | Employment type |
| start_date | DATE | Job start date |
| end_date | DATE | Job end date |
| is_current_job | BOOLEAN | Current job or not |
| experience_years | INT | Total experience |
| location | VARCHAR | Job location |
| skills | TEXT | Skills |


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

54

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
## 9. student_answer Table

*Stores student responses for assessments*

| Column Name            | Data Type | Description               |
| ---------------------- | --------- | ------------------------- |
| id (PK)                | INT       | Unique answer ID          |
| assessment_id (FK)     | INT       | Assessment reference      |
| question_id (FK)       | INT       | Question reference        |
| student_id (FK)        | INT       | Student reference         |
| submitted_code         | TEXT      | Code submitted by student |
| submitted_answer       | TEXT      | Answer submitted          |
| submitted_at           | TIMESTAMP | Submission time           |

---

## 10. student_assessment_result Table

*Stores final result of assessment*

| Column Name        | Data Type   | Description            |
| ------------------ | ----------- | ---------------------- |
| id (PK)            | INT         | Unique result ID       |
| student_id (FK)    | INT         | Student reference      |
| assessment_id (FK) | INT         | Assessment reference   |
| score              | FLOAT       | Marks scored           |
| percentile         | FLOAT       | Percentile ranking     |
| time_taken_minutes | INT         | Time taken to complete |

---

## 11. mentor_mentee Table

*Stores mentor-student mapping*

| Column Name     | Data Type | Description       |
| --------------- | --------- | ----------------- |
| id (PK)         | INT       | Unique mapping ID |
| mentor_id (FK)  | INT       | Mentor reference  |
| student_id (FK) | INT       | Student reference |
| assigned_on     | DATE      | Assignment date   |

---

 ## 12. mentor_appointment Table

*Stores mentor appointment details*

| Column Name                | Data Type | Description                       |
| -------------------------- | --------- | --------------------------------- |
| id (PK)                    | INT       | Unique appointment ID             |
| student_id (FK)            | INT       | Student reference                 |
| mentor_id (FK)             | INT       | Mentor reference                  |
| appointment_date           | DATE      | Date of appointment               |
| start_time                 | TIME      | Start time                        |
| status                     | ENUM      | SCHEDULED / CANCELLED / COMPLETED |
| meeting_link               | VARCHAR   | Online meeting link               |
| agenda                     | TEXT      | Meeting purpose                   |
| created_at                 | TIMESTAMP | Record creation time              |
| updated_at                 | TIMESTAMP | Last updated time                 |

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


## 18. Sessions Table
Stores all session-related information.

| Column Name        | Data Type     | Description |
|-------------------|--------------|-------------|
| session_id (PK)   | INT          | Unique session ID |
| title             | VARCHAR(255) | Session title |
| description       | TEXT         | Session description |
| mentor_id         | INT          | ID of the mentor |
| session_date      | DATETIME     | Date and time of session |
| session_url       | VARCHAR(500) | Link to access session |
| created_at        | TIMESTAMP    | Record creation time |
| updated_at        | TIMESTAMP    | Last updated time |
| duration          | INT          | Duration in minutes |
| session_type      | VARCHAR(50)  | Type (Live / Recorded / Workshop) |

---

## 19. Runtimes Table
Stores runtime environments.

| Column Name        | Data Type     | Description |
|-------------------|--------------|-------------|
| runtime_id (PK)   | INT          | Unique runtime ID |
| runtime_name      | VARCHAR(100) | Name of runtime |

---

## 20. Session_Resources Table
Stores session resources like PDFs, videos, etc.

| Column Name              | Data Type     | Description |
|--------------------------|--------------|-------------|
| session_resource_id (PK) | INT          | Unique resource ID |
| session_id (FK)          | INT          | Linked session ID |
| resource_type            | VARCHAR(50)  | Type (PDF, Video, Link) |
| resource_url             | VARCHAR(500) | Resource URL |
| resource_size            | INT          | File size |
| uploaded_by              | INT          | User who uploaded |
| upload_date              | DATETIME     | Upload timestamp |
| status                   | VARCHAR(50)  | Active / Inactive |

---

## 21. Hands_On_Results Table
Stores student performance data.

| Column Name              | Data Type     | Description |
|--------------------------|--------------|-------------|
| hands_on_result_id (PK)  | INT          | Unique result ID |
| student_id (FK)          | INT          | Student ID |
| hands_on_id (FK)         | INT          | Hands-on session ID |
| score                    | INT          | Marks obtained |
| status                   | VARCHAR(50)  | Completed / Pending |
| submitted_at             | DATETIME     | Submission time |

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

0


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

# 27. Tests Table (SME Role)

Stores test information created by SMEs.

## Table: tests

| Field | Description |
|------|-------------|
| test_id | Unique test identifier (Primary Key) |
| sme_id | Foreign key referencing SME |
| title | Test title |
| duration | Duration of the test |
| difficulty | Difficulty level (Easy, Medium, Hard) |
| created_at | Test creation timestamp |

## Proposed Schema (Module-wise Assessment Orchestrator)

| Column Name | Description |
|------------|------------|
| testid | Unique test identifier (Primary Key) |
| title | Test title |
| description | Test description |
| duration_minutes | Duration in minutes |
| created_by | External user ID |
| status | Status (default: DRAFT) |
| created_at | Timestamp of creation |

---

# 28. Test Questions Table (SME Role)

Maps questions to tests.

## Table: test_questions

| Field | Description |
|------|-------------|
| test_question_id | Unique identifier (Primary Key) |
| test_id | Foreign key referencing test |
| question_id | Foreign key referencing question |

## Proposed Schema (Module-wise Assessment Orchestrator)

| Column Name | Description |
|------------|------------|
| id | Unique identifier (Primary Key) |
| testid | Foreign key referencing tests |
| question_id | Foreign key referencing question |
| sequence_order | Order of question in test |

## Constraints

| Constraint | Description |
|-----------|-------------|
| UNIQUE(testid, question_id) | Prevents duplicate questions in same test |
| FK: testid | References tests(testid) |

---

# 29. Mentor Information Table

Stores mentor profile details.

## Table: mentor_information

| Field | Description |
|------|-------------|
| mentor_id | Unique mentor identifier (Primary Key) |
| user_id | Linked user ID |
| experience_years | Years of experience |
| specialization | Area of expertise |
| created_on | Profile creation timestamp |
| bio | Mentor biography |
| linkedin_profile | LinkedIn profile URL |

## Proposed Schema (Module-wise Membership)

| Column Name | Description |
|------------|------------|
| mentor_id | Unique mentor profile ID (Primary Key) |
| user_id | Linked user (1:1 relationship) |
| experience_years | Years of mentoring experience |
| specialization | Area of expertise |
| created_on | Profile creation timestamp |

## Constraints

| Constraint | Description |
|-----------|-------------|
| UNIQUE(user_id) | Ensures one mentor profile per user |
| FK: user_id | References users(user_id) |

---

# 30. (Reserved / Not Defined)

*No schema provided.*

---

# 33. Student Learning Progress Table

Stores module-wise learning progress of students.

## Table: student_learning_progress

| Field | Description |
|------|-------------|
| id | Unique progress identifier (Primary Key) |
| student_id | Foreign key referencing student |
| module_id | Foreign key referencing learning module |
| status | Progress status (e.g., In Progress, Completed) |
| completed_at | Timestamp when module was completed |

---

# 34. Projects Table

Stores project details assigned by mentors.

## Table: projects

| Field | Description |
|------|-------------|
| project_id | Unique project identifier (Primary Key) |
| mentor_id | Foreign key referencing mentor |
| project_name | Name of the project |
| description | Project details |
| repository_url | Git repository link |
| status | Project status (e.g., Active, Completed) |
| created_at | Project creation timestamp |

---

# 35. Student Project Table (Mapping Table)

Maps students to projects.

## Table: student_project

| Field | Description |
|------|-------------|
| id | Unique identifier (Primary Key) |
| project_id | Foreign key referencing project |
| student_id | Foreign key referencing student |

---

# 36. Companies Table

Stores company information.

## Table: companies

| Field | Description |
|------|-------------|
| company_id | Unique company identifier (Primary Key) |
| company_name | Name of the company |
| website | Official website URL |
| industry | Industry type (e.g., IT, Finance) |
| company_type | Type (Service-based, Product-based, Startup) |
| company_size | Size range (e.g., 1-10, 11-50, 100+) |
| description | Company overview |
| logo_url | URL of company logo |
| founded_year | Year company was founded |
| created_at | Record creation timestamp |
| updated_at | Last update timestamp |

---

# 55. Skill Level Table (Module-wise)

Defines different skill levels.

## Table: skill_level

| Field | Description |
|------|-------------|
| id | Unique identifier (Primary Key) |
| level_name | Skill level (Beginner, Intermediate, Advanced) |
| description | Description of the skill level |

---

# 56. Question Technology Concept Map Table

Maps questions to technology concepts.

## Table: question_technology_concept_map

| Field | Description |
|------|-------------|
| id | Unique identifier (Primary Key) |
| question_id | Foreign key referencing question_bank |
| technology_concepts_id | Foreign key referencing technology_concepts |

## Constraints

| Constraint | Description |
|-----------|-------------|
| UNIQUE(question_id, technology_concepts_id) | Prevents duplicate mappings |
| FK: question_id | References question_bank(question_id) ON DELETE CASCADE |
| FK: technology_concepts_id | References technology_concepts(id) ON DELETE CASCADE |


---


### `21. Languages`
| Field | Type | Description |
|-------|------|-------------|
| language_id | PK | Primary key, auto-incrementing identifier for each language |
| language_name | VARCHAR | Name of the programming language (e.g., "Python", "JavaScript") |
| runtime_id | FK | Foreign key referencing the runtime environment this language supports |

### `22. Sme_runtime`
| Field | Type | Description |
|-------|------|-------------|
| sme_runtime_id | PK | Primary key, unique identifier for SME-runtime association |
| sme_id | FK | Foreign key referencing the Subject Matter Expert (SME) |
| runtime_id | FK | Foreign key referencing the runtime environment assigned to SME |

### `23. Mcq_answer_options`
| Field | Type | Description |
|-------|------|-------------|
| mcq_answer_options_id | PK | Primary key, unique identifier for each answer option |
| option_text | VARCHAR | The text displayed for this multiple-choice answer option |
| correct_answer | VARCHAR | Boolean/text flag indicating if this is the correct answer (e.g., "true"/"false") |
| question_id | FK | Foreign key referencing the parent MCQ question |

### `24. Question_concept_mapping`
| Field | Type | Description |
|-------|------|-------------|
| question_concept_mapping_id | PK | Primary key, unique identifier for each question-concept mapping |
| question_id | FK | Foreign key referencing the specific question |
| concept_id | FK | Foreign key referencing the learning concept/knowledge area |
