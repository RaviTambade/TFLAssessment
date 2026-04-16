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
                    q.getQuestiondifficultyLevel(),
                    q.getQuestionType(),
                    q.getQuestionText(),
                    q.getQuestionStatus()
            ))
            .toList();
    }

    @Override
    public QuestionDto createQuestion(QuestionDto questionDto) {
        // Set status to "draft" if not provided
        String status = questionDto.getQuestionStatus() != null ? questionDto.getQuestionStatus() : "draft";
        
        Question question = new Question(
            questionDto.getQuestionType(),
            questionDto.getQuestionText(),
            questionDto.getQuestiondifficultylevel(),
            status
        );
        
        Question savedQuestion = questionRepository.save(question);
        
        return new QuestionDto(
            savedQuestion.getQuestionId(),
            savedQuestion.getQuestiondifficultyLevel(),
            savedQuestion.getQuestionType(),
            savedQuestion.getQuestionText(),
            savedQuestion.getQuestionStatus()
        );
    }
}