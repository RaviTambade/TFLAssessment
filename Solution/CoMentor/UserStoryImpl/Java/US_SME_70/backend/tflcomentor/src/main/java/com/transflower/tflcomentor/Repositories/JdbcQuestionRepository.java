package com.transflower.tflcomentor.Repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.ViewQuestionsByType;

@Repository
public class JdbcQuestionRepository implements QuestionRepository {

    private final DbConnection dbConnection;

    public JdbcQuestionRepository(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    @Override
    public List<ViewQuestionsByType> findByType(String questionType) {
        String sql = """
                SELECT question_id, question_type, description
                FROM questions
                WHERE question_type = ?
                ORDER BY question_id
                """;
        try (var connection = dbConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, questionType);
            try (ResultSet rs = statement.executeQuery()) {
                List<ViewQuestionsByType> results = new java.util.ArrayList<>();
                while (rs.next()) {
                    ViewQuestionsByType view = new ViewQuestionsByType();
                    view.setQuestionId(rs.getInt("question_id"));
                    view.setQuestionType(rs.getString("question_type"));
                    view.setQuestionText(rs.getString("description"));
                    results.add(view);
                }
                return results;
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Failed to fetch questions by type", ex);
        }
    }
}
