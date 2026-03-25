package com.transflower.tflcomentor.Repositories;

import java.util.List;

import com.transflower.tflcomentor.Entities.ViewQuestionsByStatus;

public interface QuestionRepository {
    List<ViewQuestionsByStatus> findByStatus(String questionStatus);
}
