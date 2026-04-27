package com.transflower.tflcomentor.skilltaxonomy.repository.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.configuration.DBConfig;
import com.transflower.tflcomentor.skilltaxonomy.dto.QuestionDetailsDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.StudentAssessmentDto;
import com.transflower.tflcomentor.skilltaxonomy.repository.IQuestionsRepository;

@Repository
public class QuestionsRepositoryImpl implements IQuestionsRepository {

    private Connection getConnection() {
        return DBConfig.getConnection();
    }

    @Override
    public QuestionDetailsDto questionDetailsWithAns(int id) {
        QuestionDetailsDto questionDetails = null;
        String query = "SELECT * FROM questions WHERE question_id = ?";

        try (Connection connection = getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {
            
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    questionDetails = mapResultSetToQuestionDetailsDto(rs);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return questionDetails;
    }

    @Override
    public StudentAssessmentDto getStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId) {
        StudentAssessmentDto studentAssessment = null;
        String query = "SELECT * FROM student_assessments WHERE assessment_id = ? AND student_id = ?";

        try (Connection connection = getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {
            
            ps.setInt(1, assessmentId);
            ps.setInt(2, studentId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    studentAssessment = mapResultSetToStudentAssessmentDto(rs);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return studentAssessment;
    }

    @Override
    public QuestionDetailsDto getQuestionDetailsWithAnswer(int questionId) {
        QuestionDetailsDto questionDetails = null;
        String query = "SELECT * FROM questions WHERE question_id = ?";

        try (Connection connection = getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {
            
            ps.setInt(1, questionId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    questionDetails = mapResultSetToQuestionDetailsDto(rs);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return questionDetails;
    }

    @Override
    public QuestionDetailsDto getQuestionDetails(int questionId) {
        QuestionDetailsDto questionDetails = null;
        String query = "SELECT * FROM questions WHERE question_id = ?";

        try (Connection connection = getConnection();
             PreparedStatement ps = connection.prepareStatement(query)) {
            
            ps.setInt(1, questionId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    questionDetails = mapResultSetToQuestionDetailsDto(rs);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return questionDetails;
    }

    /**
     * Helper method to map ResultSet to QuestionDetailsDto
     */
    private QuestionDetailsDto mapResultSetToQuestionDetailsDto(ResultSet rs) throws Exception {
        QuestionDetailsDto dto = new QuestionDetailsDto();
        // TODO: Map fields from ResultSet to QuestionDetailsDto based on your table schema
        // Example:
        // dto.setQuestionId(rs.getInt("question_id"));
        // dto.setQuestionText(rs.getString("question_text"));
        // dto.setAnswers(...); // Populate answers as needed
        
        return dto;
    }

    /**
     * Helper method to map ResultSet to StudentAssessmentDto
     */
    private StudentAssessmentDto mapResultSetToStudentAssessmentDto(ResultSet rs) throws Exception {
        StudentAssessmentDto dto = new StudentAssessmentDto();
        // TODO: Map fields from ResultSet to StudentAssessmentDto based on your table schema
        // Example:
        // dto.setAssessmentId(rs.getInt("assessment_id"));
        // dto.setStudentId(rs.getInt("student_id"));
        // dto.setQuestions(...); // Populate questions as needed
        
        return dto;
    }
}
