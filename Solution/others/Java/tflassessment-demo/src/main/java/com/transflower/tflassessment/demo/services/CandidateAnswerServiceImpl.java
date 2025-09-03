package com.transflower.tflassessment.demo.services;

import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.repositories.CandidateAnswerRepository;

public class CandidateAnswerServiceImpl implements CandidateAnswerService
{
    public CandidateAnswerServiceImpl(CandidateAnswerRepository repo){
        
    }

    @Override
    public boolean insertCandidateAnswer(int candidateId, List<CandidateAnswer> answer) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertCandidateAnswer'");
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswer(int CandidateId, int TestId) {
        // 
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateAnswer'");
    }

    @Override
    public com.transflower.tflassessment.demo.entities.CandidateTestDetails CandidateTestDetails(int CandidateId,
            int TestId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'CandidateTestDetails'");
    }
    
}
