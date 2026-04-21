package com.transflower.tflcomentor.evaluationcontentmanagement.dto.response;

public class RuntimeResponse {

    private String runtimeName;

    public RuntimeResponse() {
    }

    public RuntimeResponse(String runtimeName) {
        this.runtimeName = runtimeName;
    }

    public String getRuntimeName() {
        return runtimeName;
    }

    public void setRuntimeName(String runtimeName) {
        this.runtimeName = runtimeName;
    }
}
