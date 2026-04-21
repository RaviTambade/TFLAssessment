package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.RuntimesDTO;

@Service
public interface RuntimesService {

    public List<RuntimesDTO> getAllRuntimes();
}
