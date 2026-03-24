package com.transflower.tflcomentor.Backend.Entity;

public class LayersEntity {
    private int id ;
    private String layerName;

    public LayersEntity(){
        this.id = 0;
        this.layerName = " ";
    }

    public LayersEntity(int id, String layerName) {
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