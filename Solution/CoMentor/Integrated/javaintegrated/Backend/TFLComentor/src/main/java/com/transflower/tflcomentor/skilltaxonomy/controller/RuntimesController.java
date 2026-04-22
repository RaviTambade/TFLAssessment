package com.transflower.tflcomentor.skilltaxonomy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.service.RuntimeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8081")
public class RuntimesController {
    @Autowired
    private RuntimeService svc;
    
    @GetMapping("/name/runtimes")
    public List<RuntimeDTO> getAllRuntimes() {
        return svc.getAllRuntimes();
      
    }

    @GetMapping("/runtimes/summaries")
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries() {
        return svc.getAllRuntimeSummaries();
    }

    @GetMapping("/runtimes/{runtimeId}")
    public RuntimeDetailsResponse getRuntimeDetails(@PathVariable Long runtimeId) {
        return svc.getRuntimeDetails(runtimeId);
    }

    @PostMapping("/runtimes/add")
    public boolean addRuntime(@RequestBody RuntimeDTO dto) {
        return svc.addRuntime(dto);
    }
    
}

