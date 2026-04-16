package com.transflower.tflcomentor.Services;

import java.util.List;

import com.transflower.tflcomentor.Dtos.QuestionDto;

public interface IQuestionService {
   List<QuestionDto> getQuestionsByStatus(String questionStatus);
   
   QuestionDto createQuestion(QuestionDto questionDto);
}
