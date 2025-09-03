package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.entities.User;
import com.transflower.tflassessment.demo.repositories.AuthRepository;

public class AuthServiceImpl implements AuthService {
    private final AuthRepository _repo;

    public AuthServiceImpl(AuthRepository repo)
    {
        _repo=repo;
    }
    @Override
    public User getUserWithRolesByEmail(String email, String password) {
        return _repo.getUserWithRolesByEmail(email, password);
    }
    
}
