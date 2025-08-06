package com.transflower.tflassessment.demo.repositories;

import java.util.*;

import java.sql.*;
import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;
import com.transflower.tflassessment.demo.entities.Question;

public class AssessmentIntelligenceRepositoryImpl implements AssessmentIntelligenceRepository {

    private List<AnnualCandidateResult> annualCandidateResults;
    Connection connection;
    public AssessmentIntelligenceRepositoryImpl() {
            
        try {
            String URL = "jdbc:mysql://localhost:3306/assessmentdb";
            String Username = "root";
            String Password = "password";
            connection = DriverManager.getConnection(URL, Username, Password);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Connection Falied");
        }
    }

    @Override
    public List<AnnualCandidateResult> getCandidateResults(int candidateId, int year) {
    
        List<AnnualCandidateResult> results = new ArrayList<AnnualCandidateResult>();
        try{
            
                Statement statement = connection.createStatement();
                ResultSet result = statement.executeQuery("select candidatetestresults.score,subjects.title,tests.id"+
                                                        "from candidatetestresults "+
                                                        "inner join tests on tests.id=candidatetestresults.testid "+
                                                        "inner join subjects on subjects.id=tests.subjectid ");
                                                      //
                                                      //  "where candidatetestresults.candidateid="+candidateId+ 
                                                      //      " and year(teststarttime)="+ year+ ";");
                while(result.next())
                {
                    AnnualCandidateResult  obj= new AnnualCandidateResult();
                    obj.setScore(result.getInt("score"));
                    obj.setCandidateId(result.getInt("id"));
                    results.add(obj);
                }
            }
            catch(Exception e){
                    System.out.println(e);
            }
            return results;
    }
}
