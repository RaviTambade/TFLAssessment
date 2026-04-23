package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.repository.FrameworkRepository;

@Repository
public class FrameworkRepositoryImpl implements FrameworkRepository {

    private Connection getConnection() {
        return DBConfig.getConnection();
    }
    private FrameworkRepositoryImpl() {
        // Private constructor to prevent instantiation
    }

    @Override
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId)  {
        String query = "SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?";

        PreparedStatement preparedStatement;
        List<Framework> frameworksList = new ArrayList<>();
        try (Connection connection = getConnection()) {
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, languageId);
            preparedStatement.setInt(2, layerId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Framework framework = new Framework();
                framework.setId(resultSet.getInt("id"));
                framework.setFrameworkName(resultSet.getString("name"));
                System.out.println("Framework found: " + framework.getFrameworkName());
                frameworksList.add(framework);
            }
            return frameworksList;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
    
}
