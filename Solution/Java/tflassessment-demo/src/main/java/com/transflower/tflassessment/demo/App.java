package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.Person;
import com.transflower.tflassessment.demo.repositories.PersonRepository;
import com.transflower.tflassessment.demo.repositories.PersonRepositoryImpl;
import com.transflower.tflassessment.demo.services.PersonService;
import com.transflower.tflassessment.demo.services.PersonServiceImpl;

public class App 
{
    public static void main( String[] args )
    {
        Person p1=new Person();
        System.out.println(p1);
        System.out.println( "Hello World!" );

        PersonRepository repo=new PersonRepositoryImpl();
        PersonService svc=new PersonServiceImpl(repo);
        svc.getAll();

        // EvaluationCriteria evc=new EvaluationCriteria(23,"JAVA",10);
        // evc.updateSubject();
        // evc.

    }
}

//mvn clean install
//mvn package
//mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"


//These are commands to used for compiling, running java app