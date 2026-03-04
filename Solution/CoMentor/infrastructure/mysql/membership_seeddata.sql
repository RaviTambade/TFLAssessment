USE membership_db;

SET FOREIGN_KEY_CHECKS = 0;

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
-- USERS (36 total)
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
(37,5),(35,5),(36,5);

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
-- SME PROFILES
-- =============================
INSERT INTO sme_profiles
(user_id, expertise_title, years_experience, primary_domain, secondary_domain, certifications, availability_status, proficiency_level)
VALUES
(9,'Senior Java Architect',8,'Java','Spring Boot','Oracle Certified','AVAILABLE','Expert'),
(10,'NodeJS Expert',6,'NodeJS','ReactJS','AWS Certified Developer','BUSY','Advanced');

-- =============================
-- STUDENT PROFILES (ALL 36 STUDENTS)
-- =============================
INSERT INTO student_profiles
(user_id,college_name,degree,branch,graduation_year,current_skill,placement_status,placed_company_id)
VALUES
(3,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(4,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(5,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(6,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',1),
(7,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(8,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(12,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(13,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',2),
(14,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(15,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',3),
(16,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(17,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(18,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(19,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',1),
(20,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',2),
(21,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(22,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(23,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',3),
(24,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(25,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(26,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(27,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',2),
(28,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(29,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',1),
(30,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(31,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(32,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',3),
(33,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL),
(34,'MIT ADT University','B.Tech','Computer Engineering',2026,'Advanced','PLACED',1),
(35,'MIT ADT University','B.Tech','Computer Engineering',2026,'Beginner','NOT_PLACED',NULL),
(36,'MIT ADT University','B.Tech','Computer Engineering',2026,'Intermediate','NOT_PLACED',NULL);

SET FOREIGN_KEY_CHECKS = 1;

-- =============================
-- USER PROFILES (ALL 36 USERS)
-- =============================
INSERT INTO user_profiles 
(user_id, gender, date_of_birth, bio, city, state, country, linkedin_url, github_url, portfolio_url)
VALUES
(1,'Male','1985-05-10','System Administrator','Pune','Maharashtra','India',NULL,NULL,NULL),
(2,'Female','1998-03-12','Mentor - Software Engineering','Pune','Maharashtra','India',NULL,NULL,NULL),
(3,'Male','2003-01-15','Computer Engineering Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(4,'Female','2003-02-20','Aspiring Developer','Pune','Maharashtra','India',NULL,NULL,NULL),
(5,'Female','2003-03-18','Tech Enthusiast','Pune','Maharashtra','India',NULL,NULL,NULL),
(6,'Female','2003-04-25','Full Stack Learner','Pune','Maharashtra','India',NULL,NULL,NULL),
(7,'Male','2003-05-10','Backend Developer','Pune','Maharashtra','India',NULL,NULL,NULL),
(8,'Female','2003-06-11','Frontend Learner','Pune','Maharashtra','India',NULL,NULL,NULL),
(9,'Female','1995-07-12','Java SME','Mumbai','Maharashtra','India',NULL,NULL,NULL),
(10,'Male','1994-08-14','NodeJS SME','Bangalore','Karnataka','India',NULL,NULL,NULL),
(11,'Male','1997-09-15','Cloud Mentor','Pune','Maharashtra','India',NULL,NULL,NULL),
(12,'Male','2003-01-10','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(13,'Female','2003-02-11','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(14,'Male','2003-03-12','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(15,'Male','2003-04-13','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(16,'Male','2003-05-14','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(17,'Female','2003-06-15','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(18,'Male','2003-07-16','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(19,'Male','2003-08-17','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(20,'Male','2003-09-18','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(21,'Female','2003-10-19','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(22,'Female','2003-11-20','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(23,'Male','2003-12-21','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(24,'Male','2003-01-22','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(25,'Male','2003-02-23','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(26,'Male','2003-03-24','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(27,'Female','2003-04-25','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(28,'Female','2003-05-26','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(29,'Female','2003-06-27','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(30,'Female','2003-07-28','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(31,'Female','2003-08-29','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(32,'Male','2003-09-30','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(33,'Male','2003-10-10','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(34,'Male','2003-11-11','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(35,'Female','2003-12-12','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(36,'Female','2003-12-15','Student','Pune','Maharashtra','India',NULL,NULL,NULL),
(37,'Male','1980-01-01','HR Manager','Pune','Maharashtra','India',NULL,NULL,NULL),
(38,'Female','1982-02-02','Tech Hiring Lead','Mumbai','Maharashtra','India',NULL,NULL,NULL),
(39,'Male','1984-03-03','Recruitment Manager','Bangalore','Karnataka','India',NULL,NULL,NULL);

-- =============================
-- USER SESSIONS (ONE PER USER)
-- =============================
INSERT INTO user_sessions (user_id, user_login, user_logout)
VALUES
(1,NOW(),NULL),(2,NOW(),NULL),(3,NOW(),NULL),(4,NOW(),NULL),
(5,NOW(),NULL),(6,NOW(),NULL),(7,NOW(),NULL),(8,NOW(),NULL),
(9,NOW(),NULL),(10,NOW(),NULL),(11,NOW(),NULL),(12,NOW(),NULL),
(13,NOW(),NULL),(14,NOW(),NULL),(15,NOW(),NULL),(16,NOW(),NULL),
(17,NOW(),NULL),(18,NOW(),NULL),(19,NOW(),NULL),(20,NOW(),NULL),
(21,NOW(),NULL),(22,NOW(),NULL),(23,NOW(),NULL),(24,NOW(),NULL),
(25,NOW(),NULL),(26,NOW(),NULL),(27,NOW(),NULL),(28,NOW(),NULL),
(29,NOW(),NULL),(30,NOW(),NULL),(31,NOW(),NULL),(32,NOW(),NULL),
(33,NOW(),NULL),(34,NOW(),NULL),(35,NOW(),NULL),(36,NOW(),NULL);

-- =============================
-- EMPLOYER PROFILES
-- =============================
INSERT INTO employer_profiles
(user_id, company_id, job_title, department, hiring_authority, work_email, work_phone)
VALUES
(37,1,'HR Manager','Human Resources',TRUE,'hr@tfl.com','9000000001'),
(38,2,'Technical Hiring Lead','Engineering',TRUE,'hiring@technova.com','9000000002'),
(39,3,'Recruitment Manager','Talent Acquisition',TRUE,'jobs@cloudmatrix.com','9000000003');