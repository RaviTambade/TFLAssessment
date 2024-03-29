-- Active: 1707123530557@@127.0.0.1@3306@assessmentdb

use assessmentdb;

select * from interviews;
select * from interviewcriterias;
select * from interviewresults;
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
                            
select employees.firstname,employees.lastname,interviews.candidateid from employees
inner join interviews
where employees.id=interviews.candidateid
order by interviews.candidateid asc;

select interviews.candidateid,interviews.smeid,subjectmatterexperts.subjectid,subjects.id,subjects.title
from interviews
inner join subjectmatterexperts
on interviews.smeid = subjectmatterexperts.id
inner join subjects on subjectmatterexperts.subjectid=subjects.id;

select interviews.candidateid,subjects.title
from interviews
inner join subjectmatterexperts
on interviews.smeid = subjectmatterexperts.id
inner join subjects on subjectmatterexperts.subjectid=subjects.id
where interviews.candidateid=2;

            -- Id=12,
            -- InterviewDate="25/3/2024",
            -- InterviewTime="5:56"  ,
            -- SMETitle ="Sarika Patil",
            -- Candidate ="Paragati Bangar",
            -- Subject="Java" ,
            -- Criterias
            
 
select interviews.id,interviews.interviewdate,interviews.interviewtime,interviews.smeid,
concat(employees.firstname," ",employees.lastname)as SmeName from interviews
inner join subjectmatterexperts 
on interviews.smeid=subjectmatterexperts.id 
inner join employees
on subjectmatterexperts.employeeid= employees.id
where interviews.id=2;

select interviews.candidateid, concat(employees.firstname," ",employees.lastname)as CandidateName from employees
inner join interviews
on interviews.candidateid = employees.id
where interviews.id=2;

select subjects.id, subjects.title from interviews
inner join subjectmatterexperts
on interviews.smeid = subjectmatterexperts.id
inner join subjects
on subjectmatterexperts.subjectid = subjects.id
where interviews.id=2;

select evaluationcriterias.id, evaluationcriterias.title from interviews
inner join interviewcriterias
on interviews.id = interviewcriterias.interviewid
inner join evaluationcriterias
on interviewcriterias.evaluationcriteriaid = evaluationcriterias.id
where interviews.id=2;
            
            
            
            
            
            