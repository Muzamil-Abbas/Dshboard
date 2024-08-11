import React from "react";

const Covid19: React.FC = () => {
  return (
    <div className="lg:p-6 w-full h-full overflow-y-auto">
      <h1 className="text-4xl mb-6 text-gray-800 text-center">
        Covid-19 Information
      </h1>
      <div className="space-y-8">
        <section className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl mb-4 text-teal-600">Global Overview</h2>
          <p className="text-gray-700 mb-4">
            Get the latest global statistics including total cases, recoveries,
            and deaths. Stay informed about the pandemic's impact worldwide.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Total Cases: 650,000,000</li>
            <li>Total Recoveries: 620,000,000</li>
            <li>Total Deaths: 30,000,000</li>
          </ul>
        </section>
        <section className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl mb-4 text-teal-600">Regional Updates</h2>
          <p className="text-gray-700 mb-4">
            Check out the latest updates by region. See how different areas are
            affected and learn about localized guidelines and restrictions.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>North America: 100,000,000 cases</li>
            <li>Europe: 150,000,000 cases</li>
            <li>Asia: 250,000,000 cases</li>
          </ul>
        </section>
        <section className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl mb-4 text-teal-600">Prevention & Safety</h2>
          <p className="text-gray-700 mb-4">
            Learn about effective prevention measures and safety guidelines to
            protect yourself and others.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Wear masks and practice social distancing.</li>
            <li>Wash hands regularly and use hand sanitizer.</li>
            <li>Stay updated with local health advisories.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Covid19;
