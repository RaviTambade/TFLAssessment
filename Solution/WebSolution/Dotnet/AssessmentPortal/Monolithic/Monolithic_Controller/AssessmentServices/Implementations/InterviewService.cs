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
    public async Task<List<InterviewCandidateDetails>> GetAllInterviewCandidates()
    {
        return await _repository.GetAllInterviewCandidates();
    }
    public async Task<List<InterviewCandidateDetails>> GetInterviewedCandidatesSubjects(int candidateId)
    {
        return await _repository.GetInterviewedCandidatesSubjects(candidateId);
    }
    public async Task<InterviewDetails> GetInterviewDetails(int interviewId)
    {
        return await _repository.GetInterviewDetails(interviewId);
    }
    public async Task<bool> RescheduleInterview(int interviewId, DateTime date)
    {
        return await _repository.RescheduleInterview(interviewId, date);
    }
    public async Task< bool> RescheduleInterview(int interviewId, string time)
    {
        return await _repository.RescheduleInterview(interviewId, time);
    }
    public async Task<bool> RescheduleInterview(int interviewId, string time, DateTime date)
    {
        return await _repository.RescheduleInterview(interviewId, time, date);
    }
    public async Task<bool> ChangeInterviewer(int interviewId, int smeId)
    {
        return await _repository.ChangeInterviewer(interviewId, smeId);
    }
    public async  Task<bool> CancelInterview(int interviewId)
    {
        return await _repository.CancelInterview(interviewId);
    }
}
