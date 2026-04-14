package com.transflower.tflcomentor.Backend.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Backend.DTO.Language;
import com.transflower.tflcomentor.Backend.DTO.Layer;
import com.transflower.tflcomentor.Backend.DTO.Framework;
import com.transflower.tflcomentor.Backend.DTO.Runtime;

import com.transflower.tflcomentor.Backend.Entity.Concepts;

import com.transflower.tflcomentor.Backend.Service.ExternalService.ExternalAPIService;
import com.transflower.tflcomentor.Backend.Service.InternalService.IConceptsService;

@RestController
@RequestMapping("/concepts")
public class ConceptsController {
    @Autowired 
    private IConceptsService conceptsService;
    
    @Autowired
    private ExternalAPIService externalAPI;

    @PostMapping("/add")
    public Concepts addConcepts(@RequestBody Concepts concepts) {
        return conceptsService.addConcepts(concepts);
    }

    @GetMapping("/get/runtime")
    public List<Runtime> getAllConcepts() {
        return externalAPI.getRuntime();
    }

    @GetMapping("/get/languages/{runtimeId}")
    public List<Language> getLanguages(@PathVariable int runtimeId) {
        return externalAPI.getLanguages(runtimeId);
    }

    @GetMapping("/get/layers")
    public List<Layer> getLayers() {
        return externalAPI.getLayers();
    }

    @GetMapping("/get/frameworks/{languageId}/{layerId}")
    public List<Framework> getFrameworks(@PathVariable int languageId, @PathVariable int layerId) {
        return externalAPI.getFrameworks(languageId, layerId);
    }
}
