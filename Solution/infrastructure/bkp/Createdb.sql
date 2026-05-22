-- =============================================================
-- Database : tflcomentor_db
-- Source   : tflcomentor_db_2026_05_11.sql
-- Generated: 2026-05-11
-- Note     : Master tables first, then dependent tables ordered
--            by foreign-key dependency (topological sort)
-- =============================================================

-- -------------------------------------------------------------
-- CREATE DATABASE
-- -------------------------------------------------------------

CREATE DATABASE  IF NOT EXISTS `tflcomentor_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `tflcomentor_db`;

-- =============================================================
-- MASTER TABLES (8)  — no foreign-key dependencies
-- =============================================================

-- [01] companies
DROP TABLE IF EXISTS `companies`;
CREATE TABLE `companies` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `website` varchar(255) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `company_type` enum('STARTUP','PRODUCT','SERVICE') DEFAULT NULL,
  `company_size` varchar(100) DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- [02] concepts
DROP TABLE IF EXISTS `concepts`;
CREATE TABLE `concepts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- [03] notification_categories
DROP TABLE IF EXISTS `notification_categories`;
CREATE TABLE `notification_categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
);

-- [04] questions
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `question_id` bigint NOT NULL AUTO_INCREMENT,
  `description` text,
  `question_type` enum('MCQ','HANDS_ON','PROBLEM_STATEMENT') DEFAULT NULL,
  `difficulty_level` enum('BEGINNER','ADVANCE','INTERMEDIATE') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` enum('APPROVED','DRAFT','REJECTED') DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `layer` varchar(50) DEFAULT NULL,
  `framework` varchar(100) DEFAULT NULL,
  `concept` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
);

-- [05] roles
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `role_id` bigint NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`role_id`)
);


-- [07] studentanswers
DROP TABLE IF EXISTS `studentanswers`;
CREATE TABLE `studentanswers` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `StudentId` int NOT NULL,
  `AssessmentId` int NOT NULL,
  `QuestionId` int NOT NULL,
  `SelectedOption` varchar(255) DEFAULT NULL,
  `TimeTakenMinutes` int NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
);

-- [08] users
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `contact` varchar(15) DEFAULT NULL,
  `password` text,
  `status` enum('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- =============================================================
-- DEPENDENT TABLES (33)  — ordered by FK dependency
-- =============================================================

-- [09] academic_informations  (depends on: users)
DROP TABLE IF EXISTS `academic_informations`;
CREATE TABLE `academic_informations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `stream_name` varchar(100) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `enrollment_year` bigint DEFAULT NULL,
  `passing_year` bigint DEFAULT NULL,
  `percentage` decimal(5,2) DEFAULT NULL,
  `college_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `academic_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [10] alumni  (depends on: companies, users)
DROP TABLE IF EXISTS `alumni`;
CREATE TABLE `alumni` (
  `alumni_id` bigint NOT NULL AUTO_INCREMENT,
  `companies_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `added_at` datetime DEFAULT NULL,
  PRIMARY KEY (`alumni_id`),
  KEY `companies_id` (`companies_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `alumni_ibfk_1` FOREIGN KEY (`companies_id`) REFERENCES `companies` (`id`),
  CONSTRAINT `alumni_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [11] hands_on_results  (depends on: questions, users)
DROP TABLE IF EXISTS `hands_on_results`;
CREATE TABLE `hands_on_results` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `question_id` bigint DEFAULT NULL,
  `score` bigint DEFAULT NULL,
  `sme_id` bigint DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `question_id` (`question_id`),
  KEY `sme_id` (`sme_id`),
  CONSTRAINT `fk_question_results` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`),
  CONSTRAINT `hands_on_results_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `hands_on_results_ibfk_3` FOREIGN KEY (`sme_id`) REFERENCES `users` (`id`)
);

-- [12] hands_on_submissions  (depends on: questions, users)
DROP TABLE IF EXISTS `hands_on_submissions`;
CREATE TABLE `hands_on_submissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `question_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `github_link` varchar(255) DEFAULT NULL,
  `submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `fk_question_submissions` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`),
  CONSTRAINT `hands_on_submissions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [13] job_descriptions  (depends on: users)
DROP TABLE IF EXISTS `job_descriptions`;
CREATE TABLE `job_descriptions` (
  `job_id` bigint NOT NULL AUTO_INCREMENT,
  `employer_id` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `location` varchar(100) DEFAULT NULL,
  `job_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`job_id`),
  KEY `fk_job_employer` (`employer_id`),
  CONSTRAINT `fk_job_employer` FOREIGN KEY (`employer_id`) REFERENCES `users` (`id`)
);

-- [14] learning_paths  (depends on: users)
DROP TABLE IF EXISTS `learning_paths`;
CREATE TABLE `learning_paths` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text,
  `duration` int DEFAULT NULL,
  `total_modules` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_learningpath_mentor` (`mentor_id`),
  CONSTRAINT `fk_learningpath_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`)
);

-- [15] learning_resources  (depends on: users)
DROP TABLE IF EXISTS `learning_resources`;
CREATE TABLE `learning_resources` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `resource_url` varchar(255) DEFAULT NULL,
  `type` enum('VIDEO','DOC','LINK') DEFAULT NULL,
  `uploaded_by` bigint DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE','ARCHIVED') DEFAULT 'ACTIVE',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_resource_user` (`uploaded_by`),
  CONSTRAINT `fk_resource_user` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`)
);

-- [16] mcq_options  (depends on: questions)
DROP TABLE IF EXISTS `mcq_options`;
CREATE TABLE `mcq_options` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `option_a` varchar(255) DEFAULT NULL,
  `option_b` varchar(255) DEFAULT NULL,
  `option_c` varchar(255) DEFAULT NULL,
  `option_d` varchar(255) DEFAULT NULL,
  `correct_answer` varchar(10) DEFAULT NULL,
  `question_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `mcq_options_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`)
);

-- [17] mentor_appointments  (depends on: users)
DROP TABLE IF EXISTS `mentor_appointments`;
CREATE TABLE `mentor_appointments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `mentor_id` bigint DEFAULT NULL,
  `appointment_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `status` enum('SCHEDULED','CANCELLED','COMPLETED') DEFAULT 'SCHEDULED',
  `meeting_link` varchar(255) DEFAULT NULL,
  `agenda` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_appointment_student` (`student_id`),
  KEY `fk_appointment_mentor` (`mentor_id`),
  CONSTRAINT `fk_appointment_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_appointment_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [18] mentor_counselings  (depends on: users)
DROP TABLE IF EXISTS `mentor_counselings`;
CREATE TABLE `mentor_counselings` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `mentee_id` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `meeting_link` varchar(255) DEFAULT NULL,
  `counseling_date` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_counseling_mentor` (`mentor_id`),
  KEY `fk_counseling_mentee` (`mentee_id`),
  CONSTRAINT `fk_counseling_mentee` FOREIGN KEY (`mentee_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_counseling_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`)
);

-- [19] mentor_feedbacks  (depends on: users)
DROP TABLE IF EXISTS `mentor_feedbacks`;
CREATE TABLE `mentor_feedbacks` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review_text` text,
  `created_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_feedback_mentor` (`mentor_id`),
  KEY `fk_feedback_student` (`student_id`),
  CONSTRAINT `fk_feedback_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_feedback_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [20] mentor_mentees  (depends on: users)
DROP TABLE IF EXISTS `mentor_mentees`;
CREATE TABLE `mentor_mentees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `mentee_id` bigint DEFAULT NULL,
  `assigned_on` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mentor_id` (`mentor_id`),
  KEY `mentee_id` (`mentee_id`),
  CONSTRAINT `mentor_mentees_ibfk_1` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `mentor_mentees_ibfk_2` FOREIGN KEY (`mentee_id`) REFERENCES `users` (`id`)
);

-- [21] notifications  (depends on: notification_categories, users)
DROP TABLE IF EXISTS notifications;

CREATE TABLE notifications (
    id BIGINT NOT NULL AUTO_INCREMENT,

    user_id BIGINT DEFAULT NULL,

    notification_categories_id BIGINT DEFAULT NULL,

    recipient_type VARCHAR(50),

    recipient_id BIGINT,

    title VARCHAR(300),

    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at DATETIME DEFAULT NULL,

    PRIMARY KEY (id),

    KEY fk_notification_user (user_id),

    KEY fk_notification_category (notification_categories_id),

    KEY fk_notification_recipient (recipient_id),

    CONSTRAINT fk_notification_category
    FOREIGN KEY (notification_categories_id)
    REFERENCES notification_categories(id),

    CONSTRAINT fk_notification_user
    FOREIGN KEY (user_id)
    REFERENCES users(id),

    CONSTRAINT fk_notification_recipient
    FOREIGN KEY (recipient_id)
    REFERENCES users(id)
);
-- [22] oral_assessments  (depends on: concepts, users)
DROP TABLE IF EXISTS `oral_assessments`;
CREATE TABLE `oral_assessments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `sme_id` bigint DEFAULT NULL,
  `concept_id` bigint DEFAULT NULL,
  `time_schedule_at` datetime DEFAULT NULL,
  `status` enum('PENDING','IN_PROGRESS','COMPLETED') DEFAULT 'PENDING',
  PRIMARY KEY (`id`),
  KEY `fk_oa_student` (`student_id`),
  KEY `fk_oa_sme` (`sme_id`),
  KEY `fk_oa_concept` (`concept_id`),
  CONSTRAINT `fk_oa_concept` FOREIGN KEY (`concept_id`) REFERENCES `concepts` (`id`),
  CONSTRAINT `fk_oa_sme` FOREIGN KEY (`sme_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_oa_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [23] oral_question_answers  (depends on: users)
DROP TABLE IF EXISTS `oral_question_answers`;
CREATE TABLE `oral_question_answers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `questions` text,
  `student_id` bigint DEFAULT NULL,
  `answer` text,
  `rating` enum('POOR','AVERAGE','GOOD','VERY_GOOD','EXCELLENT') DEFAULT NULL,
  `sme_id` bigint DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_oqa_student` (`student_id`),
  KEY `fk_oqa_sme` (`sme_id`),
  CONSTRAINT `fk_oqa_sme` FOREIGN KEY (`sme_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_oqa_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [24] performance_snapshots  (depends on: users)
DROP TABLE IF EXISTS `performance_snapshots`;
CREATE TABLE `performance_snapshots` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `performance_json` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`,`snapshot_date`),
  CONSTRAINT `fk_snapshot_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [25] personal_informations  (depends on: users)
DROP TABLE IF EXISTS `personal_informations`;
CREATE TABLE `personal_informations` (
  `id` int NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `full_name` varchar(255) GENERATED ALWAYS AS (concat(`first_name`,_utf8mb4' ',`last_name`)) STORED,
  `gender` enum('MALE','FEMALE') DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `personal_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- [26] problem_statement_answers  (depends on: questions)
DROP TABLE IF EXISTS `problem_statement_answers`;
CREATE TABLE `problem_statement_answers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `answer` text,
  `question_id` bigint DEFAULT NULL,
  `submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_psa_question` (`question_id`),
  CONSTRAINT `fk_psa_question` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`)
);

-- [27] professional_informations  (depends on: users)
DROP TABLE IF EXISTS `professional_informations`;
CREATE TABLE `professional_informations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(100) DEFAULT NULL,
  `employment_type` enum('FULL_TIME','PART_TIME','INTERNSHIP') DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `is_current_job` tinyint(1) DEFAULT NULL,
  `experience_years` bigint DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `skills` text,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `professional_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [28] projects  (depends on: users)
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `description` text,
  `repository_url` varchar(255) DEFAULT NULL,
  `status` enum('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_project_mentor` (`mentor_id`),
  CONSTRAINT `fk_project_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`)
);

-- [29] sme_runtimes  (depends on: runtimes, users)
DROP TABLE IF EXISTS `sme_runtimes`;
CREATE TABLE `sme_runtimes` (
  `sme_runtime_id` bigint NOT NULL AUTO_INCREMENT,
  `user_roles_id` bigint DEFAULT NULL,
  /*`runtime_id` bigint DEFAULT NULL,*/
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`sme_runtime_id`),
  KEY `user_id` (`user_roles_id`),
  /*KEY `runtime_id` (`runtime_id`),*/
  KEY `FKkd3ki16rvoq4c5w60inl2uafb` (`user_id`),
  CONSTRAINT `FKkd3ki16rvoq4c5w60inl2uafb` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
 /* CONSTRAINT `sme_runtimes_ibfk_2` FOREIGN KEY (`runtime_id`) REFERENCES `runtimes` (`id`)*/
);

-- [30] user_logs  (depends on: users)
DROP TABLE IF EXISTS `user_logs`;
CREATE TABLE `user_logs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `login_time` datetime DEFAULT NULL,
  `logout_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_logs_user` (`user_id`),
  CONSTRAINT `fk_user_logs_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [31] user_roles  (depends on: roles, users)
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  `assigned_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
);

-- [32] referrals  (depends on: alumni, companies, users)
DROP TABLE IF EXISTS `referrals`;
CREATE TABLE `referrals` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `companies_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `alumni_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `companies_id` (`companies_id`),
  KEY `user_id` (`user_id`),
  KEY `alumni_id` (`alumni_id`),
  CONSTRAINT `referrals_ibfk_1` FOREIGN KEY (`companies_id`) REFERENCES `companies` (`id`),
  CONSTRAINT `referrals_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `referrals_ibfk_3` FOREIGN KEY (`alumni_id`) REFERENCES `alumni` (`alumni_id`)
);

-- [33] job_applications  (depends on: job_descriptions, users)
DROP TABLE IF EXISTS `job_applications`;
CREATE TABLE `job_applications` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `job_id` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `applied_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_app_job` (`job_id`),
  KEY `fk_app_student` (`student_id`),
  CONSTRAINT `fk_app_job` FOREIGN KEY (`job_id`) REFERENCES `job_descriptions` (`job_id`),
  CONSTRAINT `fk_app_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [34] shortlisted_candidates  (depends on: job_descriptions, users)
DROP TABLE IF EXISTS `shortlisted_candidates`;
CREATE TABLE `shortlisted_candidates` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `job_id` bigint DEFAULT NULL,
  `shortlisted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `round_level` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sc_user` (`user_id`),
  KEY `fk_sc_job` (`job_id`),
  CONSTRAINT `fk_sc_job` FOREIGN KEY (`job_id`) REFERENCES `job_descriptions` (`job_id`),
  CONSTRAINT `fk_sc_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

-- [35] learning_path_progress  (depends on: learning_paths, users)
DROP TABLE IF EXISTS `learning_path_progress`;
CREATE TABLE `learning_path_progress` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `learning_path_id` bigint DEFAULT NULL,
  `overall_score` decimal(6,2) DEFAULT NULL,
  `average_percentage` decimal(6,2) DEFAULT NULL,
  `improvement_rate` decimal(5,2) DEFAULT NULL,
  `min_score` int DEFAULT NULL,
  `max_score` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`,`learning_path_id`),
  KEY `fk_progress_path` (`learning_path_id`),
  CONSTRAINT `fk_progress_path` FOREIGN KEY (`learning_path_id`) REFERENCES `learning_paths` (`id`),
  CONSTRAINT `fk_progress_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [36] project_allocations  (depends on: projects, users)
DROP TABLE IF EXISTS `project_allocations`;
CREATE TABLE `project_allocations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  `joined_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `release_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pa_project` (`project_id`),
  KEY `fk_pa_student` (`student_id`),
  CONSTRAINT `fk_pa_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `fk_pa_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);

-- [37] tests  (depends on: sme_runtimes)
DROP TABLE IF EXISTS `tests`;
CREATE TABLE `tests` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sme_runtime_id` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `description` text,
  `difficulty` enum('BEGINNER','INTERMEDIATE','ADVANCE') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `sme_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sme_runtime` (`sme_runtime_id`),
  CONSTRAINT `fk_sme_runtime` FOREIGN KEY (`sme_runtime_id`) REFERENCES `sme_runtimes` (`sme_runtime_id`)
);

-- [38] interviews  (depends on: job_applications)
DROP TABLE IF EXISTS `interviews`;
CREATE TABLE `interviews` (
  `interview_id` bigint NOT NULL AUTO_INCREMENT,
  `application_id` bigint DEFAULT NULL,
  `scheduled_at` datetime DEFAULT NULL,
  `rescheduled_at` datetime DEFAULT NULL,
  `mode` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `remark` text,
  `outcome` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`interview_id`),
  KEY `fk_interview_application` (`application_id`),
  CONSTRAINT `fk_interview_application` FOREIGN KEY (`application_id`) REFERENCES `job_applications` (`id`)
);

CREATE TABLE roadmaps (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    difficulty_level VARCHAR(50),
    duration_in_weeks INT,
    created_by BIGINT,
    status VARCHAR(50),
    created_at  datetime DEFAULT NULL,

    CONSTRAINT fk_roadmap_mentor
    FOREIGN KEY(created_by)
    REFERENCES users(id)
);



CREATE TABLE sessions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    roadmap_id BIGINT,
    sme_id BIGINT,
    title VARCHAR(300),
    topic VARCHAR(300),
    description TEXT,
    learning_objectives TEXT,
    session_date DATETIME,
    duration_in_minutes INT,
    status enum('InProgress','Pending','Completed') DEFAULT NULL,
    created_at  datetime DEFAULT NULL,

    CONSTRAINT fk_session_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(id),

    CONSTRAINT fk_session_mentor
    FOREIGN KEY(sme_id)
    REFERENCES users(id)
);


CREATE TABLE assessments (
    id BIGINT NOT NULL AUTO_INCREMENT,

    test_id BIGINT,

    session_id BIGINT,

    student_id BIGINT DEFAULT NULL,

    assigned_by BIGINT DEFAULT NULL,

    assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    scheduled_at DATETIME DEFAULT NULL,

    status ENUM(
        'Assigned',
        'Pending',
        'Completed',
        'UnAssigned'
    ) DEFAULT 'UnAssigned',

    is_active TINYINT(1) DEFAULT '1',

    PRIMARY KEY (id),

    KEY fk_assessment_test (test_id),
    KEY fk_assessment_session (session_id),
    KEY fk_assessment_student (student_id),
    KEY fk_assessment_assigned_by (assigned_by),

    CONSTRAINT fk_assessment_test
    FOREIGN KEY(test_id)
    REFERENCES tests(id),

    CONSTRAINT fk_assessment_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id),

    CONSTRAINT fk_assessment_student
    FOREIGN KEY(student_id)
    REFERENCES users(id),

    CONSTRAINT fk_assessment_assigned_by
    FOREIGN KEY(assigned_by)
    REFERENCES users(id)
);



-- [40] test_questions  (depends on: questions, tests)
DROP TABLE IF EXISTS `test_questions`;
CREATE TABLE `test_questions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `test_id` bigint DEFAULT NULL,
  `question_id` bigint DEFAULT NULL,
  `sequence_order` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `test_questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `test_questions_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`)
);

-- [41] student_assessment_results  (depends on: assessments, users)
DROP TABLE IF EXISTS `student_assessment_results`;
CREATE TABLE `student_assessment_results` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `assessment_id` bigint DEFAULT NULL,
  `score` float DEFAULT NULL,
  `percentile` float DEFAULT NULL,
  `time_taken_minutes` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_result_student` (`student_id`),
  KEY `fk_result_assessment` (`assessment_id`),
  CONSTRAINT `fk_result_assessment` FOREIGN KEY (`assessment_id`) REFERENCES `assessments` (`id`),
  CONSTRAINT `fk_result_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
);






CREATE TABLE courses (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    level VARCHAR(50),
    duration_in_hours INT,
    technology VARCHAR(100),
    status VARCHAR(50),
    created_by BIGINT,
    created_at  datetime DEFAULT NULL,

    CONSTRAINT fk_course_mentor
    FOREIGN KEY(created_by)
    REFERENCES users(id)
);


CREATE TABLE roadmap_courses (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    roadmap_id BIGINT,
    course_id BIGINT,
    week_no INT,
    sequence_no INT,

    CONSTRAINT fk_rc_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(id),

    CONSTRAINT fk_rc_course
    FOREIGN KEY(course_id)
    REFERENCES courses(id)
);


CREATE TABLE student_roadmaps (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    roadmap_id BIGINT,
    mentor_id BIGINT,
    assigned_date DATE,
    completion_percent DECIMAL(5,2),
    status ENUM(
        'ASSIGNED',
        'IN_PROGRESS',
        'COMPLETED',
        'CANCELLED'
    ) DEFAULT 'ASSIGNED',

    CONSTRAINT fk_sr_student
    FOREIGN KEY(student_id)
    REFERENCES users(id),

    CONSTRAINT fk_sr_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(id),

    CONSTRAINT fk_sr_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES user_roles(id)
);





CREATE TABLE session_students (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    student_id BIGINT,
    attendance_status tinyint(1) DEFAULT '0',
    joined_at  datetime DEFAULT NULL,

    CONSTRAINT fk_ss_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id),

    CONSTRAINT fk_ss_student
    FOREIGN KEY(student_id)
    REFERENCES users(id)
);


CREATE TABLE learning_materials (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    title VARCHAR(300),
    material_type VARCHAR(50),
    material_url TEXT,
    description TEXT,
    sequence_no INT,
    created_at datetime DEFAULT NULL,

    CONSTRAINT fk_material_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id)
);

CREATE TABLE student_material_progress (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    material_id BIGINT,
    progress_percent DECIMAL(5,2),
    status VARCHAR(50),
    last_accessed datetime DEFAULT NULL,

    CONSTRAINT fk_smp_student
    FOREIGN KEY(student_id)
    REFERENCES users(id),

    CONSTRAINT fk_smp_material
    FOREIGN KEY(material_id)
    REFERENCES learning_materials(id)
);


CREATE TABLE assignments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    title VARCHAR(300),
    description TEXT,
    due_date DATETIME,
    total_marks INT,
    created_at datetime DEFAULT NULL,

    CONSTRAINT fk_assignment_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id)
);



CREATE TABLE assignment_submissions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assignment_id BIGINT,
    student_id BIGINT,
    submission_url TEXT,
    submitted_at datetime DEFAULT NULL,
    marks_obtained DECIMAL(5,2),
    feedback TEXT,
    status enum('InProgress','Pending','Completed') DEFAULT NULL,

    CONSTRAINT fk_submission_assignment
    FOREIGN KEY(assignment_id)
    REFERENCES assignments(id),

    CONSTRAINT fk_submission_student
    FOREIGN KEY(student_id)
    REFERENCES users(id)
);

CREATE TABLE student_projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    project_id BIGINT,
    student_id BIGINT,
    assigned_date datetime DEFAULT NULL,
    completion_percent DECIMAL(5,2),
    github_repository_url TEXT,
    deployment_url TEXT,
    status enum('InProgress','Pending','Completed') DEFAULT NULL,


    CONSTRAINT fk_sp_project
    FOREIGN KEY(project_id)
    REFERENCES projects(id),

    CONSTRAINT fk_sp_student
    FOREIGN KEY(student_id)
    REFERENCES users(id)
);



CREATE TABLE skills (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    category VARCHAR(100),
    description TEXT
);


CREATE TABLE student_skills (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    skill_id BIGINT,
    proficiency_level VARCHAR(50),
    last_assessed_at TIMESTAMP,

    CONSTRAINT fk_sskill_student
    FOREIGN KEY(student_id)
    REFERENCES users(id),

    CONSTRAINT fk_sskill_skill
    FOREIGN KEY(skill_id)
    REFERENCES skills(id)
);



CREATE TABLE student_assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assessment_id BIGINT,
    student_id BIGINT,
    marks_obtained DECIMAL(5,2),
    feedback TEXT,
    completed_at datetime DEFAULT NULL,

    CONSTRAINT fk_sa_assessment
    FOREIGN KEY(assessment_id)
    REFERENCES assessments(id),

    CONSTRAINT fk_sa_student
    FOREIGN KEY(student_id)
    REFERENCES users(id)
);




CREATE TABLE mentor_feedback (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    student_id BIGINT,
    session_id BIGINT,
    feedback TEXT,
    rating INT,
    created_at datetime DEFAULT NULL,

    CONSTRAINT fk_mf_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES users(id),

    CONSTRAINT fk_mf__student
    FOREIGN KEY(student_id)
    REFERENCES users(id),

    CONSTRAINT fk_mf__session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id)
);


CREATE TABLE discussion_messages (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    sender_type VARCHAR(50),
    sender_id BIGINT,
    message TEXT,
    created_at datetime DEFAULT NULL,

    CONSTRAINT fk_dm_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(id),

    CONSTRAINT fk_sender_id
    FOREIGN KEY(sender_id)
    REFERENCES users(id)
);





CREATE TABLE employability_scores (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    technical_score DECIMAL(5,2),
    communication_score DECIMAL(5,2),
    project_score DECIMAL(5,2),
    interview_score DECIMAL(5,2),
    overall_score DECIMAL(5,2),
    evaluated_at datetime NULL,

    CONSTRAINT fk_employability_student
    FOREIGN KEY(student_id)
    REFERENCES users(id)
);


