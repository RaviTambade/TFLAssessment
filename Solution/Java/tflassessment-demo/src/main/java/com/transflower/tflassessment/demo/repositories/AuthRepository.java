//package com.transflower.tflassessment.demo.repositories;
 
import com.transflower.tflassessment.demo.entities.*;

public interface AuthRepository {

    User getUserWithRolesByEmail(String email,String password);
    
}  

