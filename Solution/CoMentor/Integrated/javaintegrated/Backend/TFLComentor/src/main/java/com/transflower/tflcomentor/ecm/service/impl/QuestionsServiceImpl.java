package com.transflower.tflcomentor.ecm.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDto;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.repository.QuestionRepository;
import com.transflower.tflcomentor.ecm.service.QuestionService;

@Service
public class QuestionsServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository repository;

    @Override
    public Long insertQuestion(Question question) {
        return repository.insert(question);
    }

    @Override
    public Long createQuestionWithOptions(QuestionOptionsRequestDto dto) {

        Question question = new Question();
        question.setDescription(dto.getDescription());
        question.setQuestionType(
                QuestionTypes.valueOf(dto.getQuestionType().toUpperCase())
        );
        question.setDifficultyLevel(DifficultyLevels.valueOf(dto.getDifficultyLevel().toUpperCase()));

        Long questionId = repository.insert(question);
        if ("MCQ".equalsIgnoreCase(dto.getQuestionType())) {

            repository.insertMcqOptions(
                    questionId,
                    dto.getOptionA(),
                    dto.getOptionB(),
                    dto.getOptionC(),
                    dto.getOptionD(),
                    dto.getCorrectAnswer()
            );
        }

        return questionId;
    }

    @Override
    public Question getQuestionById(long question_id) {
        return repository.getQuestionById(question_id);
    }

    @Override
    public List<Question> getAllQuestions() {
        return repository.getAllQuestions();
    }

    @Override
    public List<Question> getQuestionsByDifficulty(String difficulty) {
        return repository.getQuestionsByDifficulty(difficulty);
    }

    @Override
    public void updateQuestionById(Long id, QuestionOptionsRequestDto dto) {
        repository.updateQuestionById(id, dto);
    }

    @Override
    public List<QuestionResponseDto> getQuestions(LocalDate fromDate, LocalDate toDate) {
        return repository.getQuestions(fromDate, toDate);
    }

    @Override
    public QuestionOptionsResponseDto getQuestionDetails(Long id) {
        return repository.getQuestionDetails(id);
    }

    @Override
    public List<QuestionResponseDto> getQuestions(String questionType) {
        return repository.getQuestions(questionType);
    }

    @Override
    public List<QuestionResponseDto> getQuestions(QuestionStatus status) {
        return repository.getQuestions(status);
    }

    @Override
    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status) {
        repository.updateQuestionStatus(questionIds, status);
    }

    @Override
    public void updateQuestionStatus(long questionId, QuestionStatus status) {
        repository.updateQuestionStatus(questionId, status);
    }

    @Override
    public List<Question> getQuestionsByConceptId(Long conceptId) {
        return repository.getQuestionsByConceptId(conceptId);
    }
}