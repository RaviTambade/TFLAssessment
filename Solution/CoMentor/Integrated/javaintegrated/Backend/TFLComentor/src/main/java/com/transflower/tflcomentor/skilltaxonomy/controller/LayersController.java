package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.service.LayerService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")

public class LayersController {

    private final LayerService layersService;

    public LayersController(LayerService layersService) {
        this.layersService = layersService;
    }

    @GetMapping("/layers")
    public List<Layer> getAllLayers() {
        return layersService.getAllLayers();
    }
    
}
