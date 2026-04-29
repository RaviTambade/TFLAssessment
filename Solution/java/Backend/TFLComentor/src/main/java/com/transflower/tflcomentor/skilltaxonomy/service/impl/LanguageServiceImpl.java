// package com.transflower.tflcomentor.skilltaxonomy.service.impl;

// import java.util.List;

// import org.springframework.stereotype.Service;

// import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
// import com.transflower.tflcomentor.skilltaxonomy.repository.LanguageRepository;
// import com.transflower.tflcomentor.skilltaxonomy.service.LanguageService;

// @Service
// public class LanguageServiceImpl implements LanguageService {


//     private final LanguageRepository repository;

//     public LanguageServiceImpl(LanguageRepository languageRepository) {
//         this.repository = languageRepository;
//     }

//     @Override
//     public List<LanguageResponseDto> getLanguagesBySmeId(long smeId) {

//         List<LanguageResponseDto> entities = repository.getLanguagesBySmeId(smeId);

//         return entities.stream()
//                 .map(l -> new LanguageResponseDto(
//                         l.getLanguageId(),
//                         l.getLanguageName()
//                 ))
//                 .toList();
//     }

//      @Override
//     public List<Language> getAllLanguages(int runtimeId) {
//         return repository.getAllLanguages(runtimeId);
//     }
// }
