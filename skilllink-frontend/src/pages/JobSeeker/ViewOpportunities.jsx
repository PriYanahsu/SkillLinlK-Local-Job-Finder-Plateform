import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ViewOpportunities = () => {
  const jobs = [
    {
      title: "Electrician Needed",
      location: "Lucknow, Uttar Pradesh",
      experience: "2+ years",
      salary: "₹15,000 - ₹20,000 / month",
      description: "Looking for a certified electrician for residential wiring projects."
    },
    {
      title: "Plumber for Maintenance Work",
      location: "Kanpur, Uttar Pradesh",
      experience: "1+ years",
      salary: "₹12,000 - ₹18,000 / month",
      description: "Part-time plumber needed for pipe repairs and maintenance tasks."
    },
    {
      title: "House Painter Required",
      location: "Varanasi, Uttar Pradesh",
      experience: "3+ years",
      salary: "₹14,000 - ₹22,000 / project",
      description: "Experienced house painter for interior and exterior painting projects."
    }
    // Add more job listings here or fetch dynamically
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Available Job Opportunities
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Browse through current job openings that match your skill set and location.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-gray-600 mt-2"><strong>Location:</strong> {job.location}</p>
                <p className="text-gray-600"><strong>Experience:</strong> {job.experience}</p>
                <p className="text-gray-600"><strong>Salary:</strong> {job.salary}</p>
                <p className="text-gray-600 mt-2">{job.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewOpportunities;
