package com.transflower.tflAssessment.entities;
public class FailedCandidateDetails {
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

}