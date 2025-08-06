package com.transflower.tflassessment.demo.repositories;

import java.util.List;

import com.transflower.tflassessment.demo.entities.*;


public class CandidateAnswerRepositoryImpl implements CandidateAnswerRepository{

    @Override
    public boolean insertCandidateAnswer(int candidateId, List<CandidateAnswer> answer) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertCandidateAnswer'");
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswer(int CandidateId, int TestId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateAnswer'");
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswerResult(int CandidateId, int TestId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateAnswerResult'");
    }

    @Override
    public com.transflower.tflassessment.demo.entities.CandidateTestDetails CandidateTestDetails(int CandidateId,
            int TestId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'CandidateTestDetails'");
    }

    
    
}
