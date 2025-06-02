import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

const CustomerNeed = () => {

    const [allData, setAllData] = useState({
        works: "",
        location: "",
        experience: "",
        salary: "", // fixed typo here
        description: ""
    });

    const update = (e) => {
        const { name, value } = e.target;
        setAllData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const uploadData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/customer/upload", allData);
            alert("Form Submitted");
            console.log(response.data);
        } catch (error) {
            alert("Error submitting form");
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='max-w-3xl mx-auto bg-white p-6 mt-10 shadow-lg rounded-lg'>
                <h2 className='text-3xl font-bold text-center mb-4 text-gray-700'>
                    Fill the form according to your need...
                </h2>
                <form className='space-y-4' onSubmit={uploadData}>

                    <div>
                        <label className='block font-semibold'>Which Work</label>
                        <input
                            type="text"
                            name="works"
                            value={allData.works}
                            onChange={update}
                            className='w-full border p-2 rounded mt-1' />
                    </div>

                    <div>
                        <label className='block font-semibold'>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={allData.location}
                            onChange={update}
                            className='w-full border p-2 rounded mt-1' />
                    </div>

                    <div>
                        <label className='block font-semibold'>Experience</label>
                        <input
                            type="number"
                            name="experience"
                            value={allData.experience}
                            onChange={update}
                            className='w-full border p-2 rounded mt-1' />
                    </div>

                    <div>
                        <label className='block font-semibold'>Salary</label>
                        <input
                            type="number"
                            name="salary"
                            value={allData.salary}
                            onChange={update}
                            className='w-full border p-2 rounded mt-1' />
                    </div>

                    <div>
                        <label className='block font-semibold'>Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            value={allData.description}
                            onChange={update}
                            className='w-full border rounded p-2 mt-1'></textarea>
                    </div>

                    <button type="submit" className='w-full bg-blue-600 p-2 rounded text-white font-semibold hover:bg-blue-700'>
                        Post it
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default CustomerNeed;
