
create database tflcomentor_db;
use tflcomentor_db;
-- 1. Layers
CREATE TABLE layers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
    company_type ENUM(  'STARTUP','PRODUCT','SERVICE'),
    company_size VARCHAR(100),
    description TEXT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 5. Concepts
CREATE TABLE concepts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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


CREATE TABLE questions (
    question_id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT,
    question_type ENUM('MCQ','PROBLEM_STATEMENT','HANDS_ON'),
    difficulty_level ENUM('BEGINNER','INTERMEDIATE','ADVANCE'),
    created_at DATETIME,
    status BOOLEAN
);

-- 7. Personal Information
CREATE TABLE personal_informations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    full_name VARCHAR(255) 
        GENERATED ALWAYS AS (CONCAT(first_name, ' ', last_name)) STORED,
    gender ENUM('MALE','FEMALE'),
    date_of_birth DATE,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    pincode VARCHAR(10) , 
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 8. Academic Information
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

-- 9. User Roles
CREATE TABLE user_roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    role_id INT,
    assigned_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

-- 10. Mentor Mentees
CREATE TABLE mentor_mentees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    mentee_id INT,
    assigned_on DATE,
    FOREIGN KEY (mentor_id) REFERENCES users(id),
    FOREIGN KEY (mentee_id) REFERENCES users(id)
);

-- 11. Professional Information
CREATE TABLE professional_informations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    company_name VARCHAR(255),
    job_title VARCHAR(100),
    employment_type ENUM('FULL_TIME','PART_TIME', 'INTERNSHIP'),
    start_date DATE,
    end_date DATE,
    is_current_job BOOLEAN,
    experience_years INT,
    location VARCHAR(100),
    skills TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 12. Alumni
CREATE TABLE alumni (
    alumni_id INT PRIMARY KEY AUTO_INCREMENT,
    companies_id BIGINT,
    user_id INT,
    added_at DATETIME ,

    CONSTRAINT fk_alumni_company
        FOREIGN KEY (companies_id)
        REFERENCES companies(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_alumni_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 13. Referrals
CREATE TABLE referrals (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    companies_id INT,
    user_id INT,
    alumni_id INT,

    CONSTRAINT fk_referrals_company
        FOREIGN KEY (companies_id)
        REFERENCES companies(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_referrals_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_referrals_alumni
        FOREIGN KEY (alumni_id)
        REFERENCES alumni(alumni_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE languages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    language VARCHAR(100),
    runtime_id INT,
    FOREIGN KEY (runtime_id) REFERENCES runtimes(id)
);


-- 14. Frameworks
CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    layer_id BIGINT,
    language_id INT,
    created_at DATETIME ,
    updated_at DATETIME ,




    CONSTRAINT fk_frameworks_layer
        FOREIGN KEY (layer_id)
        REFERENCES layers(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_frameworks_language
        FOREIGN KEY (language_id)
        REFERENCES languages(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 15. Framework Concepts
CREATE TABLE framework_concepts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    framework_id INT,
    concept_id INT,

    CONSTRAINT fk_fc_framework
        FOREIGN KEY (framework_id)
        REFERENCES frameworks(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_fc_concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);



-- 17. Question Framework Concepts
CREATE TABLE question_framework_concepts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    framework_concepts_id BIGINT,

    CONSTRAINT fk_qfc_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_qfc_framework
        FOREIGN KEY (framework_concepts_id)
        REFERENCES framework_concepts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 18. Languages

-- 19. SME Runtimes
CREATE TABLE sme_runtimes (
    sme_runtime_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    runtime_id INT,

    CONSTRAINT fk_sme_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_sme_runtime
        FOREIGN KEY (runtime_id)
        REFERENCES runtimes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 20. Tests
CREATE TABLE tests (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  sme_id INT DEFAULT NULL,
  title VARCHAR(255) DEFAULT NULL,
  duration INT DEFAULT NULL,
  description TEXT,
  difficulty ENUM('BEGINNER','INTERMEDIATE','ADVANCED') DEFAULT NULL,
  created_at DATETIME ,
  status BOOLEAN DEFAULT TRUE,

  CONSTRAINT fk_tests_sme
    FOREIGN KEY (sme_id)
    REFERENCES users(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- 21. Test Questions
CREATE TABLE test_questions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT,
    question_id BIGINT,
    sequence_order INT,

    CONSTRAINT fk_tq_test
        FOREIGN KEY (test_id)
        REFERENCES tests(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_tq_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
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

    CONSTRAINT fk_mcq_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 23. Hands On
CREATE TABLE hands_on (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    user_id INT,
    description TEXT,
    duration INT,
    created_at DATETIME,

    CONSTRAINT fk_handson_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_handson_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 24. Hands On Submissions
CREATE TABLE hands_on_submissions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    hands_on_id BIGINT,
    user_id INT,
    github_link VARCHAR(255),
    submitted_at DATETIME ,

    CONSTRAINT fk_submission_handson
        FOREIGN KEY (hands_on_id)
        REFERENCES hands_on(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_submission_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 25. Hands On Results
CREATE TABLE hands_on_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    hands_on_id BIGINT,
    score INT,
    sme_id BIGINT,
    status BOOLEAN,
    submitted_at DATETIME ,

    CONSTRAINT fk_result_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_result_handson
        FOREIGN KEY (hands_on_id)
        REFERENCES hands_on(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_result_sme
        FOREIGN KEY (sme_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 26. Problem Statements
CREATE TABLE problem_statements (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    description TEXT,
    duration INT,

    CONSTRAINT fk_problem_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 27. Problem Statement Answers
CREATE TABLE problem_statement_answers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    answer TEXT,
    question_id BIGINT,
    submitted_at DATETIME,

    CONSTRAINT fk_psa_question
        FOREIGN KEY (question_id)
        REFERENCES questions(question_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 28. Assessments
CREATE TABLE assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT,
    student_id BIGINT,
    assigned_by BIGINT,
    assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    scheduled_at DATETIME,
    status ENUM('Assigned', 'Pending', 'Completed') NOT NULL DEFAULT 'Pending',

    CONSTRAINT fk_assessment_test
        FOREIGN KEY (test_id)
        REFERENCES tests(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_assessment_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_assessment_assigned_by
        FOREIGN KEY (assigned_by)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 29. Student Assessment Results
CREATE TABLE student_assessment_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    assessment_id BIGINT,
    score FLOAT,
    percentile FLOAT,
    time_taken_minutes INT,

    CONSTRAINT fk_result_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_result_assessment
        FOREIGN KEY (assessment_id)
        REFERENCES assessments(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 30. Mentor Appointments
CREATE TABLE mentor_appointments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    mentor_id BIGINT,
    appointment_date DATE,
    start_time TIME,
    status ENUM('SCHEDULED','CANCELLED','COMPLETED') DEFAULT 'SCHEDULED',
    meeting_link VARCHAR(255),
    agenda TEXT,
    created_at DATETIME ,
    updated_at DATETIME, 

    CONSTRAINT fk_appointment_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_appointment_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 31. Mentor Feedbacks
CREATE TABLE mentor_feedbacks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    student_id BIGINT,
    rating INT,
    review_text TEXT,
    created_at DATETIME ,
    status BOOLEAN ,

    CONSTRAINT fk_feedback_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_feedback_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 32. Mentor Counselings
CREATE TABLE mentor_counselings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    mentee_id BIGINT,
    description VARCHAR(255),
    subject VARCHAR(100),
    meeting_link VARCHAR(255),
    counseling_date DATETIME,
    remark VARCHAR(255),

    CONSTRAINT fk_counseling_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_counseling_mentee
        FOREIGN KEY (mentee_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 33. Learning Paths
CREATE TABLE learning_paths (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    title VARCHAR(200),
    description TEXT,
    duration INT,
    total_modules INT,
    status BOOLEAN DEFAULT TRUE,
    created_at DATETIME ,
    updated_at DATETIME,

    CONSTRAINT fk_learningpath_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 34. Learning Path Progress
CREATE TABLE learning_path_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    learning_path_id BIGINT,
    overall_score DECIMAL(6,2),
    average_percentage DECIMAL(6,2),
    improvement_rate DECIMAL(5,2),
    min_score INT,
    max_score INT,
  

    CONSTRAINT fk_progress_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_progress_path
        FOREIGN KEY (learning_path_id)
        REFERENCES learning_paths(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    UNIQUE (student_id, learning_path_id)
);

-- 35. Student Concept Progress
CREATE TABLE student_concept_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    concept_id BIGINT,
    status ENUM('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
    initiated_at DATETIME ,
    completed_at DATETIME,

    CONSTRAINT fk_scp_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_scp_concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 36. Projects
CREATE TABLE projects (
    project_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    project_name VARCHAR(255),
    description TEXT,
    repository_url VARCHAR(255),
    status ENUM('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
    created_at DATETIME ,

    CONSTRAINT fk_project_mentor
        FOREIGN KEY (mentor_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 37. Project Members
CREATE TABLE project_members (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    project_id BIGINT,
    student_id BIGINT,
    joined_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_pm_project
        FOREIGN KEY (project_id)
        REFERENCES projects(project_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_pm_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 38. Job Descriptions
CREATE TABLE job_descriptions (
    job_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employer_id BIGINT,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(100),
    job_type VARCHAR(50),

    CONSTRAINT fk_job_employer
        FOREIGN KEY (employer_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 39. Job Applications
CREATE TABLE job_applications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    job_id BIGINT,
    student_id BIGINT,
    status BOOLEAN,
    applied_at DATETIME ,
    updated_at DATETIME ,

    CONSTRAINT fk_app_job
        FOREIGN KEY (job_id)
        REFERENCES job_descriptions(job_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_app_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 40. Interviews
CREATE TABLE interviews (
    interview_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    application_id BIGINT,
    scheduled_at DATETIME,
    rescheduled_at DATETIME,
    mode VARCHAR(50),
    status BOOLEAN,
    remark TEXT,
    outcome VARCHAR(100),
    created_at DATETIME ,

    CONSTRAINT fk_interview_application
        FOREIGN KEY (application_id)
        REFERENCES job_applications(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 41. Shortlisted Candidates
CREATE TABLE shortlisted_candidates (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_id BIGINT,
    shortlisted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    round_level VARCHAR(50),

    CONSTRAINT fk_sc_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_sc_job
        FOREIGN KEY (job_id)
        REFERENCES job_descriptions(job_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 42. Notifications
CREATE TABLE notifications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    notification_categories_id BIGINT,
    message TEXT,
    created_at DATETIME ,

    CONSTRAINT fk_notification_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_notification_category
        FOREIGN KEY (notification_categories_id)
        REFERENCES notification_categories(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 43. Notification Categories
CREATE TABLE notification_categories (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    description TEXT,

    UNIQUE (category)
);

-- 44. User Logs
CREATE TABLE user_logs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    login_time DATETIME ,
    logout_time DATETIME,

    CONSTRAINT fk_user_logs_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- 45. Performance Snapshots
CREATE TABLE performance_snapshots (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    snapshot_date DATE,
    performance_json JSON,

    CONSTRAINT fk_snapshot_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    UNIQUE (student_id, snapshot_date)
);

-- 46. Learning Resources
CREATE TABLE learning_resources (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    resource_url VARCHAR(255),
    type ENUM('VIDEO','DOC','LINK'),
    uploaded_by BIGINT,
    status ENUM('ACTIVE','INACTIVE','ARCHIVED') DEFAULT 'ACTIVE',
    created_at DATETIME ,

    CONSTRAINT fk_resource_user
        FOREIGN KEY (uploaded_by)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 47. Oral Question Answers
CREATE TABLE oral_question_answers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    questions TEXT,
    student_id BIGINT,
    answer TEXT,
    rating ENUM('POOR','AVERAGE','GOOD','VERY_GOOD','EXCELLENT'),
    sme_id BIGINT,
    remark VARCHAR(255),
   

    CONSTRAINT fk_oqa_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_oqa_sme
        FOREIGN KEY (sme_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- 48. Oral Assessments
CREATE TABLE oral_assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    sme_id BIGINT,
    concept_id BIGINT,
    time_schedule_at DATETIME,
    status ENUM('PENDING','IN_PROGRESS','COMPLETED') DEFAULT 'PENDING',
  
    CONSTRAINT fk_oa_student
        FOREIGN KEY (student_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_oa_sme
        FOREIGN KEY (sme_id)
        REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_oa_concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);