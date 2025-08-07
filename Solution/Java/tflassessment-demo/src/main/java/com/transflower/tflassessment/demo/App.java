package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepositoryImpl;


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

        EvaluationCriteria evc1=new EvaluationCriteria ("JAVA",1);
        EvaluationCriteriaRepositoryImpl evc2 = new EvaluationCriteriaRepositoryImpl();
      
      
        evc2.insertCriteria(evc1);
       // evc.updateCriteria(22,3);
       // evc.updateSubject();


    }
}
//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app