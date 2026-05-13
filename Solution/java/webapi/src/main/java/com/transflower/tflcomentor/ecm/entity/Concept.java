package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;
public class Concept {
    
    private Long id;
    private String name;
    private String description;
    private Boolean status;
    private LocalDateTime createdAt;

    public static int count;   //shared variable (class variables)
    public static int getCount(){return count;}
   
    public Concept() {
        this.id = null;
        this.name = "";
        this.description = "";
        this.status = true;
        this.createdAt = LocalDateTime.now();
        count++; 
    }

    public Concept(Long id, String name, String description, Boolean status, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        count ++;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    protected void finalize() throws Throwable { 
            count--;
            if(count <0){
                 throw new IllegalArgumentException("Count cannot be negative");
            }
    }
}
