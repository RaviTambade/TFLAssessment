package com.transflower.tflassessment.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.User;
import com.transflower.tflassessment.services.AuthService;

@RestController
public class AuthController {
    @Autowired
    private AuthService svc;

    @PostMapping("/login")
        public User getUserWithRolesByEmail(@RequestBody String email, String password){
        return svc.getUserWithRolesByEmail(email,password);
    }

}
