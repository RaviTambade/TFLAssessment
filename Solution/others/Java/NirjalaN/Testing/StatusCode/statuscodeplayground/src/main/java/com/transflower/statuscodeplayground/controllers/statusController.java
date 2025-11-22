package com.transflower.statuscodeplayground.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/status")
public class statusController {

    @GetMapping("/ok")
    public ResponseEntity<Map<String, String>> ok() {
        return ResponseEntity.ok(Map.of("message", "Everything is fine (200 OK)"));
    }

    @PostMapping("/created")
    public ResponseEntity<Map<String, String>> created() {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("message", "Resource created successfully (201 Created)"));
    }

    @GetMapping("/badrequest")
    public ResponseEntity<Map<String, String>> badRequest() {
        return ResponseEntity
                .badRequest()
                .body(Map.of("error", "Invalid request data (400 Bad Request)"));
    }

    @GetMapping("/unauthorized")
    public ResponseEntity<Map<String, String>> unauthorized() {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("error", "Please login first (401 Unauthorized)"));
    }

    @GetMapping("/forbidden")
    public ResponseEntity<Map<String, String>> forbidden() {
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(Map.of("error", "You are not allowed here (403 Forbidden)"));
    }

    @GetMapping("/notfound")
    public ResponseEntity<Map<String, String>> notFound() {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(Map.of("error", "Resource not found (404 Not Found)"));
    }

    @GetMapping("/servererror")
    public ResponseEntity<Map<String, String>> serverError() {
        try {
            int result = 10 / 0; 
            return ResponseEntity.ok(Map.of("result", String.valueOf(result)));
        } catch (Exception ex) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", ex.getMessage()));
        }
    }

    @GetMapping("/nocontent")
    public ResponseEntity<Void> noContent() {
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/redirect")
    public ResponseEntity<Void> redirect() {
        return ResponseEntity.status(HttpStatus.FOUND)
                .header("Location", "/api/status/ok")
                .build();
    }
}