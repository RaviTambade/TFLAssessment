package com.transflower.tflassessment.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.RequestMapping;
>>>>>>> b38a37d0ddef844adb8092b1110d5ba6cd229964
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflassessment.entities.AnnualCandidateResult;
import com.transflower.tflassessment.services.AssessmentIntelligenceService;
<<<<<<< HEAD

@RestController
=======
@RestController
@RequestMapping("api/controller")
>>>>>>> b38a37d0ddef844adb8092b1110d5ba6cd229964
public class AssessmentIntelligenceController {
    
    @Autowired
    private AssessmentIntelligenceService svc;

<<<<<<< HEAD
    @GetMapping("CandidateResults/candidateanswer/{candidateid}/testtime/{year}")
        List <AnnualCandidateResult> getCandidateResults(@PathVariable("candidateid") int candidateId , @PathVariable("year") int year)
        {
            return svc.getCandidateResults(candidateId, year);
        }
=======
    @GetMapping("/api/assessmentintelligence/candidates/{candidateId}/year/{year}")
    public List<AnnualCandidateResult> getCandidateResults(@PathVariable("candidateId") int candidateId, @PathVariable("year") int year) {
        return service.getCandidateResults(candidateId, year);
    }
>>>>>>> b38a37d0ddef844adb8092b1110d5ba6cd229964
}
