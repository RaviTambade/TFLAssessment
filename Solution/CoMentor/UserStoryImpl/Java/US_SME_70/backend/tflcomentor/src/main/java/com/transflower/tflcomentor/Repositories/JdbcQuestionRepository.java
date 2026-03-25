package com.transflower.tflcomentor.Repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.ViewQuestionsByStatus;

@Repository
public class JdbcQuestionRepository implements QuestionRepository {

    private final DbConnection dbConnection;

    public JdbcQuestionRepository(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    @Override
    public List<ViewQuestionsByStatus> findByType(String questionType) {
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
                List<ViewQuestionsByStatus> results = new java.util.ArrayList<>();
                while (rs.next()) {
                    ViewQuestionsByStatus view = new ViewQuestionsByStatus();
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
