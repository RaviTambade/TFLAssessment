package com.transflower.tflcomentor.Repositories;

import java.util.List;

import com.transflower.tflcomentor.Entities.Question;

public interface IQuestionRepository {
    List<Question> findByStatus(String questionStatus);
}
