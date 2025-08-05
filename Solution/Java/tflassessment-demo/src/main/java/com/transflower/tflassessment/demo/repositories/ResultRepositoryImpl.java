package com.transflower.tflassessment.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;
import com.transflower.tflassessment.demo.entities.*;

public class ResultRepositoryImpl implements ResultRepository {

    // private readonly IConfiguration _configuration;
    // private readonly string _connectionString;

    // public ResultRepository(IConfiguration configuration)
    // {
    //     _configuration = configuration;
    //     _connectionString = _configuration.GetConnectionString("DefaultConnection") ?? throw new ArgumentNullException("connectionString");
    // }

    @Override
    public int getCandidateScore(int candidateId, int testId) {
        return -1;
    }
        

    @Override
    public boolean setCandidateTestStartTime(int candidateId, int testId, LocalDateTime time) {
       
        return false;
    }

    @Override
    public boolean setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time) {
        return false;
     }

    @Override
    public CandidateResultDetails candidateTestResultDetails(int candidateId, int testId) {
        return null;
    }

    @Override
    public List<TestResultDetails> getTestResultDetail(int testId) {
       
        return null;
    }

    @Override
    public List<AppearedCandidate> getAppearedCandidates(int testId) {
    
        return null;
    }

    @Override
    public List<TestList> getTestList(int candidateId) {
        return null;
       }

    @Override
    public List<PassedCandidateDetails> getPassedCandidateResults(int testId) {
        return null;
    }

    @Override
    public List<FailedCandidateDetails> getFailedCandidateResults(int testId) {
        return null;
    }

    @Override
    public boolean setPassingLevel(int testId, int passingLevel) {
        return false;
    }

    @Override
    public List<CandidateSubjectResults> getSubjectResultDetails(int subjectId) {
       return null;
    }

    @Override
    public List<Subject> getAllSubjects() {
        return null;
    }

    @Override
    public List<TestAverageReport> getTestAverageReport(int testId) {
        return null;
    }

    @Override
    public List<TestScoreDto> getCandidateAllScore(int candidateId) {
        return null;
    }
    
}
