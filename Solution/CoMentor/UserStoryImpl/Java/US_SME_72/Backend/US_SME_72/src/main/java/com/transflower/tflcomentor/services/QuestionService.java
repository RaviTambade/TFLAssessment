package com.transflower.tflcomentor.services;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.repositories.IQuestionRepository;
import com.transflower.tflcomentor.dtos.QuestionDto;

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
        repository.insertQuestion(q);
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
}
