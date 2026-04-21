package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Question;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Repository
public interface IConceptRepository {
    List<Concept> getAllConcepts();
    List<Runtime> getAllRuntimes();
    List<Language> getAllLanguages(int runtimeId);
    List<Layer> getAllLayers();
    List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<Concept> getAllConceptsforFramework(String framework);
    Concept findById(Long id);
    boolean addConcept(Concept concept);
}
