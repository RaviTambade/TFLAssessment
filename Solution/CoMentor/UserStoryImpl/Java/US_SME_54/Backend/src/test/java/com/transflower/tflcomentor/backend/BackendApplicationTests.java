package com.transflower.tflcomentor.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = BackendApplication.class) 
class BackendApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("Spring Boot context loaded successfully!");
    }
}