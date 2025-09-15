package com.transflower.tflassessment.repositories;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.jasypt.util.text.AES256TextEncryptor;
import org.springframework.stereotype.Repository;

import com.transflower.tflassessment.entities.SubjectModel;

@Repository
public class SubjectRepositoryImpl implements SubjectRepository {
      private static Connection connection;

    static {
        try {
            Properties props = new Properties();
            try (InputStream input = SubjectRepositoryImpl.class.getClassLoader().getResourceAsStream("application.properties")) {
                props.load(input);
            }

            String url = props.getProperty("db.url");
            String user = props.getProperty("db.username");
            String encPass = props.getProperty("db.password"); // this
            AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
            textEncryptor.setPassword("TransFlower"); // your secret key
            String pass = textEncryptor.decrypt(encPass.replace("ENC(", "").replace(")", ""));

            String driver = props.getProperty("db.driver");

            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, pass);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error in connecting to database");
        }
    }
       
    @Override
    public List<SubjectModel> getAllSubjects() {
        List<SubjectModel> subjects = new ArrayList<>();
        String query = "SELECT * FROM subjects";

        try (
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

        try (
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

        try (
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setInt(1, subjectId);
            return statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        }
    }

}
