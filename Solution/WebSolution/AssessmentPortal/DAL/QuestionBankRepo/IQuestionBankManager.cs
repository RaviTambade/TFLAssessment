
using QuestionBankRepo.Entities;

namespace QuestionBankRepo.Interfaces;

 public interface IQuestionBankManager{
    public List<QuestionTitle> GetAllQuestionTitles();
    public Question GetQuestion(int questionId);
    
    public List<SubjectQuestion> GetAllQuestions();
    public List<SubjectQuestion> GetQuestionsBySubject(int id);
    public List<QuestionSubjectCriteria> GetQuestionDetails(int subjectId,int criteriaId);
    
    public bool UpdateAnswer(int questionId,char answerKey);
    public bool UpdateQuestion(int questionid,Question question);
    public bool InsertQuestion(Question question);
    public bool UpdateSubjectCriteria(int questionId,Question question);
    public bool UpdateOptions(int questionid,Question options);

}
