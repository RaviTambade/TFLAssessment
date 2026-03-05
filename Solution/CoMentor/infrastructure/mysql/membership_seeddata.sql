USE membership_db;

-- =============================
-- ROLES
-- =============================
INSERT INTO roles (role_name, description) VALUES
('ADMIN','Full system access'),
('MENTOR','Guides and monitors students'),
('STUDENT','Learns in the platform'),
('SME','Subject Matter Expert'),
('EMPLOYER','Company representative for hiring');


-- =============================
-- USERS
-- =============================
INSERT INTO users
(first_name,last_name,contact,email,password_hash)
VALUES
('Ravi','Tambade','9876543201','ravi@tfl.com','hashedpassword'),
('Kajal','Ghule','9876543202','kajal@student.com','hashedpassword'),
('Sarthak','Kadam','9876543203','sarthak@student.com','hashedpassword'),
('Nikita','Bansode','9876543204','nikita@student.com','hashedpassword'),
('Rutuja','Mokale','9876543205','rutuja@student.com','hashedpassword'),
('Pranita','Mane','9876543206','pranita@student.com','hashedpassword'),
('Sahil','Kamble','9876543207','sahil@student.com','hashedpassword'),
('Nirjala','Naik','9876543208','nirjala@student.com','hashedpassword'),
('Chaitrali','Patil','9876543209','chaitrali@student.com','hashedpassword'),
('Arnav','Tolahunase','9876543210','arnav@student.com','hashedpassword'),
('Tejas','Naukudkar','9876543211','tejas@student.com','hashedpassword'),
('Sai','Jagdale','9876543212','sai@student.com','hashedpassword'),
('Samruddhi','Rasal','9876543213','samruddhi@student.com','hashedpassword'),
('Yash','Gawade','9876543214','yash@student.com','hashedpassword'),
('Shrutik','Dhaundkar','9876543215','shrutik@student.com','hashedpassword'),
('Sumit','Bhor','9876543216','sumit@student.com','hashedpassword'),
('Sanika','Bhor','9876543217','sanika@student.com','hashedpassword'),
('Sachin','Kharat','9876543218','sachin@student.com','hashedpassword'),
('Abhay','Rathod','9876543219','abhay@student.com','hashedpassword'),
('Prajwal','Salunke','9876543220','prajwal@student.com','hashedpassword'),
('Vibhavari','Borale','9876543221','vibhavari@student.com','hashedpassword'),
('Tanvi','Sonawane','9876543222','tanvi@student.com','hashedpassword'),
('Aditya','Borule','8767846705','aditya@student.com','hashedpassword'),
('Parikshit','Shelorkar','8767846706','parikshit@student.com','hashedpassword'),
('Rahul','Gayke','8767846707','rahul@student.com','hashedpassword'),
('Ajay','Kale','8767846708','ajay@student.com','hashedpassword'),
('Pradnya','Kamble','8767846709','pradnya@student.com','hashedpassword'),
('Saloni','Pawale','8767846710','saloni@student.com','hashedpassword'),
('Sayali','Kulkarni','8767846711','sayali@student.com','hashedpassword'),
('Sejal','Kulkarni','8767846712','sejal@student.com','hashedpassword'),
('Rutuja','Kadam','8767846713','rutujak@student.com','hashedpassword'),
('Tejas','Pawale','8767846714','tejasp@student.com','hashedpassword'),
('Anish','Adak','8767846715','anish@student.com','hashedpassword'),
('Akshay','Bhoite','8767846716','akshay@student.com','hashedpassword'),
('Nandini','Goli','8767846717','nandini@student.com','hashedpassword'),
('Ishwari','Karale','8767846718','ishwari@student.com','hashedpassword'),
('Satyarth','Shinde','8767846719','satyarh@employer.com','hashedpassword'),
('Priya','Deshmukh','8767846720','priya@employer.com','hashedpassword'),
('Rohit','Sharma','8767846721','rohit@employer.com','hashedpassword');


-- =============================
-- COMPANIES
-- =============================
INSERT INTO companies
(company_name,website,industry,company_size,headquarters_city,description)
VALUES
('TFL Software Pvt Ltd','https://transflowerlearning.com','Software','50-200','Pune','Product engineering company'),
('TechNova Solutions','https://technova.com','IT Services','200-500','Mumbai','Enterprise consulting'),
('CloudMatrix','https://cloudmatrix.com','Cloud Computing','100-300','Bangalore','Cloud native services');


-- =============================
-- USER ROLES
-- =============================
INSERT INTO user_roles (user_id, role_id) VALUES
(1,1),
(2,2),
(3,3),(4,3),(5,3),(6,3),(7,3),(8,3),
(9,4),(10,4),
(11,2),
(12,3),(13,3),(14,3),(15,3),(16,3),(17,3),
(18,3),(19,3),(20,3),(21,3),(22,3),
(23,3),(24,3),(25,3),(26,3),(27,3),
(28,3),(29,3),(30,3),(31,3),(32,3),
(33,3),(34,3),(35,3),(36,3),
(37,5),(38,5),(39,5);


-- =============================
-- ADMIN PROFILE
-- =============================
INSERT INTO admin_profiles (user_id) VALUES (1);


-- =============================
-- MENTOR PROFILES
-- =============================
INSERT INTO mentor_profiles (user_id, experience_years, specialization) VALUES
(2,4,'Software Engineering'),
(11,5,'Backend & Cloud');


-- =============================
-- STUDENT PROFILES
-- =============================
INSERT INTO student_profiles
(user_id,college_name,degree,branch,graduation_year,expertise_level,employability_status)
VALUES
(3,'MIT ADT University','B.Tech','Computer Engineering',2026,'INTERMEDIATE','Student'),
(4,'MIT ADT University','B.Tech','Computer Engineering',2026,'BEGINNER','Student'),
(5,'MIT ADT University','B.Tech','Computer Engineering',2026,'INTERMEDIATE','Student'),
(6,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(13,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(15,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(19,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(20,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(23,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(27,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(29,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(32,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working'),
(34,'MIT ADT University','B.Tech','Computer Engineering',2026,'ADVANCED','Working');


-- =============================
-- ALUMNI PROFILES
-- =============================
INSERT INTO alumni_profiles
(student_id,company_id,job_title)
VALUES
(4,1,'Software Engineer'),
(5,2,'Backend Developer'),
(6,3,'Cloud Engineer');


-- =============================
-- SME PROFILES
-- =============================
INSERT INTO sme_profiles
(alumni_id,expertise_title,availability_status)
VALUES
(1,'Senior Java Architect','AVAILABLE'),
(2,'NodeJS Expert','BUSY');


-- =============================
-- USER SESSIONS
-- =============================
INSERT INTO user_sessions (user_id, user_login, user_logout)
VALUES
(1,NOW(),NULL),(2,NOW(),NULL),(3,NOW(),NULL),(4,NOW(),NULL);


-- =============================
-- EMPLOYER PROFILES
-- =============================
INSERT INTO employer_profiles
(user_id, company_id, job_title, work_email, work_phone)
VALUES
(37,1,'HR Manager','hr@tfl.com','9000000001'),
(38,2,'Technical Hiring Lead','hiring@technova.com','9000000002'),
(39,3,'Recruitment Manager','jobs@cloudmatrix.com','9000000003');