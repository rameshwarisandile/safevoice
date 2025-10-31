import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Find Your Safe Space. <br /> We’re Here to Listen & Help
      </h2>
      <p className="text-gray-600 mb-8">
        Confidential Support & AI-Powered Tools for a Safer Tomorrow
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
          File a Report Securely
        </button>
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          Connect with AI Chatbot
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
