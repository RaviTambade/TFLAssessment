USE membership_db;

-- Insert predefined system roles
INSERT INTO roles (role_name) VALUES
('ADMIN'),
('MENTOR'),
('STUDENT'),
('SME');

-- Insert system users with basic authentication data
INSERT INTO users (first_name, last_name, email, password_hash)
VALUES
('Ravi','Tambade','ravi@tfl.com','hashedpassword'),
('Kajal','Ghule','kajal@student.com','hashedpassword'),
('Sarthak','Kadam','sarthak@student.com','hashedpassword'),
('Nikita','Bansode','nikita@student.com','hashedpassword'),
('Rutuja','Mokale','rutuja@student.com','hashedpassword'),
('Pranita','Mane','pranita@student.com','hashedpassword'),
('Sahil','Kamble','sahil@student.com','hashedpassword'),
('Nirjala','Naik','nirjala@student.com','hashedpassword'),
('Chaitrali','Patil','chaitrali@student.com','hashedpassword'),
('Arnav','Tolahunase','arnav@student.com','hashedpassword'),
('Tejas','Naukudkar','tejas@student.com','hashedpassword'),
('Sai','Jagdale','sai@student.com','hashedpassword'),
('Samruddhi','Rasal','samruddhi@student.com','hashedpassword'),
('Yash','Gawade','yash@student.com','hashedpassword'),
('Shrutik','Dhaundkar','shrutik@student.com','hashedpassword'),
('Sumit','Bhor','sumit@student.com','hashedpassword'),
('Sanika','Bhor','sanika@student.com','hashedpassword'),
('Sachin','Kharat','sachin@student.com','hashedpassword'),
('Abhay','Rathod','abhay@student.com','hashedpassword'),
('Prajwal','Salunke','prajwal@student.com','hashedpassword'),
('Vibhavari','Borale','vibhavari@student.com','hashedpassword'),
('Tanvi','Sonawane','tanvi@student.com','hashedpassword');

-- Map users to their respective roles
INSERT INTO user_roles (user_id, role_id) VALUES
(1, 1),   -- Ravi Tambade  → ADMIN (Full system access)

(2, 3),   -- Kajal Ghule   → STUDENT (Regular platform user)
(3, 3),   -- Sarthak Kadam → STUDENT
(4, 3),   -- Nikita Bansode → STUDENT
(5, 3),   -- Rutuja Mokale → STUDENT
(6, 3),   -- Pranita Mane  → STUDENT
(7, 3),   -- Sahil Kamble  → STUDENT
(8, 3),   -- Nirjala Naik  → STUDENT
(9, 3),   -- Chaitrali Patil → STUDENT

(10, 4),  -- Arnav Tolahunase → SME (Subject Matter Expert - Java)

(11, 2),  -- Tejas Naukudkar → MENTOR (Guides students)

(12, 3),  -- Sai Jagdale → STUDENT
(13, 3),  -- Samruddhi Rasal → STUDENT
(14, 3),  -- Yash Gawade → STUDENT
(15, 3),  -- Shrutik Dhaundkar → STUDENT
(16, 3),  -- Sumit Bhor → STUDENT
(17, 3),  -- Sanika Bhor → STUDENT
(18, 3),  -- Sachin Kharat → STUDENT
(19, 3),  -- Abhay Rathod → STUDENT
(20, 3),  -- Prajwal Salunke → STUDENT
(21, 3),  -- Vibhavari Borale → STUDENT
(22, 3);  -- Tanvi Sonawane → STUDENT

-- Create mentor profile for user who has MENTOR role
INSERT INTO mentor_profiles (user_id, bio, experience_years)
VALUES
(11, 'Senior Technical Mentor', 5);

-- Create SME profile for user who has SME role
INSERT INTO sme_profiles (user_id, expertise_area)
VALUES
(10, 'Java');

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


