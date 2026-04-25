package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.repository.QuestionRepository;

@Repository
public class QuestionRepositoryImpl implements QuestionRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

    @Override
    public Question getQuestionById(long question_id) {

        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE question_id = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setLong(1, question_id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                long id = rs.getLong("question_id");
                String description = rs.getString("description");
                QuestionTypes questionType = QuestionTypes.valueOf(rs.getString("question_type"));
                String difficultyLevel = rs.getString("difficulty_level");

                LocalDateTime createdAt = LocalDateTime.ofInstant(
                        rs.getTimestamp("created_at").toInstant(),
                        ZoneId.systemDefault());
                String status = rs.getString("status");
                return new Question(id,description,questionType,difficultyLevel,createdAt,status);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Question> getAllQuestions() {
        List<Question> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String query = "SELECT * FROM questions";
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                Question q = new Question(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        QuestionTypes.valueOf(rs.getString("question_type")),
                        rs.getString("difficulty_level"),
                        LocalDateTime.ofInstant(rs.getTimestamp("created_at").toInstant(), ZoneId.systemDefault()),
                        rs.getString("status"));
                list.add(q);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Question> getQuestionsByDifficulty(String difficulty) {
        List<Question> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String query = "SELECT * FROM questions WHERE difficulty_level = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, difficulty);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                Question q = new Question(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        QuestionTypes.valueOf(rs.getString("question_type")),
                        rs.getString("difficulty_level"),
                        LocalDateTime.ofInstant(rs.getTimestamp("created_at").toInstant(), ZoneId.systemDefault()),
                        rs.getString("status"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<QuestionResponseDto> getQuestions(String questionType) {

        String sql = """
                SELECT question_id, question_type, description
                FROM questions
                WHERE question_type = ?
                ORDER BY question_id
                """;

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, questionType.toString());

            try (ResultSet rs = statement.executeQuery()) {
                List<QuestionResponseDto> results = new ArrayList<>();

                while (rs.next()) {
                    QuestionResponseDto question = new QuestionResponseDto();
                    question.setQuestionId(rs.getLong("question_id"));
                    question.setDescription(rs.getString("description"));
                    question.setQuestionType(rs.getString("question_type"));
                    question.setDifficultyLevel(rs.getString("difficulty_level"));
                    question.setQuestionStatus(rs.getString("status"));

                    results.add(question);
                }
                return results;
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch questions by type", e);
        }
    }

    @Override
    public Long insert(Question q) {

        Long questionId = null;

        String sql = "INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, q.getDescription());
            statement.setString(2, q.getQuestionType().toString());
            statement.setString(3, q.getDifficultyLevel());

            statement.executeUpdate();

            ResultSet rs = statement.getGeneratedKeys();
            if (rs.next()) {
                questionId = rs.getLong(1);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return questionId;
    }

    @Override
    public void insertMcqOptions(Long questionId,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer) {

        String sql = "INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, optionA);
            statement.setString(2, optionB);
            statement.setString(3, optionC);
            statement.setString(4, optionD);
            statement.setString(5, correctAnswer);
            statement.setLong(6, questionId);

            statement.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // public List<Questions> getAllQuestions() {
    //     List<Questions> list = new ArrayList<>();
    //     String sql = "SELECT * FROM questions";
    //     try (Connection conn = getConnection(); 
    // Statement stmt = conn.createStatement(); 
    // ResultSet rs = stmt.executeQuery(sql)) {
    //         while (rs.next()) {
    //             Questions q = new Questions();
    //             q.setQuestionId(rs.getLong("question_id"));
    //             q.setDescription(rs.getString("description"));
    //             q.setQuestionType(rs.getString("question_type"));
    //             q.setDifficultyLevel(rs.getString("difficulty_level"));
    //             q.setStatus(rs.getString("status"));
    //             list.add(q);
    //         }
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //     }
    //     return list;
    // }

    // @Override
    // public List<QuestionResponse> getRecentQuestions() {
    //     List<QuestionResponse> list = new ArrayList<>();
    //     String sql = "SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC";
    //     try (Connection connection = getConnection(); java.sql.Statement statement = connection.createStatement(); ResultSet rs = statement.executeQuery(sql)) {
    //         while (rs.next()) {
    //             QuestionResponse q = new QuestionResponse();
    //             q.setQuestionId(rs.getLong("question_id"));
    //             q.setDescription(rs.getString("description"));
    //             q.setQuestionType(rs.getString("question_type"));
    //             q.setDifficultyLevel(rs.getString("difficulty_level"));
    //             q.setQuestionStatus(rs.getString("status"));
    //             list.add(q);
    //         }
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //     }
    //     return list;
    // }
    
    @Override
    public QuestionOptionsResponseDto getQuestionDetails(Long id) {
        QuestionOptionsResponseDto dto = new QuestionOptionsResponseDto();
        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE question_id=?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setLong(1, id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                dto.setQuestionId(rs.getLong("question_id"));
                dto.setDescription(rs.getString("description"));
                dto.setQuestionType(rs.getString("question_type"));
                dto.setDifficultyLevel(rs.getString("difficulty_level"));
                dto.setStatus(rs.getString("status"));
            }

            String sql1 = "SELECT * FROM mcq_options WHERE question_id=?";
            PreparedStatement statement1 = connection.prepareStatement(sql1);
            statement1.setLong(1, id);
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
    public void updateQuestionById(Long id, QuestionOptionsRequestDto dto) {

        String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=?,status=? WHERE question_id=?";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, dto.getDescription());
            statement.setString(2, dto.getQuestionType());
            statement.setString(3, dto.getDifficultyLevel());
            statement.setString(4, dto.getStatus());
            statement.setLong(5, id);

            statement.executeUpdate();

            if ("MCQ".equalsIgnoreCase(dto.getQuestionType())) {

                String optionSql = "UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?";

                PreparedStatement optionStmt = connection.prepareStatement(optionSql);

                optionStmt.setString(1, dto.getOptionA());
                optionStmt.setString(2, dto.getOptionB());
                optionStmt.setString(3, dto.getOptionC());
                optionStmt.setString(4, dto.getOptionD());
                optionStmt.setString(5, dto.getCorrectAnswer());
                optionStmt.setLong(6, id);

                optionStmt.executeUpdate();
            }

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error updating question");
        }
    }

    @Override
    public List<QuestionResponseDto> getQuestions(QuestionStatus status) {
        List<QuestionResponseDto> list = new ArrayList<>();
        String sql = """
                SELECT question_id, question_type, description, difficulty_level, status
                FROM questions
                WHERE status = ?
                ORDER BY question_id
                """;
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                QuestionResponseDto dto = new QuestionResponseDto();
                dto.setQuestionId(rs.getLong("question_id"));
                dto.setDescription(rs.getString("description"));
                dto.setQuestionType(rs.getString("question_type"));
                dto.setQuestionStatus(rs.getString("status"));
                list.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Question> getQuestionsByConceptId(Long conceptId) {
        List<Question> list = new ArrayList<>();
        String sql = """ 
                    SELECT q.question_id, q.description, q.question_type
                    FROM questions q
                    JOIN question_framework_concepts qfc 
                        ON q.question_id = qfc.question_id
                    JOIN framework_concepts fc 
                        ON qfc.framework_concepts_id = fc.id
                    WHERE fc.concept_id = ?;
                    """;

        try (Connection connection = getConnection(); 
            PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, conceptId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(QuestionTypes.valueOf(rs.getString("question_type")));
                list.add(question);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<QuestionResponseDto> getQuestions(LocalDate fromDate, LocalDate toDate) {
        List<QuestionResponseDto> list = new ArrayList<>();
        try (Connection connection = getConnection()) {
            String sql = "SELECT * FROM questions WHERE DATE(created_at) BETWEEN ? AND ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setDate(1, Date.valueOf(fromDate));
            statement.setDate(2, Date.valueOf(toDate));
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                QuestionResponseDto dto = new QuestionResponseDto();
                dto.setQuestionId(rs.getLong("question_id"));
                dto.setDescription(rs.getString("description"));
                dto.setQuestionType(rs.getString("question_type"));
                dto.setDifficultyLevel(rs.getString("difficulty_level"));
                dto.setQuestionStatus(rs.getString("status"));
                dto.setCreatedAt(
                        rs.getTimestamp("created_at").toLocalDateTime()
                );
                list.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public void updateQuestionsStatus(List<Long> questionIds, QuestionStatus status) {
        if (questionIds == null || questionIds.isEmpty()) {
            return;
        }
        String placeholders = String.join(",", Collections.nCopies(questionIds.size(), "?"));
        String sql = "UPDATE questions SET status = ? "
                + "WHERE status = 'DRAFT' AND question_id IN (" + placeholders + ")";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            for (int i = 0; i < questionIds.size(); i++) {
                statement.setLong(i + 2, questionIds.get(i));
            }
            statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void updateQuestionStatus(long questionId, QuestionStatus status) {

        String sql = "UPDATE questions SET status=? WHERE question_id=?";
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, status.name());
            statement.setLong(2, questionId);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
