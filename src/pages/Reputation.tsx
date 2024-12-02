import React from 'react';
import { Shield, Star, Link as LinkIcon, MessageCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reputation = () => {
  const platforms = [
    {
      name: "LocalCoinSwap",
      description: "Import your reputation and trade history from LocalCoinSwap",
      requirements: ["Minimum 10 completed trades", "No negative feedback"]
    },
    {
      name: "LocalMonero",
      description: "Transfer your LocalMonero trading history and feedback",
      requirements: ["Minimum 15 completed trades", "90% positive feedback"]
    },
    {
      name: "LocalBitcoins",
      description: "Import your LocalBitcoins trading reputation",
      requirements: ["Minimum 20 completed trades", "Trust score > 80%"]
    },
    {
      name: "Paxful",
      description: "Link your Paxful vendor status and reputation",
      requirements: ["Minimum 25 completed trades", "95% positive feedback"]
    },
    {
      name: "Agoradesk",
      description: "Transfer your Agoradesk trading history",
      requirements: ["Minimum 5 completed trades", "No unresolved disputes"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Reputation Import</h1>
          <p className="text-gray-600">
            Transfer your existing trading reputation from other platforms to build trust on MoneroCare.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg mb-6">
            <AlertTriangle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-indigo-900 mb-1">Important Notice</h3>
              <p className="text-indigo-700">
                Reputation import requires manual verification by our team. Please contact us through our support system to initiate the process. Have your proof of reputation ready.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    
                    <div className="space-y-2">
                      {platform.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">How to Import Your Reputation</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-indigo-600">1</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Contact Support</h3>
                <p className="text-gray-600">
                  Reach out to our support team through our{' '}
                  <Link to="/contact" className="text-indigo-600 hover:text-indigo-700">
                    contact form
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-indigo-600">2</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Provide Verification</h3>
                <p className="text-gray-600">
                  Submit proof of your reputation from other platforms (screenshots, profile links, etc.)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-indigo-600">3</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Verification Process</h3>
                <p className="text-gray-600">
                  Our team will verify your reputation and import it to your MoneroCare profile
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <LinkIcon className="w-5 h-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};