package com.tap.tfl.Repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

import com.tap.tfl.Entity.question;
import com.tap.tfl.store.fileIo;
import com.tap.tfl.ui.UIManager;

public class questionBank {

    Scanner scanner = new Scanner(System.in);
    List<question>  questionList = new ArrayList<>();
    UIManager manager = new UIManager();

    public void insertQuestion(question question1) {
        if (question1 == null) {
            System.out.println("No question present");
        }
        writeIntoList(question1);
        //System.out.println("*******************");
    }

    public void updateQuestion(int questionId) {
        //System.out.println("questionId " + questionId);
        for (question q : questionList) {

            //System.out.println("DATA : " + q.getQuestionId() + " " + questionId);
            if (q.getQuestionId() == questionId) {
                question q1 = manager.setData(); // new question
                ///System.out.println("q1 :: " + q1.getTitle());
                q.setTitle(q1.getTitle());
                q.setOptionA(q1.getOptionA());
                q.setOptionB(q1.getOptionB());
                q.setOptionC(q1.getOptionC());
                q.setOptionD(q1.getOptionD());
                q.setSubject(q1.getSubject());
                q.setCorrectAnswer(q1.getCorrectAnswer());
                q.setEvaluationCriteria(q1.getEvaluationCriteria());
                //uestionList.set(questionId,q1);
            }
        }

    }

    public void removeQuestion(int questionId) {
        // for (question q : questionList) {
        //     if (q.getQuestionId() == questionId) {
        //         questionList.remove(q);
        //     }
        // }
        Iterator<question> itr = questionList.iterator();
        while (itr.hasNext()) { 
            question q = itr.next();
            if (q.getQuestionId() == questionId) {
                itr.remove();
            }
        }
    }

    public void displayById(int questionId) {
        for (question q : questionList) {
            if (q.getQuestionId() == questionId) {
                manager.getData(q);
            }
        }
    }

    public void display() {
        for (question q : questionList) {
            manager.getData(q);
            // System.out.println("Id : " + q.getQuestionId() + " Subject : " + q.getSubject() + " Title : " + q.getTitle() + " Option  A : " + q.getOptionA() + " Option  B : " + q.getOptionB() + " Option  C : " + q.getOptionC() + " Option  D : " + q.getOptionD() + " Correct Answer : " + q.getCorrectAnswer() + " Evaluation Criteria : " + q.getEvaluationCriteria());
        }
    }

    public void readFileAccess() throws Exception {
        fileIo fread = new fileIo();
        fread.readFile();
    }

    public void writeFileAccess() {
        Iterator<question> itrq = questionList.iterator();
        fileIo fwrite = new fileIo();
        while (itrq.hasNext()) {                      //this block has to be checked
            fwrite.writeFile(itrq.next());
        }
    }

    public void writeIntoList(question q) {
        //manager.getData(q);
        questionList.add(q);
        // for (question q1 : questionList) {      to check whether object is saved into the list
        //     manager.getData(q1);
        //     // System.out.println("Id : " + q.getQuestionId() + " Subject : " + q.getSubject() + " Title : " + q.getTitle() + " Option  A : " + q.getOptionA() + " Option  B : " + q.getOptionB() + " Option  C : " + q.getOptionC() + " Option  D : " + q.getOptionD() + " Correct Answer : " + q.getCorrectAnswer() + " Evaluation Criteria : " + q.getEvaluationCriteria());
        // }
    }
}
