package com.transflower.tflassessment.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.User;
import com.transflower.tflassessment.repositories.AuthRepository;
@Service
public class AuthServiceImpl implements AuthService {
    private final AuthRepository _repo;
    @Autowired
    public AuthServiceImpl(AuthRepository repo)
    {
        _repo=repo;
    }
    @Override
    public User getUserWithRolesByEmail(String email, String password) {
        return _repo.getUserWithRolesByEmail(email, password);
    }
    
}
