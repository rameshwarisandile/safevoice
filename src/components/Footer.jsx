<footer className="bg-primary text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-gray-600 pb-6">
    {/* Column 1 - About */}
    <div>
      <h3 className="text-xl font-bold mb-3 text-accent">SafeVoice</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        SafeVoice is an anonymous AI-powered support portal helping victims
        of harassment report safely, connect with NGOs, and get real-time
        legal and emotional support. Empowering every voice to be heard.
      </p>
    </div>

    {/* Column 2 - Quick Links */}
    <div>
      <h4 className="font-semibold mb-3 text-accent">Quick Links</h4>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><a href="#" className="hover:text-white transition">Report Incident</a></li>
        <li><a href="#" className="hover:text-white transition">AI Chatbot</a></li>
        <li><a href="#" className="hover:text-white transition">Support & Resources</a></li>
        <li><a href="#" className="hover:text-white transition">Community & Awareness</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy & Security</a></li>
      </ul>
    </div>

    {/* Column 3 - Social Links */}
    <div>
      <h4 className="font-semibold mb-3 text-accent">Follow Us</h4>
      <div className="flex space-x-4 text-gray-300">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://in.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
          <i className="fab fa-pinterest text-xl"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-gray-400 text-sm pt-6">
    <p>
      © {new Date().getFullYear()} SafeVoice — Created by <span className="text-accent font-medium">Team Destiny (PR25-14)</span>
    </p>
    <p className="mt-1">Empowering every voice through technology, empathy, and action.</p>
  </div>
</footer>
