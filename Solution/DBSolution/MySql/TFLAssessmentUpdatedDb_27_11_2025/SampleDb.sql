INSERT INTO roles VALUES 
(1, 'admin', 'HR'),
(2, 'sme', 'Technical'),
(3, 'student', 'Assessment');

INSERT INTO subjects (id, title) VALUES
(1, 'COREJAVA'),
(2, 'ADVJAVA'),
(3, 'DOTNET'),
(4, 'MICROSERVICES'),
(5, 'REACT'),
(6, 'ANGULAR'),
(7, 'CSHARP'),
(8, 'JAVASCRIPT');



INSERT INTO users VALUES
(1,'10564789','ravi','tambade','ravi.tambade@example.com','9000000000','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(2,'123564789','kajal','ghule','kajal.ghule@example.com','9000000001','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(3,'963258741','Nirjala','Naik','nirjala.naik@example.com','9000000002','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(4,'987654321','sahil','kamble','sahil.kamble@example.com','9000000003','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(5,'789456123741','Sanika','Bhor','sanika.bhor@example.com','8446756339','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(6,'159753642789','Sumit','Bhor','sumit.bhor@example.com','8530086988','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(7,'258741369','nikita','bansode','nikita.bansode@example.com','9000000010','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(8,'258963147','pranita','mane','pranita.mane@example.com','9000000011','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(9,'456741963','rutuja','mokale','rutuja.mokale@example.com','9000000012','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(10,'123658749','pankaj','bhor','pankaj.bhor@example.com','9000000013','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(11,'321789456','sarthak','walake','sarthak.walake@example.com','9000000014','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(12,'789123654','naina','surve','naina.surve@example.com','9000000015','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(13,'456741935','nikhil','navale','nikhil.navale@example.com','9000000016','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(14,'789357124','sarthak','kadam','sarthak.kadam@example.com','9000000017','12345','2025-07-24 23:29:56','2025-07-24 23:29:56'),
(15,'78945','Rutuja','Kadam','rutuja.kadam@example.com','7894561231','1234','2025-11-16 23:15:36','2025-11-16 23:15:36'),
(16,'12345','Swarali','Lakade','swarali.lakade@example.com','147852369','1234','2025-11-16 23:33:32','2025-11-16 23:33:32'),
(17,'963258','shreya','bhor','shreya.bhor@example.com','1234567890','1234','2025-11-17 10:23:51','2025-11-17 10:23:51'),
(19,'36521','Sanika','Kulkarni','sanika.kulkarni@example.com','456123789','1234','2025-11-17 15:03:01','2025-11-17 15:03:01'),
(20,'5614','Sejal','Kulkarni','sejal.kulkarni@example.com','789123456','1234','2025-11-17 16:50:10','2025-11-17 16:50:10');



INSERT INTO employees VALUES
(1,1,'ravi','tambade','ravi.tambade@example.com','9000000000'),
(2,2,'kajal','ghule','kajal.ghule@example.com','9000000001'),
(3,3,'nirjala','naik','nirjala.naik@example.com','9000000002'),
(4,4,'sahil','kamble','sahil.kamble@example.com','9000000003'),
(5,5,'sanika','bhor','sanika.bhor@example.com','8446756339'),
(6,6,'sumit','bhor','sumit.bhor@example.com','9000000005'),
(7,7,'nikita','bansode','nikita.bansode@example.com','9000000006'),
(8,8,'pranita','mane','pranita.mane@example.com','9000000007'),
(9,9,'rutuja','mokale','rutuja.mokale@example.com','9000000008'),
(10,10,'pankaj','bhor','pankaj.bhor@example.com','9000000009'),
(11,11,'sarthak','walake','sarthak.walake@example.com','9000000010'),
(12,12,'naina','surve','naina.surve@example.com','9000000011'),
(13,13,'nikhil','navale','nikhil.navale@example.com','9000000012'),
(14,14,'sarthak','kadam','sarthak.kadam@example.com','9000000013'),
(16,15,'Rutuja','Kadam','rutuja.kadam@example.com','7894561231'),
(17,16,'Swarali','Lakade','swarali.lakade@example.com','147852369'),
(18,17,'shreya','bhor','shreya.bhor@example.com','1234567890'),
(19,19,'Sanika','Kulkarni','sanika.kulkarni@example.com','456123789'),
(20,20,'Sejal','Kulkarni','sejal.kulkarni@example.com','789123456');



INSERT INTO concepts (id, title, subjectid) VALUES
(1,'OOPS',1),
(2,'Collection',1),
(3,'Reflection',1),
(4,'IO',1),
(5,'DataAccess',1),
(6,'Multithreading',1),
(7,'HyberNet',2),
(8,'Spring Boot',2),
(9,'JPA',2),
(10,'Kafka',2),
(11,'Messaging',2),
(12,'OOPS',3),
(13,'Collection',3),
(14,'Reflection',3),
(15,'IO',3),
(16,'DataAccess',3),
(17,'Multithreading',3),
(18,'JSON',5),
(19,'Components',6),
(20,'OOPS',7),
(21,'Multithreading',7),
(22,'Loops',7);




INSERT INTO questionbank VALUES
(1,1,'Number of primitive data types in Java are?','6','7','8','9','c',1),
(2,1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','a',1),
(3,1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','Andrea Ferro','c',1),
(4,1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','Encapsulation','a',1),
(5,1,'Which of the following language supports polymorphism but not the classes?','C++ programming language','Java programming language','Ada programming language','C# programming language','c',1),
(6,2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','d',5),
(7,2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','d',5),
(8,2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','Asset Oriented Protocol','a',5),
(9,2,'Which of the following is the correct name of React.js?',' React','React.js','ReactJs','All of the above','d',5),
(10,2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','None of the above.','c',5),
(11,3,'What is the role of HTML helper in ASP.NET MVC?','Generates html elements ','Generates html view','Generates html help file','Generates model data','a',3),
(12,3,'Which ASP.NET MVC filter will be executed at last during request processing in ASP.NET MVC Pipeline?','Exception filters ','Action filters','Authorization filters','Response filters','a',4),
(13,3,'Which server , we can not deploy asp.net core Application?','Kestral ','IIS','Tomcat','MySql','d',8),
(14,3,'ECommerce Application is built using ASP.NET object Model. Which ASP.NET object would be used to maintain Shopping Cart across number of requests being received from users?','Application object ','Session object','Response object','Server object','b',8),
(15,3,'Which namespace is used ASP.NET MVC for JSON serialization?','System.Text.Json ','JsonFormatter.NET','GetJson.NET','None of the above','a',8),
(16,4,'Which of the following statement is TRUE?','Action method can be static method in a controller class. ','Action method can be private method in a controller class.','Action method can be protected method in a controller class.','Action method must be public method in a controller class.','d',8),
(17,4,'Visual Studio .NET tool is used to build WCF Service Application project. The project contains web.config file. Which is the root element in configuration file for WCF Service declaration?','System.Service ','System.ServiceModel','Service.Contract','None','b',8),
(18,4,'Which of the following is used to check the validity of the model in ASP.NET Web API?','Mode.Valid ','Model.IsValid','ModelState.IsValid','ModelState.Valid','c',7),
(19,4,'Which component is essential for collecting data using Connected Data Access Mode?','DataSet ','DataReader','DataRow','DataAdapter','b',8),
(20,7,'Which configuration file is used to change configuration setting that will affect only the current Web application?','web.xml ','appsettings.json','Machine.config','web.config','b',5),
(21,7,'Customer is demanding to buid web solution using decoupled , reusable , stateless Application logic. Which type of attribute would help to define reusable, corss platfrom, stateless application logic.','Controller ','APIController','Service','WebAPI','b',1),
(22,7,'Which is not the data object used for data transfer in ASP.NET MVC?','ViewBag ','ViewData','TempData','MetaData','d',8),
(23,1,'.Which of these is an attribute that you can apply to a controller action or an entire controller that modifies the way in which the action is executed?','Action filter ','Result filter','Exception filter','Authorization filter','a',2),
(24,5,'Which statement is correct about Response.Output.Write()?','HttpContext.Response.Output.Write() allows you to buffer output ','HttpContext.Response.Output.Write() allows you to write formatted output','HttpContext.Response.Output.Write() allows you to flush output','HttpContext.Response.Output.Write() allows you to stream output','b',8),
(25,6,'Which of the following tool is used to manage the GAC in .NET Framework?','RegSvr.exe ','GacUtil.exe','GacSvr32.exe','GacMgr.exe','b',1),
(26,4,'Which method of DBContext class reflects changes to database for CRUD Operation in .net while implementing Entity Framework?','Fill ','Update','SaveChanges','Commit','c',1),
(27,5,'Which File extension is used for defining views in ASP.NET Core MVC?','..html ','..cs','..cshtml','None of the above','c',2),
(28,6,'Which of the following is not a member of ADO.NET Command object?','ExecuteScalar() ','ExecuteStream()','Open()','ExecuteReader()','c',2),
(29,6,'What is the best practice to isolate connection string while using asp.net core application?','appsettings.json ','web.config','package.json','web.xml','a',3),
(30,5,'How do you get information from a form that is submitted using the post method?','HttpContext.Request.QueryString ','HttpContext.Request.Form','HttpContext.Response.Method','HttpContext.Response.Query','b',8),
(31,6,'Which degault pages technology is used default for presentation logic implementation in ASP.NET MVC based Applications','html ','razor pages','web forms','None of the above','b',8),
(32,7,'Which Request/Response data fromat supported by Web API by default?','JSON ','XML','BSON','All of the Above','c',8),
(33,1,'Which of the following types of routing supported in Web API?','Attribute Routing ','Convention-based Routing','All of the above','None of the above','c',4),
(34,2,'Which interface must be implemented to provide querying facility in LINQ?','IEnumerator or IQueryable ','IEnumberable or Queryable','Enumberatble or Qurable','None of the above','b',4),
(35,3,'What is the default injection type of Unit Container used in ASP.NET Core','Constructor Injection ','Property Injection','Method Injection','All of the Above','a',4),
(36,4,'Which is the following .net cli command used to create and build Single Page Applicaion?','dotnet new console -o TestApp','dotnet new webapp -o TestApp','dotnet new react -o TestApp','dotnet new ng -o TestApp','c',7),
(37,5,'Which of the following term define rules for .Net Languages?','Common Language Specification','Common Language Infrastructure ','Common Type System','Common Language Runtime','a',6),
(38,6,'Which component of .net Architecture defines Events and Delegate?','CLR','CTS','CLS','DLR','b',6),
(39,7,'What is the Assembly scope of an .net type defined in Code ?',' public ','protected','internal','private','c',6),
(40,1,'Which is the incorrect syntax of array in C# ?',' int [ , ]  mtrx = new int [2, 3]; ','int [ , ] mtrx = new int [2, 3] { {10, 20, 30}, {40, 50, 60} }','int [ ]  [ ]  mtrxj = new  int [2] [];','int [ ]  [ ]  mtrxj = new  int [2] [3];','d',8),
(41,2,'Which access specifier will you use to make base class members accessible in the derived class and not accessible for the rest of the program?',' public ',' private',' protected ','static','c',6),
(42,3,'What is Nullable type?',' It allows assignment of null to reference type. ',' It allows assignment of null to value type. ','It allows assignment of null to static class. ','None of the above. ','b',6),
(43,4,'Which type of inheritance is not supported in C# Programming?',' Multiple Interface Inheritance ','Mulitple Implementation Inheritance ','Multiple Level Inheritance.','Single base class Inheritance ','b',6),
(44,5,'What is the type of structure (struct) in C# Programming Language?',' Reference type','Value type ','Class type','String type ','b',8),
(45,6,'Missing Explicit Typecasting in code leads to following type of error.',' Runtime Error',' Linking Error',' Compile Time Error','Cyclic Dependency ','c',4),
(46,7,'Which namespace provide a specialized form of reflection that enables you to build types at runtime?',' System.Reflection',' System.Type',' System.Reflection.Emit','System.RTTI','c',8),
(47,1,'Which file extention define .net external dependencies needed for buliding .net core application?',' sln',' csproj','xml','appsettings.json','b',2),
(48,2,'Which of the following statement is correct MySQL database connection string ?','Server=localhost;Port=3306;Database=mydatabase;User=myuser;Password=mypassword;',' Server=localhost;Port=3308;Database=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Initial Catalog=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Database=mydatabase;User=myuser;PWD=mypassword;','a',3),
(49,3,'Which of the following class is used to send HTTP requires in .NET?',' MessageClient ',' HttpWebRequest','HttpClient','WebClient','c',3),
(50,4,'What is the name of Default Application Pool in IIS?',' Assmblies are loaded into an application domain before executing the code it contains','  Application domain consist of domain specific logic of .net application.','Web application consist of pool of Application domain. ','Application domain maintains Thread pool for concurrency.','a',3),
(51,5,'Which of the following object is used along with application object in order to ensure that only one process accesses a variable at a time?',' Synchronize',' Synchronize()','ThreadLock','Lock()','a',3),
(52,6,'Which Class is used to make a thread instance explicitly?',' Thread',' ThreadStart','ThreadPool','Runnalble','a',3),
(53,8,'Which of the following is not a valid data type in JavaScript?','Number','String','Boolean','Float','d',1),
(54,8,'What does the this keyword refer to in JavaScript?','The current function being executed','The parent function of the current function','The global object','The object that invokes the current function','d',2),
(55,1,'How do you declare a variable in JavaScript that cannot be reassigned?','const','let','var','final','a',3),
(56,5,'What function is used to change the state in React?','this.setState()','this.changeState()','this.modifyState()','this.alterState()','a',4),
(57,6,'Which method is called immediately after a component is inserted into the DOM in React?','componentDidMount()','componentWillMount()','componentDidUpdate()','componentWillUnmount()','a',5),
(58,5,'What is JSX in React?','JavaScript XML','JavaScript XMLS','JavaScript XLS','JavaScript JSX','a',6),
(59,6,'In Angular, what does NgModule decorator do?','It defines a component','It defines a module','It defines a service','It defines a directive','b',7),
(60,6,'Which Angular feature allows you to subscribe to changes in the router navigation events?','RouterLink','RouterOutlet','ActivatedRoute','RouterEvents','c',8),
(61,6,'In Angular, what is the purpose of the ngOnInit lifecycle hook?','It is called once the component is initialized','It is called when the component is about to be destroyed','It is called when there is an input change to the component','It is called when there is an output change from the component','a',9),
(62,4,'What is a characteristic of microservices architecture?','Monolithic','Tightly coupled components','Single, large codebase','Decentralized and independently deployable services','d',9),
(63,4,'Which of the following is a benefit of using microservices?','Centralized management','High complexity','Rapid development and deployment','Tight integration','c',10),
(64,4,'Which technology is commonly used for inter-service communication in microservices architecture?','HTTP','SMTP','FTP','SNMP','a',10),
(65,5,'In React, which method is commonly used to convert a JavaScript object into JSON format??','JSON.parse()','JSON.stringify()','toJSON()','React.json()','b',18),
(66, 5, 'Which function converts a JSON string to an object in React?', 'JSON.parse()', 'JSON.stringify()', 'useEffect()', 'React.parse()', 'a', 18),
(67, 5, 'Which React hook is commonly used to load JSON data from an API?', 'useState', 'useEffect', 'useMemo', 'useCallback', 'b', 18);


INSERT INTO subjectmatterexperts (id, employeeid, subjectid, certificationdate) VALUES
(1,1,1,'2023-02-15'),
(3,3,5,'2023-02-15'),
(4,4,6,'2023-02-15'),
(5,3,4,'2023-03-19'),
(7,3,7,'2023-01-25'),
(8,4,2,'2023-02-05');

INSERT INTO interviews VALUES
(1,'2025-09-07','09:30:30',1,2),
(4,'2024-03-01','11:30 AM',3,5),
(5,'2024-02-15','12:00 PM',1,6),
(6,'2024-03-10','12:30 PM',4,2),
(7,'2024-02-20','01:00 PM',1,3),
(9,'2024-03-11','02:00 PM',1,5),
(10,'2024-03-15','02:30 PM',3,6);


INSERT INTO userroles (userid, roleid) VALUES (1,1);
INSERT INTO userroles (userid, roleid) VALUES (2,1);
INSERT INTO userroles (userid, roleid) VALUES (3,2);
INSERT INTO userroles (userid, roleid) VALUES (4,3);
INSERT INTO userroles (userid, roleid) VALUES (5,2);
INSERT INTO userroles (userid, roleid) VALUES (6,3);
INSERT INTO userroles (userid, roleid) VALUES (7,3);
INSERT INTO userroles (userid, roleid) VALUES (3,3);


INSERT INTO interviewcriterias VALUES
(1,1,6),
(2,1,5),
(4,1,2),
(9,1,7),
(11,1,8);

INSERT INTO interviewresults VALUES
(1,1,8,'good'),
(2,2,6,'avarage'),
(3,1,9,'very good'),
(4,2,7,'nice'),
(6,4,8,'good');

INSERT INTO tests(Name, subjectid, duration, smeid, creationdate, modificationdate, scheduleddate, passinglevel, status) 
VALUES 
('Basic MCQ Test', 1, "00:30:00", 1, '2025-12-05', '2025-02-05', '2025-02-07', 6, 'scheduled'),
('Advanced MCQ Test', 1, "00:40:00", 1, '2025-11-05', '2025-01-05', '2025-02-07', 7, 'scheduled'),
('Short Quiz on Basics', 1, "00:20:00", 1, '2023-09-05', '2024-01-05', '2024-02-08', 7, 'created'),
('Data Structures Test', 2, "00:30:00", 3, '2023-09-21', '2023-12-05', '2024-01-05', 6, 'conducted'),
('Algorithm Design Assessment', 3, "01:00:00", 1, '2023-11-05', '2023-12-21', '2024-01-24', 8, 'cancelled'),
('Full-Length Programming Test', 4, "01:30:00", 3, '2023-09-05', '2023-10-10', '2024-01-18', 5, 'scheduled'),
('Quick Aptitude Test', 7, "00:30:00", 7, '2025-01-01', '2025-01-01', '2025-01-10', 6, 'scheduled'),
('Logical Reasoning Test', 7, "00:30:00", 7, '2024-01-01', '2024-01-01', '2024-01-10', 7, 'created');

-- ====================================================================================================================

INSERT INTO testquestions(testid, questionbankid)VALUES(1,1);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,2);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,3);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,4);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,5);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,6);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,7);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,8);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,9);
INSERT INTO testquestions(testid, questionbankid)VALUES(1,10);

-- Second Test
-- Create test2 with 10 questions
INSERT INTO testquestions(testid, questionbankid)VALUES(2,5);

INSERT INTO testquestions(testid, questionbankid)VALUES(2,6);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,8);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,7);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,9);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,16);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,17);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,18);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,19);
INSERT INTO testquestions(testid, questionbankid)VALUES(2,20);
 


-- Create test3 with 10 questions
INSERT INTO testquestions(testid, questionbankid)VALUES(3,15);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,16);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,23);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,5);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,6);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,20);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,27);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,28);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,29);
INSERT INTO testquestions(testid, questionbankid)VALUES(3,30);

-- Create test8 with 10 questions

INSERT INTO testquestions(testid, questionbankid)VALUES(8,21);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,22);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,23);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,24);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,25);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,26);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,27);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,28);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,29);
INSERT INTO testquestions(testid, questionbankid)VALUES(8,30);



INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(1,4);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(1,2);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(2,2);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(2,4);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(1,3);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(5,4);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(2,3);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(1,5);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(3,1);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(4,5);

INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(7,8);
INSERT INTO testassessmentcriterias(testid, conceptid)VALUES(8,8);



-- First Candidate Answser sheet
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,1,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,2,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,3,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,4,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,5,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,6,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,7,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,8,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,9,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,10,'a');


INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,11,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,12,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,13,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,14,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,15,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,16,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,17,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,18,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,19,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,20,'b');

INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,2,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,3,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,4,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,5,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,6,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,7,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,8,'N');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,9,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(4,10,'N');


-- =========================================================================================================================
INSERT INTO user_session VALUES
(1, 1, '2025-11-20 15:40:51', '2025-11-20 15:42:04', 'LOGGED_OUT');

INSERT INTO Assessments 
(test_id, candidate_id, status, createdby, createdon, scheduledstart, scheduledend)
VALUES
(1, 4, 'Scheduled', 1, NOW(), '2025-01-20 10:00:00', '2025-01-20 12:00:00');

INSERT INTO Assessments
(test_id, candidate_id, status, createdby, createdon, scheduledstart, scheduledend)
VALUES
(2, 4, 'Scheduled', 1, NOW(), '2025-01-22 09:00:00', '2025-01-22 11:00:00');

INSERT INTO Assessments
(test_id, candidate_id, status, createdby, createdon, scheduledstart, scheduledend)
VALUES
(3, 4, 'Scheduled', 1, NOW(), '2025-01-25 14:00:00', '2025-01-25 16:00:00');

INSERT INTO Assessments 
(test_id, candidate_id, status, createdby, createdon, scheduledstart, scheduledend)
VALUES
(4, 4, 'conducted', 1, NOW(), '2025-01-25 14:00:00', '2025-01-25 16:00:00');


INSERT INTO candidatetestresults VALUES
(1,1,2,'2015-11-05 14:29:36','2025-08-06 23:39:59',2),
(2,1,2,'2015-11-05 14:29:36','2025-08-28 16:16:24',1),
(3,1,10,'2015-11-06 14:29:36','2015-11-06 16:29:36',5),
(4,1,9,'2015-11-05 14:29:36','2015-11-05 16:29:36',3),
(5,3,8,'2015-11-07 14:29:36','2015-11-07 16:29:36',4),
(7,2,8,'2015-11-07 14:29:36','2015-11-07 16:29:36',7),
(8,4,10,'2015-11-08 14:29:36','2015-11-08 16:29:36',8),
(9,2,1,'2025-07-24 23:46:41','2025-07-24 23:47:26',6),
(10,3,2,'2025-08-06 18:16:38',NULL,1),
(11,1,2,'2025-08-28 16:12:03','2025-08-28 16:16:24',1),
(12,1,2,'2025-09-03 13:14:46',NULL,1),
(13,1,2,'2025-09-03 13:18:38',NULL,1),
(14,1,2,'2025-09-03 15:19:04',NULL,1),
(15,1,2,'2025-09-03 17:24:38',NULL,1),
(16,1,NULL,'2025-09-11 10:33:58',NULL,1),
(17,4,0,'2025-10-07 19:09:08','2025-10-07 19:09:54',6);


INSERT INTO employeeperformance VALUES
(1,1,'poor','good','good','poor'),
(2,2,'poor','good','good','very good'),
(3,3,'poor','good','good','poor'),
(4,4,'poor','good','good','poor'),
(5,5,'poor','good','good','poor'),
(6,6,'poor','good','good','poor'),
(7,7,'poor','good','good','poor'),
(8,8,'poor','good','good','poor');




