package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.DifficultyQuestionCount;
import com.transflower.tflcomentor.skilltaxonomy.service.TechnologyService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/technologies")
public class TechnologyController {

    private final TechnologyService technologyService;

    public TechnologyController(TechnologyService technologyService) {
        this.technologyService = technologyService;
    }

    @GetMapping("/concepts/question-count")
    public List<ConceptQuestionCount> getAllConceptsCount() {
        return technologyService.getAllConceptsCount();
    }

    @GetMapping("/difficulty/question-count")
    public List<DifficultyQuestionCount> getAllQuestionsByDifficulty(){
        return technologyService. getAllQuestionsByDifficulty();
     }
}
