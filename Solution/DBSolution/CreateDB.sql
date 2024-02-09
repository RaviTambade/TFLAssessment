create database assessmentdb;
use assessmentdb;

CREATE TABLE employee(
      id INT AUTO_INCREMENT PRIMARY KEY,
      fname VARCHAR(20) NOT NULL,
      lname VARCHAR(20) NOT NULL,
      email VARCHAR(50) NOT NULL,
      contactno VARCHAR(10) NOT NULL
);
select * from employee;

CREATE TABLE technicalskills(
  techskid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(20)
);
select * from technicalskills;

CREATE TABLE subjectexperties(
   subexid INT PRIMARY KEY AUTO_INCREMENT,
   employeeid INT,
   technicalskillid INT,
   certifiedon DATE,
   CONSTRAINT fk_employee_subjectexperties_employeeid FOREIGN KEY(employeeid) REFERENCES employee(id) ON UPDATE CASCADE ON DELETE CASCADE,
   CONSTRAINT fk_technicalskills_subjectexperties_technicalskillid FOREIGN KEY(technicalskillid) REFERENCES technicalskills(techskid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from subjectexperties;

CREATE TABLE evaluationcriterias(
   evacriid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(20),
   skillid INT,
   CONSTRAINT fk_technicalskills_evaluationcriterias_skillid FOREIGN KEY(skillid) REFERENCES technicalskills(techskid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from evaluationcriterias;

create table questions (
     qid INT PRIMARY KEY AUTO_INCREMENT,
     skillid INT,
     question VARCHAR(200),
     a VARCHAR(100),
	 b VARCHAR(100),
	 c VARCHAR(100),
	 d VARCHAR(100),
	 answerkey VARCHAR(100),
	 evacriid INT,
	 CONSTRAINT fk_technicalskills_qestions_skillid FOREIGN KEY(skillid) REFERENCES technicalskills(techskid) ON UPDATE CASCADE ON DELETE CASCADE,
     CONSTRAINT fk_evaluationcriterias_qestions_evacrid FOREIGN KEY(evacriid) REFERENCES evaluationcriterias(evacriid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from questions;

create table tests (
id INT PRIMARY KEY AUTO_INCREMENT,
skillid INT,
duration TIME,
subexid INT ,
createdon DATE,
modifiedon DATE,
sheduledon DATE,
CONSTRAINT fk_technicalskills_tests_skillid FOREIGN KEY(skillid) REFERENCES technicalskills(techskid) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_subjectexperties_tests_subexid FOREIGN KEY(subexid) REFERENCES subjectexperties(subexid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from tests;

create table testasscriteria(
id INT PRIMARY KEY AUTO_INCREMENT,
testid INT,
evaluationcriteriaid INT ,
CONSTRAINT fk_tests_testasscriteria_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_evaluationcriterias_testasscriteria_evaluationcriteriaid FOREIGN KEY(evaluationcriteriaid) REFERENCES evaluationcriterias(evacriid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from testasscriteria;

create table testquestions(
testquestionid INT  PRIMARY KEY AUTO_INCREMENT,
testid INT,
questionid INT,
CONSTRAINT fk_tests_testquestions_testid FOREIGN KEY(testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT fk_questions_testquestions_questionid FOREIGN KEY(questionid) REFERENCES questions(qid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from testquestions;

create table candidateanswers(
	questionsanswereid INT PRIMARY KEY AUTO_INCREMENT,
	employeeid INT,
	testquestionid INT,
 	answerkey VARCHAR(100),
	CONSTRAINT fk_employee_candidateanswers_employeeid FOREIGN KEY(employeeid) REFERENCES employee(id) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_testquestions_candidateanswers_testquestionsid FOREIGN KEY(testquestionid) REFERENCES testquestions (testquestionid) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from candidateanswers;

create table candidatetestresults(
	candidateresultid INT PRIMARY KEY AUTO_INCREMENT,
	testid INT,
	marks INT,
 	CONSTRAINT fk_test_candidatetestresults FOREIGN KEY (testid) REFERENCES tests(id) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from candidatetestresults;

Create table interviews(
	interviewid INT PRIMARY KEY AUTO_INCREMENT,
	dateofinterview DATE,
	subexid INT,
	employeeid INT,
	CONSTRAINT fk_subjectexperties_interviews_subexid FOREIGN KEY(subexid) REFERENCES subjectexperties(subexid) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_employee_interviews_employeeid FOREIGN KEY(employeeid) REFERENCES employee(id) ON UPDATE CASCADE ON DELETE CASCADE
);
select * from interviews;
 

Create table interviewcriterias(
	techintacid INT PRIMARY KEY AUTO_INCREMENT,
	interviewid INT,
	evacriid INT,
	CONSTRAINT fk_interviews_interviewcriterias_interviewid FOREIGN KEY(interviewid) REFERENCES interviews(interviewid) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_evaluationcriterias_interviewcriterias_evacriid FOREIGN KEY(evacriid) REFERENCES evaluationcriterias(evacriid) ON UPDATE CASCADE ON DELETE CASCADE
);
-- techintacid - techical interview assessment criteria Id

select * from interviewcriterias;
    
Create table interviewresults(
	resultid INT PRIMARY KEY AUTO_INCREMENT,
	techintacid INT,
	rating INT,
	comments VARCHAR(200),
	CONSTRAINT fk_interviewcriterias_interviewresults_techintacid FOREIGN KEY(techintacid) REFERENCES interviewcriterias(techintacid) ON UPDATE CASCADE ON DELETE CASCADE
	);
select * from interviewresults;    
