import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

const ServiceAvailable = () => {
    const { serviceName } = useParams();
    const [datas, setDatas] = useState([]);
    const hasFetched = useRef(false);

    useEffect(() => {

        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auth/jobseekers');
                setDatas(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchServices();
    }, []);

    // Filter data dynamically by skill
    const serviceList = datas.filter((jobseeker) =>
        jobseeker.jobSeekerDetails?.skills?.toLowerCase().includes(serviceName.toLowerCase())
    );


    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 p-10 px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 pb-4">
                    List of {serviceName} services currently available...
                </h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Explore skilled professionals in your area.
                </p>
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    {serviceList.length > 0 ? (
                        serviceList.map((ser) => (
                            <div
                                key={ser.id}
                                className="bg-white p-6 rounded-lg mb-4 shadow-2xl hover:shadow-md transition duration-300"
                            >
                                <h1 className="text-2xl text-gray-700 font-bold mb-2">{ser.username}</h1>

                                <p className="text-gray-800 font-semibold mb-1">
                                    City: {ser.location || 'N/A'}
                                </p> 

                                <p className="text-gray-700 font-semibold mb-1">
                                    Skills: {ser.jobSeekerDetails?.skills || 'Not specified'}
                                </p>

                                <p className="text-gray-700 font-semibold mb-1">
                                    Experience: {ser.jobSeekerDetails?.experience || 'N/A'} years
                                </p>

                                <p className="text-gray-700 font-semibold mb-1">
                                    Radius: {ser.jobSeekerDetails?.radius || 'N/A'} km
                                </p>

                                <p className="text-gray-700 font-semibold mb-2">
                                    Rating: {ser.rating || 'Not rated yet'}
                                </p>

                                <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800">
                                    Book now
                                </button>
                            </div>

                        ))
                    ) : (
                        <p className="text-2xl font-semibold text-gray-700 text-center col-span-3">
                            No {serviceName} services are currently available.
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServiceAvailable;
