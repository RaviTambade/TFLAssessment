package com.transflower.tflcomentor.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Entities.Question;

@Repository
public interface QuestionRepository extends IQuestionRepository {
    
    @Override
    @Query("SELECT q FROM Question q WHERE CAST(q.questionStatus AS string) = :status")
    List<Question> findByStatus(@Param("status") String questionStatus);
}
