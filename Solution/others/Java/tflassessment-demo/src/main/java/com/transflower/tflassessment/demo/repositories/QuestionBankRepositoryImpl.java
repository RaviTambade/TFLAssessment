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

    private String URL = "jdbc:mysql://localhost:3306/assessmentdb";
    private String USERNAME = "root";
    private String PASSWORD = "password";

    @Override
    public List<QuestionTitle> getAllQuestions() {
        List<QuestionTitle> questions = new ArrayList<>();
        String query = "SELECT * FROM questionbank";

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

    try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
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

    
     public static void main(String[] args) {
         // ================= QuestionBankRepository =================
        QuestionBankRepositoryImpl repo = new QuestionBankRepositoryImpl();

//         // -------- getAllQuestions --------
        System.out.println("\nAll Questions:");
        List<QuestionTitle> allQuestions = repo.getAllQuestions();
        for (QuestionTitle q : allQuestions) {
            System.out.println(q.getId() + " - " + q.getTitle());
        }

//         // -------- getQuestionsBySubject --------
        int subjectId = 2;
        System.out.println("\nQuestions by Subject:");
        List<SubjectQuestion> subjectQuestions = repo.getQuestionsBySubject(subjectId);
        for (SubjectQuestion q : subjectQuestions) {
            System.out.println(q.getQuestionId() + " - " + q.getQuestion() + " - " + q.getSubject());
        }

//         // -------- getQuestionsBySubjectAndCriteria --------
        System.out.println("\nQuestions by Subject and Criteria:");
        List<QuestionDetails> filteredQuestions = repo.getQuestionsBySubjectAndCriteria(1, 1);
        for (QuestionDetails q : filteredQuestions) {
            System.out.println(q.getId() + " - " + q.getQuestion() + " - " + q.getSubject() + " - " + q.getCriteria());
        }

//         // -------- getQuestionsWithSubjectAndCriteria --------
        System.out.println("\nAll Questions with Subject and Criteria:");
        List<QuestionDetails> fullQuestions = repo.getQuestionsWithSubjectAndCriteria();
        for (QuestionDetails q : fullQuestions) {
            System.out.println(q.getId() + " - " + q.getQuestion() + " - " + q.getSubject() + " - " + q.getCriteria());
        }

//         // -------- getQuestion --------
        System.out.println("\nGet Question by ID:");
        Question existingQuestion = repo.getQuestion(1);
        System.out.println(existingQuestion.getId() + " - " + existingQuestion.getTitle());

//         // -------- updateAnswer --------
        boolean answerUpdated = repo.updateAnswer(1, 'b');
        System.out.println("\nAnswer Updated: " + answerUpdated);

//         // -------- updateQuestionOptions --------
        Question question = new Question();
        question.setTitle("Updated Question?");
        question.setA("Option A");
        question.setB("Option B");
        question.setC("Option C");
        question.setD("Option D");
        question.setAnswerKey("C");
        boolean optionsUpdated = repo.updateQuestionOptions(1, question);
        System.out.println("\nOptions Updated: " + optionsUpdated);

//         // -------- updateSubjectCriteria --------
        Question updateSubjectCriteria = new Question();
        updateSubjectCriteria.setSubjectId(1);
        updateSubjectCriteria.setEvaluationCriteriaId(1);
        boolean subjectCriteriaUpdated = repo.updateSubjectCriteria(1, updateSubjectCriteria);
        System.out.println("\nSubject and Criteria Updated: " + subjectCriteriaUpdated);

//         // -------- insertQuestion --------
        NewQuestion newquestion = new NewQuestion();
        newquestion.setSubjectId(1);
        newquestion.setTitle("New Inserted Question?");
        newquestion.setA("A1");
        newquestion.setB("B1");
        newquestion.setC("C1");
        newquestion.setD("D1");
        newquestion.setAnswerKey('A');
        newquestion.setEvaluationCriteriaId(1);
        boolean inserted = repo.insertQuestion(newquestion);
        System.out.println("\nNew Question Inserted: " + inserted);

        // -------- getCriteria --------
        String subjectTitle = "COREJAVA";
        int questionId = 1;
        String criteriaTitle = repo.getCriteria(subjectTitle, questionId);
        System.out.println("\nCriteria Title for Subject and Question ID: " + criteriaTitle);

        // -------- getQuestions --------
        List<Question> testQuestions = repo.getQuestions(1);
        System.out.println("\nQuestions from Test (may be empty):");
        for (Question q : testQuestions) {
            System.out.println(q.getId() + " - " + q.getTitle());
        }
    }
}
