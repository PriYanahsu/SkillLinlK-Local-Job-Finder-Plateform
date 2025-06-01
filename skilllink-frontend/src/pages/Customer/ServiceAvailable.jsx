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
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
                    {serviceList.length > 0 ? (
                        serviceList.map((ser) => (
                            <div
                                key={ser.id}
                                className="bg-white p-4 rounded-lg mb-4 shadow-2xl hover:shadow-md transition duration-300"
                            >
                                <div className="flex items-start p-4 bg-white">
                                    {/* Content on the Left */}
                                    <div className="flex-grow">
                                        <h1 className="text-2xl text-gray-700 font-bold mb-2">{ser.username}</h1>

                                        <p className="text-gray-700  mt-2">
                                            <strong>City: </strong> {ser.location || 'N/A'}
                                        </p>

                                        <p className="text-gray-700">
                                           <strong>Skills: </strong> {ser.jobSeekerDetails?.skills || 'Not specified'}
                                        </p>

                                        <p className="text-gray-700">
                                            <strong>Experience: </strong> {ser.jobSeekerDetails?.experience || 'N/A'} years
                                        </p>

                                        <p className="text-gray-700">
                                            <strong>Radius: </strong> {ser.jobSeekerDetails?.radius || 'N/A'} km
                                        </p>

                                        <p className="text-gray-700">
                                            <strong>Rating: </strong>{ser.rating || 'Not rated yet'}
                                        </p>

                                        <button className="px-4 py-2 mt-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800">
                                            Book now
                                        </button>
                                    </div>

                                    {/* Image on the Right */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="https://via.placeholder.com/100" // Replace with your image URL
                                            alt=""
                                            className="w-30 h-30 rounded-xl bg-amber-950 object-cover"
                                        />
                                    </div>
                                </div>

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
