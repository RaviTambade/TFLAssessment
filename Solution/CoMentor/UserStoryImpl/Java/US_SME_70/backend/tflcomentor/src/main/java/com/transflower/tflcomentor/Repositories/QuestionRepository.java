package com.transflower.tflcomentor.Repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Questions;

@Repository
public class QuestionRepository implements IQuestionRepository {

    private final DbConnection dbConnection;

    public QuestionRepository(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    @Override
    public List<Questions> findByType(String questionType) {
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
                List<Questions> results = new java.util.ArrayList<>();
                while (rs.next()) {
                    Questions question = new Questions();
                    question.setQuestionId(rs.getInt("question_id"));
                    question.setQuestionType(rs.getString("question_type"));
                    question.setQuestionText(rs.getString("description"));
                    results.add(question);
                }
                return results;
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Failed to fetch questions by type", ex);
        }
    }
}
