package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.DescriptiveQuestion;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.dto.response.QuestionWithStatus;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.repository.QuestionRepository;


@Repository
public class QuestionRepositoryImpl implements QuestionRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

    @Override
    public QuestionDisplay getQuestionById(long question_id) {

        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE question_id = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setLong(1, question_id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                long id = rs.getLong("question_id");
                String description = rs.getString("description");
                QuestionType questionType = QuestionType.valueOf(rs.getString("question_type"));
                String difficultyLevel = rs.getString("difficulty_level");
                String status = rs.getString("status");
                return new QuestionDisplay(id, description, questionType, DifficultyLevel.valueOf(difficultyLevel), QuestionStatus.valueOf(status));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<QuestionDisplay> getAllQuestions() {
        List<QuestionDisplay> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String query = "SELECT * FROM questions";
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                QuestionDisplay q = new QuestionDisplay(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        QuestionType.valueOf(rs.getString("question_type")),
                        DifficultyLevel.valueOf(rs.getString("difficulty_level")),
                        QuestionStatus.valueOf(rs.getString("status"))
                );
                list.add(q);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty) {
        List<Question> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String query = "SELECT * FROM questions WHERE difficulty_level = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, difficulty.toString());
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                Question q = new Question(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        QuestionType.valueOf(rs.getString("question_type")),
                        DifficultyLevel.valueOf(rs.getString("difficulty_level")),
                        rs.getTimestamp("created_at").toLocalDateTime(),
                        QuestionStatus.valueOf(rs.getString("status")),
                        rs.getString("language"),
                        rs.getString("layer"),
                        rs.getString("framework"),
                        rs.getString("concept")
                );
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<DescriptiveQuestion> getDescriptiveQuestion(QuestionType questionType) {

    String sql = """
        SELECT question_id, question_type, description, difficulty_level
        FROM questions
        WHERE question_type = ?
        ORDER BY question_id
    """;

    List<DescriptiveQuestion> results = new ArrayList<>();

    try (Connection connection = getConnection();
         PreparedStatement statement = connection.prepareStatement(sql)) {

        statement.setString(1, questionType.toString());

        try (ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {

                DescriptiveQuestion question = new DescriptiveQuestion();

                question.setDescription(rs.getString("description"));
                question.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));

                results.add(question);
            }
        }

    } catch (Exception e) {
        throw new RuntimeException("Failed to fetch questions by type", e);
    }

    return results;
}


    @Override
    public void insertCompleteQuestion(CompleteQuestion q) {


        String questionSql = "INSERT INTO questions(description, question_type, difficulty_level, created_at, status, language, layer, framework, concept) VALUES (?, ?, ?, NOW(), 'DRAFT', ?, ?, ?, ?)";
        String optionSql = "INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection connection = getConnection()) {
            connection.setAutoCommit(false);
            Long questionId = null;

            try (PreparedStatement qStatement = connection.prepareStatement(questionSql, Statement.RETURN_GENERATED_KEYS)) {
                qStatement.setString(1, q.getDescription());
                qStatement.setString(2, q.getQuestionType().toString());
                qStatement.setString(3, q.getDifficultyLevel().toString());
                qStatement.setString(4, q.getLanguage());
                qStatement.setString(5, q.getLayer());
                qStatement.setString(6, q.getFramework());
                qStatement.setString(7, q.getConcept());
                qStatement.executeUpdate();
                try (ResultSet rs = qStatement.getGeneratedKeys()) {
                    if (rs.next()) {
                        questionId = rs.getLong(1);
                    }
                }
            }

            if (questionId != null && q.getQuestionType() == QuestionType.MCQ) {

                try (PreparedStatement oStatement = connection.prepareStatement(optionSql)) {
                    oStatement.setString(1, q.getOptionA());
                    oStatement.setString(2, q.getOptionB());
                    oStatement.setString(3, q.getOptionC());
                    oStatement.setString(4, q.getOptionD());
                    oStatement.setString(5, q.getCorrectAnswer());
                    oStatement.setLong(6, questionId);
                    oStatement.executeUpdate();
                }
            }

            connection.commit();

        } 
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    
    @Override
    public QuestionOptionsRequest getQuestionDetails(Long question_id) {
        QuestionOptionsRequest dto = new QuestionOptionsRequest();
        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE question_id=?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setLong(1, question_id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                dto.setQuestionId(rs.getLong("question_id"));
                dto.setDescription(rs.getString("description"));
                dto.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));
                dto.setDifficultyLevel(DifficultyLevel.valueOf(rs.getString("difficulty_level")));
                dto.setStatus(QuestionStatus.valueOf(rs.getString("status")));
                dto.setLanguage(rs.getString("language"));
                dto.setLayer(rs.getString("layer"));
                dto.setFramework(rs.getString("framework"));
                dto.setConcept(rs.getString("concept"));
            }

            String sql1 = "SELECT * FROM mcq_options WHERE question_id=?";
            PreparedStatement statement1 = connection.prepareStatement(sql1);
            statement1.setLong(1, question_id);
            ResultSet rs1 = statement1.executeQuery();
            if (rs1.next()) {
                dto.setOptionA(rs1.getString("option_a"));
                dto.setOptionB(rs1.getString("option_b"));
                dto.setOptionC(rs1.getString("option_c"));
                dto.setOptionD(rs1.getString("option_d"));
                dto.setCorrectAnswer(rs1.getString("correct_answer"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return dto;
    }

    @Override
    public void updateQuestionDetailsById(Long question_id, QuestionOptionsRequest dto) {

        String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=?,status=? ,language=?, layer=?, framework=?, concept=? WHERE question_id=?";

        try (Connection connection = getConnection();
        PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, dto.getDescription());
            statement.setString(2, dto.getQuestionType().name());
            statement.setString(3, dto.getDifficultyLevel().name());
            statement.setString(4, dto.getStatus().name());
            statement.setString(5, dto.getLanguage());
            statement.setString(6, dto.getLayer());
            statement.setString(7, dto.getFramework());
            statement.setString(8, dto.getConcept());
            statement.setLong(9, question_id);

            statement.executeUpdate();

            if (dto.getQuestionType() == QuestionType.MCQ) {

                String optionSql = "UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?";

                PreparedStatement optionStmt = connection.prepareStatement(optionSql);

                optionStmt.setString(1, dto.getOptionA());
                optionStmt.setString(2, dto.getOptionB());
                optionStmt.setString(3, dto.getOptionC());
                optionStmt.setString(4, dto.getOptionD());
                optionStmt.setString(5, dto.getCorrectAnswer());
                optionStmt.setLong(6, question_id);

                optionStmt.executeUpdate();
            }

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error updating question");
        }
    }

    @Override
    public List<QuestionWithStatus> getQuestions(QuestionStatus status) {
        List<QuestionWithStatus> list = new ArrayList<>();
        String sql = """
                SELECT question_id, question_type, description, difficulty_level, status
                FROM questions
                WHERE status = ?
                ORDER BY question_id
                """;
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                QuestionWithStatus questionStatus = new QuestionWithStatus();
                questionStatus.setQuestionId(rs.getLong("question_id"));
                questionStatus.setDescription(rs.getString("description"));
                questionStatus.setStatus(rs.getString("status"));
                list.add(questionStatus);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


    @Override
    public List<Question> getQuestionsByConcept(String concept) {
        List<Question> list = new ArrayList<>();
        String sql = """ 
                    SELECT * FROM questions WHERE FIND_IN_SET(concept, ?);
                    """;

        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, concept.toString());
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));
                list.add(question);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate) {
        List<Question> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE DATE(created_at) BETWEEN ? AND ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setDate(1, Date.valueOf(fromDate));
            statement.setDate(2, Date.valueOf(toDate));
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));
                question.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime()
                );
                list.add(question);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public void updateQuestionStatus(List<Long> question_ids, QuestionStatus status) {
        if (question_ids == null || question_ids.isEmpty()) {
            return;
        }
        String placeholders = String.join(",", Collections.nCopies(question_ids.size(), "?"));
        String sql = "UPDATE questions SET status = ? "
                + "WHERE status = 'DRAFT' AND question_id IN (" + placeholders + ")";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            for (int i = 0; i < question_ids.size(); i++) {
                statement.setLong(i + 2, question_ids.get(i));
            }
            statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void updateQuestionStatus(long question_id, QuestionStatus status) {

        String sql = "UPDATE questions SET status=? WHERE question_id=?";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            statement.setLong(2, question_id);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public Long getFrameworkConceptId(int conceptId, int frameworkId) {
        String sql = "SELECT id FROM framework_concepts WHERE concept_id = ? AND framework_id = ?";
        try (Connection connection = getConnection();
            PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, conceptId);
            statement.setInt(2, frameworkId);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return rs.getLong("id");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        throw new RuntimeException("Framework concept not found for conceptId: " + conceptId + " and frameworkId: " + frameworkId);
    }

    @Override
    public void insertQuestionFrameworkConceptMapping(Long questionId, Long frameworkConceptId) {
        String sql = "INSERT INTO question_framework_concepts(question_id, framework_concepts_id) VALUES (?, ?)";
        try (Connection connection = getConnection();
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, questionId);
            statement.setLong(2, frameworkConceptId);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public int getQuestionCountByConcept(String concept){
        String sql="SELECT COUNT(*) FROM questions WHERE concept=?";
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, concept);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return rs.getInt(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public List<String> getConcepts() {
        List<String> concepts = new ArrayList<>();
        String sql = "SELECT DISTINCT concept FROM questions";
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(sql);
             ResultSet rs = statement.executeQuery()) {
            while (rs.next()) {
                concepts.add(rs.getString("concept"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return concepts;
    }
}

/*

@Override
public Long insertQuestionWithOptions(
        Question q,
        String optionA,
        String optionB,
        String optionC,
        String optionD,
        String correctAnswer) {

    Long questionId = null;

    String questionSql = """
        INSERT INTO questions(
            description,
            question_type,
            difficulty_level,
            created_at,
            status,
            language,
            layer,
            framework,
            concept
        )
        VALUES (?, ?, ?, NOW(), 'DRAFT', ?, ?, ?, ?)
        """;

    String optionSql = """
        INSERT INTO mcq_options(
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            question_id
        )
        VALUES (?, ?, ?, ?, ?, ?)
        """;

    try (Connection connection = getConnection()) {

        // Start Transaction
        connection.setAutoCommit(false);

        // Insert Question
        try (PreparedStatement questionStmt =
                     connection.prepareStatement(
                             questionSql,
                             Statement.RETURN_GENERATED_KEYS)) {

            questionStmt.setString(1, q.getDescription());
            questionStmt.setString(2, q.getQuestionType().toString());
            questionStmt.setString(3, q.getDifficultyLevel().toString());
            questionStmt.setString(4, q.getLanguage());
            questionStmt.setString(5, q.getLayer());
            questionStmt.setString(6, q.getFramework());
            questionStmt.setString(7, q.getConcept());

            questionStmt.executeUpdate();

            ResultSet rs = questionStmt.getGeneratedKeys();

            if (rs.next()) {
                questionId = rs.getLong(1);
            }
        }

        // Insert MCQ Options
        try (PreparedStatement optionStmt =
                     connection.prepareStatement(optionSql)) {

            optionStmt.setString(1, optionA);
            optionStmt.setString(2, optionB);
            optionStmt.setString(3, optionC);
            optionStmt.setString(4, optionD);
            optionStmt.setString(5, correctAnswer);
            optionStmt.setLong(6, questionId);

            optionStmt.executeUpdate();
        }

        // Commit Transaction
        connection.commit();

    } catch (Exception e) {
        e.printStackTrace();
    }

    return questionId;
}



*/