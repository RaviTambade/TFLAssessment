package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageDto;
import com.transflower.tflcomentor.skilltaxonomy.repository.LanguageRepository;
import com.transflower.tflcomentor.skilltaxonomy.service.LanguageService;

@Service
public class LanguageServiceImpl implements LanguageService {


    private final LanguageRepository languageRepository;

    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public List<LanguageDto> getLanguagesBySmeId(long smeId) {

        List<LanguageDto> entities = languageRepository.getLanguagesBySmeId(smeId);

        return entities.stream()
                .map(l -> new LanguageDto(
                        l.getLanguageId(),
                        l.getLanguageName()
                ))
                .toList();
    }
}
