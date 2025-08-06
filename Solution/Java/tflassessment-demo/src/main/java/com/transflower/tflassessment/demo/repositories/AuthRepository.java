package com.transflower.tflassessment.demo.repositories;
import java.util.*;


public interface AuthRepository {



    User getUserWithRolesByEmail(String email,String password);
    
}  

