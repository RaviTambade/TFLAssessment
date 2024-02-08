insert into employee(fname, lname, email, contactno)values("ram","tambe","rTambe@gmail.com","8547963254");
insert into employee(fname, lname, email, contactno)values("Vaibhav","Sathe","psathe@gmail.com","9658745635");
insert into employee(fname, lname, email, contactno)values("Shreedhar","Kumar","pkumar@gmail.com","8654793254");
insert into employee(fname, lname, email, contactno)values("Prajakta","Powar","rTambe@gmail.com","8547963254");
insert into employee(fname, lname, email, contactno)values("Ganesh","ghodake","gghodake@gmail.com","9022923254");
insert into employee(fname, lname, email, contactno)values("Vaibhav","Walekar","psathe@gmail.com","7058745635");
insert into employee(fname, lname, email, contactno)values("Shree","pawer","spawar@gmail.com","8654653254");
insert into employee(fname, lname, email, contactno)values("Aniket","Zarekar","Zarekar@gmail.com","9764263254");



INSERT INTO technicalskills(title) VALUES('CORE JAVA');
INSERT INTO technicalskills(title) VALUES('ADV JAVA');
INSERT INTO technicalskills(title) VALUES('DOTNET');
INSERT INTO technicalskills(title) VALUES('MICRO SERVICES');
INSERT INTO technicalskills(title) VALUES('REACT');
INSERT INTO technicalskills(title) VALUES('ANGULAR');
INSERT INTO technicalskills(title) VALUES('C#');
INSERT INTO technicalskills(title) VALUES('JavaScriept');




INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(1,1,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(2,2,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,5,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(4,6,'2023-02-15');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,4,'2023-03-19');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(2,5,'2023-04-18');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(3,7,'2023-01-25');
INSERT INTO subjectexperties(employeeid,technicalskillid,certifiedon)VALUES(4,2,'2023-02-05');




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

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Number of primitive data types in Java are?','6','7','8','9','8','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','SmallTalk','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','
Andrea Ferro','Alan Kay','1');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','
Encapsulation','Exception','1');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(1,'Which of the following language supports polymorphism but not the classes?
','C++ programming language
','Java programming language','Ada programming language','
C# programming language','Ada programming language','1');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','All of the above','5');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','All of the above.','5');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','
Asset Oriented Protocol','Aspect Oriented Programming','5');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'Which of the following is the correct name of React.js?',' React','React.js', 'ReactJs','All of the above','All of the above','5');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','
None of the above.','Using setter method and constructor argument both.','5');




INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:30:00",1,'2023-12-05','2024-02-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:40:00",1,'2023-11-05','2024-01-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:20:00",1,'2023-09-05','2024-01-05','2024-02-08');















