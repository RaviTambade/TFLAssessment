package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeResponseDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Repository
public interface RuntimeRepository {

    public List<RuntimeResponseDTO> getRuntimes();
    public boolean addRuntime(RuntimeResponseDTO runtimedto);
    public List<RuntimeSummaryResponseDto> findAllRuntimeSummaries();
    public Optional<Runtime> findById(Long runtimeId);
    public List<Runtime> getAllRuntimes();
    
    
}
