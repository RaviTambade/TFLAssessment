package com.transflower.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.ConceptsEntity;
import com.transflower.tflcomentor.Backend.Entity.RuntimesEntity;
import com.transflower.tflcomentor.Backend.Entity.LanguagesEntity;
import com.transflower.tflcomentor.Backend.Entity.LayersEntity;
import com.transflower.tflcomentor.Backend.Entity.FrameworksEntity;

@Service
public interface ConceptsService {
    List<ConceptsEntity> getAllConcepts();
    List<RuntimesEntity> getAllRuntimes();
    List<LanguagesEntity> getAllLanguages(int runtimeId);
    List<LayersEntity> getAllLayers();
    List<FrameworksEntity> getAllFrameworks(int languageId);
    List<FrameworksEntity> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<ConceptsEntity> getAllConceptsforFramework(String framework);
}
