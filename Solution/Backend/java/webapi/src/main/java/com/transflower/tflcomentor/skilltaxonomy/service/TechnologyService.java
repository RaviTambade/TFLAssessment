package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCount;

public interface TechnologyService {
    List<ConceptQuestionCount> getAllConceptsCount();
    List<DifficultyQuestionCount> getAllQuestionsByDifficulty();
}
