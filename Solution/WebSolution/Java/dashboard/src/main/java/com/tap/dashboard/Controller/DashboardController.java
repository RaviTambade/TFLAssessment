package com.tap.dashboard.Controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/dashboard")
public class DashboardController {
 
    @GetMapping("/drilldown")
    public Map<String, String> getSkillDrillDown() {
        Map<String, String> skill = new HashMap<>();
        skill.put("skillBreakdown", ".NET Developer");
        skill.put("cSharpFundamentals", "(Microsoft Learn)");
        skill.put("OOPPrinciples", "(Applied)");
        skill.put("LINQ", "(Hands-on)");
        skill.put("ASPdotnet", "(Project-based)");
        skill.put("azureBasics", "(Project-based)");
        return skill;
    }

    @GetMapping("project/evidence/project")
      public String project(){
         String project="Order Management System";
         return  project;
      }
    
   @GetMapping("project/evidence/description")
      public String deployment(){
         String deployment="Azure App Service";
         return  deployment;
      }

   @GetMapping("project/evidence/gitactivity")
      public int gitActivity(){
         int gitActivity=75;
         return  gitActivity;
      }

   @GetMapping("candidate/list")
      public List<String> candidateList(){
         List<String> candidateList = Arrays.asList("John Doe", "Jane Smith", "Bob Johnson");
         return  candidateList;
      }
}