CREATE DATABASE IF NOT EXISTS assessmentdb;
USE assessmentdb;



DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  aadharid VARCHAR(30),
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(40),
  contactnumber VARCHAR(40),
  password VARCHAR(255),
  createdon DATETIME,
  modifiedon DATETIME,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS subjects;
CREATE TABLE subjects (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(20),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) DEFAULT NULL,
  lob VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id)
);


DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT DEFAULT NULL,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  contact VARCHAR(10) NOT NULL,
  PRIMARY KEY (id),
  KEY fk_employee_user (userId),
  CONSTRAINT fk_employee_user FOREIGN KEY (userId) 
    REFERENCES users (id)
);

DROP TABLE IF EXISTS concepts;
CREATE TABLE concepts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(20) DEFAULT NULL,
  subjectid INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_concept_subjectid (subjectid),
  CONSTRAINT fk_concept_subjectid FOREIGN KEY (subjectid) 
    REFERENCES subjects (id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS userroles;
CREATE TABLE userroles (
  id INT NOT NULL AUTO_INCREMENT,
  userid INT,
  roleid INT,
  PRIMARY KEY (id),
  KEY (userid),
  KEY (roleid),
  CONSTRAINT fk_userroles_user FOREIGN KEY (userid) REFERENCES users(id),
  CONSTRAINT fk_userroles_role FOREIGN KEY (roleid) REFERENCES roles(id)
);


DROP TABLE IF EXISTS subjectmatterexperts;
CREATE TABLE subjectmatterexperts (
  id INT NOT NULL AUTO_INCREMENT,
  employeeid INT,
  subjectid INT,
  certificationdate DATE,
  PRIMARY KEY (id),
  KEY (employeeid),
  KEY (subjectid),
  CONSTRAINT fk_sme_emp FOREIGN KEY (employeeid) REFERENCES employees(id),
  CONSTRAINT fk_sme_sub FOREIGN KEY (subjectid) REFERENCES subjects(id)
);

DROP TABLE IF EXISTS interviews;
CREATE TABLE interviews (
  id INT NOT NULL AUTO_INCREMENT,
  interviewdate DATE DEFAULT NULL,
  interviewtime VARCHAR(20) DEFAULT NULL,
  smeid INT DEFAULT NULL,
  candidateid INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_sme_smeid (smeid),
  KEY fk_emp_candtid (candidateid),
  CONSTRAINT fk_emp_candtid FOREIGN KEY (candidateid)
    REFERENCES employees (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_sme_smeid FOREIGN KEY (smeid)
    REFERENCES subjectmatterexperts (id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS interviewcriterias;
CREATE TABLE interviewcriterias (
  id INT NOT NULL AUTO_INCREMENT,
  interviewid INT DEFAULT NULL,
  conceptid INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_interviews_interviewid (interviewid),
  KEY fk_conceptid (conceptid),
  CONSTRAINT fk_conceptid FOREIGN KEY (conceptid) 
    REFERENCES concepts (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_interviews_interviewid FOREIGN KEY (interviewid) 
    REFERENCES interviews (id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS interviewresults;
CREATE TABLE interviewresults (
  id INT NOT NULL AUTO_INCREMENT,
  interviewcriteriaid INT DEFAULT NULL,
  ratings INT DEFAULT NULL,
  comments VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_intresults_intcrite_intcriteid (interviewcriteriaid),
  CONSTRAINT fk_intresults_intcrite_intcriteid FOREIGN KEY (interviewcriteriaid) 
    REFERENCES interviewcriterias (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-----------------------------------------------------------
-- 4. TEST RELATED TABLES (tests depends on no FK)
-----------------------------------------------------------

DROP TABLE IF EXISTS tests;
CREATE TABLE tests (
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(255),
  subjectid INT,
  duration TIME,
  smeid INT,
  creationdate DATETIME,
  modificationdate DATETIME,
  scheduleddate DATETIME,
  passinglevel INT,
  status ENUM('created','scheduled','cancelled','conducted') DEFAULT 'created',
  PRIMARY KEY (id),
  KEY (subjectid),
  KEY (smeid),
  CONSTRAINT fk_tests_subject FOREIGN KEY (subjectid) REFERENCES subjects(id),
  CONSTRAINT fk_tests_sme FOREIGN KEY (smeid) REFERENCES subjectmatterexperts(id)
);

DROP TABLE IF EXISTS questionbank;
CREATE TABLE questionbank (
  id INT NOT NULL AUTO_INCREMENT,
  subjectid INT DEFAULT NULL,
  title VARCHAR(200) DEFAULT NULL,
  a VARCHAR(100) DEFAULT NULL,
  b VARCHAR(100) DEFAULT NULL,
  c VARCHAR(100) DEFAULT NULL,
  d VARCHAR(100) DEFAULT NULL,
  answerkey CHAR(1) DEFAULT NULL,
  conceptid INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_qbank_subjects_subjectid (subjectid),
  KEY fk_qbank_conceptid (conceptid),
  CONSTRAINT fk_qbank_conceptid FOREIGN KEY (conceptid)
    REFERENCES concepts(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_qbank_subjects_subjectid FOREIGN KEY (subjectid)
    REFERENCES subjects(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS testquestions;
CREATE TABLE testquestions (
  id INT NOT NULL AUTO_INCREMENT,
  testid INT,
  questionbankid INT,
  PRIMARY KEY (id),
  KEY (testid),
  KEY (questionbankid),
  CONSTRAINT fk_testq_test FOREIGN KEY (testid) REFERENCES tests(id),
  CONSTRAINT fk_testq_qbank FOREIGN KEY (questionbankid) REFERENCES questionbank(id)
);

DROP TABLE IF EXISTS testassessmentcriterias;
CREATE TABLE testassessmentcriterias (
  id INT NOT NULL AUTO_INCREMENT,
  testid INT,
  conceptid INT,
  PRIMARY KEY (id),
  KEY (testid),
  KEY (conceptid),
  CONSTRAINT fk_tac_test FOREIGN KEY (testid) REFERENCES tests(id),
  CONSTRAINT fk_tac_concept FOREIGN KEY (conceptid) REFERENCES concepts(id)
);

DROP TABLE IF EXISTS testschedules;
CREATE TABLE testschedules (
  id INT NOT NULL AUTO_INCREMENT,
  candidateid INT,
  testid INT,
  scheduledstart DATETIME,
  scheduledend DATETIME,
  status VARCHAR(20),
  rescheduledon DATETIME,
  remarks VARCHAR(255),
  PRIMARY KEY (id),
  KEY (candidateid),
  KEY (testid),
  CONSTRAINT fk_testsched_emp FOREIGN KEY (candidateid) REFERENCES employees(id),
  CONSTRAINT fk_testsched_test FOREIGN KEY (testid) REFERENCES tests(id)
);

DROP TABLE IF EXISTS candidateanswers;
CREATE TABLE candidateanswers (
  id INT NOT NULL AUTO_INCREMENT,
  candidateid INT DEFAULT NULL,
  testquestionid INT DEFAULT NULL,
  answerkey CHAR(1) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_emp_candidateid (candidateid),
  KEY fk_tstqt_testquestionid (testquestionid),
  CONSTRAINT fk_emp_candidateid FOREIGN KEY (candidateid) REFERENCES employees (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_tstqt_testquestionid FOREIGN KEY (testquestionid) REFERENCES testquestions (id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS candidatetestresults;
CREATE TABLE candidatetestresults (
  id INT NOT NULL AUTO_INCREMENT,
  testid INT DEFAULT NULL,
  score INT DEFAULT NULL,
  teststarttime DATETIME DEFAULT NULL,
  testendtime DATETIME DEFAULT NULL,
  candidateid INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_employees_candid (candidateid),
  KEY fk_test_testid (testid),
  CONSTRAINT fk_employees_candid FOREIGN KEY (candidateid) REFERENCES employees (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_test_testid FOREIGN KEY (testid) REFERENCES tests (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-----------------------------------------------------------
-- 5. REMAINING TABLES
-----------------------------------------------------------

DROP TABLE IF EXISTS employeeperformance;
CREATE TABLE employeeperformance (
  id INT NOT NULL AUTO_INCREMENT,
  employeeid INT DEFAULT NULL,
  test VARCHAR(20) DEFAULT NULL,
  communication VARCHAR(20) DEFAULT NULL,
  congition VARCHAR(20) DEFAULT NULL,
  interview VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY fk_emp_performance (employeeid),
  CONSTRAINT fk_emp_performance FOREIGN KEY (employeeid) REFERENCES employees (id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS user_session;
CREATE TABLE user_session (
  id BIGINT NOT NULL AUTO_INCREMENT,
  user_id INT,
  login_time DATETIME,
  logout_time DATETIME,
  session_status VARCHAR(20) DEFAULT 'ACTIVE',
  PRIMARY KEY (id),
  KEY (user_id),
  CONSTRAINT fk_session_user FOREIGN KEY (user_id) REFERENCES users(id)
);


DROP TABLE IF EXISTS Assessment;
CREATE TABLE Assessment (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  test_id INT,
  candidate_id INT,
  status ENUM('created','scheduled','cancelled','conducted') DEFAULT 'created',
  createdby INT,
  createdon DATETIME,
  modifiedby INT,
  modifiedon DATETIME,
  scheduledstart DATETIME,
  scheduledend DATETIME,
  deletedby INT,
  deleted  ENUM('yes','no')  DEFAULT 'no',
   FOREIGN KEY (test_id) REFERENCES tests(id),
   FOREIGN KEY (candidate_id) REFERENCES employees(id)
);
