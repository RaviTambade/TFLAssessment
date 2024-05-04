using  Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IInterviewRepository{

    public Task<List<InterviewCandidateDetails>> GetAllInterviewCandidates();
    public Task <List<InterviewCandidateDetails>> GetInterviewedCandidatesSubjects(int candidateId);
    public  Task <InterviewDetails> GetInterviewDetails(int interviewId);
    public Task<bool> RescheduleInterview(int interviewId,DateTime date);
    public Task<bool> RescheduleInterview(int interviewId,string time);
    public Task<bool> RescheduleInterview(int interviewId,string time,DateTime date);
    public Task<bool> ChangeInterviewer(int interviewId, int smeId);
    public  Task<bool> CancelInterview(int interviewId);
}