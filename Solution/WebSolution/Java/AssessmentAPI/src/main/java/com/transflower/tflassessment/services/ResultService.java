package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflassessment.entities.AppearedCandidate;
import com.transflower.tflassessment.entities.CandidateResultDetails;
import com.transflower.tflassessment.entities.CandidateSubjectResults;
import com.transflower.tflassessment.entities.FailedCandidateDetails;
import com.transflower.tflassessment.entities.PassedCandidateDetails;
import com.transflower.tflassessment.entities.Subject;
import com.transflower.tflassessment.entities.TestAverageReport;
import com.transflower.tflassessment.entities.TestList;
import com.transflower.tflassessment.entities.TestResultDetails;
import com.transflower.tflassessment.entities.TestScoreDto;

public interface ResultService {

    public CompletableFuture<Integer> getCandidateScore(int candidateId, int testId);
    // public Task<int> GetCandidateTestScore(int candidateId, int testId);
    public CompletableFuture<Boolean> setCandidatTeststarttime(int candidateId, int testId, LocalDateTime time) ;

    public CompletableFuture<Boolean> setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time);

    public CompletableFuture<CandidateResultDetails> CandidateTestResultDetails(int candidateId, int testId);

    public CompletableFuture <List<AppearedCandidate>> getAppearedCandidates(int testId);

    public CompletableFuture<List<TestList>> getTestList(int candidateId);

    public CompletableFuture <List<PassedCandidateDetails>> getPassedCandidateResults(int testId);

    public CompletableFuture<List<FailedCandidateDetails>> getFailedCandidateResults(int testId);

    public CompletableFuture<Boolean> setPassingLevel (int testId, int passingLevel);

    public CompletableFuture<List<CandidateSubjectResults>> getSubjectResultDetails(int subjectId);

    // public Task<int[]> GetAllTestIds();
    public CompletableFuture<List<Subject>> getAllSubjects();

    public  CompletableFuture<List<TestAverageReport>> getTestAverageReport(int testId);

    public CompletableFuture<List<TestScoreDto>> getCandidateAllScore(int candidateId);
         
    public CompletableFuture<List<TestResultDetails>> getTestResultDetail(int testId);

    public CompletableFuture<Boolean> setCandidateTestResultDetails(int candidateId, int testId);



}

