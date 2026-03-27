package com.transflower.tflcomentor.Backend.Service.ExternalService;

import com.transflower.tflcomentor.Backend.DTO.Framework;
import com.transflower.tflcomentor.Backend.DTO.Language;
import com.transflower.tflcomentor.Backend.DTO.Layer;
import com.transflower.tflcomentor.Backend.DTO.Runtime;
import com.transflower.tflcomentor.Backend.DTO.Language;
import com.transflower.tflcomentor.Backend.DTO.Layer;
import com.transflower.tflcomentor.Backend.DTO.Framework;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ExternalAPIService {
    private final WebClient webClient;
    private final String runtimePath;
    private final String languagePath;
    private final String layerPath;
    private final String frameworkPath;
   
    public ExternalAPIService(
            WebClient.Builder webClientBuilder,
            @Value("${external.api.base-url}") String baseUrl,
            @Value("${external.api.runtime-path}") String runtimePath,
            @Value("${external.api.language-path}") String languagePath,
            @Value("${external.api.layer-path}") String layerPath,
            @Value("${external.api.framework-path}") String frameworkPath
    ) {
        this.webClient = webClientBuilder
                .baseUrl(baseUrl)
                .build();
        this.runtimePath = runtimePath;
        this.languagePath = languagePath;
        this.layerPath = layerPath;
        this.frameworkPath = frameworkPath;
    }

    public List<Runtime> getRuntime() {
        return this.webClient   //start using webclient instance
                .get()          //Making a GET request
                .uri(runtimePath)  //url path to get runtime
                .retrieve()        //Sends the request,Prepares to extract the response body
                .bodyToMono(new ParameterizedTypeReference<List<Runtime>>() {})//convert the response body to a List of Runtime objects
                .block(); //block() is used to block the thread until the response is received and converted to the desired type.
    }

    public List<Language> getLanguages(int runtimeId) {
    return this.webClient
            .get()
            .uri(languagePath + "/" + runtimeId)
            .retrieve()
            .bodyToMono(new ParameterizedTypeReference<List<Language>>() {})
            .block();
    }

    public List<Layer> getLayers() {
        return this.webClient
                .get()
                .uri(layerPath)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Layer>>() {})
                .block();
    }

    public List<Framework> getFrameworks(int languageId, int layerId) {
        return this.webClient
                .get()
                .uri(frameworkPath + "/" + languageId + "/" + layerId)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Framework>>() {})
                .block();
    }

}
