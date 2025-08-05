package com.transflower.tflassessment.demo;
import com.transflower.tflassessment.demo.entities.*;
import com.transflower.tflassessment.demo.repositories.PersonRepository;
import com.transflower.tflassessment.demo.repositories.PersonRepositoryImpl;
import com.transflower.tflassessment.demo.services.*;

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

    }
}
