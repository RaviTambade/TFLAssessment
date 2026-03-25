package com.transflower.tflcomentor.Backend.Entity;

public class Layers {
    private int id ;
    private String layerName;

    public Layers(){
        this.id = 0;
        this.layerName = " ";
    }

    public Layers(int id, String layerName) {
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

    @Override
    public String toString() {
        return "Layers [id=" + id + ", layerName=" + layerName + "]";
    }
}