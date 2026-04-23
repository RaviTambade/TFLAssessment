package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.QuestionsRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionsServices;

@Service
public class QuestionsServicesImpl implements QuestionsServices {

    private QuestionsRepository repository;

    public QuestionsServicesImpl(QuestionsRepository repository) {
        this.repository = repository;
    }

    @Override
    public Question getQuestionById(long question_id) {
        return repository.getQuestionById(question_id);
    }

    @Override
    public List<Question> getAllQuestions() {
        return repository.getAllQuestions();
    }

    @Override
    public List<Question> getQuestionsByDifficulty(String difficulty) {
        return repository.getQuestionsByDifficulty(difficulty);
    }

    @Override
    public void create(QuestionOptionsRequestDto dto) {
        Question q = new Question();
        q.setDescription(dto.getDescription());
        q.setQuestionType(dto.getQuestionType());
        q.setDifficultyLevel(dto.getDifficultyLevel());
        Long questionId = repository.insert(q);

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
    @Override
    public List<QuestionResponseDto> getDraftQuestions() {
        return repository.getDraftQuestions();
    }

    @Override
    public List<QuestionResponseDto> getQuestionsFromLastTwoDays() {
        return repository.getQuestionsFromLastTwoDays();
    }

    @Override
    public void approveQuestionById(Long id) {
        repository.approveQuestionById(id);
    }

    @Override
    public void rejectQuestionById(Long id) {
        repository.rejectQuestionById(id);
    }

    @Override
    public void approveQuestions(List<Long> questionIds) {
        repository.approveQuestions(questionIds);
    }

    @Override
    public void rejectQuestions(List<Long> questionIds) {
        repository.rejectQuestions(questionIds);
    }
    
    // @Override
    // public List<QuestionResponse> getRecentQuestionList() {
    //     return repository.getRecentQuestionList();
    // }

    @Override
    public QuestionOptionsResponseDto getQuestionDetailsById(Long id) {
        return repository.getQuestionDetailsById(id);
    }

    @Override
    public void updateQuestionById(Long id, QuestionOptionsRequestDto dto) {
        repository.updateQuestionById(id, dto);
    }

    @Override
    public List<QuestionResponseDto> getQuestionsByType(String questionType) {
        return repository.getQuestionsByType(questionType);
    }

    @Override
    public List<QuestionResponseDto> getQuestionsByStatus(String questionStatus) {
        return repository.getQuestionsByStatus(questionStatus);
    }

 
    @Override
    public List<QuestionDto> getQuestionsByConceptId(Long conceptId) {
        List<Question> questions = repository.getQuestionsByConceptId(conceptId);
        List<QuestionDto> dtoList = new ArrayList<>();

        for (Question question : questions) {
            dtoList.add(new QuestionDto(
                    question.getDescription(),
                    question.getQuestionType()
            ));
        }

        return dtoList;
    }

    
}
