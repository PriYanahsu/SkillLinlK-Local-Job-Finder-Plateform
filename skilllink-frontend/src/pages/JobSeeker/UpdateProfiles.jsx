import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UpdateProfiles = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    radius: "",
    address: ""
  });

  useEffect(() => {
    // Fetch current profile data on mount
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/jobseeker/profile"); // Replace with actual API
        const data = res.data;

        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          location: data.location || "",
          skills: data.jobSeekerDetails?.skills || "",
          experience: data.jobSeekerDetails?.experience || "",
          radius: data.jobSeekerDetails?.radius || "",
          address: data.customerDetails?.address || ""
        });
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      jobSeekerDetails: {
        skills: formData.skills,
        experience: formData.experience,
        radius: formData.radius
      },
      customerDetails: {
        address: formData.address
      }
    };

    try {
      const res = await axios.put("/api/jobseeker/profile", updatedData); // Replace with actual API
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-6 mt-10 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Update Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-semibold">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="block font-semibold">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="block font-semibold">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <div>
            <label className="block font-semibold">Skills</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold">Experience (years)</label>
              <input type="number" name="experience" value={formData.experience} onChange={handleChange}
                className="w-full border p-2 rounded mt-1" />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold">Service Radius (km)</label>
              <input type="number" name="radius" value={formData.radius} onChange={handleChange}
                className="w-full border p-2 rounded mt-1" />
            </div>
          </div>

          <div>
            <label className="block font-semibold">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange}
              className="w-full border p-2 rounded mt-1" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfiles;
