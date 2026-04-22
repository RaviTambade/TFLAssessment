package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocation;

public interface ProjectAllocationService {

    boolean addMember(ProjectAllocation projectAllocations);

    boolean removeMember(Long projectId, Long studentId);

    List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId);

    List<ProjectAllocationResponseDTO> getAllocatedProjects();

     List<String> getProjectByStudentId(Long studentId);
}
