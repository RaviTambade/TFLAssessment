package com.transflower.tflassessment.services;

import java.util.List;

import com.transflower.tflassessment.entities.SubjectModel;
import com.transflower.tflassessment.repositories.SubjectRepository;

public class SubjectServiceImpl implements SubjectService {
    private final SubjectRepository _repo;
    public SubjectServiceImpl(SubjectRepository repo)
    {
        _repo=repo;
    }
    @Override
    public List<SubjectModel> getAllSubjects() {
       return _repo.getAllSubjects();
    }

    @Override
    public int addSubject(SubjectModel subject) {
       return _repo.addSubject(subject);
    }

    @Override
    public int deleteSubject(int subjectId) {
      return _repo.deleteSubject(subjectId);
    }
    
}
