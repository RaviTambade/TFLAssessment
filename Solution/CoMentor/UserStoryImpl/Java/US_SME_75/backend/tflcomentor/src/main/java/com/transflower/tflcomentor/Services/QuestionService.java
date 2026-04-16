package com.transflower.tflcomentor.Services;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Dtos.QuestionDto;
import com.transflower.tflcomentor.Repositories.IQuestionRepository;
import com.transflower.tflcomentor.Entities.Question;


@Service
public class QuestionService implements IQuestionService {

    private final IQuestionRepository questionRepository;

    public QuestionService(IQuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
//     @Override
//      public List<QuestionDto> getQuestionsByStatus(String questionStatus,int page,int size){
// return null;
//      }



   @Override
public Page<QuestionDto> getQuestionsByStatus(String questionStatus, int page, int size) {

    Pageable pageable = PageRequest.of(page, size);

    Page<Question> questionPage = (Page<Question>) questionRepository.findByStatus(questionStatus, pageable);

    return questionPage.map(q -> {
        QuestionDto dto = new QuestionDto();
        dto.setQuestionId(q.getQuestionId());
        dto.setQuestionText(q.getQuestionText());
        dto.setQuestionType(q.getQuestionType());
        dto.setQuestionStatus(q.getQuestionStatus());
        return dto;
    });
}
}