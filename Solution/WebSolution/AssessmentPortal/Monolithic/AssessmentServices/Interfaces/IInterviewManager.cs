
using Assessment.Entities;

namespace Assessment.Repositories.Interfaces;
public interface IInterviewManager{

    public List<InterviewCandidateDetails> GetAllInterviewCandidates();
    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId);
    public InterviewDetails GetInterviewDetails(int interviewId);
    public bool ReschduleInterview(int interviewId,DateTime date);

    public bool ChangeInterviewer(int interviewId, int smeId);
    public  bool CancelInterview(int interviewId);
}