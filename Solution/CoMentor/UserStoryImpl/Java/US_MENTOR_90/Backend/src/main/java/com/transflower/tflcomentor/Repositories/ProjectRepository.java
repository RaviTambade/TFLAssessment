package com.transflower.tflcomentor.Repositories;

import com.transflower.tflcomentor.Entities.Project;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProjectRepository {
    
    List<Project> getAllProjects();

    Project getProjectById(long project_id);

}
    
