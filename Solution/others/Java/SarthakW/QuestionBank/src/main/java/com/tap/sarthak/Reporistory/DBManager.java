package com.tap.sarthak.Reporistory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.*;

import com.tap.sarthak.Entity.Question;

import java.sql.*;

public class DBManager {

    private static Connection connection;

    static {
        try {
            String URL = "jdbc:mysql://localhost:3306/assessmentdb";
            String Username = "root";
            String Password = "Sarthak@2004";
            connection = DriverManager.getConnection(URL, Username, Password);
        } catch (Exception e) {
            System.out.println(e);
        }
    };

    public static ArrayList<Question> getAll() throws Exception
    {
        
     ArrayList<Question> questions = new ArrayList<Question>();
     Statement statement = connection.createStatement();
     ResultSet result = statement.executeQuery("SELECT * FROM questionbank");
     ResultSetMetaData colomn = result.getMetaData();
     int colomnCount = colomn.getColumnCount();
     for(int i = 1;i<=colomnCount;i++)
     {
        System.out.println(colomn.getColumnName(colomnCount));
     }
     while(result.next())
    {
        Question question = new Question(result.getString(3),result.getString(4),result.getString(5),result.getString(6),result.getString(7),result.getString(8),result.getInt(9),result.getInt(1),result.getInt(2));
        questions.add(question);
    }
     return questions;
    }

    public static boolean insert(Question q) throws Exception
    {
        boolean status = false;
        PreparedStatement pst = connection.prepareStatement("Insert into questionbank Values(?,?,?,?,?,?,?,?,?)");
        pst.setInt(1, q.getId());
        pst.setInt(2,q.getSubjectId());
        pst.setString(3,q.getTitle());
        pst.setString(4,q.getOptionA());
        pst.setString(5,q.getOptionB());
        pst.setString(6,q.getOptionC());
        pst.setString(7,q.getOptionD());
        pst.setString(8,q.getCorrectAnswer());
        pst.setInt(9,q.getEvaluationCritera());
        pst.executeUpdate();
        status = true;
        return status;
    }

    public static boolean update(int idTobeUpdated ,Question q) throws Exception
    {
        boolean status = false;
        PreparedStatement pst = connection.prepareStatement("Update questionbank set Subjectid=?,Title=?,a=?,b=?,c=?,d=?,answerkey=?,evaluationcriteriaid=? Where id=?");
        pst.setInt(9,idTobeUpdated);
        pst.setInt(1,q.getSubjectId());
        pst.setString(2,q.getTitle());
        pst.setString(3,q.getOptionA());
        pst.setString(4,q.getOptionB());
        pst.setString(5,q.getOptionC());
        pst.setString(6,q.getOptionD());
        pst.setString(7,q.getCorrectAnswer());
        pst.setInt(8,q.getEvaluationCritera());
        pst.executeUpdate();
        status = true;
        return status;
    }

    public static boolean delete(int idToDeleted) throws Exception
    {
        boolean status = false;
        PreparedStatement pst = connection.prepareStatement("Delete From questionbank Where id = ?");
        pst.setInt(1,idToDeleted);
        pst.executeUpdate();
        status = true;
        return status;
    }

}
