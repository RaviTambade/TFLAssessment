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

-- Insert login sessions with JWT tokens and expiry times
INSERT INTO user_sessions (user_id, jwt_token, expiry_time) VALUES
-- 1 Ravi (Admin)
(1, 'jwt_token_ravi_admin', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
-- 2 Kajal
(2, 'jwt_token_kajal_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 3 Sarthak
(3, 'jwt_token_sarthak_1', DATE_ADD(NOW(), INTERVAL 45 MINUTE)),
-- 4 Nikita
(4, 'jwt_token_nikita_1', DATE_ADD(NOW(), INTERVAL 30 MINUTE)),
-- 5 Rutuja
(5, 'jwt_token_rutuja_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 6 Pranita
(6, 'jwt_token_pranita_1', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
-- 7 Sahil
(7, 'jwt_token_sahil_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 8 Nirjala
(8, 'jwt_token_nirjala_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 9 Chaitrali (Active + Old expired)
(9, 'jwt_token_chaitrali_active', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
(9, 'jwt_token_chaitrali_old', DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 10 Arnav (Multi-device login)
(10, 'jwt_token_arnav_laptop', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
(10, 'jwt_token_arnav_mobile', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 11 Tejas (Expired)
(11, 'jwt_token_tejas_old', DATE_SUB(NOW(), INTERVAL 30 MINUTE)),
-- 12 Sai (Expired)
(12, 'jwt_token_sai_old', DATE_SUB(NOW(), INTERVAL 1 HOUR)),
-- 13 Samruddhi (Expired)
(13, 'jwt_token_samruddhi_old', DATE_SUB(NOW(), INTERVAL 2 HOUR)),
-- 14 Yash
(14, 'jwt_token_yash_evening', DATE_ADD(NOW(), INTERVAL 3 HOUR)),
-- 15 Shrutik
(15, 'jwt_token_shrutik_evening', DATE_ADD(NOW(), INTERVAL 3 HOUR)),
-- 16 Sumit
(16, 'jwt_token_sumit_evening', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
-- 17 Sanika
(17, 'jwt_token_sanika_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 18 Sachin
(18, 'jwt_token_sachin_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 19 Abhay
(19, 'jwt_token_abhay_1', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
-- 20 Prajwal
(20, 'jwt_token_prajwal_1', DATE_ADD(NOW(), INTERVAL 2 HOUR)),
-- 21 Vibhavari
(21, 'jwt_token_vibhavari_1', DATE_ADD(NOW(), INTERVAL 1 HOUR)),
-- 22 Tanvi
(22, 'jwt_token_tanvi_1', DATE_ADD(NOW(), INTERVAL 1 HOUR));

-- Subjects
INSERT INTO subjects (name, description) VALUES
('C Programming', 'Structured programming using C'),
('Data Structures', 'Core data structures and algorithms'),
('Databases', 'SQL and relational database systems');


