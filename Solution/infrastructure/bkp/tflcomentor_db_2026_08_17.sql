CREATE DATABASE  IF NOT EXISTS `tflcomentor_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tflcomentor_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 192.168.1.149    Database: tflcomentor_db
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `academic_informations`
--

DROP TABLE IF EXISTS `academic_informations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic_informations`
--

LOCK TABLES `academic_informations` WRITE;
/*!40000 ALTER TABLE `academic_informations` DISABLE KEYS */;
INSERT INTO `academic_informations` VALUES (1,24,'Information Technology ',NULL,2025,NULL,91.47,'PES Modern College of Enginnering'),(2,15,'BE','Information Technology',2023,2026,9.21,'Zeal College Of Engineering And Research,Pune'),(3,29,NULL,'Artificial Intellegence',2025,2028,95.00,'Vishwakarma Institute Of Tech'),(4,32,NULL,NULL,NULL,NULL,75.00,'JSPM UNIVERSITY PUNE'),(5,1,'Computer Engineering ','Software engineering ',2024,2028,NULL,'Smt. Kashibai Navale College of Engineering '),(6,33,'Computer Science',NULL,2025,2028,90.00,'Shree Ramchandra College Of Engg'),(7,22,'Btech','information technology',2022,2026,76.87,'Dr. J.J.Magdum College Of Engineering, Jaysingpur'),(8,8,'Computer Science','MCA',2025,2027,NULL,'Yashodeep Knowledge Hub Chh.Sambhaji Nagar'),(9,5,'Computer Engineering','BE',2024,2027,92.00,'Pune Vidhyarthi griha\'s college of engineering'),(10,27,'B.Tech','Information Technology',2022,2026,85.00,'J. J. Magdum Collage Of Engineering ,Jaysingpur'),(11,10,'Computer Science','MCA',2026,2028,99.00,'Deogiri College Chhatrapati Sambhajinagar'),(12,37,'Comuter Science','MCA',2022,2025,64.00,'Deogiri College Chh.Sambhjinager '),(13,31,'B Tech','Electronics and Telecommunication',2022,2026,66.00,'AISSMS Institute of Information Technology'),(14,18,'MSC','Computer Science',2025,2027,89.00,'Mumbai University'),(15,38,'MCS',NULL,2025,2027,NULL,'Abeda Inamder '),(16,17,'Computer Engineering',NULL,2023,2026,7.07,'sharad pawar college of engineering'),(17,28,'MSC ','DATA SCIENCE ',2026,2028,NULL,'JAYKRANTI COLLEGE '),(18,35,'Computer Science','MCA',2022,2025,70.00,'Deogiri College Chh.Sambhajinager');
/*!40000 ALTER TABLE `academic_informations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumni`
--

DROP TABLE IF EXISTS `alumni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni`
--

LOCK TABLES `alumni` WRITE;
/*!40000 ALTER TABLE `alumni` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assessments`
--

DROP TABLE IF EXISTS `assessments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `test_id` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `assigned_by` bigint DEFAULT NULL,
  `assigned_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `scheduled_at` datetime DEFAULT NULL,
  `status` enum('Assigned','Pending','Completed','UnAssigned') DEFAULT 'UnAssigned',
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_assessment_test` (`test_id`),
  KEY `fk_assessment_student` (`student_id`),
  KEY `fk_assessment_assigned_by` (`assigned_by`),
  CONSTRAINT `fk_assessment_assigned_by` FOREIGN KEY (`assigned_by`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_assessment_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_assessment_test` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessments`
--

LOCK TABLES `assessments` WRITE;
/*!40000 ALTER TABLE `assessments` DISABLE KEYS */;
INSERT INTO `assessments` VALUES (1,1,28,28,'2026-07-27 15:40:42','2026-07-27 10:13:00','Completed',1),(2,1,22,28,'2026-07-27 15:40:42','2026-07-27 10:13:00','Assigned',1),(3,1,29,28,'2026-07-27 15:40:42','2026-07-27 10:13:00','Assigned',1);
/*!40000 ALTER TABLE `assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (2,'Transflower Learning Pvt. Ltd.','https://transflower.in','EdTech','SERVICE','51-200','Training and technology company offering software learning and placement support.','2026-05-14 15:30:00','2026-05-14 15:30:00');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concepts`
--

DROP TABLE IF EXISTS `concepts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concepts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepts`
--

LOCK TABLES `concepts` WRITE;
/*!40000 ALTER TABLE `concepts` DISABLE KEYS */;
/*!40000 ALTER TABLE `concepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expertise`
--

DROP TABLE IF EXISTS `expertise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expertise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `runtime` varchar(50) DEFAULT NULL,
  `framework` varchar(50) DEFAULT NULL,
  `layer` varchar(50) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  CONSTRAINT `expertise_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expertise`
--

LOCK TABLES `expertise` WRITE;
/*!40000 ALTER TABLE `expertise` DISABLE KEYS */;
INSERT INTO `expertise` VALUES (1,28,'MySQL Server','MySQL','Database','MySQL');
/*!40000 ALTER TABLE `expertise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hands_on_results`
--

DROP TABLE IF EXISTS `hands_on_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hands_on_results`
--

LOCK TABLES `hands_on_results` WRITE;
/*!40000 ALTER TABLE `hands_on_results` DISABLE KEYS */;
/*!40000 ALTER TABLE `hands_on_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hands_on_submissions`
--

DROP TABLE IF EXISTS `hands_on_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hands_on_submissions`
--

LOCK TABLES `hands_on_submissions` WRITE;
/*!40000 ALTER TABLE `hands_on_submissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `hands_on_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interviews` (
  `interview_id` bigint NOT NULL AUTO_INCREMENT,
  `scheduled_at` datetime DEFAULT NULL,
  `mode` varchar(50) DEFAULT NULL,
  `status` enum('SCHEDULED','COMPLETED','CANCELED') DEFAULT NULL,
  `remark` text,
  `outcome` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `interviewer` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  PRIMARY KEY (`interview_id`),
  KEY `fk_interviewer` (`interviewer`),
  KEY `fk_interview_student` (`student_id`),
  CONSTRAINT `fk_interview_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_interviewer` FOREIGN KEY (`interviewer`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (1,'2026-05-16 11:00:00','ONLINE','SCHEDULED','Technical round 1 scheduled for Full Stack Developer Intern role.',NULL,'2026-05-14 15:40:00',5,11),(2,'2026-05-16 10:00:00','ONLINE','SCHEDULED','Backend round for API and database basics.',NULL,'2026-05-14 15:40:00',5,12),(3,'2026-05-17 14:00:00','OFFLINE','SCHEDULED','Frontend round for React and CSS skills.',NULL,'2026-05-14 15:50:00',5,3),(4,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 13:09:20',5,15),(5,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 12:01:19',5,3),(6,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 12:05:34',5,11);
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
INSERT INTO `job_applications` VALUES (1,1,23,1,'2026-05-14 15:35:00','2026-05-14 15:35:00'),(2,1,23,1,'2026-05-14 15:35:00','2026-05-14 15:35:00'),(3,2,24,1,'2026-05-14 15:45:00','2026-05-14 15:45:00');
/*!40000 ALTER TABLE `job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_descriptions`
--

DROP TABLE IF EXISTS `job_descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_descriptions`
--

LOCK TABLES `job_descriptions` WRITE;
/*!40000 ALTER TABLE `job_descriptions` DISABLE KEYS */;
INSERT INTO `job_descriptions` VALUES (1,5,'Full Stack Developer Intern','Looking for a candidate with basics of Node.js, React, Express, MySQL, REST APIs, and Git. The role includes API development, frontend integration, debugging, and database work.','Pune','INTERNSHIP'),(2,5,'Backend Developer Intern','Build REST APIs, work with MySQL, and support Node.js services.','Pune','INTERNSHIP'),(3,5,'Frontend Developer Intern','Work with React, responsive UI, and API integration.','Bangalore','INTERNSHIP');
/*!40000 ALTER TABLE `job_descriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_path_progress`
--

DROP TABLE IF EXISTS `learning_path_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_path_progress`
--

LOCK TABLES `learning_path_progress` WRITE;
/*!40000 ALTER TABLE `learning_path_progress` DISABLE KEYS */;
/*!40000 ALTER TABLE `learning_path_progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_paths`
--

DROP TABLE IF EXISTS `learning_paths`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_paths`
--

LOCK TABLES `learning_paths` WRITE;
/*!40000 ALTER TABLE `learning_paths` DISABLE KEYS */;
/*!40000 ALTER TABLE `learning_paths` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_resources`
--

DROP TABLE IF EXISTS `learning_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_resources`
--

LOCK TABLES `learning_resources` WRITE;
/*!40000 ALTER TABLE `learning_resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `learning_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mcq_options`
--

DROP TABLE IF EXISTS `mcq_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mcq_options`
--

LOCK TABLES `mcq_options` WRITE;
/*!40000 ALTER TABLE `mcq_options` DISABLE KEYS */;
INSERT INTO `mcq_options` VALUES (1,'implements','extends','inherits','super','B',1),(2,'Set','Queue','List','Map','C',2),(3,'Object','Class','System','Main','A',3),(4,'new','create','object','instance','A',4),(5,'List','Map','Queue','Set','A',5),(6,'IOException','SQLException','NullPointerException','FileNotFoundException','C',6),(7,'java.lang','java.util','java.sql','java.io','B',7),(8,'private','static','final','abstract','C',8),(9,'@Autowired','@Bean','@Service','@Component','A',9),(10,'@RestController','@Controller','@Service','@Repository','A',10),(11,'List','Set','Map','Queue','B',11),(12,'try-catch','throw','throws','finally','A',12),(13,'JDBC','JPA','Servlet','JSP','A',13),(14,'this','super','self','current','A',14),(15,'private','protected','default','public','C',15),(16,'Encapsulation','Polymorphism','Inheritance','Abstraction','B',16),(17,'Scanner','BufferedReader','Console','InputStream','A',17),(18,'implements','extends','inherits','super','A',18),(19,'run()','execute()','start()','begin()','C',19),(20,'@Component','@Repository','@Controller','@Service','D',20),(24,'extends',':','implements','inherits','B',21),(25,'Dictionary<TKey,TValue>','List<T>','HashSet<T>','Queue<T>','A',22),(26,'Object','Base','Class','Root','A',23),(27,'new','create','instance','object','A',24),(28,'System.IO','System.Collections.Generic','System.Data','System.Text','B',25),(29,'IOException','NullReferenceException','SqlException','DivideByZeroException','B',26),(30,'static','sealed','readonly','const','B',27),(31,'base','this','self','current','B',28),(32,'property','field','get/set','var','C',29),(33,'IEnumerable<T>','IDisposable','ICloneable','IComparable','A',30),(34,'try-catch','throw','throws','finally','A',31),(35,'await','async','task','thread','B',32),(36,'Dapper','Entity Framework Core','NHibernate','LINQ','B',33),(37,'SqlConnection','DbContext','DataTable','SqlCommand','A',34),(38,'[ApiController]','[Controller]','[Route]','[HttpGet]','A',35),(39,'override','virtual','abstract','sealed','A',36),(40,'List<T>','HashSet<T>','Dictionary<TKey,TValue>','Queue<T>','B',37),(41,'interface','Interface','implements','IInterface','A',38),(42,'Run()','Execute()','Start()','Begin()','C',39),(43,'ASP.NET Core','WPF','WinForms','Blazor','A',40),(44,'SELECT','INSERT','UPDATE','DELETE','A',41),(45,'GROUP BY','ORDER BY','WHERE','HAVING','C',42),(46,'INSERT','UPDATE','ALTER','CREATE','A',43),(47,'INSERT','UPDATE','DELETE','ALTER','B',44),(48,'DROP','TRUNCATE','DELETE','REMOVE','C',45),(49,'GROUP BY','ORDER BY','HAVING','WHERE','B',46),(50,'SUM()','AVG()','COUNT()','MAX()','C',47),(51,'DISTINCT','UNIQUE','PRIMARY','FILTER','A',48),(52,'ORDER BY','GROUP BY','HAVING','WHERE','B',49),(53,'HAVING','WHERE','ORDER BY','GROUP BY','A',50),(54,'LEFT JOIN','RIGHT JOIN','INNER JOIN','FULL JOIN','C',51),(55,'INNER JOIN','LEFT JOIN','RIGHT JOIN','CROSS JOIN','B',52),(56,'UNIQUE','FOREIGN KEY','PRIMARY KEY','CHECK','C',53),(57,'NOT NULL','UNIQUE','CHECK','DEFAULT','B',54),(58,'PRIMARY KEY','UNIQUE','FOREIGN KEY','INDEX','C',55),(59,'CREATE TABLE','ALTER TABLE','NEW TABLE','ADD TABLE','A',56),(60,'DELETE','TRUNCATE','DROP TABLE','REMOVE','C',57),(61,'DELETE','DROP','TRUNCATE','REMOVE','C',58),(62,'ROLLBACK','SAVEPOINT','COMMIT','BEGIN','C',59),(63,'COMMIT','ROLLBACK','SAVEPOINT','BEGIN','B',60);
/*!40000 ALTER TABLE `mcq_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_appointments`
--

DROP TABLE IF EXISTS `mentor_appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_appointments`
--

LOCK TABLES `mentor_appointments` WRITE;
/*!40000 ALTER TABLE `mentor_appointments` DISABLE KEYS */;
INSERT INTO `mentor_appointments` VALUES (1,3,28,'2026-04-25','10:00:00','COMPLETED','https://meet.google.com/abc-defg-hij','1-on-1 Technical Mentoring: React Advanced Patterns Discussion','2026-07-17 15:34:28','2026-07-17 15:34:28');
/*!40000 ALTER TABLE `mentor_appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_counselings`
--

DROP TABLE IF EXISTS `mentor_counselings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_counselings`
--

LOCK TABLES `mentor_counselings` WRITE;
/*!40000 ALTER TABLE `mentor_counselings` DISABLE KEYS */;
INSERT INTO `mentor_counselings` VALUES (1,28,5,'Interview Preparation','Career Guidance','https://meet.google.com/xyz-pqrs-tuv','2026-04-23 11:00:00','PENDING');
/*!40000 ALTER TABLE `mentor_counselings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_feedbacks`
--

DROP TABLE IF EXISTS `mentor_feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_feedbacks`
--

LOCK TABLES `mentor_feedbacks` WRITE;
/*!40000 ALTER TABLE `mentor_feedbacks` DISABLE KEYS */;
INSERT INTO `mentor_feedbacks` VALUES (1,28,4,5,'Code Review & Feedback: AWS Lambda Implementation','2026-04-24 15:30:00',1);
/*!40000 ALTER TABLE `mentor_feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_mentees`
--

DROP TABLE IF EXISTS `mentor_mentees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_mentees`
--

LOCK TABLES `mentor_mentees` WRITE;
/*!40000 ALTER TABLE `mentor_mentees` DISABLE KEYS */;
INSERT INTO `mentor_mentees` VALUES (1,2,32,'2026-08-14'),(2,2,15,'2026-08-14'),(3,2,30,'2026-08-14'),(4,2,21,'2026-08-14'),(5,2,16,'2026-08-14'),(6,2,14,'2026-08-14'),(7,2,31,'2026-08-14'),(8,2,3,'2026-08-14'),(9,2,6,'2026-08-14'),(10,5,33,'2026-08-14'),(11,5,29,'2026-08-14'),(12,5,24,'2026-08-14'),(13,5,28,'2026-08-14'),(14,5,38,'2026-08-14'),(15,8,26,'2026-08-14'),(16,8,37,'2026-08-14'),(17,8,10,'2026-08-14'),(18,8,9,'2026-08-14'),(19,7,4,'2026-08-14'),(20,7,39,'2026-08-14'),(21,1,19,'2026-08-14'),(22,1,20,'2026-08-14'),(23,1,12,'2026-08-14'),(24,8,40,'2026-08-14');
/*!40000 ALTER TABLE `mentor_mentees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification_categories`
--

DROP TABLE IF EXISTS `notification_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification_categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification_categories`
--

LOCK TABLES `notification_categories` WRITE;
/*!40000 ALTER TABLE `notification_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `notification_categories_id` bigint DEFAULT NULL,
  `message` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_notification_user` (`user_id`),
  KEY `fk_notification_category` (`notification_categories_id`),
  CONSTRAINT `fk_notification_category` FOREIGN KEY (`notification_categories_id`) REFERENCES `notification_categories` (`id`),
  CONSTRAINT `fk_notification_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oral_assessments`
--

DROP TABLE IF EXISTS `oral_assessments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oral_assessments`
--

LOCK TABLES `oral_assessments` WRITE;
/*!40000 ALTER TABLE `oral_assessments` DISABLE KEYS */;
/*!40000 ALTER TABLE `oral_assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oral_question_answers`
--

DROP TABLE IF EXISTS `oral_question_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oral_question_answers`
--

LOCK TABLES `oral_question_answers` WRITE;
/*!40000 ALTER TABLE `oral_question_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `oral_question_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `performance_snapshots`
--

DROP TABLE IF EXISTS `performance_snapshots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `performance_snapshots` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `performance_json` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`,`snapshot_date`),
  CONSTRAINT `fk_snapshot_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `performance_snapshots`
--

LOCK TABLES `performance_snapshots` WRITE;
/*!40000 ALTER TABLE `performance_snapshots` DISABLE KEYS */;
/*!40000 ALTER TABLE `performance_snapshots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_informations`
--

DROP TABLE IF EXISTS `personal_informations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_informations` (
  `id` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_informations`
--

LOCK TABLES `personal_informations` WRITE;
/*!40000 ALTER TABLE `personal_informations` DISABLE KEYS */;
INSERT INTO `personal_informations` (`id`, `user_id`, `first_name`, `last_name`, `gender`, `date_of_birth`, `email`, `address`, `pincode`) VALUES (8,1,'Sumit','Bhor','MALE',NULL,'sumitbhor227@gmail.com','Tambademala','412405'),(9,2,'Ravi','Tambade',NULL,NULL,'ravi.tambade@transflower.in',NULL,NULL),(10,3,'Vibhavari','Borole',NULL,NULL,'vibhavariborole@gmail.com',NULL,NULL),(11,4,'Siddhi ','Karve',NULL,NULL,'siddhikarve05@gmail.com',NULL,NULL),(12,5,'Sanika','Bhor','FEMALE',NULL,'bhorsanika0239@gmail.com','Tambademala','412405'),(13,6,'Nayan','Surve',NULL,'2004-03-02','survenayan870@gmail.com',NULL,NULL),(14,7,'Samruddhi','Rasal',NULL,NULL,'samruddhi.rasal03@gmail.com',NULL,NULL),(15,8,'Rahul','Gayke','MALE','2004-07-17','rahulgayke1704@gmail.com','Jalna','431202'),(16,9,'Karan','Bohare',NULL,NULL,'karanbohare2073@gmail.com',NULL,NULL),(17,10,'Ajay','Kale','MALE','2004-08-16','ajaykale985024@gmail.com','Chhatrapati Sambhajinagar','431001'),(18,11,'Omkar','Kurane',NULL,NULL,'kuraneomkar63@gmail.com',NULL,NULL),(19,12,'Harshal','Ghane',NULL,NULL,'harshalghane987@gmail.com',NULL,NULL),(20,13,'sumit','Bhor',NULL,NULL,'sumitbhor227@gmail.com',NULL,NULL),(21,14,'Sejal','Kulkarni',NULL,NULL,'sejalkulkarni017@gmail.com',NULL,NULL),(22,15,'Nirjala','Naik','FEMALE','2004-06-17','nirjalanaik1706@gmail.com','Khanapur.,Kolhapur','416209'),(23,16,'Sanika','Kulkarni',NULL,NULL,'sanikakulkarni880@gmail.com',NULL,NULL),(24,17,'Rohit','Dumbre','MALE','2004-03-30','rohitdumbre2005@gmail.com','At Post Otur , Tal - Junnar ,Dist - Pune','412409'),(25,18,'Saloni','Pawale','FEMALE','2004-05-13','pawalesaloni123@gmail.com','A-3, 205 Sanjana Apartment,Shirdi Nagar, Nallasopara(East)','401209'),(26,19,'Aditya','Borule',NULL,NULL,'5dadityaborule@gmail.com',NULL,NULL),(27,20,'Shivam','Harbale',NULL,NULL,'shivamh098@gmail.com',NULL,NULL),(28,21,'Pranita','Mane',NULL,NULL,'pranitamane2506@gmail.com',NULL,NULL),(29,22,'Roshan','Patil','MALE','2004-06-25','roshanpatil7806@gmail.com','At - khinda wharavde Tal-Radhangari','416211'),(30,23,'Nitish','Kharat',NULL,NULL,'nitishkharat608@gmail.com',NULL,NULL),(31,24,'SHRUTIK','DAUNDKAR','MALE','2007-01-03','shrutikdaundkar6225@gmail.com','SHEL-PIMPALGOAN TAL -KHED DIS - PUNE 410505','410505'),(32,25,'Prachi ','Madane',NULL,NULL,'prachimadane823@gmail.com',NULL,NULL),(33,26,'Nitish','Kharat',NULL,NULL,'kharatrahul1604@gmail.com',NULL,NULL),(34,27,'Sanika','Mohite','FEMALE','2003-09-07','sanikamohite79@gmail.com','A/P-Ainapur,Tal-Gadhinglaj,Dist-Kolhapur','416526'),(35,28,'Sakshi ','Rawade ','FEMALE','2004-01-18','sakshirawade1805@gmail.com','DWARIKA DHAM SOCIETY , TILEKAR NAGAR','411048'),(36,29,'Yash','Gawade','MALE','2006-03-01','yashgavde9@gmail.com','SahakarNagar Pune','411009'),(37,30,'Rutuja','Mokale',NULL,NULL,'rutujamokale2003@gmail.com',NULL,NULL),(38,31,'Tanvi','Sonawane','FEMALE','2004-04-18','tanvi.sonawane1804@gmail.com','5, Sundar Nagar, Perejpur Road, Sakri','424304'),(39,32,'SAHIL','KAMBLE','MALE','2004-01-19','sahilbajkamble@gmail.com',NULL,NULL),(40,33,'Payal ','Said','FEMALE','2006-10-20','payalsaid2006@gmail.com','Mahalunge Padwal','410515'),(41,34,'Prachi ','Madane',NULL,NULL,'prachimadane823@gmail.com',NULL,NULL),(42,35,'Karan','Bohare','MALE','2004-05-27','karanbohare2073@gmail.com','Village Galleborgaon    Tahsil Khuldabad    district Chhatrapati Sambhajinagar  State Maharashtra','431102'),(43,36,'Payal ','Said',NULL,NULL,'payalsaid2006@gmail.com',NULL,NULL),(44,37,'Sachin','Kharat','MALE','2004-06-24','kharatsachin012@gmail.com','At. Hasnabad, Tq. Bhokardan, Dist. Jalna, Maharashtra - 431135','431135'),(45,38,'Anish','Adak',NULL,NULL,'anishadak4210@gmail.com',NULL,NULL),(46,39,'Harshad','Devali',NULL,NULL,'harshaddevali@gmail.com',NULL,NULL),(47,40,'Mayuri','Ambildhoke',NULL,NULL,'mayuriambildhoke@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `personal_informations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `problem_statement_answers`
--

DROP TABLE IF EXISTS `problem_statement_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problem_statement_answers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `answer` text,
  `question_id` bigint DEFAULT NULL,
  `submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_psa_question` (`question_id`),
  CONSTRAINT `fk_psa_question` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problem_statement_answers`
--

LOCK TABLES `problem_statement_answers` WRITE;
/*!40000 ALTER TABLE `problem_statement_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `problem_statement_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professional_informations`
--

DROP TABLE IF EXISTS `professional_informations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional_informations`
--

LOCK TABLES `professional_informations` WRITE;
/*!40000 ALTER TABLE `professional_informations` DISABLE KEYS */;
INSERT INTO `professional_informations` VALUES (1,29,'Transflower Learning','Intern',NULL,NULL,NULL,NULL,0,'Pune','Nodedjs, DBMS, Dotnet, Java, Reactjs, '),(2,24,NULL,'Intern',NULL,NULL,NULL,NULL,NULL,NULL,'C++,C#,Java,Python,React.js,Node js, DBMS'),(3,15,'Transflower Learning Pvt. Ltd.','Software Developer Intern',NULL,NULL,NULL,NULL,1,'Pune',NULL),(4,32,'Transflower Learning Pvt Ltd','Full Stack Developer',NULL,NULL,NULL,NULL,1,'Pune',NULL),(5,5,'Transflower Learning Pvt. Ltd','Fullstack Developer ','INTERNSHIP',NULL,NULL,NULL,1,'Pune','.NET'),(6,10,'Transflower Learning PVT.LTD','Full Stack Developer','INTERNSHIP',NULL,NULL,NULL,1,'Pune','NodeJS, JavaScript, DotNet, Python'),(7,31,'Transflower Private Limited','AI Enabled Full Stack Developer',NULL,NULL,NULL,NULL,33,'Pune','Java, Node JS, Spring Boot, My SQL'),(8,33,'Transflower Learning Pvt. Ltd','Intern',NULL,NULL,NULL,NULL,0,'Pune','DBMS, Dotnet'),(9,8,'Transflower Learning pvt ltd','AI Enable full-stack developer ','INTERNSHIP',NULL,NULL,NULL,0,'pune','javaScript ,C#,python,Express,MYSQL,DotNet,React'),(10,37,'Transflower Pvt , Ltd','Software Devloper Intern',NULL,NULL,NULL,NULL,1,'Walvekar Nagar','Dotnet Devloper '),(11,18,'Transflower Learning Private Limited ','AI Enabled FullStack Developer',NULL,NULL,NULL,NULL,1,'Pune','Java, .Net, ASP.NET, C#, ReactJS, Nodejs, Javascript, Springboot, MySQL, HTML, CSS'),(12,38,'Transflower Learning','Intern',NULL,NULL,NULL,NULL,NULL,'Pune','dotNet'),(13,22,'Transflower Learning pvt.ltd.','Intern',NULL,NULL,NULL,NULL,0,'pune','DotNet'),(14,27,'TransFlower Learning Pvt.Itd.','Intern',NULL,NULL,NULL,NULL,2,'Pune','DotNet'),(15,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'C, Cpp , Java , Node js , dotnet , Python , Mysql '),(16,28,'TRANSFLOWER LEARNING PVT LTD. ','INTERN',NULL,NULL,NULL,NULL,0,'PUNE','PYTHON , SQL'),(17,17,'Transflower Learning pvt Ltd','Intern',NULL,NULL,NULL,NULL,0,'Pune','SQL'),(18,35,'Transflower Pvt .Ltd','Software Developer ','INTERNSHIP',NULL,NULL,NULL,1,'Walvekar Nager Pune','Dotnet Developer');
/*!40000 ALTER TABLE `professional_informations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_allocations`
--

DROP TABLE IF EXISTS `project_allocations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_allocations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint NOT NULL,
  `student_id` bigint NOT NULL,
  `joined_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `release_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pa_project` (`project_id`),
  KEY `fk_pa_student` (`student_id`),
  CONSTRAINT `fk_pa_project` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`),
  CONSTRAINT `fk_pa_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_allocations`
--

LOCK TABLES `project_allocations` WRITE;
/*!40000 ALTER TABLE `project_allocations` DISABLE KEYS */;
INSERT INTO `project_allocations` VALUES (1,3,3,'2026-07-17 12:00:00','2026-08-17 12:00:00'),(2,3,4,'2026-07-17 12:00:00','2026-08-17 12:00:00'),(4,1,5,'2026-07-17 13:28:13','2026-07-17 13:28:13'),(5,2,6,'2026-07-17 13:28:25','2026-07-17 13:28:25'),(6,6,3,'2026-07-23 16:50:05',NULL),(7,6,4,'2026-07-23 16:50:05',NULL),(11,6,4,'2026-07-23 17:49:01',NULL),(12,4,27,'2026-07-23 18:33:01',NULL),(13,4,25,'2026-07-23 18:33:01',NULL),(14,7,10,'2026-07-23 18:51:32',NULL),(15,7,10,'2026-07-23 18:51:45',NULL),(16,7,13,'2026-07-23 18:52:16',NULL),(17,4,13,'2026-07-23 18:55:13',NULL),(18,4,8,'2026-07-23 18:55:13',NULL),(19,4,15,'2026-07-23 18:55:13',NULL),(20,4,10,'2026-07-23 18:55:13',NULL),(21,4,13,'2026-07-23 18:55:15',NULL),(22,4,8,'2026-07-23 18:55:15',NULL),(23,4,15,'2026-07-23 18:55:15',NULL),(24,4,10,'2026-07-23 18:55:15',NULL),(25,3,19,'2026-07-23 18:55:24',NULL),(26,3,23,'2026-07-23 18:55:24',NULL),(27,9,8,'2026-07-24 11:06:09',NULL),(28,6,16,'2026-07-24 12:31:59',NULL),(29,10,12,'2026-07-28 15:55:01',NULL);
/*!40000 ALTER TABLE `project_allocations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` bigint NOT NULL AUTO_INCREMENT,
  `mentor_id` bigint DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `description` text,
  `repository_url` varchar(255) DEFAULT NULL,
  `status` enum('IN_PROGRESS','PENDING','COMPLETED') DEFAULT 'PENDING',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `fk_project_mentor` (`mentor_id`),
  CONSTRAINT `fk_project_mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,2,'TFLAssessment','Assessment platform for conducting online tests, evaluating performance, and generating results','https://github.com/RaviTambade/TFLAssessment.git','PENDING','2026-04-14 17:13:07'),(2,22,'E-Krushi-Project','Digital agriculture platform providing farmers with crop guidance, market prices, and smart farming solutions','https://github.com/RaviTambade/E-Krushi-Project.git','IN_PROGRESS','2026-04-14 17:13:07'),(3,28,'TFLGreenhouseAutomation','Automation system for monitoring and controlling greenhouse environment like temperature, humidity, and irrigation','https://github.com/RaviTambade/TFLGreenhouseAutomation.git','IN_PROGRESS','2026-04-14 17:13:07'),(4,28,'EAgroServices','Online platform offering agricultural services like equipment rental, soil testing, and advisory support','https://github.com/RaviTambade/EAgroServices.git','PENDING','2026-04-14 17:13:07'),(5,22,'InventoryManagement','System to manage stock, track inventory levels, and generate reports for business operations','https://github.com/RaviTambade/InventoryManagement.git','COMPLETED','2026-04-14 17:13:07'),(6,28,'Student Management System','Spring Boot and React project for managing students','https://github.com/nirjala/student-management','PENDING','2026-07-23 16:23:24'),(7,28,'Employee Management System','Spring Boot and React project for managing employees','https://github.com/nirjala/employee-management','PENDING','2026-07-23 17:52:26'),(8,28,'TFL STORE','TFL STORE','https://github.com/RaviTambade/tflstore','PENDING','2026-07-23 17:53:17'),(9,28,'TFL Portal','Tfl  portal','https://github.com/RaviTambade/tflportal','PENDING','2026-07-24 10:58:51'),(10,28,'ecommerce','nnn','https://github.com/RaviTambade/TFLECommerce','PENDING','2026-07-24 12:31:50');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
  `runtime` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Which keyword is used to inherit a class in Java?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Inheritance','JVM'),(2,'Which collection allows duplicate elements in Java?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Collections','JVM'),(3,'What is the parent class of every Java class?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Object Class','JVM'),(4,'Which keyword is used to create an object in Java?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Objects','JVM'),(5,'Which interface is implemented by ArrayList?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Collections','JVM'),(6,'Which exception is unchecked in Java?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Exception Handling','JVM'),(7,'Which package contains the HashMap class?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Collections','JVM'),(8,'Which keyword prevents method overriding?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Final Keyword','JVM'),(9,'Which annotation is used for dependency injection in Spring Boot?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Spring Boot','Annotations','JVM'),(10,'Which annotation is used to create a REST controller in Spring Boot?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Spring Boot','REST API','JVM'),(11,'Which collection stores unique elements?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Set','JVM'),(12,'Which keyword is used to handle exceptions?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Exception Handling','JVM'),(13,'Which statement is used to connect Java with a database?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','JDBC','JDBC','JVM'),(14,'Which keyword refers to the current object?','MCQ','BEGINNER','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','this Keyword','JVM'),(15,'Which access modifier allows access within the same package only?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Access Modifiers','JVM'),(16,'Which Java feature allows one method to have multiple forms?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Polymorphism','JVM'),(17,'Which class is used to read keyboard input?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Scanner','JVM'),(18,'Which keyword is used to inherit an interface?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Interfaces','JVM'),(19,'Which method starts a new thread?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Core Java','Multithreading','JVM'),(20,'Which Spring Boot annotation marks a service class?','MCQ','INTERMEDIATE','2026-07-24 16:11:38','APPROVED','Java','Backend','Spring Boot','Service Layer','JVM'),(21,'Which keyword is used to inherit a class in C#?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Inheritance','.NET CLR'),(22,'Which collection stores key-value pairs in C#?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Collections','.NET CLR'),(23,'Which class is the base class for all C# classes?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Object Class','.NET CLR'),(24,'Which keyword is used to create an object in C#?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Objects','.NET CLR'),(25,'Which namespace contains List<T>?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Collections','.NET CLR'),(26,'Which exception occurs when accessing a null object?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Exception Handling','.NET CLR'),(27,'Which keyword is used to prevent overriding?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Sealed','.NET CLR'),(28,'Which keyword represents the current object?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','this Keyword','.NET CLR'),(29,'Which keyword is used to define a property?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Properties','.NET CLR'),(30,'Which interface is implemented by List<T>?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Collections','.NET CLR'),(31,'Which keyword handles exceptions in C#?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Exception Handling','.NET CLR'),(32,'Which keyword is used for asynchronous methods?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Async Programming','.NET CLR'),(33,'Which ORM is developed by Microsoft?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','ASP.NET Core','Entity Framework','.NET CLR'),(34,'Which class is used to connect SQL Server?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','ADO.NET','Database Connectivity','.NET CLR'),(35,'Which attribute marks an ASP.NET Core API controller?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','ASP.NET Core','API','.NET CLR'),(36,'Which keyword allows method overriding?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Polymorphism','.NET CLR'),(37,'Which collection stores unique elements?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','HashSet','.NET CLR'),(38,'Which keyword is used to declare an interface?','MCQ','BEGINNER','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Interfaces','.NET CLR'),(39,'Which method starts a new thread?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','.NET','Multithreading','.NET CLR'),(40,'Which framework is used to build REST APIs in C#?','MCQ','INTERMEDIATE','2026-07-24 16:16:43','APPROVED','C#','Backend','ASP.NET Core','REST API','.NET CLR'),(41,'Which SQL statement is used to retrieve data from a table?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','SELECT','MySQL Server'),(42,'Which SQL clause is used to filter records?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','WHERE','MySQL Server'),(43,'Which SQL statement is used to insert new records?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','INSERT','MySQL Server'),(44,'Which SQL statement is used to modify existing records?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','UPDATE','MySQL Server'),(45,'Which SQL statement is used to delete records?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','DELETE','MySQL Server'),(46,'Which clause is used to sort query results?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','ORDER BY','MySQL Server'),(47,'Which SQL function returns the total number of rows?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','COUNT','MySQL Server'),(48,'Which keyword removes duplicate records from the result?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','DISTINCT','MySQL Server'),(49,'Which clause groups rows with the same values?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','GROUP BY','MySQL Server'),(50,'Which clause filters grouped records?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','HAVING','MySQL Server'),(51,'Which JOIN returns matching records from both tables?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','INNER JOIN','MySQL Server'),(52,'Which JOIN returns all records from the left table?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','LEFT JOIN','MySQL Server'),(53,'Which constraint uniquely identifies each row?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','PRIMARY KEY','MySQL Server'),(54,'Which constraint prevents duplicate values?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','UNIQUE','MySQL Server'),(55,'Which constraint establishes a relationship between tables?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','FOREIGN KEY','MySQL Server'),(56,'Which SQL statement creates a new table?','MCQ','BEGINNER','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','CREATE TABLE','MySQL Server'),(57,'Which command removes a table and its data permanently?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','DROP TABLE','MySQL Server'),(58,'Which command removes all rows but keeps the table structure?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','TRUNCATE','MySQL Server'),(59,'Which transaction command saves changes permanently?','MCQ','ADVANCE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','COMMIT','MySQL Server'),(60,'Which transaction command undoes changes?','MCQ','INTERMEDIATE','2026-07-24 16:17:10','APPROVED','MySQL','Database','MySQL','ROLLBACK','MySQL Server');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referrals`
--

DROP TABLE IF EXISTS `referrals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referrals`
--

LOCK TABLES `referrals` WRITE;
/*!40000 ALTER TABLE `referrals` DISABLE KEYS */;
/*!40000 ALTER TABLE `referrals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` bigint NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','Orchestrate over Roles and Membership Management'),(2,'Student','Takes assessments and views results'),(3,'Mentor','Guides students and reviews performance'),(4,'SME','Creates and reviews questions'),(5,'Employer','Views candidates and assessments'),(6,'Alumni','Former students associated with the system'),(7,'UnAssigned','Users that are not assigned with any role.');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shortlisted_candidates`
--

DROP TABLE IF EXISTS `shortlisted_candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shortlisted_candidates`
--

LOCK TABLES `shortlisted_candidates` WRITE;
/*!40000 ALTER TABLE `shortlisted_candidates` DISABLE KEYS */;
/*!40000 ALTER TABLE `shortlisted_candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sme_runtimes`
--

DROP TABLE IF EXISTS `sme_runtimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sme_runtimes` (
  `sme_runtime_id` bigint NOT NULL AUTO_INCREMENT,
  `user_roles_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`sme_runtime_id`),
  KEY `user_id` (`user_roles_id`),
  KEY `FKkd3ki16rvoq4c5w60inl2uafb` (`user_id`),
  CONSTRAINT `FKkd3ki16rvoq4c5w60inl2uafb` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sme_runtimes`
--

LOCK TABLES `sme_runtimes` WRITE;
/*!40000 ALTER TABLE `sme_runtimes` DISABLE KEYS */;
INSERT INTO `sme_runtimes` VALUES (4,1,4);
/*!40000 ALTER TABLE `sme_runtimes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_assessment_results`
--

DROP TABLE IF EXISTS `student_assessment_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_assessment_results` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `assessment_id` bigint DEFAULT NULL,
  `score` float DEFAULT NULL,
  `percentage` varchar(255) DEFAULT NULL,
  `time_taken_minutes` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_result_student` (`student_id`),
  KEY `fk_result_assessment` (`assessment_id`),
  CONSTRAINT `fk_result_assessment` FOREIGN KEY (`assessment_id`) REFERENCES `assessments` (`id`),
  CONSTRAINT `fk_result_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_assessment_results`
--

LOCK TABLES `student_assessment_results` WRITE;
/*!40000 ALTER TABLE `student_assessment_results` DISABLE KEYS */;
INSERT INTO `student_assessment_results` VALUES (5,22,7,100,'100',10),(6,22,34,50,'50',10),(7,28,1,62.5,'62.5',10);
/*!40000 ALTER TABLE `student_assessment_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentanswers`
--

DROP TABLE IF EXISTS `studentanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentanswers` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `StudentId` int NOT NULL,
  `AssessmentId` int NOT NULL,
  `QuestionId` int NOT NULL,
  `SelectedOption` varchar(255) DEFAULT NULL,
  `TimeTakenMinutes` int NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentanswers`
--

LOCK TABLES `studentanswers` WRITE;
/*!40000 ALTER TABLE `studentanswers` DISABLE KEYS */;
INSERT INTO `studentanswers` VALUES (2,4,5,1,'D',10,'2026-07-15 15:43:14'),(3,4,5,9,'A',10,'2026-07-15 15:43:14'),(4,28,46,9,'A',10,'2026-07-21 15:29:40'),(5,28,46,21,'A',10,'2026-07-21 15:29:40'),(6,28,46,22,'A',10,'2026-07-21 15:29:40'),(7,28,47,1,'A',10,'2026-07-21 15:31:03'),(8,28,47,9,'C',10,'2026-07-21 15:31:03'),(35,28,17,1,'D',10,'2026-07-21 18:17:41'),(36,28,17,3,'A',10,'2026-07-21 18:17:41'),(115,28,39,1,'A',10,'2026-07-21 18:22:34'),(116,28,39,9,'A',10,'2026-07-21 18:22:34'),(153,28,48,3,'D',10,'2026-07-22 12:28:42'),(154,28,48,4,'B',10,'2026-07-22 12:28:42'),(157,28,38,1,'A',10,'2026-07-23 10:19:35'),(158,28,38,9,'A',10,'2026-07-23 10:19:35'),(159,28,51,1,'B',10,'2026-07-24 16:21:12'),(160,28,51,2,'C',10,'2026-07-24 16:21:12'),(161,28,51,3,'A',10,'2026-07-24 16:21:12'),(162,28,51,4,'A',10,'2026-07-24 16:21:12'),(163,28,51,7,'C',10,'2026-07-24 16:21:12'),(168,22,7,12,'A',10,'2026-07-24 16:35:11'),(169,22,7,14,'A',10,'2026-07-24 16:35:11'),(170,22,34,1,'B',10,'2026-07-24 16:35:48'),(171,22,34,9,'C',10,'2026-07-24 16:35:48'),(172,28,1,1,'B',10,'2026-08-13 14:50:17'),(173,28,1,2,'C',10,'2026-08-13 14:50:17'),(174,28,1,3,'A',10,'2026-08-13 14:50:17'),(175,28,1,4,'A',10,'2026-08-13 14:50:17'),(176,28,1,7,'A',10,'2026-08-13 14:50:17'),(177,28,1,48,'D',10,'2026-08-13 14:50:17'),(178,28,1,49,'B',10,'2026-08-13 14:50:17'),(179,28,1,50,'D',10,'2026-08-13 14:50:17');
/*!40000 ALTER TABLE `studentanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_questions`
--

DROP TABLE IF EXISTS `test_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_questions`
--

LOCK TABLES `test_questions` WRITE;
/*!40000 ALTER TABLE `test_questions` DISABLE KEYS */;
INSERT INTO `test_questions` VALUES (1,1,3,1),(2,1,2,2),(3,1,1,3),(4,2,1,1),(5,3,2,1),(6,3,3,2),(7,3,4,3),(8,4,3,1),(9,4,4,2),(10,5,1,1),(11,5,3,2),(12,5,2,3),(13,5,4,4),(14,14,1,1),(15,14,2,2),(16,14,3,3),(17,14,4,4),(18,14,5,5),(19,15,1,1),(20,15,2,2),(21,15,3,3),(22,15,4,4),(23,15,5,5),(24,18,1,1),(25,18,2,2),(26,18,3,3),(27,18,4,4),(28,25,1,1),(29,25,2,2),(30,25,3,3),(31,25,4,4),(36,35,1,1),(37,35,9,2),(38,37,1,1),(39,37,9,2),(40,40,1,1),(41,40,9,2),(42,41,1,1),(43,41,9,2),(44,42,1,1),(45,42,9,2),(46,43,1,1),(47,43,9,2),(48,44,1,1),(49,44,9,2),(50,45,1,1),(51,45,9,2),(52,46,1,1),(53,46,9,2),(54,46,21,3),(55,46,22,4),(56,47,9,1),(57,47,21,2),(58,47,22,3),(59,48,12,1),(60,48,14,2),(61,49,1,1),(62,49,2,2),(63,49,3,3),(64,49,4,4),(65,49,7,5),(66,1,1,1),(67,1,2,2),(68,1,3,3),(69,1,4,4),(70,1,7,5),(71,1,48,1),(72,1,49,2),(73,1,50,3);
/*!40000 ALTER TABLE `test_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `description` text,
  `difficulty` enum('BEGINNER','INTERMEDIATE','ADVANCE') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tests_user` (`user_id`),
  CONSTRAINT `fk_tests_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,'Joins',9,'Left Join, Right Join, Inner Join, Outer Join','INTERMEDIATE','2026-07-27 16:32:02',1,28);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_logs`
--

DROP TABLE IF EXISTS `user_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_logs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `login_time` datetime DEFAULT NULL,
  `logout_time` datetime DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_logs_user` (`user_id`),
  KEY `fk_role` (`role_id`),
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`),
  CONSTRAINT `fk_user_logs_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
INSERT INTO `user_logs` VALUES (1,1,'2026-08-13 12:39:12',NULL,1),(2,1,'2026-08-13 12:53:44',NULL,1),(3,10,'2026-08-13 13:37:27','2026-08-13 13:51:41',7),(4,15,'2026-08-13 13:38:24','2026-08-13 13:46:34',1),(5,7,'2026-08-13 13:39:49','2026-08-13 13:40:30',7),(6,18,'2026-08-13 13:40:09',NULL,7),(7,5,'2026-08-13 13:40:46','2026-08-13 13:41:16',7),(8,1,'2026-08-13 13:41:45','2026-08-13 13:53:30',7),(9,1,'2026-08-13 13:41:45','2026-08-13 13:53:30',7),(10,1,'2026-08-13 13:41:45','2026-08-13 13:53:30',7),(11,7,'2026-08-13 13:45:08','2026-08-13 13:51:51',7),(12,15,'2026-08-13 13:46:48','2026-08-13 13:50:40',2),(13,6,'2026-08-13 13:48:55','2026-08-13 13:51:49',7),(14,11,'2026-08-13 13:49:04',NULL,2),(15,16,'2026-08-13 13:50:11',NULL,2),(16,29,'2026-08-13 13:50:26','2026-08-13 13:58:36',2),(17,24,'2026-08-13 13:50:40','2026-08-13 14:01:16',2),(18,15,'2026-08-13 13:50:49','2026-08-13 13:51:28',1),(19,18,'2026-08-13 13:51:39','2026-08-13 14:06:47',2),(20,5,'2026-08-13 13:51:52','2026-08-13 14:12:19',2),(21,15,'2026-08-13 13:52:01','2026-08-14 11:23:10',1),(22,14,'2026-08-13 13:52:07',NULL,2),(23,6,'2026-08-13 13:52:09','2026-08-13 13:52:55',2),(24,7,'2026-08-13 13:52:14','2026-08-13 13:55:06',2),(25,10,'2026-08-13 13:52:16','2026-08-13 14:12:11',2),(26,30,'2026-08-13 13:53:22',NULL,2),(27,21,'2026-08-13 13:53:41',NULL,2),(28,27,'2026-08-13 13:53:46',NULL,2),(29,26,'2026-08-13 13:54:00',NULL,2),(30,1,'2026-08-13 13:54:02','2026-08-14 11:23:42',7),(31,31,'2026-08-13 13:55:04','2026-08-13 13:57:40',7),(32,32,'2026-08-13 13:56:23','2026-08-14 11:18:41',2),(33,6,'2026-08-13 13:57:30','2026-08-13 13:57:38',2),(34,31,'2026-08-13 13:58:28','2026-08-14 11:22:08',2),(35,34,'2026-08-13 13:58:49',NULL,2),(36,1,'2026-08-13 13:59:32','2026-08-13 14:01:23',2),(37,6,'2026-08-13 13:59:40','2026-08-13 14:00:10',7),(38,6,'2026-08-13 14:00:26','2026-08-13 14:06:38',2),(39,29,'2026-08-13 14:00:34',NULL,2),(40,24,'2026-08-13 14:01:29','2026-08-13 14:02:52',2),(41,1,'2026-08-13 14:01:57','2026-08-14 11:31:57',2),(42,18,'2026-08-13 14:03:32','2026-08-13 14:06:47',2),(43,24,'2026-08-13 14:03:33','2026-08-13 14:04:20',2),(44,24,'2026-08-13 14:05:20','2026-08-13 14:08:32',2),(45,7,'2026-08-13 14:07:00',NULL,2),(46,6,'2026-08-13 14:07:00',NULL,2),(47,18,'2026-08-13 14:07:31',NULL,2),(48,33,'2026-08-13 14:08:44','2026-08-13 14:13:25',2),(49,24,'2026-08-13 14:10:01','2026-08-13 14:10:54',2),(50,24,'2026-08-13 14:12:04','2026-08-13 14:20:34',2),(51,35,'2026-08-13 14:13:29','2026-08-13 14:14:13',7),(52,33,'2026-08-13 14:13:41','2026-08-13 14:15:45',2),(53,15,'2026-08-13 14:14:39','2026-08-14 11:23:10',1),(54,33,'2026-08-13 14:17:49',NULL,2),(55,37,'2026-08-13 14:18:40',NULL,2),(56,35,'2026-08-13 14:18:43',NULL,7),(57,24,'2026-08-13 14:20:56',NULL,2),(58,32,'2026-08-14 11:13:18','2026-08-14 11:18:41',2),(59,18,'2026-08-14 11:17:45',NULL,2),(60,27,'2026-08-14 11:17:51',NULL,2),(61,22,'2026-08-14 11:18:16',NULL,2),(62,10,'2026-08-14 11:18:26',NULL,2),(63,5,'2026-08-14 11:18:30',NULL,2),(64,37,'2026-08-14 11:19:15',NULL,2),(65,8,'2026-08-14 11:19:22','2026-08-14 11:44:57',2),(66,15,'2026-08-14 11:19:40','2026-08-14 11:23:10',1),(67,1,'2026-08-14 11:20:00','2026-08-14 11:23:42',7),(68,33,'2026-08-14 11:20:19',NULL,2),(69,34,'2026-08-14 11:20:24',NULL,2),(70,35,'2026-08-14 11:20:30',NULL,2),(71,31,'2026-08-14 11:21:52','2026-08-14 11:22:08',2),(72,30,'2026-08-14 11:22:10',NULL,2),(73,31,'2026-08-14 11:22:23',NULL,2),(74,32,'2026-08-14 11:23:40','2026-08-14 11:27:40',1),(75,1,'2026-08-14 11:24:00','2026-08-14 11:31:57',2),(76,33,'2026-08-14 11:24:16',NULL,2),(77,38,'2026-08-14 11:25:30','2026-08-14 11:56:22',2),(78,17,'2026-08-14 11:25:36',NULL,2),(79,34,'2026-08-14 11:25:55',NULL,2),(80,32,'2026-08-14 11:27:47','2026-08-14 11:33:18',1),(81,28,'2026-08-14 11:28:07',NULL,2),(82,28,'2026-08-14 11:28:18',NULL,2),(83,17,'2026-08-14 11:28:52',NULL,2),(84,32,'2026-08-14 11:29:20','2026-08-14 11:33:18',1),(85,1,'2026-08-14 11:32:16','2026-08-14 11:32:38',2),(86,32,'2026-08-14 11:33:26',NULL,2),(87,1,'2026-08-14 11:33:30','2026-08-14 11:32:38',2),(88,32,'2026-08-14 11:33:33','2026-08-14 11:58:15',1),(89,1,'2026-08-14 11:32:55',NULL,2),(90,8,'2026-08-14 11:38:57','2026-08-14 11:44:57',2),(91,8,'2026-08-14 11:52:16',NULL,2),(92,32,'2026-08-14 11:56:38','2026-08-14 11:58:15',1),(93,38,'2026-08-14 11:58:33',NULL,1),(94,38,'2026-08-14 12:12:41',NULL,2),(95,32,'2026-08-14 12:23:17','2026-08-14 12:24:06',3),(96,32,'2026-08-14 12:24:14','2026-08-14 12:26:31',1),(97,32,'2026-08-14 12:38:18','2026-08-14 13:05:31',1),(98,32,'2026-08-14 13:05:37','2026-08-14 13:05:49',3),(99,2,'2026-08-14 13:06:57',NULL,3),(100,15,'2026-08-15 10:55:57','2026-08-15 11:43:30',3),(101,32,'2026-08-15 11:02:30',NULL,2),(102,15,'2026-08-15 11:34:21','2026-08-15 11:43:30',3),(103,15,'2026-08-15 11:43:55','2026-08-15 11:44:21',1),(104,15,'2026-08-15 11:44:35','2026-08-15 11:44:51',3),(105,2,'2026-08-15 11:45:17',NULL,3),(106,32,'2026-08-17 15:09:06',NULL,2);
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1,1,'2026-08-13 07:08:20','2026-08-13 08:11:29','INACTIVE'),(2,2,7,'2026-08-13 07:10:29','2026-08-13 08:11:55','INACTIVE'),(3,3,7,'2026-08-13 07:25:13','2026-08-13 08:12:02','INACTIVE'),(4,4,7,'2026-08-13 07:29:11','2026-08-13 08:12:09','INACTIVE'),(5,5,7,'2026-08-13 07:32:02','2026-08-13 08:12:18','INACTIVE'),(6,6,7,'2026-08-13 07:52:59','2026-08-13 08:12:26','INACTIVE'),(7,7,7,'2026-08-13 07:53:06','2026-08-13 08:12:34','INACTIVE'),(8,1,7,'2026-08-13 07:55:14','2026-08-13 08:11:34','INACTIVE'),(9,2,7,'2026-08-13 07:58:27','2026-08-13 08:11:55','INACTIVE'),(10,3,7,'2026-08-13 07:58:28','2026-08-13 08:12:02','INACTIVE'),(11,4,7,'2026-08-13 07:58:53','2026-08-13 08:12:09','INACTIVE'),(12,5,7,'2026-08-13 08:00:43','2026-08-13 08:12:18','INACTIVE'),(13,6,7,'2026-08-13 08:04:36','2026-08-13 08:12:26','INACTIVE'),(14,7,7,'2026-08-13 08:05:04','2026-08-13 08:12:34','INACTIVE'),(15,8,7,'2026-08-13 08:05:10','2026-08-13 08:12:42','INACTIVE'),(16,9,7,'2026-08-13 08:05:14','2026-08-13 08:12:50','INACTIVE'),(17,10,7,'2026-08-13 08:05:15','2026-08-13 08:13:12','INACTIVE'),(18,11,7,'2026-08-13 08:06:03','2026-08-13 08:13:19','INACTIVE'),(19,12,7,'2026-08-13 08:06:25','2026-08-13 08:13:26','INACTIVE'),(20,13,7,'2026-08-13 08:06:29','2026-08-13 08:13:41','INACTIVE'),(21,14,7,'2026-08-13 08:06:56','2026-08-13 08:13:49','INACTIVE'),(22,15,1,'2026-08-13 08:06:59','2026-08-13 08:07:49','ACTIVE'),(23,16,7,'2026-08-13 08:07:10','2026-08-13 08:14:07','INACTIVE'),(24,17,7,'2026-08-13 08:07:52','2026-08-13 08:14:14','INACTIVE'),(25,18,7,'2026-08-13 08:07:55','2026-08-13 08:14:22','INACTIVE'),(26,19,7,'2026-08-13 08:08:11','2026-08-13 08:14:39','INACTIVE'),(27,20,7,'2026-08-13 08:08:11','2026-08-13 08:14:46','INACTIVE'),(28,21,7,'2026-08-13 08:08:37','2026-08-13 08:14:54','INACTIVE'),(29,22,7,'2026-08-13 08:09:00','2026-08-13 08:15:02','INACTIVE'),(30,23,7,'2026-08-13 08:09:41','2026-08-13 08:15:10','INACTIVE'),(31,24,7,'2026-08-13 08:09:49','2026-08-13 08:15:21','INACTIVE'),(32,25,7,'2026-08-13 08:10:08','2026-08-13 08:15:27','INACTIVE'),(33,26,7,'2026-08-13 08:10:19','2026-08-13 08:15:34','INACTIVE'),(34,27,7,'2026-08-13 08:10:20','2026-08-13 08:15:40','INACTIVE'),(35,28,7,'2026-08-13 08:10:23','2026-08-13 08:15:50','INACTIVE'),(36,29,7,'2026-08-13 08:11:24','2026-08-13 08:16:00','INACTIVE'),(37,1,2,'2026-08-13 08:11:34','2026-08-14 06:25:04','INACTIVE'),(38,2,2,'2026-08-13 08:11:55','2026-08-13 08:11:55','ACTIVE'),(39,3,2,'2026-08-13 08:12:02','2026-08-14 06:25:33','INACTIVE'),(40,4,2,'2026-08-13 08:12:09','2026-08-13 08:12:09','ACTIVE'),(41,5,2,'2026-08-13 08:12:18','2026-08-13 08:12:18','ACTIVE'),(42,6,2,'2026-08-13 08:12:26','2026-08-13 08:12:26','ACTIVE'),(43,7,2,'2026-08-13 08:12:34','2026-08-13 08:13:05','INACTIVE'),(44,8,2,'2026-08-13 08:12:42','2026-08-13 08:12:42','ACTIVE'),(45,9,2,'2026-08-13 08:12:50','2026-08-13 08:12:50','ACTIVE'),(46,7,2,'2026-08-13 08:12:53','2026-08-13 08:13:05','INACTIVE'),(47,10,2,'2026-08-13 08:13:12','2026-08-13 08:13:12','ACTIVE'),(48,11,2,'2026-08-13 08:13:19','2026-08-13 08:13:19','ACTIVE'),(49,12,2,'2026-08-13 08:13:26','2026-08-13 08:13:26','ACTIVE'),(50,13,2,'2026-08-13 08:13:41','2026-08-14 05:50:52','INACTIVE'),(51,14,2,'2026-08-13 08:13:49','2026-08-13 08:13:49','ACTIVE'),(52,13,2,'2026-08-13 08:13:52','2026-08-14 05:50:52','INACTIVE'),(53,15,4,'2026-08-13 08:13:59','2026-08-13 08:13:59','ACTIVE'),(54,15,2,'2026-08-13 08:13:59','2026-08-13 08:13:59','ACTIVE'),(55,15,3,'2026-08-13 08:13:59','2026-08-13 08:13:59','ACTIVE'),(56,16,2,'2026-08-13 08:14:07','2026-08-13 08:14:07','ACTIVE'),(57,17,2,'2026-08-13 08:14:14','2026-08-13 08:14:14','ACTIVE'),(58,18,2,'2026-08-13 08:14:22','2026-08-13 08:14:22','ACTIVE'),(59,19,2,'2026-08-13 08:14:39','2026-08-13 08:14:39','ACTIVE'),(60,20,2,'2026-08-13 08:14:46','2026-08-13 08:14:46','ACTIVE'),(61,21,2,'2026-08-13 08:14:54','2026-08-13 08:14:54','ACTIVE'),(62,22,2,'2026-08-13 08:15:02','2026-08-13 08:15:02','ACTIVE'),(63,23,2,'2026-08-13 08:15:10','2026-08-13 08:15:10','ACTIVE'),(64,24,2,'2026-08-13 08:15:21','2026-08-13 08:15:21','ACTIVE'),(65,25,2,'2026-08-13 08:15:28','2026-08-13 08:15:28','ACTIVE'),(66,26,2,'2026-08-13 08:15:34','2026-08-13 08:15:34','ACTIVE'),(67,27,2,'2026-08-13 08:15:40','2026-08-13 08:15:40','ACTIVE'),(68,28,2,'2026-08-13 08:15:50','2026-08-13 08:15:50','ACTIVE'),(69,29,2,'2026-08-13 08:16:00','2026-08-13 08:16:00','ACTIVE'),(70,7,2,'2026-08-13 08:16:10','2026-08-13 08:16:10','ACTIVE'),(71,30,7,'2026-08-13 08:20:00','2026-08-13 08:22:29','INACTIVE'),(72,30,2,'2026-08-13 08:22:29','2026-08-13 08:22:29','ACTIVE'),(73,31,7,'2026-08-13 08:23:16','2026-08-13 08:25:03','INACTIVE'),(74,32,7,'2026-08-13 08:23:56','2026-08-13 08:25:11','INACTIVE'),(75,33,7,'2026-08-13 08:24:37','2026-08-13 08:25:17','INACTIVE'),(76,31,2,'2026-08-13 08:25:03','2026-08-13 08:25:03','ACTIVE'),(77,32,2,'2026-08-13 08:25:11','2026-08-13 08:25:11','ACTIVE'),(78,33,2,'2026-08-13 08:25:17','2026-08-13 08:25:17','ACTIVE'),(79,34,7,'2026-08-13 08:25:19','2026-08-13 08:28:43','INACTIVE'),(80,35,7,'2026-08-13 08:28:07','2026-08-13 08:28:48','INACTIVE'),(81,34,2,'2026-08-13 08:28:43','2026-08-13 08:28:43','ACTIVE'),(82,35,2,'2026-08-13 08:28:49','2026-08-13 08:28:49','ACTIVE'),(83,32,3,'2026-08-13 08:28:58','2026-08-13 08:28:58','ACTIVE'),(84,32,1,'2026-08-13 08:28:58','2026-08-13 08:28:58','ACTIVE'),(85,32,4,'2026-08-13 08:28:58','2026-08-13 08:28:58','ACTIVE'),(86,36,7,'2026-08-13 08:37:19','2026-08-13 08:45:13','INACTIVE'),(87,37,7,'2026-08-13 08:42:38','2026-08-13 08:45:01','INACTIVE'),(88,37,2,'2026-08-13 08:45:03','2026-08-13 08:45:03','ACTIVE'),(89,36,2,'2026-08-13 08:45:13','2026-08-13 08:45:13','ACTIVE'),(90,38,7,'2026-08-14 05:48:16','2026-08-14 05:50:09','INACTIVE'),(91,38,2,'2026-08-14 05:50:10','2026-08-14 05:50:10','ACTIVE'),(92,3,3,'2026-08-14 06:06:56','2026-08-14 06:25:33','INACTIVE'),(93,1,7,'2026-08-14 06:25:04','2026-08-14 06:25:04','ACTIVE'),(94,3,7,'2026-08-14 06:25:33','2026-08-14 06:25:45','INACTIVE'),(95,3,2,'2026-08-14 06:25:45','2026-08-14 06:25:45','ACTIVE'),(96,38,1,'2026-08-14 06:26:05','2026-08-14 07:09:18','INACTIVE'),(97,38,3,'2026-08-14 06:26:15','2026-08-14 07:09:18','INACTIVE'),(98,8,3,'2026-08-14 07:08:34','2026-08-14 07:08:34','ACTIVE'),(99,13,2,'2026-08-14 07:08:48','2026-08-14 07:08:48','ACTIVE'),(100,13,3,'2026-08-14 07:08:48','2026-08-14 07:08:48','ACTIVE'),(101,5,3,'2026-08-14 07:09:38','2026-08-14 07:09:38','ACTIVE'),(102,2,1,'2026-08-14 07:09:58','2026-08-14 07:09:58','ACTIVE'),(103,2,4,'2026-08-14 07:09:58','2026-08-14 07:09:58','ACTIVE'),(104,2,3,'2026-08-14 07:09:58','2026-08-14 07:09:58','ACTIVE'),(105,7,3,'2026-08-14 07:10:24','2026-08-14 07:10:24','ACTIVE'),(106,39,7,'2026-08-14 07:20:38','2026-08-14 07:20:38','ACTIVE'),(107,40,7,'2026-08-14 07:30:15','2026-08-14 07:30:15','ACTIVE');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `contact` varchar(15) DEFAULT NULL,
  `password` text,
  `status` enum('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'8530086989','Sumit1@2','ACTIVE','2026-08-13 13:25:14','2026-08-14 11:21:04'),(2,'9881735801','89gsbjwa','ACTIVE','2026-08-13 13:28:27','2026-08-13 13:28:27'),(3,'7218540228','j43z3q0r','ACTIVE','2026-08-13 13:28:28','2026-08-13 13:28:28'),(4,'8855848042','qypyqnwj','ACTIVE','2026-08-13 13:28:53','2026-08-13 13:28:53'),(5,'8446756339','k07on9i9','ACTIVE','2026-08-13 13:30:43','2026-08-13 13:30:43'),(6,'9022067023','mrp2k4qp','ACTIVE','2026-08-13 13:34:36','2026-08-13 13:34:36'),(7,'9665992262','jsfdl90p','ACTIVE','2026-08-13 13:35:04','2026-08-13 13:35:04'),(8,'9130240968','Rahul@6957','ACTIVE','2026-08-13 13:35:10','2026-08-14 11:35:14'),(9,'9765869164','cb1fgc7v','ACTIVE','2026-08-13 13:35:14','2026-08-13 13:35:14'),(10,'7498105029','12345','ACTIVE','2026-08-13 13:35:15','2026-08-14 11:22:50'),(11,'9834625196','31hj2s4n','ACTIVE','2026-08-13 13:36:03','2026-08-13 13:36:03'),(12,'9561595140','kc9w87zc','ACTIVE','2026-08-13 13:36:25','2026-08-13 13:36:25'),(13,'8530086989','vvr37jst','ACTIVE','2026-08-13 13:36:29','2026-08-13 13:36:29'),(14,'9270309017','eka7hwmj','ACTIVE','2026-08-13 13:36:56','2026-08-13 13:36:56'),(15,'7972520102','12345','ACTIVE','2026-08-13 13:36:59','2026-08-15 11:42:17'),(16,'9503046227','9e81u0nt','ACTIVE','2026-08-13 13:37:10','2026-08-13 13:37:10'),(17,'9156350630','eitr6qf9','ACTIVE','2026-08-13 13:37:52','2026-08-13 13:37:52'),(18,'7820939848','rpeheqz4','ACTIVE','2026-08-13 13:37:55','2026-08-13 13:37:55'),(19,'8767846705','fiacglth','ACTIVE','2026-08-13 13:38:11','2026-08-13 13:38:11'),(20,'8668618392','3j35ih3o','ACTIVE','2026-08-13 13:38:11','2026-08-13 13:38:11'),(21,'8830361396','r8glul43','ACTIVE','2026-08-13 13:38:37','2026-08-13 13:38:37'),(22,'8767705424','aw1kv5m5','ACTIVE','2026-08-13 13:39:00','2026-08-13 13:39:00'),(23,'8149416008','vda2og6r','ACTIVE','2026-08-13 13:39:41','2026-08-13 14:16:18'),(24,'9359595484','shrutik@5115','ACTIVE','2026-08-13 13:39:49','2026-08-13 14:20:23'),(25,'7276282852','xiumabqa','ACTIVE','2026-08-13 13:40:08','2026-08-13 13:40:08'),(26,'8149416008','nitish','ACTIVE','2026-08-13 13:40:19','2026-08-13 13:40:19'),(27,'8767399790','3i2h9zzb','ACTIVE','2026-08-13 13:40:20','2026-08-13 13:40:20'),(28,'7558623461','r7qre5zl','ACTIVE','2026-08-13 13:40:23','2026-08-13 13:40:23'),(29,'9022974918','zzp7hd4s','ACTIVE','2026-08-13 13:41:24','2026-08-13 13:41:24'),(30,'9529259355','w1mugnmh','ACTIVE','2026-08-13 13:50:00','2026-08-13 13:50:00'),(31,'7499583199','jais05c5','ACTIVE','2026-08-13 13:53:16','2026-08-13 13:53:16'),(32,'7972542628','12345','ACTIVE','2026-08-13 13:53:56','2026-08-14 11:27:33'),(33,'7420974850','2q3rireq','ACTIVE','2026-08-13 13:54:37','2026-08-13 13:54:37'),(34,'7276282852','ui3ckwuw','ACTIVE','2026-08-13 13:55:19','2026-08-13 13:55:19'),(35,'9765869164','yk6xafye','ACTIVE','2026-08-13 13:58:07','2026-08-13 13:58:07'),(36,'7420974850','jjpm795k','ACTIVE','2026-08-13 14:07:19','2026-08-13 14:07:19'),(37,'9637661382','xaqpasem','ACTIVE','2026-08-13 14:12:38','2026-08-13 14:12:38'),(38,'7387745636','i4rfpsg8','ACTIVE','2026-08-14 11:18:16','2026-08-14 11:18:16'),(39,'7498540791','w0gv8rsp','ACTIVE','2026-08-14 12:50:38','2026-08-14 12:50:38'),(40,'7774866261','l40e78xz','ACTIVE','2026-08-14 13:00:15','2026-08-14 13:00:15');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tflcomentor_db'
--

--
-- Dumping routines for database 'tflcomentor_db'
--
/*!50003 DROP PROCEDURE IF EXISTS `CalculateStudentResult` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `CalculateStudentResult`(
    IN p_student_id INT,
    IN p_assessment_id INT
)
BEGIN
    DECLARE total_q INT DEFAULT 0;
    DECLARE correct_q INT DEFAULT 0;
    DECLARE wrong_q INT DEFAULT 0;
    DECLARE score_percent DECIMAL(5,2);

    SELECT COUNT(*) INTO total_q
    FROM studentanswers sa
    WHERE sa.StudentId = p_student_id
      AND sa.AssessmentId = p_assessment_id;

    SELECT COUNT(*) INTO correct_q
    FROM studentanswers sa
    INNER JOIN mcq_options mo
        ON sa.QuestionId = mo.question_id
    WHERE sa.StudentId = p_student_id
      AND sa.AssessmentId = p_assessment_id
      AND sa.SelectedOption = mo.correct_answer;

    SET wrong_q = total_q - correct_q;

    IF total_q > 0 THEN
        SET score_percent = (correct_q / total_q) * 100;
    ELSE
        SET score_percent = 0;
    END IF;

    INSERT INTO student_assessment_results
    (
        StudentId,
        AssessmentId,
        TotalQuestions,
        CorrectAnswers,
        WrongAnswers,
        Score,
        CreatedAt
    )
    VALUES
    (
        p_student_id,
        p_assessment_id,
        total_q,
        correct_q,
        wrong_q,
        score_percent,
        NOW()
    );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRecentMentorshipActivities` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRecentMentorshipActivities`(
    IN p_mentor_id BIGINT
)
BEGIN

    SELECT
        pi.full_name AS mentee_name,
        'Session' AS activity_type,
        ma.agenda AS activity,
        ma.appointment_date AS activity_date,
        ma.status
    FROM mentor_appointments ma
    JOIN personal_informations pi
        ON ma.student_id = pi.user_id
    WHERE ma.mentor_id = p_mentor_id

    UNION ALL

    SELECT
        pi.full_name,
        'Feedback',
        mf.review_text,
        DATE(mf.created_at),
        CASE
            WHEN mf.status = 1 THEN 'COMPLETED'
            ELSE 'PENDING'
        END
    FROM mentor_feedbacks mf
    JOIN personal_informations pi
        ON mf.student_id = pi.user_id
    WHERE mf.mentor_id = p_mentor_id

    UNION ALL

    SELECT
        pi.full_name,
        'Guidance',
        CONCAT(mc.subject, ': ', mc.description),
        DATE(mc.counseling_date),
        COALESCE(mc.remark, 'PENDING')
    FROM mentor_counselings mc
    JOIN personal_informations pi
        ON mc.mentee_id = pi.user_id
    WHERE mc.mentor_id = p_mentor_id

    ORDER BY activity_date DESC
    LIMIT 10;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetStudentAssessmentReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetStudentAssessmentReport`(
    IN p_student_id INT,
    IN p_assessment_id INT
)
BEGIN
    SELECT
        p_student_id AS StudentId,
        p_assessment_id AS AssessmentId,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption = m.correct_answer
            THEN tq.question_id
        END) AS Score,

        COUNT(DISTINCT tq.question_id) AS TotalQuestions,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption = m.correct_answer
            THEN tq.question_id
        END) AS CorrectAnswers,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption != m.correct_answer
                 AND s.selectedoption IS NOT NULL
            THEN tq.question_id
        END) AS WrongAnswers,

        ROUND(
            COUNT(DISTINCT CASE
                WHEN s.selectedoption = m.correct_answer
                THEN tq.question_id
            END) * 100.0 /
            COUNT(DISTINCT tq.question_id),
            2
        ) AS Percentage

    FROM test_questions tq
    INNER JOIN mcq_options m
        ON tq.question_id = m.question_id
    LEFT JOIN studentanswers s
        ON tq.question_id = s.questionid
       AND s.studentid = p_student_id
       AND s.assessmentid = p_assessment_id
    WHERE tq.test_id = p_assessment_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserlistWithRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserlistWithRole`()
BEGIN
    SELECT
        p.user_id,
        CONCAT(p.first_name,' ',p.last_name) AS full_name,
        u.created_at,
        u.status,
        r.role_name
    FROM personal_informations p
    LEFT JOIN user_roles ur
        ON p.user_id = ur.user_id
    LEFT JOIN roles r
        ON ur.role_id = r.role_id
    LEFT JOIN users u
        ON p.user_id = u.id
    ORDER BY p.user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `RegisterUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RegisterUser`(
    IN p_contact VARCHAR(20),
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255)
)
BEGIN
    DECLARE v_user_id BIGINT;
    DECLARE v_personal_id INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;

    START TRANSACTION;

    -- Insert into users
    INSERT INTO users
    (
        contact,
        password,
        status,
        created_at,
        updated_at
    )
    VALUES
    (
        p_contact,
        p_password,
        'ACTIVE',
        NOW(),
        NOW()
    );

    SET v_user_id = LAST_INSERT_ID();

    -- Generate next id for personal_informations
    SELECT COALESCE(MAX(id), 0) + 1
    INTO v_personal_id
    FROM personal_informations
    FOR UPDATE;

    -- Insert personal information
    INSERT INTO personal_informations
    (
        id,
        user_id,
        first_name,
        last_name,
        email
    )
    VALUES
    (
        v_personal_id,
        v_user_id,
        p_first_name,
        p_last_name,
        p_email
    );

    -- Assign Student role (Role ID = 7)
    INSERT INTO user_roles
    (
        user_id,
        role_id,
        status
    )
    VALUES
    (
        v_user_id,
        7,
        'ACTIVE'
    );

    COMMIT;

    SELECT
        'SUCCESS' AS status,
        v_user_id AS user_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_user_complete_profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_update_user_complete_profile`(

    IN p_user_id BIGINT,

    -- Personal
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_gender ENUM('MALE','FEMALE'),
    IN p_date_of_birth DATE,
    IN p_email VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_pincode VARCHAR(10),

    -- Professional
    IN p_company_name VARCHAR(100),
    IN p_job_title VARCHAR(100),
    IN p_employment_type ENUM('FULL_TIME','PART_TIME','INTERNSHIP'),
    IN p_start_date DATE,
    IN p_end_date DATE,
    IN p_is_current_job TINYINT(1),
    IN p_experience_years BIGINT,
    IN p_location VARCHAR(100),
    IN p_skills TEXT,

    -- Academic
    IN p_stream_name VARCHAR(100),
    IN p_specialization VARCHAR(100),
    IN p_enrollment_year BIGINT,
    IN p_passing_year BIGINT,
    IN p_percentage DECIMAL(5,2),
    IN p_college_name VARCHAR(255)

)
BEGIN

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
    END;

    START TRANSACTION;

    CALL sp_update_personal_information(
        p_user_id,
        p_first_name,
        p_last_name,
        p_gender,
        p_date_of_birth,
        p_email,
        p_address,
        p_pincode
    );

    CALL sp_update_professional_information(
        p_user_id,
        p_company_name,
        p_job_title,
        p_employment_type,
        p_start_date,
        p_end_date,
        p_is_current_job,
        p_experience_years,
        p_location,
        p_skills
    );

    CALL sp_update_academic_information(
        p_user_id,
        p_stream_name,
        p_specialization,
        p_enrollment_year,
        p_passing_year,
        p_percentage,
        p_college_name
    );

    COMMIT;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-17 16:32:53
