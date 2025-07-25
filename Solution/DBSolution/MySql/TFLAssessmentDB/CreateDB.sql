-- Active: 1712217931410@@127.0.0.1@3306@assessmentdb

create database assessmentdb;
use assessmentdb;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    aadharid VARCHAR(30) NOT NULL UNIQUE,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(40),
    contactnumber VARCHAR(40),
    password VARCHAR(255),  -- Store hashed password
    createdon DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedon DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            name varchar(20),
            lob varchar(20)
);

CREATE TABLE userroles(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userid INT NOT NULL,
            roleid INT NOT NULL,
            CONSTRAINT uc_userroles UNIQUE (userid, roleid),
            CONSTRAINT fk_userroles_roles FOREIGN KEY(roleid) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
            CONSTRAINT fk_userroles_users FOREIGN KEY(userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE employees(
	id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	contact VARCHAR(10) NOT NULL
);

create table employeeperformance(
	id INT PRIMARY KEY AUTO_INCREMENT,
	employeeid INT,
	test VARCHAR(20),
	communication VARCHAR(20),
	congition VARCHAR(20),
	interview VARCHAR(20),
	CONSTRAINT fk_emp_performance FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE subjects(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20)
);

CREATE TABLE subjectmatterexperts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	employeeid INT,
	subjectid INT,
	certificationdate DATE,
	CONSTRAINT fk_sme_employees_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_sme_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE evaluationcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20),
	subjectid INT,
	CONSTRAINT fk_eval_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table questionbank(
	id INT PRIMARY KEY AUTO_INCREMENT,
	subjectid INT,
	title VARCHAR(200),
	a VARCHAR(100),
	b VARCHAR(100),
	c VARCHAR(100),
	d VARCHAR(100),
	answerkey CHAR,
	evaluationcriteriaid INT,
	CONSTRAINT fk_qbank_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_qbank_eval_evalid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table tests (
	id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
	subjectid INT,
	duration TIME,
	smeid INT ,
	creationdate DATETIME,
	modificationdate DATETIME,
	scheduleddate DATETIME,
    passinglevel INT,
	status ENUM("created","scheduled", "cancelled","conducted")  DEFAULT "created",
	CONSTRAINT fk_tests_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_tests_sme_smeid FOREIGN KEY(smeid) REFERENCES subjectmatterexperts(id) ON UPDATE CASCADE ON DELETE CASCADE
);



create table testassessmentcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	evaluationcriteriaid INT ,
	CONSTRAINT fk_as_tests_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_as_evalcriteria_evalcaritid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table testquestions(
	id INT  PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	questionbankid INT,
    CONSTRAINT unique_tests_testquestions UNIQUE KEY(testid,questionbankid), 
	CONSTRAINT fk_tests_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_testqt_qbank_questionbankid FOREIGN KEY(questionbankid) REFERENCES questionbank(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table candidateanswers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	candidateid INT,
	testquestionid INT,
 	answerkey CHAR,
	CONSTRAINT fk_emp_candidateid FOREIGN KEY(candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_tstqt_testquestionid FOREIGN KEY(testquestionid) REFERENCES testquestions(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table candidatetestresults(
	id INT PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	score INT,
	teststarttime DATETIME,
	testendtime DATETIME,
	candidateid INT,
	CONSTRAINT fk_employees_candid FOREIGN KEY (candidateId) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_test_testid FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE
);


Create table interviews(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewdate DATE,
    interviewtime VARCHAR(20),
	smeid INT,
	candidateid INT,
	CONSTRAINT fk_sme_smeid FOREIGN KEY(smeid) REFERENCES subjectmatterexperts(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_emp_candtid FOREIGN KEY(candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

Create table interviewcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewid INT,
	evaluationcriteriaid INT,
	CONSTRAINT fk_interviews_interviewid FOREIGN KEY(interviewid) REFERENCES interviews(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_evalriterias_evalcriteaid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);

Create table interviewresults(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewcriteriaid INT,
	ratings INT,
	comments VARCHAR(200),
	CONSTRAINT fk_intresults_intcrite_intcriteid FOREIGN KEY(interviewcriteriaid) REFERENCES interviewcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE testschedules(
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidateid INT NOT NULL,
    testid INT NOT NULL,
    scheduledstart DATETIME NOT NULL,
    scheduledend DATETIME NOT NULL,
    status ENUM('Scheduled', 'Started', 'Completed', 'Rescheduled', 'Cancelled') NOT NULL,
    rescheduledon DATETIME,
    remarks VARCHAR(255),
    CONSTRAINT fk_testschedules_candidate FOREIGN KEY (candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_testschedules_test FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE
);

