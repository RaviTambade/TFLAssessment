package com.transflower.tflassessment.repositories;
 
import com.transflower.tflassessment.entities.User;

public interface AuthRepository {

    User getUserWithRolesByEmail(String email,String password);
    
}  

