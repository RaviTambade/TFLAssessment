package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

public interface TechnologyService {
    List<Concept> getAllConcepts();
    Concept getConceptById(Long id);
    Concept addConcept(Concept concept);
    List<Concept> getAllConceptsforFramework(int framework);
    boolean mapConceptToFramework(int conceptId, int frameworkId);
    List<Framework> getAllFrameworks();
    Framework getFrameworkById(Long id);
    List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<Framework> getAllFrameworks(int languageId);
    List<Layer> getAllLayers();
    List<Runtime> getAllRuntimes();
    Runtime getRuntimeById(Long id);
    List<RuntimeSummaryResponseDto> getAllRuntimeSummaries();
}
