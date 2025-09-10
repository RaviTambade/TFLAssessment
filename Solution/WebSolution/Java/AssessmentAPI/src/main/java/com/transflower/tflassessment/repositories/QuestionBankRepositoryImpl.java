package com.transflower.tflassessment.repositories;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
@Repository
public class QuestionBankRepositoryImpl implements QuestionBankRepository {
    
     private static Connection connection;
    private String URL = "jdbc:mysql://localhost:3306/assessmentdb";
    private String USERNAME = "root";
    private String PASSWORD = "password";


    static {
        try {
            String url = "jdbc:mysql://localhost:3306/assessmentdb";
            String user = "root";
            String password = "password";
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection Established");
        } catch (SQLException e) {
            System.out.println("Connection Failed: " + e.getMessage());
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
        }

        return questions;
    }

    @Override
    public List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId, int criteriaId) {
        List<QuestionDetails> questions = new ArrayList<>();
        String query = "SELECT questionbank.id, questionbank.title, subjects.title AS subject, evaluationcriterias.title AS criteria " +
                       "FROM questionbank, subjects, evaluationcriterias " +
                       "WHERE questionbank.subjectid = subjects.id AND questionbank.evaluationcriteriaid = evaluationcriterias.id " +
                       "AND subjects.id = ? AND evaluationcriterias.id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);
            statement.setInt(2, criteriaId);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String title = resultSet.getString("title");
                String subject = resultSet.getString("subject");
                String criteria = resultSet.getString("criteria");
                questions.add(new QuestionDetails(id, title, subject, criteria));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return questions;
    }

    @Override
    public List<QuestionDetails> getQuestionsWithSubjectAndCriteria() {
        List<QuestionDetails> questions = new ArrayList<>();
        String query = "SELECT questionbank.id, questionbank.title, subjects.title AS subject, evaluationcriterias.title AS criteria " +
                       "FROM questionbank, subjects, evaluationcriterias " +
                       "WHERE questionbank.subjectid = subjects.id AND questionbank.evaluationcriteriaid = evaluationcriterias.id";

        try (
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) 
        {

            while (resultSet.next()) 
            {
                int id = resultSet.getInt("id");
                String title = resultSet.getString("title");
                String subject = resultSet.getString("subject");
                String criteria = resultSet.getString("criteria");
                questions.add(new QuestionDetails(id, title, subject, criteria));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return questions;
    }

    @Override
    public List<Question> getQuestions(int testId) {
       
    List<Question> questions = new ArrayList<>();
    
    String query = " SELECT" + 
                "                testquestions.id AS testquestionid, \r\n" + 
                "                questionbank.id AS questionbankid,\r\n" + 
                "                questionbank.subjectid,\r\n" + 
                "                questionbank.title,\r\n" + 
                "                questionbank.a,\r\n" + 
                "                questionbank.b,\r\n" + 
                "                questionbank.c,\r\n" + 
                "                questionbank.d,\r\n" + 
               "                questionbank.evaluationcriteriaid\r\n" + 
            "            FROM questionbank \r\n" + 
                "            INNER JOIN testquestions \r\n" + 
                "                ON testquestions.questionbankid = questionbank.id \r\n" + 
                "            WHERE testquestions.testid = ?";

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
                question.setEvaluationCriteriaId(resultSet.getInt("evaluationcriteriaid"));
                
                questions.add(question);
            }
        }
    } catch (SQLException e) {
        e.printStackTrace(); // or log error
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
                question.setEvaluationCriteriaId(result.getInt("evaluationcriteriaid"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
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
        }

        return false;
    }

    @Override
    public boolean updateSubjectCriteria(int questionId, Question question) {
        String query = "UPDATE questionbank SET evaluationcriteriaid = ?, subjectid = ? WHERE id = ?";

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, question.getEvaluationCriteriaId());
            statement.setInt(2, question.getSubjectId());
            statement.setInt(3, questionId);

            return statement.executeUpdate() > 0;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean insertQuestion(NewQuestion question) {
        String query = "INSERT INTO questionbank (subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try (
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

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public String getCriteria(String subject, int questionId) {
        String query = "SELECT evaluationcriterias.title " +
                       "FROM evaluationcriterias " +
                       "INNER JOIN questionbank ON questionbank.evaluationcriteriaid = evaluationcriterias.id " +
                       "INNER JOIN subjects ON questionbank.subjectid = evaluationcriterias.subjectid " +
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
        }

        return null;
    }

}
