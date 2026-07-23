package com.transflower.tflcomentor.ecm.repository.impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;
import com.transflower.tflcomentor.ecm.dto.response.MentorshipActivityResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectResponse;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.repository.ProjectRepository;

@Repository
public class ProjectRepositoryImpl implements ProjectRepository {

    private Connection getConnection() throws Exception {
        return DBConfig.getConnection();
    }

    @Override
    public List<Project> getAllProjects(Long mentorId) {
        List<Project> projects = new ArrayList<>();

        String query = """
                     SELECT
                            p.project_id,
                            p.project_name,
                            CONCAT(mp.first_name, ' ', mp.last_name) AS mentor_name,
                            GROUP_CONCAT(
                                CONCAT(sp.first_name, ' ', sp.last_name)
                                SEPARATOR ', '
                            ) AS allocated_students,
                            p.description,
                            p.repository_url,
                            p.status,
                            p.created_at
                        FROM projects p
                        LEFT JOIN personal_informations mp
                            ON p.mentor_id = mp.user_id
                        LEFT JOIN project_allocations pa
                            ON p.project_id = pa.project_id
                        LEFT JOIN personal_informations sp
                            ON pa.student_id = sp.user_id
                            where p.mentor_id=?
                        GROUP BY
                            p.project_id,
                            p.project_name,
                            mentor_name,
                            p.description,
                            p.repository_url,
                            p.status,
                            p.created_at;
                    """;

        System.out.println("Mentor ID: " + mentorId);
        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setLong(1, mentorId);
            System.out.println("Projects Found: " + projects.size());

            try (ResultSet rs = statement.executeQuery()) {

                while (rs.next()) {
                    Project project = new Project();
                    project.setProjectId(rs.getInt("project_id"));
                    project.setMentorName(rs.getString("mentor_name"));
                    project.setAllocatedStudents(rs.getString("allocated_students"));
                    project.setProjectName(rs.getString("project_name"));
                    project.setDescription(rs.getString("description"));
                    project.setRepositoryUrl(rs.getString("repository_url"));
                    project.setStatus(rs.getString("status"));
                    project.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
                    projects.add(project);
                }

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
            PreparedStatement ps = connection.prepareStatement(query);
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
                project.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return project;
    }

    @Override
    public boolean allocateMembersToProject(ProjectAllocation projectAllocation) {

        String query = "INSERT INTO project_allocations(project_id, student_id, joined_date) VALUES (?, ?, NOW())";

        try (
                Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            
                for (Long studentId : projectAllocation.getStudentIds()) {
                    statement.setLong(1, projectAllocation.getProjectId());
                    statement.setLong(2, studentId);

                    statement.executeUpdate();
                }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return true;
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
    public List<ProjectAllocationResponse> getProjectAllocationDetails() {
        List<ProjectAllocationResponse> allocations = new ArrayList<>();

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
                ProjectAllocationResponse dto = new ProjectAllocationResponse();

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
    public List<ProjectAllocationResponse> getProjectMember(Long projectId) {
        List<ProjectAllocationResponse> allocations = new ArrayList<>();
        String query = """
                                        SELECT
                        pa.project_id,
                        p.project_name,
                        pa.student_id,
                        CONCAT(spi.first_name, ' ', spi.last_name) AS student_name,
                        CONCAT(mpi.first_name, ' ', mpi.last_name) AS mentor_name,
                        pa.joined_date,
                        pa.release_date
                    FROM project_allocations pa
                    JOIN projects p
                        ON pa.project_id = p.project_id
                    JOIN users u
                        ON pa.student_id = u.id
                    JOIN personal_informations spi
                        ON u.id = spi.user_id
                    LEFT JOIN personal_informations mpi
                        ON p.mentor_id = mpi.user_id
                    WHERE pa.project_id = ?;
                                    """;

        try (
                Connection conn = getConnection(); PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setLong(1, projectId);

            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                ProjectAllocationResponse dto = new ProjectAllocationResponse();

                dto.setProjectId(rs.getLong("project_id"));
                dto.setProjectName(rs.getString("project_name"));

                dto.setStudentId(rs.getLong("student_id"));
                dto.setStudentName(rs.getString("student_name"));
                dto.setMentorName(rs.getString("mentor_name"));

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
        SELECT p.project_name, p.project_id, p.mentor_id, p.description, p.repository_url, p.status, p.created_at
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
                project.setMentorId(rs.getLong("mentor_id"));
                project.setDescription(rs.getString("description"));
                project.setRepositoryUrl(rs.getString("repository_url"));
                project.setStatus(rs.getString("status"));
                project.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
                projects.add(project);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return projects;
    }

    @Override
    public List<ProjectAllocationResponse> getStudentByProjectId(Long projectId) {
        List<ProjectAllocationResponse> students = new ArrayList<>();

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
                ProjectAllocationResponse dto = new ProjectAllocationResponse();

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

    // Mentor 
    @Override
    public List<MentorshipActivityResponse> getRecentActivities(Long mentorId) {

        List<MentorshipActivityResponse> activities = new ArrayList<>();

        try {
            Connection connection = getConnection();
            CallableStatement statement = connection.prepareCall("{CALL GetRecentMentorshipActivities(?)}");
            statement.setLong(1, mentorId);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                MentorshipActivityResponse response = new MentorshipActivityResponse();
                response.setMenteeName(rs.getString("mentee_name"));
                response.setActivityType(rs.getString("activity_type"));
                response.setActivity(rs.getString("activity"));
                response.setActivityDate(rs.getDate("activity_date").toLocalDate());
                response.setStatus(rs.getString("status"));
                activities.add(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return activities;
    }

    @Override
    public boolean addProject(ProjectResponse project, Long mentorId) {
        String query = """
                INSERT INTO projects
                (mentor_id, project_name, description, repository_url, status, created_at)
                VALUES (?, ?, ?, ?, ?, NOW())
                """;

        try (
            Connection connection = getConnection();
            PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setLong(1, mentorId);
            statement.setString(2, project.getProject_name());
            statement.setString(3, project.getDescription());
            statement.setString(4, project.getRepository_url());
            statement.setString(5, project.getStatus());

            return statement.executeUpdate() > 0;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
    }
