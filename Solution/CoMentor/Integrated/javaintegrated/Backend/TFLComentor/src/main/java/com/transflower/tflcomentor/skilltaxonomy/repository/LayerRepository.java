package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;

@Repository
public interface LayerRepository {

    public List<Layer> getAllLayers();

}
