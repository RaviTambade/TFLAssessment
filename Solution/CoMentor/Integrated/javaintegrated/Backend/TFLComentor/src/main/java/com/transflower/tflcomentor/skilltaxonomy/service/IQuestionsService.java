package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.QuestionDetailsDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.StudentAssessmentDto;

@Service
public interface IQuestionsService {
    
    QuestionDetailsDto questionDetailsWithAns(int id);
    
    StudentAssessmentDto getStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId);
    
    QuestionDetailsDto getQuestionDetailsWithAnswer(int questionId);
    
    QuestionDetailsDto getQuestionDetails(int questionId);
}
