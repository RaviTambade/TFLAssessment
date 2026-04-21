package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Repository
public interface RuntimesRepository {

    public List<RuntimesDTO> getAllRuntimes();
    public boolean addRuntime(RuntimesDTO runtimedto);
    public List<RuntimeSummaryResponse> findAllRuntimeSummaries();
    public Optional<Runtime> findById(Long runtimeId);
    
}
