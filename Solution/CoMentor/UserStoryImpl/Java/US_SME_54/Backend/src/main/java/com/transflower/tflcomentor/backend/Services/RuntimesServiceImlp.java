package com.transflower.tflcomentor.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.backend.Dtos.RuntimesDTO;
import com.transflower.tflcomentor.backend.Repositories.RuntimesRepository;

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
}
