package com.transflower.tflcomentor.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.QuestionDto;
import com.transflower.tflcomentor.Entities.Questions;
import com.transflower.tflcomentor.Repositories.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<QuestionDto> getQuestionsByType(String type) {

        List<Questions> entities = questionRepository.findByType(type);

        return entities.stream()
            .map(q -> new QuestionDto(
                q.getQuestionId(),
                q.getQuestionType(),
                q.getQuestionText()
            ))
            .toList();
    }
}   