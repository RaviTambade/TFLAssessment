package com.transflower.tflcomentor.Backend.dto;

public class LayerDTO {
    private int id;
    private String layerName;

    public LayerDTO() {
    }

    public LayerDTO(int id, String layerName) {
        this.id = id;
        this.layerName = layerName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLayerName() {
        return layerName;
    }

    public void setLayerName(String layerName) {
        this.layerName = layerName;
    }
}
