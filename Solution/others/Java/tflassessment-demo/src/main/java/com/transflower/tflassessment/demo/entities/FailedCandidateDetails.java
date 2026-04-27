package com.transflower.tflassessment.demo.entities;
import java.util.Objects;

public class FailedCandidateDetails implements Cloneable {

    private int testId;
    private int candidateId;
    private String firstName;
    private String lastName;
    private int passingLevel;
    private int score;

    public FailedCandidateDetails() {
        this.testId = 0;
        this.candidateId = 0;
        this.firstName = null;
        this.lastName = null;
        this.passingLevel = 0;
        this.score = 0;
    }

    public FailedCandidateDetails(int testId, int candidateId, String firstName, String lastName, int passingLevel, int score) {
        this.testId = testId;
        this.candidateId = candidateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passingLevel = passingLevel;
        this.score = score;
    }

    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
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
        return ("Test Id: " + testId + "Candidate Id: " + candidateId + "First Name: " + firstName + "Last Name: " + lastName + "Passing Level: " + passingLevel + "Score: " + score);
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
        return this.testId == fc.testId
                && this.candidateId == fc.candidateId
                && this.firstName.equals(fc.firstName)
                && this.lastName.equals(fc.lastName)
                && this.passingLevel == fc.passingLevel
                && this.score == fc.score;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.testId, this.candidateId, this.firstName, this.lastName, this.passingLevel, this.score);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {
            return new FailedCandidateDetails(this.testId, this.candidateId, this.firstName, this.lastName, this.passingLevel, this.score);
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
