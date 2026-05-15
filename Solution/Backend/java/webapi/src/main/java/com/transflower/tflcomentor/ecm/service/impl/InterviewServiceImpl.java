package com.transflower.tflcomentor.ecm.service.impl;

import com.transflower.tflcomentor.ecm.dto.response.InterviewList;
import com.transflower.tflcomentor.ecm.repository.InterviewRepository;
import com.transflower.tflcomentor.ecm.service.InterviewService;
import org.springframework.stereotype.Service;
import java.util.List;  

@Service
public class InterviewServiceImpl implements InterviewService {
    private final InterviewRepository repository;

    public InterviewServiceImpl(InterviewRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<InterviewList> getAllInterviewList() {
        return repository.getAllInterviewList();
    }

}