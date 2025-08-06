package com.transflower.tflassessment.demo.entities;

import java.util.List;


public interface IQuestionBankRepository{
    public  List<QuestionTitle>  getAllQuestions();
    public  List<SubjectQuestion>  getQuestionsBySubject(int id);
    public  List<QuestionDetails>  getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    public  List<QuestionDetails>  getQuestionsWithSubjectAndCriteria();
    public  List<Question>  getQuestions(int testId);
    public  <bool> updateAnswer(int id,char answerKey);
    public  <Question>  getQuestion(int questionId);
    public  <bool> updateQuestionOptions(int id,Question options);
    public  <bool> updateSubjectCriteria(int questionId,Question question);
    public  <bool> insertQuestion(NewQuestion question);
    public  <string>  getCriteria(string subject, int questionId);
}
    
}
