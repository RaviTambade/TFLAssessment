package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeAssignmentResponse;

public interface RuntimeAssignmentRepository {

    List<RuntimeAssignmentResponse> findAssignmentsByRuntimeId(Long runtimeId);

}
