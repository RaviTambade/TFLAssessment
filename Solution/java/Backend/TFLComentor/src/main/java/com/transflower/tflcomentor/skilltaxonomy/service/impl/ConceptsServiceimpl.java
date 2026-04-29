// package com.transflower.tflcomentor.skilltaxonomy.service.impl;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
// import com.transflower.tflcomentor.skilltaxonomy.repository.ConceptRepository;
// import com.transflower.tflcomentor.skilltaxonomy.service.ConceptsService;

// @Service
// public class ConceptsServiceimpl implements ConceptsService {

//     @Autowired
//     private ConceptRepository repository;

//     @Override
//     public List<Concept> getAllConcepts() {
//         return repository.getAllConcepts();
//     }

//     @Override
//     public List<Concept> getAllConceptsforFramework(int framework) {
//         return  repository.getAllConceptsforFramework(framework);
//     }

//     @Override
//     public Concept getById(Long id) {
//         return repository.getById(id);
//     }

//     @Override
//     public Concept addConcept(Concept concept) {
//         return repository.addConcept(concept);
//     }

//     @Override
//     public boolean mapConceptToFramework(int conceptId, int frameworkId) {
//         return repository.mapConceptToFramework(conceptId, frameworkId);
//     }
// }
