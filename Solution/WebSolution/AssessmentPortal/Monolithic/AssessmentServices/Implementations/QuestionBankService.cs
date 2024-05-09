using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;

using Transflower.TFLAssessment.Repositories.Interfaces;
//Providers

namespace Transflower.TFLAssessment.Repositories.Implementations;

public class QuestionBankService : IQuestionBankService
{
    private readonly IQuestionBankService _repository;

    public QuestionBankService(IQuestionBankService repository)
    {
        _repository = repository;

    }

    public List<QuestionTitle> GetAllQuestions()
    {
        return _repository.GetAllQuestions;
    }


    public List<SubjectQuestion> GetQuestionsBySubject(int id)
    {

        return _repository.GetQuestionsBySubject(id);
    }


    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId, int criteriaId)
    {

        return _repository.GetQuestionsBySubjectAndCriteria(subjectId, criteriaId);
    }


    public bool UpdateAnswer(int id, char answer)
    {
        return _repository.UpdateAnswer(id, answer);
    }


    public Question GetQuestion(int questionId)
    {

        return _repository.GetQuestion(questionId);
    }


    public bool UpdateQuestionOptions(int id, Question options)
    {
        return _repository.UpdateQuestionOptions(id, options);
    }


    public bool UpdateSubjectCriteria(int questionId, Question question)
    {
        return _repository.UpdateSubjectCriteria(questionId, question);

    }
}