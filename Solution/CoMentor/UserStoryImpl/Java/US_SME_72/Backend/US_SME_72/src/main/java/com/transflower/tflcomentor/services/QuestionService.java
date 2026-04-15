package com.transflower.tflcomentor.services;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.repositories.IQuestionRepository;
import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.dtos.QuestionListDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService implements IQuestionService {

    @Autowired
    private IQuestionRepository repository;

    public void createQuestion(QuestionDto dto) {


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

    @Override
    public List<Question> getRecentQuestions() {
        return repository.getRecentQuestions();
    }

    public void approveQuestion(Long id) {
        repository.approveQuestion(id);
    }

    public void rejectQuestion(Long id) {
        repository.rejectQuestion(id);
    }

    public void approveAllQuestions() {
        repository.approveAllQuestions();
    }

    public void rejectAllQuestions() {
        repository.rejectAllQuestions();
    }

    @Override
    public List<QuestionListDto> getDraftQuestionList() {
        return repository.getDraftQuestionList();
    }

    @Override
    public List<QuestionListDto> getRecentQuestionList() {
        return repository.getRecentQuestionList();
    }

    @Override
    public QuestionDto getQuestionDetails(Long id) {
        return repository.getQuestionDetails(id);
    }

    @Override
    public void updateQuestion(Long id, QuestionDto dto) {
        repository.updateQuestion(id, dto);
    }
}
