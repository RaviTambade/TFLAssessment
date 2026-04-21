package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {
 
    @Override
    public List<Projects> getAllProjects() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.findAndRegisterModules();

            InputStream inputStream = getClass().getResourceAsStream("/projects.json");
            if (inputStream == null) {
                return new ArrayList<>();
            }

            return mapper.readValue(inputStream, new TypeReference<List<Projects>>() {
            });

        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    @Override
    public Projects getProjectById(int id) {
        return getAllProjects().stream()
                .filter(project -> project.getId() == id)
                .findFirst()
                .orElse(null);
    }
}