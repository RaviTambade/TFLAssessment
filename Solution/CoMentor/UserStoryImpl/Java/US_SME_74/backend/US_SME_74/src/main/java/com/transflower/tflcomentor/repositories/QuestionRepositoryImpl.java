package com.transflower.tflcomentor.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.config.DBConfig;
import com.transflower.tflcomentor.entities.Question;

@Repository
public class QuestionRepositoryImpl implements IQuestionRepository {

    // ✅ FIND ALL
    @Override
    public List<Question> findAll() {
        String sql = "SELECT question_id, description, question_type, difficulty_level, created_at, status FROM questions";
        List<Question> questions = new ArrayList<>();

        try (Connection connection = DBConfig.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                questions.add(mapRow(rs));
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch questions", e);
        }

        return questions;
    }

    // ✅ FIND BY ID
    @Override
    public Optional<Question> findById(Long id) {

        String sql = "SELECT * FROM questions WHERE question_id = ?";

        try (Connection connection = DBConfig.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sql)) {

            stmt.setLong(1, id);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                return Optional.of(mapRow(rs));
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch question by id", e);
        }

        return Optional.empty();
    }

    // ✅ INSERT
    @Override
    public Question insertQuestion(Question question) {

        String sql = "INSERT INTO questions (description, question_type, difficulty_level, created_at, status) VALUES (?, ?, ?, ?, ?)";

        try (Connection connection = DBConfig.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            stmt.setString(1, question.getDescription());
            stmt.setString(2, question.getQuestionType().name());
            stmt.setString(3, question.getDifficultyLevel().name());
            stmt.setTimestamp(4, question.getCreatedAt() != null ? Timestamp.valueOf(question.getCreatedAt()) : null);
            stmt.setString(5, question.getStatus().name());

            stmt.executeUpdate();

            ResultSet keys = stmt.getGeneratedKeys();
            if (keys.next()) {
                question.setQuestionId(keys.getLong(1));
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to insert question", e);
        }

        return question;
    }

    // ✅ UPDATE
    @Override
    public Question updateQuestion(Question question) {

        String sql = "UPDATE questions SET description=?, question_type=?, difficulty_level=?, status=? WHERE question_id=?";

        try (Connection connection = DBConfig.getConnection();
             PreparedStatement stmt = connection.prepareStatement(sql)) {

            stmt.setString(1, question.getDescription());
            stmt.setString(2, question.getQuestionType().name());
            stmt.setString(3, question.getDifficultyLevel().name());
            stmt.setString(4, question.getStatus().name());
            stmt.setLong(5, question.getQuestionId());

            int updated = stmt.executeUpdate();

            if (updated == 0) {
                throw new RuntimeException("Question not found");
            }

        } catch (Exception e) {
            throw new RuntimeException("Failed to update question", e);
        }

        return question;
    }

    // ✅ COMMON METHOD
    private Question mapRow(ResultSet rs) throws SQLException {

        Question q = new Question();

        q.setQuestionId(rs.getLong("question_id"));
        q.setDescription(rs.getString("description"));
        q.setQuestionType(Question.QuestionType.valueOf(rs.getString("question_type")));
        q.setDifficultyLevel(Question.DifficultyLevel.valueOf(rs.getString("difficulty_level")));

        Timestamp ts = rs.getTimestamp("created_at");
        if (ts != null) {
            q.setCreatedAt(ts.toLocalDateTime());
        }

        q.setStatus(Question.Status.valueOf(rs.getString("status")));

        return q;
    }
}