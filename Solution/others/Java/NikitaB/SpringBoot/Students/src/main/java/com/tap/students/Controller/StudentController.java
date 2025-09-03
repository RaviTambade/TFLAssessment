package com.tap.students.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tap.students.Entity.Student;
import com.tap.students.Repository.StudentRepositoryImpl;


@RestController
public class StudentController {
   
    private StudentRepositoryImpl repo;

    public StudentController(StudentRepositoryImpl repo){
        this.repo=repo;
    }

    @GetMapping("/")
    public String show(){
        return "<h1>Welcome to Student Info page</h1>";
    }

    @GetMapping("/insert")
    public String insert(){
        repo.create();
        return "<h2>Student inserted to the table</h2>";
    }

    @GetMapping("/update")
    public String update(){
        repo.update();
        return "<h2>Student updated in the table</h2>";
    }

    @GetMapping("/delete")
    public String delete(){
        repo.delete();
        return "<h2>Student deleted from the table";
    }

    @GetMapping("/display")
    public List<String> display() {
        return repo.display(); 
    }

    @GetMapping("/id/{id}")
    public Student getById(@PathVariable("id") int id){
        return repo.getById(id);
    }
}
