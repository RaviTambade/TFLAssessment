package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.QuestionDto;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.repository.ConceptRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.ConceptsService;

@Service
public class ConceptsServiceImpl implements ConceptsService {

    @Autowired
    private ConceptRepository repository;

    @Override
    public List<Concept> getAllConcepts() {
        return repository.getAllConcepts();
    }

    @Override
    public List<Concept> getAllConceptsforFramework(int framework) {
        return  repository.getAllConceptsforFramework(framework);
    }

    @Override
    public Concept getById(Long id) {
        return repository.getById(id);
    }

    @Override
    public Concept addConcept(Concept concept) {
        return repository.addConcept(concept);
    }

    @Override
    public boolean mapConceptToFramework(int conceptId, int frameworkId) {
        return repository.mapConceptToFramework(conceptId, frameworkId);
    }
}
