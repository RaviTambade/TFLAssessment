 

CREATE DATABASE assesmentdb;

use assesmentdb; 

---







----


CREATE TABLE
    employee(
        id INT AUTO_INCREMENT PRIMARY KEY,
        fname VARCHAR(20) NOT NULL,
	    lname VARCHAR(20) NOT NULL,
	   email VARCHAR(50) NOT NULL,
	   contactno VARCHAR(10) NOT NULL,
       
    );

INSERT INTO employee(fname,lname,email,contactno) VALUES ('Shreedhar','Patil','spatil@gmail.com', '9876543210');
INSERT INTO employee(fname,lname,email,contactno) VALUES ('Bhupendra','Walhekar','bwalhekar@gmail.com', '9876579210');
INSERT INTO employee(fname,lname,email,contactno) VALUES ('Yash','Patil','ypatil@gmail.com', '9876543999');
INSERT INTO employee(fname,lname,email,contactno) VALUES ('Yogesh','Pagar','ypagar@gmail.com', '9876547777');


CREATE TABLE
    Skill(
          SkillId INT PRIMARY KEY AUTO_INCREMENT,
		  Title varchar(20)
	    
    );
INSERT INTO Skill(Title) VALUES ("Java");
INSERT INTO Skill(Title) VALUES ("DotNet");
INSERT INTO Skill(Title) VALUES ("SQL");
INSERT INTO Skill(Title) VALUES ("Python");	


CREATE TABLE
    SkillSetRating(
          SkillRatingId int PRIMARY KEY AUTO_INCREMENT,
		  EmployeeID int,
		  SkillID int,
		  Rating int check (Rating<=10),
		  CONSTRAINT EmployeeID FOREIGN KEY(EmployeeID) REFERENCES employee(id),
		  CONSTRAINT SkillID FOREIGN KEY(SkillID) REFERENCES Skill(SkillId)
	      
    );
	
INSERT INTO SkillSetRating(EmployeeID,SkillID,Rating) VALUES (1,4,10);
INSERT INTO SkillSetRating(EmployeeID,SkillID,Rating) VALUES (2,2,9);
INSERT INTO SkillSetRating(EmployeeID,SkillID,Rating) VALUES (3,3,8);
INSERT INTO SkillSetRating(EmployeeID,SkillID,Rating) VALUES (1,2,5);



select employee.fname, Skill.Title, SkillSetRating.Rating
from employee,Skill,SkillSetRating
where employee.id=SkillSetRating.employeeid and Skill.Title="Java";

	
	

CONSTRAINT EmployeeID FOREIGN KEY(EmployeeID) REFERENCES employee(id) 
--Condition Query:



CREATE TABLE
TechnicalSkills(
  TechSkId INT PRIMARY KEY AUTO_INCREMENT,
  Title VARCHAR(20)
);

CREATE TABLE
SubjectExperties(
   SubExId INT PRIMARY KEY AUTO_INCREMENT,
   EmployeeId INT,
   TechnicalSkillId INT,
   CertifiedOn DATE,
   CONSTRAINT fk_employee_SubjectExperties_EmployeeId FOREIGN KEY(EmployeeId) REFERENCES employee(id) ON UPDATE CASCADE ON DELETE CASCADE,
   CONSTRAINT fk_TechnicalSkills_SubjectExperties_TechnicalSkillId FOREIGN KEY(TechnicalSkillId) REFERENCES TechnicalSkills(TechSkId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE
EvaluationCriterias(
   EvaCriId INT PRIMARY KEY AUTO_INCREMENT,
   Title VARCHAR(20),
   SkillId INT,
   CONSTRAINT fk_TechnicalSkills_EvaluationCriterias_SkillId FOREIGN KEY(SkillId) REFERENCES TechnicalSkills(TechSkId) ON UPDATE CASCADE ON DELETE CASCADE
   
);

