
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
    role_name VARCHAR(100),
    description TEXT
);

-- 3. Runtimes
CREATE TABLE runtimes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    runtime_name VARCHAR(100)
);

-- 4. Companies
CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255),
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
    name VARCHAR(255),
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
    question_id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
    email VARCHAR(255),
    address VARCHAR(255),
    pincode VARCHAR(10)  
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
    alumni_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT,
    user_id BIGINT,
    added_at DATETIME
);

-- 13. Referrals
CREATE TABLE referrals (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    company_id BIGINT,
    user_id BIGINT,
    alumni_id BIGINT
);

-- 14. Frameworks
CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    layer_id BIGINT,
    language_id INT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 15. Framework Concepts
CREATE TABLE framework_concepts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    framework_id INT,
    concept_id INT
);



-- 17. Question Framework Concepts
CREATE TABLE question_framework_concepts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    framework_id BIGINT
);

-- 18. Languages
CREATE TABLE languages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    language VARCHAR(100),
    runtime_id INT,
    FOREIGN KEY (runtime_id) REFERENCES runtimes(id)
);

-- 19. SME Runtimes
CREATE TABLE sme_runtimes (
    sme_runtime_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    runtime_id BIGINT
);

-- 20. Tests
CREATE TABLE tests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sme_id BIGINT,
    title VARCHAR(255),
    duration INT,
    description TEXT,
    created_at DATETIME,
    status BOOLEAN
);

-- 21. Test Questions
CREATE TABLE test_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT,
    question_id BIGINT,
    sequence_order INT
);

-- 22. MCQ Options
CREATE TABLE mcq_options (
    id INT PRIMARY KEY AUTO_INCREMENT,
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_answer VARCHAR(10),
    question_id INT
);

-- 23. Hands On
CREATE TABLE hands_on (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    user_id BIGINT,
    description TEXT,
    duration INT,
    created_at DATETIME
);

-- 24. Hands On Submissions
CREATE TABLE hands_on_submissions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    hands_on_id BIGINT,
    user_id BIGINT,
    github_link VARCHAR(255),
    submitted_at DATETIME
);

-- 25. Hands On Results
CREATE TABLE hands_on_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    hands_on_id INT,
    score INT,
    sme_id BIGINT,
    status BOOLEAN,
    submitted_at DATETIME
);

-- 26. Problem Statements
CREATE TABLE problem_statements (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id INT,
    description TEXT,
    duration INT
);

-- 27. Problem Statement Answers
CREATE TABLE problem_statement_answers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    answer TEXT,
    question_id BIGINT,
    submitted_at DATETIME
);

-- 28. Assessments
CREATE TABLE assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT,
    student_id BIGINT,
    assigned_by BIGINT,
    assigned_at DATETIME,
    scheduled_at DATETIME,
    status ENUM('Assigned', 'Pending', 'Completed') NOT NULL DEFAULT 'Pending'
);

-- 29. Student Assessment Results
CREATE TABLE student_assessment_results (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    assessment_id INT,
    score FLOAT,
    percentile FLOAT,
    time_taken_minutes INT
);

-- 30. Mentor Appointments
CREATE TABLE mentor_appointments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    mentor_id INT,
    appointment_date DATE,
    start_time TIME,
    status ENUM('SCHEDULED','CANCELLED','COMPLETED'),
    meeting_link VARCHAR(255),
    agenda TEXT,
    created_at DATETIME,
    updated_at DATETIME
);

-- 31. Mentor Feedbacks
CREATE TABLE mentor_feedbacks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    student_id BIGINT,
    rating INT,
    review_text TEXT,
    created_at DATETIME,
    status BOOLEAN
);

-- 32. Mentor Counselings
CREATE TABLE mentor_counselings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    mentee_id INT,
    description VARCHAR(255),
    subject VARCHAR(100),
    meeting_link VARCHAR(255),
    counseling_date DATETIME,
    remark VARCHAR(255)
);

-- 33. Learning Paths
CREATE TABLE learning_paths (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    title VARCHAR(200),
    description TEXT,
    duration INT,
    total_modules INT,
    status BOOLEAN,
    created_at DATETIME,
    updated_at DATETIME
);

-- 34. Learning Path Progress
CREATE TABLE learning_path_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT UNIQUE,
    overall_score DECIMAL(6,2),
    average_percentage DECIMAL(6,2),
    improvement_rate DECIMAL(5,2),
    performance_level_id BIGINT,
    min_score INT,
    max_score INT
);

-- 35. Student Concept Progress
CREATE TABLE student_concept_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    concept_id BIGINT,
    status ENUM('In_progress','Pending','Completed'),
    initiated_at DATETIME,
    completed_at DATETIME
);

-- 36. Projects
CREATE TABLE projects (
    project_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    project_name VARCHAR(255),
    description TEXT,
    repository_url VARCHAR(255),
    status ENUM('In_progress','Pending','Completed'),
    created_at DATETIME
);

-- 37. Project Members
CREATE TABLE project_members (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    project_id BIGINT,
    student_id BIGINT,
    joined_date DATETIME
);

-- 38. Job Descriptions
CREATE TABLE job_descriptions (
    job_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employer_id BIGINT,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(100),
    job_type VARCHAR(50)
);

-- 39. Job Applications
CREATE TABLE job_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    job_id INT,
    student_id INT,
    status BOOLEAN,
    updated_at DATETIME,
    applied_at DATETIME
);

-- 40. Interviews
CREATE TABLE interviews (
    interview_id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT,
    scheduled_at DATETIME,
    rescheduled_at DATETIME,
    mode VARCHAR(50),
    status BOOLEAN,
    remark TEXT,
    outcome VARCHAR(100),
    created_at DATETIME
);

-- 41. Shortlisted Candidates
CREATE TABLE shortlisted_candidates (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    job_id BIGINT,
    shortlisted_at DATETIME,
    round_level VARCHAR(50)
);

-- 42. Notifications
CREATE TABLE notifications (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    notification_categories_id BIGINT,
    message TEXT,
    created_at DATETIME
);

-- 43. Notification Categories
CREATE TABLE notification_categories (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    categories VARCHAR(100),
    description TEXT
);

-- 44. User Logs
CREATE TABLE user_logs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    login_time DATETIME,
    logout_time DATETIME
);

-- 45. Performance Snapshots
CREATE TABLE performance_snapshots (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    snapshot_date DATE,
    performance_json JSON
);

-- 46. Learning Resources
CREATE TABLE learning_resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description TEXT,
    resource_url VARCHAR(255),
    type ENUM('VIDEO','DOC','LINK'),
    uploaded_by BIGINT,
    created_at DATETIME,
    status BOOLEAN
);

-- 47. Oral Question Answers
CREATE TABLE oral_question_answers (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    questions TEXT,
    student_id BIGINT,
    answer TEXT,
    rating ENUM('poor','good','very_good','excellent','worst'),
    sme_id BIGINT,
    remark VARCHAR(255)
);

-- 48. Oral Assessments
CREATE TABLE oral_assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    sme_id BIGINT,
    time_schedule_at DATETIME,
    status ENUM('In_progress','Pending','Completed'),
    concept_id BIGINT
);
