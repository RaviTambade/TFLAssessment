package com.transflower.tflcomentor.skilltaxonomy.dto.response;

import java.util.List;

public class RuntimeDetailsResponse {

    private Long id;
    private String runtimeName;
    private Long linkedSmes;
    private List<RuntimeAssignmentResponse> assignments;

    public RuntimeDetailsResponse(
            Long id,
            String runtimeName,
            Long linkedSmes,
            List<RuntimeAssignmentResponse> assignments) {
        this.id = id;
        this.runtimeName = runtimeName;
        this.linkedSmes = linkedSmes;
        this.assignments = assignments;
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

    public List<RuntimeAssignmentResponse> getAssignments() {
        return assignments;
    }
}
