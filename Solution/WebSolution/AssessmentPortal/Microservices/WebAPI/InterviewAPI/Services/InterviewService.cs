using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Services;


public class InterviewService : IInterviewService
{
    private readonly IInterviewRepository _repository;
    public InterviewService(IInterviewRepository repository)
    {
        _repository = repository;
    }
    public List<InterviewCandidateDetails> GetAllInterviewCandidates()
    {
        return _repository.GetAllInterviewCandidates();
    }
    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId)
    {
        return _repository.GetInterviewedCandidatesSubjects(candidateId);
    }

    public InterviewDetails GetInterviewDetails(int interviewId)
    {
        return _repository.GetInterviewDetails(interviewId);
    }
    public bool RescheduleInterview(int interviewId, DateTime date)
    {
        return _repository.RescheduleInterview(interviewId, date);
    }
    public bool RescheduleInterview(int interviewId, string time)
    {
        return _repository.RescheduleInterview(interviewId, time);
    }
    public bool RescheduleInterview(int interviewId, string time, DateTime date)
    {
        return _repository.RescheduleInterview(interviewId, time, date);
    }
    public bool ChangeInterviewer(int interviewId, int smeId)
    {
        return _repository.ChangeInterviewer(interviewId, smeId);
    }
    public bool CancelInterview(int interviewId)
    {
        return _repository.InterviewDetails.CancelInterview(interviewId);
    }
}
