package com.transflower.tflcomentor.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.entity.Framework;
import com.transflower.tflcomentor.Backend.entity.Language;
import com.transflower.tflcomentor.Backend.entity.Layer;
import com.transflower.tflcomentor.Backend.entity.Runtime;
import com.transflower.tflcomentor.Backend.repository.IConceptsRepository;

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
}