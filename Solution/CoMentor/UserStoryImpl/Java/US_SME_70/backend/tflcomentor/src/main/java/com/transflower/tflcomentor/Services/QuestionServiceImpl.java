package com.transflower.tflcomentor.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.ViewQuestionByType;
import com.transflower.tflcomentor.Entities.ViewQuestionsByType;
import com.transflower.tflcomentor.Repositories.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<ViewQuestionByType> getQuestionsByType(String type) {

        List<ViewQuestionsByType> entities = questionRepository.findByType(type);

        return entities.stream()
            .map(q -> new ViewQuestionByType(
                    q.getQuestionId(),
                    q.getQuestionType(),
                    q.getQuestionText()
            ))
            .toList();
    }
}