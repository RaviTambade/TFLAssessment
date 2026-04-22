package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageDto;

@Service
public interface LanguageService {
    
     List<LanguageDto> getLanguagesBySmeId(long smeId);
}
