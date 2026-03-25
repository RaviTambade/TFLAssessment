package com.transflower.tflcomentor.Repositories;

import com.transflower.tflcomentor.Entities.Project;
import org.springframework.stereotype.Repository;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProjectRepositoryImpl implements ProjectRepository {

        public class DBconnection 
        {

            private static final String URL = "jdbc:mysql://localhost:3306/tflcomentor_db";
            private static final String USER = "root";
            private static final String PASSWORD = "password";

            public static Connection getConnection() {
                Connection conn = null;
                try {
                    Class.forName("com.mysql.cj.jdbc.Driver");
                    conn = DriverManager.getConnection(URL, USER, PASSWORD);
                } catch (Exception e) {
                    e.printStackTrace();
                }
                return conn;
            }
        }
    

    @Override
    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();

        try {
            Connection conn = DBconnection.getConnection();

            String query = "SELECT * FROM projects ";
            PreparedStatement ps = conn.prepareStatement(query);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Project project = new Project();
                project.setProject_id(rs.getInt("project_id"));
                project.setMentor_id(rs.getInt("mentor_id"));
                project.setProject_name(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepository_url(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreated_at(rs.getString("created_at"));
                projects.add(project);
            }

            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;
    }

    @Override
    public Project getProjectById(long project_id) {
        Project project = null;

        try {
            Connection conn = DBconnection.getConnection();

            String query = "SELECT * FROM tflcomentor_db.projects WHERE project_id = ?";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setLong(1, project_id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                project = new Project();
                project.setProject_id(rs.getInt("project_id"));
                project.setMentor_id(rs.getInt("mentor_id"));
                project.setProject_name(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepository_url(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreated_at(rs.getString("created_at"));
            }

            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return project;
    }

    
}