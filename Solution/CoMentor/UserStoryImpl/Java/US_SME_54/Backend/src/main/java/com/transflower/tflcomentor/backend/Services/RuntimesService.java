package com.transflower.tflcomentor.backend.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.backend.Dtos.RuntimesDTO;

@Service
public interface RuntimesService {
    public List<RuntimesDTO> getAllRuntimes();
}
