package com.transflower.tflassessment.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
import com.transflower.tflassessment.repositories.AssessmentIntelligenceRepository;
    
@Service
public class AssessmentIntelligenceServiceImpl implements AssessmentIntelligenceService {

    private final AssessmentIntelligenceRepository repo;
    @Autowired
    public AssessmentIntelligenceServiceImpl(AssessmentIntelligenceRepository repository) {
        this.repo = repository;
    }

    @Override
    public List<AnnualCandidateResult> getCandidateResults(int candidateId, int year) {
        return repo.getCandidateResults(candidateId, year);
    }

}
