package com.transflower.tflcomentor.Services;

import java.util.List;

import com.transflower.tflcomentor.Dtos.QuestionDto;

public interface QuestionService {
   List<QuestionDto> getQuestionsByType(String questionType);
}
