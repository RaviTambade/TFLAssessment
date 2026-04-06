package com.transflower.tflcomentor.Backend.DTO;

public class Layer {
    private int id;
    private String layerName;

    public Layer() {
    }

    public Layer(int id, String layerName) {
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
