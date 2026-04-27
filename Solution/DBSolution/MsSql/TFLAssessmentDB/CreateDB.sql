
DROP database assessmentdb;
create database assessmentdb;

use assessmentdb;

CREATE TABLE employees(
	id INT Identity(1,1) PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	contact VARCHAR(10) NOT NULL
);

create table employeeperformance(
	id INT PRIMARY KEY Identity(1,1),
	employeeid INT,
	test VARCHAR(20),
	communication VARCHAR(20),
	cognition VARCHAR(20),
	interview VARCHAR(20),
	CONSTRAINT fk_emp_performance FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE subjects(
	id INT PRIMARY KEY Identity(1,1),
	title VARCHAR(20)
);

CREATE TABLE subjectmatterexperts(
	id INT PRIMARY KEY Identity(1,1),
	employeeid INT,
	subjectid INT,
	certificationdate DATE,
	CONSTRAINT fk_sme_employees_employeeid FOREIGN KEY(employeeid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_sme_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE evaluationcriterias(
	id INT PRIMARY KEY Identity(1,1),
	title VARCHAR(20),
	subjectid INT,
	CONSTRAINT fk_eval_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

create table questionbank (
	id INT PRIMARY KEY Identity(1,1),
	subjectid INT,
	title VARCHAR(200),
	a VARCHAR(100),
	b VARCHAR(100),
	c VARCHAR(100),
	d VARCHAR(100),
	answerkey CHAR,
	evaluationcriteriaid INT,
	CONSTRAINT fk_qbank_subjects_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
	CONSTRAINT fk_qbank_eval_evalid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE tests (
    id INT PRIMARY KEY IDENTITY,
    subjectid INT,
    duration TIME,
    smeid INT,
    creationdate DATETIME,
    modificationdate DATETIME,
    scheduleddate DATETIME,
    passinglevel INT,
    status VARCHAR(20) CHECK (status IN ('created', 'scheduled', 'cancelled', 'conducted')) DEFAULT 'created'
);

select * from tests;


CREATE TABLE testassessmentcriterias (
    id INT PRIMARY KEY IDENTITY(1,1),
    testid INT,
    evaluationcriteriaid INT,
    CONSTRAINT fk_as_tests_testid FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_as_evalcriteria_evalcaritid FOREIGN KEY (evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE testquestions (
    id INT PRIMARY KEY IDENTITY(1,1),
    testid INT,
    questionbankid INT,
    CONSTRAINT unique_tests_testquestions UNIQUE (testid, questionbankid),
    CONSTRAINT fk_tests_testid FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_testqt_qbank_questionbankid FOREIGN KEY (questionbankid) REFERENCES questionbank(id) ON UPDATE CASCADE ON DELETE CASCADE
);



CREATE TABLE candidateanswers (
    id INT PRIMARY KEY IDENTITY(1,1),
    candidateid INT,
    testquestionid INT,
    answerkey CHAR,
    CONSTRAINT fk_emp_candidateid FOREIGN KEY (candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_tstqt_testquestionid FOREIGN KEY (testquestionid) REFERENCES testquestions(id) ON UPDATE CASCADE ON DELETE CASCADE
);



CREATE TABLE candidatetestresults (
    id INT PRIMARY KEY IDENTITY(1,1),
    testid INT,
    score INT,
    teststarttime DATETIME,
    testendtime DATETIME,
    candidateid INT,
    CONSTRAINT fk_employees_candid FOREIGN KEY (candidateid) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_test_testid FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE interviews (
    id INT PRIMARY KEY IDENTITY,
    interviewdate DATE,
    interviewtime VARCHAR(20),
    smeid INT,
    candidateid INT,
   CONSTRAINT fk_sme_smeid FOREIGN KEY(smeid) REFERENCES subjectmatterexperts(id) ,
    CONSTRAINT fk_emp_candtid FOREIGN KEY(candidateid) REFERENCES employees(id) 
);




CREATE TABLE interviewcriterias (
    id INT PRIMARY KEY IDENTITY(1,1),
    interviewid INT,
    evaluationcriteriaid INT,
    CONSTRAINT fk_interviews_interviewid FOREIGN KEY (interviewid) REFERENCES interviews(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_evalriterias_evalcriteaid FOREIGN KEY (evaluationcriteriaid) REFERENCES evaluationcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE interviewresults (
    id INT PRIMARY KEY IDENTITY(1,1),
    interviewcriteriaid INT,
    ratings INT,
    comments VARCHAR(200),
    CONSTRAINT fk_intresults_intcrite_intcriteid FOREIGN KEY (interviewcriteriaid) REFERENCES interviewcriterias(id) ON UPDATE CASCADE ON DELETE CASCADE
);