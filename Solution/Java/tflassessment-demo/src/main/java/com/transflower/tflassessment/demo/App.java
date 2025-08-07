package com.transflower.tflassessment.demo;

import com.mysql.cj.jdbc.AbandonedConnectionCleanupThread;
import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepositoryImpl;


public class App  extends Exception{
    public static void main( String[] args )
    { 
        try {
            EvaluationCriteria evc = new EvaluationCriteria("TOC",1);
            EvaluationCriteriaRepositoryImpl er = new EvaluationCriteriaRepositoryImpl();
            er.insertCriteria(evc);
            er.updateCriteria(3, 1);
        } finally {
            try {
                AbandonedConnectionCleanupThread.checkedShutdown();
            } catch (Exception e) {
                System.err.println("Cleanup thread interrupted: " + e.getMessage());
            }
        }
    }
}



// mvn clean install
// mvn package

// mvn exec:java -Dexec.mainClass="com.transflower.tflAssessment.demo.App"

// These are commands to used for compiling, running java app