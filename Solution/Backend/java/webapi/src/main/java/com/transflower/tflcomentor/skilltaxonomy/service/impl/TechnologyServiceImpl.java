package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.repository.TechnologyRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.TechnologyService;

@Service
public class TechnologyServiceImpl implements TechnologyService {
    
    private final TechnologyRepository technologyRepository;

    public TechnologyServiceImpl(TechnologyRepository technologyRepository) {
        this.technologyRepository = technologyRepository;
    }

    @Override
    public List<ConceptQuestionCount> getAllConceptsCount(){
        return technologyRepository.getAllConceptsCount();
    }

    @Override
    public List<DifficultyQuestionCount> getAllQuestionsByDifficulty(){
        return technologyRepository. getAllQuestionsByDifficulty();
     }

}
