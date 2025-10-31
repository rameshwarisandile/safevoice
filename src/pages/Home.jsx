import React from "react";
import { MessageSquare, Book, Users, Lock, Cpu, Heart } from "lucide-react";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Safe Space. We’re Here to Listen & Help
          </h1>
          <p className="text-gray-200 mb-6">
            Confidential Support & AI-Powered Tools for a Safer Tomorrow
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              File a Report Securely
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
              Connect with AI Chatbot
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <MessageSquare className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Report Incident</h3>
          <p className="text-gray-600">
            Step-by-step guidance for anonymous reporting
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <Book className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Support & Resources</h3>
          <p className="text-gray-600">
            Access helplines, NGOs & safety resources
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Community Awareness</h3>
          <p className="text-gray-600">
            Read survivor stories & safety blogs
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-10 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-8">
          Why Choose SafeVoice AI?
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User"
            className="w-14 h-14 rounded-full border-2 border-blue-400"
          />
          <p className="text-gray-700 italic max-w-md">
            "SafeVoice helped me find my voice. It’s confidential, secure, and
            truly caring."
          </p>
          <p className="font-semibold text-gray-800">— Anjali R.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <Lock className="mx-auto w-8 h-8 text-blue-500 mb-2" />
            <p className="font-semibold">Confidential & Secure</p>
          </div>
          <div>
            <Cpu className="mx-auto w-8 h-8 text-blue-500 mb-2" />
            <p className="font-semibold">AI-Powered Assistance</p>
          </div>
          <div>
            <Heart className="mx-auto w-8 h-8 text-blue-500 mb-2" />
            <p className="font-semibold">Empathetic Community</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
