package com.transflower.tflcomentor.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Question;

@Repository
public interface IQuestionRepository extends JpaRepository<Question, Integer> {
    List<Question> findByStatus(String questionStatus);
}
