package com.example.backend.skilllink.controller;

import com.example.backend.skilllink.entity.JobseekerEntity;
import com.example.backend.skilllink.repository.jobseekerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/jobseeker")
@CrossOrigin("*")
public class jobseekerController {

    @Autowired
    private jobseekerRepo repoJobseeker;

    @PostMapping
    public String registration(JobseekerEntity user){
        repoJobseeker.save(user);
        return "Resistered";
    }
}
