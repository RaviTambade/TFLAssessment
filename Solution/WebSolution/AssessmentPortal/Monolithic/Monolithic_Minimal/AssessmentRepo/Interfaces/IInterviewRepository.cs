using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;
public interface IInterviewRepository{

    public List<InterviewCandidateDetails> GetAllInterviewCandidates();
    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId);
    public InterviewDetails GetInterviewDetails(int interviewId);
    public bool ReschduleInterview(int interviewId,DateTime date);

    public bool ChangeInterviewer(int interviewId, int smeId);
    public  bool CancelInterview(int interviewId);
}