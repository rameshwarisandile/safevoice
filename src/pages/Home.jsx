import React from "react";
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaLock,
  FaRobot,
  FaHeart,
} from "react-icons/fa";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="bg-[#f9fbfc] font-inter">
      {/* 🌤️ Hero Section */}
      <section
        className="relative bg-cover bg-center h-[450px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* ✨ Soft Overlay (lighter now) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#0a1a3a]/10 to-[#1a1f4b]/20 backdrop-blur-[1px]"></div>

        {/* Text Section */}
        <div className="relative z-10 max-w-2xl px-4">
          {/* 🌈 Text Color Changed — matches UI */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-[#e0faff] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
            Find Your <span className="text-[#00f5d4]">Safe Space.</span>
            <br />
            We’re Here to <span className="text-[#00bbf9]">Listen & Help</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#f3fcff] mb-6 text-sm md:text-base tracking-wide drop-shadow-md">
            Confidential Support & AI-Powered Tools for a Safer Tomorrow
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-[#0a1a3a] font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all">
              File a Report Securely
            </button>
            <button className="bg-gradient-to-r from-[#f72585] to-[#7209b7] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Connect with AI Chatbot
            </button>
          </div>
        </div>
      </section>

      {/* 🟢 Info Cards Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <FaShieldAlt className="w-12 h-12 text-[#00bbf9] mx-auto mb-4" />,
            title: "Report Incident",
            text: "File safe, confidential reports anonymously with guided steps.",
          },
          {
            icon: <FaHandsHelping className="w-12 h-12 text-[#00bbf9] mx-auto mb-4" />,
            title: "Support & Resources",
            text: "Get access to verified NGOs, helplines, and support networks.",
          },
          {
            icon: <FaUsers className="w-12 h-12 text-[#00bbf9] mx-auto mb-4" />,
            title: "Community Awareness",
            text: "Engage with awareness programs and inspiring survivor stories.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all border-t-4 border-transparent hover:border-[#00f5d4]"
          >
            {card.icon}
            <h3 className="text-lg font-semibold mb-2 text-[#0a1a3a]">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </div>
        ))}
      </section>

      {/* 💙 Why Choose Section */}
      <section className="bg-gradient-to-b from-white to-[#f1f5f9] py-16 text-center">
        <h2 className="text-3xl font-bold text-[#0a1a3a] mb-8">
          Why Choose <span className="text-[#00bbf9]">SafeVoice AI?</span>
        </h2>

        {/* Testimonial */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User"
            className="w-16 h-16 rounded-full border-4 border-[#00f5d4] shadow-md"
          />
          <p className="text-gray-700 italic max-w-md text-sm md:text-base">
            "SafeVoice helped me find my voice. It’s confidential, secure, and truly caring."
          </p>
          <p className="font-semibold text-gray-800 text-sm md:text-base">
            — Anjali R.
          </p>
        </div>

        {/* Why Choose Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <FaLock className="mx-auto w-10 h-10 text-[#00bbf9] mb-3" />,
              title: "Confidential & Secure",
            },
            {
              icon: <FaRobot className="mx-auto w-10 h-10 text-[#00bbf9] mb-3" />,
              title: "AI-Powered Assistance",
            },
            {
              icon: <FaHeart className="mx-auto w-10 h-10 text-[#f72585] mb-3" />,
              title: "Empathetic Community",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg py-8 px-4 hover:-translate-y-2 hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-[#00f5d4]"
            >
              <div className="bg-[#00f5d4]/15 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-3">
                {item.icon}
              </div>
              <p className="font-semibold text-[#0a1a3a]">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
