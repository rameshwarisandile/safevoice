import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose SafeVoice AI?</h2>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-8 mb-8">
          <p className="text-gray-700 italic">
            “SafeVoice helped me find my voice.” – <strong>Anjali R.</strong>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
          <div>
            <p className="font-semibold text-lg">🔒 Confidential & Secure</p>
          </div>
          <div>
            <p className="font-semibold text-lg">🤖 AI-Powered Assistance</p>
          </div>
          <div>
            <p className="font-semibold text-lg">💬 Empathetic Community</p>
          </div>
          <div>
            <p className="font-semibold text-lg">🌍 Global Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
