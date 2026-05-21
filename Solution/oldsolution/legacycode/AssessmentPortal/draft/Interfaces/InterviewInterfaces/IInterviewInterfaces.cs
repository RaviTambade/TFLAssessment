using InterviewEntities;

namespace InterviewInterfaces;
public interface IInterviewService{

    public List<InterviewCandidateDetails> GetAllInterviewCandidates();
    public List<InterviewCandidateDetails> GetInterviewedCandidatesSubjects(int candidateId);
    public InterviewDetails GetInterviewDetails(int interviewId);
    public bool RescheduleInterview(int interviewId,DateTime date);
    public bool RescheduleInterview(int interviewId,string time);
    public bool RescheduleInterview(int interviewId,string time,DateTime date);
    public bool ChangeInterviewer(int interviewId, int smeId);
    public  bool CancelInterview(int interviewId);
}