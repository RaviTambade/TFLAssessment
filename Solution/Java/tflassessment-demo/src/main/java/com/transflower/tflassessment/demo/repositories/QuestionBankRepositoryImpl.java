package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.util.*;
import com.transflower.tflassessment.demo.entities.*;


public class QuestionBankRepositoryImpl implements QuestionBankRepository {

    private String URL="jdbc:mysql://localhost:3306/tflecommerce";
    private String USERNAME="root";
    private String PASSWORD="password";

    @Override
    public  List<QuestionTitle> getAllQuestions(){

        List<QuestionTitle> questions = new ArrayList<>();
        String query = "SELECT * FROM questionbank";

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) 
             {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String title = resultSet.getString("title");
                QuestionTitle questiontitle=new QuestionTitle(id,title);
                questions.add( questiontitle);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        for(QuestionTitle questiontitle:questions)
        {
           System.out.println(questions);
        }
        return questions;
    }
    
    @Override
    public  List<SubjectQuestion> getQuestionsBySubject(int id){
        List<SubjectQuestion> questions = new ArrayList<>();
        String query = "SELECT questionbank.id AS questionid, questionbank.title AS question, subjects.title AS subject, subjects.id AS subjectid FROM questionbank JOIN subjects ON questionbank.subjectid=subjects.id WHERE subjects.id=?";

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                SubjectQuestion subjectquestion = new SubjectQuestion();
                subjectquestion.setQuestionId(resultSet.getInt("questionid"));
                subjectquestion.setQuestion(resultSet.getString("question"));
                subjectquestion.setSubjectId(resultSet.getInt("subjectid"));
                subjectquestion.setSubject(resultSet.getString("subject"));
                questions.add(subjectquestion);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return questions;
       
    }
    @Override
    public  List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId){
        // // List<QuestionDetails> questions=new ArrayList<>();
        // String query="select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria from questionbank, subjects,evaluationcriterias where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id and subjects.id=@SubjectId and evaluationcriterias.id=? " ;
        // try(
        //     Connection connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
        //     PreparedStatement statement=connection.prepareStatement(query))
        //     {
        //         // statement.setInt(2, subjectId);
        //         // statement.setInt(9, criteriaId);
        //         ResultSet resultset

        //     }
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










