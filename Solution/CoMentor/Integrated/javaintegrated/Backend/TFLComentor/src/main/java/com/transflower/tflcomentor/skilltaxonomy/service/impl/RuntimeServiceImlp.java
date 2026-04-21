package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeAssignmentResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimeAssignmentsRepository;
import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimeRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.RuntimeService;

@Service
public class RuntimeServiceImlp implements RuntimeService {

    @Autowired
    private RuntimeRepository repository;

    @Autowired
    private RuntimeAssignmentsRepository runtimeAssignmentsRepository;

    // public RuntimesServiceImlp(RuntimesRepository repository) {
    //     this.repository = repository;
    // }

    @Override
    public List<RuntimesDTO> getAllRuntimes() {
        return repository.getAllRuntimes();
    }

    @Override
    public boolean addRuntime(RuntimesDTO runtimedto) {
        return repository.addRuntime(runtimedto);
    }

    @Override
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries() {
        return repository.findAllRuntimeSummaries();
    }

    @Override
    public RuntimeDetailsResponse getRuntimeDetails(Long runtimeId) {
        Runtime runtime = repository.findById(runtimeId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Runtime not found for id " + runtimeId));

        List<RuntimeAssignmentResponse> assignments =
                runtimeAssignmentsRepository.findAssignmentsByRuntimeId(runtimeId);

        return new RuntimeDetailsResponse(
                (long) runtime.getId(),
                normalizeRuntimeName(runtime.getRuntimeName()),
                (long) assignments.size(),
                assignments);
    }

    private String normalizeRuntimeName(String runtimeName) {
        if (runtimeName == null || runtimeName.isBlank()) {
            return "Not available";
        }
        return runtimeName.trim();
    }
}
