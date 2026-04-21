package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeAssignmentResponse;

@Repository
public interface RuntimeAssignmentRepository {

    List<RuntimeAssignmentResponse> findAssignmentsByRuntimeId(Long runtimeId);
}
