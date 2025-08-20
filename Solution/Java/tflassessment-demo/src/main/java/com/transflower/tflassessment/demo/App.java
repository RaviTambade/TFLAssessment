package com.transflower.tflassessment.demo;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepositoryImpl;

<<<<<<< HEAD
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
=======
public class App {
public static void main(String[] args) throws InterruptedException {
        EvaluationCriteriaRepositoryImpl er = new EvaluationCriteriaRepositoryImpl();

        try {
             System.out.println("Welcome java");
             EvaluationCriteria evc1 = new EvaluationCriteria(2, "c#", 5);
             er.updateSubject(2, 5);

<<<<<<< HEAD
             EvaluationCriteria evc2 = new EvaluationCriteria(39, "c", 7);
             er.insertCriteria(evc2);

            EvaluationCriteria evc3 = new EvaluationCriteria(4, "what is java", 7);
             er.updateCriteria(4, 7);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            
            try {
                com.mysql.cj.jdbc.AbandonedConnectionCleanupThread.checkedShutdown();
            } catch (NoClassDefFoundError err) {
                System.err.println("MySQL AbandonedConnectionCleanupThread class not found: " + err.getMessage());
            }
        }
=======
        System.out.println("Welcome to transflower");
>>>>>>> 41afbd6b65e21b4b9f89c2b8c8b8a9f4f431476d
>>>>>>> db47f8c6f99ca0ee88a6b42b1728d1aa91aaae5f
    }
}

