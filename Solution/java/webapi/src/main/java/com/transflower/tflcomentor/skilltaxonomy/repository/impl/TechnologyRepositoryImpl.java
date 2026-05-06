package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
// import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeResponseDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
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
    public Concept getConceptById(Long id) {
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
    public Concept addConcept(Concept concept) {
        String query = "INSERT INTO concepts(name,description,status,created_at) VALUES(?,?,?,?)";
        try (Connection connection = getConnection()) {
            PreparedStatement ps = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, concept.getName());
            ps.setString(2, concept.getDescription());
            ps.setInt(3, concept.getStatus());
            ps.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));

            ps.executeUpdate();

            ResultSet rs=ps.getGeneratedKeys();
            if(rs.next()){
                concept.setId(rs.getInt(1));
            }
            return concept;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
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
    public boolean mapConceptToFramework(int conceptId, int frameworkId) {
        String query = "INSERT INTO framework_concepts(framework_id, concept_id) VALUES(?,?)";
        try (Connection connection = getConnection()) {
            PreparedStatement ps = connection.prepareStatement(query);
            ps.setInt(1, frameworkId);
            ps.setInt(2, conceptId);

            ps.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public List<Framework> getAllFrameworks(){
        String query = "SELECT  DISTINCT id, name FROM frameworks";
        List<Framework> frameworksList = new ArrayList<>();
        try(Connection connection = getConnection()){
           Statement statement = connection.createStatement();
           ResultSet resultSet = statement.executeQuery(query); 
              while(resultSet.next()){
                Framework framework = new Framework();
                framework.setId(resultSet.getInt("id"));
                framework.setFrameworkName(resultSet.getString("name"));
                frameworksList.add(framework);
              }
            return frameworksList;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
       
    }

    @Override
    public Framework getFrameworkById(Long id){
        String query = "SELECT id, name FROM frameworks WHERE id=?";
        try(Connection connection = getConnection()){
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setLong(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                Framework framework = new Framework();
                framework.setId(resultSet.getInt("id"));
                framework.setFrameworkName(resultSet.getString("name"));
                return framework;
            } else {
                return null; // No framework found with the given ID
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Framework> getAllFrameworks(int languageId, int layerId)  {
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

    @Override
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        return getAllFrameworks(languageId, layerId);
    }

    @Override
    public List<Framework> getAllFrameworks(int languageId){
        String query = "SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ?";
        try(Connection connection = getConnection()){
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, languageId);
            ResultSet resultSet = preparedStatement.executeQuery();
            List<Framework> frameworksList = new ArrayList<>();
            while(resultSet.next()){
                Framework framework = new Framework();
                framework.setId(resultSet.getInt("id"));
                framework.setFrameworkName(resultSet.getString("name"));
                frameworksList.add(framework);
            }
            return frameworksList;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Layer> getAllLayers() {
        String query = "SELECT DISTINCT l.id, l.layers from layers l ";

        PreparedStatement preparedStatement;
        List<Layer> layersList = new ArrayList<>();
        try (Connection connection = getConnection()) {
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Layer layer = new Layer();
                layer.setId(resultSet.getInt("id"));
                layer.setLayerName(resultSet.getString("layers"));
                layersList.add(layer);
            }
            return layersList;
        } catch (SQLException e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public List<LanguageResponseDto> getLanguagesBySmeId(long smeId) {
        String sql = """
                SELECT l.id, l.language
                FROM sme_runtimes sr
                JOIN languages l ON l.runtime_id = sr.runtime_id
                WHERE sr.user_id = ?
                ORDER BY l.id
                """;
        try (var connection = getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setLong(1, smeId);
            try (ResultSet rs = statement.executeQuery()) {
                List<LanguageResponseDto> results = new ArrayList<>();
                while (rs.next()) {
                    LanguageResponseDto language = new LanguageResponseDto();
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

    @Override
    public List<Language> getAllLanguages(int runtimeId) {

        String query = "SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?";
        List<Language> languagesList = new ArrayList<>();

        try (Connection connection = getConnection()) {
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, runtimeId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Language language = new Language();
                language.setId(resultSet.getInt("id"));
                language.setLanguageName(resultSet.getString("language"));
                language.setRuntimeId(resultSet.getInt("runtime_id"));
                languagesList.add(language);
            }
            return languagesList;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // @Override
    // public List<RuntimeResponseDTO> getRuntimes() {
    //     List<RuntimeResponseDTO> runtimesList = new ArrayList<>();
    //     String query = "SELECT runtime_name FROM runtimes";
    //     try (Connection connection = DBConfig.getConnection();
    //      PreparedStatement ps = connection.prepareStatement(query);
    //       ResultSet rs = ps.executeQuery()) {
    //         while (rs.next()) {
    //             RuntimeResponseDTO rt = new RuntimeResponseDTO();
    //             rt.setRuntime_name(rs.getString("Runtime_name"));
    //             runtimesList.add(rt);
    //         }
    //     } catch (Exception e) {
    //         System.out.println(e);
    //     }
    //     return runtimesList;
    // }

    @Override
    public boolean addRuntime(RuntimeResponseDTO runtimedto) {
        String query = "insert into runtimes (runtime_name) values(?)";

        try (Connection connection = DBConfig.getConnection(); 
        PreparedStatement st = connection.prepareStatement(query)) {
            st.setString(1, runtimedto.getRuntime_name());
            return st.executeUpdate() > 0;

        } catch (Exception e) {
            System.out.println("Error adding runtime: " + e.getMessage());
        }
        return false;
    }

    @Override
    public List<RuntimeSummaryResponseDto> findAllRuntimeSummaries() {
        List<RuntimeSummaryResponseDto> runtimes = new ArrayList<>();
        String query = """
                select r.id, trim(r.runtime_name) as runtime_name, count(sr.sme_runtime_id) as linked_smes
                from runtimes r
                left join sme_runtimes sr on sr.runtime_id = r.id
                group by r.id, r.runtime_name
                order by lower(trim(r.runtime_name)) asc, r.id asc
                """;

        try (Connection connection = DBConfig.getConnection(); PreparedStatement ps = connection.prepareStatement(query); ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                runtimes.add(new RuntimeSummaryResponseDto(
                        rs.getLong("id"),
                        rs.getString("runtime_name"),
                        rs.getLong("linked_smes")));
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch runtime summaries", e);
        }

        return runtimes;
    }

    // @Override
    // public Optional<Runtime> findById(Long runtimeId) {
    //     String query = "select id, runtime_name from runtimes where id = ?";
    //     try (Connection connection = DBConfig.getConnection(); 
    //     PreparedStatement ps = connection.prepareStatement(query)) {
    //         ps.setLong(1, runtimeId);
    //         try (ResultSet rs = ps.executeQuery()) {
    //             if (!rs.next()) {
    //                 return Optional.empty();
    //             }
    //             Runtime runtime = new Runtime();
    //             runtime.setId(rs.getInt("id"));
    //             runtime.setRuntimeName(rs.getString("runtime_name"));
    //             return Optional.of(runtime);
    //         }
    //     } catch (Exception e) {
    //         throw new RuntimeException("Failed to fetch runtime details for id=" + runtimeId, e);
    //     }
    // }

    @Override  // **********************To be implemented************************* 
    public Runtime getRuntimeById(Long id){
        return null;
    }

    @Override
    public List<Runtime> getAllRuntimes() {
        String query = "SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r";
        List<Runtime> runtimesList = new ArrayList<>();
        try (Connection connection = getConnection()) {
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                Runtime runtime = new Runtime();
                runtime.setId(resultSet.getInt("id"));
                runtime.setRuntimeName(resultSet.getString("runtime_name"));
                runtimesList.add(runtime);
            }
            return runtimesList;
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
