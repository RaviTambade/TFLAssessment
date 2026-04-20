package com.transflower.tflcomentor.evaluationcontentmanagement.service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionRequestDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionListResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.QuestionRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.QuestionService;

import java.util.List;


@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository repository;

    public void createQuestion(QuestionRequestDto dto) {


        Question q = new Question();
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

    public List<Question> getAllQuestions() {
        return repository.getAllQuestions();
    }

    public List<Question> getDraftQuestions() {
        return repository.getDraftQuestions();
    }

   
    public List<Question> getRecentQuestions() {
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
}
