package com.tap.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {
    
    @GetMapping("/csharpFundamentals")
    public String csharpFundamentals(){
        String CsharpFundamentals = "(Microsoft Learn)";
       return  CsharpFundamentals;
    }

    @GetMapping("/oopPrinciples")
    public String oopPrinciples(){
       String oopPrinciples = "(Applied)";
       return  oopPrinciples;
    }

    @GetMapping("/linq")
    public String linq(){
       String linq = "(Hands-on)";
       return  linq;
    }

    @GetMapping("/aspDotnet")
    public String aspDotnet(){
       String aspDotnet="(Project-based)";
       return  aspDotnet;
    }

    @GetMapping("/azureBasics") 
    public String azureBasics(){
       String azureBasics="(Project-based)";
       return  azureBasics;
    }
}