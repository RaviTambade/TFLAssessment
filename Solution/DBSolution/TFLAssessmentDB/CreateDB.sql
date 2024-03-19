-- Assessment Database for Online Examination Transflower

-- Active: 1707123530557@@127.0.0.1@3306@assessmentdb
DROP database assessmentdb;
create database assessmentdb;

use assessmentdb;
CREATE TABLE employees(
	id INT AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	contact VARCHAR(10) NOT NULL
);

CREATE TABLE subjects(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20)
);

CREATE TABLE subjectmatterexperts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	employeeid INT,
	subjectid INT,
	certidicationdate DATE,
	CONSTRAINT fk_subjectmatterexperts_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_subjectmatterexperts_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE evaluationcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(20),
	subjectid INT,
	CONSTRAINT fk_evaluationcriterias_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table questionbank (
	id INT PRIMARY KEY AUTO_INCREMENT,
	subjectid INT,
	title VARCHAR(200),
	a VARCHAR(100),
	b VARCHAR(100),
	c VARCHAR(100),
	d VARCHAR(100),
	answerkey CHAR,
	evaluationcriteriaid INT,
	CONSTRAINT fk_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_evaluationcriterias_evaluationcriteriaid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table tests (
	id INT PRIMARY KEY AUTO_INCREMENT,
	subjectid INT,
	duration TIME,
	smeid INT ,
	creationdate DATETIME,
	modificationdate DATETIME,
	scheduleddate DATETIME,
	status ENUM("created","scheduled", "cancelled","conducted")  DEFAULT "created",
	CONSTRAINT fk_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_subjectmatterexperts_smeid FOREIGN KEY(smeid) REFERENCES subjectmatterexperts(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table testassessmentcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	evaluationcriteriaid INT ,
	CONSTRAINT fk_tests_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_evaluationcriteriaid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


create table testquestions(
	id INT  PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	questionbankid INT,
	CONSTRAINT fk_tests_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_questionbank_questionbankid FOREIGN KEY(questionbankid) REFERENCES questionbank(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table candidateanswers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	candidateid INT,
	testquestionid INT,
 	answerkey CHAR,
	CONSTRAINT fk_employees_candidateid FOREIGN KEY(candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_testquestions_testquestionid FOREIGN KEY(testquestionid) REFERENCES testquestions(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table candidatetestresults(
	id INT PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	score INT,
	teststarttime DATETIME,
	testendtime DATETIME,
	candidateid INT,
	CONSTRAINT fk_employees_candidateId FOREIGN KEY (candidateId) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_tests_testid FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE
);


Create table interviews(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewdate DATE,
	smeid INT,
	candidateid INT,
	CONSTRAINT fk_subjectmatterexperts_smeid FOREIGN KEY(smeid) REFERENCES subjectmatterexperts(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_employees_candidateid FOREIGN KEY(candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

Create table interviewcriterias(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewid INT,
	evaluationcriteriaid INT,
	CONSTRAINT fk_interviews_interviewid FOREIGN KEY(interviewid) REFERENCES interviews(interviewid) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_evaluationcriterias_evaluationcriteriaid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);

Create table interviewresults(
	id INT PRIMARY KEY AUTO_INCREMENT,
	interviewcriteriaid INT,
	ratings INT,
	comments VARCHAR(200),
	CONSTRAINT fk_interviewresults_interviewcriterias_interviewcriteriaid FOREIGN KEY(interviewcriteriaid) REFERENCES interviewcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);
