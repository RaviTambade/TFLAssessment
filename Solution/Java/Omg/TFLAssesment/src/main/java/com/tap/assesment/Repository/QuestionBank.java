package com.tap.assesment.Repository;

import java.util.ArrayList;
import java.util.List;
import com.tap.assesment.Entity.Question;

public class QuestionBank {

    private ArrayList<Question> questions = new ArrayList<Question>();

    public QuestionBank() {
        // Constructor to initialize the question bank
        // This could load questions from a database or other source
    }

    public void addQuestion(Question question) {
        questions.add(question);
        // Implementation for adding a question
    }

    public void removeQuestion(int questionId) {
        // Implementation for removing a question
        questions.removeIf(q -> q.getId() == questionId);
    }

    public Question getQuestion(int questionId) {
        // Implementation for getting a question by ID
        for (Question q : questions) {
            if (q.getId() == questionId) {
                return q;
            }
        }
        return null;
    }

    public void updateQuestion(int questionIdToUpdate, Question updatedQuestion) {
        // Implementation for updating a question
        for (int i = 0; i < questions.size(); i++) {
            if (questions.get(i).getId() == questionIdToUpdate) {
                questions.set(i, updatedQuestion);
                return;
            }
        }
        // If question not found, you might want to throw an exception or handle it
        // accordingly
    }

    public List<Question> getAllQuestions() {
        return questions;
    }
}