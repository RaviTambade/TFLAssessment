package com.transflower.tflassessment.demo.repositories;
import com.transflower.tflassessment.demo.entities.*;

import java.util.List;

import java.util.List;

import com.transflower.tflassessment.demo.entities.CandidateAnswer;
import com.transflower.tflassessment.demo.entities.CandidateTestDetails;

public interface CandidateAnswerRepository {

<<<<<<< HEAD
    boolean insertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

    List<CandidateAnswer> getCandidateAnswers(int candidateId, int testId);

    List<CandidateAnswerResult> getCandidateAnswerResults(int candidateId, int testId);

    CandidateTestDetails getCandidateTestDetails(int candidateId, int testId);
=======

    boolean insertCandidateAnswer(int candidateId, List <CandidateAnswer>answer);
    List <CandidateAnswer>getCandidateAnswer(int CandidateId,int TestId);
    List<CandidateAnswer>getCandidateAnswerResult(int CandidateId,int TestId);
    CandidateTestDetails CandidateTestDetails (int CandidateId,int TestId);
    
>>>>>>> 8e363a282af052cb23ca3e2afa68d91bf486f26c
}
