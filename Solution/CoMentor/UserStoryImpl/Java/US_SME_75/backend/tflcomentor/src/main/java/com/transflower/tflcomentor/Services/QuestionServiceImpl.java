package com.transflower.tflcomentor.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.ViewQuestionByStatus;
import com.transflower.tflcomentor.Entities.ViewQuestionsByStatus;
import com.transflower.tflcomentor.Repositories.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<ViewQuestionByStatus> getQuestionsByStatus(String status) {

        List<ViewQuestionsByStatus> entities = questionRepository.findByStatus(status);

        return entities.stream()
            .map(q -> new ViewQuestionByStatus(
                    q.getQuestionId(),
                    q.getQuestionType(),
                    q.getQuestionText(),
                    q.getQuestionStatus()
            ))
            .toList();
    }
}