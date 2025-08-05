package com.transflower.tflassessment.demo.repositories;

public class PersonRepositoryImpl implements PersonRepository {

    @Override
    public void getAll() {
         
       System.out.println(" This is from Repository : get all");
    }

    @Override
    public void getById() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public void insert() {
         
        throw new UnsupportedOperationException("Unimplemented method 'insert'");
    }

    @Override
    public void update() {
        
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public void remove() {
       
        throw new UnsupportedOperationException("Unimplemented method 'remove'");
    }
    
}
