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
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.service.RuntimeService;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RuntimesController {
    @Autowired
    private RuntimeService runtimeService;
    
    @GetMapping("/name/runtimes")
    public List<RuntimeDTO> getRuntimes() {
        return runtimeService.getRuntimes();
    }

    @GetMapping("/runtimes/summaries")
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries() {
        return runtimeService.getAllRuntimeSummaries();
    }

    @GetMapping("/runtimes/{runtimeId}")
    public RuntimeDetailsResponseDto getRuntimeDetails(@PathVariable Long runtimeId) {
        return runtimeService.getRuntimeDetails(runtimeId);
    }

    @PostMapping("/runtimes/add")
    public boolean addRuntime(@RequestBody RuntimeDTO dto) {
        return runtimeService.addRuntime(dto);
    }

    @GetMapping("/runtimes")
    public List<Runtime> getAllRuntimes() {
        return runtimeService.getAllRuntimes();
    }
    
}

