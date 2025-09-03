package com.transflower.tflassessment.demo.services;


import com.transflower.tflassessment.demo.entities.User;

public interface AuthService {

    User getUserWithRolesByEmail(String email, String password);

}
