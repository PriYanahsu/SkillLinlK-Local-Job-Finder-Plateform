import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [curr, setCurr] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = (e) => {
    setCurr(e);
    setOpenNav(true);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="h-20 w-full bg-gray-800 flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-600">SkillLinK</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {['Home', 'About Us', 'Report', 'Update Info'].map((item) => (
            <p
              key={item}
              className="text-white font-semibold hover:text-red-400 cursor-pointer"
              onClick={() => handleCloseMenu(item)}
            >{item}</p>
          ))}
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold"
            onClick={() => navigate("/")}>
            LogOut
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 text-white space-y-4 py-4 px-6 transition-all duration-300">
          {['Home', 'About Us', 'Report', 'Update Info', 'Your Order'].map((item) => (
            <p
              key={item}
              className="font-semibold hover:text-red-400 cursor-pointer"
              onClick={() => handleCloseMenu(item)}
            >
              {item}
            </p>
          ))}
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold"
            onClick={() => navigate("/")}
          >
            LogOut
          </button>
        </div>
      )}

      {openNav && curr === 'About Us' && (
        <div className="flex justify-end  w-full px-4 bg-blue-100">
          <div className="bg-blue-300 h-1/2 w-full text-white  p-6 rounded-lg shadow-lg relative">

            <button
              className="absolute top-3 right-4 text-black font-extrabold text-2xl"
              onClick={() => setOpenNav(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">About Us</h2>
            <p className="mb-4">
              SkillLink is a local job-finding platform designed to connect skilled workers—like electricians, plumbers, carpenters, and more—with real opportunities in their area. Our mission is to simplify the job search process for blue-collar professionals by offering a reliable, easy-to-use app that helps them discover, apply for, and secure local work that matches their expertise. Whether you're looking for urgent help or long-term employment, SkillLink bridges the gap between demand and talent — all within your neighborhood.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-1">GitHub</h3>
              <a
                href="https://github.com/PriYanahsu" // Replace with actual GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-black transition duration-200"
              >
                PriYanahsu
              </a>
            </div>
          </div>
        </div>
      )}

      {openNav && curr === 'Report' && (
        <div className="flex justify-end w-full px-4 bg-blue-100">
          <div className='bg-blue-300 h-1/2 w-full text-white p-6 rounded-lg shadow-lg relative'>
            <button
              className='absolute top-3 right-4 text-black font-extrabold text-2xl'
              onClick={() => setOpenNav(false)}
            >
              ×
            </button>
            <h2 className='text-2xl font-bold mb-2'> Report </h2>
            <p>As soon as you wanted to do any report you make sure you talking about priyanshu data yoyo.</p>
            <p className='mb-4'> Do the linked in message below link and also follow first.
            </p>

            <a href="https://www.linkedin.com/in/priyanshukumar1265/"
              className='underline text-white hover:text-black'>
              Priyanshu Kumar
            </a>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
