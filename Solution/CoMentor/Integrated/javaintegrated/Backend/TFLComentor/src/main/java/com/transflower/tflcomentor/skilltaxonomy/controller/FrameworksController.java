package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.service.FrameworkService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class FrameworksController {

    private final FrameworkService frameworkService;

    public FrameworksController(FrameworkService frameworkService) {
        this.frameworkService = frameworkService;
    }

     @GetMapping("/frameworks/languages/{languageId}/layers/{layerId}")
    public List<Framework> getAllFrameworksByLanguageAndLayer(@PathVariable int languageId, @PathVariable int layerId) {
        return frameworkService.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }


}
