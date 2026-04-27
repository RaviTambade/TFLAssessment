package com.transflower.tflassessment.services;


import com.transflower.tflassessment.entities.User;
import java.util.concurrent.CompletableFuture;
public interface AuthService {

    public CompletableFuture<User> getUserWithRolesByEmail(String email, String password);

}
