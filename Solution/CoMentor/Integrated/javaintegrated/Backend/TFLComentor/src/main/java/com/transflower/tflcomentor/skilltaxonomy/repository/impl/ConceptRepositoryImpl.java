package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;
import java.time.ZoneId;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.repository.ConceptRepository;  


@Repository
public class ConceptRepositoryImpl implements ConceptRepository {

    private Concept concepts;

    public ConceptRepositoryImpl() {
        this.concepts = new Concept();
    }

    public ConceptRepositoryImpl(Concept concepts) {
        this.concepts = concepts;
    }

    private Connection getConnection() {
        return DBConfig.getConnection();
    }

    @Override
    public List<Concept> getAllConcepts(){
        String query = "SELECT  DISTINCT c.id, c.name, c.description FROM concepts c";
        List<Concept> conceptsList = new ArrayList<>();
        try (Connection connection = getConnection()) {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Concept concepts = new Concept();
                concepts.setId(resultSet.getInt("id"));
                concepts.setName(resultSet.getString("name"));
                concepts.setDescription(resultSet.getString("description"));
                conceptsList.add(concepts);
            }
            return conceptsList;
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public List<Concept> getAllConceptsforFramework(int framework) {
        String query = "SELECT DISTINCT c.id, c.name, c.description from concepts c " +
                "JOIN framework_concepts fc " +
                "ON fc.concept_id=c.id " +
                "JOIN frameworks f " +
                "ON f.id=fc.framework_id " +
                "WHERE f.id=?";
        PreparedStatement preparedStatement;
        List<Concept> conceptsList = new ArrayList<>();
        try (Connection connection = getConnection()) {
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, framework);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Concept concept = new Concept();
                concept.setId(resultSet.getInt("id"));
                concept.setName(resultSet.getString("name"));
                concept.setDescription(resultSet.getString("description"));
                conceptsList.add(concept);
            }
            return conceptsList;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public Concept getById(Long id) {
        Concept concept = null;

        try (Connection connection = getConnection()) {

            String query = "SELECT * FROM concepts WHERE id = ?";
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setLong(1, id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                concept = new Concept();
                concept.setId(rs.getInt("id"));
                concept.setName(rs.getString("name"));
                concept.setDescription(rs.getString("description"));
                concept.setStatus(rs.getInt("status"));
                concept.setCreatedAt(
                        LocalDateTime.ofInstant(rs.getTimestamp("created_at").toInstant(), ZoneId.systemDefault()));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return concept;
    }

    @Override
    public boolean addConcept(Concept concept) {
        String query = "INSERT INTO concepts(name,description,status) VALUE(?,?,?)";
        try (Connection connection = getConnection()) {
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setString(1, concept.getName());
            ps.setString(2, concept.getDescription());
            ps.setInt(3, concept.getStatus());

            ps.executeQuery();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
