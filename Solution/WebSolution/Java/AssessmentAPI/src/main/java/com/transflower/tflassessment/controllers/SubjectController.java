package com.transflower.tflassessment.controllers;


import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.SubjectModel;
import com.transflower.tflassessment.services.SubjectService;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController {

    @Autowired
    private  SubjectService svc;

    public SubjectController(SubjectService svc) {
        this.svc = svc;
    }

    @GetMapping("/subjects")
    public CompletableFuture<List<SubjectModel>> getAllSubjects() {
        return svc.getAllSubjects();
    }

    @PostMapping("/add")
    public CompletableFuture<Integer> addSubject(@RequestBody SubjectModel subject) {
        return svc.addSubject(subject);
    }

    @DeleteMapping("/{id}")
    public CompletableFuture<Integer>deleteSubject(@PathVariable int id) {
        return  svc.deleteSubject(id);
    }
}
