package com.tap.tfl.store;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import com.tap.tfl.Entity.question;
import com.tap.tfl.Repository.questionBank;
import com.tap.tfl.ui.UIManager;

public class fileIo {
    
    UIManager ui = new UIManager();
    public void writeFile(question q) {
        try {
            FileOutputStream fout = new FileOutputStream("D:\\TFLAssessment\\Solution\\Java\\PankajB\\FileIO\\src\\main\\java\\com\\tap\\tfl\\store\\fileinput.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fout);
            ui.getData(q);
            oos.writeObject(q);
            oos.close();
            fout.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public question readFile() throws Exception {
        question q = new question();
        try {
            questionBank writeqb = new questionBank();
            FileInputStream fin = new FileInputStream("D:\\TFLAssessment\\Solution\\Java\\PankajB\\FileIO\\src\\main\\java\\com\\tap\\tfl\\store\\fileinput.txt");
            ObjectInputStream ois = new ObjectInputStream(fin);
            int flag = 0;
            //while (ois.readObject() != null) {
            do {
                q = (question) ois.readObject();
                if (q == null) {
                    flag = 1;    
                }
                writeqb.writeIntoList(q);
            } while (flag == 0); //while(q != null) tried
            //}
            ois.close();
            fin.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return q;
    }
}
