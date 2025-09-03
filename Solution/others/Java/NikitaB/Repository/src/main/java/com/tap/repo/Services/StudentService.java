package com.tap.repo.Services;

import com.tap.repo.Repository.StudentRepository;
import java.util.*;
import com.tap.repo.Entity.*;

public class StudentService {
    public void insert(StudentRepository sr){
        sr.insertMarks();
    }

    public void update(StudentRepository sr,int rollno){
        sr.updateMarks(rollno);
    }

    public void delete(StudentRepository sr,int rollno){
        sr.deleteMarks(rollno);
    }

    public ArrayList<Student> showAll(StudentRepository sr){
        ArrayList<Student> students=new ArrayList<Student>();
        students=sr.displayAllResult();
        return students;
    }

    public void showById(StudentRepository sr,int rollno){
        sr.displayOneResult(rollno);
    }

}
