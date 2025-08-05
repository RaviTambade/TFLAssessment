package com.transflower.tflassessment.demo.entities;

import java.util.List;

public class QuestionBankRepositoryImpl implements IQuestionBankRepository {

    
    public  List<QuestionTitle> getAllQuestions()
    {
       return null;
    }
    public  List<SubjectQuestion>  getQuestionsBySubject(int id)
    {
       return null;
    }
    public  List<QuestionDetails>  getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {
        return null;
    }
    public  List<QuestionDetails>  getQuestionsWithSubjectAndCriteria()
    {
        return null;
    }
    public  List<Question>  getQuestions(int testId)
    {
        return null;
    }
    public  <bool> updateAnswer(int id,char answerKey)
    {
        return null;
    }
    public  <Question>  getQuestion(int questionId)
    {
        return null;
    }
    public  <bool> updateQuestionOptions(int id,Question options)
    {
        return null;
    }
    public  <bool> updateSubjectCriteria(int questionId,Question question)
    {
        return null;
    }
    public  <bool> insertQuestion(NewQuestion question)
    {
        return null;
    }
    public  <string>  getCriteria(string subject, int questionId)
    {
        return null;
    }



    
}
