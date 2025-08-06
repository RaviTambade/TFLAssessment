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
            String Password = "Sarthak@2004";
            connection = DriverManager.getConnection(URL, Username, Password);

            System.out.println("Connection Established");
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Connection Falied");
        }
    }

    @Override
    public List<AnnualCandidateResult> getCandidateResults(int candidateId, int year) {

    try{
final List<AnnualCandidateResult> annualCandidateResults = new ArrayList<>();
    // Connection connection = null;
     
     Statement statement = connection.createStatement();
     ResultSet result = statement.executeQuery("select candidatetestresults.score,subjects.title,tests.id from candidatetestresults inner join tests on tests.id=candidatetestresults.testid"
     +
                        " inner join subjects on subjects.id=tests.subjectid"+
                        " where candidatetestresults.candidateid=CandidateId and year(teststarttime)=year;");
     ResultSetMetaData colomn = result.getMetaData();
     int colomnCount = colomn.getColumnCount();
     for(int i = 1;i<=colomnCount;i++)
     {
        System.out.printf("%-20s",colomn.getColumnName(colomnCount));
     }

       while(result.next())
        {
        for(int i =1;i<=colomnCount;i++)
        {
          System.out.printf("%-20s",result.getString(i));
        }

       System.out.println();
        }

    }catch(Exception e)
        {
        System.out.println(e);
        }
     
    return annualCandidateResults;

    }

}
