package com.example.backend.skilllink.controller;

import com.example.backend.skilllink.entity.CustomerPost;
import com.example.backend.skilllink.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    private CustomerRepo repoCustomer;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadData (@RequestBody  CustomerPost user){
        repoCustomer.save(user);
        return ResponseEntity.ok("SuccessFully saved");
    }

    @GetMapping("/getData")
    public List<CustomerPost> getData(){
        List<CustomerPost> curr = repoCustomer.findAll();
        return curr;
    }
}
