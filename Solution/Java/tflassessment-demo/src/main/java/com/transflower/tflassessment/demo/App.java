package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;
import com.transflower.tflassessment.demo.services.EvaluationCriteriaService;
import com.transflower.tflassessment.demo.services.EvaluationCriteriaserviceImpl;

import java.util.*;

public class App 
{
    public static void main( String[] args )
    { 
        // Create instance of the repository implementation
       /*  AssessmentIntelligenceRepositoryImpl repo = new AssessmentIntelligenceRepositoryImpl();
        List<AnnualCandidateResult> results=  repo.getCandidateResults(2, 2015);
        for (AnnualCandidateResult result : results) {

            int candidateId = result.getCandidateId();
            int score = result.getScore();
            System.out.println("Candidate ID: " + candidateId + "Score: " + score);
        }*/

        EvaluationCriteria evc=new EvaluationCriteria("JAVA",2);
        EvaluationCriteriaRepositoryImpl evc1= new EvaluationCriteriaRepositoryImpl();
        EvaluationCriteriaService ser =new EvaluationCriteriaserviceImpl();

        ser.insertCriteria(evc);
        ser.updateSubject(1,7);
        ser.updateCriteria(1, 1);

    }
}
//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app