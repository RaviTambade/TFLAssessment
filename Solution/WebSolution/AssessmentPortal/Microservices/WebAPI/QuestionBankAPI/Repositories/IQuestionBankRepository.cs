using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IQuestionBankRepository{
    public Task<List<QuestionTitle>> GetAllQuestions();
    public Task<List<SubjectQuestion>> GetQuestionsBySubject(int id);
    public Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    public Task<List<Question>> GetQuestions(int testId);
    public Task<bool> UpdateAnswer(int id,char answerKey);
    public Task<Question> GetQuestion(int questionId);
    public Task<bool> UpdateQuestionOptions(int id,Question options);
    public Task<bool> UpdateSubjectCriteria(int questionId,Question question);
    public Task<bool> InsertQuestion(NewQuestion question);
    public Task<string> GetCriteria(string subject, int questionId);
}