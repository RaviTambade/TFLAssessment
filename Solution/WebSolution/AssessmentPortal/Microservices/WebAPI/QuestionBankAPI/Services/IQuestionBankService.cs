using Transflower.Assessment.WebAPI.QuestionBankAPI.Entities;
namespace  Transflower.Assessment.WebAPI.QuestionBankAPI.Services.Interfaces;

 public interface IQuestionBankService{
    public List<QuestionTitle> GetAllQuestions();
    public List<SubjectQuestion> GetQuestionsBySubject(int id);
    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    public List<Question> GetQuestions(int testId);
    public bool UpdateAnswer(int id,char answerKey);
    public Question GetQuestion(int questionId);
    public bool UpdateQuestionOptions(int id,Question options);
    public bool UpdateSubjectCriteria(int questionId,Question question);
    public bool InsertQuestion(NewQuestion question);
    public string GetCriteria(string subject, int questionId);
}