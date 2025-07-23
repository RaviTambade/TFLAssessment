package com.tap.repo.Repository;

import com.tap.repo.Entity.*;
import java.util.*;
public interface IStudentRepository {
    void insertMarks();
    void updateMarks(int rollno);
    void deleteMarks(int rollno);
    ArrayList<Student> displayAllResult();
    void displayOneResult(int rollno);
}
