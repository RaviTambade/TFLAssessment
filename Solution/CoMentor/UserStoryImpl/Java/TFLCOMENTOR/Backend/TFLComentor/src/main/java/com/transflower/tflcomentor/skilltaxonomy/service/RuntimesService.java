package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;

@Service
public interface RuntimesService {
    public List<RuntimesDTO> getAllRuntimes();
    public boolean addRuntime(RuntimesDTO runtimedto);
}
