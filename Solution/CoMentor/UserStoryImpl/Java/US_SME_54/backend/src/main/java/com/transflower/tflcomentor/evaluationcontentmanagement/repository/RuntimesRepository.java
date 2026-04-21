package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.RuntimesDTO;

@Repository
public interface RuntimesRepository {

    public List<RuntimesDTO> getAllRuntimes();
}
