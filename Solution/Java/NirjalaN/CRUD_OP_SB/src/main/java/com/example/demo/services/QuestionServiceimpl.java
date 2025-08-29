package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.services.*;
import com.example.demo.repositories.DbManager;
@Service
public class QuestionServiceimpl implements QuestionInterface{

    @Override
    public ArrayList<Question>getAll()
    {
        try{
            return DbManager.getAll();
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public boolean insert(Question q)
    {
        try{
            return DbManager.insert(q);
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean update(int IdRoBeUpdate,Question q)
    {
         try{
            return DbManager.update(IdRoBeUpdate, q);
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean delete(int idToBeDelete)
    {
         try{
            return DbManager.delete(idToBeDelete);
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }



}