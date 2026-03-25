package com.transflower.tflcomentor.Services;

import java.util.List;

import com.transflower.tflcomentor.Dtos.ViewQuestionByType;
import com.transflower.tflcomentor.Entities.ViewQuestionsByStatus;

public interface QuestionService {
   List<ViewQuestionByType> getQuestionsByType(String questionType);
}
