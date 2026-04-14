package com.transflower.tflcomentor.repositories;

import com.transflower.tflcomentor.entities.Question;
import java.util.List;

public interface IQuestionRepository {

    void insertQuestion(Question q);

    List<Question> getAllQuestions();

    List<Question> getDraftQuestions();

     List<Question> getRecentQuestions();

    void approveQuestion(Long id);

    void rejectQuestion(Long id);

    void approveAllQuestions();

    void rejectAllQuestions();

}
