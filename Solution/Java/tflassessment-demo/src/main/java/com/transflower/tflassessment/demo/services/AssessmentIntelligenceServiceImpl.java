package com.transflower.tflassessment.demo.services;

import java.util.List;

import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;
import com.transflower.tflassessment.demo.repositories.AssessmentIntelligenceRepository;
import com.transflower.tflassessment.demo.repositories.AssessmentIntelligenceRepositoryImpl;

public class AssessmentIntelligenceServiceImpl implements AssessmentIntelligenceService {

    private AssessmentIntelligenceRepository repo;
    public  AssessmentIntelligenceServiceImpl(AssessmentIntelligenceRepository repository){
        this.repo = repository;
    } 

    @Override
         public List <AnnualCandidateResult> getCandidateResults(int candidateId, int year)
        {
            return repo.getCandidateResults(candidateId,year);
        }
  
}
