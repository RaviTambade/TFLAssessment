## Insight Core

Below is a **clean MySQL DDL script for 30 core tables** of the **TFLCoMentor Skill Graph Platform**.


Domains:

1️⃣ Identity & Profiles
2️⃣ Skill Graph
3️⃣ Learning System
4️⃣ Practice & Assessment
5️⃣ Mentoring
6️⃣ Projects
7️⃣ Hiring & Talent Discovery


# 🧩 1. Identity & User Management (5 tables)

```sql
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role ENUM('student','mentor','sme','employer','admin'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    institute VARCHAR(200),
    graduation_year INT,
    city VARCHAR(100),
    FOREIGN KEY (student_id) REFERENCES users(user_id)
);

CREATE TABLE mentors (
    mentor_id INT PRIMARY KEY,
    expertise VARCHAR(200),
    experience_years INT,
    bio TEXT,
    FOREIGN KEY (mentor_id) REFERENCES users(user_id)
);

CREATE TABLE smes (
    sme_id INT PRIMARY KEY,
    domain VARCHAR(200),
    organization VARCHAR(200),
    FOREIGN KEY (sme_id) REFERENCES users(user_id)
);

CREATE TABLE employers (
    employer_id INT PRIMARY KEY,
    company_name VARCHAR(200),
    industry VARCHAR(150),
    company_size INT,
    FOREIGN KEY (employer_id) REFERENCES users(user_id)
);
```


# 🧠 2. Skill Graph Core (6 tables)

```sql
CREATE TABLE skills (
    skill_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(150),
    category VARCHAR(100),
    parent_skill_id INT,
    FOREIGN KEY (parent_skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE skill_relations (
    relation_id INT AUTO_INCREMENT PRIMARY KEY,
    parent_skill_id INT,
    child_skill_id INT,
    relation_type VARCHAR(50),
    FOREIGN KEY (parent_skill_id) REFERENCES skills(skill_id),
    FOREIGN KEY (child_skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE student_skills (
    student_skill_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    skill_id INT,
    proficiency_score DECIMAL(5,2),
    confidence_score DECIMAL(5,2),
    last_updated TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE skill_evidence (
    evidence_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    skill_id INT,
    evidence_type VARCHAR(100),
    reference_id INT,
    score DECIMAL(5,2)
);

CREATE TABLE skill_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100)
);

CREATE TABLE skill_levels (
    level_id INT AUTO_INCREMENT PRIMARY KEY,
    level_name VARCHAR(50),
    description TEXT
);
```


# 📚 3. Learning System (5 tables)

```sql
CREATE TABLE learning_paths (
    path_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    description TEXT
);

CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    path_id INT,
    title VARCHAR(200),
    description TEXT,
    FOREIGN KEY (path_id) REFERENCES learning_paths(path_id)
);

CREATE TABLE modules (
    module_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    title VARCHAR(200),
    description TEXT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    module_id INT,
    resource_type VARCHAR(50),
    url TEXT,
    FOREIGN KEY (module_id) REFERENCES modules(module_id)
);

CREATE TABLE student_courses (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    progress_percent INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```

# 🧪 4. Practice & Assessment (6 tables)

```sql
CREATE TABLE practice_labs (
    lab_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT,
    title VARCHAR(200),
    difficulty_level INT,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE practice_attempts (
    attempt_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    lab_id INT,
    score DECIMAL(5,2),
    attempt_date TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (lab_id) REFERENCES practice_labs(lab_id)
);

CREATE TABLE question_bank (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT,
    question_text TEXT,
    difficulty_level INT,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE assessments (
    assessment_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    skill_id INT,
    difficulty_level INT,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE assessment_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    assessment_id INT,
    question_id INT,
    FOREIGN KEY (assessment_id) REFERENCES assessments(assessment_id),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE test_attempts (
    attempt_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    assessment_id INT,
    score DECIMAL(5,2),
    completed_at TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (assessment_id) REFERENCES assessments(assessment_id)
);
```

# 👨‍🏫 5. Mentoring System (3 tables)

```sql
CREATE TABLE mentoring_sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id INT,
    student_id INT,
    topic VARCHAR(200),
    session_date TIMESTAMP,
    notes TEXT,
    FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE mentor_feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id INT,
    student_id INT,
    skill_id INT,
    rating DECIMAL(5,2),
    comments TEXT,
    FOREIGN KEY (mentor_id) REFERENCES mentors(mentor_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE mentor_student_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_id INT,
    student_id INT,
    assigned_date DATE
);
```

# 💻 6. Projects (3 tables)

```sql
CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT,
    title VARCHAR(200),
    description TEXT,
    difficulty_level INT,
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE project_submissions (
    submission_id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT,
    student_id INT,
    github_url VARCHAR(300),
    mentor_rating DECIMAL(5,2),
    submitted_at TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(project_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE project_reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT,
    reviewer_id INT,
    comments TEXT,
    rating DECIMAL(5,2)
);
```

# 🧑‍💼 7. Talent Discovery / Hiring (4 tables)

```sql
CREATE TABLE job_roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(200),
    description TEXT
);

CREATE TABLE job_role_skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_id INT,
    skill_id INT,
    required_level INT,
    FOREIGN KEY (role_id) REFERENCES job_roles(role_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

CREATE TABLE job_posts (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    employer_id INT,
    role_id INT,
    location VARCHAR(150),
    description TEXT,
    FOREIGN KEY (employer_id) REFERENCES employers(employer_id),
    FOREIGN KEY (role_id) REFERENCES job_roles(role_id)
);

CREATE TABLE job_applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    student_id INT,
    status VARCHAR(50),
    applied_at TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES job_posts(job_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```

# 📊 Final Table Count

| Domain                | Tables |
| --------------------- | ------ |
| Identity              | 5      |
| Skill Graph           | 6      |
| Learning              | 5      |
| Practice & Assessment | 6      |
| Mentoring             | 3      |
| Projects              | 3      |
| Hiring                | 4      |

Total:

```
30 Tables
```

# 🚀 This Schema Supports

Complete **Skill Intelligence Platform**

```text
Student Learning
      ↓
Practice Labs
      ↓
Assessments
      ↓
Projects
      ↓
Mentor Feedback
      ↓
Skill Graph Update
      ↓
Employer Talent Discovery
```

