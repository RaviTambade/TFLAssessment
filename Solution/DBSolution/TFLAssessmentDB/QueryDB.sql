-- Active: 1707123530557@@127.0.0.1@3306@assessmentdb

use assessmentdb;

 select questionbank.id,questionbank.title,questionbank.a,questionbank.b,questionbank.c,questionbank.d from questionbank inner join subjects on subjects.id=questionbank.subjectid
 where subjects.title="ADVJAVA";

-- Select all questions  beong to ADV JAVA
select * from questionbank where subjectid=(select id from subjects where title ="ADVJAVA");
 
select * from questionbank inner join testquestions on testquestions.questionbankid = questionbank.id where testquestions.testid=1;

INSERT INTO candidateanswers (candidateid, testquestionid, answerkey) VALUES (@candidateId, @testQuestionId, @answerKey);

insert into candidatetestresults(testid,teststarttime,candidateid) values (@testid,@teststarttime,@candidateid);

insert into candidatetestresults(testid,teststarttime,candidateid) values (1,"2015-11-05 14:29:36",2);
update candidatetestresults set testendtime =@testendtime where candidateid=@candidateid and testid=@testid;
update candidatetestresults set testendtime ="2015-11-05 14:35:00" where candidateid=2 and testid=1;
select * from candidatetestresults;
select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria
                            from questionbank, subjects,evaluationcriterias
                            where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id
                            and subjects.id=1 and evaluationcriterias.id=1;