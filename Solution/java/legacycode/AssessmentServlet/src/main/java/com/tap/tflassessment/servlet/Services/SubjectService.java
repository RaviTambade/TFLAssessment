package com.tap.tflassessment.servlet.Services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.tap.tflassessment.servlet.Entities.SubjectModel;

public interface SubjectService {

    public List<SubjectModel> getAllSubjects();

     public int addSubject(SubjectModel subject);
    
    public int deleteSubject(int subjectId);
}
