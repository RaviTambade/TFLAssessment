package com.tap.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tap.tflcomentor.Backend.Entity.ConceptsEntity;

@Service
public interface ConceptsService {
    List<ConceptsEntity> getAllConceptsforFramework(String framework);
    List<ConceptsEntity> getAllConcepts();
}
