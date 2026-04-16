package com.transflower.tflcomentor.Services;

import java.util.List;

import org.springframework.data.domain.Page;
import com.transflower.tflcomentor.Dtos.QuestionDto;

public interface IQuestionService {
   Page<QuestionDto> getQuestionsByStatus(String questionStatus,int page,int size);
}
