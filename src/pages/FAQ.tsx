import React from 'react';

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <h2 className="text-xl font-semibold mb-2">How does MoneroCare work?</h2>
            <p className="text-gray-600">
              MoneroCare is a P2P platform where users can buy and sell cryptocurrencies directly with other users. 
              All trades are protected by our escrow service to ensure safe transactions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Is my privacy protected?</h2>
            <p className="text-gray-600">
              Yes, we prioritize user privacy. We only collect essential information and implement strong security measures 
              to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How do I start trading?</h2>
            <p className="text-gray-600">
              Create an account, complete verification if required, and browse available offers. You can also create your 
              own trade offers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What payment methods are supported?</h2>
            <p className="text-gray-600">
              We support various payment methods including bank transfers, credit cards, and cash payments. Available methods 
              vary by trader.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How does escrow protection work?</h2>
            <p className="text-gray-600">
              When a trade is initiated, the seller's cryptocurrency is locked in escrow. The funds are released to the buyer 
              only after payment confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What are the trading fees?</h2>
            <p className="text-gray-600">
              Our fee structure is transparent and competitive. Exact fees are displayed before each transaction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How do I contact support?</h2>
            <p className="text-gray-600">
              Our support team is available 24/7 through our contact form or telegram channel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};