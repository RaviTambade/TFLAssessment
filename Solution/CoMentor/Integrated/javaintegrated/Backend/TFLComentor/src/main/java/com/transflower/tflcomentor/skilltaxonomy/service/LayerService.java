package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
@Service
public interface LayerService {
    public List<Layer> getAllLayers();
}
