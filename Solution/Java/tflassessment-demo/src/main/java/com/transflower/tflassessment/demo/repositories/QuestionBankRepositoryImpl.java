package com.transflower.tflassessment.demo.repositories;

import java.sql.*;
import java.util.*;
import com.transflower.tflassessment.demo.entities.*;


public class QuestionBankRepositoryImpl implements QuestionBankRepository {
    
    private String URL="jdbc:mysql://localhost:3306/assessmentdb";
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

    //     for (QuestionTitle questionTitle : questions) {
    //     System.out.println("ID: " + questionTitle.getId() + " | Title: " + questionTitle.getTitle());
    // }
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
        List<QuestionDetails> questions=new ArrayList<>();
        String query="select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria from questionbank, subjects,evaluationcriterias where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id and subjects.id=? and evaluationcriterias.id=? " ;
       try (
            Connection connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement statement=connection.prepareStatement(query))
            {
                statement.setInt(1, subjectId);
                statement.setInt(2, criteriaId);
                ResultSet resultset=statement.executeQuery();
                while(resultset.next())

                {
                    QuestionDetails questiondetails=new QuestionDetails();
                    questiondetails.setId(resultset.getInt("id"));
                    questiondetails.setId(resultset.getInt("question"));
                    questiondetails.setId(resultset.getInt("subject"));
                    questiondetails.setId(resultset.getInt("criteria"));
                    questions.add(questiondetails);
                }
            }
            catch(SQLException e)
            {
                System.out.println(e);
            }
                return questions;
            
         }

    @Override
    public  List<QuestionDetails> getQuestionsWithSubjectAndCriteria(){
        
        return null;
    }
    @Override
    public  List<Question> getQuestions(int testId){
        
        List<Question> questions=new ArrayList<>();
        String query="select * from questionbank where id=? ";
        try (
            Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement preparedStatement=connection.prepareStatement(query))
            {
                preparedStatement.setInt(1, testId);
                ResultSet resultSet=preparedStatement.executeQuery();
                while (resultSet.next()) {
                    Question question = new Question();
                    question.setId(resultSet.getInt("id"));
                    question.setSubjectId(resultSet.getInt("SubjectId"));
                    question.setTitle(resultSet.getString("Title"));
                    question.setA(resultSet.getString("Option_A"));
                    question.setB(resultSet.getString("Option_B"));
                    question.setC(resultSet.getString("Option_C"));
                    question.setD(resultSet.getString("OPtion_D"));
                    //Answerkey is defined as char in Question.java; unable to solve this error
                    //question.setAnswerKey(resultSet.getString("Answer_key"));
                    question.setEvaluationCriteriaId(resultSet.getInt("Evaluation_CriteriaId"));
                    questions.add(question);
                    
                }

        } catch (Exception e) {
            e.printStackTrace();

            
        }
        return questions;
    }
    @Override
    public boolean updateAnswer(int id,char answerKey){
        String query = "UPDATE questionbank SET answerkey=? WHERE id=?";
            try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
                PreparedStatement preparedStatement = connection.prepareStatement(query)) 
                {
                    preparedStatement.setString(1, String.valueOf(answerKey));
                    preparedStatement.setInt(2, id);
                    return preparedStatement.executeUpdate() > 0;
                }
            catch (Exception e) {
                e.printStackTrace();
            }
            return false;
    }
    

    @Override
    public  Question getQuestion(int questionId){
        String query = " SELECT" + //
                        "                testquestions.id AS testquestionid, \r\n" + //
                        "                questionbank.id AS questionbankid,\r\n" + //
                        "                questionbank.subjectid,\r\n" + //
                        "                questionbank.title,\r\n" + //
                        "                questionbank.a,\r\n" + //
                        "                questionbank.b,\r\n" + //
                        "                questionbank.c,\r\n" + //
                        "                questionbank.d,\r\n" + //
                        "                questionbank.evaluationcriteriaid\r\n" + //
                        "            FROM questionbank \r\n" + //
                        "            INNER JOIN testquestions \r\n" + //
                        "                ON testquestions.questionbankid = questionbank.id \r\n" + //
                        "            WHERE testquestions.testid = ?";

        try (
            Connection connection=DriverManager.getConnection(URL,USERNAME , PASSWORD);
            PreparedStatement preparedStatement=connection.prepareStatement(query);
        ){
            preparedStatement.setInt(1,questionId );
            preparedStatement.executeQuery();
        } catch (SQLException e) {
           
            e.printStackTrace();
        }

        return ;
    }
    @Override
    public  boolean updateQuestionOptions(int id,Question options) {
        boolean status=false;
         String query = "UPDATE questionbank SET a=?, b=?, c=?, d=?, answerkey=? WHERE id=?";
        try (
            Connection connection=DriverManager.getConnection(URL,USERNAME , PASSWORD);
            PreparedStatement preparedStatement=connection.prepareStatement(query);
        )
        {
            
            preparedStatement.setString(1,options.getA());
            preparedStatement.setString(2,options.getB());
            preparedStatement.setString(3, options.getC());
            preparedStatement.setString(4, options.getD());
            //char is converted to String
            preparedStatement.setString(5,String.valueOf(options.getAnswerKey()));
            preparedStatement.setInt(6,options.getId());
            preparedStatement.executeUpdate();
            status=true;
            
        } catch (Exception e) {
           e.printStackTrace();
        }
       return status;
    }
    @Override
    public  boolean updateSubjectCriteria(int questionId,Question question){
        boolean status=false;
        String query="update questionbank set evaluationcriteriaid=? ,subjectid=? where id =?";
        try (
            Connection connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement preparedStatement=connection.prepareStatement(query);)
            {
                preparedStatement.setInt(1,question.getEvaluationCriteriaId());
                preparedStatement.setInt(2, question.getSubjectId());
                preparedStatement.setInt(3, question.getId());
                preparedStatement.executeUpdate();
                status=true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
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










