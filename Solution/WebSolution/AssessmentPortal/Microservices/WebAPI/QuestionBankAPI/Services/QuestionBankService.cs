using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using  Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class QuestionBankService:IQuestionBankService
{
    private readonly IQuestionBankRepository _repository;
    public QuestionBankService(IQuestionBankRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<QuestionTitle>> GetAllQuestions(){
      return await _repository.GetAllQuestions();
    }

    public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
    {
        return await _repository.GetQuestionsBySubject(id);
        
    }

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {
        return await _repository.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
       
    }

    public async Task<bool> UpdateAnswer(int id, char answerKey){
       return await _repository.UpdateAnswer(id,answerKey);
    }

    public async Task<Question> GetQuestion(int questionId)
    {   
        return await _repository.GetQuestion(questionId);
    }

    public async Task<List<Question>> GetQuestions(int testId)
    { 
       return await _repository.GetQuestions(testId);
    }

    public async Task<bool> UpdateQuestionOptions(int id,Question options)
    { 
       return await _repository.UpdateQuestionOptions(id,options);
      
    }


    //update only evaluationcriteriaid
    public async Task<bool> UpdateSubjectCriteria(int questionId,Question question)
    {
        return await _repository.UpdateSubjectCriteria(questionId,question);
        
       
    }


    public async Task<bool> InsertQuestion(NewQuestion question)
    {

       return await _repository.InsertQuestion(question);
    }

    
    public async Task<string> GetCriteria(string subject, int questionId)
    {
        return await _repository.GetCriteria(subject,questionId);
         
    }
}