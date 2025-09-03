package com.tap.saloni.Store;

import java.io.*;
import java.util.*;
import com.tap.saloni.Entity.Question;

public class FileIOManager {
    // This class will handle file input/output operations
    // It will provide methods to read from and write to files
    // For example, saving questions to a file or loading questions from a file

    // Placeholder for file operations methods

    public String filename = "Question.txt";

    public void saveQuestionsToFile(List<Question> questions) {
        // Implementation for saving questions to a file
        try {
            FileOutputStream fout=new FileOutputStream(filename);   
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fout);
            objectOutputStream.writeObject(questions);
            objectOutputStream.close();
        } catch (Exception e) {
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
