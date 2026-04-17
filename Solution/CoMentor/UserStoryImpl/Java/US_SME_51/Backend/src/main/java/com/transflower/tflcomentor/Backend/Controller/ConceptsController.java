package com.transflower.tflcomentor.Backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Backend.dto.FrameworkDTO;
import com.transflower.tflcomentor.Backend.dto.LanguageDTO;
import com.transflower.tflcomentor.Backend.dto.LayerDTO;
import com.transflower.tflcomentor.Backend.dto.RuntimeDTO;
import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.service.externalService.ExternalAPIService;
import com.transflower.tflcomentor.Backend.service.internalService.IConceptsService;

@RestController
@RequestMapping("/api")
public class ConceptsController {
    @Autowired 
    private IConceptsService conceptsService;
    
    @Autowired
    private ExternalAPIService externalAPI;

    @PostMapping("/add/concept")
    public Concept addConcepts(@RequestBody Concept concepts) {
        return conceptsService.addConcepts(concepts);
    }

    @GetMapping("/runtimes")
    public List<RuntimeDTO> getAllRuntime() {
        return externalAPI.getRuntime();
    }

    @GetMapping("/languages/runtime/{runtimeId}")
    public List<LanguageDTO> getLanguagesByRuntime(@PathVariable int runtimeId) {
        return externalAPI.getLanguagesByRuntime(runtimeId);
    }

    @GetMapping("/layers")
    public List<LayerDTO> getLayers() {
        return externalAPI.getLayers();
    }

    @GetMapping("/frameworks/language/{languageId}/layer/{layerId}")
    public List<FrameworkDTO> getFrameworksByLanguageAndLayer(@PathVariable int languageId, @PathVariable int layerId) {
        return externalAPI.getFrameworksByLanguageAndLayer(languageId, layerId);
    }
}
