import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'

const ServiceAvailable = () => {
    const {serviceName} = useParams();

    const services = {
        plumber : [
            {
                id:1,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            },
            {
                id:2,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            },
            {
                id:2,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            }
        ],
        electrician : [
            {
                id:1,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            },
            {
                id:2,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            },
            {
                id:3,
                name : "Priyanshu",
                city : "Lucknow",
                Rating : "5 star rating yoyo"
            }
        ]
    };

    const serviceList = services[serviceName];
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-gray-100 p-10 px-4'>
                <h1 className='text-4xl font-bold text-center text-gray-800 pb-4'>List of {serviceName} service currently available...</h1>
                <p className='text-lg text-gray-700 text-center mb-6'> Explore skilled professionals in your area.</p>
                <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8'>
                {serviceList ? (
                    serviceList.map((ser) => (
                        <div
                        key={ser.id}
                        className='bg-white p-6 rounded-lg mb-4 shadow-2xl hover:shadow-md transition duration-300'>
                            <h1 className='text-2xl font-bold'>{ser.name}</h1>
                            <p className='text-gray-800 '>City: {ser.city}</p>
                            <p className='text-gray-700 mb-1'>Rating: {ser.Rating}</p>
                            <button className='px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800'>
                                Book know
                            </button>
                        </div>
                    ))
                ):( <p className='text-4xl font-bold text-gray-700 text-center mt-25'>{serviceName.charAt(0).toUpperCase() + serviceName.slice(1)} service is currently not available. </p>
              )}
            </div>
            </div>
            <Footer />
        </>
    )
}

export default ServiceAvailable
