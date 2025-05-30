package com.example.backend.skilllink.repository;

import com.example.backend.skilllink.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobseekerRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}
