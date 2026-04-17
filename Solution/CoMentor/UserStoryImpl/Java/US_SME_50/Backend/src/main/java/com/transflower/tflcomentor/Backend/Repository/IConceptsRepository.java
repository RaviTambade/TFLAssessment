package com.transflower.tflcomentor.Backend.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.entity.Framework;
import com.transflower.tflcomentor.Backend.entity.Language;
import com.transflower.tflcomentor.Backend.entity.Layer;
import com.transflower.tflcomentor.Backend.entity.Runtime;

@Repository
public interface IConceptsRepository {
    
    public List<Concept> getAllConcepts();
    public List<Runtime> getAllRuntimes();
    public List<Language> getAllLanguages(int runtimeId);
    public List<Layer> getAllLayers();
    // public List<Frameworks> getAllFrameworksByLanguageId(int languageId);
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    public List<Concept> getAllConceptsforFramework(String framework);
}
