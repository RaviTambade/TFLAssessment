CREATE DATABASE  IF NOT EXISTS `tflcomentor_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tflcomentor_db`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: tflcomentor_db
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic_informations`
--

LOCK TABLES `academic_informations` WRITE;
/*!40000 ALTER TABLE `academic_informations` DISABLE KEYS */;
INSERT INTO `academic_informations` VALUES (1,12,'Computer Engineering','Cloud Computing',2024,2027,92.00,'Pune Vidhyarhi Griha\'s College of Engineering, pune'),(2,5,'MCA','cloud',2025,2027,75.00,'DR.BATU '),(3,23,'Engineering','Electronics and Telecommunication',2019,2023,9.05,'Dr.Dy Patil, Pimpri'),(4,24,'Electronics and Telecommunication','Electronics and Telecommunication',2022,2026,65.00,'AISSMS IOIT'),(5,14,NULL,'Artificial Intelligence & Analytics',2022,2026,8.36,'MIT Art Design & Technology University'),(6,7,'Computer Science & Engineering','AI & Analytics',2022,2026,8.09,'MIT ADT University'),(7,6,'Computer Science & Engineering','Core',2022,2026,74.00,'MIT ADT University'),(8,15,NULL,NULL,NULL,2026,NULL,'MIT ADT University '),(9,16,'Engineering','Cloud Computing',2022,2026,85.50,'MIT ADT University'),(10,9,'Computer Engineering ','Machine learning ',2028,2028,85.00,'smt. kashibai navale college of engineering  vadgoan budruk '),(11,25,'Computer Science','Full Stack Development',2022,2025,65.00,'Deogiri Collage Chatrapati  Sambajinagar'),(12,26,'BE','Computer Engineering',2020,2023,78.85,'JSPM BSIOTR ');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessments`
--

LOCK TABLES `assessments` WRITE;
/*!40000 ALTER TABLE `assessments` DISABLE KEYS */;
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
  `user_roles_id` bigint NOT NULL,
  `runtime` varchar(50) DEFAULT NULL,
  `framework` varchar(50) DEFAULT NULL,
  `layer` varchar(50) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_roles_id` (`user_roles_id`),
  CONSTRAINT `expertise_ibfk_1` FOREIGN KEY (`user_roles_id`) REFERENCES `user_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expertise`
--

LOCK TABLES `expertise` WRITE;
/*!40000 ALTER TABLE `expertise` DISABLE KEYS */;
INSERT INTO `expertise` VALUES (1,12,'Node.js','React','Backend','JavaScript'),(2,67,'Node.js','Express','Backend','JavaScript'),(3,47,'CLR','Entity','frontend','C#'),(4,47,'JVM','Angular','Backend','Java'),(5,47,'JVM','Angular','Backend','Java'),(6,47,'.NET','Spring Boot','Database','Java');
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
  `title` text,
  `outcome` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `interviewer` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  PRIMARY KEY (`interview_id`),
  KEY `fk_interviewer` (`interviewer`),
  KEY `fk_interview_student` (`student_id`),
  CONSTRAINT `fk_interview_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_interviewer` FOREIGN KEY (`interviewer`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES (1,'2026-05-16 11:00:00','ONLINE','SCHEDULED','Technical round 1 scheduled for Full Stack Developer Intern role.',NULL,'2026-05-14 15:40:00',5,11),(2,'2026-05-16 10:00:00','ONLINE','CANCELED','Backend round for API and database basics.',NULL,'2026-05-14 15:40:00',5,12),(3,'2026-05-17 14:00:00','OFFLINE','CANCELED','Frontend round for React and CSS skills.',NULL,'2026-05-14 15:50:00',5,3),(4,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 13:09:20',5,15),(5,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 12:01:19',5,3),(6,'2026-05-16 10:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-15 12:05:34',5,11),(9,'2026-05-16 13:30:00','OFFLINE','SCHEDULED',NULL,NULL,'2026-05-16 10:48:46',3,10),(10,'2026-05-16 10:00:00','ONLINE','SCHEDULED','Core java interview',NULL,'2026-05-16 11:10:34',5,7),(11,'2026-05-16 13:00:00','ONLINE','SCHEDULED',NULL,NULL,'2026-05-16 11:16:36',4,9),(12,'2026-05-17 11:00:00','ONLINE','SCHEDULED','Java Full Stack Developer Technical Interview',NULL,'2026-05-16 11:22:36',5,7),(13,'2026-05-17 11:30:00','ONLINE','CANCELED','frontend developer interview ',NULL,'2026-05-16 11:24:49',6,14),(14,'2026-05-17 12:00:00','OFFLINE','COMPLETED','java backend interview',NULL,'2026-05-16 12:11:37',5,10),(15,'2026-05-18 12:02:00','ONLINE','SCHEDULED','dotnet interview ',NULL,'2026-05-16 12:14:22',8,16),(16,'2026-05-18 12:00:00','ONLINE','SCHEDULED','Dsa round interview',NULL,'2026-05-16 12:20:18',10,12),(17,'2026-05-18 12:00:00','ONLINE','SCHEDULED','Dsa round interview',NULL,'2026-05-16 12:20:18',10,12);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mcq_options`
--

LOCK TABLES `mcq_options` WRITE;
/*!40000 ALTER TABLE `mcq_options` DISABLE KEYS */;
INSERT INTO `mcq_options` VALUES (1,'','','','','',1),(2,'A design pattern used for object creation','A database query method','A Java compiler feature','A frontend framework','A',3),(3,'@Component','@RestController','@Service','@Repository','B',4),(4,'Main','Parent','Object','Class','C',5),(5,'A design pattern used for object creation','A database query method','A Java compiler feature','A frontend framework','A',6),(6,' @Service','@component','@Restcontroller','@Repository','D',7),(7,'@Table','@Column','@Entity','@ADD','C',8);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_appointments`
--

LOCK TABLES `mentor_appointments` WRITE;
/*!40000 ALTER TABLE `mentor_appointments` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_counselings`
--

LOCK TABLES `mentor_counselings` WRITE;
/*!40000 ALTER TABLE `mentor_counselings` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_feedbacks`
--

LOCK TABLES `mentor_feedbacks` WRITE;
/*!40000 ALTER TABLE `mentor_feedbacks` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_mentees`
--

LOCK TABLES `mentor_mentees` WRITE;
/*!40000 ALTER TABLE `mentor_mentees` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_informations`
--

LOCK TABLES `personal_informations` WRITE;
/*!40000 ALTER TABLE `personal_informations` DISABLE KEYS */;
INSERT INTO `personal_informations` (`id`, `user_id`, `first_name`, `last_name`, `gender`, `date_of_birth`, `email`, `address`, `pincode`) VALUES (1,3,'Abhay','Rathod',NULL,NULL,'abhayrathod241994@gmail.com',NULL,NULL),(2,4,'Tejas ','Pawale','MALE','1998-02-24','Pawaletejas98@gmail.com','Mumbai','400084'),(3,5,'Rahul','Gayke','FEMALE','2004-07-17','rahulgayke1704@gmail.com','Jalna','431202'),(4,6,'Arnav','Tolahunase','MALE','2004-12-21','arnav.tolahunase21@gmail.com','Nashik','422009'),(5,7,'Samruddhi','Rasal','FEMALE','2004-02-03','samruddhi.rasal03@gmail.com','Dhankawadi, Pune','411043'),(6,8,'Anish','Adak',NULL,NULL,'anishadak4210@gmail.com',NULL,NULL),(7,9,'Sumit','Bhor','MALE','2006-06-13','Sumitbhor227@gmail.com','tambademala','412405'),(8,10,'Nikita','Bansode',NULL,NULL,'bansodenikita66@gmail.com',NULL,NULL),(9,11,'Rutuja','Mokale',NULL,NULL,'rutujamokale2003@gmail.com',NULL,NULL),(10,12,'Sanika ','Bhor','FEMALE','2005-04-27','bhorsanika0239@gmail.com','Tambademala','412405'),(11,13,'Anirudha','Gadekar',NULL,NULL,'Anirudhagadekarag@gmail.com',NULL,NULL),(12,14,'Sai','Jagdale','FEMALE','2004-06-14','saijagdale1406@gmail.com','A1 , Pancharatneshwar Society , Dhankawadi','411043'),(13,15,'Chaitrali','Patil','FEMALE','2004-04-08','chaitralipatil944@gmail.com','Pune','411043'),(14,16,'Tejas','Naukudkar','MALE','2004-12-10','tejas@gmail.com','Mumbai','410218'),(15,17,'Sarthak','Kadam',NULL,NULL,'Sarthakkadam2277@gmail.com',NULL,NULL),(16,18,'Sejal','Kulkarni',NULL,NULL,'Sejalkulkarni017@gmail.com',NULL,NULL),(17,19,'Aditya','Borule',NULL,NULL,'boruleaditya55@gmail.com',NULL,NULL),(18,20,'Parikshit','Shelorkar',NULL,NULL,'parikshitshelorkar@gmail.com',NULL,NULL),(19,21,'Sanika','Kulkarni',NULL,NULL,'sanikakulkarni880@gmail.com',NULL,NULL),(20,22,'Sahil','Kamble',NULL,NULL,'sahilbajkamble@gmail.com',NULL,NULL),(21,23,'Vibhavari','Borole','FEMALE','2001-02-03','vab030201@gmail.com','Bhosari,Pune','411026'),(22,24,'Tanvi','Sonawane','FEMALE','2004-04-18','tanvi.sonawane1804@gmail.com','Revenue Colony, JM road, Shivajinagar','411005'),(23,25,'Sachin ','kaharat','MALE','2004-02-17','kharatsachin012@gmail.com','Chh Sambhajinagar , Jalna , Maharastra.','431135'),(24,26,'Sayali','Kulkarni','FEMALE','2000-05-03','sayaliparanjape03@gmail.com','Wagholi pune','412207'),(25,27,'Anirudha','Gadekar',NULL,NULL,'anirudhagadekarag@gmail.com',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional_informations`
--

LOCK TABLES `professional_informations` WRITE;
/*!40000 ALTER TABLE `professional_informations` DISABLE KEYS */;
INSERT INTO `professional_informations` VALUES (1,5,'Transflower Learning Pvt. Ltd.','Fullstack Developer','FULL_TIME',NULL,NULL,NULL,1,'Pune','MERN'),(2,3,'Transflower Learning Pvt. Ltd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,4,'Transflower pvt Ltd','Intern',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,6,NULL,'Software Developer Intern',NULL,NULL,NULL,NULL,1,'Pune',NULL),(5,12,'Transflower Learning pvt. Ltd','FullStack Developer','INTERNSHIP',NULL,NULL,NULL,1,'Pune ','NodeJs'),(6,23,'Transflower','Full Time intern','INTERNSHIP',NULL,NULL,NULL,1,'Katraj','Node.js, React, Express, Mysql, Javascript'),(7,14,'Transflower Learning Pvt. Ltd','Developer Intern','INTERNSHIP',NULL,NULL,NULL,1,'Pune',NULL),(8,7,'Transflower Learning Pvt.Ltd','Developer Intern ','INTERNSHIP',NULL,NULL,NULL,1,'Pune','Javascript, Python, AI & Analytics'),(9,15,'Transflower Learning Pvt.Ltd','Developer Intern','INTERNSHIP',NULL,NULL,NULL,1,'Pune',NULL),(10,9,'Transflower learning pvt. ltd','Full stack','INTERNSHIP',NULL,NULL,NULL,1,'Tambademala','Mern stack'),(11,16,'Transflower Learning pvt ltd','Developer','INTERNSHIP','2026-02-01',NULL,1,0,'Walvekar Nagar','JavaScript, React, Node.js'),(12,25,NULL,'Full Stack','INTERNSHIP',NULL,NULL,NULL,NULL,NULL,NULL),(13,26,'Transflawer pvt ltd','intern','INTERNSHIP',NULL,NULL,NULL,2,'pune','JAVA');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_allocations`
--

LOCK TABLES `project_allocations` WRITE;
/*!40000 ALTER TABLE `project_allocations` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'What is Opps ','MCQ','BEGINNER','2026-05-11 11:52:57','APPROVED','Dotnet','backend','.net','Opps','.net core'),(2,'Which keyword is used to declare a variable in JavaScript?','MCQ','BEGINNER','2026-05-12 09:42:43','DRAFT','JavaScript','Frontend','Vanilla JavaScript','Variables',NULL),(3,'What is Dependency Injection in Spring Boot?','MCQ','BEGINNER','2026-05-12 11:10:43','DRAFT','Java','Backend','Spring Boot','Dependency Injection','java'),(4,'Which annotation is used to create a REST API controller in Spring Boot?','MCQ','BEGINNER','2026-05-12 12:08:13','DRAFT','Java','Backend','Spring Boot','REST API','java'),(5,'Which class is parent of all classes in Java?','MCQ','BEGINNER','2026-05-13 14:41:07','DRAFT','JAVA','Backend','JPA','Core','java'),(6,'What is Dependency Injection in Spring Boot?','MCQ','BEGINNER','2026-05-13 14:49:06','DRAFT','Java','Backend','Spring Boot','Dependency Injection','java'),(7,'Which annotation is used to create RESTful web services in Spring Boot?','MCQ','BEGINNER','2026-05-13 14:56:44','DRAFT','JAVA','Backend',' Spring Boot','REST API','java'),(8,'Which annotation is used to mark a class as a database entity?','MCQ','BEGINNER','2026-05-13 15:01:26','APPROVED','JAVA','Backend','Hibernate','ORM Mapping','java');
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
  `percentile` float DEFAULT NULL,
  `time_taken_minutes` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_result_student` (`student_id`),
  KEY `fk_result_assessment` (`assessment_id`),
  CONSTRAINT `fk_result_assessment` FOREIGN KEY (`assessment_id`) REFERENCES `assessments` (`id`),
  CONSTRAINT `fk_result_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_assessment_results`
--

LOCK TABLES `student_assessment_results` WRITE;
/*!40000 ALTER TABLE `student_assessment_results` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentanswers`
--

LOCK TABLES `studentanswers` WRITE;
/*!40000 ALTER TABLE `studentanswers` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_questions`
--

LOCK TABLES `test_questions` WRITE;
/*!40000 ALTER TABLE `test_questions` DISABLE KEYS */;
INSERT INTO `test_questions` VALUES (1,1,3,1),(2,1,2,2),(3,1,1,3),(4,2,1,1),(5,3,2,1),(6,3,3,2),(7,3,4,3),(8,4,3,1),(9,4,4,2),(10,5,1,1),(11,5,3,2),(12,5,2,3),(13,5,4,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,4,'Javascript Test',3,'Javascript concpets',NULL,'2026-05-12 11:55:28',1,NULL),(2,4,'sql',3,'sql concepts',NULL,'2026-05-12 12:36:26',1,NULL),(3,4,'Java Test',5,'Java Test concepts ',NULL,'2026-05-12 13:36:08',1,NULL),(4,4,'Spring Boot Test',5,'Spring Boot Test concepts',NULL,'2026-05-12 13:45:31',1,NULL),(5,4,'sql test',2,'sql tests',NULL,'2026-05-12 14:46:55',1,NULL),(7,4,'Java Test',30,'Java Basics Test',NULL,'2026-05-15 15:03:00',1,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
INSERT INTO `user_logs` VALUES (1,5,'2026-05-11 11:01:10','2026-05-12 16:08:46',NULL),(2,6,'2026-05-11 11:02:38','2026-05-11 11:47:52',NULL),(3,6,'2026-05-11 11:02:56','2026-05-11 11:47:52',NULL),(4,3,'2026-05-11 11:20:22','2026-05-11 11:23:38',NULL),(5,3,'2026-05-11 11:21:53','2026-05-11 11:23:38',NULL),(6,9,'2026-05-11 11:25:37','2026-05-11 11:27:46',NULL),(7,9,'2026-05-11 11:26:26','2026-05-11 11:27:46',NULL),(8,9,'2026-05-11 11:28:06','2026-05-11 11:28:26',NULL),(9,4,'2026-05-11 11:29:26','2026-05-12 10:31:51',NULL),(10,12,'2026-05-11 11:29:31','2026-05-11 11:43:23',NULL),(11,13,'2026-05-11 11:39:28','2026-05-12 10:09:24',NULL),(12,14,'2026-05-11 11:41:57','2026-05-11 11:42:09',NULL),(13,7,'2026-05-11 11:42:41','2026-05-11 11:43:42',NULL),(14,3,'2026-05-11 11:43:36','2026-05-11 11:53:31',NULL),(15,15,'2026-05-11 11:43:39','2026-05-11 11:44:45',NULL),(16,6,'2026-05-11 11:45:00','2026-05-11 11:47:52',NULL),(17,6,'2026-05-11 11:48:06','2026-05-13 15:32:36',NULL),(18,3,'2026-05-11 11:53:44','2026-05-14 10:34:43',NULL),(19,12,'2026-05-12 09:26:37','2026-05-12 10:49:39',NULL),(20,4,'2026-05-12 10:31:29','2026-05-12 10:31:51',NULL),(21,4,'2026-05-12 10:32:53','2026-05-12 10:33:20',NULL),(22,4,'2026-05-12 10:33:35','2026-05-12 12:42:44',NULL),(23,5,'2026-05-12 10:51:55','2026-05-12 16:08:46',NULL),(24,12,'2026-05-12 11:27:43','2026-05-12 11:36:17',NULL),(25,5,'2026-05-12 12:08:40','2026-05-12 16:08:46',NULL),(26,4,'2026-05-12 12:42:33','2026-05-12 12:42:44',NULL),(27,4,'2026-05-12 12:42:56','2026-05-15 11:46:57',NULL),(28,22,'2026-05-12 14:36:16','2026-05-15 11:47:26',NULL),(29,22,'2026-05-12 15:24:18','2026-05-15 11:47:26',NULL),(30,23,'2026-05-12 15:51:07','2026-05-12 10:26:20',NULL),(31,23,'2026-05-12 16:02:42','2026-05-12 10:26:20',NULL),(32,24,'2026-05-12 16:07:52','2026-05-15 11:55:44',NULL),(33,12,'2026-05-12 10:10:23','2026-05-15 10:24:08',NULL),(34,23,'2026-05-12 10:26:39','2026-05-15 11:55:39',NULL),(35,11,'2026-05-13 14:45:02','2026-05-15 11:49:46',NULL),(36,5,'2026-05-13 14:53:25','2026-05-13 16:09:41',NULL),(37,4,'2026-05-13 15:18:19','2026-05-15 11:46:57',NULL),(38,9,'2026-05-13 15:22:35','2026-05-13 15:26:00',NULL),(39,14,'2026-05-13 15:23:04','2026-05-13 15:26:50',NULL),(40,7,'2026-05-13 15:23:56','2026-05-13 15:29:50',NULL),(41,9,'2026-05-13 15:26:15','2026-05-13 15:27:14',NULL),(42,9,'2026-05-13 15:27:37','2026-05-15 11:49:30',NULL),(43,3,'2026-05-13 15:28:03','2026-05-14 10:34:43',NULL),(44,6,'2026-05-13 15:28:21','2026-05-13 15:32:36',NULL),(45,15,'2026-05-13 15:30:30','2026-05-13 15:39:50',NULL),(46,25,'2026-05-13 15:30:48','2026-05-15 11:56:23',NULL),(47,9,'2026-05-13 15:32:17','2026-05-15 11:49:30',NULL),(48,16,'2026-05-13 15:33:45','2026-05-13 15:39:00',NULL),(49,6,'2026-05-13 15:40:16','2026-05-15 11:16:19',NULL),(50,7,'2026-05-13 15:40:32','2026-05-15 11:15:43',NULL),(51,18,'2026-05-13 15:47:07','2026-05-13 15:48:27',NULL),(52,21,'2026-05-13 15:48:52','2026-05-13 15:51:19',NULL),(53,26,'2026-05-13 15:58:03','2026-05-13 16:06:10',NULL),(54,5,'2026-05-13 16:09:30','2026-05-13 16:09:41',NULL),(55,26,'2026-05-13 16:09:59',NULL,NULL),(56,3,'2026-05-13 13:08:16','2026-05-14 10:34:43',NULL),(57,3,'2026-05-13 13:10:37','2026-05-14 10:34:43',NULL),(58,3,'2026-05-14 10:08:56','2026-05-14 10:34:43',NULL),(59,3,'2026-05-14 10:31:39','2026-05-14 10:34:43',NULL),(60,3,'2026-05-14 10:32:11','2026-05-14 10:34:43',NULL),(61,3,'2026-05-14 10:32:30','2026-05-14 10:34:43',NULL),(62,3,'2026-05-14 10:35:04','2026-05-14 10:36:29',NULL),(63,3,'2026-05-14 11:05:54','2026-05-14 11:06:34',NULL),(64,3,'2026-05-14 11:07:24','2026-05-14 11:08:24',NULL),(65,3,'2026-05-14 11:08:30','2026-05-14 11:11:59',NULL),(66,3,'2026-05-14 11:09:00','2026-05-14 11:11:59',NULL),(67,3,'2026-05-14 11:09:26','2026-05-14 11:11:59',NULL),(68,3,'2026-05-14 11:10:18','2026-05-14 11:11:59',NULL),(69,3,'2026-05-14 11:12:04',NULL,NULL),(70,11,'2026-05-14 11:14:02','2026-05-15 11:49:46',NULL),(71,5,'2026-05-14 12:11:32','2026-05-15 11:48:57',NULL),(72,7,'2026-05-14 12:36:10','2026-05-15 11:15:43',NULL),(73,18,'2026-05-14 12:43:19','2026-05-15 11:49:58',NULL),(74,11,'2026-05-14 12:45:28','2026-05-15 11:49:46',NULL),(75,7,'2026-05-14 12:46:41','2026-05-15 11:15:43',NULL),(77,13,'2026-05-14 12:48:40','2026-05-15 11:55:29',NULL),(78,5,'2026-05-14 12:50:35','2026-05-15 11:48:57',NULL),(79,5,'2026-05-14 13:07:45','2026-05-15 11:48:57',NULL),(80,11,'2026-05-14 15:15:14','2026-05-15 11:49:46',NULL),(81,14,'2026-05-14 15:24:04','2026-05-15 11:55:52',NULL),(82,7,'2026-05-14 15:32:40','2026-05-15 11:15:43',NULL),(83,5,'2026-05-14 15:49:47','2026-05-15 11:48:57',NULL),(84,12,'2026-05-14 16:40:45','2026-05-15 10:24:08',NULL),(85,18,'2026-05-14 10:44:37','2026-05-15 11:49:58',NULL),(86,18,'2026-05-14 12:06:00','2026-05-15 11:49:58',NULL),(87,18,'2026-05-14 12:06:20','2026-05-15 11:49:58',NULL),(88,18,'2026-05-14 12:11:29','2026-05-15 11:49:58',NULL),(89,3,'2026-05-14 12:17:22',NULL,NULL),(90,5,'2026-05-14 12:41:14','2026-05-15 11:48:57',NULL),(91,5,'2026-05-14 13:12:16','2026-05-15 11:48:57',NULL),(92,3,'2026-05-15 10:08:18',NULL,NULL),(93,12,'2026-05-15 10:12:59','2026-05-15 10:24:08',NULL),(94,12,'2026-05-15 10:20:22','2026-05-15 10:24:08',NULL),(95,12,'2026-05-15 10:23:58','2026-05-15 10:24:08',NULL),(96,12,'2026-05-15 10:24:45','2026-05-15 10:38:25',NULL),(97,12,'2026-05-15 10:27:35','2026-05-15 10:38:25',NULL),(98,4,'2026-05-15 10:42:32','2026-05-15 11:46:57',NULL),(99,18,'2026-05-15 11:54:33','2026-05-15 11:49:58',NULL),(100,3,'2026-05-15 12:16:56',NULL,NULL),(101,3,'2026-05-15 15:25:37',NULL,NULL),(102,16,'2026-05-15 11:19:53','2026-05-15 11:45:27',2),(103,6,'2026-05-15 11:20:16','2026-05-15 11:20:35',1),(104,3,'2026-05-15 12:09:28',NULL,NULL),(105,12,'2026-05-15 12:56:14','2026-05-15 12:56:48',1),(106,12,'2026-05-15 12:56:41','2026-05-15 12:56:48',2),(107,12,'2026-05-15 13:01:08','2026-05-15 13:06:59',1),(108,12,'2026-05-15 13:01:21','2026-05-15 13:07:20',2),(109,12,'2026-05-15 13:03:14','2026-05-15 13:06:46',3),(110,12,'2026-05-15 13:04:23','2026-05-15 13:06:46',4),(111,12,'2026-05-15 13:06:41','2026-05-15 13:06:46',4),(112,12,'2026-05-15 13:07:17','2026-05-15 13:07:20',2),(113,6,'2026-05-16 10:14:27','2026-05-16 10:16:19',1),(114,6,'2026-05-16 10:14:40','2026-05-16 10:15:52',2),(115,14,'2026-05-16 10:14:50','2026-05-16 10:15:15',2),(116,3,'2026-05-16 10:19:00','2026-05-16 15:04:35',1),(117,12,'2026-05-16 10:24:47','2026-05-16 10:41:28',1),(118,11,'2026-05-16 10:33:47','2026-05-16 15:30:53',2),(119,12,'2026-05-16 10:42:54','2026-05-16 10:42:54',4),(120,12,'2026-05-16 10:54:23','2026-05-16 10:57:52',3),(121,12,'2026-05-16 10:57:48','2026-05-16 10:57:52',3),(122,11,'2026-05-16 11:15:04','2026-05-16 15:30:53',2),(123,12,'2026-05-16 11:22:14','2026-05-16 11:22:14',2),(124,12,'2026-05-16 11:22:37','2026-05-16 11:22:37',3),(125,17,'2026-05-16 11:24:55','2026-05-16 14:22:30',2),(126,12,'2026-05-16 11:27:18','2026-05-16 11:27:18',1),(127,12,'2026-05-16 11:53:04','2026-05-16 11:53:04',1),(128,3,'2026-05-16 11:53:13','2026-05-16 15:04:35',1),(129,9,'2026-05-16 11:55:12','2026-05-16 11:55:48',2),(130,9,'2026-05-16 11:55:13','2026-05-16 11:55:48',2),(131,9,'2026-05-16 11:55:23','2026-05-16 11:55:48',2),(132,4,'2026-05-16 11:56:08','2026-05-16 15:17:24',4),(133,9,'2026-05-16 11:56:41',NULL,2),(134,12,'2026-05-16 12:03:05','2026-05-16 12:03:05',4),(135,12,'2026-05-16 12:05:44','2026-05-16 12:06:22',2),(136,12,'2026-05-16 12:06:15','2026-05-16 12:06:22',2),(137,10,'2026-05-16 12:08:40','2026-05-16 15:29:16',2),(138,12,'2026-05-16 12:16:21','2026-05-16 12:17:17',4),(139,12,'2026-05-16 12:17:11','2026-05-16 12:17:17',4),(140,12,'2026-05-16 12:18:21','2026-05-16 12:20:58',2),(141,12,'2026-05-16 12:21:19','2026-05-16 12:21:20',2),(142,12,'2026-05-16 12:21:53','2026-05-16 12:21:53',2),(143,12,'2026-05-16 12:24:02','2026-05-16 12:24:23',2),(144,12,'2026-05-16 12:28:45','2026-05-16 12:28:45',5),(145,12,'2026-05-16 12:34:37','2026-05-16 12:34:37',1),(146,4,'2026-05-16 13:47:09','2026-05-16 15:17:24',4),(147,17,'2026-05-16 13:51:12','2026-05-16 14:22:30',2),(148,4,'2026-05-16 14:24:21','2026-05-16 14:24:50',1),(149,4,'2026-05-16 14:25:03','2026-05-16 15:17:24',4),(150,11,'2026-05-16 14:57:16','2026-05-16 15:30:53',2),(151,3,'2026-05-16 15:05:16',NULL,1),(152,4,'2026-05-16 15:18:15','2026-05-16 15:24:04',4),(153,11,'2026-05-16 15:29:59','2026-05-16 15:30:53',2),(154,11,'2026-05-16 15:31:18','2026-05-16 15:49:30',2),(155,4,'2026-05-16 15:31:30',NULL,1),(156,5,'2026-05-16 15:50:21','2026-05-16 15:56:34',4),(157,5,'2026-05-16 15:51:47','2026-05-16 15:56:34',4),(158,5,'2026-05-16 15:57:01','2026-05-16 10:21:03',4),(159,11,'2026-05-16 10:21:30','2026-05-16 10:21:44',2),(160,5,'2026-05-16 10:22:17','2026-05-16 10:40:20',4),(161,11,'2026-05-16 10:40:51','2026-05-16 10:54:55',2),(162,5,'2026-05-16 10:50:26','2026-05-16 10:57:45',4),(163,5,'2026-05-16 10:55:51','2026-05-16 10:57:45',4),(164,5,'2026-05-16 10:58:03','2026-05-16 11:23:04',4),(165,5,'2026-05-16 11:23:19',NULL,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (9,3,1,'2026-05-11 05:52:11','2026-05-11 05:52:11','ACTIVE'),(10,3,2,'2026-05-11 05:52:11','2026-05-11 05:52:11','ACTIVE'),(11,3,3,'2026-05-11 05:52:11','2026-05-11 05:52:11','ACTIVE'),(12,3,4,'2026-05-11 05:52:11','2026-05-11 05:52:11','ACTIVE'),(13,4,2,'2026-05-11 05:52:21','2026-05-11 05:52:21','ACTIVE'),(18,5,2,'2026-05-11 06:00:35','2026-05-11 06:00:35','ACTIVE'),(19,6,1,'2026-05-11 06:00:47','2026-05-16 06:23:38','INACTIVE'),(20,6,2,'2026-05-11 06:00:52','2026-05-11 06:00:52','ACTIVE'),(21,7,2,'2026-05-11 06:00:57','2026-05-11 06:00:57','ACTIVE'),(22,8,2,'2026-05-11 06:01:03','2026-05-11 06:01:03','ACTIVE'),(23,9,2,'2026-05-11 06:01:08','2026-05-11 06:01:08','ACTIVE'),(24,10,2,'2026-05-11 06:01:13','2026-05-11 06:01:13','ACTIVE'),(25,11,2,'2026-05-11 06:01:17','2026-05-11 06:01:17','ACTIVE'),(26,12,2,'2026-05-11 06:01:28','2026-05-11 06:01:28','ACTIVE'),(27,12,1,'2026-05-11 06:01:28','2026-05-11 06:01:28','ACTIVE'),(28,12,3,'2026-05-11 06:01:36','2026-05-11 06:01:36','ACTIVE'),(29,12,5,'2026-05-11 06:01:36','2026-05-11 06:01:36','ACTIVE'),(30,12,4,'2026-05-11 06:01:36','2026-05-11 06:01:36','ACTIVE'),(32,13,2,'2026-05-11 06:09:02','2026-05-11 06:09:02','ACTIVE'),(42,4,1,'2026-05-12 05:03:15','2026-05-12 05:03:15','ACTIVE'),(43,4,3,'2026-05-12 05:03:15','2026-05-12 05:03:15','ACTIVE'),(44,4,4,'2026-05-12 05:03:15','2026-05-12 05:03:15','ACTIVE'),(45,23,7,'2026-05-12 10:17:09','2026-05-16 09:49:03','INACTIVE'),(47,24,2,'2026-05-12 04:40:57','2026-05-12 04:40:57','ACTIVE'),(48,23,2,'2026-05-12 04:41:08','2026-05-12 04:41:08','ACTIVE'),(49,22,2,'2026-05-12 04:41:18','2026-05-12 04:41:18','ACTIVE'),(50,21,2,'2026-05-12 04:41:24','2026-05-12 04:41:24','ACTIVE'),(51,20,2,'2026-05-12 04:42:29','2026-05-12 04:42:29','ACTIVE'),(52,19,2,'2026-05-12 04:42:38','2026-05-12 04:42:38','ACTIVE'),(53,18,2,'2026-05-12 04:43:00','2026-05-12 04:43:00','ACTIVE'),(54,17,2,'2026-05-12 04:43:05','2026-05-12 04:43:05','ACTIVE'),(55,16,2,'2026-05-12 04:43:09','2026-05-12 04:43:09','ACTIVE'),(56,15,2,'2026-05-12 04:43:22','2026-05-12 04:43:22','ACTIVE'),(57,14,2,'2026-05-12 04:43:29','2026-05-12 04:43:29','ACTIVE'),(58,5,3,'2026-05-12 04:44:00','2026-05-12 04:44:00','ACTIVE'),(59,5,4,'2026-05-12 04:44:00','2026-05-12 04:44:00','ACTIVE'),(60,5,5,'2026-05-12 04:44:00','2026-05-12 04:44:00','ACTIVE'),(61,5,6,'2026-05-12 04:44:00','2026-05-12 04:44:00','ACTIVE'),(62,5,1,'2026-05-12 04:44:00','2026-05-12 04:44:00','ACTIVE'),(64,18,1,'2026-05-13 10:18:06','2026-05-13 10:18:06','ACTIVE'),(65,18,3,'2026-05-13 10:18:06','2026-05-13 10:18:06','ACTIVE'),(66,18,4,'2026-05-13 10:18:06','2026-05-13 10:18:06','ACTIVE'),(67,21,1,'2026-05-13 10:18:21','2026-05-13 10:18:21','ACTIVE'),(68,21,3,'2026-05-13 10:18:21','2026-05-13 10:18:21','ACTIVE'),(69,21,4,'2026-05-13 10:18:21','2026-05-13 10:18:21','ACTIVE'),(71,27,7,'2026-05-14 07:16:21','2026-05-15 05:08:16','INACTIVE'),(72,4,5,'2026-05-14 05:41:56','2026-05-14 05:41:56','ACTIVE'),(73,26,2,'2026-05-14 06:27:04','2026-05-14 06:27:04','ACTIVE'),(75,25,2,'2026-05-14 06:27:20','2026-05-14 06:27:20','ACTIVE'),(76,18,5,'2026-05-14 06:50:16','2026-05-14 06:50:16','ACTIVE'),(77,27,2,'2026-05-15 05:08:16','2026-05-15 05:08:16','ACTIVE'),(78,6,6,'2026-05-15 05:26:45','2026-05-16 05:35:06','INACTIVE'),(79,6,3,'2026-05-16 04:55:17','2026-05-16 04:55:17','ACTIVE'),(80,6,4,'2026-05-16 05:01:24','2026-05-16 06:23:38','INACTIVE'),(81,6,1,'2026-05-16 09:35:33','2026-05-16 09:35:33','ACTIVE'),(82,6,4,'2026-05-16 09:38:50','2026-05-16 09:38:50','ACTIVE'),(83,6,5,'2026-05-16 09:38:57','2026-05-16 09:39:17','INACTIVE'),(84,6,6,'2026-05-16 09:38:57','2026-05-16 09:39:17','INACTIVE');
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'7972616050','12345','ACTIVE','2026-05-11 10:57:55','2026-05-14 12:04:14'),(4,'9930952851','rxp7w6tl','ACTIVE','2026-05-11 10:58:38','2026-05-11 10:58:38'),(5,'9130240968','Rahul123','ACTIVE','2026-05-11 10:59:25','2026-05-14 13:08:44'),(6,'9545611780','12345','ACTIVE','2026-05-11 11:01:39','2026-05-11 11:01:39'),(7,'9665992262','12345','ACTIVE','2026-05-11 11:03:11','2026-05-11 11:03:11'),(8,'7387745636','9j8iob4a','ACTIVE','2026-05-11 11:08:49','2026-05-11 11:08:49'),(9,'8530086989','Sumit1@2','ACTIVE','2026-05-11 11:24:44','2026-05-11 11:24:44'),(10,'9356812683','paed41yy','ACTIVE','2026-05-11 11:27:30','2026-05-11 11:27:30'),(11,'9529259355','3wsyzfjl','ACTIVE','2026-05-11 11:28:40','2026-05-11 11:28:40'),(12,'8446756339','12345','ACTIVE','2026-05-11 11:29:12','2026-05-11 11:29:12'),(13,'8669667546','jauokaw3','ACTIVE','2026-05-11 11:37:35','2026-05-11 11:37:35'),(14,'7843053149','12345','ACTIVE','2026-05-11 11:41:12','2026-05-11 11:41:12'),(15,'7030799646','12345','ACTIVE','2026-05-11 11:42:12','2026-05-11 11:42:12'),(16,'8433752395','12345','ACTIVE','2026-05-11 11:43:11','2026-05-11 11:43:11'),(17,'9356445527','quan4m5h','ACTIVE','2026-05-12 09:31:03','2026-05-12 09:31:03'),(18,'9270309017','12345','ACTIVE','2026-05-12 09:33:00','2026-05-12 09:33:00'),(19,'8767846705','kfr48168','ACTIVE','2026-05-12 09:34:00','2026-05-12 09:34:00'),(20,'9309868668','9ad2zbgs','ACTIVE','2026-05-12 09:35:05','2026-05-12 09:35:05'),(21,'9503046227','12345','ACTIVE','2026-05-12 09:47:05','2026-05-12 09:47:05'),(22,'7972542628','4ojih8wq','ACTIVE','2026-05-12 10:09:40','2026-05-12 10:09:40'),(23,'7218540228','12345','ACTIVE','2026-05-12 15:47:09','2026-05-12 15:47:09'),(24,'7499583199','bsmqyg5j','ACTIVE','2026-05-12 16:04:40','2026-05-12 16:04:40'),(25,'9637661382','d6riv9ft','ACTIVE','2026-05-13 15:27:00','2026-05-13 15:27:00'),(26,'7350273988','12345','ACTIVE','2026-05-13 15:56:59','2026-05-13 15:56:59'),(27,'8669667546','aq9i9w0r','ACTIVE','2026-05-14 12:46:21','2026-05-14 12:46:21');
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
CREATE DEFINER=`root`@`%` PROCEDURE `CalculateStudentResult`(IN p_student_id INT, IN p_assessment_id INT)
BEGIN
    DECLARE total_q INT DEFAULT 0;
    DECLARE correct_q INT DEFAULT 0;
    DECLARE wrong_q INT DEFAULT 0;
    DECLARE score_percent DECIMAL(5,2);

    SELECT COUNT(*) INTO total_q
    FROM studentanswers sa
    WHERE sa.StudentId = p_student_id AND sa.AssessmentId = p_assessment_id;

    SELECT COUNT(*) INTO correct_q
    FROM studentanswers sa
    INNER JOIN mcq_options mo ON sa.QuestionId = mo.question_id
    WHERE sa.StudentId = p_student_id AND sa.AssessmentId = p_assessment_id
      AND sa.SelectedOption = mo.correct_answer;

    SET wrong_q = total_q - correct_q;

    IF total_q > 0 THEN
        SET score_percent = (correct_q / total_q) * 100;
    ELSE
        SET score_percent = 0;
    END IF;

    INSERT INTO student_assessment_results
        (StudentId, AssessmentId, TotalQuestions, CorrectAnswers, WrongAnswers, Score, CreatedAt)
    VALUES
        (p_student_id, p_assessment_id, total_q, correct_q, wrong_q, score_percent, NOW());
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
CREATE DEFINER=`root`@`%` PROCEDURE `GetStudentAssessmentReport`(IN p_student_id INT, IN p_assessment_id INT)
BEGIN
    SELECT
        p_student_id AS StudentId,
        p_assessment_id AS AssessmentId,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption = m.correct_answer THEN tq.question_id
        END) AS Score,

        COUNT(DISTINCT tq.question_id) AS TotalQuestions,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption = m.correct_answer THEN tq.question_id
        END) AS CorrectAnswers,

        COUNT(DISTINCT CASE
            WHEN s.selectedoption != m.correct_answer
                 AND s.selectedoption IS NOT NULL THEN tq.question_id
        END) AS WrongAnswers,

        ROUND(
            COUNT(DISTINCT CASE
                WHEN s.selectedoption = m.correct_answer THEN tq.question_id
            END) * 100.0
            / COUNT(DISTINCT tq.question_id),
        2) AS Percentage

    FROM test_questions tq
    INNER JOIN mcq_options m ON tq.question_id = m.question_id
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
        CONCAT(p.first_name, ' ', p.last_name) AS full_name,
        u.created_at,
        u.status,
        r.role_name
    FROM personal_informations p
    LEFT JOIN user_roles ur ON p.user_id = ur.user_id
    LEFT JOIN roles r ON ur.role_id = r.role_id
    LEFT JOIN users u ON p.user_id = u.id
    ORDER BY p.user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `GetUserProfile`(IN userId INT)
BEGIN
    SELECT
        u.id AS user_id,
        u.contact,
        u.status,
        p.first_name,
        p.last_name,
        p.gender,
        p.date_of_birth,
        p.email,
        a.enrollment_year,
        a.passing_year,
        a.percentage,
        a.college_name,
        prof.skills
    FROM users u
    LEFT JOIN personal_informations p ON u.id = p.user_id
    LEFT JOIN academic_informations a ON u.id = a.user_id
    LEFT JOIN professional_informations prof ON u.id = prof.user_id
    WHERE u.id = userId;
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
    DECLARE v_user_id INT;
    DECLARE v_personal_id INT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        GET DIAGNOSTICS CONDITION 1 @error_message = MESSAGE_TEXT;
        SELECT 'FAILED' AS status, @error_message AS message;
    END;

    START TRANSACTION;

    INSERT INTO users (
        contact,
        password,
        status,
        created_at,
        updated_at
    )
    VALUES (
        p_contact,
        p_password,
        'ACTIVE',
        NOW(),
        NOW()
    );

    SET v_user_id = LAST_INSERT_ID();

    SELECT IFNULL(MAX(id), 0) + 1
    INTO v_personal_id
    FROM personal_informations
    FOR UPDATE;

    INSERT INTO personal_informations (
        id,
        user_id,
        first_name,
        last_name,
        email
    )
    VALUES (
        v_personal_id,
        v_user_id,
        p_first_name,
        p_last_name,
        p_email
    );
    
    
    INSERT into user_roles(user_id, role_id,assigned_at) values (v_user_id, 7,now());

    COMMIT;

    SELECT 'SUCCESS' AS status, v_user_id AS user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_user_complete_profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_get_user_complete_profile`(IN p_user_id BIGINT)
BEGIN
    SELECT
        pi.user_id,
        pi.first_name,
        pi.last_name,
        pi.gender,
        pi.date_of_birth,
        pi.email,
        pi.address,
        pi.pincode,

        pr.company_name,
        pr.job_title,
        pr.employment_type,
        pr.start_date,
        pr.end_date,
        pr.is_current_job,
        pr.experience_years,
        pr.location,
        pr.skills,

        ai.stream_name,
        ai.specialization,
        ai.enrollment_year,
        ai.passing_year,
        ai.percentage,
        ai.college_name

    FROM personal_informations pi

    LEFT JOIN professional_informations pr
        ON pr.user_id = pi.user_id
        AND pr.start_date = (
            SELECT MAX(start_date) FROM professional_informations WHERE user_id = p_user_id
        )

    LEFT JOIN academic_informations ai
        ON ai.user_id = pi.user_id
        AND ai.passing_year = (
            SELECT MAX(passing_year) FROM academic_informations WHERE user_id = p_user_id
        )

    WHERE pi.user_id = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_academic_information` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_update_academic_information`(
    IN p_user_id BIGINT,
    IN p_stream_name VARCHAR(100),
    IN p_specialization VARCHAR(100),
    IN p_enrollment_year BIGINT,
    IN p_passing_year BIGINT,
    IN p_percentage DECIMAL(5,2),
    IN p_college_name VARCHAR(255)
)
BEGIN
    UPDATE academic_informations
    SET
        stream_name = p_stream_name,
        specialization = p_specialization,
        enrollment_year = p_enrollment_year,
        passing_year = p_passing_year,
        percentage = p_percentage,
        college_name = p_college_name
    WHERE user_id = p_user_id
    ORDER BY passing_year DESC
    LIMIT 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_personal_information` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_update_personal_information`(
    IN p_user_id BIGINT,
    IN p_first_name VARCHAR(100),
    IN p_last_name VARCHAR(100),
    IN p_gender ENUM('MALE','FEMALE'),
    IN p_date_of_birth DATE,
    IN p_email VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_pincode VARCHAR(10)
)
BEGIN
    UPDATE personal_informations
    SET
        first_name = p_first_name,
        last_name = p_last_name,
        gender = p_gender,
        date_of_birth = p_date_of_birth,
        email = p_email,
        address = p_address,
        pincode = p_pincode
    WHERE user_id = p_user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_professional_information` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_update_professional_information`(
    IN p_user_id INT,
    IN p_company_name VARCHAR(100),
    IN p_job_title VARCHAR(100),
    IN p_employment_type ENUM('FULL_TIME','PART_TIME','INTERNSHIP'),
    IN p_start_date DATE,
    IN p_end_date DATE,
    IN p_is_current_job TINYINT(1),
    IN p_experience_years BIGINT,
    IN p_location VARCHAR(100),
    IN p_skills TEXT
)
BEGIN
    UPDATE professional_informations
    SET
        company_name = p_company_name,
        job_title = p_job_title,
        employment_type = p_employment_type,
        start_date = p_start_date,
        end_date = p_end_date,
        is_current_job = p_is_current_job,
        experience_years = p_experience_years,
        location = p_location,
        skills = p_skills
    WHERE user_id = p_user_id
    ORDER BY start_date DESC
    LIMIT 1;
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
        p_user_id, p_first_name, p_last_name, p_gender,
        p_date_of_birth, p_email, p_address, p_pincode
    );

    CALL sp_update_professional_information(
        p_user_id, p_company_name, p_job_title, p_employment_type,
        p_start_date, p_end_date, p_is_current_job,
        p_experience_years, p_location, p_skills
    );

    CALL sp_update_academic_information(
        p_user_id, p_stream_name, p_specialization,
        p_enrollment_year, p_passing_year, p_percentage, p_college_name
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

-- Dump completed on 2026-05-17 11:57:00
