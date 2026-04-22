package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDTO;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;

@Service
public interface RuntimeService {
    public List<RuntimeDTO> getRuntimes();
    public boolean addRuntime(RuntimeDTO runtimedto);
    public List<RuntimeSummaryResponse> getAllRuntimeSummaries();
    public RuntimeDetailsResponseDto getRuntimeDetails(Long runtimeId);
    public List<Runtime> getAllRuntimes();
}
