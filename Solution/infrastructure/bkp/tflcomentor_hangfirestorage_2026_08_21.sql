CREATE DATABASE  IF NOT EXISTS `tflcomentor_hangfirestorage` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tflcomentor_hangfirestorage`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 192.168.1.149    Database: tflcomentor_hangfirestorage
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
-- Table structure for table `aggregatedcounter`
--

DROP TABLE IF EXISTS `aggregatedcounter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aggregatedcounter` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` int NOT NULL,
  `ExpireAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `IX_CounterAggregated_Key` (`Key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aggregatedcounter`
--

LOCK TABLES `aggregatedcounter` WRITE;
/*!40000 ALTER TABLE `aggregatedcounter` DISABLE KEYS */;
INSERT INTO `aggregatedcounter` VALUES (1,'stats:failed:2026-08-19',1,'2026-09-19 09:48:52');
/*!40000 ALTER TABLE `aggregatedcounter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `counter`
--

DROP TABLE IF EXISTS `counter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `counter` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` int NOT NULL,
  `ExpireAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Counter_Key` (`Key`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counter`
--

LOCK TABLES `counter` WRITE;
/*!40000 ALTER TABLE `counter` DISABLE KEYS */;
/*!40000 ALTER TABLE `counter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributedlock`
--

DROP TABLE IF EXISTS `distributedlock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributedlock` (
  `Resource` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `CreatedAt` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributedlock`
--

LOCK TABLES `distributedlock` WRITE;
/*!40000 ALTER TABLE `distributedlock` DISABLE KEYS */;
/*!40000 ALTER TABLE `distributedlock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hash`
--

DROP TABLE IF EXISTS `hash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hash` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Field` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` longtext,
  `ExpireAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `IX_Hash_Key_Field` (`Key`,`Field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hash`
--

LOCK TABLES `hash` WRITE;
/*!40000 ALTER TABLE `hash` DISABLE KEYS */;
/*!40000 ALTER TABLE `hash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `StateId` int DEFAULT NULL,
  `StateName` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `InvocationData` longtext NOT NULL,
  `Arguments` longtext NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `ExpireAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_Job_StateName` (`StateName`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,43,'Failed','{\"Type\":\"backend.Services.Interfaces.IEmailService, backend, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null\",\"Method\":\"SendEmail\",\"ParameterTypes\":\"[\\\"System.String, System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e\\\",\\\"System.String, System.Private.CoreLib, Version=10.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e\\\"]\",\"Arguments\":\"[\\\"\\\\\\\"test@gmail.com\\\\\\\"\\\",\\\"\\\\\\\"ABC123\\\\\\\"\\\"]\"}','[\"\\\"test@gmail.com\\\"\",\"\\\"ABC123\\\"\"]','2026-08-17 13:24:04.683058',NULL);
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobparameter`
--

DROP TABLE IF EXISTS `jobparameter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobparameter` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `JobId` int NOT NULL,
  `Name` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` longtext,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `IX_JobParameter_JobId_Name` (`JobId`,`Name`),
  KEY `FK_JobParameter_Job` (`JobId`),
  CONSTRAINT `FK_JobParameter_Job` FOREIGN KEY (`JobId`) REFERENCES `job` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobparameter`
--

LOCK TABLES `jobparameter` WRITE;
/*!40000 ALTER TABLE `jobparameter` DISABLE KEYS */;
INSERT INTO `jobparameter` VALUES (1,1,'CurrentCulture','\"en-US\"'),(2,1,'CurrentUICulture','\"en-US\"'),(3,1,'RetryCount','10');
/*!40000 ALTER TABLE `jobparameter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobqueue`
--

DROP TABLE IF EXISTS `jobqueue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobqueue` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `JobId` int NOT NULL,
  `FetchedAt` datetime(6) DEFAULT NULL,
  `Queue` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `FetchToken` varchar(36) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `IX_JobQueue_QueueAndFetchedAt` (`Queue`,`FetchedAt`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobqueue`
--

LOCK TABLES `jobqueue` WRITE;
/*!40000 ALTER TABLE `jobqueue` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobqueue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobstate`
--

DROP TABLE IF EXISTS `jobstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobstate` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `JobId` int NOT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `Name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Reason` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Data` longtext,
  PRIMARY KEY (`Id`),
  KEY `FK_JobState_Job` (`JobId`),
  CONSTRAINT `FK_JobState_Job` FOREIGN KEY (`JobId`) REFERENCES `job` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobstate`
--

LOCK TABLES `jobstate` WRITE;
/*!40000 ALTER TABLE `jobstate` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` longtext,
  `ExpireAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server`
--

DROP TABLE IF EXISTS `server`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `server` (
  `Id` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Data` longtext NOT NULL,
  `LastHeartbeat` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server`
--

LOCK TABLES `server` WRITE;
/*!40000 ALTER TABLE `server` DISABLE KEYS */;
INSERT INTO `server` VALUES ('sahil:15412:c808bee2-9211-4481-a8a0-13b86a3791df','{\"WorkerCount\":20,\"Queues\":[\"default\"],\"StartedAt\":\"2026-08-20T10:03:10.8548274Z\"}','2026-08-20 10:46:46.887471'),('salonis-macbook-air:78604:2d1472bd-e21c-4c54-bfbe-4675ed98cd3f','{\"WorkerCount\":20,\"Queues\":[\"default\"],\"StartedAt\":\"2026-08-20T09:25:51.738562Z\"}','2026-08-20 10:46:53.313569');
/*!40000 ALTER TABLE `server` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `set`
--

DROP TABLE IF EXISTS `set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `set` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Key` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Value` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Score` float NOT NULL,
  `ExpireAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `IX_Set_Key_Value` (`Key`,`Value`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `set`
--

LOCK TABLES `set` WRITE;
/*!40000 ALTER TABLE `set` DISABLE KEYS */;
/*!40000 ALTER TABLE `set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `JobId` int NOT NULL,
  `Name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Reason` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `CreatedAt` datetime(6) NOT NULL,
  `Data` longtext,
  PRIMARY KEY (`Id`),
  KEY `FK_HangFire_State_Job` (`JobId`),
  CONSTRAINT `FK_HangFire_State_Job` FOREIGN KEY (`JobId`) REFERENCES `job` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,1,'Enqueued',NULL,'2026-08-17 13:24:04.845052','{\"EnqueuedAt\":\"2026-08-17T13:24:04.6229164Z\",\"Queue\":\"default\"}'),(2,1,'Processing',NULL,'2026-08-17 13:24:17.703125','{\"StartedAt\":\"2026-08-17T13:24:17.5689666Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"5dfe06a2-42f7-45a5-9812-3ae5c558c356\"}'),(3,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:24:21.932906','{\"FailedAt\":\"2026-08-17T13:24:21.5491528Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at System.Reflection.MethodBaseInvoker.InterpretedInvoke_Method(Object obj, IntPtr* args)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeDirectByRefWithFewArgs(Object obj, Span`1 copyOfArgs, BindingFlags invokeAttr)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(4,1,'Scheduled','Retry attempt 1 of 10: Failed to Send email','2026-08-17 13:24:22.003026','{\"EnqueueAt\":\"2026-08-17T13:25:00.7818178Z\",\"ScheduledAt\":\"2026-08-17T13:24:21.7819132Z\"}'),(5,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-17 13:24:33.310139','{\"EnqueuedAt\":\"2026-08-17T13:24:33.0749264Z\",\"Queue\":\"default\"}'),(6,1,'Processing',NULL,'2026-08-17 13:24:37.508679','{\"StartedAt\":\"2026-08-17T13:24:37.3313188Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"5dfe06a2-42f7-45a5-9812-3ae5c558c356\"}'),(7,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:24:41.496467','{\"FailedAt\":\"2026-08-17T13:24:41.0893336Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(8,1,'Scheduled','Retry attempt 2 of 10: Failed to Send email','2026-08-17 13:24:41.509658','{\"EnqueueAt\":\"2026-08-17T13:25:15.4473588Z\",\"ScheduledAt\":\"2026-08-17T13:24:41.4473606Z\"}'),(9,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-17 13:24:48.950488','{\"EnqueuedAt\":\"2026-08-17T13:24:48.8525866Z\",\"Queue\":\"default\"}'),(10,1,'Processing',NULL,'2026-08-17 13:24:57.068265','{\"StartedAt\":\"2026-08-17T13:24:56.8711694Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"5dfe06a2-42f7-45a5-9812-3ae5c558c356\"}'),(11,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:25:00.747373','{\"FailedAt\":\"2026-08-17T13:25:00.4430819Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(12,1,'Scheduled','Retry attempt 3 of 10: Failed to Send email','2026-08-17 13:25:00.761324','{\"EnqueueAt\":\"2026-08-17T13:25:49.6586946Z\",\"ScheduledAt\":\"2026-08-17T13:25:00.6586970Z\"}'),(13,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-17 13:26:35.105675','{\"EnqueuedAt\":\"2026-08-17T13:26:34.9670900Z\",\"Queue\":\"default\"}'),(14,1,'Processing',NULL,'2026-08-17 13:26:46.747528','{\"StartedAt\":\"2026-08-17T13:26:46.6896547Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"5dfe06a2-42f7-45a5-9812-3ae5c558c356\"}'),(15,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:26:50.167554','{\"FailedAt\":\"2026-08-17T13:26:49.9088167Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(16,1,'Scheduled','Retry attempt 4 of 10: Failed to Send email','2026-08-17 13:26:50.226015','{\"EnqueueAt\":\"2026-08-17T13:29:10.1275916Z\",\"ScheduledAt\":\"2026-08-17T13:26:50.1275926Z\"}'),(17,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-17 13:28:36.197816','{\"EnqueuedAt\":\"2026-08-17T13:28:36.1081109Z\",\"Queue\":\"default\"}'),(18,1,'Processing',NULL,'2026-08-17 13:28:49.295444','{\"StartedAt\":\"2026-08-17T13:28:49.1420097Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"3342b0d2-0d6f-4800-b7cc-bbf1155bbb90\"}'),(19,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:28:53.055681','{\"FailedAt\":\"2026-08-17T13:28:52.6844287Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(20,1,'Scheduled','Retry attempt 5 of 10: Failed to Send email','2026-08-17 13:28:53.094523','{\"EnqueueAt\":\"2026-08-17T13:34:29.0446293Z\",\"ScheduledAt\":\"2026-08-17T13:28:53.0446307Z\"}'),(21,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-17 13:35:10.451641','{\"EnqueuedAt\":\"2026-08-17T13:35:10.3299972Z\",\"Queue\":\"default\"}'),(22,1,'Processing',NULL,'2026-08-17 13:35:21.320845','{\"StartedAt\":\"2026-08-17T13:35:21.2777180Z\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\",\"WorkerId\":\"ff396cb2-485d-48b4-a574-c81641467d83\"}'),(23,1,'Failed','An exception occurred during performance of the job.','2026-08-17 13:35:24.710304','{\"FailedAt\":\"2026-08-17T13:35:24.4527658Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in A:\\\\new_15_8\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\r\\n\",\"ServerId\":\"sumit_sanika:19636:63ac4887-372c-412b-8099-6e38bfade4a1\"}'),(24,1,'Scheduled','Retry attempt 6 of 10: Failed to Send email','2026-08-17 13:35:24.725363','{\"EnqueueAt\":\"2026-08-17T13:48:16.6986996Z\",\"ScheduledAt\":\"2026-08-17T13:35:24.6987015Z\"}'),(25,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-19 05:35:52.415550','{\"EnqueuedAt\":\"2026-08-19T05:35:51.9126830Z\",\"Queue\":\"default\"}'),(26,1,'Processing',NULL,'2026-08-19 05:36:06.904706','{\"StartedAt\":\"2026-08-19T05:36:06.8572520Z\",\"ServerId\":\"salonis-macbook-air:23569:158c2418-3d1d-46a4-bc0e-00b30c9a8ec9\",\"WorkerId\":\"bf0fea04-f2f2-4fc7-aa0a-9965529186d5\"}'),(27,1,'Failed','An exception occurred during performance of the job.','2026-08-19 05:36:07.493926','{\"FailedAt\":\"2026-08-19T05:36:07.2510520Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in /Users/salonishivajipawale/Documents/TFLAssessment/Solution/Backend/dotnet/webapi/Services/Implementations/EmailService.cs:line 45\\n   at System.Reflection.MethodBaseInvoker.InterpretedInvoke_Method(Object obj, IntPtr* args)\\n   at System.Reflection.MethodBaseInvoker.InvokeDirectByRefWithFewArgs(Object obj, Span`1 copyOfArgs, BindingFlags invokeAttr)\\n\",\"ServerId\":\"salonis-macbook-air:23569:158c2418-3d1d-46a4-bc0e-00b30c9a8ec9\"}'),(28,1,'Scheduled','Retry attempt 7 of 10: Failed to Send email','2026-08-19 05:36:07.610171','{\"EnqueueAt\":\"2026-08-19T05:59:29.4415420Z\",\"ScheduledAt\":\"2026-08-19T05:36:07.4415950Z\"}'),(29,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-19 06:00:35.057181','{\"EnqueuedAt\":\"2026-08-19T06:00:34.9359580Z\",\"Queue\":\"default\"}'),(30,1,'Processing',NULL,'2026-08-19 06:00:49.494152','{\"StartedAt\":\"2026-08-19T06:00:49.4243390Z\",\"ServerId\":\"salonis-macbook-air:29483:2c51f051-8883-4b68-b7d7-bcc32300fe8b\",\"WorkerId\":\"4f6a8cb1-c20f-43cc-b45b-7bade91276af\"}'),(31,1,'Failed','An exception occurred during performance of the job.','2026-08-19 06:00:49.765828','{\"FailedAt\":\"2026-08-19T06:00:49.6691400Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in /Users/salonishivajipawale/Documents/TFLAssessment/Solution/Backend/dotnet/webapi/Services/Implementations/EmailService.cs:line 45\\n   at System.RuntimeMethodHandle.InvokeMethod(ObjectHandleOnStack target, Void** arguments, ObjectHandleOnStack sig, BOOL isConstructor, ObjectHandleOnStack result)\\n   at System.RuntimeMethodHandle.InvokeMethod(ObjectHandleOnStack target, Void** arguments, ObjectHandleOnStack sig, BOOL isConstructor, ObjectHandleOnStack result)\\n   at System.Reflection.MethodBaseInvoker.InterpretedInvoke_Method(Object obj, IntPtr* args)\\n   at System.Reflection.MethodBaseInvoker.InvokeDirectByRefWithFewArgs(Object obj, Span`1 copyOfArgs, BindingFlags invokeAttr)\\n\",\"ServerId\":\"salonis-macbook-air:29483:2c51f051-8883-4b68-b7d7-bcc32300fe8b\"}'),(32,1,'Scheduled','Retry attempt 8 of 10: Failed to Send email','2026-08-19 06:00:49.788874','{\"EnqueueAt\":\"2026-08-19T06:43:21.7503990Z\",\"ScheduledAt\":\"2026-08-19T06:00:49.7504210Z\"}'),(33,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-19 06:43:26.985528','{\"EnqueuedAt\":\"2026-08-19T06:43:26.9273870Z\",\"Queue\":\"default\"}'),(34,1,'Processing',NULL,'2026-08-19 06:43:27.330880','{\"StartedAt\":\"2026-08-19T06:43:27.2784170Z\",\"ServerId\":\"salonis-macbook-air:29483:2c51f051-8883-4b68-b7d7-bcc32300fe8b\",\"WorkerId\":\"849b8f4d-8b83-49a4-9f32-24d59e55ff78\"}'),(35,1,'Failed','An exception occurred during performance of the job.','2026-08-19 06:43:27.463047','{\"FailedAt\":\"2026-08-19T06:43:27.3988010Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in /Users/salonishivajipawale/Documents/TFLAssessment/Solution/Backend/dotnet/webapi/Services/Implementations/EmailService.cs:line 45\\n   at InvokeStub_IEmailService.SendEmail(Object, Span`1)\\n   at System.Reflection.MethodBaseInvoker.InvokeWithFewArgs(Object obj, BindingFlags invokeAttr, Binder binder, Object[] parameters, CultureInfo culture)\\n\",\"ServerId\":\"salonis-macbook-air:29483:2c51f051-8883-4b68-b7d7-bcc32300fe8b\"}'),(36,1,'Scheduled','Retry attempt 9 of 10: Failed to Send email','2026-08-19 06:43:27.476724','{\"EnqueueAt\":\"2026-08-19T07:54:58.4523020Z\",\"ScheduledAt\":\"2026-08-19T06:43:27.4523030Z\"}'),(37,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-19 07:55:52.489833','{\"EnqueuedAt\":\"2026-08-19T07:55:52.1483072Z\",\"Queue\":\"default\"}'),(38,1,'Processing',NULL,'2026-08-19 07:55:50.396430','{\"StartedAt\":\"2026-08-19T07:55:50.0313639Z\",\"ServerId\":\"sahil:15844:571b986b-e12b-4da9-ba11-f4c2e47e726a\",\"WorkerId\":\"5735870e-2572-4fef-b858-77016d42261e\"}'),(39,1,'Failed','An exception occurred during performance of the job.','2026-08-19 07:55:51.597071','{\"FailedAt\":\"2026-08-19T07:55:51.3893319Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in D:\\\\TAP\\\\TAP REPOS\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at System.Reflection.MethodBaseInvoker.InterpretedInvoke_Method(Object obj, IntPtr* args)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeDirectByRefWithFewArgs(Object obj, Span`1 copyOfArgs, BindingFlags invokeAttr)\\r\\n\",\"ServerId\":\"sahil:15844:571b986b-e12b-4da9-ba11-f4c2e47e726a\"}'),(40,1,'Scheduled','Retry attempt 10 of 10: Failed to Send email','2026-08-19 07:55:51.620357','{\"EnqueueAt\":\"2026-08-19T09:49:27.5041015Z\",\"ScheduledAt\":\"2026-08-19T07:55:51.5042238Z\"}'),(41,1,'Enqueued','Triggered by DelayedJobScheduler','2026-08-19 09:48:49.914464','{\"EnqueuedAt\":\"2026-08-19T09:48:49.7456840Z\",\"Queue\":\"default\"}'),(42,1,'Processing',NULL,'2026-08-19 09:48:51.472468','{\"StartedAt\":\"2026-08-19T09:48:51.2478750Z\",\"ServerId\":\"tanvi:3688:3bd7ffcb-b5e1-431d-87b7-dd362e2a13df\",\"WorkerId\":\"971aa993-7c72-4eea-b6e1-4737c5191475\"}'),(43,1,'Failed','An exception occurred during performance of the job.','2026-08-19 09:48:52.512985','{\"FailedAt\":\"2026-08-19T09:48:52.3797310Z\",\"ExceptionType\":\"System.ArgumentException\",\"ExceptionMessage\":\"Failed to Send email\",\"ExceptionDetails\":\"System.ArgumentException: Failed to Send email\\r\\n   at backend.Services.EmailService.SendEmail(String toEmail, String passphrase) in D:\\\\TAP_project\\\\TFLAssessment\\\\Solution\\\\Backend\\\\dotnet\\\\webapi\\\\Services\\\\Implementations\\\\EmailService.cs:line 45\\r\\n   at System.RuntimeMethodHandle.InvokeMethod(ObjectHandleOnStack target, Void** arguments, ObjectHandleOnStack sig, BOOL isConstructor, ObjectHandleOnStack result)\\r\\n   at System.Reflection.MethodBaseInvoker.InvokeDirectByRefWithFewArgs(Object obj, Span`1 copyOfArgs, BindingFlags invokeAttr)\\r\\n\",\"ServerId\":\"tanvi:3688:3bd7ffcb-b5e1-431d-87b7-dd362e2a13df\"}');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-21 11:30:57
