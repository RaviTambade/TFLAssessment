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
import com.transflower.tflcomentor.skilltaxonomy.repository.IConceptsRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.IConceptsService;

@Service
public class ConceptsService implements IConceptsService {

    @Autowired
    private IConceptsRepository conceptsRepository;

    @Override
    public List<Concept> getAllConcepts() {
        return conceptsRepository.getAllConcepts();
    }

    @Override
    public List<Runtime> getAllRuntimes() {
        return conceptsRepository.getAllRuntimes();
    }

    @Override
    public List<Language> getAllLanguages(int runtimeId) {
        return conceptsRepository.getAllLanguages(runtimeId);
    }

    @Override
    public List<Layer> getAllLayers() {
        return conceptsRepository.getAllLayers();
    }

    // @Override
    // public List<Frameworks> getAllFrameworksByLanguageId(int languageId) {
    //     return conceptsRepository.getAllFrameworksByLanguageId(languageId);
    // }

    @Override
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        return conceptsRepository.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @Override
    public List<Concept> getAllConceptsforFramework(String framework) {
        return conceptsRepository.getAllConceptsforFramework(framework);
    }

    @Override
    public Concept findById(Long id) {
        return conceptsRepository.findById(id);
    }

    @Override
    public boolean addConcept(Concept concept) {
        return conceptsRepository.addConcept(concept);
    }
}
