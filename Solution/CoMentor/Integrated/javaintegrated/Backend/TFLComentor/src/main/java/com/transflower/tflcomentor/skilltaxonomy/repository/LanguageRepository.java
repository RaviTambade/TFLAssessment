package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageDto;


@Repository
public interface LanguageRepository {
    List<LanguageDto> getLanguagesBySmeId(long smeId);
}
