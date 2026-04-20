package com.transflower.tflcomentor.services;

import java.util.List;

import com.transflower.tflcomentor.entities.Question;

public interface IQuestionService {

    // GET all questions
    List<Question> getAllQuestions();

    // GET question by ID
    Question getQuestionById(Long id);

    // INSERT new question
    Question createQuestion(Question question);

    // UPDATE existing question
    Question updateQuestionById(Long id, Question question);
}