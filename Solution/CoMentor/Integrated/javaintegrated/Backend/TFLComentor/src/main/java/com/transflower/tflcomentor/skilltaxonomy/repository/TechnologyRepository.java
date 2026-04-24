package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeResponseDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;

public interface TechnologyRepository {
    List<Concept> getAllConcepts();
    Concept getConceptById(Long id);
    Concept addConcept(Concept concept);
    List<Concept> getAllConceptsforFramework(int framework);
    boolean mapConceptToFramework(int conceptId, int frameworkId);

    List<Framework> getAllFrameworks();
    Framework getFrameworkById(Long id);
    List<Framework> getAllFrameworks(int languageId, int layerId);
    List<Framework> getAllFrameworks(int languageId);

    List<Layer> getAllLayers();

    List<LanguageResponseDto> getLanguagesBySmeId(long smeId);
    List<Language> getAllLanguages(int runtimeId);

    boolean addRuntime(RuntimeResponseDTO runtimedto);
    List<RuntimeSummaryResponseDto> findAllRuntimeSummaries();
    List<Runtime> getAllRuntimes();
    Runtime getRuntimeById(Long id);
    // List<RuntimeSummaryResponseDto> getAllRuntimeSummaries();
}
