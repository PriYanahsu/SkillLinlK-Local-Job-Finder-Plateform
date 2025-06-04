import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Electrician",
    description: "Certified electricians for household and commercial needs.",
  },
  {
    title: "Plumber",
    description: "Experienced plumbers to fix leaks, pipes, and more.",
  },
  {
    title: "Carpenter",
    description: "Furniture, fittings, and custom woodwork.",
  },
  {
    title: "Mechanic",
    description: "Vehicle servicing, breakdown assistance & more.",
  },
  {
    title: "Painter",
    description: "Interior & exterior painting by skilled professionals.",
  },
  {
    title: "AC Technician",
    description: "Installation, repair & maintenance of air conditioners.",
  },
];

const CustomerHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to SkillLink, Customer!</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Browse and hire skilled workers based on your local needs.
          </p>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className='bg-white p-6  rounded-lg shadow hover:shadow-lg transition duration-300'>
              <h2 className="text-xl font-semibold text-gray-800">Post Jobs for others</h2>
              <p className='text-gray-800 mt-2'>Post the jpb for others so that they can aaply for the job that are available</p>

              <button className='p-2 bg-blue-600 text-white rounded mt-3 hover:bg-blue-700'
              onClick={()=>navigate('/customer-need')}>Fill Form</button>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => navigate(`/service/${service.title.toLowerCase()}`)}>
                  View {service.title}s
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

export default CustomerHome;
