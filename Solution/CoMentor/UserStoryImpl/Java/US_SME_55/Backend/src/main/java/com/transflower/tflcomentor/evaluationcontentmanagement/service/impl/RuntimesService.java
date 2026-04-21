package com.transflower.tflcomentor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.RuntimesDTO;
import com.transflower.tflcomentor.repository.IRuntimesRepository;

@Service
public class RuntimesService implements IRuntimesService {

    @Autowired
    private IRuntimesRepository runtimesRepository;

    @Override
    public boolean addRuntime(RuntimesDTO runtimedto) {
        return runtimesRepository.addRuntime(runtimedto);
    }

}
