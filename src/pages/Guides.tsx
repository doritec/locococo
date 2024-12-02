import React from 'react';
import { BookOpen, Shield, Lock, Coins, DollarSign, Users, AlertCircle } from 'lucide-react';

export const Guides = () => {
  const guides = [
    {
      icon: Shield,
      title: "Getting Started with P2P Trading",
      description: "Learn the basics of peer-to-peer cryptocurrency trading and how to use MoneroCare safely.",
      sections: [
        "Understanding P2P trading",
        "Creating your first account",
        "Verifying your identity",
        "Securing your account"
      ]
    },
    {
      icon: Lock,
      title: "Privacy and Security Guide",
      description: "Essential tips and best practices for maintaining your privacy while trading.",
      sections: [
        "Using privacy-focused cryptocurrencies",
        "Secure communication practices",
        "Understanding escrow protection",
        "Safe payment methods"
      ]
    },
    {
      icon: Coins,
      title: "Trading Strategies",
      description: "Learn effective trading strategies and market analysis techniques.",
      sections: [
        "Market price analysis",
        "Setting competitive rates",
        "Managing trade limits",
        "Timing your trades"
      ]
    },
    {
      icon: DollarSign,
      title: "Payment Methods Guide",
      description: "Detailed information about supported payment methods and their usage.",
      sections: [
        "Bank transfer methods",
        "Cash payment options",
        "Digital payment services",
        "Payment security tips"
      ]
    },
    {
      icon: Users,
      title: "Building Trust as a Trader",
      description: "Tips for building a strong reputation and becoming a trusted trader.",
      sections: [
        "Maintaining high feedback scores",
        "Professional communication",
        "Quick response times",
        "Dispute resolution"
      ]
    },
    {
      icon: AlertCircle,
      title: "Avoiding Common Pitfalls",
      description: "Learn about common trading mistakes and how to avoid them.",
      sections: [
        "Identifying suspicious behavior",
        "Verifying payment confirmations",
        "Following trading terms",
        "Using escrow properly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Trading Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn everything you need to know about trading cryptocurrencies safely and effectively on MoneroCare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <guide.icon className="w-6 h-6 text-indigo-600" />
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              
              <ul className="space-y-2">
                {guide.sections.map((section, sIndex) => (
                  <li key={sIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns you may have about trading on MoneroCare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/monerocare"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Join Telegram Community
              </a>
              <a
                href="/contact"
                className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-400 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};