package com.tap.assesment.UI;
import java.util.*;
import com.tap.assesment.Entity.*;

public class UIManager {
    public void displayMenu(){
        System.out.println("*****************************************************");
        System.out.println("1)Create the Question");
        System.out.println("2)Update the Question");
        System.out.println("3)Delete the Question");
        System.out.println("4)View all the questions");
        System.out.println("5)Exit");
        System.out.println("*****************************************************");
    }

    public int getChoice(){
        System.out.println("Enter your choice : ");
        Scanner sc=new Scanner(System.in);
        int choice=sc.nextInt();
        return choice;
    }

    public int getId(){
        System.out.println("Enter the id : ");
        Scanner sc=new Scanner(System.in);
        int id=sc.nextInt();
        return id;
    }

    public void displayAllQuestion(ArrayList<Question> questions){
        for(Question question:questions){
            String alldata=question.toString();
            System.out.println(alldata);
            // System.out.println("id: "+question.getId());
        }
    }
}
