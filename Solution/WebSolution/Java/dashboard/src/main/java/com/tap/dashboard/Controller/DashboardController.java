package com.tap.dashboard.Controller;

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
