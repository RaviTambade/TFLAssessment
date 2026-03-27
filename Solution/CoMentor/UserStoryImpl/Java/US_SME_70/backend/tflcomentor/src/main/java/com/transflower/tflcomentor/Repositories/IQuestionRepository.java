package com.transflower.tflcomentor.Repositories;

import java.util.List;

import com.transflower.tflcomentor.Entities.Questions;

public interface IQuestionRepository {
    List<Questions> findByType(String questionType);
}
