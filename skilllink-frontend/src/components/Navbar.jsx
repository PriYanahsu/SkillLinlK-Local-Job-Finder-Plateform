import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="h-20 w-full bg-gray-800 flex items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-600">SkillLinK</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {['Home', 'About Us', 'Report', 'Update Info'].map((item) => (
            <p key={item} className="text-white font-semibold hover:text-red-400 cursor-pointer">{item}</p>
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
              onClick={handleCloseMenu}
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
    </>
  );
};

export default Navbar;
