package com.transflower.tflassessment.demo;

import java.time.LocalDate;
import java.util.List;

import com.transflower.tflassessment.demo.entities.InterviewCandidateDetails;
import com.transflower.tflassessment.demo.entities.InterviewDetails;
import com.transflower.tflassessment.demo.repositories.InterviewRepositoryImpl;


public class App {

    public static void main(String[] args) throws Exception {
        InterviewRepositoryImpl obj1 = new InterviewRepositoryImpl();
        List<InterviewCandidateDetails> icd1 = obj1.getAllInterviewCandidates();
        List<InterviewCandidateDetails> icd2 = obj1.getInterviewedCandidatesSubjects(6);
        InterviewDetails id = obj1.getInterviewDetails(4);
        boolean status = obj1.rescheduleInterview(1,LocalDate.of(2024,05,23) );
        for (InterviewCandidateDetails icd : icd1) {
            System.out.println(icd);
        }
        for (InterviewCandidateDetails icd: icd2) {
            System.out.println(icd);
        }
        System.out.println(id);
    }
}
