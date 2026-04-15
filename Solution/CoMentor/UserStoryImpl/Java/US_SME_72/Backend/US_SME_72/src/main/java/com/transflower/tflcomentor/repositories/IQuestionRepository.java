package com.transflower.tflcomentor.repositories;

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

    List<Question> getAllQuestions();
    List<Question> getDraftQuestions();
    List<Question> getRecentQuestions();
    void approveQuestion(Long id);
    void rejectQuestion(Long id);
    void approveAllQuestions();
    void rejectAllQuestions();

}
