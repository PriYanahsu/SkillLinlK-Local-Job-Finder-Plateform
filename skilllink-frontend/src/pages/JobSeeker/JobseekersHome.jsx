import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const JobseekersHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Welcome to SkillLink, Job Seeker!
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Explore opportunities to connect with customers looking for skilled professionals like you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card for "Update Profile" */}
            <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Update Your Profile</h2>
              <p className="text-gray-600 mt-2">Ensure your skills and experience are up to date to get more opportunities.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate('/update-jobseeker-profile')}>
                Update Profile
              </button>
            </div>

            {/* Card for "View Opportunities" */}
            <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800">View Opportunities</h2>
              <p className="text-gray-600 mt-2">Browse through job offers that match your skills and location.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate('/view-opportunities')}>
                Browse Jobs
              </button>
            </div>

            {/* Card for "Training Resources" */}
            <div className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800">Training Resources</h2>
              <p className="text-gray-600 mt-2">Improve your skills with our training resources to stay ahead in your field.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => navigate('/training-resources')}>
                Access Resources
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobseekersHome;
