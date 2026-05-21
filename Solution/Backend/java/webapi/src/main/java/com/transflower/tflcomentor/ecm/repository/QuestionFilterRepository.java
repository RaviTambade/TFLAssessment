package com.transflower.tflcomentor.ecm.repository;

import java.util.List;

import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public interface QuestionFilterRepository {
    List<Question> getQuestions(QuestionType question_type,DifficultyLevel difficulty_level,QuestionStatus status,String language,
                                String layer,String framework,String concept,Long userId,Long roleId);
}
