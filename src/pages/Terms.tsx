import React from 'react';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using MoneroCare, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Privacy and Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We prioritize your privacy and security. All trades are protected by our escrow service, and we implement 
              industry-standard security measures to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Trading Rules</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Users must complete the verification process before trading.</li>
              <li>All trades must use the platform's escrow service.</li>
              <li>Users must follow local laws and regulations.</li>
              <li>Fraudulent activities will result in immediate account termination.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. Fees and Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              MoneroCare charges minimal fees for our services. All fees are transparent and will be clearly displayed 
              before each transaction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">5. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Maintain accurate and up-to-date account information</li>
              <li>Protect account credentials and enable 2FA</li>
              <li>Report suspicious activities immediately</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">6. Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              In case of disputes, our support team will mediate between parties. All decisions made by MoneroCare 
              regarding disputes are final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};