// package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;
// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.stereotype.Repository;

// import com.transflower.tflcomentor.configuration.DBConfig;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
// import com.transflower.tflcomentor.skilltaxonomy.repository.LayerRepository;

// @Repository
// public class LayerRepositoryImpl implements LayerRepository {

//     private Connection getConnection() {
//         return DBConfig.getConnection();
//     }

//     private Layer layer;

//     public LayerRepositoryImpl() {
//         this.layer = new Layer();
//     }

//     public LayerRepositoryImpl(Layer layer) {
//         this.layer = layer;
//     }


//      @Override
//     public List<Layer> getAllLayers() {
//         String query = "SELECT DISTINCT l.id, l.layers from layers l ";

//         PreparedStatement preparedStatement;
//         List<Layer> layersList = new ArrayList<>();
//         try (Connection connection = getConnection()) {
//             PreparedStatement statement = connection.prepareStatement(query);
//             ResultSet resultSet = statement.executeQuery();
//             while (resultSet.next()) {
//                 Layer layer = new Layer();
//                 layer.setId(resultSet.getInt("id"));
//                 layer.setLayerName(resultSet.getString("layers"));
//                 layersList.add(layer);
//             }
//             return layersList;
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return new ArrayList<>();
//         }
//     }
    
// }
