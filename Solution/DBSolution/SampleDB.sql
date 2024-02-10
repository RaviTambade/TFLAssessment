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

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the role of HTML helper in ASP.NET MVC?','Generates html elements ','Generates html view','Generates html help file','Generates model data','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which ASP.NET MVC filter will be executed at last during request processing in ASP.NET MVC Pipeline?','Exception filters ','Action filters','Authorization filters','Response filters','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which server , we can not deploy asp.net core Application?','Kestral ','IIS','Tomcat','MySql','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'ECommerce Application is built using ASP.NET object Model. Which ASP.NET object would be used to maintain Shopping Cart across number of requests being received from users?','Application object ','Session object','Response object','Server object','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which namespace is used ASP.NET MVC for JSON serialization?','System.Text.Json ',JsonFormatter.NET','GetJson.NET','None of the above','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following statement is TRUE?','Action method can be static method in a controller class. ',Action method can be private method in a controller class.','Action method can be protected method in a controller class.','Action method must be public method in a controller class.','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Visual Studio .NET tool is used to build WCF Service Application project. The project contains web.config file. Which is the root element in configuration file for WCF Service declaration?','System.Service ',System.ServiceModel','Service.Contract','None','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following is used to check the validity of the model in ASP.NET Web API?','Mode.Valid ',Model.IsValid','ModelState.IsValid','ModelState.Valid','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which component is essential for collecting data using Connected Data Access Mode?','DataSet ',DataReader','DataRow','DataAdapter','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which configuration file is used to change configuration setting that will affect only the current Web application?','web.xml ',appsettings.json','Machine.config','web.config','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Customer is demanding to buid web solution using decoupled , reusable , stateless Application logic. Which type of attribute would help to define reusable, corss platfrom, stateless application logic.','Controller ',APIController','Service','WebAPI','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which is not the data object used for data transfer in ASP.NET MVC?','ViewBag ',ViewData','TempData','MetaData','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'.Which of these is an attribute that you can apply to a controller action or an entire controller that modifies the way in which the action is executed?','Action filter ',Result filter','Exception filter','Authorization filter','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which statement is correct about Response.Output.Write()?','HttpContext.Response.Output.Write() allows you to buffer output ',HttpContext.Response.Output.Write() allows you to write formatted output','HttpContext.Response.Output.Write() allows you to flush output',HttpContext.Response.Output.Write() allows you to stream output','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following tool is used to manage the GAC in .NET Framework?','RegSvr.exe ','GacUtil.exe','GacSvr32.exe','GacMgr.exe','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'How could we add data into session in asp.net core?','HttpContext.Session.SetString("MyKey", "MyValue"); 'HttpContext.Session["MyKey"]= "MyValue";','HttpContext.Request.Session["MyKey"]="MyValue";','HttpContext.Response.Session["MyKey"]="MyValue";','b','8');




INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:30:00",1,'2023-12-05','2024-02-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:40:00",1,'2023-11-05','2024-01-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:20:00",1,'2023-09-05','2024-01-05','2024-02-08');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (2,"00:30:00",2,'2023-09-21','2023-12-05','2024-01-05');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (3,"01:00:00",1,'2023-11-05','2023-12-21','2024-01-24');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (4,"01:30:00",2,'2023-09-05','2023-10-10','2024-01-18');




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












