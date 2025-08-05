namespace com.transflower.tflAssessment.entities;

public class InterviewCandidateDetails{

    public String firstName;
    public String lastName;
    public int candidateId;
    public String title;

    public InterviewCandidateDetails() {
        this.firstName = null;
        this.lastName = null;
        this.candidateId = 0;
        this.title = null;
    }
    
    public InterviewCandidateDetails(String firstName, String lastName, int candidateId, String title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.candidateId = candidateId;
        this.title = title;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}