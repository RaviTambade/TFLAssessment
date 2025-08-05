namespace Transflower.TFLAssessment.Entities;
public class StudentTestPerformanceDto
{
    // public int CandidateId { get; set; }
    // public string StudentName { get; set; }
    public List<TestScoreDto> TestScores { get; set; }
}


//
import com.transflower.tflassessment.Entities;

public class StudentTestPerformanceDto
{
    private List<TestScoreDto> testScores;


    public List<TestScoreDto> getTestScores()
    {
        return testScores;
    }

    public void setTestScores(List<TestScoreDto> testScores)
    {
        this.testScores = testScores;
    }
}
