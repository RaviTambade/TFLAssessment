package com.transflower.tflcomentor.evaluationcontentmanagement.entity;

public class Runtimes {

    private int id;
    private String runtime_name;

    public Runtimes() {
        this.id = 0;
        this.runtime_name = "";
    }

    public Runtimes(int id, String runtime_name) {
        this.id = id;
        this.runtime_name = runtime_name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRuntime_name() {
        return runtime_name;
    }

    public void setRuntime_name(String runtime_name) {
        this.runtime_name = runtime_name;
    }

    @Override
    public String toString() {
        return ("id:" + id + " " + "runtime_name:" + runtime_name);
    }

}
