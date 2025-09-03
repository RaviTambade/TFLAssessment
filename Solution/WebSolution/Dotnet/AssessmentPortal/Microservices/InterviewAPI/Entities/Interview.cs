namespace Transflower.TFLAssessment.Entities;

public class Interview
{
    public int Id { get; set; }
    public DateTime InterviewDate { get; set; }
    public string InterviewTime { get; set; }
    public int SmeId { get; set; }
    public int CandidateId { get; set; }
}