import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const TrainingResources = () => {
  const resources = [
    {
      title: "Technical Skill Courses",
      description:
        "Learn in-demand technical skills like electrical work, plumbing, carpentry, and more through interactive online courses.",
      link: "https://www.coursera.org",
      platform: "Coursera"
    },
    {
      title: "Soft Skills Training",
      description:
        "Improve your communication, teamwork, and leadership abilities — essential for any work environment.",
      link: "https://www.edx.org",
      platform: "edX"
    },
    {
      title: "Resume & Interview Prep",
      description:
        "Access free guides and practice sessions to help you create strong resumes and prepare for interviews.",
      link: "https://www.linkedin.com/learning/",
      platform: "LinkedIn Learning"
    },
    {
      title: "Skill Certification",
      description:
        "Earn certificates to validate your job skills, making you more visible to employers.",
      link: "https://skillindia.nsdcindia.org/",
      platform: "Skill India"
    },
    {
      title: "Local Training Centers",
      description:
        "Find government-recognized training centers near you for in-person classes and workshops.",
      link: "https://www.nationalskillsnetwork.in/",
      platform: "National Skills Network"
    }
  ];


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Training Resources for Job Seekers
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Upgrade your skills and become job-ready with these trusted platforms and programs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {resource.title}
                </h2>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Visit {resource.platform}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrainingResources;
