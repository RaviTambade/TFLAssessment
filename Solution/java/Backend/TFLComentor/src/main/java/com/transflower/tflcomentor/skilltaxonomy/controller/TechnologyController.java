package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.service.TechnologyService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/technologies")
public class TechnologyController {

    private final TechnologyService technologyService;

    public TechnologyController(TechnologyService technologyService) {
        this.technologyService = technologyService;
    }

    @GetMapping("/concepts")
    public List<Concept> getAllConcepts() {
        return technologyService.getAllConcepts();
    }

    @GetMapping("/concepts/{id}")
    public Concept getConceptById(@PathVariable Long id) {
        return technologyService.getConceptById(id);
    }

    @PostMapping("/add/concept")
    public Concept addConcept(@RequestBody Concept concept) {
        return technologyService.addConcept(concept);
    }

    @GetMapping("/concepts/frameworks/{framework}")   
    public List<Concept> getAllConceptsforFramework(@PathVariable int framework) {
        return technologyService.getAllConceptsforFramework(framework);
    }

    @PostMapping("conceptsmapping/{conceptId}/framework/{frameworkId}")
    public boolean mapConceptToFramework(@PathVariable int conceptId, @PathVariable int frameworkId) {
        return technologyService.mapConceptToFramework(conceptId, frameworkId);
    }

    // Frameworks endpoints
    @GetMapping("/frameworks")   
    public List<Framework> getAllFrameworks() {
        return technologyService.getAllFrameworks();
    }

    @GetMapping("/frameworks/{id}")  
    public Framework getFrameworkById(@PathVariable Long id) {
        return technologyService.getFrameworkById(id);
    }

    @GetMapping("/frameworks/languages/{languageId}/layers/{layerId}")
    public List<Framework> getAllFrameworks(@PathVariable int languageId, @PathVariable int layerId) {
        return technologyService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @GetMapping("/frameworks/languages/{languageId}")  
    public List<Framework> getAllFrameworks(@PathVariable int languageId) {   
        return technologyService.getAllFrameworks(languageId);
    }

    // Layers endpoints
    @GetMapping("/layers")
    public List<Layer> getAllLayers() {
        return technologyService.getAllLayers();
    }

    @GetMapping("/languages/sme/{smeId}")  
    public List<LanguageResponseDto> getLanguagesBySmeId(@PathVariable long smeId){
        return technologyService.getLanguagesBySmeId(smeId);
    }

    @GetMapping("/languages/runtime/{runtimeId}")
    public List<Language> getAllLanguages(@PathVariable int runtimeId){
        return technologyService.getAllLanguages(runtimeId);
    }

    // Runtimes endpoints
    @GetMapping("/runtimes")
    public List<Runtime> getAllRuntimes() {
        return technologyService.getAllRuntimes();
    }

    @GetMapping("/runtimes/{id}") //To be implemented 
    public Runtime getRuntimeById(@PathVariable Long id) {
        return technologyService.getRuntimeById(id);
    }

    @GetMapping("/sme")
    public List<RuntimeSummaryResponseDto> getAllRuntimeSummaries() {
        return technologyService.getAllRuntimeSummaries();
    }


}
