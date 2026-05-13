using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;

 public interface IQuestionBankRepository{
    public List<QuestionTitle> GetAllQuestions();
    public List<SubjectQuestion> GetQuestionsBySubject(int id);
    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    public bool UpdateAnswer(int question,char answer);
    public Question GetQuestion(int questionId);
    public bool UpdateQuestionOptions(int id,Question options);
    public bool UpdateSubjectCriteria(int questionId,Question question);
}