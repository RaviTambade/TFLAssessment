package com.transflower.tflcomentor.backend.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.backend.Entity.Concept;
@Repository
public interface ConceptRepository {

    // Get all concepts (optional)
    List<Concept> getAllConcepts();

    //  View Concept Details by ID (correct)
    Concept findById(Long id);
}