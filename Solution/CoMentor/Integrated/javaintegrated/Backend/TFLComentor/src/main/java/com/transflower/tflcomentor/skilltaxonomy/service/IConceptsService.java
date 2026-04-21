package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Service
public interface IConceptsService {
    List<Concept> getAllConcepts();
    List<Runtime> getAllRuntimes();
    List<Language> getAllLanguages(int runtimeId);
    List<Layer> getAllLayers();
    // List<Frameworks> getAllFrameworksByLanguageId(int languageId);
    List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<Concept> getAllConceptsforFramework(String framework);
    Concept findById(Long id);
    List<ConceptDto> getQuestionsByConceptId(Long conceptId);
}
