package com.transflower.tflcomentor.Repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Questions;

@Repository
public class QuestionsRepositoryImpl implements QuestionsRepository {
    private Questions questions;
    private static Connection connection;
    private static String url = "jdbc:mysql://localhost:3306/tflcomentor_db";
    private static String password = "password";
    private static String username = "root";

    public QuestionsRepositoryImpl() {
        this.questions = new Questions();
    }

    public QuestionsRepositoryImpl(Questions questions) {
        this.questions = questions;
    }

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connection established successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Questions getQuestionById(long question_id) {

        try {

            String sql = "SELECT * FROM tflcomentor_db.questions WHERE question_id = ?";
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setLong(1, question_id);

            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                long id = rs.getLong("question_id");
                String description = rs.getString("description");
                String questionType = rs.getString("question_type");
                String difficultyLevel = rs.getString("difficulty_level");
                String createdAt = rs.getString("created_at");
                String status = rs.getString("status");

                return new Questions(
                        id,
                        description,
                        questionType,
                        difficultyLevel,
                        createdAt,
                        status);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return questions;
    }

    @Override
    public List<Questions> getAllQuestions() {
        List<Questions> list = new ArrayList<>();

        try {
            String query = "SELECT * FROM questions";
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                Questions q = new Questions(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("difficulty_level"),
                        rs.getString("created_at"),
                        rs.getString("status"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public List<Questions> getQuestionsByDifficulty(String difficulty) {
        List<Questions> list = new ArrayList<>();

        try {
            String query = "SELECT * FROM questions WHERE difficulty_level = ?";
            PreparedStatement stmt = connection.prepareStatement(query);
            stmt.setString(1, difficulty);

            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Questions q = new Questions(
                        rs.getLong("question_id"),
                        rs.getString("description"),
                        rs.getString("question_type"),
                        rs.getString("difficulty_level"),
                        rs.getString("created_at"),
                        rs.getString("status"));
                list.add(q);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

}
