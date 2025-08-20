package com.transflower.tflassessment.demo;

import com.transflower.tflassessment.demo.entities.EvaluationCriteria;
import com.transflower.tflassessment.demo.repositories.EvaluationCriteriaRepositoryImpl;

public class App {
public static void main(String[] args) throws InterruptedException {
        EvaluationCriteriaRepositoryImpl er = new EvaluationCriteriaRepositoryImpl();

        try {
             System.out.println("Welcome java");
             EvaluationCriteria evc1 = new EvaluationCriteria(2, "c#", 5);
             er.updateSubject(2, 5);

             EvaluationCriteria evc2 = new EvaluationCriteria(39, "c", 7);
             er.insertCriteria(evc2);

            EvaluationCriteria evc3 = new EvaluationCriteria(4, "what is java", 7);
             er.updateCriteria(4, 7);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            
            try {
                com.mysql.cj.jdbc.AbandonedConnectionCleanupThread.checkedShutdown();
            } catch (NoClassDefFoundError err) {
                System.err.println("MySQL AbandonedConnectionCleanupThread class not found: " + err.getMessage());
            }
        }
    }
}

