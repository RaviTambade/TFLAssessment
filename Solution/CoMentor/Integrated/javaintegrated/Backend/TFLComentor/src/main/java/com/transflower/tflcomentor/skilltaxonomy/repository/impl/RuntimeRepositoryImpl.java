package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimeRepository;

@Repository
public class RuntimeRepositoryImpl implements RuntimeRepository {

     private Runtime runtimes;

    public RuntimeRepositoryImpl() {
        this.runtimes = new Runtime();
    }

    public RuntimeRepositoryImpl(Runtime runtimes) {
        this.runtimes = runtimes;
    }

    private Connection getConnection() {
        return DBConfig.getConnection();
    }

    
    

    @Override
    public List<RuntimeDTO> getRuntimes() {
        List<RuntimeDTO> runtimesList = new ArrayList<>();
        String query = "SELECT runtime_name FROM runtimes";

        try (Connection connection = DBConfig.getConnection();
         PreparedStatement ps = connection.prepareStatement(query);
          ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                RuntimeDTO rt = new RuntimeDTO();
                rt.setRuntime_name(rs.getString("Runtime_name"));
                runtimesList.add(rt);
            }

        } catch (Exception e) {
            System.out.println(e);
        }
        return runtimesList;
    }

    @Override
    public boolean addRuntime(RuntimeDTO runtimedto) {
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
    public List<RuntimeSummaryResponse> findAllRuntimeSummaries() {
        List<RuntimeSummaryResponse> runtimes = new ArrayList<>();
        String query = """
                select r.id, trim(r.runtime_name) as runtime_name, count(sr.sme_runtime_id) as linked_smes
                from runtimes r
                left join sme_runtimes sr on sr.runtime_id = r.id
                group by r.id, r.runtime_name
                order by lower(trim(r.runtime_name)) asc, r.id asc
                """;

        try (Connection connection = DBConfig.getConnection(); PreparedStatement ps = connection.prepareStatement(query); ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                runtimes.add(new RuntimeSummaryResponse(
                        rs.getLong("id"),
                        rs.getString("runtime_name"),
                        rs.getLong("linked_smes")));
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch runtime summaries", e);
        }

        return runtimes;
    }

    @Override
    public Optional<Runtime> findById(Long runtimeId) {
        String query = "select id, runtime_name from runtimes where id = ?";

        try (Connection connection = DBConfig.getConnection(); 
        PreparedStatement ps = connection.prepareStatement(query)) {
            ps.setLong(1, runtimeId);

            try (ResultSet rs = ps.executeQuery()) {
                if (!rs.next()) {
                    return Optional.empty();
                }

                Runtime runtime = new Runtime();
                runtime.setId(rs.getInt("id"));
                runtime.setRuntimeName(rs.getString("runtime_name"));
                return Optional.of(runtime);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch runtime details for id=" + runtimeId, e);
        }
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
