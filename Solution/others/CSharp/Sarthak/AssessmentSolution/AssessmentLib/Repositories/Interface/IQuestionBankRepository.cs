using AssessmentLib.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Repositories.Interface
{
    public interface IQuestionBankRepository
    {
        public Task<List<QuestionTitle>> GetAllQuestions();
        public Task<List<SubjectQuestion>> GetQuestionsBySubject(int id);
        public Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int SubjectId, int CriteriaId);
        public Task<List<QuestionDetails>> GetQuestionsWithSubjectAndCriteria();
        public Task<List<Question>> GetQuestions(int TestId);
        public Task<bool> UpdateAnswer(int Id, char AnswerKey);
        public Task<Question> GetQuestion(int QuestionId);
        public Task<bool> UpdateSubjectCriteria(int QuestionId, Question question);
        public Task<bool> UpdateQuestionOptions(int Id, Question options);
        public Task<bool> InsertQuestion(Question question);
        public Task<String> GetString(String subject, int QuestionId);
    }
}
