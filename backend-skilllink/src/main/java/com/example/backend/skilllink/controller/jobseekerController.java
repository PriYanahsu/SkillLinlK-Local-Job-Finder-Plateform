package com.example.backend.skilllink.controller;

import com.example.backend.skilllink.entity.UserEntity;
import com.example.backend.skilllink.entity.UserLogin;
import com.example.backend.skilllink.repository.JobseekerRepo;
import com.example.backend.skilllink.enums.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class jobseekerController {

    @Autowired
    private JobseekerRepo repoJobseeker;

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody UserEntity userDTO) {
        UserEntity user = new UserEntity();
        user.setId(userDTO.getId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPhone(userDTO.getPhone());
        user.setPassword(userDTO.getPassword());
        user.setLocation(userDTO.getLocation());
        user.setRole(userDTO.getRole());

        if (userDTO.getRole() == Role.JOBSEEKER && userDTO.getJobSeekerDetails() != null) {
            if (user.getJobSeekerDetails() == null) {
                user.setJobSeekerDetails(new UserEntity.JobSeekerDetails());
            }

            user.getJobSeekerDetails().setSkills(userDTO.getJobSeekerDetails().getSkills());
            user.getJobSeekerDetails().setExperience(userDTO.getJobSeekerDetails().getExperience());
            user.getJobSeekerDetails().setRadius(userDTO.getJobSeekerDetails().getRadius());
        }

        if (userDTO.getRole() == Role.CUSTOMER && userDTO.getCustomerDetails() != null) {
            if (user.getCustomerDetails() == null) {
                user.setCustomerDetails(new UserEntity.CustomerDetails());
            }
            user.getCustomerDetails().setAddress(userDTO.getCustomerDetails().getAddress());
        }

        repoJobseeker.save(user);
        return ResponseEntity.ok("Successfully registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(UserLogin user){
        Optional<UserEntity> fetchUser = repoJobseeker.findByEmail(user.getEmail());
        if(fetchUser.isEmpty()) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not Found");

        UserEntity actualUser = fetchUser.get();
        if(!actualUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong Password");
        }

        if(!actualUser.getRole().equals(user.getRole())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong role");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Successfully Login");
        response.put("user", actualUser); // or better, return a DTO without password

        return ResponseEntity.ok(response);

    }
}
