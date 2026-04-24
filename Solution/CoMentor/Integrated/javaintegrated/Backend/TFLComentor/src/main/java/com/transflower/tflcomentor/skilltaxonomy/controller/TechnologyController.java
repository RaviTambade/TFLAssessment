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
import com.transflower.tflcomentor.skilltaxonomy.service.LanguageService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/technologies")
public class TechnologyController {

    @GetMapping("/concepts")
    public List<Concept> getAllConcepts() {
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/concepts/{id}")
    public Concept getConceptById(@PathVariable Long id) {
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

    @PostMapping("conceptsmapping/{conceptId}/framework/{frameworkId}")
    public boolean mapConceptToFramework(@PathVariable int conceptId, @PathVariable int frameworkId) {
        return conceptsService.mapConceptToFramework(conceptId, frameworkId);
    }

    // Frameworks endpoints
    @GetMapping("/frameworks")
    public List<Framework> getAllFrameworks() {
        return frameworkService.getAllFrameworks();
    }

    @GetMapping("/frameworks/{id}")
    public Framework getFrameworkById(@PathVariable Long id) {
        return frameworkService.getFrameworkById(id);
    }

    @GetMapping("/frameworks/languages/{languageId}/layers/{layerId}")
    public List<Framework> getAllFrameworks(@PathVariable int languageId, @PathVariable int layerId) {
        return frameworkService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @GetMapping("/frameworks/languages/{languageId}")                                //**********NEW*****************/
    public List<Framework> getAllFrameworks(@PathVariable int languageId) {   
        return frameworkService.getAllFrameworks(languageId);
    }

    // Layers endpoints
    @GetMapping("/layers")
    public List<Layer> getAllLayers() {
        return layerService.getAllLayers();
    }

    // Runtimes endpoints
    @GetMapping("/runtimes")
    public List<Runtime> getAllRuntimes() {
        return runtimeService.getAllRuntimes();
    }

    @GetMapping("/runtimes/{id}")
    public Runtime getRuntimeById(@PathVariable Long id) {
        return runtimeService.getRuntimeById(id);
    }

    @GetMapping("/sme")
    public List<RuntimeSummaryResponseDto> getAllRuntimeSummaries() {
        return runtimeService.getAllRuntimeSummaries();
    }


}
