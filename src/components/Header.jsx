import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">SafeVoice</h1>
        <nav className="space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Support & Resources</a>
          <a href="#" className="hover:text-blue-600">Community & Awareness</a>
          <a href="#" className="hover:text-blue-600">AI Chatbot</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-700">
            Report Incident
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
