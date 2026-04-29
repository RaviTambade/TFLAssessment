// package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;
// import java.util.ArrayList;
// import java.util.List;

// import org.springframework.stereotype.Repository;

// import com.transflower.tflcomentor.configuration.DBConfig;
// import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
// import com.transflower.tflcomentor.skilltaxonomy.repository.LanguageRepository;

// @Repository
// public class LanguageRepositoryImpl implements LanguageRepository {

//     private Language languages;
//     private Connection getConnection() {
//         return DBConfig.getConnection();
//     }

//     // US_SME_76: Get all languages assigned to an SME
//     // Flow: sme_runtimes (user_id) → runtime_id → languages (runtime_id)
//     @Override
//     public List<LanguageResponseDto> getLanguagesBySmeId(long smeId) {
//         String sql = """
//                 SELECT l.id, l.language
//                 FROM sme_runtimes sr
//                 JOIN languages l ON l.runtime_id = sr.runtime_id
//                 WHERE sr.user_id = ?
//                 ORDER BY l.id
//                 """;
//         try (var connection = getConnection(); 
//         PreparedStatement statement = connection.prepareStatement(sql)) {
//             statement.setLong(1, smeId);
//             try (ResultSet rs = statement.executeQuery()) {
//                 List<LanguageResponseDto> results = new ArrayList<>();
//                 while (rs.next()) {
//                     LanguageResponseDto language = new LanguageResponseDto();
//                     language.setLanguageId(rs.getInt("id"));
//                     language.setLanguageName(rs.getString("language"));
//                     results.add(language);
//                 }
//                 return results;
//             }
//         } catch (SQLException ex) {
//             throw new RuntimeException("Failed to fetch languages for SME id: " + smeId, ex);
//         }
//     }

//      @Override
//     public List<Language> getAllLanguages(int runtimeId) {

//         String query = "SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?";
//         List<Language> languagesList = new ArrayList<>();

//         try (Connection connection = getConnection()) {
//             PreparedStatement preparedStatement = connection.prepareStatement(query);
//             preparedStatement.setInt(1, runtimeId);
//             ResultSet resultSet = preparedStatement.executeQuery();
//             while (resultSet.next()) {
//                 Language language = new Language();
//                 language.setId(resultSet.getInt("id"));
//                 language.setLanguageName(resultSet.getString("language"));
//                 language.setRuntimeId(resultSet.getInt("runtime_id"));
//                 languagesList.add(language);
//             }
//             return languagesList;
//         } catch (Exception e) {
//             e.printStackTrace();
//             return null;
//         }
//     }

   
// }
