package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCount;

public interface TechnologyRepository {
    
    List<ConceptQuestionCount> getAllConceptsCount();
    List<DifficultyQuestionCount> getAllQuestionsByDifficulty();
}
