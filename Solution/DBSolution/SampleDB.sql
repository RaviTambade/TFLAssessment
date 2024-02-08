SAMPLE DATA
INSERT INTO TechnicalSkills(Title) VALUES('CORE JAVA');
INSERT INTO TechnicalSkills(Title) VALUES('ADV JAVA');
INSERT INTO TechnicalSkills(Title) VALUES('DOTNET');
INSERT INTO TechnicalSkills(Title) VALUES('MICRO SERVICES');
INSERT INTO TechnicalSkills(Title) VALUES('REACT');
INSERT INTO TechnicalSkills(Title) VALUES('ANGULAR');
INSERT INTO TechnicalSkills(Title) VALUES('C#');
INSERT INTO TechnicalSkills(Title) VALUES('JavaScriept');

INSERT INTO SubjectExperties(EmployeeId,TechnicalSkillId,CertifiedOn)VALUES(1,1,'2023-02-15');
INSERT INTO SubjectExperties(EmployeeId,TechnicalSkillId,CertifiedOn)VALUES(2,2,'2023-02-15');
INSERT INTO SubjectExperties(EmployeeId,TechnicalSkillId,CertifiedOn)VALUES(3,5,'2023-02-15');
INSERT INTO SubjectExperties(EmployeeId,TechnicalSkillId,CertifiedOn)VALUES(4,6,'2023-02-15');

INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('OOPS',1);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('Multithreading',1);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('Loops',1);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('HyberNet',2);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('Spring Boot',2);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('JSON',5);
INSERT INTO EvaluationCriterias(Title,SkillId) VALUES('Components',6);
INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Number of primitive data types in Java are?','6','7','8','9','8','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','SmallTalk','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','
Andrea Ferro','Alan Kay','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','
Encapsulation','Exception','1');


INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following language supports polymorphism but not the classes?
','C++ programming language
','Java programming language','Ada programming language','
C# programming language','Ada programming language','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','All of the above','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','All of the above.','5');


INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','
Asset Oriented Protocol','Aspect Oriented Programming','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'Which of the following is the correct name of React.js?',' React','React.js', 'ReactJs','All of the above','All of the above','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','
None of the above.','Using setter method and constructor argument both.','5');




INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,
'Number of primitive data types in Java are?','6','7','8','9','C','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following language was developed as the first purely object programming language?','SmallTalk','C++','Kotlin','Java','A','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Who developed object-oriented programming?','Adele Goldberg','Dennis Ritchie','Alan Kay','
Andrea Ferro','C','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following is not an OOPS concept?','Exception','Abstraction','Polymorphism','
Encapsulation','A','1');


INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(1,'Which of the following language supports polymorphism but not the classes?
','C++ programming language
','Java programming language','Ada programming language','
C# programming language','C','1');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'Spring Boot is used for developing?','Web applications','Distributed applications (Restful web services)','Microservices','All of the above','D','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'How can a Spring Boot application be packaged and distributed?','As a JAR file ','As a WAR file','As a ZIP file','All of the above.','D','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'What AOP stands for?','Aspect Oriented Programming','Any Object Programming','Asset Oriented Programming','
Asset Oriented Protocol','D','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'Which of the following is the correct name of React.js?',' React','React.js', 'ReactJs','All of the above','D','5');

INSERT INTO Questions(SkillId, Question, A, B, C, D, Answer, EvaCriId) VALUES(2,'How to use ref keyword in beans.xml?','Using setter method only.','Using constructor argument only.','Using setter method and constructor argument both.','
None of the above.','C','5');

















