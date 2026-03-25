package com.transflower.tflcomentor.Backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Entity.Runtimes;
import com.transflower.tflcomentor.Backend.Entity.Languages;
import com.transflower.tflcomentor.Backend.Entity.Layers;
import com.transflower.tflcomentor.Backend.Entity.Frameworks;

@Service
public interface IConceptsService {
    List<Concepts> getAllConcepts();
    List<Runtimes> getAllRuntimes();
    List<Languages> getAllLanguages(int runtimeId);
    List<Layers> getAllLayers();
    List<Frameworks> getAllFrameworks(int languageId);
    List<Frameworks> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    List<Concepts> getAllConceptsforFramework(String framework);
}
