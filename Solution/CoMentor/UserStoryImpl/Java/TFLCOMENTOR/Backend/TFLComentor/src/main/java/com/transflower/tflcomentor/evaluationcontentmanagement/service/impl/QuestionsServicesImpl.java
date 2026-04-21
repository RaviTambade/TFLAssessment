package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.QuestionsRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionsServices;

@Service
public class QuestionsServicesImpl implements QuestionsServices {

    private QuestionsRepository repository;

    public QuestionsServicesImpl(QuestionsRepository repository) {
        this.repository = repository;
    }

    @Override
    public Questions getQuestionById(long question_id) {
        return repository.getQuestionById(question_id);
    }

    @Override
    public List<Questions> getAllQuestions() {
        return repository.getAllQuestions();
    }

    @Override
    public List<Questions> getQuestionsByDifficulty(String difficulty) {
        return repository.getQuestionsByDifficulty(difficulty);
    }

    // nirjala user story 72
    public void createQuestion(QuestionRequestDto dto) {
        Questions q = new Questions();
        q.setDescription(dto.getDescription());
        q.setQuestionType(dto.getQuestionType());
        q.setDifficultyLevel(dto.getDifficultyLevel());
        Long questionId = repository.insertQuestion(q);

        if (questionId != null) {
            repository.insertMcqOptions(
                    questionId,
                    dto.getOptionA(),
                    dto.getOptionB(),
                    dto.getOptionC(),
                    dto.getOptionD(),
                    dto.getCorrectAnswer()
            );
        }
    }

    // public List<Questions> getAllQuestions() {
    //     return repository.getAllQuestions();
    // }
    public List<Questions> getDraftQuestions() {
        return repository.getDraftQuestions();
    }

    public List<Questions> getRecentQuestions() {
        return repository.getRecentQuestions();
    }

    public void approveQuestionById(Long id) {
        repository.approveQuestionById(id);
    }

    public void rejectQuestionById(Long id) {
        repository.rejectQuestionById(id);
    }

    public void approveAllQuestions() {
        repository.approveAllQuestions();
    }

    public void rejectAllQuestions() {
        repository.rejectAllQuestions();
    }

    public List<QuestionListResponseDto> getDraftQuestionList() {
        return repository.getDraftQuestionList();
    }

    public List<QuestionListResponseDto> getRecentQuestionList() {
        return repository.getRecentQuestionList();
    }

    public QuestionResponseDto getQuestionDetailsById(Long id) {
        return repository.getQuestionDetailsById(id);
    }

    public void updateQuestionById(Long id, QuestionRequestDto dto) {
        repository.updateQuestionById(id, dto);
    }

    @Override
    public List<QuestionListResponseDto> getQuestionsByType(String questionType) {
        return repository.getQuestionsByType(questionType);
    }

    @Override
    public List<QuestionListResponseDto> findByStatus(String questionStatus) {
        return repository.findByStatus(questionStatus);
    }
}
