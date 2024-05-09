
using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Repositories.Implementations;

//Providers
public class InterviewManager : IInterviewManager
{
    private readonly IInterviewManager _repository;

    public InterviewManager(IInterviewManager repository)
    {
        _repository = repository;

    }

    public List<InterviewCandidateDetails> GetAllInterviewCandidates()
    {
        return _repository.GetAllInterviewCandidates;
    }

    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId)
    {
        return _repository.GetInterviewedCandidatesSubjects(candidateId);
    }


    public InterviewDetails GetInterviewDetails(int interviewId)
    {
        return _repository.GetInterviewDetails(interviewId);
    }

    public bool ReschduleInterview(int interviewId, DateTime date)
    {
        return _repository.ReschduleInterview(interviewId,date);

    }



    public bool ChangeInterviewer(int interviewId, int smeId)
    {
        return _repository.ChangeInterviewer(interviewId,smeId);

    }


    public bool CancelInterview(int interviewId)
    {
        return _repository.CancelInterview(interviewId);
    }


}
