package com.transflower.tflcomentor.Repositories;

import java.util.List;

import com.transflower.tflcomentor.Entities.ViewQuestionsByType;

public interface QuestionRepository {
    List<ViewQuestionsByType> findByType(String questionType);
}
