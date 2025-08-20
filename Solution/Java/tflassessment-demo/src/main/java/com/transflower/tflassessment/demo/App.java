package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.*;
import java.util.*;

public class App 
{
    public static void main( String[] args )
    { 
        // Create instance of the repository implementation
        AssessmentRepository repository = new AssessmentRepositoryImpl();
        
         // Use a real ID from your DB

        List<Assessment> assessments = (List<Assessment>) repository.getDetails(5);

        if (assessments.isEmpty()) {
            System.out.println("No assessment found with ID: ");
        } else {
            for (Assessment a : assessments) {
                System.out.println("Assessment ID: " + a.getId());
                System.out.println("Test Name: " + a.getTestName());
                System.out.println("Subject ID: " + a.getSubjectId());
                System.out.println("Subject Expert ID: " + a.getSubjectExpertId());
                System.out.println("Creation Date: " + a.getCreationDate());
                // System.out.println("Modification Date: " + a.getModificationDate());
                // System.out.println("Schedule Date: " + a.getScheduleDate());
                System.out.println("Status: " + a.getStatus());
                System.out.println("Passing Level: " + a.getPassingLevel());
                System.out.println("Subject: " + a.getSubject());
                System.out.println("Expert First Name: " + a.getFirstName());
                System.out.println("Expert Last Name: " + a.getLastName());
                System.out.println("Duration: " + a.getDuration());
                System.out.println("--------------------------------------------------");

        // EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
        // evc.updateSubject();
        // evc.
            }
        }
    }
}
//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app