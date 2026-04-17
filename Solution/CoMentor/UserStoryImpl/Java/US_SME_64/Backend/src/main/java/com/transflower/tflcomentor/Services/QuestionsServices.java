package com.transflower.tflcomentor.Services;

import java.util.List;

import com.transflower.tflcomentor.Entities.Questions;

public interface QuestionsServices {
    Questions getQuestionById(long question_id);
      List<Questions> getAllQuestions();
    List<Questions> getQuestionsByDifficulty(String difficulty);
}

