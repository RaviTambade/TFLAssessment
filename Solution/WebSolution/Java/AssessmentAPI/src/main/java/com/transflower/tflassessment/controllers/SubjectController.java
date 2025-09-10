package com.transflower.tflassessment.controllers;

import java.util.List;

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

    private final SubjectService svc;

    public SubjectController(SubjectService svc) {
        this.svc = svc;
    }

    @GetMapping("/subjects")
    public List<SubjectModel> getAllSubjects() {
        return svc.getAllSubjects();
    }

    @PostMapping("/add")
    public String addSubject(@RequestBody SubjectModel subject) {
        int newId = svc.addSubject(subject);
        return (newId > 0) ? "Subject created with id: " + newId 
                           : "Failed to create subject";
    }

    @DeleteMapping("/{id}")
    public String deleteSubject(@PathVariable int id) {
        int deleted = svc.deleteSubject(id);
        return (deleted > 0) ? "Subject deleted successfully"
                             : "Subject not found with id: " + id;
    }
}
