package com.tap.assesment.Store;

import com.tap.assesment.UI.*;
import java.util.*;
import com.tap.assesment.Entity.Question;
import java.io.*;

public class fileio {
    private String filename="Question.txt";
    UIManager ui=new UIManager();
   
    public void writeToFile(ArrayList<Question> questions) {
        try{
        FileOutputStream write=new FileOutputStream(filename);
        ObjectOutputStream outFile=new ObjectOutputStream(write);
        outFile.writeObject(questions);
        System.out.println("Data inserted sucessfully");
        outFile.close();
        write.close();

        }catch(Exception e){
            e.printStackTrace();
    }
    
    }
    public ArrayList<Question> readFromFile() {
        ArrayList<Question> questions=new ArrayList<Question>();
        try{
            FileInputStream read=new FileInputStream(filename);
            ObjectInputStream inFile=new ObjectInputStream(read);
            questions=(ArrayList<Question>)inFile.readObject();
            System.out.println("Data displayed sucessfully");
            inFile.close();
            read.close();
        }catch(Exception e){
            e.printStackTrace();
        }
        
        return questions;
}
}