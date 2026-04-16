package com.transflower.tflcomentor.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.Entity.Concepts;

@Repository
public interface IConceptsRepository extends JpaRepository<Concepts, Long> {}
