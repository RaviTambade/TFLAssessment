package com.transflower.tflassessment.services;

import com.transflower.tflassessment.entities.User;
import com.transflower.tflassessment.repositories.AuthRepository;

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
