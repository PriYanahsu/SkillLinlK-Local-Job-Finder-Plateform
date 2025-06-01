package com.example.backend.skilllink.controller;

import com.example.backend.skilllink.entity.UserEntity;
import com.example.backend.skilllink.entity.UserLogin;
import com.example.backend.skilllink.repository.JobseekerRepo;
import com.example.backend.skilllink.enums.Role;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import java.util.HashMap;
import java.util.List;
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

        Optional<UserEntity> usernameData = repoJobseeker.findByEmail(userDTO.getEmail());
        if(usernameData.isPresent()) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Mail already Present");

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
    public ResponseEntity<?> login(@RequestBody UserLogin user){
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

    @GetMapping("/jobseekers")
    public List<UserEntity> findAllData(){
        List<UserEntity> current = repoJobseeker.findByRole(Role.JOBSEEKER);
        System.out.println(current.toString());
        return current;
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateData(@RequestBody UserEntity user){
        Optional<UserEntity> curr = repoJobseeker.findByEmail(user.getEmail());
        if(curr.isPresent()){
            UserEntity newUser = curr.get();
            newUser.setUsername(user.getUsername());
            newUser.setEmail(user.getEmail());
            newUser.setPhone(user.getPhone());
            newUser.setLocation(user.getLocation());

            newUser.getJobSeekerDetails().setSkills(user.getJobSeekerDetails().getSkills());
            newUser.getJobSeekerDetails().setExperience(user.getJobSeekerDetails().getExperience());
            newUser.getJobSeekerDetails().setRadius(user.getJobSeekerDetails().getRadius());

            repoJobseeker.save(newUser);
            return ResponseEntity.ok().body("Update User");
        }
        else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Check the mail");
    }
}
