package com.transflower.tflcomentor.Backend.service.internalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.repository.IConceptsRepository;

@Service
public class ConceptsService implements IConceptsService {
    
    @Autowired
    private IConceptsRepository conceptsRepository;
    
    @Override 
    public Concept addConcepts(Concept concepts) {
        return conceptsRepository.save(concepts);
    }

}
