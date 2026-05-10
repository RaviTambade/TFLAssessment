package com.transflower.tflassessment.entities;
import java.util.Objects;

public class FailedCandidateDetails implements Cloneable {

    private int assessmentId;
    private int candidateId;
    private String firstName;
    private String lastName;
    private int passingLevel;
    private int score;

    public FailedCandidateDetails() {
        this.assessmentId = 0;
        this.candidateId = 0;
        this.firstName = null;
        this.lastName = null;
        this.passingLevel = 0;
        this.score = 0;
    }

    public FailedCandidateDetails(int assessmentId, int candidateId, String firstName, String lastName, int passingLevel, int score) {
        this.assessmentId = assessmentId;
        this.candidateId = candidateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passingLevel = passingLevel;
        this.score = score;
    }

    public int getAssessmentId() {
        return assessmentId;
    }

    public void setAssessmentId(int assessmentId) {
        this.assessmentId = assessmentId;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
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

    public int getPassingLevel() {
        return passingLevel;
    }

    public void setPassingLevel(int passingLevel) {
        this.passingLevel = passingLevel;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return ("assessmentId: " + assessmentId + "Candidate Id: " + candidateId + "First Name: " + firstName + "Last Name: " + lastName + "Passing Level: " + passingLevel + "Score: " + score);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || (this.getClass() != obj.getClass())) {
            return false;
        }
        FailedCandidateDetails fc = (FailedCandidateDetails) obj;
        return this.assessmentId == fc.assessmentId
                && this.candidateId == fc.candidateId
                && this.firstName.equals(fc.firstName)
                && this.lastName.equals(fc.lastName)
                && this.passingLevel == fc.passingLevel
                && this.score == fc.score;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.assessmentId, this.candidateId, this.firstName, this.lastName, this.passingLevel, this.score);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {
            return new FailedCandidateDetails(this.assessmentId, this.candidateId, this.firstName, this.lastName, this.passingLevel, this.score);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for \" + this");
        } finally {
        }
    }
}
