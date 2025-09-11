package com.transflower.tflassessment.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.SubjectModel;

@Repository
public class SubjectRepositoryImpl implements SubjectRepository {

    private final String connectionString;
    private final String username;
    private final String password;
     
    @Autowired
    public SubjectRepositoryImpl() {
        this.connectionString = "jdbc:mysql://localhost:3306/assessmentdb";
        this.username = "root";
        this.password = "password";
    }

    @Override
    public List<SubjectModel> getAllSubjects() {
        List<SubjectModel> subjects = new ArrayList<>();
        String query = "SELECT * FROM subjects";

        try (Connection connection = DriverManager.getConnection(connectionString, username, password);
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet rs = statement.executeQuery()) {

            while (rs.next()) {
                SubjectModel subject = new SubjectModel();
                subject.setId(rs.getInt("id"));
                subject.setTitle(rs.getString("title"));
                subjects.add(subject);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return subjects;
    }

    @Override
    public int addSubject(SubjectModel subject) {
        String query = "INSERT INTO subjects (title) VALUES (?)";

        try (Connection connection = DriverManager.getConnection(connectionString, username, password);
             PreparedStatement statement = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS)) {

            statement.setString(1, subject.getTitle());
            int rows = statement.executeUpdate();

            if (rows > 0) {
                try (ResultSet keys = statement.getGeneratedKeys()) {
                    if (keys.next()) {
                        return keys.getInt(1); // return generated ID
                    }
                }
            }
            return rows;

        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        }
    }

    @Override
    public int deleteSubject(int subjectId) {
        String query = "DELETE FROM subjects WHERE id = ?";

        try (Connection connection = DriverManager.getConnection(connectionString, username, password);
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);
            return statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        }
    }
}
