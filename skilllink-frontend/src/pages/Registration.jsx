import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER",
    location: "",
    jobSeekerDetails: {
      skills: "",
      experience: "",
      radius: ""
    },
    customerDetails: {
      address: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: formData.role,
      location: formData.location,
      ...(formData.role === "JOBSEEKER"
        ? { jobSeekerDetails: formData.jobSeekerDetails }
        : { customerDetails: formData.customerDetails })
    };

    try {
      const res = await axios.post("http://localhost:8080/auth/registration", payload);
      console.log("Registration Success:", res.data);
      if(res.status == 200){
        navigate("/");
        alert("Registered Successfully!");
      }else{
        alert("Register again !");
      }
    } catch (error) {
      console.error(error);
      alert("Registration Failed.");
    }
  };

  return (
    <>
    <Navbar />
    <form
  onSubmit={handleSubmit}
  className="max-w-4xl mx-auto my-10 bg-white p-8 shadow-lg rounded-xl space-y-6"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Register to SkillLink</h2>

  <div className="md:flex md:gap-6">
    <div className="md:w-1/2">
      <label className="block font-semibold">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>

    <div className="md:w-1/2">
      <label className="block font-semibold">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>
  </div>

  <div className="md:flex md:gap-6">
    <div className="md:w-1/2">
      <label className="block font-semibold">Phone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>

    <div className="md:w-1/2">
      <label className="block font-semibold">Location (City, State)</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>
  </div>

  <div className="md:flex md:gap-6">
    <div className="md:w-1/2">
      <label className="block font-semibold">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>

    <div className="md:w-1/2">
      <label className="block font-semibold">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded mt-1"
      />
    </div>
  </div>

  <div>
    <label className="block font-semibold">Role</label>
    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="w-full border p-2 rounded mt-1"
    >
      <option value="CUSTOMER">Customer</option>
      <option value="JOBSEEKER">Job Seeker</option>
    </select>
  </div>

  {/* Job Seeker Fields */}
  {formData.role === "JOBSEEKER" && (
    <div className="space-y-4 border border-blue-200 p-4 rounded">
      <h3 className="font-bold text-blue-700">Job Seeker Details</h3>

      <div className="md:flex md:gap-6">
        <div className="md:w-1/2">
          <label className="block font-semibold">Skills</label>
          <input
            type="text"
            name="jobSeekerDetails.skills"
            value={formData.jobSeekerDetails.skills}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="e.g. Electrician"
          />
        </div>

        <div className="md:w-1/4">
          <label className="block font-semibold">Experience (Years)</label>
          <input
            type="number"
            name="jobSeekerDetails.experience"
            value={formData.jobSeekerDetails.experience}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>

        <div className="md:w-1/4">
          <label className="block font-semibold">Service Radius (KM)</label>
          <input
            type="number"
            name="jobSeekerDetails.radius"
            value={formData.jobSeekerDetails.radius}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          />
        </div>
      </div>
    </div>
  )}

  {/* Customer Address Field */}
  {formData.role === "CUSTOMER" && (
    <div className="space-y-4 border border-green-200 p-4 rounded">
      <h3 className="font-bold text-green-700">Customer Details</h3>
      <div>
        <label className="block font-semibold">Address</label>
        <textarea
          name="customerDetails.address"
          value={formData.customerDetails.address}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
          placeholder="Full address"
        />
      </div>
    </div>
  )}

  <button
    type="submit"
    className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
  >
    Register
  </button>
</form>

    <Footer />
    </>
  );
};

export default RegistrationForm;
