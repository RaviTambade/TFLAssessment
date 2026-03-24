package com.tap.tflcomentor.Backend.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.tap.tflcomentor.Backend.Entity.ConceptsEntity;

@Repository
public class ConceptsRepositoryImpl implements ConceptsRepository{

    private ConceptsEntity concepts;
    private static Connection connection;
    private static String url="jdbc:mysql://192.168.1.62:3306/tflcomentor_db";
    private static String password="password";
    private static String username="root";

    public ConceptsRepositoryImpl(){
        this.concepts=new ConceptsEntity();
    }
    
    public ConceptsRepositoryImpl(ConceptsEntity concepts){
        this.concepts=concepts;
    }

    static{        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection=DriverManager.getConnection(url,username,password);
            System.out.println("Connection established successfully!");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public List<ConceptsEntity> getAllConceptsforFramework(String framework){
        String query="SELECT * FROM concepts c "+
                    "JOIN framework_concepts fc "+
                    "ON fc.concept_id=c.id "+
                    "JOIN frameworks f "+
                    "ON f.id=fc.framework_id "+
                    "WHERE f.name=?";

        PreparedStatement preparedStatement;
        List<ConceptsEntity> conceptsList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setString(1, framework);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                ConceptsEntity concept=new ConceptsEntity();
                concept.setId(resultSet.getInt("id"));
                concept.setName(resultSet.getString("name"));
                concept.setDescription(resultSet.getString("description"));
                conceptsList.add(concept);
            }
            return conceptsList;
        } catch (SQLException e) {  
            e.printStackTrace();  
            return null;
        }
    }

    public List<ConceptsEntity> getAllConcepts(){
        String query="SELECT * FROM concepts";
        List<ConceptsEntity> conceptsList=new ArrayList<>();
        ConceptsEntity concepts=new ConceptsEntity();
        try{
             Statement statement=connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query);

             while(resultSet.next()){
                concepts.setId(resultSet.getInt("id"));
                concepts.setName(resultSet.getString("name"));
                concepts.setDescription(resultSet.getString("description"));
                conceptsList.add(concepts);
             }
            return conceptsList;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
