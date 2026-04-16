package com.transflower.tflcomentor.Backend.service.internalService;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.entity.Concept;

@Service
public interface IConceptsService {
    public Concept addConcepts(Concept concepts);
}
