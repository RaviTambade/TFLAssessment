# 📘 Database Schema Documentation

---

 1. Core Master Tables 

 ## 1. Table: layers
**Description:** Stores layer information.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique identifier |
| layers | VARCHAR(50) | Name of the layer |

---

## 2. Roles Table

| Column Name   | Data Type     | Description      |
|--------------|--------------|------------------|
| role_id (PK) | INT          | Unique role ID   |
| role_name    | VARCHAR(100) | Role name        |
| description  | TEXT         | Description      |


---

## 3. Runtimes Table

| Column Name  | Data Type | Description     |
|--------------|----------|-----------------|
| id (PK)      | INT      | Runtime ID      |
| runtime_name | VARCHAR  | Runtime name    |

## 4. Companies Table

| Column Name   | Data Type | Description        |
|--------------|----------|--------------------|
| id (PK)      | INT      | Company ID         |
| company_name | VARCHAR  | Company name       |
| website      | VARCHAR  | Website URL        |
| industry     | VARCHAR  | Industry type      |
| company_type | VARCHAR  | Type               |
| company_size | VARCHAR  | Size               |
| description  | TEXT     | Overview           |
| created_at   | DATETIME | Created time       |
| updated_at   | DATETIME | Updated time       |

---

## 5. Concepts Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| id (PK)    | BIGINT   | Concept ID         |
| name       | VARCHAR  | Concept name       |
| description| TEXT     | Description        |
| status     | BOOLEAN | TRUE / FALSE        |
| created_at | DATETIME | Created time       |


2. User & Base System

## 6. Users Table
Stores all user information.

| Column Name | Data Type    | Description                 |
|------------|-------------|-----------------------------|
| id (PK)    | INT         | Unique user ID              |
| contact    | VARCHAR(15) | Contact number              |
| password   | TEXT        | Encrypted password          |
| status     | ENUM        | ACTIVE / INACTIVE / BLOCKED |
| created_at | DATETIME   | Record creation time        |
| updated_at | DATETIME   | Last updated time           |

---

## 7. Personal Informations Table

| Column Name    | Data Type | Description            |
|---------------|----------|------------------------|
| id (PK)       | INT      | Primary key            |
| user_id (FK)  | INT      | References Users(id)   |
| first_name    | VARCHAR  | First name             |
| last_name     | VARCHAR  | Last name              |
| gender        | ENUM     | Male / female          |
| date_of_birth | DATE     | Date of birth          |
| email         | VARCHAR  | Email                  |
| address       | VARCHAR  | Address                |
| city          | VARCHAR  | City                   |
| state         | VARCHAR  | State                  |

---

## 8. Academic Informations Table

| Column Name      | Data Type | Description          |
|-----------------|----------|----------------------|
| id (PK)         | INT      | Primary key          |
| user_id (FK)    | INT      | References Users(id) |
| stream_name     | VARCHAR  | Stream name          |
| specialization  | VARCHAR  | Specialization       |
| enrollment_year | INT      | Enrollment year      |
| passing_year    | INT      | Passing year         |
| percentage      | DECIMAL  | Percentage           |
| college_name    | VARCHAR  | College name         |

---

🔹 3. Role & Relationships

## 9. User_Roles Table

| Column Name   | Data Type | Description                  |
|--------------|----------|------------------------------|
| id (PK)      | INT      | Mapping ID                   |
| user_id (FK) | INT      | References Users(id)         |
| role_id (FK) | INT      | References Roles(role_id)    |
| assigned_at  | DATETIME | Role assigned time           |

---

## 10. Mentor_Mentees Table

| Column Name  | Data Type | Description              |
|-------------|----------|--------------------------|
| id (PK)     | INT      | Mapping ID               |
| mentor_id   | INT (FK) | References Users(id)     |
| mentee_id   | INT (FK) | References Users(id)     |
| assigned_on | DATE     | Assignment date          |

---

🔹 4. Professional & Alumni

## 11. Professional Informations Table

| Column Name        | Data Type | Description            |
|------------------|----------|------------------------|
| id (PK)          | INT      | Primary key            |
| user_id (FK)     | INT      | References Users(id)   |
| company_name     | VARCHAR  | Company name           |
| job_title        | VARCHAR  | Job title              |
| employment_type  | VARCHAR  | Employment type        |
| start_date       | DATE     | Job start date         |
| end_date         | DATE     | Job end date           |
| is_current_job   | BOOLEAN  | Current job flag       |
| experience_years | INT      | Total experience       |
| location         | VARCHAR  | Job location           |
| skills           | TEXT     | Skills                 |

---

## 12. Table: alumni

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| alumni_id | BIGINT (PK) | Unique ID |
| company_id | BIGINT (FK) | Company |
| user_id | BIGINT (FK) | User |
| added_at | DATETIME | Added time |

---


##  13. Table: referrals

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| company_id | BIGINT (FK) | Company |
| user_id | BIGINT (FK) | Candidate |
| alumni_id | BIGINT (FK) | Alumni |

---

🔹 5. Learning Structure

## 14. Table: frameworks

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| name | VARCHAR(100) | Framework name |
| layer_id   | (FK)     | 
| language_id | (FK)     |
| created_at | DATETIME | Created |
| updated_at | DATETIME | Updated |

---

## 15. Table: framework_concepts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| framework_id | INT (FK) | Framework |
| concept_id | INT (FK) | Concept |

---

## 16. Questions Table

| Column Name       | Data Type | Description        |
|------------------|----------|--------------------|
| question_id (PK) | BIGINT   | Question ID        |
| description      | TEXT     | Question text      |
| question_type    | ENUM     | MCQ/PROBLEM_STATEMENT/HANDS_ON|
| difficulty_level | ENUM     | BEGINNER/INTERMEDIATE/ADVANCE|
| created_at       | DATETIME| Created time       |
| status           | Boolean  |    TRUE/FALSE          |

---

## 17. Table: question_framework_concepts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| question_id | BIGINT (FK) | Question |
| framework_id | BIGINT (FK) |  |

---

🔹 6. Language & Runtime Mapping

## 18. Languages Table

| Column Name   | Data Type | Description        |
|--------------|----------|--------------------|
| id (PK)      | INT      | Language ID        |
| language     | VARCHAR  | Language name      |
| runtime_id   | INT (FK) | References Runtime |

---

## 19. Table: sme_runtimes

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| sme_runtime_id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | SME reference |
| runtime_id | BIGINT (FK) | Runtime reference |

---

🔹 7. Tests & Questions

## 20. Tests Table

| Column Name | Data Type | Description        |
|-------------|----------|--------------------|
| id (PK)     | BIGINT   | Test ID            |
| sme_id      | BIGINT   | SME (User ID)      |
| title       | VARCHAR  | Test title         |
| duration    | INT      | Duration (minutes) |
| description | TEXT     | Description        |
| created_at  | DATETIME | Created DATETIME  |
| status      | BOOLEN  | True / False     |

---

## 21. Test Questions Table

| Column Name     | Data Type | Description        |
|----------------|----------|--------------------|
| id (PK)        | INT      | Unique ID          |
| test_id        | BIGINT   | References Tests   |
| question_id    | BIGINT   | References Question|
| sequence_order | INT      | Order              |


---

## 22. MCQ Question Options

| Column Name     | Data Type | Description        |
|----------------|----------|--------------------|
| id (PK)        | INT      | Option ID          |
| option_a       | VARCHAR  | Option A           |
| option_b       | VARCHAR  | Option B           |
| option_c       | VARCHAR  | Option C           |
| option_d       | VARCHAR  | Option D           |
| correct_answer | BOOLEAN  | Correct answer     |
| question_id    | INT (FK) | References Question|

---


🔹 8. Hands-on & Practice

## 23. Table: hands_on
**Description:** Stores hands-on exercises.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Primary key |
| question_id | BIGINT (FK) | Reference to question |
| user_id | BIGINT (FK) | Reference to user |
| description | TEXT | Hands-on description |
| duration | INT | Estimated timespan |
| created_at | DATETIME | Creation time |

---

##  24. Table: hands_on_submissions
**Description:** Stores student submissions.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Primary key |
| hands_on_id | BIGINT (FK) | Reference to hands_on |
| user_id | BIGINT (FK) | Reference to user |
| github_link | VARCHAR(255) | GitHub submission link |
| submitted_at | DATETIME | Submission time |

---

## 25. Table: hands_on_results

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| user_id | INT (FK) | User |
| hands_on_id | INT (FK) | Hands-on |
| score | INT | Marks |
| sme_id | BIGINT (FK) | SME reference |
| status | BOOLEAN | True / False |
| submitted_at | DATETIME | Submission time |

---

## 26. Problem Statements

| Column Name | Data Type | Description |
|------------|----------|-------------|
| id (PK)    | BIGINT   | ID          |
| question_id  | INT (Fk)  |  question id   |
| description| TEXT     | Description |
| duration   | INT      | Duration    |

---

## 27. Table: problem_statement_answers

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| answer | TEXT | Submitted answer |
| question_id | BIGINT (FK) | Reference to problem_statement |
| submitted_at | DATETIME | Submission time |

---

🔹 9. Assessments

## 28. Assessments Table

| Column Name   | Data Type | Description        |
|--------------|----------|--------------------|
| id (PK)      | BIGINT   | Assessment ID      |
| test_id      | BIGINT   | References Tests   |
| student_id   | BIGINT   | References Users   |
| assigned_by   | BIGINT   | Created by user    |
| assigned_at   | DATETIME | Created time       |
| scheduled_at | DATETIME | Scheduled time     |
| status       | Boolean  | True / False       |

---

## 29. Table: student_assessment_results

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| student_id | INT (FK) | Student reference |
| assessment_id | INT (FK) | Assessment reference |
| score | FLOAT | Marks scored |
| percentile | FLOAT | Percentile |
| time_taken_minutes | INT | Time taken |

---

🔹 10. Mentorship

## 30. Table: mentor_appointments

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| student_id | INT (FK) | Student |
| mentor_id | INT (FK) | Mentor |
| appointment_date | DATE | Date |
| start_time | TIME | Start time |
| status | ENUM | SCHEDULED / CANCELLED / COMPLETED |
| meeting_link | VARCHAR(255) | Meeting link |
| agenda | TEXT | Purpose |
| created_at | DATETIME | Created |
| updated_at | DATETIME | Updated |

---

## 31. Table: mentor_feedbacks

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| student_id | BIGINT (FK) | Student |
| rating | INT | Rating |
| review_text | TEXT | Feedback |
| created_at | DATETIME | Created |
| status | BOOLEAN | True / False |

---

## 32. Mentor Counselings

| Column Name      | Data Type | Description      |
|-----------------|----------|------------------|
| id (PK)         | INT      | Session ID       |
| mentor_id       | INT      | Mentor           |
| mentee_id       | INT      | Mentee           |
| description     | VARCHAR  | Description      |
| subject         | VARCHAR  | Subject          |
| meeting_link    | VARCHAR  | Meeting link     |
| counseling_date | DATETIME| Session date     |
| remark          | VARCHAR  | Remark           |

---

🔹 11. Learning Progress

##  33. Table: learning_paths

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| title | VARCHAR(200) | Title |
| description | TEXT | Details |
| duration | INT | Duration |
| total_modules | INT | Modules |
| status | BOOLEAN | True / False |
| created_at | DATETIME | Created |
| updated_at | DATETIME | Updated |

---

## 34. Table: learning_path_progress

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| student_id | BIGINT (UNIQUE) | Student |
| overall_score | DECIMAL(6,2) | Score |
| average_percentage | DECIMAL(6,2) | Avg |
| improvement_rate | DECIMAL(5,2) | Improvement |
| performance_level_id | BIGINT (FK) | Level |
| min_score | INT | Min |
| max_score | INT | Max |

---

## 35. Table: student_concept_progress

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| student_id | BIGINT (FK) | Student |
| concept_id | BIGINT (FK) | Concept |
| status | ENUM | In_progress / Pending /Completed |
| initiated_at | DATETIME | Start |
| completed_at | DATETIME | End |

---

🔹 12. Projects

## 36. Table: projects

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| project_id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| project_name | VARCHAR(255) | Name |
| description | TEXT | Details |
| repository_url | VARCHAR(255) | Repo |
| status | ENUM | In_progress / Pending /Completed |
| created_at | DATETIME | Created |

---

## 37. Table: project_members

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| project_id | BIGINT (FK) | Project |
| student_id | BIGINT (FK) | Student |
| joined_date | DATETIME | Joining date |

---

🔹 13. Job System


## 38. Job Descriptions Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| job_id     | BIGINT   | Job ID             |
| employer_id| BIGINT   | Employer (User ID) |
| title      | VARCHAR  | Job title          |
| description| TEXT     | Description        |
| location   | VARCHAR  | Location           |
| job_type   | VARCHAR  | Full/Part-time     |

---

## 39. Job Applications Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| id (PK)    | INT      | Application ID     |
| job_id     | INT      | References Job     |
| student_id | INT      | References Users   |
| status     | Boolean  | True / False             |
| updated_at | DATETIME | Updated time       |
| applied_at | DATETIME | Applied time       |

---


## 40. Interviews Table

| Column Name     | Data Type | Description        |
|----------------|----------|--------------------|
| interview_id   | INT      | Interview ID       |
| application_id | INT      | Job Application    |
| scheduled_at   | DATETIME | Scheduled time     |
| rescheduled_at | DATETIME | Rescheduled time   |
| mode           | VARCHAR  | Mode               |
| status         | Boolean  | True / False       |
| remark         | TEXT     | Remarks            |
| outcome        | VARCHAR  | Final outcome      |
| created_at     | DATETIME | Created time       |

---

## 41. Table: shortlisted_candidates

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | User |
| job_id | BIGINT (FK) | Job |
| shortlisted_at | DATETIME | Time |
| round_level | VARCHAR(50) | Interview round |

---

🔹 14. Tracking & System

##  42. Table: notifications

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | User reference |
 notification_catagories_id | BIGINT (FK) | notification catagories reference |
| message | TEXT | Notification message |
| created_at | DATETIME | Created time |

---
## 43. Notification categories
| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID (auto-increment) |
| categories | VARCHAR(100) | Type of notification (e.g., SYSTEM, JOB, TEST, MESSAGE) |
| description | TEXT | Details about the category |

## 44. User Logs Table

| Column Name | Data Type | Description    |
|------------|----------|----------------|
| id (PK)    | BIGINT   | Log ID         |
| user_id    | BIGINT   | User reference |
| login_time | DATETIME | Login time     |
| logout_time| DATETIME | Logout time    |

---

## 45. Performance Snapshots Table

| Column Name      | Data Type | Description      |
|-----------------|----------|------------------|
| id (PK)         | INT      | Snapshot ID      |
| student_id      | INT      | User reference   |
| snapshot_date   | DATE     | Snapshot date    |
| performance_json| JSON     | Performance data |

---

🔹 15. Additional Learning / Oral

## 46. Learning Resources

| Column Name   | Data Type | Description                      |
|--------------|----------|----------------------------------|
| id (PK)      | INT      | Resource ID                      |
| title        | VARCHAR  | Title                            |
| description  | TEXT     | Description                      |
| resource_url | VARCHAR  | URL                              |
| type         | ENUM     | Resource type                    |
| uploaded_by  |   BIGINT | Uploaded by user_id (FK)         |
| created_at   | DATETIME | Created time                     |
| status       | BOOLEAN  | TRUE = active, FALSE = deprecated|

---

## 47. Oral Question Answers

| Column Name | Data Type | Description |
|------------|----------|-------------|
| id (PK)    | BIGINT   | ID          |
| questions  | TEXT     | Question    |
| student_id | BIGINT   | Student     |
| answer     | TEXT     | Answer      |
| rating     | Enum      | poor / good / very Good / excellent / worst|
| sme_id     | BIGINT   | SME         |
| remark     | VARCHAR  | Remark     |

---

## 48. Oral Assessments

| Column Name      | Data Type | Description  |
|-----------------|----------|--------------|
| id (PK)         | BIGINT   | ID           |
| student_id      | BIGINT   | Student ID   |
| sme_id          | BIGINT   | SME ID       |
| time_schedule_at| DATETIME | Schedule     |
| status          | ENUM     | In_progress / Pending /Completed |
| concept_id      | BIGINT   | Concept      |

---

