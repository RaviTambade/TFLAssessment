package com.tap.tflassessment.servlet.Services;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.tap.tflassessment.servlet.Entities.SubjectModel;
import com.tap.tflassessment.servlet.Repositories.SubjectRepository;
import com.tap.tflassessment.servlet.Repositories.SubjectRepositoryImpl;


public class SubjectServiceImpl implements SubjectService {
    
    private SubjectRepositoryImpl _repo=new SubjectRepositoryImpl();

    public SubjectServiceImpl()
    {
    }
  
    @Override
    public List<SubjectModel> getAllSubjects() {
       return _repo.getAllSubjects();
    }

   
    @Override
    public int addSubject(SubjectModel subject) {
        return  _repo.addSubject(subject);
    }

    @Override
    public int deleteSubject(int subjectId) {
      return _repo.deleteSubject(subjectId) ;
    }
    
}
