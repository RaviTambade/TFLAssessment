package com.transflower.tflcomentor.interview.dto.request;

public class QuestionFeedback {
    private long interviewId;
    private String question;
    private int confidence;
    private int correctness;
    private String comment;

    public QuestionFeedback() {
    }

    public QuestionFeedback(long interviewId, String question,
                            int confidence, int correctness, String comment) {
        this.interviewId = interviewId;
        this.question = question;
        this.confidence = confidence;
        this.correctness = correctness;
        this.comment = comment;
    }

    public long getInterviewId() {
        return interviewId;
    }

    public void setInterviewId(long interviewId) {
        this.interviewId = interviewId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getConfidence() {
        return confidence;
    }

    public void setConfidence(int confidence) {
        this.confidence = confidence;
    }

    public int getCorrectness() {
        return correctness;
    }

    public void setCorrectness(int correctness) {
        this.correctness = correctness;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}