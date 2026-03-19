# 📘 Database Schema Documentation

---

## 1. Users Table
Stores all user information.

| Column Name | Data Type    | Description                 |
|------------|-------------|-----------------------------|
| id (PK)    | INT         | Unique user ID              |
| contact    | VARCHAR(15) | Contact number              |
| password   | TEXT        | Encrypted password          |
| status     | ENUM        | ACTIVE / INACTIVE / BLOCKED |
| created_at | TIMESTAMP   | Record creation time        |
| updated_at | TIMESTAMP   | Last updated time           |

---

## 2. Personal Information Table

| Column Name    | Data Type | Description            |
|---------------|----------|------------------------|
| id (PK)       | INT      | Primary key            |
| user_id (FK)  | INT      | References Users(id)   |
| first_name    | VARCHAR  | First name             |
| last_name     | VARCHAR  | Last name              |
| gender        | VARCHAR  | Gender                 |
| date_of_birth | DATE     | Date of birth          |
| email         | VARCHAR  | Email                  |
| address       | VARCHAR  | Address                |
| city          | VARCHAR  | City                   |
| state         | VARCHAR  | State                  |

---

## 3. Academic Information Table

| Column Name      | Data Type | Description          |
|-----------------|----------|----------------------|
| id (PK)         | INT      | Primary key          |
| user_id (FK)    | INT      | References Users(id) |
| stream_name     | VARCHAR  | Stream name          |
| specialization  | VARCHAR  | Specialization       |
| enrollment_year | INT      | Enrollment year      |
| passing_year    | INT      | Passing year         |
| percentage      | DECIMAL  | Percentage           |
| cgpa            | DECIMAL  | CGPA                 |
| college_name    | VARCHAR  | College name         |

---

## 4. Roles Table

| Column Name   | Data Type     | Description      |
|--------------|--------------|------------------|
| role_id (PK) | INT          | Unique role ID   |
| role_name    | VARCHAR(100) | Role name        |
| description  | TEXT         | Description      |

---

## 5. User_Roles Table

| Column Name   | Data Type | Description                  |
|--------------|----------|------------------------------|
| id (PK)      | INT      | Mapping ID                   |
| user_id (FK) | INT      | References Users(id)         |
| role_id (FK) | INT      | References Roles(role_id)    |
| assigned_at  | TIMESTAMP| Role assigned time           |

---

## 6. Professional Information Table

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

## 7. Mentor_Mentee Table

| Column Name  | Data Type | Description              |
|-------------|----------|--------------------------|
| id (PK)     | INT      | Mapping ID               |
| mentor_id   | INT (FK) | References Users(id)     |
| mentee_id   | INT (FK) | References Users(id)     |
| assigned_on | DATE     | Assignment date          |

---

## 8. Tests Table

| Column Name | Data Type | Description        |
|-------------|----------|--------------------|
| id (PK)     | BIGINT   | Test ID            |
| sme_id      | BIGINT   | SME (User ID)      |
| title       | VARCHAR  | Test title         |
| duration    | INT      | Duration (minutes) |
| description | TEXT     | Description        |
| difficulty  | VARCHAR  | Easy/Medium/Hard   |
| created_at  | DATETIME | Created timestamp  |
| status      | VARCHAR  | DRAFT / ACTIVE     |

---

## 9. Assessment Table

| Column Name   | Data Type | Description        |
|--------------|----------|--------------------|
| id (PK)      | BIGINT   | Assessment ID      |
| test_id      | BIGINT   | References Tests   |
| student_id   | BIGINT   | References Users   |
| created_by   | BIGINT   | Created by user    |
| created_at   | DATETIME | Created time       |
| modify_by    | BIGINT   | Modified by        |
| modify_on    | DATETIME | Modified time      |
| scheduled_at | DATETIME | Scheduled time     |
| duration     | INT      | Duration (minutes) |
| status       | VARCHAR  | Status             |

---

## 10. Companies Table

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

## 11. Concepts Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| id (PK)    | BIGINT   | Concept ID         |
| name       | VARCHAR  | Concept name       |
| description| TEXT     | Description        |
| status     | VARCHAR  | Status             |
| created_at | DATETIME | Created time       |

---

## 12. Runtimes Table

| Column Name  | Data Type | Description     |
|--------------|----------|-----------------|
| id (PK)      | INT      | Runtime ID      |
| runtime_name | VARCHAR  | Runtime name    |

---

## 13. Languages Table

| Column Name   | Data Type | Description        |
|--------------|----------|--------------------|
| id (PK)      | INT      | Language ID        |
| language     | VARCHAR  | Language name      |
| runtime_id   | INT (FK) | References Runtime |

---

## 14. Test Questions Table

| Column Name     | Data Type | Description        |
|----------------|----------|--------------------|
| id (PK)        | INT      | Unique ID          |
| test_id        | BIGINT   | References Tests   |
| question_id    | BIGINT   | References Question|
| sequence_order | INT      | Order              |

---

## 15. MCQ Question Options

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

## 16. Questions Table

| Column Name       | Data Type | Description        |
|------------------|----------|--------------------|
| question_id (PK) | BIGINT   | Question ID        |
| concept_id       | INT (FK) | References Concept |
| description      | TEXT     | Question text      |
| question_type    | ENUM     | Type               |
| difficulty_level | VARCHAR  | Difficulty         |
| created_at       | TIMESTAMP| Created time       |
| status           | VARCHAR  | Status             |

---

## 17. Job Description Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| job_id     | BIGINT   | Job ID             |
| employer_id| BIGINT   | Employer (User ID) |
| title      | VARCHAR  | Job title          |
| description| TEXT     | Description        |
| location   | VARCHAR  | Location           |
| job_type   | VARCHAR  | Full/Part-time     |

---

## 18. Job Application Table

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| id (PK)    | INT      | Application ID     |
| job_id     | INT      | References Job     |
| student_id | INT      | References Users   |
| status     | VARCHAR  | Status             |
| updated_at | DATETIME | Updated time       |
| applied_at | DATETIME | Applied time       |

---

## 19. Interview Table

| Column Name     | Data Type | Description        |
|----------------|----------|--------------------|
| interview_id   | INT      | Interview ID       |
| application_id | INT      | Job Application    |
| scheduled_at   | DATETIME | Scheduled time     |
| rescheduled_at | DATETIME | Rescheduled time   |
| mode           | VARCHAR  | Mode               |
| status         | VARCHAR  | Status             |
| remark         | TEXT     | Remarks            |
| outcome        | VARCHAR  | Final outcome      |
| created_at     | DATETIME | Created time       |

---

## 20. User Logs Table

| Column Name | Data Type | Description    |
|------------|----------|----------------|
| id (PK)    | BIGINT   | Log ID         |
| user_id    | BIGINT   | User reference |
| login_time | DATETIME | Login time     |
| logout_time| DATETIME | Logout time    |

---

## 21. Performance Snapshot Table

| Column Name      | Data Type | Description      |
|-----------------|----------|------------------|
| id (PK)         | INT      | Snapshot ID      |
| student_id      | INT      | User reference   |
| snapshot_date   | DATE     | Snapshot date    |
| performance_json| JSON     | Performance data |

---

## 22. Learning Resources

| Column Name   | Data Type | Description                      |
|--------------|----------|----------------------------------|
| id (PK)      | INT      | Resource ID                      |
| title        | VARCHAR  | Title                            |
| description  | TEXT     | Description                      |
| resource_url | VARCHAR  | URL                              |
| type         | ENUM     | Resource type                    |
| uploaded_by  | BIGINT   | Uploaded by user                 |
| created_at   | DATETIME | Created time                     |
| status       | BOOLEAN  | TRUE = active, FALSE = deprecated|

---

## 23. Mentor Counseling

| Column Name      | Data Type | Description      |
|-----------------|----------|------------------|
| id (PK)         | INT      | Session ID       |
| mentor_id       | INT      | Mentor           |
| mentee_id       | INT      | Mentee           |
| description     | VARCHAR  | Description      |
| subject         | VARCHAR  | Subject          |
| meeting_link    | VARCHAR  | Meeting link     |
| counseling_date | TIMESTAMP| Session date     |
| remark          | VARCHAR  | Remark           |

---

## 24. Oral Question Answer

| Column Name | Data Type | Description |
|------------|----------|-------------|
| id (PK)    | BIGINT   | ID          |
| questions  | TEXT     | Question    |
| student_id | BIGINT   | Student     |
| answer     | TEXT     | Answer      |
| rating     | INT      | Rating      |
| sme_id     | BIGINT   | SME         |

---

## 25. Problem Statement

| Column Name | Data Type | Description |
|------------|----------|-------------|
| id (PK)    | BIGINT   | ID          |
| statement  | TEXT     | Statement   |
| description| TEXT     | Description |
| duration   | INT      | Duration    |
| created_by | BIGINT   | Created by  |

---

## 26. Oral Assessment

| Column Name      | Data Type | Description  |
|-----------------|----------|--------------|
| id (PK)         | BIGINT   | ID           |
| student_id      | BIGINT   | Student ID   |
| sme_id          | BIGINT   | SME ID       |
| time_schedule_at| DATETIME | Schedule     |
| status          | VARCHAR  | Status       |
| concept_id      | BIGINT   | Concept      |
# 📘 Final Ordered Tables with Sequence (Continued)

---

## 🟦 27. Table: layers
**Description:** Stores layer information.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique identifier |
| layers | VARCHAR(50) | Name of the layer |

---

## 🟦 28. Table: frameworks

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| name | VARCHAR(100) | Framework name |
| layer_id   | (FK)     | 
| created_at | DATETIME | Created |
| updated_at | DATETIME | Updated |

---

## 🟦 29. Table: frameworks_concepts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| framework_id | INT (FK) | Framework |
| concept_id | INT (FK) | Concept |

---

## 🟦 30. Table: questions_concepts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| question_concept_mapping_id | BIGINT (PK) | Unique ID |
| question_id | BIGINT (FK) | Question |
| concept_id | BIGINT (FK) | Concept |

---

## 🟦 31. Table: question_framework_concepts

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| question_id | BIGINT (FK) | Question |
| framework_concepts_id | BIGINT (FK) | Mapping |

---

## 🟦 32. Table: hands_on
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

## 🟦 33. Table: hands_on_submission
**Description:** Stores student submissions.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Primary key |
| hands_on_id | BIGINT (FK) | Reference to hands_on |
| user_id | BIGINT (FK) | Reference to user |
| github_link | VARCHAR(255) | GitHub submission link |
| submitted_at | DATETIME | Submission time |

---

## 🟦 34. Table: hands_on_results

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| user_id | INT (FK) | User |
| hands_on_id | INT (FK) | Hands-on |
| score | INT | Marks |
| sme_id | BIGINT (FK) | SME reference |
| status | VARCHAR(50) | Completed / Pending |
| submitted_at | DATETIME | Submission time |

---

## 🟦 35. Table: problem_statement_answer

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| answer | TEXT | Submitted answer |
| question_id | BIGINT (FK) | Reference to problem_statement |
| submitted_at | DATETIME | Submission time |

---

## 🟦 36. Table: assessments

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| test_id | BIGINT (FK) | Test |
| student_id | BIGINT (FK) | Student |
| created_by | BIGINT (FK) | Creator |
| created_on | DATETIME | Created |
| modify_by | BIGINT (FK) | Modifier |
| modify_on | DATETIME | Modified |
| schedule_start | DATETIME | Start |
| schedule_end | DATETIME | End |
| status | VARCHAR(50) | Status |

---

## 🟦 37. Table: student_assessment_result

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | INT (PK) | Unique ID |
| student_id | INT (FK) | Student reference |
| assessment_id | INT (FK) | Assessment reference |
| score | FLOAT | Marks scored |
| percentile | FLOAT | Percentile |
| time_taken_minutes | INT | Time taken |

---

## 🟦 38. Table: mentor_appointment

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
| created_at | TIMESTAMP | Created |
| updated_at | TIMESTAMP | Updated |

---

## 🟦 39. Table: mentor_feedbacks

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| student_id | BIGINT (FK) | Student |
| rating | INT | Rating |
| review_text | TEXT | Feedback |
| created_at | TIMESTAMP | Created |
| status | ENUM | ACTIVE / HIDDEN |

---

## 🟦 40. Table: learning_paths

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| learning_track_id | BIGINT (FK) | Track |
| title | VARCHAR(200) | Title |
| description | TEXT | Details |
| duration | INT | Duration |
| total_modules | INT | Modules |
| status | ENUM | ACTIVE / INACTIVE |
| created_at | TIMESTAMP | Created |
| updated_at | TIMESTAMP | Updated |

---

## 🟦 41. Table: learning_path_progress

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

## 🟦 42. Table: student_concept_progress

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| student_id | BIGINT (FK) | Student |
| concept_id | BIGINT (FK) | Concept |
| status | VARCHAR(50) | Progress |
| initiated_at | DATETIME | Start |
| completed_at | DATETIME | End |

---

## 🟦 43. Table: projects

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| project_id | BIGINT (PK) | Unique ID |
| mentor_id | BIGINT (FK) | Mentor |
| project_name | VARCHAR(255) | Name |
| description | TEXT | Details |
| repository_url | VARCHAR(255) | Repo |
| status | VARCHAR(50) | Status |
| created_at | TIMESTAMP | Created |

---

## 🟦 44. Table: project_members

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| project_id | BIGINT (FK) | Project |
| student_id | BIGINT (FK) | Student |
| joined_date | DATETIME | Joining date |

---

## 🟦 45. Table: alumni

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| alumni_id | BIGINT (PK) | Unique ID |
| company_id | BIGINT (FK) | Company |
| user_id | BIGINT (FK) | User |
| added_at | DATETIME | Added time |

---

## 🟦 46. Table: company_alumni

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| company_id | BIGINT (FK) | Company |
| alumni_id | BIGINT (FK) | Alumni |
| added_at | DATETIME | Added time |

---

## 🟦 47. Table: referrals

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| company_id | BIGINT (FK) | Company |
| user_id | BIGINT (FK) | Candidate |
| alumni_id | BIGINT (FK) | Alumni |

---

## 🟦 48. Table: shortlisted_candidates

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | User |
| job_id | BIGINT (FK) | Job |
| shortlisted_at | DATETIME | Time |
| round_level | VARCHAR(50) | Interview round |

---

## 🟦 49. Table: notification

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | User reference |
| message | TEXT | Notification message |
| source | VARCHAR(100) | Source |
| created_at | DATETIME | Created time |

---

## 🟦 50. Table: sme_runtime

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| sme_runtime_id | BIGINT (PK) | Unique ID |
| user_id | BIGINT (FK) | SME reference |
| runtime_id | BIGINT (FK) | Runtime reference |

---

# ✅ End of Schema
