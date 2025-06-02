package com.example.backend.skilllink.repository;

import com.example.backend.skilllink.entity.UserEntity;
import com.example.backend.skilllink.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobseekerRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUsername(String username);
    List<UserEntity> findByRole(Role role);
}
