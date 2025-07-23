package com.tap.repo.Controllers;

import com.tap.repo.Services.StudentService;
import com.tap.repo.Repository.StudentRepository;
import com.tap.repo.Entity.*;
import java.util.*;

public class StudentController {
    public void insert(StudentService ss,StudentRepository sr){
        ss.insert(sr);
    }

    public void update(StudentService ss,StudentRepository sr,int rollno){
        ss.update(sr, rollno);
    }

    public void delete(StudentService ss,StudentRepository sr,int rollno){
        ss.delete(sr, rollno);
    }

    public ArrayList<Student> showAll(StudentService ss,StudentRepository sr){
        ArrayList<Student> students=new ArrayList<Student>();
        students=ss.showAll(sr);
        return students;
    }

    public void showById(StudentService ss,StudentRepository sr,int rollno){
        ss.showById(sr, rollno);
    }
}
