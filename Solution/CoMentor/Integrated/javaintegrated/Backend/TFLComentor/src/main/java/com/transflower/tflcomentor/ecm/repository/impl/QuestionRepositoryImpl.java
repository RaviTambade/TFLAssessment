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
import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
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
    public Question getQuestionById(long question_id) {

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

                LocalDateTime createdAt = LocalDateTime.ofInstant(
                        rs.getTimestamp("created_at").toInstant(),
                        ZoneId.systemDefault());
                String status = rs.getString("status");
                return new Question(id, description, questionType, DifficultyLevel.valueOf(difficultyLevel), QuestionStatus.valueOf(status));
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
                        QuestionType.valueOf(rs.getString("question_type")),
                        DifficultyLevel.valueOf(rs.getString("difficulty_level")),
                        QuestionStatus.valueOf(rs.getString("status")));
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
    public List<Question> getQuestions(QuestionType questionType) {

        String sql = """
    SELECT question_id, question_type, description, difficulty_level, status
    FROM questions
    WHERE question_type = ?
    ORDER BY question_id
""";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, questionType.toString());

            try (ResultSet rs = statement.executeQuery()) {
                List<Question> results = new ArrayList<>();

                while (rs.next()) {
                    Question question = new Question();
                    question.setQuestionId(rs.getLong("question_id"));
                    question.setDescription(rs.getString("description"));

                    question.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));
                    question.setDifficultyLevel(DifficultyLevel.valueOf(rs.getString("difficulty_level")));
                    question.setQuestionStatus(QuestionStatus.valueOf(rs.getString("status")));
                    results.add(question);
                }
                return results;
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch questions by type", e);
        }
    }

    @Override
    public Long insert(Question q,int conceptId, int frameworkId) {

        Long questionId = null;
        Long frameworkConceptId = getFrameworkConceptId(conceptId, frameworkId);
        String sql = "INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, q.getDescription());
            statement.setString(2, q.getQuestionType().toString());
            statement.setString(3, q.getDifficultyLevel().toString());

            statement.executeUpdate();

            ResultSet rs = statement.getGeneratedKeys();
            if (rs.next()) {
                questionId = rs.getLong(1);
            }
            insertQuestionFrameworkConceptMapping(questionId, frameworkConceptId);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return questionId;
    }

    @Override
    public void insertMcqOptions(Long question_id,
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
            statement.setLong(6, question_id);

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
    public QuestionOptionsRequestDto getQuestionDetails(Long question_id) {
        QuestionOptionsRequestDto dto = new QuestionOptionsRequestDto();
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
    public void updateQuestionById(Long question_id, QuestionOptionsRequestDto dto) {

        String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=?,status=? WHERE question_id=?";

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, dto.getDescription());
            statement.setString(2, dto.getQuestionType().name());
            statement.setString(3, dto.getDifficultyLevel().name());
            statement.setString(4, dto.getStatus().name());
            statement.setLong(5, question_id);

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
    public List<Question> getQuestions(QuestionStatus status) {
        List<Question> list = new ArrayList<>();
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
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(QuestionType.valueOf(rs.getString("question_type")));
                question.setDifficultyLevel(DifficultyLevel.valueOf(rs.getString("difficulty_level")));
                question.setQuestionStatus(QuestionStatus.valueOf(rs.getString("status")));
                list.add(question);
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

        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, conceptId);
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
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
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
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
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
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, questionId);
            statement.setLong(2, frameworkConceptId);
            statement.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
