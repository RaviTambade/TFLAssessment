package com.transflower.tflcomentor.skilltaxonomy.entity;

public class Layer {
    private int id ;
    private String layerName;

    public Layer(){
        this.id = 0;
        this.layerName = " ";
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

    @Override
    public String toString() {
        return "Layers [id=" + id + ", layerName=" + layerName + "]";
    }
}