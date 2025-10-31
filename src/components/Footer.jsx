import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a1a3a] to-[#1a1f4b] text-white py-6 px-6 shadow-inner font-inter">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-b border-white/10 pb-6">
        {/* 🌐 About Section */}
        <div>
          <h3 className="text-lg font-extrabold mb-2">
            <span className="text-[#00f5d4]">Safe</span>
            <span className="text-white">Voice</span>
          </h3>
          <p className="text-gray-300 text-xs leading-relaxed">
            SafeVoice is an AI-powered anonymous reporting platform that empowers
            victims of harassment to report safely and connect with verified NGOs,
            counselors, and law enforcement — ensuring empathy, trust, and privacy.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="font-semibold text-sm mb-2 text-[#00f5d4] uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-1 text-gray-300 text-xs">
            {[
              "Report Incident",
              "AI Chatbot",
              "Resources",
              "Community",
              "Privacy Policy",
            ].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative group hover:text-[#00f5d4] transition-all duration-300"
                >
                  {link}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#00f5d4] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🤝 Social Links */}
        <div>
          <h4 className="font-semibold text-sm mb-2 text-[#00f5d4] uppercase tracking-wide">
            Connect With Us
          </h4>
          <div className="flex space-x-3 text-gray-300 text-base">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877f2] hover:scale-110 transition-transform"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E1306C] hover:scale-110 transition-transform"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1DA1F2] hover:scale-110 transition-transform"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E60023] hover:scale-110 transition-transform"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0A66C2] hover:scale-110 transition-transform"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🩵 Bottom Bar */}
      <div className="text-center text-gray-400 text-[11px] mt-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00f5d4] font-semibold">SafeVoice</span> — by{" "}
          <span className="font-semibold text-[#9d4edd] hover:text-[#f72585] transition-colors">
            Team Destiny (PR25-14)
          </span>
        </p>
        <p className="mt-1 italic text-gray-400/90">
          Empowering every voice through technology & compassion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
