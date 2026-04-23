package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Language;


@Repository
public interface LanguageRepository {
    List<LanguageResponseDto> getLanguagesBySmeId(long smeId);
    List<Language> getAllLanguages(int runtimeId);
}
