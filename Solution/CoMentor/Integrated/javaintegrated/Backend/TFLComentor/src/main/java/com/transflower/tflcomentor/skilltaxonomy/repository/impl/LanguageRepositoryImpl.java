package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageDto;
import com.transflower.tflcomentor.skilltaxonomy.repository.LanguageRepository;

@Repository
public class LanguageRepositoryImpl implements LanguageRepository {

    private final DBConfig dbConfig;

    public LanguageRepositoryImpl(DBConfig dbConfig) {
        this.dbConfig = dbConfig;
    }

    // US_SME_76: Get all languages assigned to an SME
    // Flow: sme_runtimes (user_id) → runtime_id → languages (runtime_id)
    @Override
    public List<LanguageDto> getLanguagesBySmeId(long smeId) {
        String sql = """
                SELECT l.id, l.language
                FROM sme_runtimes sr
                JOIN languages l ON l.runtime_id = sr.runtime_id
                WHERE sr.user_id = ?
                ORDER BY l.id
                """;
        try (var connection = dbConfig.getConnection(); PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, smeId);
            try (ResultSet rs = statement.executeQuery()) {
                List<LanguageDto> results = new ArrayList<>();
                while (rs.next()) {
                    LanguageDto language = new LanguageDto();
                    language.setLanguageId(rs.getInt("id"));
                    language.setLanguageName(rs.getString("language"));
                    results.add(language);
                }
                return results;
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Failed to fetch languages for SME id: " + smeId, ex);
        }
    }
}
