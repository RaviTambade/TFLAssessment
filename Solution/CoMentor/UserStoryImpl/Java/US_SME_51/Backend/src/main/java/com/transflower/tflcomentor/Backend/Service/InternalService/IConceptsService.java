package com.transflower.tflcomentor.Backend.Service.InternalService;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.Concepts;

@Service
public interface IConceptsService {
    public Concepts addConcepts(Concepts concepts);
}
