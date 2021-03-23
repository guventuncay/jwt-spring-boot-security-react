package com.jwt.jwtwithroles.controller;

import com.jwt.jwtwithroles.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ResourceController {

    private final UserRepository userRepository;

    public ResourceController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/hello-user")
    public ResponseEntity<?> getUser() {
        return ResponseEntity.ok(this.userRepository.findUsersByRole("ROLE_USER"));
    }

    @GetMapping("/hello-admin")
    public ResponseEntity<?> getAdmin() {
        return ResponseEntity.ok(this.userRepository.findUsersByRole("ROLE_ADMIN"));
    }

}
