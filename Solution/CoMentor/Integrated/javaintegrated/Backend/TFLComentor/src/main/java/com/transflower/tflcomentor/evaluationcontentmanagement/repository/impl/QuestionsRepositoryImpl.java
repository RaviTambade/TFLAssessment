package com.transflower.tflcomentor.evaluationcontentmanagement.repository.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Project;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.QuestionsRepository;

@Repository
public class QuestionsRepositoryImpl implements QuestionsRepository {
    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

    @Override
    public Questions getQuestionById(long question_id) {

        try (Connection connection = getConnection()) {

            String sql = "SELECT * FROM questions WHERE question_id = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setLong(1, question_id);

            
            ResultSet rs = statement.executeQuery();

            if (rs.next()) {
                long id = rs.getLong("question_id");
                String description = rs.getString("description");
                String questionType = rs.getString("question_type");
                String difficultyLevel = rs.getString("difficulty_level");
                LocalDateTime createdAt = LocalDateTime.ofInstant(
                        rs.getTimestamp("created_at").toInstant(),
                        ZoneId.systemDefault());
                String status = rs.getString("status");

                return new Questions(
                        id,
                        description,
                        questionType,
                        difficultyLevel,
                        createdAt,
                        status);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null; // fixed
    }

    @Override
    public List<Questions> getAllQuestions() {
        List<Questions> list = new ArrayList<>();

        try (Connection connection = getConnection()) {

            String query = "SELECT * FROM questions";
            Statement statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);

            while (rs.next()) {
                Questions q = new Questions(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("difficulty_level"),
                        LocalDateTime.ofInstant(
                                rs.getTimestamp("created_at").toInstant(),
                                ZoneId.systemDefault()),
                        rs.getString("status"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Questions> getQuestionsByDifficulty(String difficulty) {
        List<Questions> list = new ArrayList<>();

        try (Connection connection = getConnection()) {

            String query = "SELECT * FROM questions WHERE difficulty_level = ?";
            PreparedStatement statement = connection.prepareStatement(query);
            statement.setString(1, difficulty);

            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Questions q = new Questions(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("difficulty_level"),
                        LocalDateTime.ofInstant(
                                rs.getTimestamp("created_at").toInstant(),
                                ZoneId.systemDefault()),
                        rs.getString("status"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Questions> findByType(String questionType) {

        String sql = """
                SELECT question_id, question_type, description
                FROM questions
                WHERE question_type = ?
                ORDER BY question_id
                """;

        try (Connection connection = getConnection();
                PreparedStatement statement = connection.prepareStatement(sql))
{
            statement.setString(1, questionType);

            try (ResultSet rs = statement.executeQuery()) {
                List<Questions> results = new ArrayList<>();

                while (rs.next()) {
                    Questions question = new Questions();
                    question.setQuestionId(rs.getLong("question_id"));
                    question.setQuestionType(rs.getString("question_type"));
                    question.setDescription(rs.getString("description"));
                    results.add(question);
                }
                return results;
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch questions by type", e);
        }
    }



    // nirjala user story 72

    @Override
     public Long insertQuestion(Questions q) {

        Long questionId = null;

        String sql = "INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())";

        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, q.getDescription());
            statement.setString(2, q.getQuestionType());
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

        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {

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

    @Override
    public List<Questions> getDraftQuestions() {
        List<Questions> list = new ArrayList<>();
        String sql = "SELECT * FROM questions WHERE status='DRAFT'";
        try (Connection connection = getConnection();
         PreparedStatement statement = connection.prepareStatement(sql); 
         ResultSet rs = statement.executeQuery()) {
            while (rs.next()) {
                Questions q = new Questions();
                q.setQuestionId(rs.getLong("question_id"));
                q.setDescription(rs.getString("description"));
                q.setQuestionType(rs.getString("question_type"));
                q.setDifficultyLevel(rs.getString("difficulty_level"));
                q.setStatus(rs.getString("status"));
                list.add(q);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public void approveQuestionById(Long id) {
        String sql = "UPDATE questions SET status='APPROVED' WHERE question_id=?";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void rejectQuestionById(Long id) {
        String sql = "UPDATE questions SET status='INACTIVE' WHERE question_id=?";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void approveAllQuestions() {
        String sql = "UPDATE questions SET status='APPROVED' WHERE status='DRAFT'";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void rejectAllQuestions() {
        String sql = "UPDATE questions SET status='INACTIVE' WHERE status='DRAFT'";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Questions> getRecentQuestions() {
        List<Questions> list = new ArrayList<>();
        String sql = "SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC";
        try (Connection connection = getConnection(); 
        java.sql.Statement statement = connection.createStatement();
         ResultSet rs = statement.executeQuery(sql)) {
            while (rs.next()) {
                Questions q = new Questions();
                q.setQuestionId(rs.getLong("question_id"));
                q.setDescription(rs.getString("description"));
                q.setQuestionType(rs.getString("question_type"));
                q.setDifficultyLevel(rs.getString("difficulty_level"));
                q.setStatus(rs.getString("status"));

                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<QuestionListResponseDto> getDraftQuestionList() {
        List<QuestionListResponseDto> list = new ArrayList<>();
        String sql = "SELECT question_id, description FROM questions WHERE status='DRAFT'";
        try (Connection connection = getConnection();
         PreparedStatement statement = connection.prepareStatement(sql); 
         ResultSet rs = statement.executeQuery()) {
            while (rs.next()) {
                list.add(new QuestionListResponseDto(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("status")
                ));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<QuestionListResponseDto> getRecentQuestionList() {
        List<QuestionListResponseDto> list = new ArrayList<>();
        String sql = "SELECT question_id, description FROM questions WHERE created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC";
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql); 
        ResultSet rs = statement.executeQuery()) {
            while (rs.next()) {
                list.add(new QuestionListResponseDto(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("status")
                ));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public QuestionResponseDto getQuestionDetailsById(Long id) {
        QuestionResponseDto dto = new QuestionResponseDto();
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
    public void updateQuestionById(Long id, QuestionRequestDto dto) {

        String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=? WHERE question_id=?";

        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, dto.getDescription());
            statement.setString(2, dto.getQuestionType());
            statement.setString(3, dto.getDifficultyLevel());
            statement.setLong(4, id);

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
    public List<QuestionListResponseDto> getQuestionsByType(String questionType) {
        String sql = """
                SELECT question_id, question_type, description
                FROM questions
                WHERE question_type = ?
                ORDER BY question_id
                """;
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, questionType);
            try (ResultSet rs = statement.executeQuery()) {
                List<QuestionListResponseDto> results = new java.util.ArrayList<>();
                while (rs.next()) {
                    QuestionListResponseDto dto = new QuestionListResponseDto();
                    dto.setQuestionId((long) rs.getInt("question_id"));
                    dto.setQuestionType(rs.getString("question_type"));
                    dto.setDescription(rs.getString("description"));
                    results.add(dto);
                }
                return results;
            }
        } catch (Exception ex) {
            throw new RuntimeException("Failed to fetch questions by type", ex);
        }
    }

    @Override
    public List<QuestionListResponseDto> findByStatus(String questionStatus) {
        List<QuestionListResponseDto> list = new ArrayList<>();
        String sql = """
                SELECT question_id, question_type, description, difficulty_level, status
                FROM questions
                WHERE status = ?
                ORDER BY question_id
                """;
        try (Connection connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, questionStatus);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                QuestionListResponseDto dto = new QuestionListResponseDto();
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

        try (
             Connection connection = getConnection(); 
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, conceptId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(rs.getString("question_type"));
                list.add(question);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }


}