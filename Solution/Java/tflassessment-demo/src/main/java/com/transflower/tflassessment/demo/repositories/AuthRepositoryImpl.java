package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.*;
public class AuthRepositoryImpl implements AuthRepository {

      @Override
    public  User getUserWithRolesByEmail(String email,String password){
      
     

      User user=new User()  ;
       //database code to fetch user based on email id and password

      return user;
    }
    
    }
    

