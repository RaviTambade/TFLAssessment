-- Active: 1707123530557@@127.0.0.1@3306@assessmentdb
use assessmentdb;

INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('10564789', 'ravi', 'tambade', 'ravi.tambade@example.com', '9000000000', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('123564789', 'kajal', 'ghule', 'kajal.ghule@example.com', '9000000001', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('963258741', 'nirjala', 'naik', 'nirjala.naik@example.com', '9000000002', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('987654321', 'sahil', 'kamble', 'sahil.kamble@example.com', '9000000003', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('789456123', 'sanika', 'bhor', 'sanika.bhor@example.com', '9000000004', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('159753642', 'sumit', 'bhor', 'sumit.bhor@example.com', '9000000005', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('258741369', 'nikita', 'bansode', 'nikita.bansode@example.com', '9000000001', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('258963147', 'pranita', 'mane', 'pranita.mane@example.com', '9000000002', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('456741963', 'rutuja', 'mokale', 'rutuja.mokale@example.com', '9000000003', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('123658749', 'pankaj', 'bhor', 'pankaj.bhor@example.com', '9000000004', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('321789456', 'sarthak', 'walake', 'sarthak.walake@example.com', '9000000005', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('789123654', 'naina', 'surve', 'naina.surve@example.com', '9000000006', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('456741935', 'nikhil', 'navale', 'nikhil.navale@example.com', '9000000007', '12345');
INSERT INTO users (aadharid, firstname, lastname, email, contactnumber, password)VALUES ('789357124', 'sarthak', 'kadam', 'sarthak.kadam@example.com', '9000000008', '12345');



INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(1, 'ravi', 'tambade', 'ravi.tambade@example.com', '9000000000');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(2, 'kajal', 'ghule', 'kajal.ghule@example.com', '9000000001');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(3, 'nirjala', 'naik', 'nirjala.naik@example.com', '9000000002');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(4, 'sahil', 'kamble', 'sahil.kamble@example.com', '9000000003');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(5, 'sanika', 'bhor', 'sanika.bhor@example.com', '9000000004');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(6, 'sumit', 'bhor', 'sumit.bhor@example.com', '9000000005');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(7, 'nikita', 'bansode', 'nikita.bansode@example.com', '9000000006');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(8, 'pranita', 'mane', 'pranita.mane@example.com', '9000000007');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(9, 'rutuja', 'mokale', 'rutuja.mokale@example.com', '9000000008');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(10, 'pankaj', 'bhor', 'pankaj.bhor@example.com', '9000000009');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(11, 'sarthak', 'walake', 'sarthak.walake@example.com', '9000000010');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(12, 'naina', 'surve', 'naina.surve@example.com', '9000000011');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(13, 'nikhil', 'navale', 'nikhil.navale@example.com', '9000000012');
INSERT INTO employees(userId,firstname, lastname, email, contact)VALUES(14, 'sarthak', 'kadam', 'sarthak.kadam@example.com', '9000000013');

INSERT INTO roles (name, lob) VALUES('admin', 'HR');
INSERT INTO roles (name, lob) VALUES('sme', 'Technical');
INSERT INTO roles (name, lob) VALUES('student', 'Assessment');


INSERT INTO userroles (userid, roleid) VALUES (1,1);
INSERT INTO userroles (userid, roleid) VALUES (2,1);
INSERT INTO userroles (userid, roleid) VALUES (3,2);
INSERT INTO userroles (userid, roleid) VALUES (4,3);
INSERT INTO userroles (userid, roleid) VALUES (5,2);
INSERT INTO userroles (userid, roleid) VALUES (6,3);
INSERT INTO userroles (userid, roleid) VALUES (7,3);
INSERT INTO userroles (userid, roleid) VALUES (3,3);

INSERT INTO subjects(title) VALUES('COREJAVA');
INSERT INTO subjects(title) VALUES('ADVJAVA');
INSERT INTO subjects(title) VALUES('DOTNET');
INSERT INTO subjects(title) VALUES('MICROSERVICES');
INSERT INTO subjects(title) VALUES('REACT');
INSERT INTO subjects(title) VALUES('ANGULAR');
INSERT INTO subjects(title) VALUES('CSHARP');
INSERT INTO subjects(title) VALUES('JAVASCRIPT');

INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(1,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(2,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(3,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(4,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(5,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(6,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(7,"poor", "good","good","poor");
INSERT INTO employeeperformance(employeeid, test, communication, congition, interview)VALUES(8,"poor", "good","good","poor");



INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(1,1,'2023-02-15');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(2,2,'2023-02-15');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(3,5,'2023-02-15');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(4,6,'2023-02-15');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(3,4,'2023-03-19');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(2,5,'2023-04-18');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(3,7,'2023-01-25');
INSERT INTO subjectmatterexperts(employeeid,subjectid,certificationdate)VALUES(4,2,'2023-02-05');


INSERT INTO evaluationcriterias(title,subjectid) VALUES('OOPS',1);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Collection',1);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Reflection',1);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('IO',1);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('DataAccess',1);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Multithreading',1);

INSERT INTO evaluationcriterias(title,subjectid) VALUES('HyberNet',2);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Spring Boot',2);

INSERT INTO evaluationcriterias(title,subjectid) VALUES('JPA',2);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Kafka',2);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Messaging',2);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('OOPS',3);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Collection',3);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Reflection',3);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('IO',3);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('DataAccess',3);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Multithreading',3);



INSERT INTO evaluationcriterias(title,subjectid) VALUES('JSON',5);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Components',6);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('OOPS',7);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Multithreading',7);
INSERT INTO evaluationcriterias(title,subjectid) VALUES('Loops',7);


INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Number of primitive data types in Java are?','6','7','8','9','c','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','a','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','Andrea Ferro','c','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','Encapsulation','a','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which of the following language supports polymorphism but not the classes?','C++ programming language','Java programming language','Ada programming language','C# programming language','c','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','d','5');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','d','5');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','Asset Oriented Protocol','a','5');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'Which of the following is the correct name of React.js?',' React','React.js', 'ReactJs','All of the above','d','5');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','None of the above.','c','5');

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'What is the role of HTML helper in ASP.NET MVC?','Generates html elements ','Generates html view','Generates html help file','Generates model data','a','3');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'Which ASP.NET MVC filter will be executed at last during request processing in ASP.NET MVC Pipeline?','Exception filters ','Action filters','Authorization filters','Response filters','a','4');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'Which server , we can not deploy asp.net core Application?','Kestral ','IIS','Tomcat','MySql','d','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'ECommerce Application is built using ASP.NET object Model. Which ASP.NET object would be used to maintain Shopping Cart across number of requests being received from users?','Application object ','Session object','Response object','Server object','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'Which namespace is used ASP.NET MVC for JSON serialization?','System.Text.Json ','JsonFormatter.NET','GetJson.NET','None of the above','a','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Which of the following statement is TRUE?','Action method can be static method in a controller class. ','Action method can be private method in a controller class.','Action method can be protected method in a controller class.','Action method must be public method in a controller class.','d','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Visual Studio .NET tool is used to build WCF Service Application project. The project contains web.config file. Which is the root element in configuration file for WCF Service declaration?','System.Service ','System.ServiceModel','Service.Contract','None','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Which of the following is used to check the validity of the model in ASP.NET Web API?','Mode.Valid ','Model.IsValid','ModelState.IsValid','ModelState.Valid','c','7');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)VALUES(4,'Which component is essential for collecting data using Connected Data Access Mode?','DataSet ','DataReader','DataRow','DataAdapter','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'Which configuration file is used to change configuration setting that will affect only the current Web application?','web.xml ','appsettings.json','Machine.config','web.config','b','5');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'Customer is demanding to buid web solution using decoupled , reusable , stateless Application logic. Which type of attribute would help to define reusable, corss platfrom, stateless application logic.','Controller ','APIController','Service','WebAPI','b','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'Which is not the data object used for data transfer in ASP.NET MVC?','ViewBag ','ViewData','TempData','MetaData','d','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'.Which of these is an attribute that you can apply to a controller action or an entire controller that modifies the way in which the action is executed?','Action filter ','Result filter','Exception filter','Authorization filter','a','2');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'Which statement is correct about Response.Output.Write()?','HttpContext.Response.Output.Write() allows you to buffer output ','HttpContext.Response.Output.Write() allows you to write formatted output','HttpContext.Response.Output.Write() allows you to flush output','HttpContext.Response.Output.Write() allows you to stream output','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Which of the following tool is used to manage the GAC in .NET Framework?','RegSvr.exe ','GacUtil.exe','GacSvr32.exe','GacMgr.exe','b','1');

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Which method of DBContext class reflects changes to database for CRUD Operation in .net while implementing Entity Framework?','Fill ','Update','SaveChanges','Commit','c','1');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'Which File extension is used for defining views in ASP.NET Core MVC?','..html ','..cs','..cshtml','None of the above','c','2');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Which of the following is not a member of ADO.NET Command object?','ExecuteScalar() ','ExecuteStream()','Open()','ExecuteReader()','c','2');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'What is the best practice to isolate connection string while using asp.net core application?','appsettings.json ','web.config','package.json','web.xml','a','3');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'How do you get information from a form that is submitted using the "post" method?','HttpContext.Request.QueryString ','HttpContext.Request.Form','HttpContext.Response.Method','HttpContext.Response.Query','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Which degault pages technology is used default for presentation logic implementation in ASP.NET MVC based Applications','html ','razor pages','web forms','None of the above','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'Which Request/Response data fromat supported by Web API by default?','JSON ','XML','BSON','All of the Above','c','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which of the following types of routing supported in Web API?','Attribute Routing ','Convention-based Routing','All of the above','None of the above','c','4');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'Which interface must be implemented to provide querying facility in LINQ?','IEnumerator or IQueryable ','IEnumberable or Queryable','Enumberatble or Qurable','None of the above','b','4');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'What is the default injection type of Unit Container used in ASP.NET Core','Constructor Injection ','Property Injection','Method Injection','All of the Above','a','4');

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Which is the following .net cli command used to create and build Single Page Applicaion?','dotnet new console -o TestApp','dotnet new webapp -o TestApp','dotnet new react -o TestApp','dotnet new ng -o TestApp','c','7');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'Which of the following term define rules for .Net Languages?','Common Language Specification','Common Language Infrastructure ','Common Type System','Common Language Runtime','a','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Which component of .net Architecture defines Events and Delegate?','CLR','CTS','CLS','DLR','b','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'What is the Assembly scope of an .net type defined in Code ?',' public ','protected','internal','private','c','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which is the incorrect syntax of array in C# ?',' int [ , ]  mtrx = new int [2, 3]; ','int [ , ] mtrx = new int [2, 3] { {10, 20, 30}, {40, 50, 60} }','int [ ]  [ ]  mtrxj = new  int [2] [];','int [ ]  [ ]  mtrxj = new  int [2] [3];','d','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'Which access specifier will you use to make base class members accessible in the derived class and not accessible for the rest of the program?',' public ',' private',' protected ','static','c','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'What is Nullable type?',' It allows assignment of null to reference type. ',' It allows assignment of null to value type. ','It allows assignment of null to static class. ','None of the above. ','b','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'Which type of inheritance is not supported in C# Programming?',' Multiple Interface Inheritance ','Mulitple Implementation Inheritance ','Multiple Level Inheritance.','Single base class Inheritance ','b','6');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'What is the type of structure (struct) in C# Programming Language?',' Reference type','Value type ','Class type','String type ','b','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Missing Explicit Typecasting in code leads to following type of error.',' Runtime Error',' Linking Error',' Compile Time Error','Cyclic Dependency ','c','4');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(7,'Which namespace provide a specialized form of reflection that enables you to build types at runtime?',' System.Reflection',' System.Type',' System.Reflection.Emit','System.RTTI','c','8');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(1,'Which file extention define .net external dependencies needed for buliding .net core application?',' sln',' csproj','xml','appsettings.json','b','2');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(2,'Which of the following statement is correct MySQL database connection string ?','Server=localhost;Port=3306;Database=mydatabase;User=myuser;Password=mypassword;',' Server=localhost;Port=3308;Database=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Initial Catalog=mydatabase;User=myuser;Password=mypassword;','Server=localhost;Port=3306;Database=mydatabase;User=myuser;PWD=mypassword;','a','3');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(3,'Which of the following class is used to send HTTP requires in .NET?',' MessageClient ',' HttpWebRequest','HttpClient','WebClient','c','3');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(4,'What is the name of Default Application Pool in IIS?',' Assmblies are loaded into an application domain before executing the code it contains','  Application domain consist of domain specific logic of .net application.','Web application consist of pool of Application domain. ','Application domain maintains Thread pool for concurrency.','a','3');
INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(5,'Which of the following object is used along with application object in order to ensure that only one process accesses a variable at a time?',' Synchronize',' Synchronize()','ThreadLock','Lock()','a','3');

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES(6,'Which Class is used to make a thread instance explicitly?',' Thread',' ThreadStart','ThreadPool','Runnalble','a','3');

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) 
VALUES (
    8,
    'Which of the following is not a valid data type in JavaScript?',
    'Number',
    'String',
    'Boolean',
    'Float',
    'd',
    '1'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    8,
    'What does the ''this'' keyword refer to in JavaScript?',
    'The current function being executed',
    'The parent function of the current function',
    'The global object',
    'The object that invokes the current function',
    'd',
    '2'
    );

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    1,
    'How do you declare a variable in JavaScript that cannot be reassigned?',
    'const',
    'let',
    'var',
    'final',
    'a',
    '3'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    5,
    'What function is used to change the state in React?',
    'this.setState()',
    'this.changeState()',
    'this.modifyState()',
    'this.alterState()',
    'a',
    '4'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    6,
    'Which method is called immediately after a component is inserted into the DOM in React?',
    'componentDidMount()',
    'componentWillMount()',
    'componentDidUpdate()',
    'componentWillUnmount()',
    'a',
    '5'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    5,
    'What is JSX in React?',
    'JavaScript XML',
    'JavaScript XMLS',
    'JavaScript XLS',
    'JavaScript JSX',
    'a',
    '6'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    6,
    'In Angular, what does NgModule decorator do?',
    'It defines a component',
    'It defines a module',
    'It defines a service',
    'It defines a directive',
    'b',
    '7'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    6,
    'Which Angular feature allows you to subscribe to changes in the router''s navigation events?',
    'RouterLink',
    'RouterOutlet',
    'ActivatedRoute',
    'RouterEvents',
    'c',
    '8'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    6,
    'In Angular, what is the purpose of the ''ngOnInit'' lifecycle hook?',
    'It is called once the component is initialized',
    'It is called when the component is about to be destroyed',
    'It is called when there''s an input change to the component',
    'It is called when there''s an output change from the component',
    'a',
    '9'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    4,
    'What is a characteristic of microservices architecture?',
    'Monolithic',
    'Tightly coupled components',
    'Single, large codebase',
    'Decentralized and independently deployable services',
    'd',
    '9'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    4,
    'Which of the following is a benefit of using microservices?',
    'Centralized management',
    'High complexity',
    'Rapid development and deployment',
    'Tight integration',
    'c',
    '10'
);

INSERT INTO questionbank(subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)
VALUES (
    4,
    'Which technology is commonly used for inter-service communication in microservices architecture?',
    'HTTP',
    'SMTP',
    'FTP',
    'SNMP',
    'a',
    '10'
);



INSERT INTO tests(Name, subjectid, duration, smeid, creationdate, modificationdate, scheduleddate, passinglevel, status) 
VALUES 
('Basic MCQ Test', 1, "00:30:00", 1, '2025-12-05', '2025-02-05', '2025-02-07', 6, 'scheduled'),
('Advanced MCQ Test', 1, "00:40:00", 1, '2025-11-05', '2025-01-05', '2025-02-07', 7, 'scheduled'),
('Short Quiz on Basics', 1, "00:20:00", 1, '2023-09-05', '2024-01-05', '2024-02-08', 7, 'created'),
('Data Structures Test', 2, "00:30:00", 2, '2023-09-21', '2023-12-05', '2024-01-05', 6, 'conducted'),
('Algorithm Design Assessment', 3, "01:00:00", 1, '2023-11-05', '2023-12-21', '2024-01-24', 8, 'cancelled'),
('Full-Length Programming Test', 4, "01:30:00", 2, '2023-09-05', '2023-10-10', '2024-01-18', 5, 'scheduled'),
('Quick Aptitude Test', 7, "00:30:00", 7, '2025-01-01', '2025-01-01', '2025-01-10', 6, 'scheduled'),
('Logical Reasoning Test', 7, "00:30:00", 7, '2024-01-01', '2024-01-01', '2024-01-10', 7, 'created');



INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(1,4);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(1,2);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(2,2);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(2,4);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(1,3);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(5,4);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(2,3);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(1,5);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(3,1);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(4,5);

INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(7,8);
INSERT INTO testassessmentcriterias(testid, evaluationcriteriaid)VALUES(8,8);


-- Create test1 with 10 questions


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



INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,21,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,22,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,23,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,24,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,25,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,26,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,27,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,18,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,19,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(1,20,'b');

 INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,1,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,2,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,3,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,4,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,5,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,6,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,7,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,8,'d');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,9,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,10,'d');



 INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,11,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,12,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,13,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,14,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,15,'a');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,16,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,17,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,18,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,19,'b');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,20,'a');

 
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,1,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,2,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,3,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,4,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,5,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,6,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,7,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,8,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(2,9,'c');
INSERT INTO candidateanswers(candidateid, testquestionid,answerkey)VALUES(3,10,'d');


INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-02-10',"10:00 AM",1,2);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-02-10',"10:30 AM",2,3);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-03-12',"11:00 AM",1,4);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-03-01',"11:30 AM",3,5);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-02-15',"12:00 PM",1,6);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-03-10',"12:30 PM",4,2);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-02-20',"01:00 PM",1,3);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-02-12',"01:30 PM",2,4);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-03-11',"02:00 PM",1,5);
INSERT INTO interviews(interviewdate,interviewtime, smeid, candidateid)VALUES('2024-03-15',"02:30 PM",3,6);



INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(1,6);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(1,5);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(2,3);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(1,2);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(3,4);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(2,4);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(3,6);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(2,5);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(1,7);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(2,1);
INSERT INTO interviewcriterias(interviewid, evaluationcriteriaid)VALUES(1,8);


INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(1,8,"good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(2,6,"avarage");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(1,9,"very good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(2,7,"nice");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(3,9,"very good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(4,8,"good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(5,10,"very good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(6,7,"good");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(7,8,"nice");
INSERT INTO interviewresults(interviewcriteriaid, ratings, comments)VALUES(8,8,"good");

INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (1,5,"2015-11-05 14:29:36","2015-11-05 16:29:36",2);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (1,5,"2015-11-05 14:29:36","2015-11-05 16:29:36",1);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (1,10,"2015-11-06 14:29:36","2015-11-06 16:29:36",5);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (1,9,"2015-11-05 14:29:36","2015-11-05 16:29:36",3);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (3,8,"2015-11-07 14:29:36","2015-11-07 16:29:36",4);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (4,10,"2015-11-08 14:29:36","2015-11-08 16:29:36",6);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (2,8,"2015-11-07 14:29:36","2015-11-07 16:29:36",7);
INSERT INTO candidatetestresults(testid,score,teststarttime,testendtime,candidateid) values (5,10,"2015-11-08 14:29:36","2015-11-08 16:29:36",8);






  