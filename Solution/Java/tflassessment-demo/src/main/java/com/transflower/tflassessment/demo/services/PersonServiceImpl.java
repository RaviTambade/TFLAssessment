package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.repositories.PersonRepository;

public class PersonServiceImpl implements PersonService{

    private PersonRepository personRepo ;
    public PersonServiceImpl(PersonRepository repo){
        this.personRepo=repo;
    }
    @Override
    public void getAll() {
        personRepo.getAll();
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
