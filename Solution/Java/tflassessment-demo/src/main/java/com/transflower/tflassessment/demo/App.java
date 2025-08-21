package com.transflower.tflassessment.demo;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.Assessment;
import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.entities.CandidateAnswerResult;
import com.transflower.tflassessment.demo.entities.CandidateResultDetails;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;
import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;
import com.transflower.tflassessment.demo.entities.Question;
import com.transflower.tflassessment.demo.entities.Test;
import com.transflower.tflassessment.demo.entities.TestWithQuestions;
import com.transflower.tflassessment.demo.repositories.*;

public class App
{

    public static void main(String[] args) throws Exception 
    {

    //     System.out.println("Welcome to transflower");
        
    //     System.out.println("-------------- Insert Candidate Answer------------");
    //     CandidateAnswerRepositoryImpl answer = new CandidateAnswerRepositoryImpl();
    //     List<CandidateAnswer> answers = answer.getCandidateAnswer(1, 1);
    //     for (CandidateAnswer ans : answers) {
    //         int candidateid = ans.getCandidateId();
    //         int TestId = ans.getTestQuestionId();
    //         System.out.println("CandidateId:" + candidateid + "TestId:" + TestId);
    //     }

    //     System.out.println("-------------Get Candidate Answer-----");
    //     CandidateAnswerRepositoryImpl answe = new CandidateAnswerRepositoryImpl();
    //     List<CandidateAnswer>answ=new ArrayList<CandidateAnswer>();
    //     answ.add(new CandidateAnswer(101, 1, 1, "A"));
    //     answ.add(new CandidateAnswer(102, 1, 2, "B"));
    //     boolean success = answer.insertCandidateAnswer(1, answ);

    //     if (success) 
    //     {

    //         System.out.println("Candidate answers inserted successfully.");
    //     } 
    //     else 
    //     {
    //         System.out.println("Failed to insert candidate answers.");
    //     }

    //     System.out.println("------------getCandidateAnswerResult---------");
    //     List<CandidateAnswerResult> ansResult = new ArrayList<CandidateAnswerResult>();
    //     ansResult.add(new CandidateAnswerResult(1, "C", "A", true));
    //     ansResult.add(new CandidateAnswerResult(2, "D", "C", false));

    //     for (CandidateAnswerResult ans : ansResult) {
    //         int TestQuestionId = ans.getTestQuestionId();
    //         String CandidateAnswer = ans.getCandidateAnswer();
    //         String CorrectAnswer = ans.getCorrectAnswer();
    //         System.out.println("TestQuestionId:" + TestQuestionId + "CandidateAnswer" + CandidateAnswer
    //                 + "CorrectAnswer:" + CorrectAnswer);
    //     }

    //     System.out.println("--------------CandidateTestDetails -------");

    //     int CandidateId = 101;
    //     int TestId = 5;
    //     CandidateTestDetails details = new CandidateTestDetails();
    //     // details.add(new CandidateResultDetails(1,111,1,2,3));

    //     // CandidateTestDetails details = getCandidateTestDetails(candidateId, testId);
    //     // details.add(new CandidateResultDetails(1,111,1,2,3));
    //     // details.add(new CandidateResultDetails(2,121,1,2,4));
    //     // Display details
    //     if (details != null) {
    //         System.out.println("Candidate Test Details:");
    //         System.out.println("Candidate ID: " + details.getCandidateId());
    //         System.out.println("Candidate TestId: " + details.getTestId());
    //         System.out.println("Test ID: " + details.getTestId());
    //         // System.out.println("Correct Answer: " + details.getCorrectAnswer());
    //         // System.out.println("InCorrect Answer:"+details.getInCorrectAnswer());
    //         // System.out.println("Skipped Question:"+ details.getSkippedQuestion());
    //         System.out.println("details");

    //     }
    //     else 
    //     {
    //         System.out.println("Failed");
    //     }
    // }
    //   AssessmentRepositoryImpl repo = new AssessmentRepositoryImpl();

    //     // ---- Fetch assessments by Subject Matter Expert ----
    //     int subId = 1; 
    //     List<Assessment> assessments = repo.getAllBySubjectMatterExpert(subId);

    //     for (Assessment a : assessments)
    //     {
    //         System.out.println(a);
    //     }

    //     // ---- Fetch tests between two dates ----
    //     java.sql.Date fromDate = java.sql.Date.valueOf("2025-08-01");
    //     java.sql.Date toDate = java.sql.Date.valueOf("2025-08-30");

    //     List<Test> tests = repo.getAllTests(fromDate, toDate);

    //     for (Test t : tests) {
    //         System.out.println("ID: " + t.getId() +
    //                         ", Name: " + t.getName() +
    //                         ", Scheduled Date: " + t.getScheduledDate());
    //     }

    //     // ---- Fetch test details with questions ----
    //     int testId = 1; 
    //     TestWithQuestions testDetails = repo.getTestDetails(testId);

    //     if (testDetails != null) 
    //     {
    //         System.out.println("Test ID: " + testDetails.getId());
    //         System.out.println("Name: " + testDetails.getName());
    //         System.out.println("Scheduled Date: " + testDetails.getScheduledDate());

    //         System.out.println("\n--- Questions ---");
    //         for (Question q : testDetails.getQuestions()) 
    //         {
    //             System.out.println("Q" + q.getQuestionId() + ": " + q.getTitle());
    //             System.out.println("   A: " + q.getA());
    //             System.out.println("   B: " + q.getB());
    //             System.out.println("   C: " + q.getC());
    //             System.out.println("   D: " + q.getD());
    //             System.out.println("   Answer Key: " + q.getAnswerKey());
    //             System.out.println("   SubjectId: " + q.getSubjectId());
    //             System.out.println("   EvalCriteriaId: " + q.getEvaluationCriteriaId());
    //             System.out.println("-------------------------");
    //         }
    //     } else 
    //     {
    //         System.out.println("No test found with ID " + testId);
    //     }
    
    // }
    }
}
