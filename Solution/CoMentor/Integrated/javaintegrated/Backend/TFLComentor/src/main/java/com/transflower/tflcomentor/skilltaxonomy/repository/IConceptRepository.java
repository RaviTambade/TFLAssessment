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
    List<Concept> getAllConcepts()throws Exception;
    List<Runtime> getAllRuntimes()throws Exception;
    List<Language> getAllLanguages(int runtimeId)throws Exception;
    List<Layer> getAllLayers()throws Exception;
    List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId)throws Exception;
    List<Concept> getAllConceptsforFramework(String framework)throws Exception;
    Concept findById(Long id)throws Exception;
    boolean addConcept(Concept concept)throws Exception;
}
