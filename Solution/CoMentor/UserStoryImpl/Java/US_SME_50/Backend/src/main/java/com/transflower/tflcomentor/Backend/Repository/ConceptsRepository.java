package com.transflower.tflcomentor.Backend.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.Entity.ConceptsEntity;
import com.transflower.tflcomentor.Backend.Entity.LayersEntity;
import com.transflower.tflcomentor.Backend.Entity.RuntimesEntity;
import com.transflower.tflcomentor.Backend.Entity.LanguagesEntity;
import com.transflower.tflcomentor.Backend.Entity.FrameworksEntity;

@Repository
public interface ConceptsRepository {
    
    public List<ConceptsEntity> getAllConcepts();
    public List<RuntimesEntity> getAllRuntimes();
    public List<LanguagesEntity> getAllLanguages(int runtimeId);
    public List<LayersEntity> getAllLayers();
    public List<FrameworksEntity> getAllFrameworks(int languageId);
    public List<FrameworksEntity> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    public List<ConceptsEntity> getAllConceptsforFramework(String framework);
}
