// package com.transflower.tflcomentor.Controller;

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// @RequestMapping("/api/projects")
// @CrossOrigin("http://localhost:8081")  
// public class ProjectsController {

//     @GetMapping
//     public List<Map<String, Object>> getProjects() {

//         List<Map<String, Object>> projects = new ArrayList<>();

//         projects.add(createProject(1, 4, "TFLAssessment",
//                 "Assessment platform for conducting online tests, evaluating performance, and generating results",
//                 "https://github.com/RaviTambade/TFLAssessment.git",
//                 "PENDING"));

//         projects.add(createProject(2, 4, "E-Krushi-Project",
//                 "Digital agriculture platform providing farmers with crop guidance, market prices, and smart farming solutions",
//                 "https://github.com/RaviTambade/E-Krushi-Project.git",
//                 "IN_PROGRESS"));

//         projects.add(createProject(3, 4, "TFLGreenhouseAutomation",
//                 "Automation system for monitoring and controlling greenhouse environment like temperature, humidity, and irrigation",
//                 "https://github.com/RaviTambade/TFLGreenhouseAutomation.git",
//                 "IN_PROGRESS"));

//         projects.add(createProject(4, 4, "EAgroServices",
//                 "Online platform offering agricultural services like equipment rental, soil testing, and advisory support",
//                 "https://github.com/RaviTambade/EAgroServices.git",
//                 "PENDING"));

//         projects.add(createProject(5, 4, "InventoryManagement",
//                 "System to manage stock, track inventory levels, and generate reports for business operations",
//                 "https://github.com/RaviTambade/InventoryManagement.git",
//                 "COMPLETED"));

//         return projects;
//     }
    
//     private Map<String, Object> createProject(int id, int mentorId, String name,
//                                               String description, String repoUrl, String status) {

//         Map<String, Object> project = new HashMap<>();
//         project.put("id", id);
//         project.put("mentor_id", mentorId);
//         project.put("project_name", name);
//         project.put("description", description);
//         project.put("repository_url", repoUrl);
//         project.put("status", status);
//         project.put("created_at", new java.util.Date());

//         return project;
//     }
// }