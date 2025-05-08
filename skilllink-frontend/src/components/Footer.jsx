import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
        {/* Column 1 */}
        <div className="mb-6 md:mb-0">
          <p className="text-2xl font-bold font-serif mb-2">Home</p>
          <p>: Your Info</p>
          <p>: Email</p>
          <p>: Sectors</p>
        </div>

        {/* Column 2 */}
        <div className="mb-6 md:mb-0">
          <p className="text-2xl font-bold font-serif mb-2">Service</p>
          <p>: Programs</p>
          <p>: Workings</p>
          <p>: DataWork</p>
        </div>

        {/* Column 3 */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-red-600 mb-3">SkillLinK</h1>
          <div className="flex justify-center md:justify-start space-x-3">
            <div className="border border-white h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
              <span className="text-white font-bold">f</span>
            </div>
            <div className="border border-white h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
              <span className="text-white font-bold">@</span>
            </div>
            <div className="border border-white h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
              <span className="text-white font-bold">L</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
