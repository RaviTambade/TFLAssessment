package com.transflower.tflcomentor.Service;

import java.util.List;
import com.transflower.tflcomentor.Entity.Projects;

public interface  IProjectService {
    List<Projects> getAllProjects();

    Projects getProjectById(int id);
}
