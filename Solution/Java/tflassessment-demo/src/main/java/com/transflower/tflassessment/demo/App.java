<<<<<<< HEAD

// public class App {

//     public static void main(String[] args) throws Exception {
       
//         System.out.println("Welcome to transflower");
//     }
// }




=======
package com.transflower.tflassessment.demo;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;
import com.transflower.tflassessment.demo.repositories.InterviewRepositoryImpl;
<<<<<<< HEAD
import com.transflower.tflassessment.demo.repositories.GetAllSubjectsImpl;
import com.transflower.tflassessment.demo.repositories.ResultRepositoryImpl;

import static com.transflower.tflassessment.demo.repositories.ResultRepositoryImpl.status1;
=======
import com.transflower.tflassessment.demo.repositories.*;
>>>>>>> cbe737872bdb4053c151d49b802d36e14c36fe00

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

    public static void main(String[] args) throws Exception {

<<<<<<< HEAD
         System.out.println("Welcome to transflower");
         InterviewRepositoryImpl obj1 = new InterviewRepositoryImpl();
         List<InterviewCandidateDetails> icd1 = obj1.getAllInterviewCandidates();
         List<InterviewCandidateDetails> icd2 = obj1.getInterviewedCandidatesSubjects(6);
         InterviewDetails id = obj1.getInterviewDetails(4);
         boolean status1 = obj1.rescheduleInterview(4, LocalDate.of(2022, 12, 23));
         boolean status2 = obj1.rescheduleInterview(3, LocalTime.of(12, 00), LocalDate.of(2032, 07, 23));
         boolean status3 = obj1.rescheduleInterview(2, LocalDate.of(2022, 07, 23));
         boolean status4 = obj1.cancelInterview(2);
         boolean status5 = obj1.changeInterviewer(4, 1);
System.out.println("Subjects from InterviewRepositoryImpl: " Subject2);
        
    
        
        
        
    //     System.out.println("*");
    //     System.out.println(id.toString());
    //     System.out.println("*");
    //     for (InterviewCandidateDetails icd : icd1) {
    //         System.out.println(icd);
    //     }
    //     for (InterviewCandidateDetails icd : icd2) {
    //         System.out.println(icd);
    //     }
=======
        System.out.println("Welcome to transflower");
>>>>>>> 41afbd6b65e21b4b9f89c2b8c8b8a9f4f431476d
>>>>>>> cbe737872bdb4053c151d49b802d36e14c36fe00
    }
}
>>>>>>> 3173487a655a00882400c373282e250444d1b2c9
