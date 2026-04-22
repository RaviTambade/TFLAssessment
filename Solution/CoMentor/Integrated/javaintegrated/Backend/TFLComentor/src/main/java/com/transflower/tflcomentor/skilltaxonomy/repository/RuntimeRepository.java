package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDTO;
import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponse;
import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;

@Repository
public interface RuntimeRepository {

    public List<RuntimeDTO> getAllRuntimes();
    public boolean addRuntime(RuntimeDTO runtimedto);
    public List<RuntimeSummaryResponse> findAllRuntimeSummaries();
    public Optional<Runtime> findById(Long runtimeId);
    
}
