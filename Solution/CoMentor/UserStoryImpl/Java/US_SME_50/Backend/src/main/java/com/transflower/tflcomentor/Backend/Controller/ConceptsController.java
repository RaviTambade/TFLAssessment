package com.transflower.tflcomentor.Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Backend.Entity.ConceptsEntity;
import com.transflower.tflcomentor.Backend.Entity.RuntimesEntity;
import com.transflower.tflcomentor.Backend.Entity.LanguagesEntity;
import com.transflower.tflcomentor.Backend.Entity.LayersEntity;
import com.transflower.tflcomentor.Backend.Entity.FrameworksEntity;
import com.transflower.tflcomentor.Backend.Service.ConceptsService;

@RestController
@RequestMapping("/concepts")
public class ConceptsController {

    @Autowired
    private ConceptsService conceptsService;

    @GetMapping("/get")
    public List<ConceptsEntity> getAllConcepts(){
        return conceptsService.getAllConcepts();
    }

    @GetMapping("/get/{framework}")
    public List<ConceptsEntity> getAllConceptsforFramework(@PathVariable String framework) {
        return conceptsService.getAllConceptsforFramework(framework);
    }

    @GetMapping("/runtimes")
    public List<RuntimesEntity> getAllRuntimes() {
        return conceptsService.getAllRuntimes();
    }

    @GetMapping("/languages/{runtimeId}")
    public List<LanguagesEntity> getAllLanguages(@PathVariable int runtimeId) {
        return conceptsService.getAllLanguages(runtimeId);
    }

    @GetMapping("/layers")
    public List<LayersEntity> getAllLayers() {
        return conceptsService.getAllLayers();
    }

    @GetMapping("/frameworks/{languageId}")
    public List<FrameworksEntity> getAllFrameworks(@PathVariable int languageId) {
        return conceptsService.getAllFrameworks(languageId);
    }

    @GetMapping("/frameworks/{languageId}/{layerId}")
    public List<FrameworksEntity> getAllFrameworksByLanguageAndLayer(@PathVariable int languageId, @PathVariable int layerId) {
        return conceptsService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }
}
