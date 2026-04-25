package com.transflower.tflcomentor.skilltaxonomy.repository;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.QuestionDetailsDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.StudentAssessmentDto;

@Repository
public interface IQuestionsRepository {
    
    QuestionDetailsDto questionDetailsWithAns(int id);
    
    StudentAssessmentDto getStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
    
    QuestionDetailsDto getQuestionDetailsWithAnswer(int questionId);
    
    QuestionDetailsDto getQuestionDetails(int questionId);
}
