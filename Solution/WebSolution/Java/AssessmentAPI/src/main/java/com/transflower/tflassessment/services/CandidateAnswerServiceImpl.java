package com.transflower.tflassessment.services;

import java.util.List;

import com.transflower.tflassessment.entities.CandidateAnswer;
import com.transflower.tflassessment.repositories.CandidateAnswerRepository;
import com.transflower.tflassessment.entities.CandidateTestDetails;

public class CandidateAnswerServiceImpl implements CandidateAnswerService {

    private final CandidateAnswerRepository _repo;

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
    public CandidateTestDetails CandidateTestDetails(int CandidateId, int TestId) {
        return CandidateTestDetails(CandidateId, TestId);
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswerResult(int CandidateId, int TestId) {
        return _repo.getCandidateAnswerResult(CandidateId, TestId);
    }

}
