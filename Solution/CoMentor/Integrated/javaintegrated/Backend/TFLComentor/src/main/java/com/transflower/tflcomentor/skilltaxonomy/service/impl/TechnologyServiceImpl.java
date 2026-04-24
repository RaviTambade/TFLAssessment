package com.transflower.tflcomentor.skilltaxonomy.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
import com.transflower.tflcomentor.skilltaxonomy.entity.Concept;
import com.transflower.tflcomentor.skilltaxonomy.entity.Framework;
import com.transflower.tflcomentor.skilltaxonomy.entity.Layer;
import com.transflower.tflcomentor.skilltaxonomy.service.TechnologyService;

@Service
public class TechnologyServiceImpl implements TechnologyService {
    
    private final TechnologyRepository technologyRepository;

    public TechnologyServiceImpl(TechnologyRepository technologyRepository) {
        this.technologyRepository = technologyRepository;
    }

    @Override
    public List<Concept> getAllConcepts(){
        return technologyRepository.getAllConcepts();
    }

    @Override
    public Concept getConceptById(Long id){
        return technologyRepository.getConceptById(id);
    }

    @Override
    public Concept addConcept(Concept concept){
        return technologyRepository.addConcept(concept);
    }

    @Override
    public List<Concept> getAllConceptsforFramework(int framework){
        return technologyRepository.getAllConceptsforFramework(framework);
    }

    @Override
    public boolean mapConceptToFramework(int conceptId, int frameworkId){
        return technologyRepository.mapConceptToFramework(conceptId, frameworkId);
    }

    @Override
    public List<Framework> getAllFrameworks(){
        return technologyRepository.getAllFrameworks();
    }

    @Override
    public Framework getFrameworkById(Long id){
        return technologyRepository.getFrameworkById(id);
    }

    @Override
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId){
        return technologyRepository.getAllFrameworksByLanguageAndLayer(languageId, layerId);
    }

    @Override
    public List<Framework> getAllFrameworks(int languageId){
        return technologyRepository.getAllFrameworks(languageId);
    }

    @Override
    public List<Layer> getAllLayers(){
        return technologyRepository.getAllLayers();
    }

    @Override
    public List<Runtime> getAllRuntimes(){
        return technologyRepository.getAllRuntimes();
    }

    @Override
    public Runtime getRuntimeById(Long id){
        return technologyRepository.getRuntimeById(id);
    }

    @Override
    public List<RuntimeSummaryResponseDto> getAllRuntimeSummaries(){
        return technologyRepository.getAllRuntimeSummaries();
    }

}
