package com.transflower.tflassessment.demo.services;

import com.transflower.tflassessment.demo.entities.SubjectModel;
import java.util.*;

public interface SubjectService {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);
    
    int deleteSubject(int subjectId);
}
