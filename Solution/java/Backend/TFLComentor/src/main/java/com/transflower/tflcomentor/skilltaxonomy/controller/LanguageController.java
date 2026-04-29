// package com.transflower.tflcomentor.skilltaxonomy.controller;

// import java.util.List;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.transflower.tflcomentor.skilltaxonomy.dto.response.LanguageResponseDto;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Language;
// import com.transflower.tflcomentor.skilltaxonomy.service.LanguageService;

// @CrossOrigin(origins = "*", allowedHeaders = "*")
// @RestController
// @RequestMapping("/api/lauguages")
// public class LanguageController {

//     private final LanguageService languageService;

//     public LanguageController(LanguageService languageService) {
//         this.languageService = languageService;
//     }

//     @GetMapping("/runtime/{runtimeId}")
//     public List<Language> getAllLanguages(@PathVariable int runtimeId) {
//         return languageService.getAllLanguages(runtimeId);
//     }

//     @GetMapping("/sme/{smeId}")
//     public ResponseEntity<List<LanguageResponseDto>> getAssignedLanguages(@PathVariable long smeId) {
//         List<LanguageResponseDto> languages = languageService.getLanguagesBySmeId(smeId);
//         return ResponseEntity.ok(languages);
//     }
// }
