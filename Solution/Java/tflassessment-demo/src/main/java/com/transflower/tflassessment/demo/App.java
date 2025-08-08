package com.transflower.tflassessment.demo;

import java.time.LocalDate;
import java.time.LocalTime;
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
        boolean status1 = obj1.rescheduleInterview(4,LocalDate.of(2022,12,23) );
        boolean status2 = obj1.rescheduleInterview(3,LocalTime.of(12, 00),LocalDate.of(2032,07,23));
        boolean status3 = obj1.rescheduleInterview(2,LocalDate.of(2022,07,23) );
        boolean status4 = obj1.cancelInterview(2);
        boolean status5 = obj1.changeInterviewer(4,1);
        for (InterviewCandidateDetails icd : icd1) {
            System.out.println(icd);
        }
        for (InterviewCandidateDetails icd: icd2) {
            System.out.println(icd);
        }
    }
}
