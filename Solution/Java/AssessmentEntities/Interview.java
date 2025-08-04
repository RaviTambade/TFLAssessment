package transflower.tflAssessment.entities;
import java.time.LocalDate;
import java.time.LocalTime;
public class Interview
{
    public int id;
    public LocalDate interviewDate;
    public LocalTime interviewTime;
    public int smeId;
    public int candidateId;

    public Interview() {
        this.id = 0;
        this.interviewDate = null;
        this.interviewTime = null;
        this.smeId = 0;
        this.candidateId = 0;
    }

    public Interview(int id, LocalDate interviewDate, LocalTime interviewTime, int smeId, int candidateId) {
        this.id = id;
        this.interviewDate = interviewDate;
        this.interviewTime = interviewTime;
        this.smeId = smeId;
        this.candidateId = candidateId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }

    public LocalTime getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(LocalTime interviewTime) {
        this.interviewTime = interviewTime;
    }

    public int getSmeId() {
        return smeId;
    }

    public void setSmeId(int smeId) {
        this.smeId = smeId;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }
}