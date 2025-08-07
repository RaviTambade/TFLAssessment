package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.*;
import java.sql.*;
import java.util.*;


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
        String query="select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria\r\n" + 
                        "from questionbank, subjects,evaluationcriterias\r\n" + 
                        "where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id\r\n" + 
                        "and subjects.id=? and evaluationcriterias.id=? " ;
        try(
            Connection connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement statement=connection.prepareStatement(query))
            {
                statement.setInt(1, subjectId);
                statement.setInt(2, criteriaId);
                ResultSet resultSet=statement.executeQuery();
                while(resultSet.next())
                {
                    QuestionDetails questiondetails=new QuestionDetails();
                    int id = resultSet.getInt("id");
                    String title = resultSet.getString("title");
                    String subject = resultSet.getString("subject");
                    String criteria = resultSet.getString("criteria");
                    QuestionDetails questionDetails = new QuestionDetails(id, title, subject, criteria);
                    questions.add(questionDetails);
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
        List<QuestionDetails> questions =new ArrayList<>();
        String query="select questionbank.id, questionbank.title, subjects.title as subject ,evaluationcriterias.title as criteria\r\n" + 
                        "                            from questionbank, subjects,evaluationcriterias\r\n" + 
                        "                            where questionbank.subjectid=subjects.id and questionbank.evaluationcriteriaid=evaluationcriterias.id ";
                    try (
                        Connection connection=DriverManager.getConnection(URL,USERNAME,PASSWORD);
                        Statement statement=connection.createStatement();
                        ResultSet resultset=statement.executeQuery(query))
                    {
                        while(resultset.next())
                        {
                            int id= resultset.getInt("id");
                            String title=resultset.getString("title");
                            String subject=resultset.getString("subject");
                            String criteria=resultset.getString("criteria");
                            QuestionDetails questiondetails=new QuestionDetails(id,title,subject,criteria);
                            questions.add(questiondetails);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }

        return questions;
    }



    @Override
    public  List<Question> getQuestions(int testId){
        return null;
    }
    @Override
    public boolean updateAnswer(int id,char answerKey){
          boolean status=false;
            String query = "UPDATE questionbank SET answerkey=? WHERE id=?";
            try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
                PreparedStatement statement = connection.prepareStatement(query)) 
                {
                    statement.setString(1, String.valueOf(answerKey));
                    statement.setInt(2, id);
                    statement.executeUpdate();
                    status=true;
                   
                }
            catch (Exception e) {
                e.printStackTrace();
            }
            return true;
    }



    @Override
    public  Question getQuestion(int questionId){
        Question question=new Question();
        String query="select * from questionbank where id=? ";
         try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
                PreparedStatement statement = connection.prepareStatement(query)) 
          
                {
                statement.setInt(1, questionId);
                ResultSet result = statement.executeQuery();
                if (result.next()) 
                {
                question = new Question();
                question.setId(questionId);
                question.setSubjectId(result.getInt("subjectid"));
                question.setTitle(result.getString("title"));
                question.setA(result.getString("a"));
                question.setB(result.getString("b"));
                question.setC(result.getString("c"));
                question.setD(result.getString("d"));
                question.setAnswerKey(result.getString("answerkey").charAt(0));
                question.setEvaluationCriteriaId(result.getInt("evaluationcriteriaid"));
                }
            }
                catch(Exception e)
                {
                    e.printStackTrace();
                }

        return question;
    }


    @Override
    public  boolean updateQuestionOptions(int id,Question options){
         boolean status=false;
         String query = "UPDATE questionbank SET title=?, a=?, b=?, c=?, d=?, answerkey=? WHERE id=?";
        try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, options.getTitle());
            statement.setString(2, options.getA());
            statement.setString(3, options.getB());
            statement.setString(4, options.getC());
            statement.setString(5, options.getD());
            statement.setString(6, String.valueOf(options.getAnswerKey()));
            statement.setInt(7, id);
            return statement.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }



    @Override
    public  boolean updateSubjectCriteria(int questionId,Question question){
        String query = "UPDATE questionbank SET evaluationcriteriaid=?, subjectid=? WHERE id=?";
        try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, question.getEvaluationCriteriaId());
            statement.setInt(2, question.getSubjectId());
            statement.setInt(3, questionId);
            return statement.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
       
    }

    @Override
    public  boolean insertQuestion(NewQuestion question){
        boolean status=false;
        String query = "INSERT INTO questionbank (subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, question.getSubjectId());
            statement.setString(2, question.getTitle());
            statement.setString(3, question.getA());
            statement.setString(4, question.getB());
            statement.setString(5, question.getC());
            statement.setString(6, question.getD());
            statement.setString(7, String.valueOf(question.getAnswerKey()));
            statement.setInt(8, question.getEvaluationCriteriaId());
            return statement.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }


    @Override
    public  String getCriteria(String subject, int questionId){
            String query = "select evaluationcriterias.title from evaluationcriterias INNER join questionbank on questionbank.evaluationcriteriaid=evaluationcriterias.id\r\n" + 
                           "inner join subjects on questionbank.subjectid= evaluationcriterias.subjectid WHERE subjects.title=? and questionbank.id=?";
            try (Connection connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
                PreparedStatement statement = connection.prepareStatement(query)) {

                statement.setString(1, subject);
                statement.setInt(2, questionId);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    return rs.getString("title");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            return "";
        
    }
    
}










