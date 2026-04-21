package com.transflower.tflcomentor.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Dtos.RuntimesDTO;
import com.transflower.tflcomentor.service.IRuntimesService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8081")
public class RuntimesController {

    @Autowired

    private IRuntimesService service;

    @PostMapping("/runtimes/add")
    public boolean addRuntime(@RequestBody RuntimesDTO dto) {
        return service.addRuntime(dto);
    }

}
