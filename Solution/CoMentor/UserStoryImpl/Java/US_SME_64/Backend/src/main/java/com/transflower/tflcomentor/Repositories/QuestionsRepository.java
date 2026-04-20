package com.transflower.tflcomentor.Repositories;

import java.util.List;

import com.transflower.tflcomentor.Entities.Questions;

public interface QuestionsRepository {
    Questions getQuestionById(long question_id);
      List<Questions> getAllQuestions();
    List<Questions> getQuestionsByDifficulty(String difficulty);
   
}
