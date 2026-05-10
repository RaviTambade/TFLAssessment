using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IQuestionBankRepository{
    public Task<List<QuestionTitle>> GetAllQuestions();
    public Task<List<SubjectQuestion>> GetQuestionsBySubject(int id);
    public Task<List<QuestionDetails>> GetQuestionsBySubjectAndConcept(int subjectId,int conceptId);
    public  Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptWithOptions(int subjectId, int conceptId);
    public  Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptWithOptionsAndAnswer(int subjectId, int conceptId);
    public Task<List<QuestionDetails>> GetQuestionsBySubjectAndConceptAndQuestionId(int subjectId,int conceptId,int questionId);
    public Task<List<QuestionDetails>> GetQuestionsWithSubjectAndConcept();
    public Task<List<Question>> GetQuestions(int testId);
    public Task<bool> UpdateAnswer(int id,char answerKey);
    public Task<Question> GetQuestion(int questionId);
    public Task<bool> UpdateQuestionOptions(int id,Question options);
    public Task<bool> UpdateSubjectConcept(int questionId,Question question);
    public Task<bool> InsertQuestion(NewQuestion question);
    public Task<string> GetConcept(string subject, int questionId);
    public Task<List<SubjectQuestionCount>> GetSubjectQuestionCount();
    public Task<List<QuestionConcept>> GetQuestionsByConceptAndLevel(int subjectId, int conceptId, string difficultyLevel);
    


}