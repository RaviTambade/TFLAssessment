package com.tap.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tap.tflcomentor.Backend.Entity.ConceptsEntity;
import com.tap.tflcomentor.Backend.Repository.ConceptsRepository;

@Service
public class ConceptsServiceImpl implements ConceptsService {

    @Autowired
    private ConceptsRepository conceptsRepository;

    @Override
    public List<ConceptsEntity> getAllConceptsforFramework(String framework) {
        return conceptsRepository.getAllConceptsforFramework(framework);
    }

    @Override
    public List<ConceptsEntity> getAllConcepts(){
        return conceptsRepository.getAllConcepts();
    }
}