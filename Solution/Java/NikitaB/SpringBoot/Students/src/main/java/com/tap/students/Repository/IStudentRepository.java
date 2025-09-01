package com.tap.students.Repository;

import java.util.List;

import com.tap.students.Entity.Student;

public interface IStudentRepository {
    void create();
    void update();
    List<String> display();
    void delete();
    Student getById(int id);
}
