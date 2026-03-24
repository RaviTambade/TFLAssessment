package com.tap.tflcomentor.Backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tap.tflcomentor.Backend.Entity.ConceptsEntity;
import com.tap.tflcomentor.Backend.Service.ConceptsService;

@RestController
@RequestMapping("/concepts")
public class ConceptsController {

    @Autowired
    private ConceptsService conceptsService;

    @GetMapping("/get/{framework}")
    public List<ConceptsEntity> getAllConceptsforFramework(@PathVariable String framework) {
        return conceptsService.getAllConceptsforFramework(framework);
    }

    @GetMapping("/get")
    public List<ConceptsEntity> getAllConcepts(){
        return conceptsService.getAllConcepts();
    }
}
