package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimesRepository;

@Repository
public class RuntimesRepositoryImpl implements RuntimesRepository {

    private static Connection connection;
    private static String url = "jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private static String username = "root";
    private static String password = "password";

    // private RuntimesRepositoryImpl(Runtimes runtimes) {
    // this.runtimes = runtimes;
    // }

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("connection established sucessfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<RuntimesDTO> getAllRuntimes() {
        List<RuntimesDTO> runtimesList = new ArrayList<>();
        String query = "SELECT runtime_name FROM runtimes";
        ;

        try {
            PreparedStatement ps = connection.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                RuntimesDTO rt = new RuntimesDTO();
                // rt.setId(rs.getInt("Id"));
                rt.setRuntime_name(rs.getString("Runtime_name"));

                runtimesList.add(rt);
            }

        } catch (Exception e) {
            System.out.println(e);
        }
        return runtimesList;
    }

    @Override
    public boolean addRuntime(RuntimesDTO runtimedto) {

        String query = "insert into runtimes (runtime_name) values(?)";

        try (
                PreparedStatement st = connection.prepareStatement(query)) {
            st.setString(1, runtimedto.getRuntime_name());
            return st.executeUpdate() > 0;

        } catch (Exception e) {

            e.printStackTrace();
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

        try (PreparedStatement ps = connection.prepareStatement(query);
                ResultSet rs = ps.executeQuery()) {

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

        try (PreparedStatement ps = connection.prepareStatement(query)) {
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

    static Connection getConnection() {
        return connection;
    }

}
