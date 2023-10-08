package com.lukeyang.whatsfor.controllers;

import com.lukeyang.whatsfor.interfaces.AuthService;
import com.lukeyang.whatsfor.models.User;
import com.lukeyang.whatsfor.models.UserRegistrationDTO;
import com.lukeyang.whatsfor.services.AuthServiceImpl;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/")
public class AuthController {
    private final AuthServiceImpl authService;

    public AuthController(AuthServiceImpl authService) {
        this.authService = authService;
    }

    @GetMapping("/")
    public ResponseEntity<?> printStatus() {
        return ResponseEntity.ok("Api activated");
    }

    @PostMapping("/register/save")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDTO userDTO, BindingResult result) {
        User userExists = authService.findUser(userDTO.getUsername());
        if (userExists != null && userExists.getEmail() != null && !userExists.getEmail().isEmpty()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error: Username already exists");
        }
        User userEmailExists = authService.findUserByEmail(userDTO.getEmail());
        if (userEmailExists != null && userEmailExists.getEmail() != null && !userEmailExists.getEmail().isEmpty()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error: Email already exists");
        }

        authService.saveUser(userDTO);
        return ResponseEntity.ok("User Registration Successful");
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserRegistrationDTO userDTO) {
        if (userDTO.getEmail().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Email field blank");
        } else if (userDTO.getPassword().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Password field blank");
        }

        User userExists = authService.findUserByEmail(userDTO.getEmail());
        if (userExists == null || userExists.getEmail() == null || userExists.getEmail().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: User Not Found");
        }
        authService.login(userDTO);
        return ResponseEntity.ok("User Login Successful");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser() {

        return ResponseEntity.ok("User Logout Successful");
    }
}
