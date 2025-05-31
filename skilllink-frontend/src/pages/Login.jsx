import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "CUSTOMER", // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8080/auth/login", credentials);

    alert("Login successful!");

    const user = response.data.user;

    if (response.status === 200) {
      if (user.role === "ADMIN") navigate("/admin/dashboard");
      else if (user.role === "JOBSEEKER") navigate("/jobseeker-home");
      else navigate("/customer-home");
    }
  } catch (err) {
    console.error(err);
    alert("Invalid credentials.");
  }
};


  return (
    <>
      <Navbar />
      <div className="min-h-130 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="block font-medium">Select Role</label>
            <select
              name="role"
              value={credentials.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="JOBSEEKER">Job Seeker</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <p className="ml-32 font-bold text-blue-700 hover:text-blue-800 hover:cursor-pointer"><span className="text-red-700" onClick={() => navigate('/registration')}>Registration First</span></p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
