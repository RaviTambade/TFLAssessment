package com.tap.tflassessment.servlet.Repositories;

import com.tap.tflassessment.servlet.Entities.SubjectModel;

import java.util.*;

public interface SubjectRepository {

    List<SubjectModel> getAllSubjects();

    int addSubject(SubjectModel subject);

    int deleteSubject(int subjectId);

    List<SubjectModel> getSubjectByEmployeeId(int smeId);
}
