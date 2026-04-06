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
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `stream_name` varchar(100) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `enrollment_year` int DEFAULT NULL,
  `passing_year` int DEFAULT NULL,
  `percentage` decimal(5,2) DEFAULT NULL,
  `college_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `academic_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic_informations`
--

LOCK TABLES `academic_informations` WRITE;
/*!40000 ALTER TABLE `academic_informations` DISABLE KEYS */;
INSERT INTO `academic_informations` VALUES (1,4,'CSE','Artificial Intelligence & Analytics',2022,2026,80.00,'MIT Art Design & Technology University'),(2,6,'Computer Science & Engineering','Artificial Intelligence & Analytics',2022,2026,80.00,'MIT ADT University'),(3,3,'mechanical engineering','Robotics',2018,2021,60.00,'Atma Malik Institute of Technology and Research'),(4,5,'Computer Engineering','Core',2024,2028,86.50,'Smt. Kashibai Navle College of Engineering, Vadgaon, Pune'),(5,7,'Computer engineering','core',2024,2028,82.40,'smt. kashibai navale college of engineering vadgaon budruk'),(6,8,'Information and Technology','Core',2025,2028,89.90,'Progressive Education Society\'s Modern College of Engineering'),(7,10,'Electronics and Telecommunications','Iot',2019,2023,90.00,'Dr. D Y Patil, Pimpri, Pune.'),(8,2,'Computer Science','Cloud computing',2022,2026,83.00,'MIT ADT University, Loni'),(9,9,'Computer Science','Core Engineering',2022,2026,80.00,'MIT ADT'),(10,13,'Computer Engineering','Data Science',2023,2026,76.00,'JSPM UNIVERSITY PUNE'),(11,12,'Information Technology','Data Science',2023,2026,94.00,'Zeal college of engineering and research,pune'),(12,15,'Electronics and Telecommunication','IOT',2022,2026,72.00,'AISSMS Institute of Information Technology'),(13,11,'Computer Science','CORE',2022,2026,75.00,'MIT ADT University'),(14,14,'Mechanical Engineering','Robotics and Machine learning',2022,2025,70.00,'RIT Ishwarpur'),(15,1,'Computer science','BCA',2022,2025,61.00,'Deogiri college chh.sambhaji nagar'),(16,17,'Computer science','BCA',2022,2025,78.00,'Pathrikar college badnapur dist -jalna'),(17,19,'Bachelor of Computer Applications (BCA)','Computer Science',2022,2025,64.40,'Deogiri College, Chhatrapati Sambhajinagar'),(18,16,'Computer science','Bcs',2022,2025,65.00,'Sp collage'),(19,20,'Computer Science','BCA',2022,2025,75.90,'Deogiri College Chh. Sambhajinagar'),(20,18,'Computer Engineering','Cloud Computing',2024,2027,94.15,'Pune Vidharthi Griha\'s College of Engineering'),(21,21,'Computer Science','BCA',2022,2025,64.00,'Deogiri college'),(22,22,'B.E.','Computer engineering',2012,2016,75.00,'Sinhgad college of engineering, vadgaon'),(23,NULL,'.net','JavaScript, React',2021,2025,78.69,'Dr D Y Patil College of school and Technology'),(24,23,'BTech','computer science',2021,2025,78.00,'Bharati vidyapeeth collage of engineering kolhapur');
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
  `company_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `added_at` datetime DEFAULT NULL,
  PRIMARY KEY (`alumni_id`)
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
  `assigned_at` datetime DEFAULT NULL,
  `scheduled_at` datetime DEFAULT NULL,
  `status` enum('Assigned','Pending','Completed') NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessments`
--

LOCK TABLES `assessments` WRITE;
/*!40000 ALTER TABLE `assessments` DISABLE KEYS */;
INSERT INTO `assessments` VALUES (1,1,1,1,'2026-03-23 17:09:07','2026-03-25 10:00:00','Assigned'),(2,2,2,1,'2026-03-23 17:09:07','2026-03-26 11:30:00','Pending'),(3,3,3,1,'2026-03-23 17:09:07','2026-03-27 09:00:00','Assigned'),(4,4,4,1,'2026-03-23 17:09:07','2026-03-28 02:00:00','Assigned'),(5,5,5,1,'2026-03-23 17:09:07','2026-03-29 04:15:00','Pending'),(6,2,5,1,'2026-03-24 09:00:00','2026-03-25 10:00:00','Assigned'),(7,2,2,1,'2026-03-24 10:30:00','2026-03-26 11:00:00','Completed'),(8,2,3,1,'2026-03-23 14:00:00','2026-03-24 15:00:00','Completed'),(9,2,4,1,'2026-03-22 16:45:00','2026-03-23 17:30:00','Completed'),(10,2,5,1,'2026-03-24 08:20:00','2026-03-25 09:30:00','Assigned'),(11,2,5,1,'2026-03-24 09:00:00','2026-03-25 10:00:00','Assigned'),(12,2,6,1,'2026-03-24 10:30:00','2026-03-26 11:00:00','Completed'),(13,2,7,1,'2026-03-23 14:00:00','2026-03-24 15:00:00','Completed'),(14,2,8,1,'2026-03-22 16:45:00','2026-03-23 17:30:00','Completed'),(15,2,9,1,'2026-03-24 08:20:00','2026-03-25 09:30:00','Assigned'),(16,2,5,NULL,'2026-03-24 17:35:58','2026-03-30 10:00:00','Assigned'),(17,2,7,NULL,'2026-03-24 17:45:00','2026-03-30 10:00:00','Assigned');
/*!40000 ALTER TABLE `assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `company_type` enum('STARTUP','PRODUCT_BASE','SERVICE_BASE') DEFAULT NULL,
  `company_size` varchar(100) DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Emsphere','https://www.emsphere.com','IT Services','SERVICE_BASE','50-200','Technology solutions and consulting',NULL,NULL),(2,'Fibitech','https://www.fibitech.com','IT Services','SERVICE_BASE','50-200','Software development and IT consulting',NULL,NULL),(3,'Persistent Systems','https://www.persistent.com','IT Services','SERVICE_BASE','10000+','Digital engineering and enterprise modernization',NULL,NULL),(4,'Deloitte','https://www.deloitte.com','Consulting','SERVICE_BASE','10000+','Global consulting and professional services',NULL,NULL),(5,'IBM','https://www.ibm.com','Technology','PRODUCT_BASE','10000+','Cloud computing and AI solutions',NULL,NULL),(6,'JISA','https://jisasoftech.com','Technology','PRODUCT_BASE','200-500','Authentication products and IT solutions',NULL,NULL),(7,'Microsoft','https://www.microsoft.com','Technology','PRODUCT_BASE','10000+','Software, cloud, and AI solutions',NULL,NULL),(8,'Salesforce','https://www.salesforce.com','Technology','PRODUCT_BASE','10000+','CRM and cloud platform',NULL,NULL),(9,'T-Systems','https://www.t-systems.com','IT Services','SERVICE_BASE','10000+','Digital services and IT solutions',NULL,NULL),(10,'DigiTeins','https://www.digiteins.com','IT Services','SERVICE_BASE','50-200','Software and product development',NULL,NULL),(11,'Cybage','https://www.cybage.com','IT Services','SERVICE_BASE','1000-5000','Technology consulting and outsourcing',NULL,NULL),(12,'Accenture','https://www.accenture.com','Consulting','SERVICE_BASE','10000+','Global consulting and IT services',NULL,NULL),(13,'HCLTech','https://www.hcltech.com','IT Services','SERVICE_BASE','10000+','IT and business services',NULL,NULL),(14,'SAAS Global','https://www.saas-global.com','SaaS','PRODUCT_BASE','11-50','Software development and digital marketing solutions focused on SaaS platforms',NULL,NULL);
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
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concepts`
--

LOCK TABLES `concepts` WRITE;
/*!40000 ALTER TABLE `concepts` DISABLE KEYS */;
INSERT INTO `concepts` VALUES (1,'Variables','Basic storage units used to hold data in a program','active','2026-03-20 18:14:12'),(2,'Data Types','Defines the type of data a variable can store','active','2026-03-20 18:14:12'),(3,'Operators','Symbols used to perform operations on variables','active','2026-03-20 18:14:12'),(4,'Conditional Statements','Control flow using conditions like if-else','active','2026-03-20 18:14:12'),(5,'Loops','Used to execute a block of code repeatedly','active','2026-03-20 18:14:12'),(6,'Functions / Methods','Reusable blocks of code for specific tasks','active','2026-03-20 18:14:12'),(7,'Recursion','Function calling itself to solve problems','active','2026-03-20 18:14:12'),(8,'Arrays','Collection of elements stored in contiguous memory','active','2026-03-20 18:14:12'),(9,'String Manipulation','Operations performed on string data','active','2026-03-20 18:14:12'),(10,'Memory Management','Handling allocation and deallocation of memory','active','2026-03-20 18:14:12'),(11,'Stack vs Heap','Memory allocation types used during execution','active','2026-03-20 18:14:12'),(12,'Parameter Passing (value/reference)','Ways to pass data to functions','active','2026-03-20 18:14:12'),(13,'Method Overloading','Same method name with different parameters','active','2026-03-20 18:14:12'),(14,'Method Overriding','Redefining parent class method in child class','active','2026-03-20 18:14:12'),(15,'Static Variables','Variables shared across all instances','active','2026-03-20 18:14:12'),(16,'Static Methods','Methods that belong to class, not object','active','2026-03-20 18:14:12'),(17,'Constants / Readonly','Values that cannot be changed after assignment','active','2026-03-20 18:14:12'),(18,'Enumerations','User-defined data types with fixed values','active','2026-03-20 18:14:12'),(19,'Generics','Type-safe data structures and methods','active','2026-03-20 18:14:12'),(20,'Type Conversion','Converting one data type to another','active','2026-03-20 18:14:12'),(21,'Error Handling','Handling runtime errors in code','active','2026-03-20 18:14:12'),(22,'Exception Propagation','Passing exceptions up the call stack','active','2026-03-20 18:14:12'),(23,'File IO','Reading and writing data to files','active','2026-03-20 18:14:12'),(24,'Serialization','Converting objects into storable format','active','2026-03-20 18:14:12'),(25,'Reflection','Inspecting metadata of classes at runtime','active','2026-03-20 18:14:12'),(26,'Classes','Blueprint for creating objects','active','2026-03-20 18:14:12'),(27,'Objects','Instances of a class','active','2026-03-20 18:14:12'),(28,'Encapsulation','Wrapping data and methods together','active','2026-03-20 18:14:12'),(29,'Abstraction','Hiding implementation details','active','2026-03-20 18:14:12'),(30,'Inheritance','Acquiring properties from parent class','active','2026-03-20 18:14:12'),(31,'Polymorphism','Same method behaving differently','active','2026-03-20 18:14:12'),(32,'Interfaces','Contracts that classes must implement','active','2026-03-20 18:14:12'),(33,'Abstract Classes','Classes that cannot be instantiated directly','active','2026-03-20 18:14:12'),(34,'Composition','Building complex objects using simpler ones','active','2026-03-20 18:14:12'),(35,'Aggregation','Association with independent lifecycle','active','2026-03-20 18:14:12'),(36,'Association','Relationship between two classes','active','2026-03-20 18:14:12'),(37,'Containment','Strong ownership relationship','active','2026-03-20 18:14:12'),(38,'Delegates','References to methods','active','2026-03-20 18:14:12'),(39,'Events','Mechanism for communication between objects','active','2026-03-20 18:14:12'),(40,'Access Modifiers','Defines visibility of members','active','2026-03-20 18:14:12'),(41,'Method Binding','Linking method call to method body','active','2026-03-20 18:14:12'),(42,'Object Lifecycle','Stages of object creation to destruction','active','2026-03-20 18:14:12'),(43,'Dependency Relationships','How classes depend on each other','active','2026-03-20 18:14:12'),(44,'Immutable Objects','Objects whose state cannot change','active','2026-03-20 18:14:12'),(45,'Object Cloning','Creating copy of an object','active','2026-03-20 18:14:12'),(46,'Linked Lists','Linear data structure with nodes','active','2026-03-20 18:14:12'),(47,'Stacks','LIFO data structure','active','2026-03-20 18:14:12'),(48,'Queues','FIFO data structure','active','2026-03-20 18:14:12'),(49,'Hash Tables','Key-value data storage','active','2026-03-20 18:14:12'),(50,'Dictionaries / Maps','Collection of key-value pairs','active','2026-03-20 18:14:12'),(51,'Sets','Collection of unique elements','active','2026-03-20 18:14:12'),(52,'Trees','Hierarchical data structure','active','2026-03-20 18:14:12'),(53,'Binary Trees','Tree with at most two children','active','2026-03-20 18:14:12'),(54,'Graphs','Collection of nodes and edges','active','2026-03-20 18:14:12'),(55,'Searching Algorithms','Techniques to find elements','active','2026-03-20 18:14:12'),(56,'Sorting Algorithms','Techniques to order data','active','2026-03-20 18:14:12'),(57,'Time Complexity','Measure of algorithm performance','active','2026-03-20 18:14:12'),(58,'Space Complexity','Memory usage of an algorithm','active','2026-03-20 18:14:12'),(59,'Recursion Trees','Tree representation of recursive calls','active','2026-03-20 18:14:12'),(60,'Dynamic Programming Basics','Optimization using subproblems','active','2026-03-20 18:14:12'),(61,'Greedy Algorithms','Making best choice at each step','active','2026-03-20 18:14:12'),(62,'Hashing','Mapping data to fixed values','active','2026-03-20 18:14:12'),(63,'Priority Queues','Queue with priority-based processing','active','2026-03-20 18:14:12'),(64,'Algorithm Optimization','Improving efficiency of algorithms','active','2026-03-20 18:14:12'),(65,'Multithreading','Executing multiple threads simultaneously','active','2026-03-20 18:14:12'),(66,'Thread Lifecycle','Different stages of thread execution','active','2026-03-20 18:14:12'),(67,'Thread Synchronization','Controlling access to shared resources','active','2026-03-20 18:14:12'),(68,'Mutex','Mutual exclusion mechanism','active','2026-03-20 18:14:12'),(69,'Locks','Used to restrict access to resources','active','2026-03-20 18:14:12'),(70,'Semaphores','Control access using counters','active','2026-03-20 18:14:12'),(71,'Deadlocks','Situation where threads block each other','active','2026-03-20 18:14:12'),(72,'Race Conditions','Unexpected behavior due to concurrency','active','2026-03-20 18:14:12'),(73,'Thread Pools','Managing multiple threads efficiently','active','2026-03-20 18:14:12'),(74,'Parallelism','Executing tasks simultaneously','active','2026-03-20 18:14:12'),(75,'Task Parallel Library','Library for parallel programming','active','2026-03-20 18:14:12'),(76,'Async Programming','Non-blocking execution model','active','2026-03-20 18:14:12'),(77,'async / await','Simplified async programming syntax','active','2026-03-20 18:14:12'),(78,'Futures / Promises','Handle async results','active','2026-03-20 18:14:12'),(79,'Event Driven Programming','Flow based on events','active','2026-03-20 18:14:12'),(80,'.NET CLR','Execution environment for .NET applications','active','2026-03-20 18:14:12'),(81,'JIT Compilation','Converting code to machine code at runtime','active','2026-03-20 18:14:12'),(82,'Garbage Collection','Automatic memory cleanup','active','2026-03-20 18:14:12'),(83,'Managed vs Unmanaged Code','Memory managed vs manual control','active','2026-03-20 18:14:12'),(84,'AppDomain','Isolation unit in .NET','active','2026-03-20 18:14:12'),(85,'JVM Architecture','Java runtime architecture','active','2026-03-20 18:14:12'),(86,'Class Loader','Loads classes into memory','active','2026-03-20 18:14:12'),(87,'Heap Memory','Memory for dynamic allocation','active','2026-03-20 18:14:12'),(88,'Stack Memory','Memory for function calls','active','2026-03-20 18:14:12'),(89,'NodeJS Runtime','Environment for executing JavaScript','active','2026-03-20 18:14:12'),(90,'Event Loop','Handles async operations in NodeJS','active','2026-03-20 18:14:12'),(91,'Non-blocking IO','I/O operations without blocking execution','active','2026-03-20 18:14:12'),(92,'V8 JavaScript Engine','Engine that executes JS code','active','2026-03-20 18:14:12'),(93,'Memory Leaks','Unused memory not released','active','2026-03-20 18:14:12'),(94,'Runtime Diagnostics','Analyzing runtime behavior','active','2026-03-20 18:14:12'),(95,'MVC Architecture','Design pattern separating concerns','active','2026-03-20 18:14:12'),(96,'Dependency Injection','Providing dependencies externally','active','2026-03-20 18:14:12'),(97,'RESTful APIs','APIs based on REST principles','active','2026-03-20 18:14:12'),(98,'ExpressJS Framework','Backend framework for NodeJS','active','2026-03-20 18:14:12'),(99,'Spring Boot REST API','Java framework for REST APIs','active','2026-03-20 18:14:12'),(100,'ADO.NET','Data access technology in .NET','active','2026-03-20 18:14:12'),(101,'Entity Framework','ORM for .NET','active','2026-03-20 18:14:12'),(102,'LINQ','Query language for .NET','active','2026-03-20 18:14:12'),(103,'HTML Fundamentals','Structure of web pages','active','2026-03-20 18:14:12'),(104,'CSS Fundamentals','Styling web pages','active','2026-03-20 18:14:12'),(105,'JavaScript Basics','Core scripting language','active','2026-03-20 18:14:12'),(106,'JWT Authentication','Token-based authentication','active','2026-03-20 18:14:12'),(107,'OAuth','Authorization framework','active','2026-03-20 18:14:12'),(108,'CORS','Cross-origin resource sharing','active','2026-03-20 18:14:12'),(109,'Normalization','Reducing data redundancy','active','2026-03-20 18:14:12'),(110,'Joins','Combining data from multiple tables','active','2026-03-20 18:14:12'),(111,'Indexes','Improving query performance','active','2026-03-20 18:14:12'),(112,'SOLID Principles','Five principles for clean code','active','2026-03-20 18:14:12'),(113,'Microservices Architecture','Distributed system design','active','2026-03-20 18:14:12'),(114,'Caching Strategies','Improving performance using cache','active','2026-03-20 18:14:12'),(115,'basic concepts of coding','This concept covers the basics of coding including variables, loops, conditionals, and functions','inactive','2026-03-25 12:46:48');
/*!40000 ALTER TABLE `concepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `framework_concepts`
--

DROP TABLE IF EXISTS `framework_concepts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `framework_concepts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `framework_id` int DEFAULT NULL,
  `concept_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `framework_concepts`
--

LOCK TABLES `framework_concepts` WRITE;
/*!40000 ALTER TABLE `framework_concepts` DISABLE KEYS */;
INSERT INTO `framework_concepts` VALUES (1,1,26),(2,1,27),(3,1,28),(4,1,30),(5,1,31),(6,1,95),(7,1,96),(8,1,97),(9,1,85),(10,1,82),(11,1,86),(12,1,106),(13,1,108),(14,1,113),(15,1,114),(16,2,95),(17,2,96),(18,2,97),(19,2,26),(20,2,30),(21,2,31),(22,3,109),(23,3,110),(24,3,111),(25,3,96),(26,3,30),(27,4,109),(28,4,110),(29,4,111),(30,4,96),(31,4,30),(32,5,95),(33,5,96),(34,5,97),(35,5,80),(36,5,82),(37,5,81),(38,5,106),(39,5,108),(40,6,95),(41,6,96),(42,6,97),(43,7,97),(44,7,76),(45,7,78),(46,8,79),(47,8,76),(48,8,78),(49,9,100),(50,9,109),(51,9,110),(52,10,101),(53,10,109),(54,10,110),(55,11,109),(56,11,110),(57,11,111),(58,12,95),(59,12,96),(60,12,97),(61,12,106),(62,12,108),(63,13,97),(64,13,23),(65,14,97),(66,14,76),(67,14,78),(68,15,89),(69,15,90),(70,15,91),(71,15,92),(72,15,76),(73,15,78),(74,15,97),(75,16,97),(76,16,98),(77,17,95),(78,17,96),(79,17,97),(80,18,105),(81,18,79),(82,18,76),(83,18,78),(84,19,105),(85,19,95),(86,19,76),(87,20,105),(88,20,79),(89,20,76),(90,21,105),(91,21,97),(92,21,76),(93,22,95),(94,22,103),(95,22,104),(96,23,95),(97,23,103),(98,23,104),(99,24,109),(100,24,110),(101,24,111),(102,25,109),(103,25,110),(104,25,111),(105,26,109),(106,26,110),(107,26,111),(108,27,109),(109,27,110),(110,27,111),(111,28,21),(112,28,22),(113,28,64),(114,29,21),(115,29,22),(116,30,21),(117,30,22),(118,31,21),(119,31,22),(120,32,21),(121,32,76),(122,33,21),(123,33,76),(124,34,21),(125,34,76),(126,35,97),(127,35,64),(128,36,97),(129,36,64),(130,37,97),(131,37,64),(132,38,97),(133,38,64),(134,39,97),(135,39,76),(136,40,97),(137,40,76),(138,41,55),(139,41,56),(140,41,57),(141,41,60),(142,41,64),(143,42,55),(144,42,56),(145,42,57),(146,42,60),(147,42,64),(148,43,55),(149,43,56),(150,43,57),(151,43,64),(152,44,55),(153,44,56),(154,44,57),(155,44,64);
/*!40000 ALTER TABLE `framework_concepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frameworks`
--

DROP TABLE IF EXISTS `frameworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frameworks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `layer_id` bigint DEFAULT NULL,
  `language_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frameworks`
--

LOCK TABLES `frameworks` WRITE;
/*!40000 ALTER TABLE `frameworks` DISABLE KEYS */;
INSERT INTO `frameworks` VALUES (1,'Spring Boot',2,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(2,'Spring MVC',2,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(3,'Hibernate',2,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(4,'JPA',2,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(5,'ASP.NET Core',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(6,'ASP.NET MVC',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(7,'GRPC',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(8,'SignalR',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(9,'ADO.NET',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(10,'Entity Framework',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(11,'Dapper',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(12,'Django',2,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(13,'Flask',2,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(14,'FastAPI',2,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(15,'Node.js',2,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(16,'Express.js',2,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(17,'NestJS',2,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(18,'React',1,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(19,'Angular',1,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(20,'Vue.js',1,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(21,'Next.js',1,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(22,'JSP',1,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(23,'Razor Pages',1,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(24,'MySQL',3,32,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(25,'PostgreSQL',3,32,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(26,'Oracle Database',3,32,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(27,'Microsoft SQL Server',3,32,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(28,'JUnit',4,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(29,'TestNG',4,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(30,'NUnit',4,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(31,'xUnit',4,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(32,'Jest',4,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(33,'Chai',4,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(34,'PyTest',4,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(35,'Selenium',4,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(36,'Selenium',4,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(37,'Selenium',4,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(38,'Selenium',4,6,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(39,'playwright',4,6,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(40,'playwright',4,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(41,'TensorFlow',5,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(42,'PyTorch',5,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(43,'Scikit-learn',5,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(44,'Keras',5,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(45,'Core',2,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(46,'Core',1,1,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(47,'Core',2,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(48,'Core',1,2,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(49,'Core',2,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(50,'Core',1,3,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(51,'Core',2,4,'2026-03-21 01:16:33','2026-03-21 01:16:33'),(52,'Core',1,4,'2026-03-21 01:16:33','2026-03-21 01:16:33');
/*!40000 ALTER TABLE `frameworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hands_on`
--

DROP TABLE IF EXISTS `hands_on`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hands_on` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `question_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `description` text,
  `duration` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hands_on`
--

LOCK TABLES `hands_on` WRITE;
/*!40000 ALTER TABLE `hands_on` DISABLE KEYS */;
/*!40000 ALTER TABLE `hands_on` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hands_on_results`
--

DROP TABLE IF EXISTS `hands_on_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hands_on_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `hands_on_id` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `sme_id` bigint DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `hands_on_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `github_link` varchar(255) DEFAULT NULL,
  `submitted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `interview_id` int NOT NULL AUTO_INCREMENT,
  `application_id` int DEFAULT NULL,
  `scheduled_at` datetime DEFAULT NULL,
  `rescheduled_at` datetime DEFAULT NULL,
  `mode` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `remark` text,
  `outcome` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`interview_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_id` int DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `applied_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
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
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_descriptions`
--

LOCK TABLES `job_descriptions` WRITE;
/*!40000 ALTER TABLE `job_descriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_descriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language` varchar(100) DEFAULT NULL,
  `runtime_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `runtime_id` (`runtime_id`),
  CONSTRAINT `languages_ibfk_1` FOREIGN KEY (`runtime_id`) REFERENCES `runtimes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'Java',2),(2,'C#',4),(3,'JavaScript',3),(4,'Python',1),(5,'Kotlin',2),(6,'TypeScript',3),(7,'C',5),(8,'C++',5),(9,'Dart',6),(10,'Go',7),(11,'Rust',8),(12,'R',9),(13,'Ruby',10),(14,'Swift',11),(15,'Shell Script',12),(16,'HTML',13),(17,'YAML',13),(18,'Markdown',13),(19,'SQL',14),(20,'VB.NET',4),(21,'Bash',12);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `layers`
--

DROP TABLE IF EXISTS `layers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `layers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `layers` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `layers`
--

LOCK TABLES `layers` WRITE;
/*!40000 ALTER TABLE `layers` DISABLE KEYS */;
INSERT INTO `layers` VALUES (1,'Frontend'),(2,'Backend'),(3,'Database'),(4,'Testing'),(5,'AI');
/*!40000 ALTER TABLE `layers` ENABLE KEYS */;
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
  `overall_score` decimal(6,2) DEFAULT NULL,
  `average_percentage` decimal(6,2) DEFAULT NULL,
  `improvement_rate` decimal(5,2) DEFAULT NULL,
  `performance_level_id` bigint DEFAULT NULL,
  `min_score` int DEFAULT NULL,
  `max_score` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`)
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
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `resource_url` varchar(255) DEFAULT NULL,
  `type` enum('VIDEO','DOC','LINK') DEFAULT NULL,
  `uploaded_by` bigint DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `option_a` varchar(255) DEFAULT NULL,
  `option_b` varchar(255) DEFAULT NULL,
  `option_c` varchar(255) DEFAULT NULL,
  `option_d` varchar(255) DEFAULT NULL,
  `correct_answer` varchar(10) DEFAULT NULL,
  `question_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mcq_options`
--

LOCK TABLES `mcq_options` WRITE;
/*!40000 ALTER TABLE `mcq_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mcq_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_appointments`
--

DROP TABLE IF EXISTS `mentor_appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentor_appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `mentor_id` int DEFAULT NULL,
  `appointment_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `status` enum('SCHEDULED','CANCELLED','COMPLETED') DEFAULT NULL,
  `meeting_link` varchar(255) DEFAULT NULL,
  `agenda` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `mentor_id` int DEFAULT NULL,
  `mentee_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `meeting_link` varchar(255) DEFAULT NULL,
  `counseling_date` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  PRIMARY KEY (`id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `mentor_id` int DEFAULT NULL,
  `mentee_id` int DEFAULT NULL,
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
  `categories` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
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
  PRIMARY KEY (`id`)
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
  `time_schedule_at` datetime DEFAULT NULL,
  `status` enum('In_progress','Pending','Completed') DEFAULT NULL,
  `concept_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `rating` enum('poor','good','very_good','excellent','worst') DEFAULT NULL,
  `sme_id` bigint DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `snapshot_date` date DEFAULT NULL,
  `performance_json` json DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `user_id` int DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `full_name` varchar(255) GENERATED ALWAYS AS (concat(`first_name`,_utf8mb4' ',`last_name`)) STORED,
  `gender` enum('MALE','FEMALE') DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `personal_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_informations`
--

LOCK TABLES `personal_informations` WRITE;
/*!40000 ALTER TABLE `personal_informations` DISABLE KEYS */;
INSERT INTO `personal_informations` (`id`, `user_id`, `first_name`, `last_name`, `gender`, `date_of_birth`, `email`, `address`, `pincode`) VALUES (1,10,'Vibhavari','Borole','FEMALE','2001-02-03','vibhavari961@gmail.com','Bhosari','411039'),(2,2,'Tejas','Naukudkar','MALE','2004-12-10','naukudkartejas@gmail.com','Navi Mumbai Area','410218'),(3,7,'Sumit','Bhor','MALE','2006-06-13','sumitbhor227@gmail.com','Tambademala, Awasari Khurd','412405'),(4,4,'Sai','Jagdale','FEMALE','2004-06-14','saijagdale1406@gmail.com','Pancharatneshwar Society, Dhankawadi','411043'),(5,8,'Shrutik','Daundkar','MALE','2007-01-03','shrutikdaundkar6225@gmail.com','Pimpalgaon, Khed','410505'),(6,5,'Parikshit','Shelorkar','MALE','2006-11-16','parikshitshelorkar2.0@gmail.com','Area Code 444107','444107'),(7,6,'Samruddhi','Rasal','FEMALE','2004-02-03','samruddhi.rasal03@gmail.com','Shramsafalya, Dhankawadi','411043'),(8,13,'Sahil','Kamble','MALE','2004-01-19','sahilbajkamble@gmail.com','Surli, Satara','415511'),(9,9,'Chaitrali','Patil','FEMALE','2004-04-09','chaitralipatil944@gmail.com','Shridharnagar, Dhankawadi','411043'),(10,3,'Tejas','Pawale','MALE','1998-02-24','pawaletejas98@gmail.com','Ghatkopar West','400084'),(11,11,'Arnav','Tolahunase','MALE','2004-12-21','arnav.tolahunase21@gmail.com','Indira Nagar, Nashik','422009'),(12,14,'Sarthak','Kadam','MALE','2003-04-28','sarthakkadam7777@gmail.com','Kolhapur Area','416003'),(13,15,'Tanvi','Sonawane','FEMALE','2004-04-18','tanvi.sonawane1804@gmail.com','JM Road, Shivaji Nagar','411005'),(14,12,'Nirjala','Naik','FEMALE','2004-06-17','nirjalanaik1706@gmail.com','Khanapur, Gargoti','416209'),(15,19,'Sachin','Kharat','MALE','2004-02-17','kharatsachin012@gmail.com','Hasnabad, Bhokardan, Jalna','431114'),(16,25,'Rahul','Gayke','MALE','2000-01-01','rahul@gmail.com','Pune','411001'),(17,17,'Nitish','Kharat','MALE','2004-07-16','nitishkharat608@gmail.com','Hasnabad, Bhokardan','431114'),(18,18,'Sanika','Bhor','FEMALE','2005-04-27','bhorsanika0239@gmail.com','Awasari Khurd','412405'),(19,16,'Anish','Adak','MALE','2004-06-25','anishadak4210@gmail.com','B.T. Kawade Road','411036'),(20,20,'Ajay','Kale','MALE','2004-08-16','ajaykale749810@gmail.com','Chh. Sambhajinagar','431001'),(21,21,'Karan','Bohare','MALE','2004-05-26','karanbohare2073@gmail.com','Verul','431102'),(22,22,'Pooja','Devray','FEMALE','1994-09-15','poojadevray@gmail.com','Pune-Satara Road','411037'),(23,23,'Rutuja','Mokale','FEMALE','2003-06-22','rutujamokale2003@gmail.com','Wangi, Kadegaon, Sangli','415305'),(24,24,'Abhay','Rathod','MALE','1995-08-28','abhayrathod241995@gmail.com','Rasta Peth, Pune','411011'),(25,1,'Ravi','Tambade','MALE','1975-08-18','ravitambade@transflower.in','Pune','411001');
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
  PRIMARY KEY (`id`)
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
-- Table structure for table `problem_statements`
--

DROP TABLE IF EXISTS `problem_statements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problem_statements` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `description` text,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problem_statements`
--

LOCK TABLES `problem_statements` WRITE;
/*!40000 ALTER TABLE `problem_statements` DISABLE KEYS */;
/*!40000 ALTER TABLE `problem_statements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professional_informations`
--

DROP TABLE IF EXISTS `professional_informations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professional_informations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(100) DEFAULT NULL,
  `employment_type` enum('FULL_TIME','PART_TIME','INTERNSHIP') DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `is_current_job` tinyint(1) DEFAULT NULL,
  `experience_years` int DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `skills` text,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `professional_informations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional_informations`
--

LOCK TABLES `professional_informations` WRITE;
/*!40000 ALTER TABLE `professional_informations` DISABLE KEYS */;
INSERT INTO `professional_informations` VALUES (1,1,'Transflower Learning Pvt. Ltd','Developer','PART_TIME','2026-09-05',NULL,1,1,'Walvekar Nagar','FullStack'),(2,2,'Ecode Networks','Intern','PART_TIME','2026-03-03','2026-03-05',0,1,'410215','java'),(3,3,'clover infotech mumbai','DBA','FULL_TIME','2024-12-27','2026-09-06',0,3,'Ghatkopar West','node.js'),(4,4,'Transflower Learning Pvt. Ltd','Junior Developer','FULL_TIME','2026-01-19',NULL,1,NULL,'Dhankawadi','c'),(5,5,'Transflower Learning Pvt. Ltd','Intern','PART_TIME','2026-01-21',NULL,1,0,'444104','c++'),(6,6,'Transflower Learning Pvt. Ltd','Junior Developer','PART_TIME','2025-12-29','2026-06-01',1,0,'Dhankawadi','c#'),(7,7,'TransFlower learning PVT. Ltd.','Intern','PART_TIME','2024-05-21',NULL,1,2,'Tambademala','python'),(8,8,'Transflower Learning Pvt. Ltd','Intern','PART_TIME','2025-06-27',NULL,1,0,'Pune','JavaScript'),(9,9,'Transflower Learning Pvt. Ltd.','Software Developer Intern','FULL_TIME','2026-01-19','2026-06-19',1,1,'Dhankawadi','MySQL'),(10,10,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2026-01-15','2028-05-20',1,2,'Bhosari','java'),(11,11,'Transflower Learning Pvt. Ltd.','Software Developer Intern','FULL_TIME','2025-12-28','2026-06-28',1,1,'Indira Nagar','node.js'),(12,12,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2025-06-16','2026-05-20',1,0,'Khanapur','c'),(13,13,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2025-06-16','2026-04-30',1,0,'Satara','c++'),(14,14,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2025-08-01','2026-04-30',1,0,'Kolhapur','c#'),(15,15,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2026-01-15','2026-06-30',1,0,'Pune','python'),(16,16,'Transflower Learning Pvt. Ltd','Internship','INTERNSHIP','2026-01-01','2026-06-30',0,0,'B.T Kawade','JavaScript'),(17,17,'Transflower Learning Pvt. Ltd',NULL,'FULL_TIME','2025-09-05',NULL,0,0,'Jalna','MySQL'),(18,18,'Transflower Learning Pvt. Ltd','Intern','FULL_TIME','2024-04-01','2027-06-03',1,2,'Awasari Khurd','java'),(19,19,NULL,NULL,'FULL_TIME','2025-09-05','2026-05-28',1,0,'Jalna','node.js'),(20,20,'Transflower Learning Pvt. Ltd','Internship','FULL_TIME','2025-09-05',NULL,0,0,'Sambhajinagar','c'),(21,21,'Transflower Learning Pvt. Ltd','Developer','FULL_TIME','2025-09-05',NULL,1,0,'Verul','c++'),(22,22,'Synerzip','Software Engineer','FULL_TIME','2012-11-04','2020-03-11',0,3,'Pune','c#'),(23,23,'Transflower Learning Pvt. Ltd','java fullstack developer','FULL_TIME','2025-07-01','2026-04-01',1,0,'Sangli','JavaScript');
/*!40000 ALTER TABLE `professional_informations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_members`
--

DROP TABLE IF EXISTS `project_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_members` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `project_id` bigint DEFAULT NULL,
  `student_id` bigint DEFAULT NULL,
  `joined_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_members`
--

LOCK TABLES `project_members` WRITE;
/*!40000 ALTER TABLE `project_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_members` ENABLE KEYS */;
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
  `status` enum('In_progress','Pending','Completed') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`project_id`)
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
-- Table structure for table `question_framework_concepts`
--

DROP TABLE IF EXISTS `question_framework_concepts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_framework_concepts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `question_id` bigint DEFAULT NULL,
  `framework_id` bigint DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_framework_concepts`
--

LOCK TABLES `question_framework_concepts` WRITE;
/*!40000 ALTER TABLE `question_framework_concepts` DISABLE KEYS */;
INSERT INTO `question_framework_concepts` VALUES (1,34,10);
/*!40000 ALTER TABLE `question_framework_concepts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `question_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `question_type` varchar(255) DEFAULT NULL,
  `difficulty_level` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` enum('DRAFT','APPROVED','INACTIVE') NOT NULL DEFAULT 'DRAFT',
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Check whether a given number is a palindrome.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(2,'Check whether a number is prime.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(3,'Print Fibonacci series up to N terms.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(4,'Find factorial of a number using recursion.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(5,'Reverse the digits of a given number.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(6,'Find the sum of digits of a number.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(7,'Check whether a number is an Armstrong number.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(8,'Find the greatest common divisor of two numbers.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(9,'Find the least common multiple of two numbers.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(10,'Check if two strings are anagrams.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(11,'Check whether a string is palindrome.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(12,'Count number of vowels in a string.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(13,'Rotate an array by K positions.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(14,'Find the largest element in an array.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(15,'Find the second largest element in an array.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(16,'Remove duplicates from an array.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(17,'Merge two sorted arrays.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(18,'Find the missing number in an array from 1 to N.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(19,'Add two matrices.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(20,'Find transpose of a matrix.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(21,'Print matrix in spiral order.','PROBLEM_STATEMENT','ADVANCE','2026-03-20 17:23:28',1),(22,'Implement binary search on a sorted array.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(23,'Implement linear search.','PROBLEM_STATEMENT','BEGINNER','2026-03-20 17:23:28',1),(24,'Check if parentheses are balanced.','PROBLEM_STATEMENT','INTERMEDIATE','2026-03-20 17:23:28',1),(25,'Find longest substring without repeating characters.','PROBLEM_STATEMENT','ADVANCE','2026-03-20 17:23:28',1),(26,'What is JVM in Java?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(27,'Which keyword is used for inheritance in Java?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(28,'What is the default value of int in Java?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(29,'What is method overloading?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(30,'Which collection does not allow duplicates in Java?','MCQ','ADVANCE','2026-03-20 17:23:28',1),(31,'What is CLR in .NET?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(32,'Which keyword is used for exception handling in C#?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(33,'What is DbContext in Entity Framework?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(34,'What is LINQ used for?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(35,'What is the use of async/await in C#?','MCQ','ADVANCE','2026-03-20 17:23:28',1),(36,'What is Node.js?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(37,'Which module is used to create server in Node.js?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(38,'What is npm?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(39,'What is event loop in Node.js?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(40,'Which method is used to read file asynchronously in Node.js?','MCQ','ADVANCE','2026-03-20 17:23:28',1),(41,'What is a pointer in C++?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(42,'Which operator is used to access pointer value?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(43,'What is constructor in C++?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(44,'What is function overloading in C++?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(45,'What is virtual function in C++?','MCQ','ADVANCE','2026-03-20 17:23:28',1),(46,'What is SQL?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(47,'Which command is used to retrieve data?','MCQ','BEGINNER','2026-03-20 17:23:28',1),(48,'What is primary key?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(49,'What is normalization in SQL?','MCQ','INTERMEDIATE','2026-03-20 17:23:28',1),(50,'What is JOIN in SQL?','MCQ','ADVANCE','2026-03-20 17:23:28',1),(51,'Build a Java program to implement multithreading.','HANDS_ON','INTERMEDIATE','2026-03-20 17:23:28',1),(52,'Create a .NET Core Web API with CRUD operations.','HANDS_ON','INTERMEDIATE','2026-03-20 17:23:28',1),(53,'Develop a Node.js REST API using Express.','HANDS_ON','INTERMEDIATE','2026-03-20 17:23:28',1),(54,'Write a C++ program demonstrating inheritance.','HANDS_ON','BEGINNER','2026-03-20 17:23:28',1),(55,'Design a SQL database schema.','HANDS_ON','INTERMEDIATE','2026-03-20 17:23:28',1),(56,'Build a Java file handling application.','HANDS_ON','BEGINNER','2026-03-20 17:23:28',1),(57,'Create a .NET app using Dependency Injection.','HANDS_ON','ADVANCE','2026-03-20 17:23:28',1),(58,'Develop a Node.js chat app using WebSockets.','HANDS_ON','ADVANCE','2026-03-20 17:23:28',1),(59,'Implement Stack/Queue in C++.','HANDS_ON','BEGINNER','2026-03-20 17:23:28',1),(60,'Optimize SQL queries using indexing.','HANDS_ON','ADVANCE','2026-03-20 17:23:28',1);
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
  `company_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `alumni_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','Manages entire system, users, and configurations'),(2,'Student','Takes assessments and views results'),(3,'Mentor','Guides students and reviews performance'),(4,'SME','Creates and reviews questions'),(5,'Employer','Views candidates and assessments'),(6,'Alumni','Former students associated with the system'),(7,'Unassigned','Users who are not assigned any role');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `runtimes`
--

DROP TABLE IF EXISTS `runtimes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `runtimes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `runtime_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `runtimes`
--

LOCK TABLES `runtimes` WRITE;
/*!40000 ALTER TABLE `runtimes` DISABLE KEYS */;
INSERT INTO `runtimes` VALUES (1,'Python '),(2,'java'),(3,'Node.js'),(4,'dotnet'),(5,'C/C++'),(6,'Dart'),(7,'Go'),(8,'Rust'),(9,'R'),(10,'Ruby'),(11,'Swift'),(12,'Shell'),(13,'Markup'),(14,'DB Engine');
/*!40000 ALTER TABLE `runtimes` ENABLE KEYS */;
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
  `shortlisted_at` datetime DEFAULT NULL,
  `round_level` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
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
  `user_id` bigint DEFAULT NULL,
  `runtime_id` bigint DEFAULT NULL,
  PRIMARY KEY (`sme_runtime_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sme_runtimes`
--

LOCK TABLES `sme_runtimes` WRITE;
/*!40000 ALTER TABLE `sme_runtimes` DISABLE KEYS */;
INSERT INTO `sme_runtimes` VALUES (1,5,1),(2,5,2);
/*!40000 ALTER TABLE `sme_runtimes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_assessment_results`
--

DROP TABLE IF EXISTS `student_assessment_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_assessment_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `assessment_id` int DEFAULT NULL,
  `score` float DEFAULT NULL,
  `percentile` float DEFAULT NULL,
  `time_taken_minutes` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_assessment_results`
--

LOCK TABLES `student_assessment_results` WRITE;
/*!40000 ALTER TABLE `student_assessment_results` DISABLE KEYS */;
INSERT INTO `student_assessment_results` VALUES (1,1,1,78,85.5,45),(2,2,2,65,72,50),(3,3,3,88,92.3,40),(4,4,4,55,60.5,55),(5,5,1,91,95,35),(6,6,2,73,80.2,48),(7,1,3,69,75.8,52),(8,3,5,84,89.1,42),(9,4,4,62,68.4,60),(10,5,2,77,83.7,46),(11,3,3,78.5,85.2,40),(12,6,7,65,70.5,50),(13,7,8,88,92.3,35),(14,8,9,55.5,60,60),(15,6,12,65,70.5,50),(16,7,13,88,92.3,35),(17,8,14,55.5,60,60),(18,16,1,32,35,45),(19,2,4,39,42,30),(20,15,3,25,20,50),(21,9,2,45,50,40),(22,8,5,18,15,55);
/*!40000 ALTER TABLE `student_assessment_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_concept_progress`
--

DROP TABLE IF EXISTS `student_concept_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_concept_progress` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_id` bigint DEFAULT NULL,
  `concept_id` bigint DEFAULT NULL,
  `status` enum('In_progress','Pending','Completed') DEFAULT NULL,
  `initiated_at` datetime DEFAULT NULL,
  `completed_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_concept_progress`
--

LOCK TABLES `student_concept_progress` WRITE;
/*!40000 ALTER TABLE `student_concept_progress` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_concept_progress` ENABLE KEYS */;
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
  KEY `FKk171b2q5ikck3f9yk4n9lbyvw` (`question_id`),
  KEY `FKq1jpgjcbjbulxvhdkctcxhg12` (`test_id`),
  CONSTRAINT `FKk171b2q5ikck3f9yk4n9lbyvw` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`),
  CONSTRAINT `FKq1jpgjcbjbulxvhdkctcxhg12` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_questions`
--

LOCK TABLES `test_questions` WRITE;
/*!40000 ALTER TABLE `test_questions` DISABLE KEYS */;
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
  `sme_id` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `description` text,
  `difficulty` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,1,'Array Sum Problem',30,'Write a program to calculate the sum of elements in an array.','BIGINNER','2026-03-23 18:00:08',1),(2,2,'Palindrome Check',20,'Write a program to check whether a string is palindrome.','INTERMEDIATE','2026-03-23 18:00:08',1),(3,1,'Prime Number Finder',25,'Write a program to check if a number is prime.','BIGINNER','2026-03-23 18:00:08',1),(4,3,'Sorting Algorithm',40,'Implement bubble sort algorithm.','ADVANCE','2026-03-23 18:00:08',1),(5,2,'Binary Search',35,'Implement binary search on a sorted array.','ADVANCE','2026-03-23 18:00:08',1);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
INSERT INTO `user_logs` VALUES (1,3,'2026-03-23 08:15:00','2026-03-23 10:20:00'),(2,12,'2026-03-23 08:45:00','2026-03-23 17:00:00'),(3,7,'2026-03-23 09:30:00','2026-03-23 11:15:00'),(4,22,'2026-03-23 10:05:00','2026-03-23 12:30:00'),(5,5,'2026-03-23 11:20:00','2026-03-23 14:00:00'),(6,19,'2026-03-23 12:10:00','2026-03-23 13:45:00'),(7,8,'2026-03-23 13:00:00','2026-03-23 18:30:00'),(8,2,'2026-03-23 14:15:00','2026-03-23 15:50:00'),(9,14,'2026-03-23 15:30:00','2026-03-23 16:45:00'),(10,1,'2026-03-23 16:05:00','2026-03-23 19:10:00'),(11,25,'2026-03-23 17:20:00','2026-03-23 20:00:00'),(12,11,'2026-03-23 18:40:00','2026-03-23 22:15:00'),(13,6,'2026-03-24 07:50:00','2026-03-24 09:30:00'),(14,4,'2026-03-24 08:20:00',NULL),(15,17,'2026-03-24 08:55:00','2026-03-24 10:45:00'),(16,21,'2026-03-24 09:10:00',NULL),(17,9,'2026-03-24 09:40:00','2026-03-24 11:20:00'),(18,15,'2026-03-24 10:15:00',NULL),(19,3,'2026-03-24 10:50:00','2026-03-24 14:00:00'),(20,10,'2026-03-24 11:30:00',NULL),(21,24,'2026-03-24 12:05:00','2026-03-24 13:10:00'),(22,13,'2026-03-24 12:45:00',NULL),(23,8,'2026-03-24 13:20:00',NULL),(24,20,'2026-03-24 13:50:00','2026-03-24 15:30:00'),(25,2,'2026-03-24 14:15:00',NULL),(26,16,'2026-03-24 14:40:00',NULL),(27,7,'2026-03-24 15:10:00',NULL),(28,23,'2026-03-24 15:35:00',NULL),(29,12,'2026-03-24 16:00:00',NULL),(30,18,'2026-03-24 16:25:00',NULL);
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `assigned_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (6,1,1,'2026-03-23 10:00:00'),(9,4,3,'2026-03-23 11:00:00'),(10,5,4,'2026-03-23 11:30:00'),(34,3,2,'2026-03-25 16:10:06'),(35,7,2,'2026-03-25 16:10:33'),(39,2,1,'2026-04-01 15:18:46');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(15) DEFAULT NULL,
  `password` text,
  `status` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'9881735801','abcd','ACTIVE','2012-09-05 00:00:00','2026-03-25 13:19:04'),(2,'8433752395','12345','ACTIVE','2026-02-02 00:00:00','2026-03-20 17:27:27'),(3,'9930952851','12345','ACTIVE','2024-12-27 00:00:00','2026-03-20 17:27:27'),(4,'9843053149','12345','INACTIVE','2026-01-19 00:00:00','2026-03-25 16:10:58'),(5,'9309868668','12345','ACTIVE','2026-01-21 00:00:00','2026-03-20 17:27:27'),(6,'9665992262','12345','ACTIVE','2025-12-29 00:00:00','2026-03-25 13:48:04'),(7,'8530086989','12345','ACTIVE','2024-05-21 00:00:00','2026-03-20 17:27:27'),(8,'9359595484','12345','ACTIVE','2025-06-27 00:00:00','2026-03-20 17:27:27'),(9,'7030799646','12345','ACTIVE','2026-01-19 00:00:00','2026-03-20 17:27:27'),(10,'7218540228','12345','ACTIVE','2026-01-15 00:00:00','2026-03-20 17:27:27'),(11,'9545611780','12345','ACTIVE','2025-12-28 00:00:00','2026-03-20 17:27:27'),(12,'7972520102','12345','ACTIVE','2025-06-16 00:00:00','2026-03-20 17:27:27'),(13,'7972542628','12345','ACTIVE','2025-06-16 00:00:00','2026-03-20 17:27:27'),(14,'9356445527','12345','ACTIVE','2025-08-01 00:00:00','2026-03-20 17:27:27'),(15,'7499583199','12345','ACTIVE','2026-01-15 00:00:00','2026-03-20 17:27:27'),(16,'7387745636','12345','ACTIVE','2026-01-01 00:00:00','2026-03-20 17:27:27'),(17,'8149416008','12345','ACTIVE','2025-09-05 00:00:00','2026-03-20 17:27:27'),(18,'8446756339','12345','ACTIVE','2024-04-01 00:00:00','2026-03-20 17:27:27'),(19,'9637661382','12345','ACTIVE','2025-09-05 00:00:00','2026-03-20 17:27:27'),(20,'7498105029','12345','ACTIVE','2025-09-05 00:00:00','2026-03-20 17:27:27'),(21,'9765869164','12345','ACTIVE','2025-09-05 00:00:00','2026-03-20 17:27:27'),(22,'9604941566','12345','ACTIVE','2012-11-04 00:00:00','2026-03-20 17:27:27'),(23,'9529259355','12345','ACTIVE','2025-07-01 00:00:00','2026-03-20 17:27:27'),(24,'7972616050','12345','ACTIVE','2025-08-25 00:00:00','2026-03-21 00:38:42'),(25,'9130240968','12345','ACTIVE','2025-09-05 00:00:00','2026-03-21 01:05:03'),(26,'1234567890','12345','ACTIVE',NULL,'2026-03-25 15:55:10');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-01 15:22:46
