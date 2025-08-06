package com.transflower.tflassessment.demo.repositories;
import com.transflower.tflassessment.demo.entities.*;
import java.util.List;

public interface CandidateAnswerRepository {

    boolean insertCandidateAnswer(int candidateId, List <CandidateAnswer>answer);
    List <CandidateAnswer>getCandidateAnswer(int CandidateId,int TestId);
    List<CandidateAnswer>getCandidateAnswerResult(int CandidateId,int TestId);
    CandidateTestDetails CandidateTestDetails (int CandidateId,int TestId);
}
