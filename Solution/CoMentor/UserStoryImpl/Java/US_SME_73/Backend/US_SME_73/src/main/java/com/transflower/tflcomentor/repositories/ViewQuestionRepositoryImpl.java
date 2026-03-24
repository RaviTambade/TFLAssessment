package com.transflower.tflcomentor.repositories;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.entities.ViewQuestion;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ViewQuestionRepositoryImpl implements ViewQuestionRepository {

   
    private final String URL = "jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private final String USERNAME = "root";
    private final String PASSWORD = "password";

    @Override
    public ViewQuestion findById(Long questionId) {

        String sql = "SELECT * FROM questions WHERE question_id = ?";

        try (
            Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement ps = conn.prepareStatement(sql)
        ) {

            ps.setLong(1, questionId);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                ViewQuestion question = new ViewQuestion();
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
    public List<ViewQuestion> findAll() {

        List<ViewQuestion> list = new ArrayList<>();
        String sql = "SELECT * FROM questions";

        try (
            Connection conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery()
        ) {

            while (rs.next()) {
                ViewQuestion q = new ViewQuestion();
                q.setDescription(rs.getString("description"));
                q.setQuestionType(rs.getString("question_type"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

}