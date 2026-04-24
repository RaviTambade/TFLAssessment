package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.repository.ProjectRepository;

@Repository
public class ProjectRepositoryImpl implements ProjectRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

     @Override
    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();

        try {
            Connection connection = getConnection();

            String query = "SELECT * FROM projects ";
            PreparedStatement statement = connection.prepareStatement(query);

            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Project project = new Project();
                project.setProjectId(rs.getInt("project_id"));
                project.setMentorId(rs.getInt("mentor_id"));
                project.setProjectName(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepositoryUrl(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreatedAt(rs.getString("created_at"));
                projects.add(project);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;
    }

    @Override
    public Project getProjectById(long project_id) {
        Project project = null;

        try {
            Connection connection = getConnection();

            String query = "SELECT * FROM tflcomentor_db.projects WHERE project_id = ?";
            PreparedStatement ps =  connection.prepareStatement(query);
            ps.setLong(1, project_id);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                project = new Project();
                project.setProjectId(rs.getInt("project_id"));
                project.setMentorId(rs.getInt("mentor_id"));
                project.setProjectName(rs.getString("project_name"));
                project.setDescription(rs.getString("description"));
                project.setRepositoryUrl(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreatedAt(rs.getString("created_at"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return project;
    }

     @Override
    public boolean addMember(ProjectAllocation projectAllocation) {

        String query = "INSERT INTO project_allocations(project_id, student_id, joined_date) VALUES (?, ?, NOW())";

        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setLong(1, projectAllocation.getProjectId());
            statement.setLong(2, projectAllocation.getStudentId());

            return statement.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean removeMember(Long projectId, Long studentId) {

        String query = """
            UPDATE project_allocations
            SET release_date = NOW()
            WHERE project_id = ? AND student_id = ?
        """;

        try (
                Connection conn = getConnection(); PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setLong(1, projectId);
            stmt.setLong(2, studentId);

            return stmt.executeUpdate() > 0;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public List<ProjectAllocationResponseDTO> getProjectAllocationDetails() {
        List<ProjectAllocationResponseDTO> allocations = new ArrayList<>();

        String query = """
            SELECT
                pa.project_id,
                p.project_name,
                pa.student_id,
                CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
                pa.joined_date,
                pa.release_date
            FROM project_allocations pa
            JOIN projects p ON pa.project_id = p.project_id
            JOIN users u ON pa.student_id = u.id
            JOIN personal_informations pi ON u.id = pi.user_id
            ORDER BY pa.project_id
        """;

        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                ProjectAllocationResponseDTO dto = new ProjectAllocationResponseDTO();

                dto.setProjectId(rs.getLong("project_id"));
                dto.setProjectName(rs.getString("project_name"));

                dto.setStudentId(rs.getLong("student_id"));
                dto.setStudentName(rs.getString("student_name"));

                if (rs.getTimestamp("joined_date") != null) {
                    dto.setJoinedDate(rs.getTimestamp("joined_date").toLocalDateTime());
                }

                if (rs.getTimestamp("release_date") != null) {
                    dto.setReleaseDate(rs.getTimestamp("release_date").toLocalDateTime());
                }

                allocations.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return allocations;
    }

    @Override
    public List<ProjectAllocationResponseDTO> getProjectMember(Long projectId) {
        List<ProjectAllocationResponseDTO> allocations = new ArrayList<>();

        String query = """
                     SELECT
                         pa.project_id,
                         p.project_name,
                         pa.student_id,
                         CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
                         pa.joined_date,
                         pa.release_date
                     FROM project_allocations pa
                     JOIN projects p ON pa.project_id = p.project_id
                     JOIN users u ON pa.student_id = u.id
                     JOIN personal_informations pi ON u.id = pi.user_id
                     WHERE pa.project_id = ?
                 """;

        try (
                Connection conn = getConnection(); PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setLong(1, projectId);

            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                ProjectAllocationResponseDTO dto = new ProjectAllocationResponseDTO();

                dto.setProjectId(rs.getLong("project_id"));
                dto.setProjectName(rs.getString("project_name"));

                dto.setStudentId(rs.getLong("student_id"));
                dto.setStudentName(rs.getString("student_name"));

                if (rs.getTimestamp("joined_date") != null) {
                    dto.setJoinedDate(rs.getTimestamp("joined_date").toLocalDateTime());
                }

                if (rs.getTimestamp("release_date") != null) {
                    dto.setReleaseDate(rs.getTimestamp("release_date").toLocalDateTime());
                }

                allocations.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return allocations;
    }

    @Override
    public List<Project> getProjectByStudentId(Long studentId) {
        List<Project> projects = new ArrayList<Project>();

        String query = """
        SELECT p.project_name, p.project_id
        FROM project_allocations pa
        JOIN projects p ON pa.project_id = p.project_id
        WHERE pa.student_id = ?
    """;

        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setLong(1, studentId);

            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Project project = new Project();
                project.setProjectName(rs.getString("project_name"));
                project.setProjectId(rs.getLong("project_id"));
                projects.add(project);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;
    }

    @Override
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId) {
        List<ProjectAllocationResponseDTO> students = new ArrayList<>();

        String query = """
            SELECT
                pa.project_id,
                p.project_name,
                pa.student_id,
                CONCAT(pi.first_name, ' ', pi.last_name) AS student_name,
                pa.joined_date,
                pa.release_date
            FROM project_allocations pa
            JOIN projects p ON pa.project_id = p.project_id
            JOIN users u ON pa.student_id = u.id
            JOIN personal_informations pi ON u.id = pi.user_id
            WHERE pa.project_id = ?
        """;

        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setLong(1, projectId);

            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                ProjectAllocationResponseDTO dto = new ProjectAllocationResponseDTO();

                dto.setProjectId(rs.getLong("project_id"));
                dto.setProjectName(rs.getString("project_name"));

                dto.setStudentId(rs.getLong("student_id"));
                dto.setStudentName(rs.getString("student_name"));

                if (rs.getTimestamp("joined_date") != null) {
                    dto.setJoinedDate(rs.getTimestamp("joined_date").toLocalDateTime());
                }

                if (rs.getTimestamp("release_date") != null) {
                    dto.setReleaseDate(rs.getTimestamp("release_date").toLocalDateTime());
                }

                students.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return students;
}
    
}
