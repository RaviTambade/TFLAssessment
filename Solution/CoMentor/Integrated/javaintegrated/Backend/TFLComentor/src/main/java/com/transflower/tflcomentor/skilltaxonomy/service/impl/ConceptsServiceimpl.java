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
public class ConceptsServiceimpl implements ConceptsService {

    @Autowired
    private ConceptRepository repository;

    @Override
    public List<Concept> getAllConcepts() {
        return repository.getAllConcepts();
    }

    // @Override
    // public List<Frameworks> getAllFrameworksByLanguageId(int languageId) {
    //     return conceptsRepository.getAllFrameworksByLanguageId(languageId);
    // }

    @Override
    public List<Concept> getAllConceptsforFramework(String framework) {
        return  repository.getAllConceptsforFramework(framework);
    }

    @Override
    public Concept getById(Long id) {
        return repository.getById(id);
    }

    @Override
    public boolean addConcept(Concept concept) {
        return repository.addConcept(concept);
    }
}
