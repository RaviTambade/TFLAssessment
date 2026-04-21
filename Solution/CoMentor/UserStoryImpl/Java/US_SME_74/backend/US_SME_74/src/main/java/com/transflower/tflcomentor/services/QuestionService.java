package com.transflower.tflcomentor.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.repositories.IQuestionRepository;

@Service
public class QuestionService implements IQuestionService {

    private final IQuestionRepository repository;

    public QuestionService(IQuestionRepository repository) {
        this.repository = repository;
    }

    // ✅ GET ALL
    public List<Question> getAllQuestions() {
        return repository.findAll();
    }

    // ✅ GET BY ID
    public Question getQuestionById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));
    }

    // ✅ INSERT
    public Question createQuestion(Question question) {
        return repository.insertQuestion(question);
    }

    // ✅ UPDATE
    public Question updateQuestionById(Long id, Question updatedQuestion) {

        Question existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        existing.setDescription(updatedQuestion.getDescription());
        existing.setQuestionType(updatedQuestion.getQuestionType());
        existing.setDifficultyLevel(updatedQuestion.getDifficultyLevel());
        existing.setStatus(updatedQuestion.getStatus());

        return repository.updateQuestion(existing); // ✅ fixed
    }
}