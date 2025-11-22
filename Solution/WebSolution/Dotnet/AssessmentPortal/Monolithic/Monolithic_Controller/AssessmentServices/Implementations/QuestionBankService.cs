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

    public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndConcept(int subjectId,int conceptId)
    {
        return await _repository.GetQuestionsBySubjectAndConcept(subjectId, conceptId);
       
    }

      public async Task<List<QuestionDetails>> GetQuestionsWithSubjectAndConcept()
    {
        return await _repository.GetQuestionsWithSubjectAndConcept();
       
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
    public async Task<bool> UpdateSubjectConcept(int questionId,Question question)
    {
        return await _repository.UpdateSubjectConcept(questionId,question);
        
       
    }


    public async Task<bool> InsertQuestion(NewQuestion question)
    {
        if (question == null)
        {
            throw new ArgumentNullException(nameof(question), "Question cannot be null");
        }
       return await _repository.InsertQuestion(question);
    }

    
    public async Task<string> GetConcept(string subject, int questionId)
    {
        return await _repository.GetConcept(subject,questionId);
    }


    public async Task<List<SubjectQuestionCount>> GetSubjectQuestionCount()
    {
        return await _repository.GetSubjectQuestionCount();
    }
}

