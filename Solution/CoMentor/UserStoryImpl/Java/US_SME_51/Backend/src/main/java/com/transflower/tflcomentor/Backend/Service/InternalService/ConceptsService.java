package com.transflower.tflcomentor.Backend.Service.InternalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Repository.IConceptsRepository;

@Service
public class ConceptsService implements IConceptsService {
    
    @Autowired
    private IConceptsRepository conceptsRepository;
    
    @Override 
    public Concepts addConcepts(Concepts concepts) {
        return conceptsRepository.save(concepts);
    }

}
