// package com.transflower.tflassessment.controllers;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
// import java.util.concurrent.CompletableFuture;
// import com.transflower.tflassessment.entities.User;
// import com.transflower.tflassessment.services.AuthService;

// @RestController
// public class AuthController {
//     @Autowired
//     private AuthService svc;

//     @PostMapping("/login")
//         public CompletableFuture<User> getUserWithRolesByEmail(@RequestParam String email, @RequestParam String password){
//         return svc.getUserWithRolesByEmail(email,password);
//     }

// }
