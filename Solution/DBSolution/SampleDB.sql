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
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which namespace is used ASP.NET MVC for JSON serialization?','System.Text.Json ','JsonFormatter.NET','GetJson.NET','None of the above','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following statement is TRUE?','Action method can be static method in a controller class. ','Action method can be private method in a controller class.','Action method can be protected method in a controller class.','Action method must be public method in a controller class.','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Visual Studio .NET tool is used to build WCF Service Application project. The project contains web.config file. Which is the root element in configuration file for WCF Service declaration?','System.Service ','System.ServiceModel','Service.Contract','None','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following is used to check the validity of the model in ASP.NET Web API?','Mode.Valid ','Model.IsValid','ModelState.IsValid','ModelState.Valid','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which component is essential for collecting data using Connected Data Access Mode?','DataSet ','DataReader','DataRow','DataAdapter','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which configuration file is used to change configuration setting that will affect only the current Web application?','web.xml ','appsettings.json','Machine.config','web.config','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Customer is demanding to buid web solution using decoupled , reusable , stateless Application logic. Which type of attribute would help to define reusable, corss platfrom, stateless application logic.','Controller ','APIController','Service','WebAPI','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which is not the data object used for data transfer in ASP.NET MVC?','ViewBag ','ViewData','TempData','MetaData','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'.Which of these is an attribute that you can apply to a controller action or an entire controller that modifies the way in which the action is executed?','Action filter ','Result filter','Exception filter','Authorization filter','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which statement is correct about Response.Output.Write()?','HttpContext.Response.Output.Write() allows you to buffer output ','HttpContext.Response.Output.Write() allows you to write formatted output','HttpContext.Response.Output.Write() allows you to flush output','HttpContext.Response.Output.Write() allows you to stream output','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following tool is used to manage the GAC in .NET Framework?','RegSvr.exe ','GacUtil.exe','GacSvr32.exe','GacMgr.exe','b','8');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which method of DBContext class reflects changes to database for CRUD Operation in .net while implementing Entity Framework?','Fill ','Update','SaveChanges','Commit','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which File extension is used for defining views in ASP.NET Core MVC?','..html ','..cs','..cshtml','None of the above','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following is not a member of ADO.NET Command object?','ExecuteScalar() ','ExecuteStream()','Open()','ExecuteReader()','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the best practice to isolate connection string while using asp.net core application?','appsettings.json ','web.config','package.json','web.xml','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'How do you get information from a form that is submitted using the "post" method?','HttpContext.Request.QueryString ','HttpContext.Request.Form','HttpContext.Response.Method','HttpContext.Response.Query','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which degault pages technology is used default for presentation logic implementation in ASP.NET MVC based Applications','html ','razor pages','web forms','None of the above','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which Request/Response data fromat supported by Web API by default?','JSON ','XML','BSON','All of the Above','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following types of routing supported in Web API?','Attribute Routing ','Convention-based Routing','All of the above','None of the above','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which interface must be implemented to provide querying facility in LINQ?','IEnumerator or IQueryable ','IEnumberable or Queryable','Enumberatble or Qurable','None of the above','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the default injection type of Unit Container used in ASP.NET Core','Constructor Injection ','Property Injection','Method Injection','All of the Above','a','8');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which is the following .net cli command used to create and build Single Page Applicaion?','dotnet new console -o TestApp','dotnet new webapp -o TestApp','dotnet new react -o TestApp','dotnet new ng -o TestApp','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following term define rules for .Net Languages?','Common Language Specification','Common Language Infrastructure ','Common Type System','Common Language Runtime','a','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which component of .net Architecture defines Events and Delegate?','CLR','CTS','CLS','DLR','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the Assembly scope of an .net type defined in Code ?',' public ','protected','internal','private','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which is the incorrect syntax of array in C# ?',' int [ , ]  mtrx = new int [2, 3]; ','int [ , ] mtrx = new int [2, 3] { {10, 20, 30}, {40, 50, 60} }','int [ ]  [ ]  mtrxj = new  int [2] [];','int [ ]  [ ]  mtrxj = new  int [2] [3];','d','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which access specifier will you use to make base class members accessible in the derived class and not accessible for the rest of the program?',' public ',' private',' protected ','static','c','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is Nullable type?',' It allows assignment of null to reference type. ',' It allows assignment of null to value type. ','It allows assignment of null to static class. ','None of the above. ','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which type of inheritance is not supported in C# Programming?',' Multiple Interface Inheritance ','Mulitple Implementation Inheritance ','Multiple Level Inheritance.','Single base class Inheritance ','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the type of structure (struct) in C# Programming Language?',' Reference type','Value type ','Class type','String type ','b','8');
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Missing Explicit Typecasting in code leads to following type of error.',' Runtime Error',' Linking Error',' Compile Time Error','Cyclic Dependency ','c','8');



INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which namespace provide a specialized form of reflection that enables you to build types at runtime?',' System.Reflection',' System.Type',' System.Reflection.Emit','System.RTTI','c','8');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which file extention define .net external dependencies needed for buliding .net core application?',' sln',' csproj','xml','appsettings.json','b','8');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following statement is correct MySQL database connection string ?','Server=localhost;Port=3306;Database=mydatabase;User=myuser;Password=mypassword;',' Server=localhost;Port=3308;Database=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Initial Catalog=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Database=mydatabase;User=myuser;PWD=mypassword;','a','8');

 
INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following class is used to send HTTP requires in .NET?
',' MessageClient ',' HttpWebRequest','HttpClient','WebClient','c','8');
 

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'What is the name of Default Application Pool in IIS?',' Assmblies are loaded into an application domain before executing the code it contains','  Application domain consist of domain specific logic of .net application.','Web application consist of pool of Application domain. ','Application domain maintains Thread pool for concurrency.','a','8');


INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which of the following object is used along with application object in order to ensure that only one process accesses a variable at a time?',' Synchronize',' Synchronize()','ThreadLock','Lock()','a','8');

INSERT INTO questions(skillid, question, a, b, c, d, answerkey, evacriid) VALUES(7,'Which Class is used to make a thread instance explicitly?',' Thread',' ThreadStart','ThreadPool','Runnalble','a','8');

INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:30:00",1,'2023-12-05','2024-02-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:40:00",1,'2023-11-05','2024-01-05','2024-02-07');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (1,"00:20:00",1,'2023-09-05','2024-01-05','2024-02-08');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (2,"00:30:00",2,'2023-09-21','2023-12-05','2024-01-05');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (3,"01:00:00",1,'2023-11-05','2023-12-21','2024-01-24');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (4,"01:30:00",2,'2023-09-05','2023-10-10','2024-01-18');

INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (7,"00:30:00",7,'2024-01-01','2024-01-01','2024-01-10');
INSERT INTO tests(skillid,duration,subexid,createdon,modifiedon,sheduledon) VALUES (7,"00:30:00",7,'2024-01-01','2024-01-01','2024-01-10');




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

INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(7,8);
INSERT INTO testasscriteria(testid, evaluationcriteriaid)VALUES(8,8);




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

INSERT INTO testquestions(testid, questionid)VALUES(7,11);
INSERT INTO testquestions(testid, questionid)VALUES(7,12);
INSERT INTO testquestions(testid, questionid)VALUES(7,13);
INSERT INTO testquestions(testid, questionid)VALUES(7,14);
INSERT INTO testquestions(testid, questionid)VALUES(7,15);
INSERT INTO testquestions(testid, questionid)VALUES(7,16);
INSERT INTO testquestions(testid, questionid)VALUES(7,17);
INSERT INTO testquestions(testid, questionid)VALUES(7,18);
INSERT INTO testquestions(testid, questionid)VALUES(7,19);
INSERT INTO testquestions(testid, questionid)VALUES(7,20);

INSERT INTO testquestions(testid, questionid)VALUES(8,21);
INSERT INTO testquestions(testid, questionid)VALUES(8,22);
INSERT INTO testquestions(testid, questionid)VALUES(8,23);
INSERT INTO testquestions(testid, questionid)VALUES(8,24);
INSERT INTO testquestions(testid, questionid)VALUES(8,25);
INSERT INTO testquestions(testid, questionid)VALUES(8,26);
INSERT INTO testquestions(testid, questionid)VALUES(8,27);
INSERT INTO testquestions(testid, questionid)VALUES(8,28);
INSERT INTO testquestions(testid, questionid)VALUES(8,29);
INSERT INTO testquestions(testid, questionid)VALUES(8,30);




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

INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,11,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,12,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,13,'d');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,14,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,15,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,16,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,17,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,18,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,19,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(6,20,'c');

INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,11,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,12,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,13,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,14,'a');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,15,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,16,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,17,'b');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,18,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,19,'c');
INSERT INTO candidateanswers(employeeid, testquestionid,answerkey)VALUES(7,20,'c');



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












