package com.transflower.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Entity.Runtimes;
import com.transflower.tflcomentor.Backend.Entity.Languages;
import com.transflower.tflcomentor.Backend.Entity.Layers;
import com.transflower.tflcomentor.Backend.Entity.Frameworks;
import com.transflower.tflcomentor.Backend.Repository.IConceptsRepository;

@Service
public class ConceptsService implements IConceptsService {

    @Autowired
    private IConceptsRepository conceptsRepository;

    @Override
    public List<Concepts> getAllConcepts() {
        return conceptsRepository.getAllConcepts();
    }

    @Override
    public List<Runtimes> getAllRuntimes() {
        return conceptsRepository.getAllRuntimes();
    }

    @Override
    public List<Languages> getAllLanguages(int runtimeId) {
        return conceptsRepository.getAllLanguages(runtimeId);
    }

    @Override
    public List<Layers> getAllLayers() {
        return conceptsRepository.getAllLayers();
    }

    @Override
    public List<Frameworks> getAllFrameworks(int languageId) {
        return conceptsRepository.getAllFrameworks(languageId);
    }

    @Override
    public List<Frameworks> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        return conceptsRepository.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @Override
    public List<Concepts> getAllConceptsforFramework(String framework) {
        return conceptsRepository.getAllConceptsforFramework(framework);
    }
}