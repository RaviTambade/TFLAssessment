// package com.transflower.tflAssessment.entities;
public class AnnualCandidateResult {

    private int candidateId;
    private int score;
    private String subjectTitle;

    public AnnualCandidateResult() {

        this.candidateId = 0;
        this.score = 0;
        this.subjectTitle = "";
    }

    public AnnualCandidateResult(int candidateId, int score, String subjectTitle) {
        this.candidateId = candidateId;
        this.score = score;
        this.subjectTitle = subjectTitle;
    }

    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getSubjectTitle() {
        return subjectTitle;
    }

    public void getSubjectTitle(String subjectTitle) {
        this.subjectTitle = subjectTitle;
    }

}
