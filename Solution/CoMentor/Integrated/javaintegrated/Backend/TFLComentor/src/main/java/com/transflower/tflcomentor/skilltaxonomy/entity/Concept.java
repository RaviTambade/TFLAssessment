package com.transflower.tflcomentor.skilltaxonomy.entity;

import java.time.LocalDateTime;

public class Concept{
    private int id;
    private String name;
    private String description;
    private int status ;
    private LocalDateTime createdAt;

    

    public Concept(){
      this.id = 0;
        this.name = " ";
        this.description = " ";
        this.status = 0;
        this.createdAt = LocalDateTime.now();  
    }

    public Concept(int id, String name, String description, int status, LocalDateTime createdAt){
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString(){
        return ("Id :"+id+" "+
                "Name : "+name+" "+
                "Description : "+description+" "+
                "Status : "+status+" "+
                "Created At : "+createdAt);
    }
}

//Nikita:	US_SME_50	As an SME, I want to view all concepts so that I can organize sessions and questions.