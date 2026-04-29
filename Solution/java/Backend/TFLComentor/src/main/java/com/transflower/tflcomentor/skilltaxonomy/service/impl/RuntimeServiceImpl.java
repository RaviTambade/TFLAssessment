// package com.transflower.tflcomentor.skilltaxonomy.service.impl;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeDetailsResponseDto;
// import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeResponseDTO;
// import com.transflower.tflcomentor.skilltaxonomy.dto.response.RuntimeSummaryResponseDto;
// import com.transflower.tflcomentor.skilltaxonomy.entity.Runtime;
// import com.transflower.tflcomentor.skilltaxonomy.repository.RuntimeRepository;
// import com.transflower.tflcomentor.skilltaxonomy.service.RuntimeService;

// @Service
// public class RuntimeServiceImpl implements RuntimeService {

//     @Autowired
//     private RuntimeRepository repository;

  
//     // public RuntimesServiceImlp(RuntimesRepository repository) {
//     //     this.repository = repository;
//     // }

//     @Override
//     public List<RuntimeResponseDTO> getRuntimes() {
//         return repository.getRuntimes();
//     }

//     @Override
//     public boolean addRuntime(RuntimeResponseDTO runtimedto) {
//         return repository.addRuntime(runtimedto);
//     }

//     @Override
//     public List<RuntimeSummaryResponseDto> getAllRuntimeSummaries() {
//         return repository.findAllRuntimeSummaries();
//     }

//     @Override
//     public List<Runtime> getAllRuntimes() {
//         return repository.getAllRuntimes();
//     }

//     @Override
//     public RuntimeDetailsResponseDto getRuntimeDetails(Long runtimeId) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getRuntimeDetails'");
//     }

       
    
//     // @Override
//     // public RuntimeDetailsResponseDto getRuntimeDetails(Long runtimeId) {
//     //     Runtime runtime = repository.findById(runtimeId)
//     //             .orElseThrow(() -> new ResponseStatusException(
//     //                     HttpStatus.NOT_FOUND, "Runtime not found for id " + runtimeId));

//     //     List<RuntimeAssignmentResponseDto> assignments = repository.findAllRuntimeSummaries()(runtimeId);

//     //     return new RuntimeDetailsResponseDto(
//     //             (long) runtime.getId(),
//     //             normalizeRuntimeName(runtime.getRuntimeName()),
//     //             (long) assignments.size(),
//     //             assignments);
//     // }

//     // private String normalizeRuntimeName(String runtimeName) {
//     //     if (runtimeName == null || runtimeName.isBlank()) {
//     //         return "Not available";
//     //     }
//     //     return runtimeName.trim();
//     // }
// }
