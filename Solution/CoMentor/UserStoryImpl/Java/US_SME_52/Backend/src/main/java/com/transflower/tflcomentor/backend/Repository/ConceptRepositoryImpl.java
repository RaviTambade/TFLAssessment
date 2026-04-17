package com.transflower.tflcomentor.backend.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
//import com.transflower.tflcomentor.backend.Repository.ConceptRepositoryImpl.DBconnection;

import com.transflower.tflcomentor.backend.Entity.Concept;

@Repository
public class ConceptRepositoryImpl implements ConceptRepository 
{
    private Concept concepts;
    private static Connection connection;
    private static String url = "jdbc:mysql://localhost:3306/tflcomentor_db";
    private static String password = "password";
    private static String username = "root";

    public ConceptRepositoryImpl() {
        this.concepts = new Concept();
    }

    public ConceptRepositoryImpl(Concept concepts) {
        this.concepts = concepts;
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

    
    

     //Get All Concepts
    @Override
    public List<Concept> getAllConcepts() {
        List<Concept> concepts = new ArrayList<>();

        try {
            

            String query = "SELECT * FROM concepts";
            PreparedStatement ps = connection.prepareStatement(query);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Concept concept = new Concept();
                concept.setId(rs.getLong("id"));
                concept.setName(rs.getString("name"));
                concept.setDescription(rs.getString("description"));
                concept.setStatus(rs.getString("status"));
                concept.setCreatedAt(rs.getString("created_at"));

                concepts.add(concept);
            }

    

        } catch (Exception e) {
            e.printStackTrace();
        }

        return concepts;
    }

    @Override
    public Concept findById(Long id) {
        Concept concept = null;

        try {
           
             String query = "SELECT * FROM concepts WHERE id = ?";
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setLong(1, id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                concept = new Concept();
                concept.setId(rs.getLong("id"));
                concept.setName(rs.getString("name"));
                concept.setDescription(rs.getString("description"));
                concept.setStatus(rs.getString("status"));
                concept.setCreatedAt(rs.getString("created_at"));
            }

        

        } catch (Exception e) {
            e.printStackTrace();
        }

        return concept;
    }
}

