package com.transflower.tflcomentor.Services;

import com.transflower.tflcomentor.Entities.Project;
import java.util.List;

public interface ProjectService {

    List<Project> getAllProjects();

    Project getProjectById(long project_id);
}
