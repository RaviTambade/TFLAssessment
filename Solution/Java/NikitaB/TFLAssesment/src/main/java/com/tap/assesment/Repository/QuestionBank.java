package com.tap.assesment.Repository;

import java.util.*;
import com.tap.assesment.Entity.*;
import com.tap.assesment.UI.*;

public class QuestionBank {
    private ArrayList<Question> questions=new ArrayList<Question>();
    private String quest;
    private String a;
    private String b;
    private String c;
    private String d;
    private char option;
    private String sub;
    private int marks;
    

    public void CreateQuestion(){

        Scanner sc=new Scanner(System.in);

        UIManager ui=new UIManager();
        Question question=new Question();

        System.out.println("Enter id : ");
        int id=sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the question you want to create :");
        quest=sc.nextLine();
        System.out.println("Enter the option A : ");
        a=sc.nextLine();
        System.out.println("Enter the option B : ");
        b=sc.nextLine();
        System.out.println("Enter the option C : ");
        c=sc.nextLine();
        System.out.println("Enter the option D : ");
        d=sc.nextLine();
        System.out.println("Enter the correct option : ");
        option=sc.next().charAt(0);
        sc.nextLine();
        System.out.println("Enter the subject : ");
        sub=sc.nextLine();
        System.out.println("Enter the marks per question : ");
        marks=sc.nextInt();

        question.setId(id);
        question.setTitle(quest);
        question.setOptionA(a);
        question.setOptionB(b);
        question.setOptionC(c);
        question.setOptionD(d);
        question.setCorrectAnswer(option);
        question.setSubject(sub);
        question.setEvaluationCriteria(marks);
        
        questions.add(question);
    }

    public void updateQuestion(int id){

        Scanner sc = new Scanner(System.in);
        
        UIManager ui = new UIManager();
       for(Question question : questions){
            if(question.getId() == id){
                int updateid=question.getId();
                System.out.println("You choose to update the question with id : "+id);
                questions.remove(question);

                Question newQuestion = new Question();
                newQuestion.setId(updateid);
                System.out.println("Enter the updated question : ");
                newQuestion.setTitle(sc.nextLine());
                System.out.println("Enter the option A : ");
                newQuestion.setOptionA(sc.nextLine());
                System.out.println("Enter the option B : ");
                newQuestion.setOptionB(sc.nextLine());
                System.out.println("Enter the option C : ");
                newQuestion.setOptionC(sc.nextLine());
                System.out.println("Enter the option D : ");
                newQuestion.setOptionD(sc.nextLine());
                System.out.println("Enter the correct option : ");
                newQuestion.setCorrectAnswer(sc.next().charAt(0));
                System.out.println("Enter the subject : ");
                newQuestion.setSubject(sc.nextLine());
                sc.nextLine();
                System.out.println("Enter the passing marks : ");
                newQuestion.setEvaluationCriteria(sc.nextInt());
                // questions.set(questions.indexOf(question), question);
                questions.add(newQuestion);
            }
        }
    }
        

    public void deleteQuestion(int id){
        try{
            for(int i=0;i<questions.size();i++){
                if(questions.get(i).getId() == id){
                    questions.remove(i);
                }
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }


    public void readAllQuestion(){
        for(Question q:questions){
            System.out.println(q.getId()+") "+q.getTitle()+" a) "+q.getOptionA()+" b) "+q.getOptionB()+" c) "+q.getOptionC()+" d)"+q.getOptionD()+" Correct answer : "+q.getCorrectAnswer()+" Marks :"+q.getEvaluationCriteria());
        }
       
    }
}
