package com.transflower.tflcomentor.Backend.Entity;

import java.time.LocalDateTime;

public class Concepts{
    private int id;
    private String name;
    private String description;
    private Status status ;
    private LocalDateTime createdAt;
    private enum Status{active,inactive}

    public Concepts(){
      this.id = 0;
        this.name = " ";
        this.description = " ";
        this.status = Status.active;
        this.createdAt = LocalDateTime.now();  
    }

    public Concepts(int id, String name, String description, Status status, LocalDateTime createdAt){
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

    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
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