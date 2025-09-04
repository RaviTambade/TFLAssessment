package com.transflower.tflassessment.services;


import com.transflower.tflassessment.entities.User;

public interface AuthService {

    User getUserWithRolesByEmail(String email, String password);

}
