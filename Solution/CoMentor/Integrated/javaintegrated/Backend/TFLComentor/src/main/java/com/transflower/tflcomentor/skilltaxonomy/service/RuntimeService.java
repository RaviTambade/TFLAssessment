package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponse;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;

@Service
public interface RuntimeService {
    public List<RuntimeDTO> getAllRuntimes();
    public boolean addRuntime(RuntimeDTO runtimedto);
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries();
    public RuntimeDetailsResponse getRuntimeDetails(Long runtimeId);
}
