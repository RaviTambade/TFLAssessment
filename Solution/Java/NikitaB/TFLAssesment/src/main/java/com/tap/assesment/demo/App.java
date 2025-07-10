package com.tap.assesment.demo;
import com.tap.assesment.Repository.QuestionBank;
import com.tap.assesment.Store.*;
import com.tap.assesment.UI.UIManager;
import java.util.*;
import com.tap.assesment.Entity.*;

public class App 
{
    public static void main( String[] args )
    {
       QuestionBank qBank=new QuestionBank();
       UIManager ui=new UIManager();
       fileio file=new fileio();
       DBManager db=new DBManager();
       ArrayList<Question> questions=new ArrayList<Question>();
       //questions=file.readFromFile();
       int choice;
       do{ 
         ui.displayMenu();
         choice=ui.getChoice();
         switch(choice){
            case 1:{
                     System.out.println("*****************************************************");
                     System.out.println("You choose to create a question");
                     System.out.println("*****************************************************");
                     qBank.CreateQuestion();
                     questions=qBank.readAllQuestion();
                     System.out.println("*****************************************************");
                     file.writeToFile(questions);
            }
           
            break;

            case 2:
            {
                int id=ui.getId();
                System.out.println("*****************************************************");
                System.out.println("You choose to update a question");
                System.out.println("*****************************************************");
                //qBank.updateQuestion(id);
                //questions=qBank.readAllQuestion();
                //file.writeToFile(questions);
                db.update();
            }
            break;

            case 3:
            {
                int id=ui.getId();
                System.out.println("*****************************************************");
                System.out.println("You choose to delete a question with id : "+id);
                qBank.deleteQuestion(id);
                System.out.println("*****************************************************");
                questions=qBank.readAllQuestion();
                file.writeToFile(questions);
            }
            break;

            case 4:{
                    System.out.println("*****************************************************");
                    System.out.println("You choose to view all question");
                    System.out.println("*****************************************************");
                    //qBank.readAllQuestion();
                    //questions=file.readFromFile();
                    //ui.displayAllQuestion(questions);
                    db.display();
                    System.out.println("*****************************************************");
            }
            
            break;

         
            case 5:
            System.out.println("************Thanks for visiting************");
            break;

            default:
            System.out.println("Invalid choice");
            break;
        }

       }while(choice!=5);
    }
}
