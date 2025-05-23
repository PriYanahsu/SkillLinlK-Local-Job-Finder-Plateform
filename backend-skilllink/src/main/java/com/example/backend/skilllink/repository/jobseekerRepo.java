package com.example.backend.skilllink.repository;

import com.example.backend.skilllink.entity.JobseekerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface jobseekerRepo extends JpaRepository<JobseekerEntity, String> {
}
