package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.NewQuestion;
import com.transflower.tflassessment.demo.entities.Question;
import com.transflower.tflassessment.demo.entities.QuestionDetails;
import com.transflower.tflassessment.demo.entities.QuestionTitle;
import com.transflower.tflassessment.demo.entities.SubjectQuestion;


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
        try(
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
                            String question=resultset.getString("question");
                            String subject=resultset.getString("subject");
                            String criteria=resultset.getString("criteria");
                            QuestionDetails questiondetails=new QuestionDetails(id,question,subject,criteria);
                            questions.add(questiondetails);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    for(QuestionDetails questiondetails:questions)
                        {
                        System.out.println(questions);
                        }

        return questions;
    }



    @Override
    public  List<Question> getQuestions(int testId){
        return null;
    }
    @Override
    public boolean updateAnswer(int id, String answerKey){
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
            return false;
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
                question.setAnswerKey(result.getString("answerkey"));
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
            String query = "SELECT evaluationcriterias.title FROM evaluationcriterias INNER JOIN questionbank ON questionbank.evaluationcriteriaid = evaluationcriterias.id INNER JOIN subjects ON questionbank.subjectid = evaluationcriterias.subjectid WHERE subjects.title = ? AND questionbank.id = ?";
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



    @Override
    public boolean updateAnswer(int id, char answerKey) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateAnswer'");
    }
    
}










