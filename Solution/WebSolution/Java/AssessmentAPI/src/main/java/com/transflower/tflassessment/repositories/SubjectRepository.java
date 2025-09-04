package com.transflower.tflassessment.repositories;

import com.transflower.tflassessment.entities.SubjectModel;
import java.util.*;

public interface SubjectRepository {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);
    
    int deleteSubject(int subjectId);
}

