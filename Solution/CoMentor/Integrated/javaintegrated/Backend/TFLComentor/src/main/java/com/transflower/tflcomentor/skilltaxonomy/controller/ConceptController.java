package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.service.ConceptService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class ConceptController {

    @Autowired
    private ConceptService conceptsService;

    @GetMapping("/concepts")
    public List<Concept> getAllConcepts() {
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/concepts/{id}")
    public Concept getById(@PathVariable Long id) {
        return conceptsService.getById(id);
    }

    @PostMapping("/add/concept")
    public Concept addConcept(@RequestBody Concept concept) {
        return conceptsService.addConcept(concept);
    }

    @GetMapping("/concepts/frameworks/{framework}")   
    public List<Concept> getAllConceptsforFramework(@PathVariable int framework) {
        return conceptsService.getAllConceptsforFramework(framework);
    }

    @PostMapping("/map/concept/framework/{conceptId}/{frameworkId}")
    public boolean mapConceptToFramework(@PathVariable int conceptId, @PathVariable int frameworkId) {
        return conceptsService.mapConceptToFramework(conceptId, frameworkId);
    }

}
