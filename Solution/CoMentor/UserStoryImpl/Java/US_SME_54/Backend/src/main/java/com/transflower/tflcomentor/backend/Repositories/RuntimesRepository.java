package com.transflower.tflcomentor.backend.Repositories;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.backend.Dtos.RuntimesDTO;

@Repository
public interface RuntimesRepository {

    public List<RuntimesDTO> getAllRuntimes();
}
