package com.transflower.tflassessment.repositories;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
@Repository
public class QuestionBankRepositoryImpl implements QuestionBankRepository {
    
    private static Connection connection;
  static {
        try {
            Properties props = new Properties();
            try (InputStream input = QuestionBankRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
                props.load(input);
            }

            String url = props.getProperty("db.url");
            String username = props.getProperty("db.username");
            String encPass = props.getProperty("db.password"); 
            AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower"); 
            String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

            String driver = props.getProperty("db.driver");

            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, pass);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }
  

    @Override
    public List<QuestionTitle> getAllQuestions() {
        List<QuestionTitle> questions = new ArrayList<>();
        String query = "SELECT * FROM questionbank";

        try (
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String title = resultSet.getString("title");
                questions.add(new QuestionTitle(id, title));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }
        return questions;
    }

    @Override
    public List<SubjectQuestion> getQuestionsBySubject(int id) {
        List<SubjectQuestion> questions = new ArrayList<>();
        String query = "SELECT questionbank.id AS questionid, questionbank.title AS question, " +
                       "subjects.title AS subject, subjects.id AS subjectid " +
                       "FROM questionbank JOIN subjects ON questionbank.subjectid = subjects.id " +
                       "WHERE subjects.id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                SubjectQuestion subjectQuestion = new SubjectQuestion();
                subjectQuestion.setQuestionId(resultSet.getInt("questionid"));
                subjectQuestion.setQuestion(resultSet.getString("question"));
                subjectQuestion.setSubjectId(resultSet.getInt("subjectid"));
                subjectQuestion.setSubject(resultSet.getString("subject"));
                questions.add(subjectQuestion);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return questions;
    }

    @Override
    public List<QuestionDetails> getQuestionsBySubjectAndConcept(int subjectId, int conceptId) {
        List<QuestionDetails> questions = new ArrayList<>();
        String query = "SELECT questionbank.id, questionbank.id as questionid, questionbank.title, subjects.title AS subject, concepts.title AS concept " +
                       "FROM questionbank, subjects, concepts " +
                       "WHERE questionbank.subjectid = subjects.id AND questionbank.conceptid = concepts.id " +
                       "AND subjects.id = ? AND concepts.id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);
            statement.setInt(2, conceptId);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("id"); 
                int questionid=resultSet.getInt("questionid");
                String question = resultSet.getString("title");
                String subject = resultSet.getString("subject");
                String criteria = resultSet.getString("concept");
                questions.add(new QuestionDetails(id,questionid, question,subject, criteria));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return questions;
    }

    @Override
    public List<QuestionDetails> getQuestionsWithSubjectAndConcept() {
        List<QuestionDetails> questions = new ArrayList<>();
        String query = "SELECT questionbank.id, questionbank.title, subjects.title AS subject, concepts.title AS concept " +
                       "FROM questionbank, subjects, concepts " +
                       "WHERE questionbank.subjectid = subjects.id AND questionbank.conceptid = concepts.id";

        try (
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String question = resultSet.getString("question");
                String subject = resultSet.getString("subject");
                String criteria = resultSet.getString("criteria");
                questions.add(new QuestionDetails(id, question, subject, criteria));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return questions;
    }

    @Override
    public List<Question> getQuestions(int testId) {
       
    List<Question> questions = new ArrayList<>();
    
    String query = " SELECT" + 
                "testquestions.id AS testquestionid, \r\n" + 
                "questionbank.id AS questionbankid,\r\n" + 
                "questionbank.subjectid,\r\n" + 
                "questionbank.title,\r\n" + 
                "questionbank.a,\r\n" + 
                "questionbank.b,\r\n" + 
                "questionbank.c,\r\n" + 
                "questionbank.d,\r\n" + 
               "questionbank.conceptid\r\n" + 
            "FROM questionbank \r\n" + 
                "INNER JOIN testquestions \r\n" + 
                "ON testquestions.questionbankid = questionbank.id \r\n" + 
                "WHERE testquestions.testid = ?";

    try (
         PreparedStatement statement = connection.prepareStatement(query)) {

        statement.setInt(1, testId);

        try (ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                Question question = new Question();
                question.setId(resultSet.getInt("testquestionid")); 
                question.setSubjectId(resultSet.getInt("subjectid"));
                question.setTitle(resultSet.getString("title"));
                question.setA(resultSet.getString("a"));
                question.setB(resultSet.getString("b"));
                question.setC(resultSet.getString("c"));
                question.setD(resultSet.getString("d"));
                question.setConceptId(resultSet.getInt("conceptid"));
                
                questions.add(question);
            }
        }
    } catch (SQLException e) {
        e.printStackTrace();
        System.out.println("Exception handled"); // or log error
    }

    return questions;
}

    @Override
    public boolean updateAnswer(int id, char answerKey) {
        String query = "UPDATE questionbank SET answerkey = ? WHERE id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, String.valueOf(answerKey));
            statement.setInt(2, id);
            int rowsUpdated = statement.executeUpdate();
            return rowsUpdated > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return false;
    }
    

    @Override
    public Question getQuestion(int questionId) {
        Question question = null;
        String query = "SELECT * FROM questionbank WHERE id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, questionId);
            ResultSet result = statement.executeQuery();

            if (result.next()) {
                question = new Question();
                question.setId(questionId);
                question.setSubjectId(result.getInt("subjectid"));
                question.setTitle(result.getString("title"));
                question.setA(result.getString("a"));
                question.setB(result.getString("b"));
                question.setC(result.getString("c"));
                question.setD(result.getString("d"));
                question.setAnswerKey(result.getString("answerkey"));
                question.setConceptId(result.getInt("conceptid"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return question;
    }

    @Override
    public boolean updateQuestionOptions(int id, Question options) {
        String query = "UPDATE questionbank SET title = ?, a = ?, b = ?, c = ?, d = ?, answerkey = ? WHERE id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, options.getTitle());
            statement.setString(2, options.getA());
            statement.setString(3, options.getB());
            statement.setString(4, options.getC());
            statement.setString(5, options.getD());
            statement.setString(6, String.valueOf(options.getAnswerKey()));
            statement.setInt(7, id);

            return statement.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return false;
    }

    @Override
    public boolean updateSubjectConcept(int questionId, Question question) {
        String query = "UPDATE questionbank SET conceptid = ?, subjectid = ? WHERE id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, question.getConceptId());
            statement.setInt(2, question.getSubjectId());
            statement.setInt(3, questionId);

            return statement.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return false;
    }

    @Override
    public boolean insertQuestion(NewQuestion question) {
        String query = "INSERT INTO questionbank (subjectid, title, a, b, c, d, answerkey, conceptid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, question.getSubjectId());
            statement.setString(2, question.getTitle());
            statement.setString(3, question.getA());
            statement.setString(4, question.getB());
            statement.setString(5, question.getC());
            statement.setString(6, question.getD());
            statement.setString(7, String.valueOf(question.getAnswerKey()));
            statement.setInt(8, question.getConceptId());

            return statement.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return false;
    }

    @Override
    public String getConcept(String subject, int questionId) {
        String query = "SELECT concepts.title " +
                       "FROM concepts " +
                       "INNER JOIN questionbank ON questionbank.conceptid = concepts.id " +
                       "INNER JOIN subjects ON questionbank.subjectid = concepts.subjectid " +
                       "WHERE subjects.title = ? AND questionbank.id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, subject);
            statement.setInt(2, questionId);
            ResultSet rs = statement.executeQuery();

            if (rs.next()) {
                return rs.getString("title");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Exception handled");
        }

        return null;
    }

}
