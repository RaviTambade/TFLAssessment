package com.transflower.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.ConceptsEntity;
import com.transflower.tflcomentor.Backend.Entity.RuntimesEntity;
import com.transflower.tflcomentor.Backend.Entity.LanguagesEntity;
import com.transflower.tflcomentor.Backend.Entity.LayersEntity;
import com.transflower.tflcomentor.Backend.Entity.FrameworksEntity;
import com.transflower.tflcomentor.Backend.Repository.ConceptsRepository;

@Service
public class ConceptsServiceImpl implements ConceptsService {

    @Autowired
    private ConceptsRepository conceptsRepository;

    @Override
    public List<ConceptsEntity> getAllConcepts() {
        return conceptsRepository.getAllConcepts();
    }

    @Override
    public List<RuntimesEntity> getAllRuntimes() {
        return conceptsRepository.getAllRuntimes();
    }

    @Override
    public List<LanguagesEntity> getAllLanguages(int runtimeId) {
        return conceptsRepository.getAllLanguages(runtimeId);
    }

    @Override
    public List<LayersEntity> getAllLayers() {
        return conceptsRepository.getAllLayers();
    }

    @Override
    public List<FrameworksEntity> getAllFrameworks(int languageId) {
        return conceptsRepository.getAllFrameworks(languageId);
    }

    @Override
    public List<FrameworksEntity> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        return conceptsRepository.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @Override
    public List<ConceptsEntity> getAllConceptsforFramework(String framework) {
        return conceptsRepository.getAllConceptsforFramework(framework);
    }
}