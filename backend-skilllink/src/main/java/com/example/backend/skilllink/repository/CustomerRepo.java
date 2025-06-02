package com.example.backend.skilllink.repository;

import com.example.backend.skilllink.entity.CustomerPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<CustomerPost, Long> {
}
