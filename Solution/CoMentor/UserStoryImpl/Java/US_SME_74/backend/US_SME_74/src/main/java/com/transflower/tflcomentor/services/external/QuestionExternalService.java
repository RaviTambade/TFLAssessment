package com.transflower.tflcomentor.services.external;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class QuestionExternalService {

    private final WebClient webClient;

    @Value("${external.api.get-all-questions}")
    private String getAllQuestionsUrl;

    @Value("${external.api.get-question-by-id}")
    private String getQuestionByIdUrl;

    public QuestionExternalService(WebClient webClient) {
        this.webClient = webClient;
    }

    public List<Object> getAllQuestions() {
        return webClient.get()
                .uri(getAllQuestionsUrl)
                .retrieve()
                .bodyToFlux(Object.class)
                .collectList()
                .block();
    }

    public Object getQuestionById(Long id) {
        return webClient.get()
                .uri(getQuestionByIdUrl, id)
                .retrieve()
                .bodyToMono(Object.class)
                .block();
    }
}