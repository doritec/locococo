import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About MoneroCare</h1>
        
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              MoneroCare is dedicated to providing a secure, private, and user-friendly platform for peer-to-peer cryptocurrency trading. 
              Our mission is to facilitate the adoption of privacy-focused cryptocurrencies while maintaining the highest standards of 
              security and user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Why Choose MoneroCare?</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-semibold">Privacy First:</span>
                <span>We prioritize user privacy and data protection in every aspect of our platform.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Secure Trading:</span>
                <span>Our escrow service ensures safe transactions between traders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Global Community:</span>
                <span>Connect with traders worldwide and access various payment methods.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">Support:</span>
                <span>24/7 customer support to assist you with any questions or concerns.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Privacy</h3>
                <p className="text-gray-600">We believe in financial privacy as a fundamental right.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-gray-600">Your safety and security are our top priorities.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building a trusted network of cryptocurrency traders.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously improving our platform and services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};