package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;

@Repository
public interface RuntimesRepository {

    public List<RuntimesDTO> getAllRuntimes();
    public boolean addRuntime(RuntimesDTO runtimedto);
}
