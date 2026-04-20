package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimesDTO;
import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimesRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.RuntimesService;

@Service
public class RuntimesServiceImlp implements RuntimesService {

    @Autowired
    private RuntimesRepository repository;

    // public RuntimesServiceImlp(RuntimesRepository repository) {
    //     this.repository = repository;
    // }

    @Override
    public List<RuntimesDTO> getAllRuntimes() {
        return repository.getAllRuntimes();
    }

    @Override
    public boolean addRuntime(RuntimesDTO runtimedto) {
        return repository.addRuntime(runtimedto);
    }
}
