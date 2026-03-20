# 📚 Complete Database Schema (1–46)

---

## 🔹 1. Core Master Tables

## 1. Table: layers  
**Description:** Stores layer information.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT (PK) | Unique identifier |
| layers | VARCHAR(50) | Name of the layer |

---

## 2. Table: roles

| Column Name   | Data Type     | Description      |
|--------------|--------------|------------------|
| role_id (PK) | INT          | Unique role ID   |
| role_name    | VARCHAR(100) | Role name        |
| description  | TEXT         | Description      |

---

## 3. Table: runtimes

| Column Name  | Data Type | Description     |
|--------------|----------|-----------------|
| id (PK)      | INT      | Runtime ID      |
| runtime_name | VARCHAR  | Runtime name    |

---

## 4. Table: companies

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

## 5. Table: concepts

| Column Name | Data Type | Description        |
|------------|----------|--------------------|
| id (PK)    | BIGINT   | Concept ID         |
| name       | VARCHAR  | Concept name       |
| description| TEXT     | Description        |
| status     | VARCHAR  | Status             |
| created_at | DATETIME | Created time       |

---

## 🔹 2. User & Base System

## 6. Table: users

| Column Name | Data Type    | Description |
|------------|-------------|-------------|
| id (PK)    | INT         | Unique user ID |
| contact    | VARCHAR(15) | Contact number |
| password   | TEXT        | Encrypted password |
| status     | ENUM        | ACTIVE / INACTIVE / BLOCKED |
| created_at | DATETIME    | Created time |
| updated_at | DATETIME    | Updated time |

---

## 7. Table: personal_informations

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id (PK) | INT | Primary key |
| user_id (FK) | INT | References Users |
| first_name | VARCHAR | First name |
| last_name | VARCHAR | Last name |
| gender | VARCHAR | Gender |
| date_of_birth | DATE | DOB |
| email | VARCHAR | Email |
| address | VARCHAR | Address |
| city | VARCHAR | City |
| state | VARCHAR | State |

---

## 8. Table: academic_informations

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id (PK) | INT | Primary key |
| user_id | INT | User |
| stream_name | VARCHAR | Stream |
| specialization | VARCHAR | Specialization |
| enrollment_year | INT | Year |
| passing_year | INT | Year |
| percentage | DECIMAL | % |
| college_name | VARCHAR | College |

---

## 🔹 3. Role & Relationships

## 9. Table: user_roles

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id (PK) | INT | Mapping ID |
| user_id | INT | User |
| role_id | INT | Role |
| assigned_at | DATETIME | Assigned |

---

## 10. Table: mentor_mentees

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id (PK) | INT | Mapping ID |
| mentor_id | INT | Mentor |
| mentee_id | INT | Mentee |
| assigned_on | DATE | Date |

---

## 🔹 4. Professional & Alumni

## 11. Table: professional_informations

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | INT | PK |
| user_id | INT | User |
| company_name | VARCHAR | Company |
| job_title | VARCHAR | Title |
| employment_type | VARCHAR | Type |
| start_date | DATE | Start |
| end_date | DATE | End |
| is_current_job | BOOLEAN | Current |
| experience_years | INT | Exp |
| location | VARCHAR | Location |
| skills | TEXT | Skills |

---

## 12. Table: alumni

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| alumni_id | BIGINT | ID |
| company_id | BIGINT | Company |
| user_id | BIGINT | User |
| added_at | DATETIME | Time |

---

## 13. Table: referrals

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id | BIGINT | ID |
| company_id | BIGINT | Company |
| user_id | BIGINT | Candidate |
| alumni_id | BIGINT | Alumni |

---

## 🔹 9. Assessments

## 28. Table: assessments

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | BIGINT | ID |
| test_id | BIGINT | Test |
| student_id | BIGINT | Student |
| assigned_by | BIGINT | By |
| assigned_at | DATETIME | Time |
| scheduled_at | DATETIME | Schedule |
| status | BOOLEAN | Status |

---

## 29. Table: student_assessment_results

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | INT | ID |
| student_id | INT | Student |
| assessment_id | INT | Assessment |
| score | FLOAT | Score |
| percentile | FLOAT | Percentile |
| time_taken_minutes | INT | Time |

---

## 🔹 10. Mentorship

## 30. Table: mentor_appointments

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | INT | ID |
| student_id | INT | Student |
| mentor_id | INT | Mentor |
| appointment_date | DATE | Date |
| start_time | TIME | Start |
| status | ENUM | Status |
| meeting_link | VARCHAR | Link |
| agenda | TEXT | Agenda |
| created_at | DATETIME | Created |
| updated_at | DATETIME | Updated |

---

## 31. Table: mentor_feedbacks

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | BIGINT | ID |
| mentor_id | BIGINT | Mentor |
| student_id | BIGINT | Student |
| rating | INT | Rating |
| review_text | TEXT | Feedback |
| created_at | DATETIME | Created |
| status | BOOLEAN | Status |

---

## 32. Table: mentor_counselings

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | INT | ID |
| mentor_id | INT | Mentor |
| mentee_id | INT | Mentee |
| description | VARCHAR | Desc |
| subject | VARCHAR | Subject |
| meeting_link | VARCHAR | Link |
| counseling_date | DATETIME | Date |
| remark | VARCHAR | Remark |

---

## 🔹 14. Tracking & System

## 42. Table: notifications

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | BIGINT | ID |
| user_id | BIGINT | User |
| notification_categories_id | BIGINT | Category |
| message | TEXT | Message |
| created_at | DATETIME | Time |

---

## 43. Table: notification_categories

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | BIGINT | ID |
| categories | VARCHAR | Type |
| description | TEXT | Desc |

---

## 46. Table: learning_resources

| Column Name | Data Type | Description |
|-------------|----------|-------------|
| id | INT | ID |
| title | VARCHAR | Title |
| description | TEXT | Desc |
| resource_url | VARCHAR | URL |
| type | ENUM | Type |
| uploaded_by | BIGINT | User |
| created_at | DATETIME | Created |
| status | BOOLEAN | Status |

---

## 47. Table: oral_question_answers

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| id (PK)     | BIGINT    | Unique ID   |
| questions   | TEXT      | Question    |
| student_id  | BIGINT (FK) | Student reference |
| answer      | TEXT      | Answer      |
| rating      | ENUM      | poor / good / very_good / excellent / worst |
| sme_id      | BIGINT (FK) | SME reference |
| remark      | VARCHAR   | Remark      |

---

## 48. Table: oral_assessments

| Column Name       | Data Type | Description |
|------------------|-----------|-------------|
| id (PK)          | BIGINT    | Unique ID   |
| student_id       | BIGINT (FK) | Student reference |
| sme_id           | BIGINT (FK) | SME reference |
| time_schedule_at | DATETIME  | Schedule time |
| status           | ENUM      | In_progress / Pending / Completed |
| concept_id       | BIGINT (FK) | Concept reference |

---