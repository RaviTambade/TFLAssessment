package com.transflower.tflassessment.demo.services;

import java.time.LocalDateTime;
import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateResultDetails;
import com.transflower.tflassessment.demo.entities.TestResultDetails;

public interface ResultService {

    int getCandidateScore(int candidateId, int testId);

    // public Task<int> GetCandidateTestScore(int candidateId, int testId);
    boolean setCandidateTestStartTime(int candidateId, int testId, LocalDateTime time);

    boolean setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time);

    CandidateResultDetails candidateTestResultDetails(int candidateId, int testId);

    List<TestResultDetails> getTestResultDetail(int testId);
}
