package com.transflower.tflcomentor.skilltaxonomy.dto.response;

public class LanguageResponseDto {

    private int languageId;
    private String languageName;

    public LanguageResponseDto() {
    }

    public LanguageResponseDto(int languageId, String languageName) {
        this.languageId = languageId;
        this.languageName = languageName;
    }

    public int getLanguageId() {
        return languageId;
    }

    public void setLanguageId(int languageId) {
        this.languageId = languageId;
    }

    public String getLanguageName() {
        return languageName;
    }

    public void setLanguageName(String languageName) {
        this.languageName = languageName;
    }
}
