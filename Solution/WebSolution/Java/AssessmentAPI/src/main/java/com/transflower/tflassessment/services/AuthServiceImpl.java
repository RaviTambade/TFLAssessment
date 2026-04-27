package com.transflower.tflassessment.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.transflower.tflassessment.entities.User;
import com.transflower.tflassessment.repositories.AuthRepository;
@Service
public class AuthServiceImpl implements AuthService {
    private final AuthRepository repository;
    @Autowired
    public AuthServiceImpl(AuthRepository repository)
    {
        this.repository=repository;
    }
    @Override
    @Async("asyncExecutor")
    public CompletableFuture<User> getUserWithRolesByEmail(String email, String password) {
        System.out.println("Executing getAllQuestionsAsync on: " + Thread.currentThread().getName());
        return repository.getUserWithRolesByEmail(email, password);
    }
    
}
