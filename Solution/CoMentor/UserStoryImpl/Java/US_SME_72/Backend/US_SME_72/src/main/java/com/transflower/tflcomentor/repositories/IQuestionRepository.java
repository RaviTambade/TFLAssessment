package com.transflower.tflcomentor.repositories;

import com.transflower.tflcomentor.dtos.QuestionDto;
import com.transflower.tflcomentor.dtos.QuestionListDto;
import com.transflower.tflcomentor.entities.Question;
import java.util.List;

public interface IQuestionRepository {

    Long insertQuestion(Question q);

    void insertMcqOptions(Long questionId,
            String optionA,
            String optionB,
            String optionC,
            String optionD,
            String correctAnswer);

    List<QuestionListDto> getDraftQuestionList();

    void updateQuestion(Long id, QuestionDto dto);

    List<QuestionListDto> getRecentQuestionList();

    QuestionDto getQuestionDetails(Long id);

    List<Question> getAllQuestions();

    List<Question> getDraftQuestions();

    List<Question> getRecentQuestions();

    void approveQuestion(Long id);

    void rejectQuestion(Long id);

    void approveAllQuestions();

    void rejectAllQuestions();

}
