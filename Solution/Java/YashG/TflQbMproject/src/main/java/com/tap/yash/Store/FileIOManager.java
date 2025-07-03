package com.tap.yash.Store;

import java.io.*;
import java.util.*;
import com.tap.yash.entity.*;
public class FileIOManager {
    
    public String filename = "Question.txt";

    public void saveQuestionsToFile(List<Question> questions) {
        try {

            FileOutputStream fout= new FileOutputStream(filename);

            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fout);

             objectOutputStream.writeObject(questions);

             objectOutputStream.close();


        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    
    public ArrayList<Question> loadQuestionsFromFile() {
        // Implementation for loading questions from a file
        ArrayList<Question> questions = new ArrayList<Question>();
        try (ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(filename))) {
            questions = (ArrayList<Question>) objectInputStream.readObject();
        } catch (Exception e) {
            System.out.println(e);
        }
        return questions;
    }

}


