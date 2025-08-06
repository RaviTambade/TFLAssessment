package com.transflower.tflassessment.demo.repositories;
import com.transflower.tflassessment.demo.entities.*;

import java.util.List;

public interface CandidateAnswerRepository {

    boolean insertCandidateAnswers(int candidateId, List<CandidateAnswer> answers);

    List<CandidateAnswer> getCandidateAnswers(int candidateId, int testId);

    List<CandidateAnswerResult> getCandidateAnswerResults(int candidateId, int testId);

    CandidateTestDetails getCandidateTestDetails(int candidateId, int testId);
}
