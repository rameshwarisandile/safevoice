import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "src/pages/Home.jsx" },
    { name: "Support & Resources", path: "src/pages/Support.jsx" },
    { name: "Community & Awareness", path: "src/pages/Community.jsx" },
    { name: "AI Chatbot", path: "src/pages/Chatbot.jsx" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#0a1a3a] to-[#1a1f4b] text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] p-2 rounded-lg shadow-md hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-[#0b1f3a]" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-[#00f5d4]">Safe</span>
            <span className="text-white">Voice</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold relative">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `relative pb-2 transition-all duration-300 ${
                  isActive
                    ? "text-[#00f5d4]"
                    : "text-gray-200 hover:text-[#00bbf9]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#00f5d4]"
                        : "w-0 group-hover:w-full bg-[#00bbf9]"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Report Button */}
        <button className="hidden md:block bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] hover:from-[#00bbf9] hover:to-[#00f5d4] text-[#0b1f3a] font-semibold px-5 py-2 rounded-md shadow-lg transition-all">
          Report Incident
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <i
            className={`fas ${
              menuOpen ? "fa-times" : "fa-bars"
            } text-xl transition-all`}
          ></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1a3a] border-t border-gray-700 flex flex-col space-y-3 py-3 px-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "text-[#00f5d4] font-semibold"
                    : "text-gray-300 hover:text-[#00bbf9]"
                } transition duration-300`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Report Button */}
          <button className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] hover:from-[#00bbf9] hover:to-[#00f5d4] text-[#0b1f3a] font-semibold px-4 py-2 rounded-md shadow-md transition-all">
            Report Incident
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
