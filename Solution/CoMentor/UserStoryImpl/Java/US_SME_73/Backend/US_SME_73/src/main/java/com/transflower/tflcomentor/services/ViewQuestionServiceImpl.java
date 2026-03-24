package com.transflower.tflcomentor.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.dtos.AllQuestionsDto;
import com.transflower.tflcomentor.dtos.ViewQuestionDto;
import com.transflower.tflcomentor.entities.ViewQuestion;
import com.transflower.tflcomentor.repositories.ViewQuestionRepository;

@Service
public class ViewQuestionServiceImpl implements ViewQuestionService {

    @Autowired
    private ViewQuestionRepository questionRepository;

    @Override
    public ViewQuestionDto getQuestionById(Long questionId) {

        ViewQuestion question = questionRepository.findById(questionId);

        if (question == null) return null;

        return new ViewQuestionDto(
                question.getQuestionId(),
                question.getDescription(),
                question.getQuestionType()
        );
    }
     @Override
    public List<AllQuestionsDto> getAllQuestions() {

        List<ViewQuestion> questions = questionRepository.findAll();
        List<AllQuestionsDto> dtoList = new ArrayList<>();

        for (ViewQuestion question : questions) {
            dtoList.add(new AllQuestionsDto(
                    question.getDescription(),
                    question.getQuestionType()
            ));
        }

        return dtoList;
    }
}