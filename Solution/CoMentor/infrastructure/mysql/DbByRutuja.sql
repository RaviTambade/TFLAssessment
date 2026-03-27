
CREATE DATABASE IF NOT EXISTS tflcomentor_db;
USE tflcomentor_db;

-- 1. Layers
CREATE TABLE layers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    layers VARCHAR(50)
);

-- 2. Roles
CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(100)  NOT NULL,
    description TEXT
);

-- 3. Runtimes
CREATE TABLE runtimes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    runtime_name VARCHAR(100) NOT NULL
);

-- 4. Companies
CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    industry VARCHAR(100),   
    company_type ENUM('STARTUP','PRODUCT','SERVICE'),
    company_size VARCHAR(100),
    description TEXT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 5. Concepts
CREATE TABLE concepts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)  NOT NULL,
    description TEXT,
    status BOOLEAN,
    created_at DATETIME
);

-- 6. Users
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    contact VARCHAR(15),
    password TEXT,
    status ENUM('ACTIVE','INACTIVE','BLOCKED'),
    created_at DATETIME,
    updated_at DATETIME
);

-- 7. Questions
CREATE TABLE questions (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT,
    question_type ENUM('MCQ','PROBLEM_STATEMENT','HANDS_ON'),
    difficulty_level ENUM('BEGINNER','INTERMEDIATE','ADVANCE'),
    created_at DATETIME,
    status ENUM('APPROVED','DRAFT','INACTIVE') NOT NULL DEFAULT 'DRAFT'
);

-- 8. Personal Information
CREATE TABLE personal_informations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    full_name VARCHAR(255) GENERATED ALWAYS AS (CONCAT(first_name, ' ', last_name)) STORED,
    gender ENUM('MALE','FEMALE'),
    date_of_birth DATE,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    pincode VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 9. Academic Information
CREATE TABLE academic_informations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    stream_name VARCHAR(100),
    specialization VARCHAR(100),
    enrollment_year INT,
    passing_year INT,
    percentage DECIMAL(5,2),
    college_name VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- 10. User Roles
CREATE TABLE user_roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    role_id INT,
    assigned_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id) ,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) 
);

-- 11. Mentor Mentees
CREATE TABLE mentor_mentees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    mentee_id INT,
    assigned_on DATE,
    FOREIGN KEY (mentor_id) REFERENCES users(id) ,
    FOREIGN KEY (mentee_id) REFERENCES users(id)
);

-- 12. Professional Information
CREATE TABLE professional_informations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    company_name VARCHAR(255),
    job_title VARCHAR(100),
    employment_type ENUM('FULL_TIME','PART_TIME','INTERNSHIP'),
    start_date DATE,
    end_date DATE,
    is_current_job BOOLEAN,
    experience_years INT,
    location VARCHAR(100),
    skills TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)  
);

-- 13. Alumni
CREATE TABLE alumni (
    alumni_id INT PRIMARY KEY AUTO_INCREMENT,
    companies_id INT,
    user_id INT,
    added_at DATETIME,
    FOREIGN KEY (companies_id) REFERENCES companies(id) ,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 14. Referrals
CREATE TABLE referrals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    companies_id INT,
    user_id INT,
    alumni_id INT,
    FOREIGN KEY (companies_id) REFERENCES companies(id) ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (alumni_id) REFERENCES alumni(alumni_id)
);

-- 15. Languages
CREATE TABLE languages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    language VARCHAR(100),
    runtime_id INT,
    FOREIGN KEY (runtime_id) REFERENCES runtimes(id)
);

-- 16. Frameworks
CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    layer_id INT NULL,
    language_id INT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (layer_id) REFERENCES layers(id) ,
    FOREIGN KEY (language_id) REFERENCES languages(id)
);

-- 17. Framework Concepts
CREATE TABLE framework_concepts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    framework_id INT,
    concept_id INT,
    FOREIGN KEY (framework_id) REFERENCES frameworks(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (concept_id) REFERENCES concepts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 18. Question Framework Concepts
CREATE TABLE question_framework_concepts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    framework_concepts_id INT,
    FOREIGN KEY (question_id) REFERENCES questions(question_id),
    FOREIGN KEY (framework_concepts_id) REFERENCES framework_concepts(id) 
);

-- 19. SME Runtimes
CREATE TABLE sme_runtimes (
    sme_runtime_id INT PRIMARY KEY AUTO_INCREMENT,
    user_roles_id INT,
    runtime_id INT,
    FOREIGN KEY (user_roles_id) REFERENCES user_roles(id),
    FOREIGN KEY (runtime_id) REFERENCES runtimes(id)
);

-- 20. Tests
CREATE TABLE tests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sme_id INT NULL,
    title VARCHAR(255) DEFAULT NULL,
    duration INT DEFAULT NULL,
    description TEXT,
    difficulty ENUM('BEGINNER','INTERMEDIATE','ADVANCE') DEFAULT NULL,
    created_at DATETIME,
    status BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (sme_id) REFERENCES users(id) 
);

-- 21. Test Questions
CREATE TABLE test_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    test_id INT,
    question_id INT,
    sequence_order INT,
    FOREIGN KEY (test_id) REFERENCES tests(id),
    FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

-- 22. MCQ Options
CREATE TABLE mcq_options (
    id INT PRIMARY KEY AUTO_INCREMENT,
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_answer VARCHAR(10),
    question_id INT,
    FOREIGN KEY (question_id) REFERENCES questions(question_id) 
);

-- 23. Hands On Submissions
CREATE TABLE hands_on_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    user_id INT,
    github_link VARCHAR(255),
    submitted_at DATETIME,
    FOREIGN KEY (question_id) REFERENCES questions(question_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 24. Hands On Results
CREATE TABLE hands_on_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    question_id INT,
    score INT,
    sme_id INT NULL,
    status BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(question_id) ,
    FOREIGN KEY (sme_id) REFERENCES users(id) 
);

-- 25. Problem Statement Answers
CREATE TABLE problem_statement_answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    answer TEXT,
    question_id INT,
    submitted_at DATETIME,
    CONSTRAINT fk_psa_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
);

-- 26. Assessments
CREATE TABLE assessments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    test_id INT,
    student_id INT,
    assigned_by INT,
    assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    scheduled_at DATETIME,
    status ENUM('Assigned','Pending','Completed') NOT NULL DEFAULT 'Pending',
    CONSTRAINT fk_assessment_test
        FOREIGN KEY (test_id)
        REFERENCES tests(id),
    CONSTRAINT fk_assessment_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_assessment_assigned_by
        FOREIGN KEY (assigned_by)
        REFERENCES users(id)
);

-- 27. Student Assessment Results
CREATE TABLE student_assessment_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    assessment_id INT,
    score FLOAT,
    percentile FLOAT,
    time_taken_minutes INT,
    CONSTRAINT fk_result_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_result_assessment
        FOREIGN KEY (assessment_id)
        REFERENCES assessments(id)
);

-- 28. Mentor Appointments
CREATE TABLE mentor_appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    mentor_id INT,
    appointment_date DATE,
    start_time TIME,
    status ENUM('SCHEDULED','CANCELLED','COMPLETED') DEFAULT 'SCHEDULED',
    meeting_link VARCHAR(255),
    agenda TEXT,
    created_at DATETIME,
    updated_at DATETIME,
    CONSTRAINT fk_appointment_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_appointment_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
);

-- 29. Mentor Feedbacks
CREATE TABLE mentor_feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    student_id INT,
    rating INT,
    review_text TEXT,
    created_at DATETIME,
    status BOOLEAN,
    CONSTRAINT fk_feedback_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id),
    CONSTRAINT fk_feedback_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
);

-- 30. Mentor Counselings
CREATE TABLE mentor_counselings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    mentee_id INT,
    description VARCHAR(255),
    subject VARCHAR(100),
    meeting_link VARCHAR(255),
    counseling_date DATETIME,
    remark VARCHAR(255),
    CONSTRAINT fk_counseling_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id),
    CONSTRAINT fk_counseling_mentee
        FOREIGN KEY (mentee_id)
        REFERENCES users(id)
);

-- 31. Learning Paths
CREATE TABLE learning_paths (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    title VARCHAR(200),
    description TEXT,
    duration INT,
    total_modules INT,
    status BOOLEAN DEFAULT TRUE,
    created_at DATETIME,
    updated_at DATETIME,
    CONSTRAINT fk_learningpath_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)        
);

-- 32. Learning Path Progress
CREATE TABLE learning_path_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    learning_path_id INT,
    overall_score DECIMAL(6,2),
    average_percentage DECIMAL(6,2),
    improvement_rate DECIMAL(5,2),
    min_score INT,
    max_score INT,
    CONSTRAINT fk_progress_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_progress_path
        FOREIGN KEY (learning_path_id)
        REFERENCES learning_paths(id),
    UNIQUE(student_id, learning_path_id)
);

-- 33. Student Concept Progress
CREATE TABLE student_concept_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    concept_id INT,
    status ENUM('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
    initiated_at DATETIME,
    completed_at DATETIME,
    CONSTRAINT fk_scp_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_scp_concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
);

-- 34. Projects
CREATE TABLE projects (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    project_name VARCHAR(255),
    description TEXT,
    repository_url VARCHAR(255),
    status ENUM('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
    created_at DATETIME,
    CONSTRAINT fk_project_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
);

-- 35. Project Members
CREATE TABLE project_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT,
    student_id INT,
    joined_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_pm_project
        FOREIGN KEY (project_id)
        REFERENCES projects(project_id),
    CONSTRAINT fk_pm_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
);

-- 36. Job Descriptions
CREATE TABLE job_descriptions (
    job_id INT PRIMARY KEY AUTO_INCREMENT,
    employer_id INT,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(100),
    job_type VARCHAR(50),
    CONSTRAINT fk_job_employer
        FOREIGN KEY (employer_id)
        REFERENCES users(id)
);

-- 37. Job Applications
CREATE TABLE job_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    job_id INT,
    student_id INT,
    status BOOLEAN,
    applied_at DATETIME,
    updated_at DATETIME,
    CONSTRAINT fk_app_job
        FOREIGN KEY (job_id)
        REFERENCES job_descriptions(job_id),
    CONSTRAINT fk_app_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
);

-- 38. Interviews
CREATE TABLE interviews (
    interview_id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT,
    scheduled_at DATETIME,
    rescheduled_at DATETIME,
    mode VARCHAR(50),
    status BOOLEAN,
    remark TEXT,
    outcome VARCHAR(100),
    created_at DATETIME,
    CONSTRAINT fk_interview_application
        FOREIGN KEY (application_id)
        REFERENCES job_applications(id)
);

-- 39. Shortlisted Candidates
CREATE TABLE shortlisted_candidates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_id INT,
    shortlisted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    round_level VARCHAR(50),
    CONSTRAINT fk_sc_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),
    CONSTRAINT fk_sc_job
        FOREIGN KEY (job_id)
        REFERENCES job_descriptions(job_id)
);

-- 40. Notification Categories
CREATE TABLE notification_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    UNIQUE(category)
);

-- 41. Notifications
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    notification_categories_id INT,
    message TEXT,
    created_at DATETIME,
    CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),
    CONSTRAINT fk_notification_category
        FOREIGN KEY (notification_categories_id)
        REFERENCES notification_categories(id)
);


-- 42. User Logs
CREATE TABLE user_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    login_time DATETIME,
    logout_time DATETIME,
    CONSTRAINT fk_user_logs_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);

-- 43. Performance Snapshots
CREATE TABLE performance_snapshots (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    snapshot_date DATE,
    performance_json JSON,
    CONSTRAINT fk_snapshot_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    UNIQUE(student_id, snapshot_date)
);

-- 44. Learning Resources
CREATE TABLE learning_resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    resource_url VARCHAR(255),
    type ENUM('VIDEO','DOC','LINK'),
    uploaded_by INT,
    status ENUM('ACTIVE','INACTIVE','ARCHIVED') DEFAULT 'ACTIVE',
    created_at DATETIME,
    CONSTRAINT fk_resource_user
        FOREIGN KEY (uploaded_by)
        REFERENCES users(id)
);

-- 45. Oral Question Answers
CREATE TABLE oral_question_answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    questions TEXT,
    student_id INT,
    answer TEXT,
    rating ENUM('POOR','AVERAGE','GOOD','VERY_GOOD','EXCELLENT'),
    sme_id INT,
    remark VARCHAR(255),
    CONSTRAINT fk_oqa_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_oqa_sme
        FOREIGN KEY (sme_id)
        REFERENCES users(id)
);

-- 46. Oral Assessments
CREATE TABLE oral_assessments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    sme_id INT,
    concept_id INT,
    time_schedule_at DATETIME,
    status ENUM('PENDING','IN_PROGRESS','COMPLETED') DEFAULT 'PENDING',
    CONSTRAINT fk_oa_student
        FOREIGN KEY (student_id)
        REFERENCES users(id),
    CONSTRAINT fk_oa_sme
        FOREIGN KEY (sme_id)
        REFERENCES users(id),
    CONSTRAINT fk_oa_concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
);
