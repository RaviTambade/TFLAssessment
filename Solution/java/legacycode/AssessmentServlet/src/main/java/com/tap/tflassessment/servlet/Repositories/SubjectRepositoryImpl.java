package com.tap.tflassessment.servlet.Repositories;

import java.io.File;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tap.tflassessment.servlet.Entities.SubjectModel;

import jakarta.servlet.Servlet;
import jakarta.servlet.ServletContext;

public class SubjectRepositoryImpl implements SubjectRepository {

    @Override
    public List<SubjectModel> getAllSubjects() {
        List<SubjectModel> subjects = new ArrayList<>();
        try {

            ObjectMapper mapper = new ObjectMapper();

            InputStream is = getClass()
                    .getClassLoader()
                    .getResourceAsStream("data/subjects.json");

            subjects = mapper.readValue(is, new TypeReference<List<SubjectModel>>() {
            
            });


        } catch (Exception e) {
            System.out.println(e);
        }
        return subjects;
    }

    @Override
    public int addSubject(SubjectModel subject) {

        throw new UnsupportedOperationException("Unimplemented method 'addSubject'");
    }

    @Override
    public int deleteSubject(int subjectId) {

        throw new UnsupportedOperationException("Unimplemented method 'deleteSubject'");
    }

    @Override
    public List<SubjectModel> getSubjectByEmployeeId(int smeId) {
        throw new UnsupportedOperationException("Unimplemented method 'getSubjectByEmployeeId'");
    }

}
