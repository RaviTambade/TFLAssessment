package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.ConceptDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.service.IConceptsService;

@RestController
@RequestMapping("/api")
public class ConceptsController {

    @Autowired
    private IConceptsService conceptsService;

    @GetMapping("/concepts")
    public List<Concept> getAllConcepts(){
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/frameworks/{framework}/concepts")    //not working
    public List<Concept> getAllConceptsforFramework(@PathVariable String framework) {
        return conceptsService.getAllConceptsforFramework(framework);
    }

    @GetMapping("/runtimes")
    public List<Runtime> getAllRuntimes() {
        return conceptsService.getAllRuntimes();
    }

    
    @GetMapping("/languages/runtime/{runtimeId}")  
    public List<Language> getAllLanguages(@PathVariable int runtimeId) {
        return conceptsService.getAllLanguages(runtimeId);
    }

    @GetMapping("/layers")
    public List<Layer> getAllLayers() {
        return conceptsService.getAllLayers();
    }
    
    // @GetMapping("/layers/{layerId}")
    // public List<Layers> getByLayerId(@PathVariable int layerId) {
    //     return conceptsService.getAllLayers();
    // }

    // @GetMapping("/frameworks/language/{languageId}")   //not working
    // public List<Frameworks> getAllFrameworksByLanguageId(@PathVariable int languageId) {
    //     return conceptsService.getAllFrameworksByLanguageId(languageId);
    // }

    @GetMapping("/frameworks/languages/{languageId}/layers/{layerId}")
    public List<Framework> getAllFrameworksByLanguageAndLayer(@PathVariable int languageId, @PathVariable int layerId) {
        return conceptsService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @GetMapping("/concept/{id}")
    public Concept findById(@PathVariable Long id) {
        return conceptsService.findById(id);
    }

      @GetMapping("/concepts/{conceptId}/questions")
    public ResponseEntity<?> getQuestionsByConceptId(@PathVariable Long conceptId) {
        List<ConceptDto> questions = conceptsService.getQuestionsByConceptId(conceptId);   
        return ResponseEntity.ok(questions);
    }
}

