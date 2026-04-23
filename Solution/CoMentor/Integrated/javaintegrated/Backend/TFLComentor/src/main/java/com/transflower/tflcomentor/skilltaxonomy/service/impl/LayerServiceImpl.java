package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.repository.LayerRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.LayerService;

@Service
public class LayerServiceImpl implements LayerService {

    private final LayerRepository repository;

    public LayerServiceImpl(LayerRepository repository) {
        this.repository = repository;
    }
    
     @Override
    public List<Layer> getAllLayers() {
        return repository.getAllLayers();
    }
}
