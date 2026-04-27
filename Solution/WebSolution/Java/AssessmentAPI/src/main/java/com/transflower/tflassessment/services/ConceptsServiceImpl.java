package com.transflower.tflassessment.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.Concepts;
import com.transflower.tflassessment.repositories.ConceptsRepository;

@Service
public class ConceptsServiceImpl implements ConceptsService {

    private final ConceptsRepository _repo;
    @Autowired
    public ConceptsServiceImpl(ConceptsRepository repo) {
        _repo = repo;
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> insertConcept(Concepts concepts) {
        return _repo.insertConcept(concepts);
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateConcept(int id, int conceptsId) {
        return _repo.updateConcept(id, conceptsId);
    }

    @Override
    @Async("asyncExecutor")
    public CompletableFuture<Boolean> updateSubject(int id, int conceptsId) {
        return _repo.updateSubject(id, conceptsId);
    }

}
