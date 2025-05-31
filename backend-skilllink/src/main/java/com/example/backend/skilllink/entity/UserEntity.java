package com.example.backend.skilllink.entity;

import com.example.backend.skilllink.enums.Role;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Entity
@Getter
@Data
@Table(name = "Registration_skill")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String email;
    private String phone;
    private String password;
    private String location;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Embedded
    private JobSeekerDetails jobSeekerDetails;
    @Embedded
    private CustomerDetails customerDetails;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public JobSeekerDetails getJobSeekerDetails() {
        return jobSeekerDetails;
    }


    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public void setJobSeekerDetails(JobSeekerDetails jobSeekerDetails) {
        this.jobSeekerDetails = jobSeekerDetails;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    @Embeddable
    @Data
    public static class JobSeekerDetails {
        private String skills;
        private String experience;
        private String radius;

        public String getSkills() {
            return skills;
        }

        public void setSkills(String skills) {
            this.skills = skills;
        }

        public String getExperience() {
            return experience;
        }

        public void setExperience(String experience) {
            this.experience = experience;
        }

        public String getRadius() {
            return radius;
        }

        public void setRadius(String radius) {
            this.radius = radius;
        }
    }

    @Embeddable
    @Data
    public static class CustomerDetails {
        private String address;

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }
    }
}
