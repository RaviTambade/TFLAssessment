package com.transflower.tflcomentor.Repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Question;

@Repository
public class QuestionRepository implements IQuestionRepository {

    private final DbConnection dbConnection;

    public QuestionRepository(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    @Override
    public List<Question> findByStatus(String questionStatus) {
        String sql = """
                SELECT question_id, question_type, description, difficulty_level, status
                FROM questions
                WHERE status = ?
                ORDER BY question_id
                """;

                // filter question by status

        try (var connection = dbConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            int statusValue;
            if (questionStatus == null || questionStatus.isBlank()) {
                throw new IllegalArgumentException("questionStatus parameter is required");
            }
            switch (questionStatus.trim().toLowerCase()) {
                case "true", "1", "active" -> statusValue = 1;
                case "false", "0", "inactive" -> statusValue = 0;
                default -> throw new IllegalArgumentException("Unsupported status value: " + questionStatus);
            }
            statement.setInt(1, statusValue);
            try (ResultSet rs = statement.executeQuery()) {
                List<Question> results = new java.util.ArrayList<>();
                while (rs.next()) {
                    Question view = new Question();
                    view.setQuestionId(rs.getInt("question_id"));
                    view.setQuestionType(rs.getString("question_type"));
                    view.setQuestionText(rs.getString("description"));
                    view.setQuestiondifficultyLevel(rs.getString("difficulty_level"));
                    view.setQuestionStatus(String.valueOf(rs.getBoolean("status")));
                    results.add(view);
                }
                return results;
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Failed to fetch questions by status", ex);
        }
    }
}
