import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 SafeVoice</p>
        <div className="space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
