package com.transflower.tflassessment.demo.repositories;

import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.entities.CandidateAnswerResult;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;

public class CandidateAnswerRepositoryImpl implements CandidateAnswerRepository{

    @Override
    public boolean insertCandidateAnswers(int candidateId, List<CandidateAnswer> answers) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insertCandidateAnswers'");
    }

    @Override
    public List<CandidateAnswer> getCandidateAnswers(int candidateId, int testId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateAnswers'");
    }

    @Override
    public List<CandidateAnswerResult> getCandidateAnswerResults(int candidateId, int testId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateAnswerResults'");
    }

    @Override
    public CandidateTestDetails getCandidateTestDetails(int candidateId, int testId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCandidateTestDetails'");
    }
    
}
