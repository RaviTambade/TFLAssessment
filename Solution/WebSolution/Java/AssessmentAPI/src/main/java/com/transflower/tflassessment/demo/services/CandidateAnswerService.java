package com.transflower.tflassessment.demo.services;

import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;

public interface CandidateAnswerService {
    
    boolean insertCandidateAnswer(int candidateId, List <CandidateAnswer>answer);
    List <CandidateAnswer>getCandidateAnswer(int CandidateId,int TestId);
    //List<CandidateAnswer>getCandidateAnswerResult(int CandidateId,int TestId);
    CandidateTestDetails CandidateTestDetails (int CandidateId,int TestId);
    
}
