package com.transflower.tflcomentor.Services;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Entities.Questions;
import com.transflower.tflcomentor.Repositories.QuestionsRepository;

@Service
public class QuestionsServicesImpl implements QuestionsServices {

    private QuestionsRepository repo;
    public QuestionsServicesImpl(QuestionsRepository repo) {
        this.repo = repo;
    }

    @Override
    public Questions getQuestionById(long question_id) {
        return repo.getQuestionById(question_id);
    }
}