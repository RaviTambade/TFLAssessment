package com.transflower.tflcomentor.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.transflower.tflcomentor.entities.Question;
import com.transflower.tflcomentor.repositories.QuestionRepository;

@Service
public class QuestionService {

    private final QuestionRepository repository;
  

    // Constructor Injection
    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
  
    }

    // // GET /api/sme/allquestions
    // public List<Object> getAllQuestionsFromApi() {
    //     return webClient.get()
    //             .uri("/sme/allquestions")
    //             .retrieve()
    //             .bodyToFlux(Object.class)
    //             .collectList()
    //             .block();
    // }

    // // GET /api/sme/questions/{id}
    // public Object getQuestionByIdFromApi(Long id) {
    //     return webClient.get()
    //             .uri("/sme/questions/{id}", id)
    //             .retrieve()
    //             .bodyToMono(Object.class)
    //             .block();
    // }
     public List<Question> getAllQuestions() {
        return repository.findAll();
    }

    public Question getQuestionById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found")); 
    }

    public Question updateQuestion(Long id, Question updatedQuestion) {
        Question question = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        question.setDescription(updatedQuestion.getDescription());
        question.setQuestionType(updatedQuestion.getQuestionType());
        question.setDifficultyLevel(updatedQuestion.getDifficultyLevel());
        question.setStatus(updatedQuestion.getStatus());

        return repository.save(question);
    }
}