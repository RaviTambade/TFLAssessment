package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.repository.FrameworkRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.FrameworkService;

@Service
public class FrameworkServiceImpl implements FrameworkService {

    private final FrameworkRepository repository;

    public FrameworkServiceImpl(FrameworkRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        return repository.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }
}
