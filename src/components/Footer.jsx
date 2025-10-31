import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0b1f3a] to-[#122a5a] text-white py-8 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 border-b border-gray-600 pb-6">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-sky-400">SafeVoice</h3>
          <p className="text-gray-300 text-xs leading-relaxed">
            SafeVoice is an AI-powered anonymous platform that helps victims
            of harassment report safely and connect with verified NGOs,
            counselors, and law enforcement — ensuring privacy and empathy.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-2 text-sky-400">Quick Links</h4>
          <ul className="space-y-1 text-gray-300 text-xs">
            <li><a href="#" className="hover:text-sky-300 transition">Report Incident</a></li>
            <li><a href="#" className="hover:text-sky-300 transition">AI Chatbot</a></li>
            <li><a href="#" className="hover:text-sky-300 transition">Resources</a></li>
            <li><a href="#" className="hover:text-sky-300 transition">Community</a></li>
            <li><a href="#" className="hover:text-sky-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Social Links */}
        <div>
          <h4 className="font-semibold text-sm mb-2 text-sky-400">Connect</h4>
          <div className="flex space-x-3 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition"><i className="fab fa-facebook-f text-base"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 hover:scale-110 transition"><i className="fab fa-instagram text-base"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 hover:scale-110 transition"><i className="fab fa-twitter text-base"></i></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-red-500 hover:scale-110 transition"><i className="fab fa-pinterest text-base"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 hover:scale-110 transition"><i className="fab fa-linkedin-in text-base"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-xs mt-5">
        <p>
          © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">SafeVoice</span> — by{" "}
          <span className="font-medium text-white">Team Destiny (PR25-14)</span>
        </p>
        <p className="mt-1 italic">
          Empowering every voice through technology & empathy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
