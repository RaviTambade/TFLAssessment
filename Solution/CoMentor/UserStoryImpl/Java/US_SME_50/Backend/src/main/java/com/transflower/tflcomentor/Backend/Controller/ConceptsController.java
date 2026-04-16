package com.transflower.tflcomentor.Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Entity.Runtimes;
import com.transflower.tflcomentor.Backend.Entity.Languages;
import com.transflower.tflcomentor.Backend.Entity.Layers;
import com.transflower.tflcomentor.Backend.Entity.Frameworks;
import com.transflower.tflcomentor.Backend.Service.IConceptsService;

@RestController
@RequestMapping("/concepts")
public class ConceptsController {

    @Autowired
    private IConceptsService conceptsService;

    @GetMapping("/")
    public List<Concepts> getAllConcepts(){
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/frameworks/{framework}")
    public List<Concepts> getAllConceptsforFramework(@PathVariable String framework) {
        return conceptsService.getAllConceptsforFramework(framework);
    }

    @GetMapping("/runtimes")
    public List<Runtimes> getAllRuntimes() {
        return conceptsService.getAllRuntimes();
    }

    @GetMapping("/languages/runtime/{runtimeId}")
    public List<Languages> getAllLanguages(@PathVariable int runtimeId) {
        return conceptsService.getAllLanguages(runtimeId);
    }

    @GetMapping("/layers")
    public List<Layers> getAllLayers() {
        return conceptsService.getAllLayers();
    }
    
    @GetMapping("/layers/{layerId}")
    public List<Layers> getByLayerId(@PathVariable int layerId) {
        return conceptsService.getAllLayers();
    }

    @GetMapping("/frameworks/{languageId}")
    public List<Frameworks> getAllFrameworksByLanguageId(@PathVariable int languageId) {
        return conceptsService.getAllFrameworksByLanguageId(languageId);
    }

    @GetMapping("/frameworks/languages/{languageId}/layers/{layerId}")
    public List<Frameworks> getAllFrameworksByLanguageAndLayer(@PathVariable int languageId, @PathVariable int layerId) {
        return conceptsService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }
}
