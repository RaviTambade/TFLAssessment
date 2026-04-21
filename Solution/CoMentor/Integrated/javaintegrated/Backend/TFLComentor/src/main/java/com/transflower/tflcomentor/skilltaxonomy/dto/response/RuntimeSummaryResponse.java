package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class RuntimeSummaryResponse {

    private Long id;
    private String runtimeName;
    private Long linkedSmes;

    public RuntimeSummaryResponse(Long id, String runtimeName, Long linkedSmes) {
        this.id = id;
        this.runtimeName = runtimeName;
        this.linkedSmes = linkedSmes;
    }

    public Long getId() {
        return id;
    }

    public String getRuntimeName() {
        return runtimeName;
    }

    public Long getLinkedSmes() {
        return linkedSmes;
    }
}
