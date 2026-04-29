package com.transflower.tflcomentor.skilltaxonomy.dto.response;

import java.util.List;

public class RuntimeDetailsResponseDto {

    private Long id;
    private String runtimeName;
    private Long linkedSmes;
    private List<RuntimeAssignmentResponseDto> assignments;

    public RuntimeDetailsResponseDto(
            Long id,
            String runtimeName,
            Long linkedSmes,
            List<RuntimeAssignmentResponseDto> assignments) {
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

    public List<RuntimeAssignmentResponseDto> getAssignments() {
        return assignments;
    }
}
