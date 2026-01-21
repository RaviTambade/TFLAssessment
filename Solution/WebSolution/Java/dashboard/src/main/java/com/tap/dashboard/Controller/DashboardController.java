package com.tap.dashboard.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:5174")
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

    @GetMapping("/projectevidence")
      public Map<String, String> getProjectEvidence() {
          projectEvidence.put("project", "Order Management System");
          projectEvidence.put("deployment", "Azure App Service");
          projectEvidence.put("gitActivity", "75");
          return projectEvidence;
      }
   
      @GetMapping("/employerconfidence")
      public List<String> getEmployerConfidence() {
          List <String> empconfidence = new ArrayList<>();
          empconfidence.add("✔ Project verified by mentor");
          empconfidence.add("✔ Code reviewed");
          empconfidence.add("✔ Deployment validated");
          empconfidence.add("✔ Assessment proctored");

         return empconfidence;
      }

      @GetMapping("/employershortlist")
      public Map<String, String> getEmployerShortlist() {
           Map<String, String> empShortlist=new HashMap<>();
           empShortlist.put("Ananya","Ananya (82%)");
           empShortlist.put("Rohit","Rohit (76%)");
           empShortlist.put("Sneha","Sneha (offer)");
           empShortlist.put("Karan","Karan (68%)");

          return empShortlist;
      }

      @GetMapping("/skillanalytics")
      public List<Map<String, Object>> getSkillAnalytics(){
        List<Map<String, Object>> skillAnalytics = new ArrayList<>();
        skillAnalytics.add(Map.of("skill","C#","ready",4,"nearReady",2));
        skillAnalytics.add(Map.of("skill","ASP .NET Core","ready",3,"nearReady",3));
        skillAnalytics.add(Map.of("skill","React","ready",2,"nearReady",4));
        skillAnalytics.add(Map.of("skill","SQL","ready",4,"nearReady",3));
        skillAnalytics.add(Map.of("skill","Azure","ready",2,"nearReady",3));
        return skillAnalytics;
      }


        @GetMapping("/learningtimeline")
        public List<Map<String, Object>> getLearningTimeline() {
            return List.of(
                Map.of("week", 1, "content", "C# & OOP Basics"),
                Map.of("week", 4, "content", "First Web API"),
                Map.of("week", 8, "content", "Integrated Project"),
                Map.of("week", 12, "content", "Azure Deployment"));
        }
        
        @GetMapping("/recommendationview")
        public Map<String, Object> getRecommendationView() {

            Map<String, Object> response = new HashMap<>();
            response.put("title", "Hiring Insights");
        response.put("recommendedRole", "Junior .NET Developer");
        response.put(
            "interviewFocus",
            List.of("API Design", "Exception Handling", "SQL Optimization")
        );
        response.put("onboardingReadiness", "High");
        response.put(
            "actions",
            List.of("Shortlist", "Schedule Interview")
        );
        return response;
        }

        @GetMapping("/candidateList")
        public Map<String, Object> getCandidateListView() {
            Map<String, Object> response = new HashMap<>();
            response.put("title", "Candidate - Junior Developer Role");
            List<Map<String, Object>> candidates = List.of(
                    Map.of(
                "name", "Nirjala Naik",
                "readiness", 82,
                "skills", "C#, SQL, APIs"
            ),
            Map.of(
                "name", "Sahil Kamble",
                "readiness", 92,
                "skills", "OOP, LINQ"
            ),
            Map.of(
                "name", "Sanika Bhor",
                "readiness", 89,
                "skills", "ASP.NET, Azure"
            )
            );
        response.put("candidates",candidates);
        return response;
        }

}
    