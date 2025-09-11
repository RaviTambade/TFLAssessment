package com.transflower.tflassessment.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.transflower.tflassessment.repositories.ResultRepository;

@Service
public class ResultServiceImpl implements ResultService {

  
    private final ResultRepository _repo;

    @Autowired
    public ResultServiceImpl(ResultRepository repo)
    {
        _repo=repo;
    }

    @Override
    public int getCandidateScore(int candidateId, int testId) {
        
        return _repo.getCandidateScore(candidateId, testId);
    }
        

    @Override
    public boolean setCandidateTestStartTime(int candidateId, int testId, LocalDateTime time) {
        return _repo.setCandidateTestStartTime(candidateId, testId, time);
    }

    @Override
    public boolean setCandidateTestEndTime(int candidateId, int testId, LocalDateTime time) {
        
        return _repo.setCandidateTestEndTime(candidateId, testId, time);
     }

    @Override
    public CandidateResultDetails candidateTestResultDetails(int candidateId, int testId) {
      
        return _repo.candidateTestResultDetails(candidateId, testId);
    }

    @Override
    public List<TestResultDetails> getTestResultDetail(int testId) {
      
        return _repo.getTestResultDetail(testId);
    }

    @Override
    public List<AppearedCandidate> getAppearedCandidates(int testId) {
      return _repo.getAppearedCandidates(testId);
    }

    @Override
    public List<TestList> getTestList(int candidateId) {
       return getTestList(candidateId);
    }

    @Override
    public List<PassedCandidateDetails> getPassedCandidateResults(int testId) {
       return _repo.getPassedCandidateResults(testId);
    }

    @Override
    public List<FailedCandidateDetails> getFailedCandidateResults(int testId) {
       return _repo.getFailedCandidateResults(testId);
    }

    @Override
    public boolean setPassingLevel(int testId, int passingLevel) {
      return _repo.setPassingLevel(testId, passingLevel);
    }

    @Override
    public List<CandidateSubjectResults> getSubjectResultDetails(int subjectId) {
        return _repo.getSubjectResultDetails(subjectId);
    }

    @Override
    public List<Subject> getAllSubjects() {
      return _repo.getAllSubjects();
    }

    @Override
    public List<TestAverageReport> getTestAverageReport(int testId) {
      return _repo.getTestAverageReport(testId);
    }

    @Override
    public List<TestScoreDto> getCandidateAllScore(int candidateId) {
       return _repo.getCandidateAllScore(candidateId);
    }

    
}





 

