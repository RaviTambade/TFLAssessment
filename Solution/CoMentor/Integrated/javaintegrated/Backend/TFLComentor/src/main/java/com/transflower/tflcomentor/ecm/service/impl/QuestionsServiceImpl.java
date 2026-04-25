package com.transflower.tflcomentor.ecm.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.entity.Question;
<<<<<<< HEAD
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
=======
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;
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
<<<<<<< HEAD
        question.setQuestionType(
                QuestionTypes.valueOf(dto.getQuestionType().toUpperCase())
        );
        question.setDifficultyLevel(DifficultyLevels.valueOf(dto.getDifficultyLevel().toUpperCase()));

=======
        question.setQuestionType(dto.getQuestionType());
        question.setDifficultyLevel(dto.getDifficultyLevel());
        question.setQuestionStatus(dto.getStatus());
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
        Long questionId = repository.insert(question);
        if (dto.getQuestionType() == QuestionType.MCQ) {

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
    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty) {
        return repository.getQuestionsByDifficulty(difficulty);
    }

    @Override
    public void updateQuestionById(Long questionId, QuestionOptionsRequestDto dto) {
        repository.updateQuestionById(questionId, dto);
    }

    @Override
    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate) {
        return repository.getQuestions(fromDate, toDate);
    }

    @Override
    public QuestionOptionsRequestDto getQuestionDetails(Long questionId) {
        return repository.getQuestionDetails(questionId);
    }

    @Override
    public List<Question> getQuestions(QuestionType questionType) {
        return repository.getQuestions(questionType);
    }

    @Override
    public List<Question> getQuestions(QuestionStatus status) {
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