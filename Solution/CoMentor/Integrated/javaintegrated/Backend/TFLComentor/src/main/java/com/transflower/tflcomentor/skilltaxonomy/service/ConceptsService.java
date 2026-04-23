package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;

@Service
public interface ConceptsService {
    List<Concept> getAllConcepts();
    List<Concept> getAllConceptsforFramework(int framework);
    Concept getById(Long id);
    Concept addConcept(Concept concept);
    boolean mapConceptToFramework(int conceptId, int frameworkId);
}
