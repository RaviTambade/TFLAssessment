package com.transflower.tflcomentor.Backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.entity.Framework;
import com.transflower.tflcomentor.Backend.entity.Language;
import com.transflower.tflcomentor.Backend.entity.Layer;
import com.transflower.tflcomentor.Backend.entity.Runtime;

@Service
public interface IConceptsService {
    List<Concept> getAllConcepts();
    List<Runtime> getAllRuntimes();
    List<Language> getAllLanguages(int runtimeId);
    List<Layer> getAllLayers();
    // List<Frameworks> getAllFrameworksByLanguageId(int languageId);
    List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<Concept> getAllConceptsforFramework(String framework);
}
