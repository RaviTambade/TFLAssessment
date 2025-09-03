package com.tap.nirjala.demo.Main;

import java.lang.reflect.Array;
import java.util.ArrayList;

import com.tap.nirjala.demo.Entity.Question;
import com.tap.nirjala.demo.Repository.DbManager;
import com.tap.nirjala.demo.UI.UiManager;

public class App 
{
    public static void main( String[] args )throws Exception
    {
        int choice=0;
        do{
            UiManager.displayMenu();
            choice=UiManager.getUserChoice();
            switch(choice)
            {
                case 1:{
                    ArrayList<Question>questions=new ArrayList<Question>();
                    questions=DbManager.getAll();
                    for(Question q:questions)
                    {
                        System.out.println(q);
                    }
                }
                break;

                case 2:
                {
                    Question question=UiManager.getInputQuestion();
                    boolean status=DbManager.insert(question);
                    if(status)
                    {
                        UiManager.successsful();
                    }
                    else{
                        UiManager.failed();
                    }
                }
                break;
                
                case 3:
                {
                    int id =UiManager.getInputId();
                    Question question=UiManager.getInputQuestion();
                    boolean status=DbManager.update(id, question);
                    if(status)
                    {
                        UiManager.successsful();
                    }
                    else{
                        UiManager.failed();
                    }
                }
                break;

                case 4:
                {
                    int id=UiManager.getInputId();
                    boolean status=DbManager.delete(id);
                    if(status)
                    {
                        UiManager.successsful();
                    }
                    else{
                        UiManager.failed();
                    }
                }
                break;

                case 5:
                
                    UiManager.thankyoumsg();
                    System.exit(0);
                
                break;

                case 6:
                   UiManager.wrongChoice();
            }    
        }
        while(choice!=5);
    }
}
