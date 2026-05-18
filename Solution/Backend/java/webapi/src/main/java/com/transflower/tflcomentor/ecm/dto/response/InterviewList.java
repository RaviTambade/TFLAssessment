package com.transflower.tflcomentor.ecm.dto.response;
import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;

public class InterviewList {


    private int interviewer;
    private String title;
    private int interviewId;
    private InterviewStatus status;

       

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getInterviewer() {
        return interviewer;
    }

    public void setInterviewer(int interviewer) {
        this.interviewer = interviewer;
    }

    public int getInterviewId() {
        return interviewId;
    }   
    public void setInterviewId(int interviewId) {
        this.interviewId = interviewId;
    }
    public InterviewStatus getStatus() {
    return status;
}

public void setStatus(InterviewStatus status) {
    this.status = status;
}

}