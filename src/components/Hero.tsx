import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Buy and Sell Monero,
          <span className="text-indigo-600"> Securely</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          The most trusted P2P platform for Monero trading. Fast, secure, and private.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Secure Escrow",
              description: "All trades are protected with secure escrow"
            },
            {
              icon: Lock,
              title: "Privacy First",
              description: "Your privacy is our top priority"
            },
            {
              icon: Zap,
              title: "Instant Trades",
              description: "Quick and easy trading process"
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};