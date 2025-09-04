package com.transflower.tflassessment.services;

import com.transflower.tflassessment.entities.SubjectModel;
import java.util.*;

public interface SubjectService {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);
    
    int deleteSubject(int subjectId);
}
