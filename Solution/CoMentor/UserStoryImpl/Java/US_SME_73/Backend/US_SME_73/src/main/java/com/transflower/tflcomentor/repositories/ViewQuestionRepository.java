package com.transflower.tflcomentor.repositories;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.entities.Concept;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflcomentor.dtos.ConceptDto;
import com.transflower.tflcomentor.dtos.ViewQuestionDto;

@Repository
public class ViewQuestionRepository implements IViewQuestionRepository {

    private final String URL = "jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private final String USERNAME = "root";
    private final String PASSWORD = "password";

    @Override
    public Question findById(Long questionId) {

        String sql = "SELECT * FROM questions WHERE question_id = ?";

        try (
                Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setLong(1, questionId);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(rs.getString("question_type"));
                return question;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<Question> findAll() {

        List<Question> list = new ArrayList<>();
        String sql = "SELECT * FROM questions";

        try (
                Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement ps = conn.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Question q = new Question();
                q.setDescription(rs.getString("description"));
                q.setQuestionType(rs.getString("question_type"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Concept> findAllConcepts() {
        List<Concept> list = new ArrayList<>();
        String sql = "SELECT * FROM concepts";

        try (
                Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement ps = conn.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Concept c = new Concept();
                c.setId(rs.getLong("id"));
                c.setName(rs.getString("name"));
                list.add(c);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public List<Question> findByConceptId(Long conceptId) {
        List<Question> list = new ArrayList<>();
        String sql = """ 
                    SELECT q.question_id, q.description, q.question_type 
                    FROM questions q 
                    JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id 
                    JOIN framework_concepts fc ON qfc.framework_id = fc.framework_id 
                    WHERE fc.concept_id = ?
                    """;

        try (
                Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD); PreparedStatement ps = conn.prepareStatement(sql);) {
            ps.setLong(1, conceptId);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Question question = new Question();
                question.setQuestionId(rs.getLong("question_id"));
                question.setDescription(rs.getString("description"));
                question.setQuestionType(rs.getString("question_type"));
                list.add(question);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

}
