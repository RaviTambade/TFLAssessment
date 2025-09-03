package com.transflower.tflassessment.demo.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.transflower.tflassessment.demo.entities.SubjectModel;

public class SubjectRepositoryImpl implements SubjectRepository {

    private final String connectionString;
    private final String username;
    private final String password;

    public SubjectRepositoryImpl(String connectionString, String username, String password) {
        this.connectionString = connectionString;
        this.username = username;
        this.password = password;
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

    // Main Method For Testing

    public static void main( String[] args )
    {
        String connectionString = "jdbc:mysql://localhost:3306/assessmentdb";
        String username = "root";
        String password = "password";

        SubjectRepositoryImpl repo = new SubjectRepositoryImpl(connectionString, username, password);

        // Get all subjects
        List<SubjectModel> subjects = repo.getAllSubjects();
        System.out.println("All subjects:");
        for (SubjectModel s : subjects) {
            System.out.println(s);
        }

        // Add subject
        SubjectModel newSubject = new SubjectModel(9, "OOPS");
        int newId = repo.addSubject(newSubject);
        System.out.println("Inserted subject with id: " + newId);

        // Delete subject
        int deleted = repo.deleteSubject(11);
        System.out.println("Deleted rows: " + deleted);
    }
}
