package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.repository.QuestionFilterRepository;

@Repository
public class QuestionFilterRepositoryImpl implements QuestionFilterRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

    @Override
    public List<Question> getQuestions(
            QuestionType question_type,
            DifficultyLevel difficulty_level,
            QuestionStatus status,
            String language,
            String layer,
            String framework,
            String concept,
            Long userId,
            Long roleId) {

        List<Question> questionList = new ArrayList<>();

        String query = """
                SELECT DISTINCT q.*
        FROM questions q
        WHERE
        (
            ? = 3
            OR
            (
                ? = 4
                AND q.runtime IN (
                    SELECT e.runtime
                    FROM expertise e
                    WHERE e.user_id = ?
                )
            )
        )
        AND (? IS NULL OR LOWER(q.language) = LOWER(?))
        AND (? IS NULL OR LOWER(q.layer) = LOWER(?))
        AND (? IS NULL OR LOWER(q.concept) = LOWER(?))
        AND (? IS NULL OR LOWER(q.framework) = LOWER(?))
        AND (? IS NULL OR q.question_type = ?)
        AND (? IS NULL OR q.difficulty_level = ?)
        AND (? IS NULL OR q.status = ?);
                                """;
        try (Connection connection = getConnection()) {

            PreparedStatement ps = connection.prepareStatement(query);

            // role check
            ps.setLong(1, roleId);   // Mentor check
            ps.setLong(2, roleId);   // SME check
            ps.setLong(3, userId);   // SME expertise lookup

            // language
            ps.setString(4, language);
            ps.setString(5, language);

            // layer
            ps.setString(6, layer);
            ps.setString(7, layer);

            // concept
            ps.setString(8, concept);
            ps.setString(9, concept);

            // framework
            ps.setString(10, framework);
            ps.setString(11, framework);

            // question type
            ps.setString(12, question_type != null ? question_type.name() : null);
            ps.setString(13, question_type != null ? question_type.name() : null);

            // difficulty
            ps.setString(14, difficulty_level != null ? difficulty_level.name() : null);
            ps.setString(15, difficulty_level != null ? difficulty_level.name() : null);

            // status
            ps.setString(16, status != null ? status.name() : null);
            ps.setString(17, status != null ? status.name() : null);
                
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                Question question = new Question();
                question.setQuestionId(rs.getLong("question_Id"));

                question.setDescription(rs.getString("description"));

                String setquestionType = rs.getString("question_type");
                if (setquestionType != null) {
                    question.setQuestionType(
                            QuestionType.valueOf(setquestionType));
                }

                String setDifficultyLevel = rs.getString("difficulty_level");
                if (setDifficultyLevel != null) {

                    question.setDifficultyLevel(
                            DifficultyLevel.valueOf(setDifficultyLevel));
                }

                String setStatus = rs.getString("status");
                if (setStatus != null) {
                    question.setQuestionStatus(
                            QuestionStatus.valueOf(setStatus));
                }

                question.setLanguage(rs.getString("language"));
                question.setLayer(rs.getString("layer"));
                question.setFramework(rs.getString("framework"));
                question.setConcept(rs.getString("concept"));

                questionList.add(question);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return questionList;
    }
}
