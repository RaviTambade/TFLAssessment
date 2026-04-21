package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocations;

public interface ProjectAllocationsService {

    List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId);

    List<ProjectAllocationResponseDTO> getAllProjects();

    boolean addStudentToProject(ProjectAllocations projectAllocations);

    boolean removeStudentFromProject(Long projectId, Long studentId);
}
