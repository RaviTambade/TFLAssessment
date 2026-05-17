package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
// import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.repository.TechnologyRepository;

@Repository
public class TechnologyRepositoryImpl implements TechnologyRepository {
 private Concept concepts;

    public TechnologyRepositoryImpl() {
        this.concepts = new Concept();
    }

    public TechnologyRepositoryImpl(Concept concepts) {
        this.concepts = concepts;
    }

    private Connection getConnection() {
        return DBConfig.getConnection();
    }   

    @Override
    public List<ConceptQuestionCount> getAllConceptsCount() {
        String query = "SELECT DISTINCT concept, COUNT(*) as question_count FROM questions GROUP BY concept";
        List<ConceptQuestionCount> conceptCounts = new ArrayList<>();
        try (Connection connection = getConnection()) {
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                conceptCounts.add(new ConceptQuestionCount(
                    resultSet.getString("concept"),
                    resultSet.getInt("question_count")
                ));
            }
            return conceptCounts;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public List<DifficultyQuestionCount> getAllQuestionsByDifficulty(){
        String query ="SELECT DISTINCT difficulty_level, COUNT(*) AS question_count FROM questions GROUP BY difficulty_level";
        List<DifficultyQuestionCount> questionCount=new ArrayList<>();
        try(Connection connection = getConnection()){
            PreparedStatement statement=connection.prepareStatement(query);
            ResultSet rs=statement.executeQuery();
            while(rs.next()){
                questionCount.add(new DifficultyQuestionCount(rs.getString("difficulty_level"), rs.getInt("question_count")));
            }
            return questionCount;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
