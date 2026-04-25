package com.transflower.tflcomentor.ecm.service;

import java.time.LocalDate;
import java.util.List;

<<<<<<< HEAD
import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequestDto;
import com.transflower.tflcomentor.ecm.dto.response.QuestionResponseDTO;
import com.transflower.tflcomentor.ecm.dto.response.QuestionOptionsResponseDto;
=======
import com.transflower.tflcomentor.ecm.dto.QuestionOptionsRequestDto;
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public interface QuestionService {
    
    public Long insertQuestion(Question question);

    public Long createQuestionWithOptions(QuestionOptionsRequestDto dto);

    public Question getQuestionById(long questionId);

    public List<Question> getAllQuestions();

    public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty);

    public void updateQuestionById(Long questionId, QuestionOptionsRequestDto dto);

    public List<Question> getQuestions(LocalDate fromDate, LocalDate toDate);

<<<<<<< HEAD
    List<QuestionResponseDTO> getQuestions(LocalDate fromDate, LocalDate toDate);
=======
    public QuestionOptionsRequestDto getQuestionDetails(Long questionId);
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e

    public List<Question> getQuestions(QuestionType questionType);

<<<<<<< HEAD
    List<QuestionResponseDTO> getQuestions(String questionType);

    List<QuestionResponseDTO> getQuestions(QuestionStatus status);
=======
    public List<Question> getQuestions(QuestionStatus status);

    public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status);
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e

    public void updateQuestionStatus(long questionId, QuestionStatus status);

    public  List<Question> getQuestionsByConceptId(Long conceptId);
}


