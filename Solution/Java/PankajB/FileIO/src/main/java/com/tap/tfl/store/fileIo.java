package com.tap.tfl.store;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import com.tap.tfl.Entity.question;

public class fileIo {

    //UIManager ui = new UIManager();

    public void writeFile(List<question> questions) {
        try {
            FileOutputStream fout = new FileOutputStream("D:\\java-fileIO\\FileIO\\src\\main\\java\\com\\tap\\tfl\\store\\fileinput.txt");
            ObjectOutputStream oos = new ObjectOutputStream(fout);
            //ui.getData(q);
            oos.writeObject(questions);
            oos.close();
            fout.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<question> readFile() throws Exception {
        //question q = new question();
        List<question> readList = new ArrayList<>();
        try {
            //questionBank writeqb = new questionBank();
            FileInputStream fin = new FileInputStream("D:\\java-fileIO\\FileIO\\src\\main\\java\\com\\tap\\tfl\\store\\fileinput.txt");
            ObjectInputStream ois = new ObjectInputStream(fin);
            //int flag = 0;
            //while (ois.readObject() != null) {
            // do {
            //     q = (question) ois.readObject();
            //     if (q == null) {
            //         flag = 1;
            //     }
            //     writeqb.writeIntoList(q);
            // } while (flag == 0); //while(q != null) tried
            //}
            readList = (List<question>) ois.readObject();
            ois.close();
            fin.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return readList;
    }
}
