package com.tap.assesment.demo;
import com.tap.assesment.Repository.QuestionBank;
import com.tap.assesment.UI.UIManager;

public class App 
{
    public static void main( String[] args )
    {
       QuestionBank qBank=new QuestionBank();
       UIManager ui=new UIManager();
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
                     System.out.println("*****************************************************");
            }
           
            break;

            case 2:
            {
                int id=ui.getId();
                System.out.println("*****************************************************");
                System.out.println("You choose to update a question");
                System.out.println("*****************************************************");
                qBank.updateQuestion(id);
            }
            break;

            case 3:
            {
                int id=ui.getId();
                System.out.println("*****************************************************");
                System.out.println("You choose to delete a question with id : "+id);
                qBank.deleteQuestion(id);
                System.out.println("*****************************************************");
            }
            break;

            case 4:{
                    System.out.println("*****************************************************");
                    System.out.println("You choose to view all question");
                    System.out.println("*****************************************************");
                    qBank.readAllQuestion();
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
