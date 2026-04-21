package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.RuntimesDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.RuntimesService;

@RestController
@RequestMapping("/api/runtimes")
@CrossOrigin(origins = "http://localhost:8081")
public class RuntimesController {

    @Autowired
    private RuntimesService svc;

    @GetMapping
    public List<RuntimesDTO> getAllRuntimes() {
        return svc.getAllRuntimes();

    }
}
