package com.transflower.tflassessment.controllers;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.Concepts;
import com.transflower.tflassessment.services.ConceptsService;


@RestController
@RequestMapping("/api/concept")
public class ConceptsController {

    @Autowired
    private ConceptsService svc;

    @PostMapping("/insert")
    public CompletableFuture<Boolean> insertConcept(@RequestBody Concepts concept) {
        return svc.insertConcept(concept);
    }

   @PutMapping("{id}/subjects/{subjectId}")
    public CompletableFuture<Boolean> updateSubject(@PathVariable("id") int id, @PathVariable ("subjectId")int subjectId) {
    return svc.updateSubject(id, subjectId);
}

    @PutMapping("{id}/questions/{conceptId}")
    public CompletableFuture<Boolean> updateConcept(@PathVariable("id")int id, @PathVariable("conceptId") int conceptId) {
        return svc.updateConcept(id, conceptId);
    }
   
}
