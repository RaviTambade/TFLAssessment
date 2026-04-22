package com.transflower.tflcomentor.skilltaxonomy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
@Service
public interface FrameworkService {

   public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    
}
