package com.tap.saloni.Repository;

import java.util.ArrayList;
import java.util.List;
import com.tap.saloni.Entity.Question;

public class QuestionBank {

    private ArrayList<Question> questions = new ArrayList<Question>();

    public QuestionBank() {
        // Constructor to initialize the question bank
        // This could load questions from a database or other source
    }

    public void add(Question question) {
        questions.add(question);
        // Implementation for adding a question
    }

    public void remove(int questionId) {
        // Implementation for removing a question
        questions.removeIf(q -> q.getId() == questionId);
    }

    public Question getById(int questionId) {
        // Implementation for getting a question by ID
        for (Question q : questions) {
            if (q.getId() == questionId) {
                return q;
            }
        }
        return null;
    }

    public void update(int questionIdToUpdate, Question updatedQuestion) {
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

    public List<Question> getAll() {
        return questions;
    }
}