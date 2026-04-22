package com.transflower.tflcomentor.skilltaxonomy.repository;

import java.util.List;

import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;

public interface FrameworkRepository {
    
   public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
}
