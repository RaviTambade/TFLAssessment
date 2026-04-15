package com.transflower.tflcomentor.repositories;

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

    public void insertQuestion(Question q) {
        String sql = "INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())";
        try (Connection conn = getConnection(); 
        PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, q.getDescription());
            stmt.setString(2, q.getQuestionType());
            stmt.setString(3, q.getDifficultyLevel());
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
}
