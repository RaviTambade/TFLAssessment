package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.*;
<<<<<<< HEAD
import com.transflower.tflassessment.demo.repositories.AuthRepositoryImpl;
=======
import com.transflower.tflassessment.demo.repositories.AssessmentIntelligenceRepositoryImpl;
>>>>>>> f1cc438a4c6f15bedcf468a0eb4c795a20a0c855
import com.transflower.tflassessment.demo.repositories.PersonRepository;
import com.transflower.tflassessment.demo.repositories.PersonRepositoryImpl;
import com.transflower.tflassessment.demo.services.*;

public class App 
{
    public static void main( String[] args )
    {
        // Person p1=new Person();
        // System.out.println(p1);
        // System.out.println( "Hello World!" );
<<<<<<< HEAD

        // PersonRepository repo=new PersonRepositoryImpl();
        // PersonService svc=new PersonServiceImpl(repo);
        // svc.getAll();
         AuthRepositoryImpl auth=new AuthRepositoryImpl();
         auth.getUserWithRolesByEmail("kajal.ghule@example.com", "12345");


=======

        // PersonRepository repo=new PersonRepositoryImpl();
        // PersonService svc=new PersonServiceImpl(repo);
        // svc.getAll();

        // Create instance of the repository implementation
        AssessmentIntelligenceRepositoryImpl repo = new AssessmentIntelligenceRepositoryImpl();

        // Call the method with sample candidateId and year
        repo.getCandidateResults(2, 2024);
>>>>>>> f1cc438a4c6f15bedcf468a0eb4c795a20a0c855

    }
}

//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app