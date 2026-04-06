package com.transflower.tflcomentor.Repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Dtos.RuntimesDTO;
@Repository
public class RuntimesRepository implements IRuntimesRepository {
    
    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;


    @Value("${spring.datasource.password}")
    private String password;


    private Connection getConnection() throws Exception {
        return DriverManager.getConnection(url, username, password);
    }


    @Override
    public boolean addRuntime(RuntimesDTO runtimedto) {
        
        String query = "insert into runtimes (runtime_name) values(?)";

        try (
            Connection conn = getConnection();
                PreparedStatement st = conn.prepareStatement(query))
                 {
                     st.setString(1, runtimedto.getRuntime_name());
                     return st.executeUpdate() > 0;  
            
                 } catch (Exception e) {

                     e.printStackTrace();
                 }
                 return false;
    }

}
