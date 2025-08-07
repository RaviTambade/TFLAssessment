package com.transflower.tflassessment.demo;

import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.AuthRepositoryImpl;

public class App {
    public static void main(String[] args) {
        // Create instance of the repository implementation
        // AssessmentIntelligenceRepositoryImpl repo = new
        // AssessmentIntelligenceRepositoryImpl();
        // List<AnnualCandidateResult> results= repo.getCandidateResults(2, 2015);
        // for (AnnualCandidateResult result : results) {

        // int candidateId = result.getCandidateId();
        // int score = result.getScore();
        // System.out.println("Candidate ID: " + candidateId + "Score: " + score);
        // }

        AuthRepositoryImpl auth = new AuthRepositoryImpl();

        User user = auth.getUserWithRolesByEmail("nirjala.naik@example.com", "12345");
        int id = user.getId();
        String aadharId = user.getAadharId();
        String email = user.getEmail();
        String password = user.getPassword();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();
        String contactNumber = user.getContactNumber();

        for (UserRole userRole : user.getUserRoles()) {

            Role r = userRole.getrole();
            // System.out.println("ID: " + id + ", Aadhar ID: " + aadharId + ", Email: " +
            // email + ", Password: " + password +
            // ", Role: " + r.getName() + ", First Name: " + firstName + ", Last Name: " +
            // lastName +
            // ", Contact Number: " + contactNumber);

            System.out.println("ID: " + id);
            System.out.println("Aadhar ID: " + aadharId);
            System.out.println("Email: " + email);
            System.out.println("Password: " + password);
            System.out.println("Role: " + r.getName());
            System.out.println("First Name: " + firstName);
            System.out.println("Last Name: " + lastName);
            System.out.println("Contact Number: " + contactNumber);

        }

    }
}

// EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
// evc.updateSubject();
// evc.

// mvn clean install
// mvn package
// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"

// mvn clean install
// mvn package
// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"
