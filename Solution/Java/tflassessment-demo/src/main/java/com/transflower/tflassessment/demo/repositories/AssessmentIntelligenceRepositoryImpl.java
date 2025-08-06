package com.transflower.tflassessment.demo.repositories;

import java.util.*;

import java.sql.*;
import com.transflower.tflassessment.demo.entities.AnnualCandidateResult;
import com.transflower.tflassessment.demo.entities.Question;

public class AssessmentIntelligenceRepositoryImpl implements AssessmentIntelligenceRepository {

    public AssessmentIntelligenceRepositoryImpl() {
            Connection connection;
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
     Connection connection = null;
     
     Statement statement = connection.createStatement();
     ResultSet result = statement.executeQuery("select candidatetestresults.score,subjects.title,tests.id from candidatetestresults inner join tests on tests.id=candidatetestresults.testid"
     +
                        " inner join subjects on subjects.id=tests.subjectid"+
                        " where candidatetestresults.candidateid=CandidateId and year(teststarttime)=Year;");
     ResultSetMetaData colomn = result.getMetaData();
     int colomnCount = colomn.getColumnCount();
     for(int i = 1;i<=colomnCount;i++)
     {
        System.out.printf("%-20",colomn.getColumnName(colomnCount));
     }

       while(result.next())
        {
        for(int i =1;i<=colomnCount;i++)
        {
          System.out.printf("%-20",result.getString(i));
        }

       System.out.println();
        }

    }catch(Exception e)
        {
        System.out.println(e);
        }
     
    return getCandidateResults(2, 2024);


        //throw new UnsupportedOperationException("Unimplemented method 'getCandidateResults'");

    }

}
