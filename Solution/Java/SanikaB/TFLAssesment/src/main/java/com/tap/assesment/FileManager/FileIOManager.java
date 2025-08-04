package com.tap.assesment.FileManager;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.*;

import com.tap.assesment.Entity.Question;

public class FileIOManager {
    private String fileName="question.dat";

    public void saveToFile(List<Question> questions)
    {
        try
        {
             FileOutputStream fout = new FileOutputStream(fileName);
             ObjectOutputStream objectOutputStream=new ObjectOutputStream(fout);
             objectOutputStream.writeObject(questions);
             objectOutputStream.close();
             fout.close();
             System.out.println("Questions save to file");
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }

    public List<Question> loadFromFile()
    {
        List<Question> questions=new ArrayList<Question>();
        try
        {
             FileInputStream fin = new FileInputStream(fileName);
             ObjectInputStream objectInputStream=new ObjectInputStream(fin);
             questions=(List<Question>)objectInputStream.readObject();
             objectInputStream.close();
             fin.close();
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        return questions;
    }

}
