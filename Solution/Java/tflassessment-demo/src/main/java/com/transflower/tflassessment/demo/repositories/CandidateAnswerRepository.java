package com.transflower.tflassessment.demo.repositories;

import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;

public interface CandidateAnswerRepository {

<<<<<<< HEAD
    boolean insertCandidateAnswer(int candidateId, List <CandidateAnswer>answer);
    List <CandidateAnswer>getCandidateAnswer(int CandidateId,int TestId);
    List<CandidateAnswer>getCandidateAnswerResult(int CandidateId,int TestId);
    CandidateTestDetails getCandidateTestDetails (int CandidateId,int TestId);
=======
    boolean insertCandidateAnswer(int candidateId, List<CandidateAnswer> answer);

    List<CandidateAnswer> getCandidateAnswer(int CandidateId, int TestId);

    List<CandidateAnswer> getCandidateAnswerResult(int CandidateId, int TestId);

    CandidateTestDetails CandidateTestDetails(int CandidateId, int TestId);
>>>>>>> 58e6945592fdd9670c5d252cfc7e0ab024977eb9
}
