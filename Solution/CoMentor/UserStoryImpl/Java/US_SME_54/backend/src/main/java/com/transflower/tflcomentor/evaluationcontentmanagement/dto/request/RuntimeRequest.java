package com.transflower.tflcomentor.evaluationcontentmanagement.dto.request;

public class RuntimeRequest {

    private String runtimeName;

    public RuntimeRequest() {
    }

    public RuntimeRequest(String runtimeName) {
        this.runtimeName = runtimeName;
    }

    public String getRuntimeName() {
        return runtimeName;
    }

    public void setRuntimeName(String runtimeName) {
        this.runtimeName = runtimeName;
    }
}
