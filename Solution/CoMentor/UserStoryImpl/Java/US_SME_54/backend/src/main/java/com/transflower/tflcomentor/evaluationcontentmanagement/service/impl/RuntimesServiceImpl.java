package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.RuntimesDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.RuntimesRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.RuntimesService;

@Service
public class RuntimesServiceImpl implements RuntimesService {

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
