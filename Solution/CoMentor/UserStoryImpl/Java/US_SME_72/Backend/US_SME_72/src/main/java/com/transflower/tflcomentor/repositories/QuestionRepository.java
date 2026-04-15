package com.transflower.tflcomentor.repositories;

import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.dtos.QuestionListDto;
import com.transflower.tflcomentor.entities.Question;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class QuestionRepository implements IQuestionRepository {

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Value("${spring.datasource.driver-class-name}")
    private String driver;

    private Connection getConnection() throws Exception {
        Class.forName(driver);
        return DriverManager.getConnection(url, username, password);
    }
public Long insertQuestion(Question q) {

    Long questionId = null;

    String sql = "INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())";

    try (Connection conn = getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

        stmt.setString(1, q.getDescription());
        stmt.setString(2, q.getQuestionType());
        stmt.setString(3, q.getDifficultyLevel());

        stmt.executeUpdate();

        ResultSet rs = stmt.getGeneratedKeys();
        if (rs.next()) {
            questionId = rs.getLong(1);
        }

    } catch (Exception e) {
        e.printStackTrace();
    }

    return questionId;
}

public void insertMcqOptions(Long questionId,
                            String optionA,
                            String optionB,
                            String optionC,
                            String optionD,
                            String correctAnswer) {

    String sql = "INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)";

    try (Connection conn = getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setString(1, optionA);
        stmt.setString(2, optionB);
        stmt.setString(3, optionC);
        stmt.setString(4, optionD);
        stmt.setString(5, correctAnswer);
        stmt.setLong(6, questionId);

        stmt.executeUpdate();

    } catch (Exception e) {
        e.printStackTrace();
    }
}

    public List<Question> getAllQuestions() {
        List<Question> list = new ArrayList<>();
        String sql = "SELECT * FROM questions";
        try (Connection conn = getConnection(); 
        Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Question q = new Question();
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

    public List<Question> getDraftQuestions() {
        List<Question> list = new ArrayList<>();
        String sql = "SELECT * FROM questions WHERE status='DRAFT'";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql); 
        ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                Question q = new Question();
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

    public void approveQuestion(Long id) {
        String sql = "UPDATE questions SET status='APPROVED' WHERE question_id=?";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setLong(1, id);
            stmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void rejectQuestion(Long id) {
        String sql = "UPDATE questions SET status='INACTIVE' WHERE question_id=?";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setLong(1, id);
            stmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void approveAllQuestions() {
        String sql = "UPDATE questions SET status='APPROVED' WHERE status='DRAFT'";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void rejectAllQuestions() {
        String sql = "UPDATE questions SET status='INACTIVE' WHERE status='DRAFT'";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Question> getRecentQuestions() {
        List<Question> list = new ArrayList<>();
        String sql = "SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC";
        try (Connection conn = getConnection(); 
        java.sql.Statement stmt = conn.createStatement(); 
        ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Question q = new Question();
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

    public List<QuestionListDto> getDraftQuestionList() {
    List<QuestionListDto> list = new ArrayList<>();
    String sql = "SELECT question_id, description FROM questions WHERE status='DRAFT'";
    try (Connection conn = getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql);
         ResultSet rs = stmt.executeQuery()) {
        while (rs.next()) {
            list.add(new QuestionListDto(
                rs.getLong("question_id"),
                rs.getString("description")
            ));
        }
    } catch (Exception e) {
        e.printStackTrace();
    }

    return list;
}

public List<QuestionListDto> getRecentQuestionList() {
    List<QuestionListDto> list = new ArrayList<>();
    String sql = "SELECT question_id, description FROM questions WHERE created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC";
    try (Connection conn = getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql);
         ResultSet rs = stmt.executeQuery()) {
        while (rs.next()) {
            list.add(new QuestionListDto(
                rs.getLong("question_id"),
                rs.getString("description")
            ));
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return list;
}

public QuestionDto getQuestionDetails(Long id) {
    QuestionDto dto = new QuestionDto();
    try (Connection conn = getConnection()) {
        String qSql = "SELECT * FROM questions WHERE question_id=?";
        PreparedStatement qStmt = conn.prepareStatement(qSql);
        qStmt.setLong(1, id);
        ResultSet qRs = qStmt.executeQuery();
        if (qRs.next()) {
            dto.setQuestionId(qRs.getLong("question_id"));
            dto.setDescription(qRs.getString("description"));
            dto.setQuestionType(qRs.getString("question_type"));
            dto.setDifficultyLevel(qRs.getString("difficulty_level"));
            dto.setStatus(qRs.getString("status"));
        }
        String oSql = "SELECT * FROM mcq_options WHERE question_id=?";
        PreparedStatement oStmt = conn.prepareStatement(oSql);
        oStmt.setLong(1, id);
        ResultSet oRs = oStmt.executeQuery();
        if (oRs.next()) {
            dto.setOptionA(oRs.getString("option_a"));
            dto.setOptionB(oRs.getString("option_b"));
            dto.setOptionC(oRs.getString("option_c"));
            dto.setOptionD(oRs.getString("option_d"));
            dto.setCorrectAnswer(oRs.getString("correct_answer"));
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return dto;
}

@Override
public void updateQuestion(Long id, QuestionDto dto) {

    String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=? WHERE question_id=?";

    try (Connection conn = getConnection();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setString(1, dto.getDescription());
        stmt.setString(2, dto.getQuestionType());
        stmt.setString(3, dto.getDifficultyLevel());
        stmt.setLong(4, id);

        stmt.executeUpdate();

        if ("MCQ".equalsIgnoreCase(dto.getQuestionType())) {

            String optionSql = "UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?";

            PreparedStatement optionStmt = conn.prepareStatement(optionSql);

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
}
