package com.tap.tflcomentor.Backend.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.tap.tflcomentor.Backend.Entity.ConceptsEntity;

@Repository
public interface ConceptsRepository {
    public List<ConceptsEntity> getAllConceptsforFramework(String framework);
    public List<ConceptsEntity> getAllConcepts();
}

