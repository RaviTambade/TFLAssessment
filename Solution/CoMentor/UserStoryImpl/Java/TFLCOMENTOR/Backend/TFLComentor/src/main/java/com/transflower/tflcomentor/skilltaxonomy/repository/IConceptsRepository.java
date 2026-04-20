package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Questions;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Repository
public interface IConceptsRepository {
    
    public List<Concept> getAllConcepts();
    public List<Runtime> getAllRuntimes();
    public List<Language> getAllLanguages(int runtimeId);
    public List<Layer> getAllLayers();
    // public List<Frameworks> getAllFrameworksByLanguageId(int languageId);
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    public List<Concept> getAllConceptsforFramework(String framework);
    public Concept findById(Long id);
    List<Questions> getQuestionsByConceptId(Long conceptId);
}
