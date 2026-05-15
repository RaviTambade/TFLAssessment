package com.transflower.tflcomentor.ecm.repository;
import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import java.util.List;

public interface InterviewRepository{
    List<InterviewList> getAllInterviewList();

}