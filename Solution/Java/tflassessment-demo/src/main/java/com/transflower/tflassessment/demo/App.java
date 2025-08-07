package com.transflower.tflassessment.demo;

import com.transflower.tflassessment.demo.entities.User;
import com.transflower.tflassessment.demo.entities.UserRole;
import com.transflower.tflassessment.demo.repositories.AuthRepositoryImpl;

public class App {
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

        AuthRepositoryImpl auth=new AuthRepositoryImpl();
     User user = auth.getUserWithRolesByEmail("kajal.ghule@example.com", "12345");
    for (UserRole userRole : user.getUserRoles()) {
        String email = userRole.getEmail();
        String password = userRole.getPassword();
        System.out.println("User Email:" + email + " User Password:" + password);
    }

        
        
       }

}

// EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
// evc.updateSubject();
// evc.

// mvn clean install
// mvn package
// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"

// These are commands to used for compiling, running java app