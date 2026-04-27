package com.transflower.tflassessment.repositories;

import com.transflower.tflassessment.entities.SubjectModel;

import java.util.*;
import java.util.concurrent.CompletableFuture;

public interface SubjectRepository {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);
    
    int deleteSubject(int subjectId);
    
    CompletableFuture<List<SubjectModel>> getSubjectByEmployeeId(int smeId);
}

