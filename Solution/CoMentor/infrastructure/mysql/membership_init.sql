-- Create the database if it does not already exist
CREATE DATABASE IF NOT EXISTS membership_db;

-- Select the database for use
USE membership_db;

-- =====================================================
-- USERS TABLE
-- Stores all registered users (authentication identity)
-- =====================================================
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,   -- Unique identifier for each user
    first_name VARCHAR(100),                     -- User's first name
    last_name VARCHAR(100),                      -- User's last name
    contact VARCHAR(15),                         -- Phone number or contact information
    email VARCHAR(150) NOT NULL UNIQUE,          -- Unique email used for login
    password_hash VARCHAR(255) NOT NULL,         -- Encrypted password (never store plain text)
    status ENUM('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE', -- Account status
    email_verified BOOLEAN DEFAULT FALSE,        -- Indicates if email verification is completed
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Account creation timestamp
    updated_at TIMESTAMP NULL                    -- Last update timestamp
);

-- =====================================================
-- ROLES TABLE
-- Stores all roles available in the platform
-- =====================================================
CREATE TABLE roles (
    role_id BIGINT PRIMARY KEY AUTO_INCREMENT,   -- Unique identifier for role
    role_name VARCHAR(50) NOT NULL UNIQUE,       -- Name of the role
    description TEXT                             -- Description of the role
);

-- =====================================================
-- USER ROLES TABLE
-- Maps users to roles (RBAC - Role Based Access Control)
-- One user can have multiple roles
-- =====================================================
CREATE TABLE user_roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,        -- Unique mapping identifier
    user_id BIGINT NOT NULL,                     -- Reference to users table
    role_id BIGINT NOT NULL,                     -- Reference to roles table
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Role assignment timestamp
    FOREIGN KEY (user_id) REFERENCES users(user_id), -- Link to user
    FOREIGN KEY (role_id) REFERENCES roles(role_id)  -- Link to role
);

-- =====================================================
-- USER PROFILES TABLE
-- Stores additional profile information of users
-- =====================================================
CREATE TABLE user_profiles (
    profile_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique profile identifier
    user_id BIGINT UNIQUE,                        -- Associated user (1:1 relationship)
    gender VARCHAR(20),                           -- User gender
    date_of_birth DATE,                           -- Date of birth
    bio TEXT,                                     -- Short personal description
    city VARCHAR(100),                            -- User city
    state VARCHAR(100),                           -- User state
    country VARCHAR(100),                         -- User country
    linkedin_url VARCHAR(255),                    -- LinkedIn profile link
    github_url VARCHAR(255),                      -- GitHub profile link
    portfolio_url VARCHAR(255),                   -- Personal portfolio link
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Profile creation timestamp
    FOREIGN KEY (user_id) REFERENCES users(user_id)  -- Link to users table
);

-- =====================================================
-- USER SESSIONS TABLE
-- Tracks user login and logout sessions
-- =====================================================
CREATE TABLE user_sessions (
    session_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique session identifier
    user_id BIGINT NOT NULL,                      -- Associated user
    user_login DATETIME,                          -- Login timestamp
    user_logout DATETIME,                         -- Logout timestamp
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Link to user
);

-- =====================================================
-- MENTOR PROFILES TABLE
-- Stores additional information for mentors
-- =====================================================
CREATE TABLE mentor_profiles (
    mentor_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique mentor profile ID
    user_id BIGINT NOT NULL UNIQUE,              -- Linked user (1:1 relationship)
    experience_years INT,                        -- Years of mentoring experience
    specialization VARCHAR(150),                 -- Area of expertise
    created_on DATETIME DEFAULT CURRENT_TIMESTAMP, -- Profile creation time
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Link to users table
);

-- =====================================================
-- SME PROFILES TABLE
-- Stores information about Subject Matter Experts
-- =====================================================
CREATE TABLE sme_profiles (
    sme_id BIGINT PRIMARY KEY AUTO_INCREMENT,    -- Unique SME profile ID
    user_id BIGINT UNIQUE,                       -- Linked user (1:1)
    expertise_title VARCHAR(150),                -- Title or designation of expertise
    years_experience INT,                        -- Years of professional experience
    primary_domain VARCHAR(100),                 -- Main domain of expertise
    secondary_domain VARCHAR(100),               -- Secondary domain
    certifications TEXT,                         -- List of certifications
    availability_status ENUM('AVAILABLE','BUSY','OFFLINE'), -- Current availability
    proficiency_level ENUM('Beginner','Intermediate','Advanced','Expert'), -- Skill proficiency
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Link to users table
);
-- =====================================================
-- COMPANIES TABLE
-- Stores company information for hiring and collaboration
-- =====================================================
CREATE TABLE companies (
    company_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique company identifier
    company_name VARCHAR(200),                    -- Name of the company
    website VARCHAR(200),                         -- Company website
    industry VARCHAR(100),                        -- Industry sector
    company_size VARCHAR(50),                     -- Company size category
    headquarters_city VARCHAR(100),               -- Company headquarters city
    description TEXT,                             -- Company description
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Company record creation timestamp
);

-- =====================================================
-- STUDENT PROFILES TABLE
-- Stores academic and placement details of students
-- =====================================================
CREATE TABLE student_profiles (
    student_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique student profile ID
    user_id BIGINT UNIQUE,                        -- Linked user
    college_name VARCHAR(200),                    -- College or university name
    degree VARCHAR(100),                          -- Degree program
    branch VARCHAR(100),                          -- Field of study
    graduation_year INT,                          -- Expected graduation year
    current_skill VARCHAR(50),                    -- Current skill level
    placement_status ENUM('PLACED','NOT_PLACED') DEFAULT 'NOT_PLACED', -- Placement status
    placed_company_id BIGINT,                     -- Company where student is placed
    FOREIGN KEY (user_id) REFERENCES users(user_id), -- Link to users table
    FOREIGN KEY (placed_company_id) REFERENCES companies(company_id) -- Link to company
);

-- =====================================================
-- ADMIN PROFILES TABLE
-- Stores platform administrator information
-- =====================================================
CREATE TABLE admin_profiles (
    admin_id BIGINT PRIMARY KEY AUTO_INCREMENT,  -- Unique admin profile ID
    user_id BIGINT NOT NULL UNIQUE,              -- Linked user
    created_on DATETIME DEFAULT CURRENT_TIMESTAMP, -- Admin profile creation time
    FOREIGN KEY (user_id) REFERENCES users(user_id) -- Link to users table
);



-- =====================================================
-- EMPLOYER PROFILES TABLE
-- Stores company representatives who hire students
-- =====================================================
CREATE TABLE employer_profiles (
    employer_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- Unique employer profile ID
    user_id BIGINT UNIQUE,                         -- Linked user
    company_id BIGINT,                             -- Associated company
    job_title VARCHAR(120),                        -- Employer job title
    department VARCHAR(120),                       -- Department name
    hiring_authority BOOLEAN DEFAULT FALSE,        -- Indicates hiring decision authority
    work_email VARCHAR(120),                       -- Official company email
    work_phone VARCHAR(20),                        -- Official contact number
    FOREIGN KEY (user_id) REFERENCES users(user_id), -- Link to users table
    FOREIGN KEY (company_id) REFERENCES companies(company_id) -- Link to companies table
);