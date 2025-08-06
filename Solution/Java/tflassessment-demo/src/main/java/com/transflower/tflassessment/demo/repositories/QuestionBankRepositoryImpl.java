package com.transflower.tflassessment.demo.repositories;
import java.util.List;
// import transflower.tflassessment.Repositories.Interfaces.*
// import transflower.tflassessment.Repositories.Repositories.*

public class QuestionBankRepositoryImpl implements QuestionBankRepository {


    // private readonly IConfiguration _configuration;
    // private readonly string _connectionString;

    // public QuestionBankRepository(IConfiguration configuration)
    // {
    //     _configuration = configuration;
    //     _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    // }
    @Override
    public  List<QuestionTitle> getAllQuestions(){
        return null;
    }
    @Override
    public  List<SubjectQuestion> getQuestionsBySubject(int id){
        return null;
    }
    @Override
    public  List<QuestionDetails> getQuestionsBySubjectAndCriteria(int subjectId,int criteriaId){
        return null;
    }
    @Override
    public  List<QuestionDetails> getQuestionsWithSubjectAndCriteria(){
        return null;
    }
    @Override
    public  List<Question> getQuestions(int testId){
        return null;
    }
    @Override
    public  List <boolean> updateAnswer(int id,char answerKey){
        return false;
    }
    @Override
    public  List<Question> getQuestion(int questionId){
        return null;
    }
    @Override
    public  List<boolean> updateQuestionOptions(int id,Question options){
        return false;
    }
    @Override
    public  List<boolean> updateSubjectCriteria(int questionId,Question question){
        return false;
    }
    @Override
    public  List<boolean> insertQuestion(NewQuestion question){
        return false;
    }
    @Override
    public  List<String> getCriteria(String subject, int questionId){
        return null;
    }
    
}
