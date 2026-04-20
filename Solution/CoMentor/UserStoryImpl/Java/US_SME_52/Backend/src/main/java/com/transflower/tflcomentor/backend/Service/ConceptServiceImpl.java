package com.transflower.tflcomentor.backend.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.backend.Entity.Concept;
import com.transflower.tflcomentor.backend.Repository.ConceptRepository;

import java.util.List;

@Service
public class ConceptServiceImpl implements ConceptService {

    @Autowired
    private final ConceptRepository repo;

    public ConceptServiceImpl(ConceptRepository repo) {
        this.repo= repo;
    }

    // Get all concepts
    @Override
    public List<Concept> getAllConcepts() {
        return repo.getAllConcepts();
    }

     // View Concept Details
    @Override
    public Concept findById(Long id) {
        return repo.findById(id);
    }

   
}