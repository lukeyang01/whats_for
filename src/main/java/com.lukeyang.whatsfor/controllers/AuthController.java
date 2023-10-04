package com.lukeyang.whatsfor.controllers;

import com.lukeyang.whatsfor.models.UserRegistrationDTO;
import com.lukeyang.whatsfor.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @GetMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDTO userDTO) {
        authService.register(userDTO);
        return ResponseEntity.ok("User Registration Successful");
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser() {

        return ResponseEntity.ok("User Login Successful");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser() {

        return ResponseEntity.ok("User Logout Successful");
    }
}
