package com.transflower.tflcomentor.Backend.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Entity.Layers;
import com.transflower.tflcomentor.Backend.Entity.Runtimes;
import com.transflower.tflcomentor.Backend.Entity.Languages;
import com.transflower.tflcomentor.Backend.Entity.Frameworks;

@Repository
public interface IConceptsRepository {
    
    public List<Concepts> getAllConcepts();
    public List<Runtimes> getAllRuntimes();
    public List<Languages> getAllLanguages(int runtimeId);
    public List<Layers> getAllLayers();
    public List<Frameworks> getAllFrameworks(int languageId);
    public List<Frameworks> getAllFrameworksByLanguageAndLayer(int languageId, int layerId);
    public List<Concepts> getAllConceptsforFramework(String framework);
}
