package com.transflower.tflcomentor.repositories;

import java.util.List;
import java.util.Optional;

import com.transflower.tflcomentor.entities.Question;

public interface IQuestionRepository {

    List<Question> findAll();
    Optional<Question> findById(Long id);
    Question insertQuestion(Question question);
    Question updateQuestion(Question question);
}
