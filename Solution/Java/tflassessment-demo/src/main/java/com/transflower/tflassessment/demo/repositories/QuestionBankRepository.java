package com.transflower.tflassessment.demo.repositories;

import java.util.List;

import com.transflower.tflassessment.demo.entities.NewQuestion;
import com.transflower.tflassessment.demo.entities.Question;
import com.transflower.tflassessment.demo.entities.QuestionDetails;
import com.transflower.tflassessment.demo.entities.QuestionTitle;
import com.transflower.tflassessment.demo.entities.SubjectQuestion;

public interface QuestionBankRepository {

    public List<QuestionTitle> getAllQuestions();

    public List<SubjectQuestion> getQuestionsBySubject(int id);

    public List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId, int criteriaId);

    public List<QuestionDetails> getQuestionsWithSubjectAndCriteria();

    public List<Question> getQuestions(int testId);

    public boolean updateAnswer(int id, char answerKey);

    public Question getQuestion(int questionId);

    public boolean updateQuestionOptions(int id, Question options);

    public boolean updateSubjectCriteria(int questionId, Question question);

    public boolean insertQuestion(NewQuestion question);

    public String getCriteria(String subject, int questionId);

}
