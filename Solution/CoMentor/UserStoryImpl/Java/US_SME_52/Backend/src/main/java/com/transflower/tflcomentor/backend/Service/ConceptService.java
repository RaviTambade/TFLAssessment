package com.transflower.tflcomentor.backend.Service;


    


import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.backend.Entity.Concept;
@Service
public interface ConceptService {

    // Get all concepts
    List<Concept> getAllConcepts();

    // View Concept Details by ID (correct)
    Concept findById(Long id);

    //Concept getConceptById(Long id);


}
