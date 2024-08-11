import React from "react";

const GetTechnicalHelp: React.FC = () => {
  return (
    <div className="lg:p-6 w-full flex flex-col gap-4 overflow-y-auto">
      <h1 className="text-4xl mb-8 text-gray-800 text-center">
        Technical Support
      </h1>
      <div className="space-y-8">
        <section className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl mb-4 text-gray-800">Support Channels</h2>
          <p className="text-gray-700 mb-6">
            Our dedicated support team is here to help you. Choose a channel
            that suits your needs for the quickest assistance.
          </p>
          <div className="space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl mb-2 text-gray-800">Live Chat</h3>
              <p className="text-gray-600">
                Get instant help from our support team through live chat.
                Available 24/7 for immediate assistance.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl mb-2 text-gray-800">Email Support</h3>
              <p className="text-gray-600">
                Send us an email with your queries or issues. Our team will get
                back to you within 24 hours.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl mb-2 text-gray-800">Phone Support</h3>
              <p className="text-gray-600">
                Call us for direct and immediate assistance. Available during
                business hours.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-2xl mb-4 text-gray-800">Common Issues</h2>
          <p className="text-gray-700 mb-6">
            Find solutions to the most common technical issues reported by
            users. Click on each issue for detailed troubleshooting steps.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Login Issues:</strong> Troubleshooting tips for login
              problems.
            </li>
            <li>
              <strong>System Errors:</strong> Common system errors and their
              fixes.
            </li>
            <li>
              <strong>Feature Requests:</strong> How to submit requests for new
              features and enhancements.
            </li>
            <li>
              <strong>Performance Issues:</strong> Solutions to address and
              resolve application performance issues.
            </li>
          </ul>
        </section>

        <section className="border border-gray-300  p-6">
          <h2 className="text-2xl mb-4 text-gray-800">Contact Support</h2>
          <p className="text-gray-700 mb-6">
            For personalized assistance, reach out to our support team directly
            using the contact information below.
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg mb-2 text-blue-600">Email:</h3>
              <p className="text-gray-700">support@pharmaone.com</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg mb-2 text-blue-600">Phone:</h3>
              <p className="text-gray-700">+123-456-7890</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-4">
              <h3 className="text-lg mb-2 text-blue-600">Live Chat:</h3>
              <p className="text-gray-700">Available on our website 24/7</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GetTechnicalHelp;
