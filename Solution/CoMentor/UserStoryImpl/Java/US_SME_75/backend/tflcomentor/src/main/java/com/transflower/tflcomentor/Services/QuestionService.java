package com.transflower.tflcomentor.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.QuestionDto;
import com.transflower.tflcomentor.Entities.Question;
import com.transflower.tflcomentor.Repositories.IQuestionRepository;

@Service
public class QuestionService implements IQuestionService {

    private final IQuestionRepository questionRepository;

    public QuestionService(IQuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<QuestionDto> getQuestionsByStatus(String status) {

        List<Question> entities = questionRepository.findByStatus(status);

        return entities.stream()
            .map(q -> new QuestionDto(
                    q.getQuestionId(),
                    q.getQuestionType(),
                    q.getQuestionText(),
                    q.getQuestionStatus()
            ))
            .toList();
    }
}