package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class RuntimeResponseDTO {
    private String runtime_name;

    public RuntimeResponseDTO() {}

    public RuntimeResponseDTO(String runtime_name) {
        this.runtime_name = runtime_name;
    }

    public String getRuntime_name() {
        return runtime_name;
    }

    public void setRuntime_name(String runtime_name) {
        this.runtime_name = runtime_name;
    }

}
