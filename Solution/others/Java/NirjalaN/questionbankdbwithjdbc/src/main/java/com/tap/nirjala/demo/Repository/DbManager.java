package com.tap.nirjala.demo.Repository;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.tap.nirjala.demo.Entity.Question;

public class DbManager {
    public static Connection connection;
    static{
        try{
        String URL="jdbc:mysql://localhost:3306/assessmentdb";
        String USERNAME="root";
        String PASSWORD="password";
        connection=DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    catch(Exception e)
    {
        System.out.println(e);
    }
};

public static ArrayList<Question> getAll() throws SQLException
{
    ArrayList<Question> questions=new ArrayList<Question>();
    Statement statement=connection.createStatement();
    ResultSet result=statement.executeQuery("select * from questionbank");
    java.sql.ResultSetMetaData ResultSetMetaData=result.getMetaData();
    int columnCount=ResultSetMetaData.getColumnCount();
        for(int i=1;i<=columnCount;i++)
        {
            System.out.println(ResultSetMetaData.getColumnName(i)+"\t");
        }
        while(result.next())
        {
       Question question=new Question(result.getString(3), result.getString(4), result.getString(5), result.getString(6), result.getString(7), result.getString(8), result.getInt(9), result.getInt(1), result.getInt(2));
                questions.add(question);
    questions.add(question);    
    }
    return questions;
    
}
public static boolean insert(Question q) throws Exception
{
    boolean status=false;
    PreparedStatement preparedStatement=connection.prepareStatement("insert into questionbank values(?,?,?,?,?,?,?,?)");
    preparedStatement.setInt(1,q.getId());
   preparedStatement.setInt(2, q.getSubjectId());
        preparedStatement.setString(3, q.getTitle());
        preparedStatement.setString(4, q.getOptionA());
        preparedStatement.setString(5, q.getOptionB());
        preparedStatement.setString(6, q.getOptionC());
        preparedStatement.setString(7, q.getOptionD());
        preparedStatement.setString(8, q.getCorrectAnswer());
        preparedStatement.setInt(9, q.getEvaluationCriteria());
        preparedStatement.executeUpdate();
        status=true;
        return status;
    }

    public static boolean update(int idToBeUpdate,Question q) throws Exception {
        boolean status = false;
        PreparedStatement preparedStatement = connection.prepareStatement("update questionbank set subjectid=?, title=?, a=?,b=?,c=?,d=?,answerkey=?,evaluationcriteriaid=?,id=? where id=?");
        preparedStatement.setInt(10, idToBeUpdate);
        preparedStatement.setInt(9, q.getId());
        preparedStatement.setInt(1, q.getSubjectId());
        preparedStatement.setString(2, q.getTitle());
        preparedStatement.setString(3, q.getOptionA());
        preparedStatement.setString(4, q.getOptionB());
        preparedStatement.setString(5, q.getOptionC());
        preparedStatement.setString(6, q.getOptionD());
        preparedStatement.setString(7, q.getCorrectAnswer());
        preparedStatement.setInt(8, q.getEvaluationCriteria());

        preparedStatement.executeUpdate();
        status = true;
        return status;
    }
    public static boolean delete(int idToBeDelete)throws Exception
    {
        boolean status=false;
        PreparedStatement preparedStatement=connection.prepareStatement("delete from questionbank where id=?");
        preparedStatement.setInt(1, idToBeDelete);
        preparedStatement.executeUpdate();
        status=true;
        return status;
    }
    }
    
