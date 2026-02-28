-- Create the database only if it does not already exist
CREATE DATABASE IF NOT EXISTS membership_db;

-- Select the database to work with
USE membership_db;

-- Stores all registered users in the system
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,     -- Unique identifier for each user
    first_name VARCHAR(100),                       -- User's first name
    last_name VARCHAR(100),                        -- User's last name
    email VARCHAR(150) NOT NULL UNIQUE,            -- Unique email for login/identification
    password_hash VARCHAR(255) NOT NULL,           -- Encrypted password (never store plain text)
    status VARCHAR(20) DEFAULT 'ACTIVE',           -- Account status (ACTIVE, INACTIVE, BLOCKED, etc.)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Record creation timestamp
);

-- Stores different roles available in the system (e.g., ADMIN, MENTOR, SME)
CREATE TABLE roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,      -- Unique role identifier
    role_name VARCHAR(50) NOT NULL UNIQUE           -- Role name (must be unique)
);

-- Maps users to roles (a user can have multiple roles)
CREATE TABLE user_roles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,               -- Unique mapping ID
    user_id BIGINT NOT NULL,                            -- Reference to users table
    role_id BIGINT NOT NULL,                            -- Reference to roles table
    UNIQUE(user_id, role_id),                           -- Prevent duplicate role assignments for the same user
    FOREIGN KEY (user_id) REFERENCES users(id),    -- Foreign key constraints
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Stores active login sessions and JWT tokens
CREATE TABLE user_sessions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,      -- Unique session ID
    user_id BIGINT NOT NULL,                           -- Associated user
    user_login DATETIME,                               -- Login timestamp
    user_logout DATETIME,                              -- Logout timestamp (can be NULL if session is active) 
    session_duration TIME,                             -- Duration of the session (can be calculated as user_logout - user_login)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Stores additional information for users with Mentor role
CREATE TABLE mentor_profiles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,        -- Unique mentor profile ID
    user_id BIGINT NOT NULL UNIQUE,                     -- One-to-one relationship with users table
    bio TEXT,                                           -- Mentor biography/description
    experience_years INT,                               -- Years of experience
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Stores additional information for Subject Matter Experts
CREATE TABLE sme_profiles (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,          -- Unique SME profile ID
    user_id BIGINT NOT NULL UNIQUE,                    -- One-to-one relationship with users table
    subject_id BIGINT NOT NULL,                        -- Subject expertise reference
    FOREIGN KEY (user_id) REFERENCES users(id),    -- Enforce referential integrity
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id)
);

-- Stores subjects available in the platform (e.g., Java, Python, Data Structures)
CREATE TABLE subjects (
    subject_id BIGINT PRIMARY KEY AUTO_INCREMENT,                                -- Unique subject identifier
    name VARCHAR(150) NOT NULL UNIQUE,                                           -- Subject name (must be unique)
    description TEXT,                                                            -- Subject description/details
    status VARCHAR(20) DEFAULT 'ACTIVE',                                         -- Subject status (ACTIVE/INACTIVE)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,                              -- Creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP   -- Auto-update timestamp on modification
);