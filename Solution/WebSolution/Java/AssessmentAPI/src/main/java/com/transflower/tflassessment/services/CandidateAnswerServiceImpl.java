package com.transflower.tflassessment.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.CandidateAnswer;
import com.transflower.tflassessment.entities.CandidateTestDetails;
import com.transflower.tflassessment.repositories.CandidateAnswerRepository;

@Service
public class CandidateAnswerServiceImpl implements CandidateAnswerService {

    private final CandidateAnswerRepository _repo;
    @Autowired
    public CandidateAnswerServiceImpl(CandidateAnswerRepository repo) {
        _repo = repo;
    }

    @Override
    public boolean insertCandidateAnswer(int candidateId, List<CandidateAnswer> answer) {
        return _repo.insertCandidateAnswer(candidateId, answer);
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswer(int CandidateId, int TestId) {
        return _repo.getCandidateAnswer(CandidateId, TestId);
    }

    @Override
    public CandidateTestDetails getCandidateTestDetails(int CandidateId, int TestId) {
        return _repo.getCandidateTestDetails(CandidateId, TestId);
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswerResult(int CandidateId, int TestId) {
        return _repo.getCandidateAnswerResult(CandidateId, TestId);
    }

}
