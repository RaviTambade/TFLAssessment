package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.repository.QuestionFilterRepository;

@Repository
public class QuestionFilterRepositoryImpl implements QuestionFilterRepository{
   
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
        String concept) {

    List<Question> questionList = new ArrayList<>();

    String query = """
            SELECT *
            FROM questions q
            WHERE (? IS NULL OR q.language = ?)
            AND (? IS NULL OR q.layer = ?)
            AND (? IS NULL OR q.concept = ?)
            AND (? IS NULL OR q.framework = ?)
            AND (? IS NULL OR q.question_type = ?)
            AND (? IS NULL OR q.difficulty_level = ?)
            AND (? IS NULL OR q.status = ?)
            """;

    try (Connection connection = getConnection()) {

        PreparedStatement ps = connection.prepareStatement(query);

        // language
        ps.setString(1, language);
        ps.setString(2, language);

        // layer
        ps.setString(3, layer);
        ps.setString(4, layer);

        // concept
        ps.setString(5, concept);
        ps.setString(6, concept);

        // framework
        ps.setString(7, framework);
        ps.setString(8, framework);

        // question type
        ps.setString(9, question_type != null ? question_type.name() : null);
        ps.setString(10, question_type != null ? question_type.name() : null);

        // difficulty level
        ps.setString(11, difficulty_level != null ? difficulty_level.name() : null);
        ps.setString(12, difficulty_level != null ? difficulty_level.name() : null);

        // status
        ps.setString(13, status != null ? status.name() : null);
        ps.setString(14, status != null ? status.name() : null);

        ResultSet rs = ps.executeQuery();

        while (rs.next()) {

            Question question = new Question();

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
