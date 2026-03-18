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