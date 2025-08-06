package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import com.transflower.tflassessment.demo.entities.*;


public class QuestionBankRepositoryImpl implements QuestionBankRepository {
    public String URL="jdbc:mysql://localhost:3306/tflassessment";
    public String USERNAME="root";
    public String PASSWORD="password";
    public Connection connection;
    public String query;

    @Override
    public  List<QuestionTitle> getAllQuestions(){
        ArrayList <QuestionTitle> questions=new ArrayList<>();
        try {
            connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
        Statement statement=connection.createStatement();
        query="SELECT * FROM questiobank";
        ResultSet resultSet=statement.executeQuery(query);
            
        while (resultSet.next()) {
           int id=resultSet.getInt("id");
           String title=resultSet.getString("title");
           QuestionTitle questionTitle=new QuestionTitle(id,title);
           questions.add(questionTitle);
            
        }
      
        } catch (Exception e) {
            e.printStackTrace();
        }
        for (QuestionTitle questionTitle : questions) {
            System.out.println(questionTitle);
        }
        return questions;

    }

    
    @Override
    public  List<SubjectQuestion> getQuestionsBySubject(int id){
        List<SubjectQuestion> subjectQuestions=new ArrayList<>();
        try {
            connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
            Statement statement=connection.createStatement();
            query="select questionbank.id as questionid, questionbank.title as question, subjects.title as subject, subjects.id as subjectid from questionbank, subjects where questionbank.subjectid=subjects.id and subjects.id=@SubjectId";
            
        } catch (Exception e) {
            // TODO: handle exception
        }   


        
        return null;
    }
    @Override
    public  List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId){
        return null;
    }
    @Override
    public  List<QuestionDetails> getQuestionsWithSubjectAndCriteria(){
        return null;
    }
    @Override
    public  List<Question> getQuestions(int testId){
        return null;
    }
    @Override
    public boolean updateAnswer(int id,char answerKey){
        return false;
    }

    @Override
    public  Question getQuestion(int questionId){
        return null;
    }
    @Override
    public  boolean updateQuestionOptions(int id,Question options){
        return false;
    }
    @Override
    public  boolean updateSubjectCriteria(int questionId,Question question){
        return false;
    }
    @Override
    public  boolean insertQuestion(NewQuestion question){
        return false;
    }
    @Override
    public  String getCriteria(String subject, int questionId){
        return null;
    }
    
}
