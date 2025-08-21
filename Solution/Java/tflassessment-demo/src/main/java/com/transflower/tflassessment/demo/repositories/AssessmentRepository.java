package com.transflower.tflassessment.demo.repositories;
import java.util.*;
import com.transflower.tflassessment.demo.entities.*;


public interface AssessmentRepository 
{
    

    
    public List<Assessment> getAllBySubjectMatterExpert(int subjectId);
    public List<Test> getAllTests(Date fromDate,Date toDate);
    public List<Question> getTestDetails(int testId);
        
    
}
