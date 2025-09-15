package com.transflower.tflassessment.repositories;

import java.time.LocalDateTime;
import java.util.List;

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

public interface ResultRepository {

    int getCandidateScore(int candidateId, int testId);

    // public Task<int> GetCandidateTestScore(int candidateId, int testId);
    boolean setCandidateTestStartTime(int candidateId, int testId, LocalDateTime time);

    boolean setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time);

    CandidateResultDetails candidateTestResultDetails(int candidateId, int testId);

    List<TestResultDetails> getTestResultDetail(int testId);

    List<AppearedCandidate> getAppearedCandidates(int testId);

    List<TestList> getTestList(int candidateId);

    List<PassedCandidateDetails> getPassedCandidateResults(int testId);

    List<FailedCandidateDetails> getFailedCandidateResults(int testId);

    boolean setPassingLevel(int testId, int passingLevel);

    List<CandidateSubjectResults> getSubjectResultDetails(int subjectId);

    // public Task<int[]> GetAllTestIds();
    List<Subject> getAllSubjects();

    List<TestAverageReport> getTestAverageReport(int testId);

    List<TestScoreDto> getCandidateAllScore(int candidateId);

    boolean setCandidateTestResultDetails(int candidateId, int testId);
}
