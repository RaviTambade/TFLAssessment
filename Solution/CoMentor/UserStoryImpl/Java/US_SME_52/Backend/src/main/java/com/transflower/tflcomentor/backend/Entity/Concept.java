package com.transflower.tflcomentor.backend.Entity;

//import java.time.LocalDateTime;
import java.util.Objects;

public class Concept {

    

    private Long id;
    private String name;
    private String description;
    private String status;
    private String createdAt;

    // Default Constructor
    public Concept() {
    }

    // Parameterized Constructor
    public Concept(Long id, String name, String description, String status, String createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    // Getters and Setters

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    // ✅ Override toString()
    @Override
    public String toString() {
        return "Concept{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", status='" + status + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }

    // ✅ Override equals()
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Concept)) return false;
        Concept concept = (Concept) o;
        return Objects.equals(id, concept.id);
    }

    // ✅ Override hashCode()
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}