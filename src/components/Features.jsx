import React from "react";

const features = [
  {
    title: "Report Incident",
    desc: "Step-by-step guidance for anonymous reporting",
    icon: "📢",
  },
  {
    title: "Support & Resources",
    desc: "Access articles, helplines & NGO directories",
    icon: "📚",
  },
  {
    title: "Community Awareness",
    desc: "Read survivor stories & safety blogs",
    icon: "💬",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
