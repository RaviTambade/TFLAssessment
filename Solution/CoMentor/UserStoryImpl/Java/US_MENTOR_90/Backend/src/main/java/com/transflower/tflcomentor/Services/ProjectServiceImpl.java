package com.transflower.tflcomentor.Services;

import com.transflower.tflcomentor.Entities.Project;
import com.transflower.tflcomentor.Repositories.ProjectRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repo;

    public ProjectServiceImpl(ProjectRepository repo){
        this.repo = repo;
    }

    @Override
    public List<Project> getAllProjects() {
        return repo.getAllProjects();
    }

    @Override
    public Project getProjectById(long project_id) {
        return repo.getProjectById(project_id);
    }
}
