package com.transflower.tflcomentor.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.entity.Framework;
import com.transflower.tflcomentor.Backend.entity.Language;
import com.transflower.tflcomentor.Backend.entity.Layer;
import com.transflower.tflcomentor.Backend.entity.Runtime;
import com.transflower.tflcomentor.Backend.service.IConceptsService;

@RestController
@RequestMapping("/api")
public class ConceptsController {

    @Autowired
    private IConceptsService conceptsService;

    @GetMapping("/concepts")
    public List<Concept> getAllConcepts(){
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/frameworks/{framework}/concepts")    
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
}
