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
        <div className="flex justify-end  w-full px-4 mt-4 bg-gray-100">
          <div className="bg-blue-300 h-screen md:h-1/2 md:w-1/2 text-white w-full p-6 rounded-lg shadow-lg relative">

            <button
              className="absolute top-3 right-4 text-black font-extrabold text-2xl"
              onClick={() => setOpenNav(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p className="mb-4">
              Hi, I'm Priyanshu Singh — a passionate full-stack developer focused on building modern web applications using Spring Boot and React. I enjoy solving complex problems and crafting seamless user experiences.
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

    </>
  );
};

export default Navbar;
