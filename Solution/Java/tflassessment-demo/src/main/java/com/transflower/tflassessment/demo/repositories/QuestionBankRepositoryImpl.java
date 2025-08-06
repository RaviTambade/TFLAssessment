package com.transflower.tflassessment.demo.*;
import java.util.List;
// import transflower.tflassessment.Repositories.Interfaces.*
// import transflower.tflassessment.Repositories.Repositories.*

public class QuestionBankRepositoryImpl implements QuestionBankRepository {
    public  List<QuestionTitle> getAllQuestions(){
        return null;
    }
    public  List<SubjectQuestion> getQuestionsBySubject(int id){
        return null;
    }
    public  List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId){
        return null;
    }
    public  List<QuestionDetails> getQuestionsWithSubjectAndCriteria(){
        return null;
    }
    public  List<Question> getQuestions(int testId){
        return null;
    }
    public  List <bool> updateAnswer(int id,char answerKey){
        return null;
    }
    public  List<Question> getQuestion(int questionId){
        return null;
    }
    public  List<bool> updateQuestionOptions(int id,Question options){
        return null;
    }
    public  List<bool> updateSubjectCriteria(int questionId,Question question){
        return null;
    }
    public  List<bool> insertQuestion(NewQuestion question){
        return null;
    }
    public  List<String> getCriteria(String subject, int questionId){
        return null;
    }
}
