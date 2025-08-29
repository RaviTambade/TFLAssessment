package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.entities.Question;

public interface QuestionInterface {
    public  ArrayList<Question> getAll();
    public  boolean insert(Question q);
    public  boolean update(int idToBeUpdate,Question q);
    public  boolean delete(int idToBeDelete);


}
