package com.transflower.tflcomentor.backend.Repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.backend.Dtos.RuntimesDTO;
// import com.transflower.tflcomentor.backend.Entities.Runtimes;

@Repository
public class RuntimesRepositoryImpl implements RuntimesRepository {

    private static Connection connection;
    private static  String url = "jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private static  String username = "root";
    private  static String password = "password";
    

    // private RuntimesRepositoryImpl(Runtimes runtimes) {
    //     this.runtimes = runtimes;
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

        try{
            PreparedStatement  ps =connection.prepareStatement(query);
            ResultSet rs =ps.executeQuery();

            while(rs.next()){
                RuntimesDTO rt =new RuntimesDTO();
                // rt.setId(rs.getInt("Id"));
                rt.setRuntime_name(rs.getString("Runtime_name"));

                runtimesList.add(rt);
            }


        } catch (Exception e) {
            System.out.println(e);
        }
        return runtimesList;
    }

}
