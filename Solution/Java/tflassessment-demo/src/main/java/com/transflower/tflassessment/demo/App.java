package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;
import java.util.*;

public class App 
{
    public static void main( String[] args )
    { 
        // Create instance of the repository implementation
        // AssessmentIntelligenceRepositoryImpl repo = new AssessmentIntelligenceRepositoryImpl();
        // List<AnnualCandidateResult> results=  repo.getCandidateResults(2, 2015);
        // for (AnnualCandidateResult result : results) {

        //     int candidateId = result.getCandidateId();
        //     int score = result.getScore();
        //     System.out.println("Candidate ID: " + candidateId + "Score: " + score);
        // }

        QuestionBankRepositoryImpl q=new QuestionBankRepositoryImpl();
        List<SubjectQuestion> questions =q.getQuestionsBySubject(5);
        for (SubjectQuestion subjectQuestion : questions) {
            System.out.println();
            
        }

    }}
        // List<QuestionTitle> questions=q.getAllQuestions();
        //     System.out.println("----- Question List -----");
        //     for (QuestionTitle question : questions) {
        //     System.out.println("ID: " + question.getId() + " | Title: " + question.getTitle());
        //    }
        // }}
           

        // EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
        // evc.updateSubject();
        // evc.


    

//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app