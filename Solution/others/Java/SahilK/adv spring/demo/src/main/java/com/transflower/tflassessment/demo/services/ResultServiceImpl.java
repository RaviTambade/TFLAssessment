package com.transflower.tflassessment.demo.services;

import java.sql.*;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.demo.entities.CandidateResultDetails;
import com.transflower.tflassessment.demo.entities.TestResultDetails;
import com.transflower.tflassessment.demo.repositories.ResultRepository;

@Service
public class ResultServiceImpl implements ResultService {

    Connection connection;
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

    
}





 

