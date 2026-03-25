package com.transflower.tflcomentor.Repositories;

import com.transflower.tflcomentor.Entities.Questions;

public interface QuestionsRepository {
    Questions getQuestionById(long question_id);
}
