package com.transflower.tflcomentor.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.entity.Concept;

@Repository
public interface IConceptsRepository extends JpaRepository<Concept, Long> {}
