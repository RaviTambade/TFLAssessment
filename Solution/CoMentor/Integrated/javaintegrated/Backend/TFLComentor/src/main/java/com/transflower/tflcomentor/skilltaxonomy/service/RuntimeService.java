package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeResponseDTO;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;

@Service
public interface RuntimeService {
    public List<RuntimeResponseDTO> getRuntimes();
    public boolean addRuntime(RuntimeResponseDTO runtimedto);
    public List<RuntimeSummaryResponseDto> getAllRuntimeSummaries();
    public RuntimeDetailsResponseDto getRuntimeDetails(Long runtimeId);
    public List<Runtime> getAllRuntimes();
}
