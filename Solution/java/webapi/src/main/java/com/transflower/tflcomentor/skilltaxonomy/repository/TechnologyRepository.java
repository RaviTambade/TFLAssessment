package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCountDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCountDto;

public interface TechnologyRepository {
    
    List<ConceptQuestionCountDto> getAllConceptsCount();
    List<DifficultyQuestionCountDto> getAllQuestionsByDifficulty();
}
