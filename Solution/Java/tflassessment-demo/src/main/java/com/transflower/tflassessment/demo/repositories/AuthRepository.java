package com.transflower.tflassessment.demo.repositories;
import java.util.*;
import com.transflower.tflassessment.demo.entities.*;

public interface AuthRepository {

    User getUserWithRolesByEmail(String email,String password);
    
}  

