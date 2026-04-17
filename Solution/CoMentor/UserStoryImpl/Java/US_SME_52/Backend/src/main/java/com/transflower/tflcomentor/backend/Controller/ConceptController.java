package com.transflower.tflcomentor.backend.Controller;


import com.transflower.tflcomentor.backend.Entity.Concept;
import com.transflower.tflcomentor.backend.Service.ConceptService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/concepts")

public class ConceptController {

    @Autowired
    private ConceptService Service;

    //  Get all concepts (optional)
    @GetMapping
    public List<Concept> getAllConcepts() {
        return Service.getAllConcepts();
    }

    // View Concept Details by ID
    @GetMapping("/{id}")
    public Concept findById(@PathVariable Long id) {
        return Service.findById(id);
    }
}
