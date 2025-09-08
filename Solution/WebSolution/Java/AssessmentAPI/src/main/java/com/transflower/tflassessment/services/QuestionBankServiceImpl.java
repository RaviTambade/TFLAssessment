package com.transflower.tflassessment.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.NewQuestion;
import com.transflower.tflassessment.entities.Question;
import com.transflower.tflassessment.entities.QuestionDetails;
import com.transflower.tflassessment.entities.QuestionTitle;
import com.transflower.tflassessment.entities.SubjectQuestion;
import com.transflower.tflassessment.repositories.QuestionBankRepository;

@Service
public class QuestionBankServiceImpl implements QuestionBankService {

    private final QuestionBankRepository repository;
    @Autowired
    public QuestionBankServiceImpl(QuestionBankRepository repository)
    {
        this.repository=repository;
    }

    @Override
    public List<QuestionTitle> getAllQuestions() {
       return repository.getAllQuestions();
    }

    @Override
    public List<SubjectQuestion> getQuestionsBySubject(int id) {
        return repository.getQuestionsBySubject(id);
    }

    @Override
    public List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId, int criteriaId) {
        return repository.getQuestionsBySubjectAndCriteria(subjectId, criteriaId);
     }

    @Override
    public List<QuestionDetails> getQuestionsWithSubjectAndCriteria() {
        return repository.getQuestionsWithSubjectAndCriteria();
    }

    @Override
    public List<Question> getQuestions(int testId) {
        return repository.getQuestions(testId);
    }

    @Override
    public boolean updateAnswer(int id, char answerKey) {
        return repository.updateAnswer(id, answerKey);
    }

    @Override
    public Question getQuestion(int questionId) {
        return repository.getQuestion(questionId);
    }

    @Override
    public boolean updateQuestionOptions(int id, Question options) {
        return repository.updateQuestionOptions(id, options);
    }

    @Override
    public boolean updateSubjectCriteria(int questionId, Question question) {
        return repository.updateSubjectCriteria(questionId, question);
    }

    @Override
    public boolean insertQuestion(NewQuestion question) {
        return repository.insertQuestion(question);
    }

    @Override
    public String getCriteria(String subject, int questionId) {
        return repository.getCriteria(subject, questionId);
    }

}