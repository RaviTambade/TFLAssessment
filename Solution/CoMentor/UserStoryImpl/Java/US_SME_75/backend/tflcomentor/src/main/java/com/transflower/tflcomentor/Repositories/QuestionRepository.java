package com.transflower.tflcomentor.Repositories;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Question;

@Repository
public class QuestionRepository implements IQuestionRepository {

    private final DbConnection dbConnection;

    public QuestionRepository(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    @Override
    public Page<Question> findByStatus(String questionStatus, Pageable pageable) {
        if (questionStatus == null || questionStatus.isBlank()) {
            throw new IllegalArgumentException("questionStatus parameter is required");
        }
        if (pageable == null) {
            throw new IllegalArgumentException("pageable parameter is required");
        }

        String statusValue;
        switch (questionStatus.trim().toUpperCase()) {
            case "ACTIVE", "INACTIVE", "DRAFT" -> statusValue = questionStatus.trim().toUpperCase();
            default -> throw new IllegalArgumentException("Unsupported status value: " + questionStatus);
        }

        String countSql = "SELECT COUNT(*) FROM questions WHERE status = ?";
        String pagedSql = """
                SELECT question_id, question_type, description, difficulty_level, status
                FROM questions
                WHERE status = ?
                ORDER BY question_id
                LIMIT ? OFFSET ?
                """;

        try (var connection = dbConnection.getConnection()) {
            long totalElements;
            try (PreparedStatement countStmt = connection.prepareStatement(countSql)) {
                countStmt.setString(1, statusValue);
                try (ResultSet countRs = countStmt.executeQuery()) {
                    if (!countRs.next()) {
                        totalElements = 0;
                    } else {
                        totalElements = countRs.getLong(1);
                    }
                }
            }

            try (PreparedStatement statement = connection.prepareStatement(pagedSql)) {
                statement.setString(1, statusValue);
                statement.setInt(2, pageable.getPageSize());
                statement.setLong(3, pageable.getOffset());

                List<Question> results = new ArrayList<>();
                try (ResultSet rs = statement.executeQuery()) {
                    while (rs.next()) {
                        Question view = new Question();
                        view.setQuestionId(rs.getInt("question_id"));
                        view.setQuestionType(rs.getString("question_type"));
                        view.setQuestionText(rs.getString("description"));
                        view.setQuestiondifficultyLevel(rs.getString("difficulty_level"));
                        view.setQuestionStatus(rs.getString("status"));
                        results.add(view);
                    }
                }
                return new PageImpl<>(results, pageable, totalElements);
            }

        } catch (SQLException ex) {
            throw new RuntimeException("Failed to fetch questions by status", ex);
        }
    }
}
