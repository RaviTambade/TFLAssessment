package com.transflower.tflcomentor.evaluationcontentmanagement.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.ProjectRepository;

@Repository
public class ProjectRepositoryImpl implements ProjectRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

     @Override
    public List<Projects> getAllProjects() {
        List<Projects> projects = new ArrayList<>();

        try {
            Connection connection = getConnection();

            String query = "SELECT * FROM projects ";
            PreparedStatement statement = connection.prepareStatement(query);

            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Projects project = new Projects();
                project.setProject_id(rs.getInt("project_id"));
                project.setMentor_id(rs.getInt("mentor_id"));
                project.setProject_name(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepository_url(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreated_at(rs.getString("created_at"));
                projects.add(project);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;
    }

    @Override
    public Projects getProjectById(long project_id) {
        Projects project = null;

        try {
            Connection connection = getConnection();

            String query = "SELECT * FROM tflcomentor_db.projects WHERE project_id = ?";
            PreparedStatement ps =  connection.prepareStatement(query);
            ps.setLong(1, project_id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                project = new Projects();
                project.setProject_id(rs.getInt("project_id"));
                project.setMentor_id(rs.getInt("mentor_id"));
                project.setProject_name(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepository_url(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreated_at(rs.getString("created_at"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return project;
    }
    
}
