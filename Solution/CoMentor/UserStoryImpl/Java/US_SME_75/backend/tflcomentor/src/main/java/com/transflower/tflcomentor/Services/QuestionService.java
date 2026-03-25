package com.transflower.tflcomentor.Services;

import java.util.List;

import com.transflower.tflcomentor.Dtos.ViewQuestionByStatus;
import com.transflower.tflcomentor.Entities.ViewQuestionsByStatus;

public interface QuestionService {
   List<ViewQuestionByStatus> getQuestionsByStatus(String questionStatus);
}
