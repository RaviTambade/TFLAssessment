package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCountDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCountDto;

public interface TechnologyService {
    List<ConceptQuestionCountDto> getAllConceptsCount();
    List<DifficultyQuestionCountDto> getAllQuestionsByDifficulty();
}
