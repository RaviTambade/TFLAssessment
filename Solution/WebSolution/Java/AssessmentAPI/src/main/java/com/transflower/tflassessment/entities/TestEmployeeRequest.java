package com.transflower.tflassessment.entities;

public class TestEmployeeRequest {

    private TestAssignmentRequest request;
    private CandidateTestDetails candidateTestDetails;

    public TestEmployeeRequest() {
    }

    public TestEmployeeRequest(TestAssignmentRequest request, CandidateTestDetails candidateTestDetails) {
        this.request = request;
        this.candidateTestDetails = candidateTestDetails;
    }

    public TestAssignmentRequest getRequest() {
        return request;
    }

    public void setRequest(TestAssignmentRequest request) {
        this.request = request;
    }

    public CandidateTestDetails getCandidateTestDetails() {
        return candidateTestDetails;
    }

    public void setCandidateTestDetails(CandidateTestDetails candidateTestDetails) {
        this.candidateTestDetails = candidateTestDetails;
    }
}
