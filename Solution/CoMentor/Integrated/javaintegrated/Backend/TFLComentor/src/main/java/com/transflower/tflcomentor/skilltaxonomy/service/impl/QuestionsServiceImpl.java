package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.QuestionDetailsDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.StudentAssessmentDto;
import com.transflower.tflcomentor.skilltaxonomy.repository.IQuestionsRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.IQuestionsService;

@Service
public class QuestionsServiceImpl implements IQuestionsService {

    @Autowired
    private IQuestionsRepository repository;

    @Override
    public QuestionDetailsDto questionDetailsWithAns(int id) {
        return repository.questionDetailsWithAns(id);
    }

    @Override
    public StudentAssessmentDto getStudentAssessmentQuestionsResultAsync(int assessmentId, int studentId) {
        return repository.getStudentAssessmentQuestionsResultAsync(assessmentId, studentId);
    }

    @Override
    public QuestionDetailsDto getQuestionDetailsWithAnswer(int questionId) {
        return repository.getQuestionDetailsWithAnswer(questionId);
    }

    @Override
    public QuestionDetailsDto getQuestionDetails(int questionId) {
        return repository.getQuestionDetails(questionId);
    }
}
