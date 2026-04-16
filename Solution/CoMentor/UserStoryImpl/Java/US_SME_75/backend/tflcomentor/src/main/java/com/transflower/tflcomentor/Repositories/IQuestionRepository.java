package com.transflower.tflcomentor.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.transflower.tflcomentor.Entities.Question;

public interface IQuestionRepository {
    Page<Question> findByStatus(String questionStatus, Pageable pageable);
}
