package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;

@Service
public interface RuntimeService {
    public List<RuntimesDTO> getAllRuntimes();
    public boolean addRuntime(RuntimesDTO runtimedto);
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries();
    public RuntimeDetailsResponse getRuntimeDetails(Long runtimeId);
}
