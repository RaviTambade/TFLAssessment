package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.service.RuntimesService;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8081")
public class RuntimesController {
    @Autowired
    private RuntimesService svc;
    
    @GetMapping("/name/runtimes")
    public List<RuntimesDTO> getAllRuntimes() {
        return svc.getAllRuntimes();
      
    }

    @PostMapping("/runtimes/add")
    public boolean addRuntime(@RequestBody RuntimesDTO dto) {
        return svc.addRuntime(dto);
    }
}

