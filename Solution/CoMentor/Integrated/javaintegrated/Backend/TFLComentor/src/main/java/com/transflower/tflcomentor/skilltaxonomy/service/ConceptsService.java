package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;

@Service
public interface ConceptsService {
    public List<Concept> getAllConcepts();
    public List<Concept> getAllConceptsforFramework(String framework);
    public Concept getById(Long id);
    public boolean addConcept(Concept concept);
}
