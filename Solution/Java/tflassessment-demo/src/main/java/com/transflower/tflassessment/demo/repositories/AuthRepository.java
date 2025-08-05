package com.transflower.tflassessment.demo.repositories;
import java.util.*;


public interface AuthRepository {



    user getUserWithRolesByEmail(String email,String password);
    
}  

