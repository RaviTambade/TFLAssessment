package com.transflower.tflassessment.demo.repositories;

import com.transflower.tflassessment.demo.entities.SubjectModel;
import java.util.*;

public interface SubjectRepository {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);
    
    int deleteSubject(int subjectId);
}

