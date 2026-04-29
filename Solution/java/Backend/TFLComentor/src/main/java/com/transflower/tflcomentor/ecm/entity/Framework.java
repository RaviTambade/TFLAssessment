package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

public class Framework {

    private Long id;
    private String name;
    private Long layerId;
    private Long languageId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

   
     public Framework() {
        this.id = 0L;
        this.name = "";
        this.layerId = 0L;
        this.languageId = 0L;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public Framework(Long id, String name, Long layerId, Long languageId,
                     LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.layerId = layerId;
        this.languageId = languageId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

    public Long getLayerId() {
        return layerId;
    }

    public void setLayerId(Long layerId) {
        this.layerId = layerId;
    }

    public Long getLanguageId() {
        return languageId;
    }

    public void setLanguageId(Long languageId) {
        this.languageId = languageId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
