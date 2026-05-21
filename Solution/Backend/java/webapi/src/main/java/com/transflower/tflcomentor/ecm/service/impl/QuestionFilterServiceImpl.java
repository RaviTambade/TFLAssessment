package com.transflower.tflcomentor.ecm.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
import com.transflower.tflcomentor.ecm.repository.QuestionFilterRepository;
import com.transflower.tflcomentor.ecm.service.QuestionFilterService;

@Service
public class QuestionFilterServiceImpl implements QuestionFilterService{

    private QuestionFilterRepository questionFilterRepository;

    public QuestionFilterServiceImpl(QuestionFilterRepository questionFilterRepository){
        this.questionFilterRepository=questionFilterRepository;
    }


    public List<Question> getQuestions(QuestionType question_type,DifficultyLevel difficulty_level,QuestionStatus status,String language,
                                String layer,String framework,String concept,Long userId,Long roleId)
    {
        return questionFilterRepository.getQuestions(question_type,difficulty_level,status,language,layer,framework,concept,userId,roleId);
    }
}
