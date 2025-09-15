using AssessmentLib.Entities;
using AssessmentLib.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Services.Implementation
{
    public class QuestionBankService : IQuestionBankService
    {
        private readonly IQuestionBankService _repository;
        public QuestionBankService(IQuestionBankService repository)
        {
            _repository = repository;
        }
        public async Task<List<QuestionTitle>> GetAllQuestions()
        {
            return await _repository.GetAllQuestions();
        }
        public async Task<List<SubjectQuestion>> GetQuestionsBySubject(int id)
        {
            return await _repository.GetQuestionsBySubject(id);
        }
        public async Task<List<QuestionDetails>> GetQuestionsBySubjectAndCriteria(int SubjectId, int CriteriaId)
        {
            return await _repository.GetQuestionsBySubjectAndCriteria(SubjectId, CriteriaId);
        }
        public async Task<List<QuestionDetails>> GetQuestionsWithSubjectAndCriteria()
        {
            return await _repository.GetQuestionsWithSubjectAndCriteria();
        }
        public async Task<List<Question>> GetQuestions(int TestId)
        {
            return await _repository.GetQuestions(TestId);
        }
        public async Task<bool> UpdateAnswer(int Id, char Answerkey)
        {
            return await _repository.UpdateAnswer(Id, Answerkey);
        }
        public async Task<Question> GetQuestion(int QuestionId)
        {
            return await _repository.GetQuestion(QuestionId);
        }
        public async Task<bool> UpdateSubjectCriteria(int QuestionId, Question question)
        {
            return await _repository.UpdateSubjectCriteria(QuestionId, question);
        }
        public async Task<bool> UpdateQuestionOptions(int Id, Question options)
        {
            return await _repository.UpdateQuestionOptions(Id, options);
        }
        public async Task<bool> InsertQuestion(Question question)
        {
        return await _repository.InsertQuestion(question);
        }
        public async Task<string> GetString(String subject, int QuestionId)
        {
         return await _repository.GetString(subject, QuestionId);
        }

        public Task<string> GetCriteria(string subjectId, int questionId)
        {
            throw new NotImplementedException();
        }
    }
}
