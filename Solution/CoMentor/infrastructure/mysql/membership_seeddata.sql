USE membership_db;

-- Insert predefined system roles
INSERT INTO roles (role_name) VALUES
('ADMIN'),
('MENTOR'),
('STUDENT'),
('SME');

-- Insert system users with basic authentication data
INSERT INTO users 
(first_name, last_name, contact, email, password_hash)
VALUES
('Ravi','Tambade',9876543201,'ravi@tfl.com','hashedpassword'),
('Kajal','Ghule',9876543202,'kajal@student.com','hashedpassword'),
('Sarthak','Kadam',9876543203,'sarthak@student.com','hashedpassword'),
('Nikita','Bansode',9876543204,'nikita@student.com','hashedpassword'),
('Rutuja','Mokale',9876543205,'rutuja@student.com','hashedpassword'),
('Pranita','Mane',9876543206,'pranita@student.com','hashedpassword'),
('Sahil','Kamble',9876543207,'sahil@student.com','hashedpassword'),
('Nirjala','Naik',9876543208,'nirjala@student.com','hashedpassword'),
('Chaitrali','Patil',9876543209,'chaitrali@student.com','hashedpassword'),
('Arnav','Tolahunase',9876543210,'arnav@student.com','hashedpassword'),
('Tejas','Naukudkar',9876543211,'tejas@student.com','hashedpassword'),
('Sai','Jagdale',9876543212,'sai@student.com','hashedpassword'),
('Samruddhi','Rasal',9876543213,'samruddhi@student.com','hashedpassword'),
('Yash','Gawade',9876543214,'yash@student.com','hashedpassword'),
('Shrutik','Dhaundkar',9876543215,'shrutik@student.com','hashedpassword'),
('Sumit','Bhor',9876543216,'sumit@student.com','hashedpassword'),
('Sanika','Bhor',9876543217,'sanika@student.com','hashedpassword'),
('Sachin','Kharat',9876543218,'sachin@student.com','hashedpassword'),
('Abhay','Rathod',9876543219,'abhay@student.com','hashedpassword'),
('Prajwal','Salunke',9876543220,'prajwal@student.com','hashedpassword'),
('Vibhavari','Borale',9876543221,'vibhavari@student.com','hashedpassword'),
('Tanvi','Sonawane',9876543222,'tanvi@student.com','hashedpassword');

-- Map users to their respective roles
INSERT INTO user_roles (user_id, role_id) VALUES

(1, 1),   -- Ravi Tambade      → ADMIN (Full system access)

(2, 2),   -- Kajal Ghule       → MENTOR (Guides and monitors students)
(3, 3),   -- Sarthak Kadam     → STUDENT
(4, 3),   -- Nikita Bansode    → STUDENT
(5, 3),   -- Rutuja Mokale     → STUDENT
(6, 3),   -- Pranita Mane      → STUDENT
(7, 3),   -- Sahil Kamble      → STUDENT
(8, 3),   -- Nirjala Naik      → STUDENT

(9, 4),   -- Chaitrali Patil   → SME (Subject Matter Expert)

(10, 4),  -- Arnav Tolahunase  → SME (Subject Expert)
(11, 2),  -- Tejas Naukudkar   → MENTOR

(12, 3),  -- Sai Jagdale       → STUDENT
(13, 3),  -- Samruddhi Rasal   → STUDENT
(14, 3),  -- Yash Gawade       → STUDENT
(15, 3),  -- Shrutik Dhaundkar → STUDENT
(16, 3),  -- Sumit Bhor        → STUDENT
(17, 3),  -- Sanika Bhor       → STUDENT
(18, 3),  -- Sachin Kharat     → STUDENT
(19, 3),  -- Abhay Rathod      → STUDENT
(20, 3),  -- Prajwal Salunke   → STUDENT
(21, 3),  -- Vibhavari Borale  → STUDENT
(22, 3);  -- Tanvi Sonawane    → STUDENT

-- Create mentor profile for user who has MENTOR role
INSERT INTO mentor_profiles (user_id, bio, experience_years)
VALUES
(2, 'Software Engineering Mentor', 4),      -- Kajal Ghule
(11, 'Senior Backend Mentor', 5);           -- Tejas Naukudkar

-- Create SME profile for user who has SME role
INSERT INTO sme_profiles (user_id, subject_id)
VALUES
(9, 1),   -- Chaitrali Patil (Subject 1)
(10, 2);  -- Arnav Tolahunase (Subject 2)

INSERT INTO student_profiles (user_id)
VALUES
(3),(4),(5),(6),(7),(8),
(12),(13),(14),(15),(16),
(17),(18),(19),(20),(21),(22);

-- Insert login sessions 
INSERT INTO user_sessions (user_id, login_time, logout_time) VALUES
-- 1 Ravi (Admin - Active)
(1, DATE_SUB(NOW(), INTERVAL 30 MINUTE), NULL),
-- 2 Kajal (Logged out)
(2, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 3 Sarthak (Active)
(3, DATE_SUB(NOW(), INTERVAL 45 MINUTE), NULL),
-- 4 Nikita (Logged out)
(4, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
-- 5 Rutuja (Active)
(5, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
-- 6 Pranita (Active)
(6, DATE_SUB(NOW(), INTERVAL 20 MINUTE), NULL),
-- 7 Sahil (Logged out)
(7, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 30 MINUTE)),
-- 8 Nirjala (Active)
(8, DATE_SUB(NOW(), INTERVAL 10 MINUTE), NULL),
-- 9 Chaitrali (One active + one old session)
(9, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
(9, DATE_SUB(NOW(), INTERVAL 25 MINUTE), NULL),
-- 10 Arnav (Multi-device active sessions)
(10, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
(10, DATE_SUB(NOW(), INTERVAL 15 MINUTE), NULL),
-- 11 Tejas (Expired session)
(11, DATE_SUB(NOW(), INTERVAL 4 HOUR), DATE_SUB(NOW(), INTERVAL 3 HOUR)),
-- 12 Sai (Expired)
(12, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 13 Samruddhi (Expired)
(13, DATE_SUB(NOW(), INTERVAL 5 HOUR), DATE_SUB(NOW(), INTERVAL 4 HOUR)),
-- 14 Yash (Active)
(14, DATE_SUB(NOW(), INTERVAL 40 MINUTE), NULL),
-- 15 Shrutik (Active)
(15, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
-- 16 Sumit (Active)
(16, DATE_SUB(NOW(), INTERVAL 35 MINUTE), NULL),
-- 17 Sanika (Active)
(17, DATE_SUB(NOW(), INTERVAL 50 MINUTE), NULL),
-- 18 Sachin (Logged out)
(18, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
-- 19 Abhay (Active)
(19, DATE_SUB(NOW(), INTERVAL 20 MINUTE), NULL),
-- 20 Prajwal (Active)
(20, DATE_SUB(NOW(), INTERVAL 15 MINUTE), NULL),
-- 21 Vibhavari (Logged out)
(21, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 22 Tanvi (Active)
(22, DATE_SUB(NOW(), INTERVAL 30 MINUTE), NULL);

-- Subjects
INSERT INTO subjects (name, description) VALUES
('C Programming', 'Structured programming using C'),
('Data Structures', 'Core data structures and algorithms'),
('Databases', 'SQL and relational database systems');




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
updated the code as per changed create queries 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

USE membership_db;

-- Insert predefined system roles
INSERT INTO roles (role_name) VALUES
('ADMIN'),
('MENTOR'),
('STUDENT'),
('SME');

-- Insert system users with basic authentication data
INSERT INTO users 
(first_name, last_name, contact, email, password_hash)
VALUES
('Ravi','Tambade',9876543201,'ravi@tfl.com','hashedpassword'),
('Kajal','Ghule',9876543202,'kajal@student.com','hashedpassword'),
('Sarthak','Kadam',9876543203,'sarthak@student.com','hashedpassword'),
('Nikita','Bansode',9876543204,'nikita@student.com','hashedpassword'),
('Rutuja','Mokale',9876543205,'rutuja@student.com','hashedpassword'),
('Pranita','Mane',9876543206,'pranita@student.com','hashedpassword'),
('Sahil','Kamble',9876543207,'sahil@student.com','hashedpassword'),
('Nirjala','Naik',9876543208,'nirjala@student.com','hashedpassword'),
('Chaitrali','Patil',9876543209,'chaitrali@student.com','hashedpassword'),
('Arnav','Tolahunase',9876543210,'arnav@student.com','hashedpassword'),
('Tejas','Naukudkar',9876543211,'tejas@student.com','hashedpassword'),
('Sai','Jagdale',9876543212,'sai@student.com','hashedpassword'),
('Samruddhi','Rasal',9876543213,'samruddhi@student.com','hashedpassword'),
('Yash','Gawade',9876543214,'yash@student.com','hashedpassword'),
('Shrutik','Dhaundkar',9876543215,'shrutik@student.com','hashedpassword'),
('Sumit','Bhor',9876543216,'sumit@student.com','hashedpassword'),
('Sanika','Bhor',9876543217,'sanika@student.com','hashedpassword'),
('Sachin','Kharat',9876543218,'sachin@student.com','hashedpassword'),
('Abhay','Rathod',9876543219,'abhay@student.com','hashedpassword'),
('Prajwal','Salunke',9876543220,'prajwal@student.com','hashedpassword'),
('Vibhavari','Borale',9876543221,'vibhavari@student.com','hashedpassword'),
('Tanvi','Sonawane',9876543222,'tanvi@student.com','hashedpassword');

-- Map users to their respective roles
INSERT INTO user_roles (user_id, role_id) VALUES

(1, 1),   -- Ravi Tambade      → ADMIN (Full system access)

(2, 2),   -- Kajal Ghule       → MENTOR (Guides and monitors students)
(3, 3),   -- Sarthak Kadam     → STUDENT
(4, 3),   -- Nikita Bansode    → STUDENT
(5, 3),   -- Rutuja Mokale     → STUDENT
(6, 3),   -- Pranita Mane      → STUDENT
(7, 3),   -- Sahil Kamble      → STUDENT
(8, 3),   -- Nirjala Naik      → STUDENT

(9, 4),   -- Chaitrali Patil   → SME (Subject Matter Expert)

(10, 4),  -- Arnav Tolahunase  → SME (Subject Expert)
(11, 2),  -- Tejas Naukudkar   → MENTOR

(12, 3),  -- Sai Jagdale       → STUDENT
(13, 3),  -- Samruddhi Rasal   → STUDENT
(14, 3),  -- Yash Gawade       → STUDENT
(15, 3),  -- Shrutik Dhaundkar → STUDENT
(16, 3),  -- Sumit Bhor        → STUDENT
(17, 3),  -- Sanika Bhor       → STUDENT
(18, 3),  -- Sachin Kharat     → STUDENT
(19, 3),  -- Abhay Rathod      → STUDENT
(20, 3),  -- Prajwal Salunke   → STUDENT
(21, 3),  -- Vibhavari Borale  → STUDENT
(22, 3);  -- Tanvi Sonawane    → STUDENT

-- Create mentor profile for user who has MENTOR role
INSERT INTO mentor_profiles (user_id, bio, experience_years)
VALUES
(2, 'Software Engineering Mentor', 4),      -- Kajal Ghule
(11, 'Senior Backend Mentor', 5);           -- Tejas Naukudkar

-- Subjects
INSERT INTO subjects (name, description) VALUES
('C Programming', 'Structured programming using C'),
('Data Structures', 'Core data structures and algorithms'),
('Databases', 'SQL and relational database systems');


-- Create SME profile for user who has SME role
INSERT INTO sme_profiles (user_id, subject_id)
VALUES
(9, 1),   -- Chaitrali Patil (Subject 1)
(10, 2);  -- Arnav Tolahunase (Subject 2)

INSERT INTO student_profiles (user_id)
VALUES
(3),(4),(5),(6),(7),(8),
(12),(13),(14),(15),(16),
(17),(18),(19),(20),(21),(22);

-- Insert login sessions 
INSERT INTO user_sessions (user_id, user_login, user_logout) VALUES
-- 1 Ravi (Admin - Active)
(1, DATE_SUB(NOW(), INTERVAL 30 MINUTE), NULL),
-- 2 Kajal (Logged out)
(2, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 3 Sarthak (Active)
(3, DATE_SUB(NOW(), INTERVAL 45 MINUTE), NULL),
-- 4 Nikita (Logged out)
(4, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
-- 5 Rutuja (Active)
(5, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
-- 6 Pranita (Active)
(6, DATE_SUB(NOW(), INTERVAL 20 MINUTE), NULL),
-- 7 Sahil (Logged out)
(7, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 30 MINUTE)),
-- 8 Nirjala (Active)
(8, DATE_SUB(NOW(), INTERVAL 10 MINUTE), NULL),
-- 9 Chaitrali (One active + one old session)
(9, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
(9, DATE_SUB(NOW(), INTERVAL 25 MINUTE), NULL),
-- 10 Arnav (Multi-device active sessions)
(10, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
(10, DATE_SUB(NOW(), INTERVAL 15 MINUTE), NULL),
-- 11 Tejas (Expired session)
(11, DATE_SUB(NOW(), INTERVAL 4 HOUR), DATE_SUB(NOW(), INTERVAL 3 HOUR)),
-- 12 Sai (Expired)
(12, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 13 Samruddhi (Expired)
(13, DATE_SUB(NOW(), INTERVAL 5 HOUR), DATE_SUB(NOW(), INTERVAL 4 HOUR)),
-- 14 Yash (Active)
(14, DATE_SUB(NOW(), INTERVAL 40 MINUTE), NULL),
-- 15 Shrutik (Active)
(15, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL),
-- 16 Sumit (Active)
(16, DATE_SUB(NOW(), INTERVAL 35 MINUTE), NULL),
-- 17 Sanika (Active)
(17, DATE_SUB(NOW(), INTERVAL 50 MINUTE), NULL),
-- 18 Sachin (Logged out)
(18, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 2 HOUR)),
-- 19 Abhay (Active)
(19, DATE_SUB(NOW(), INTERVAL 20 MINUTE), NULL),
-- 20 Prajwal (Active)
(20, DATE_SUB(NOW(), INTERVAL 15 MINUTE), NULL),
-- 21 Vibhavari (Logged out)
(21, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 22 Tanvi (Active)
(22, DATE_SUB(NOW(), INTERVAL 30 MINUTE), NULL);



