insert into employee(fname, lname, email, contactno)values("ram","tambe","rTambe@gmail.com","8547963254");
insert into employee(fname, lname, email, contactno)values("Vaibhav","Sathe","psathe@gmail.com","9658745635");
insert into employee(fname, lname, email, contactno)values("Shreedhar","Kumar","pkumar@gmail.com","8654793254");
insert into employee(fname, lname, email, contactno)values("Prajakta","Powar","rTambe@gmail.com","8547963254");
insert into employee(fname, lname, email, contactno)values("Ganesh","ghodake","gghodake@gmail.com","9022923254");
insert into employee(fname, lname, email, contactno)values("Vaibhav","Walekar","psathe@gmail.com","7058745635");
insert into employee(fname, lname, email, contactno)values("Shree","pawer","spawar@gmail.com","8654653254");
insert into employee(fname, lname, email, contactno)values("Aniket","Zarekar","Zarekar@gmail.com","9764263254");

select * from employee;


INSERT INTO technicalskills(title) VALUES('CORE JAVA');
INSERT INTO technicalskills(title) VALUES('ADV JAVA');
INSERT INTO technicalskills(title) VALUES('DOTNET');
INSERT INTO technicalskills(title) VALUES('MICRO SERVICES');
INSERT INTO technicalskills(title) VALUES('REACT');
INSERT INTO technicalskills(title) VALUES('ANGULAR');
INSERT INTO technicalskills(title) VALUES('C#');
INSERT INTO technicalskills(title) VALUES('JavaScriept');

select * from technicalskills;


INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(1,1,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(2,2,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,5,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(4,6,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,4,'2023-03-19');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(2,5,'2023-04-18');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,7,'2023-01-25');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(4,2,'2023-02-05');

select * from subjectexperties;

INSERT INTO evaluationcriterias(title,skillid) VALUES('OOPS',1);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Multithreading',1);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Loops',1);
INSERT INTO evaluationcriterias(title,skillid) VALUES('HyberNet',2);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Spring Boot',2);
INSERT INTO evaluationcriterias(title,skillid) VALUES('JSON',5);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Components',6);
INSERT INTO evaluationcriterias(title,skillid) VALUES('OOPS',7);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Multithreading',7);
INSERT INTO evaluationcriterias(title,skillid) VALUES('Loops',7);

select * from evaluationcriterias;

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Number of primitive data types in Java are?','6','7','8','9','c','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','a','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','Andrea Ferro','c','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','Encapsulation','a','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following language supports polymorphism but not the classes?','C++ programming language','Java programming language','Ada programming language','C# programming language','c','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','d','5');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','d','5');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','Asset Oriented Protocol','a','5');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'Which of the following is the correct name of React.js?',' React','React.js', 'ReactJs','All of the above','d','5');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','None of the above.','c','5');

select * from questions;


INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:30:00",1,'2023-12-05','2024-02-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:40:00",1,'2023-11-05','2024-01-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:20:00",1,'2023-09-05','2024-01-05','2024-02-08');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (2,"00:30:00",2,'2023-09-21','2023-12-05','2024-01-05');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (3,"01:00:00",1,'2023-11-05','2023-12-21','2024-01-24');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (4,"01:30:00",2,'2023-09-05','2023-10-10','2024-01-18');

select * from tests;


INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(1,4);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(1,2);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(2,2);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(2,4);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(1,3);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(5,4);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(2,3);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(1,5);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(3,1);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(4,5);

select * from testasscriteria;


INSERT INTO testquestions(testid, questionid)VALUES(1,4);
INSERT INTO testquestions(testid, questionid)VALUES(2,1);
INSERT INTO testquestions(testid, questionid)VALUES(3,2);
INSERT INTO testquestions(testid, questionid)VALUES(1,3);
INSERT INTO testquestions(testid, questionid)VALUES(1,2);
INSERT INTO testquestions(testid, questionid)VALUES(1,5);
INSERT INTO testquestions(testid, questionid)VALUES(2,4);
INSERT INTO testquestions(testid, questionid)VALUES(3,4);
INSERT INTO testquestions(testid, questionid)VALUES(3,3);
INSERT INTO testquestions(testid, questionid)VALUES(4,2);

select * from testquestions;


INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(1,4,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(2,4,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(1,1,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(2,1,'d');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(1,2,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(2,1,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(4,2,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(5,3,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(1,2,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(2,3,'c');

select * from candidateanswers;


INSERT INTO candidatetestresults(testid, marks)VALUES(2,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(1,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(3,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(4,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(5,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(6,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(1,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(2,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(3,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(4,1);
INSERT INTO candidatetestresults(testid, marks)VALUES(1,1);

select * from candidatetestresults;


INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-02-10',1,2);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-02-10',2,3);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-03-12',1,4);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-03-01',3,5);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-02-15',1,6);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-03-10',4,2);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-02-20',1,3);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-02-12',2,4);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-03-11',1,5);
INSERT INTO interviews(dateofinterview, subexid, employeeid)VALUES('2024-03-15',3,6);

select * from interviews;

INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(1,6);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(1,5);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(2,3);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(1,2);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(3,4);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(2,4);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(3,6);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(2,5);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(1,7);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(2,1);
INSERT INTO interviewcriterias(interviewid, evacriid)VALUES(1,8);

select * from interviewcriterias;


INSERT INTO interviewresults(techintacid, rating, comments)VALUES(1,8,"good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(2,6,"avarage");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(1,9,"very good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(2,7,"nice");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(3,9,"very good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(4,8,"good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(5,10,"very good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(6,7,"good");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(7,8,"nice");
INSERT INTO interviewresults(techintacid, rating, comments)VALUES(8,8,"good");

select * from interviewresults;










