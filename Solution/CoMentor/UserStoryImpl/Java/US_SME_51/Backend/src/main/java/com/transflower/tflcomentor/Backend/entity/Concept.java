package com.transflower.tflcomentor.Backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name="concepts")
public class Concept{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String status;
    private LocalDateTime createdAt;

    // Constructors, getters, and setters
    public Concept() {
    }

    public Concept(String name, String description, String status) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Concepts{id=" + id + ", name='" + name +
             "', description='" + description + "', status='" + status + 
             "', createdAt=" + createdAt + "}";
    }
}