package com.transflower.tflassessment.demo.repositories;
import com.transflower.tflassessment.demo.entities.*;

public class EvaluationCriteriaRepositoryImpl implements EvaluationCriteriaRepository{

    // private readonly IConfiguration _configuration;
    // private readonly string _connectionString;

    // public EvaluationCriteriaRepositoryImpl(IConfiguration configuration)
    // {
    //     _configuration = configuration;
    //     _connectionString = _configuration.GetConnectionString("DefaultConnection")  ?? throw new ArgumentNullException("connectionString");
    // }
    
    @Override
   public boolean updateSubject(int id, int subjectId) {
        return false;
    }

    @Override
   public boolean insertCriteria(EvaluationCriteria criteria) {
         return false;
    }

    @Override
   public boolean updateCriteria(int evaluationCriteriaId, int questionId) {
          return false;
    }

}
