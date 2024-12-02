import React from 'react';
import { Shield, Zap, DollarSign, ArrowRight } from 'lucide-react';

export const Fees = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Fees</h1>
        <p className="text-gray-600 mb-8">
          MoneroCare maintains a simple and transparent fee structure to support our non-custodial trading platform.
        </p>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h2 className="text-xl font-semibold mb-2">Trading Fee</h2>
            <div className="text-4xl font-bold">0.5%</div>
            <p className="text-white/80 mt-2">Per completed trade</p>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Our fee structure is designed to be minimal and transparent. The 0.5% fee is only charged on successful trades
              and helps us maintain and improve our platform's security and features.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-medium">Escrow Protection</h3>
                  <p className="text-gray-600 text-sm">
                    All trades are protected by our secure escrow service at no additional cost.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-medium">Network Transaction Fees</h3>
                  <p className="text-gray-600 text-sm">
                    Users are responsible for network transaction fees, which vary by cryptocurrency and network conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Example Fee Calculation</h2>
          
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Trade Amount</span>
                <span className="font-medium">$1,000.00</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Trading Fee (0.5%)</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total Cost</span>
                  <span className="font-medium">$1,005.00</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-medium mb-1">Small Trade</div>
                <div className="text-sm text-gray-600">
                  $100 trade = $0.50 fee
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-medium mb-1">Medium Trade</div>
                <div className="text-sm text-gray-600">
                  $1,000 trade = $5.00 fee
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="font-medium mb-1">Large Trade</div>
                <div className="text-sm text-gray-600">
                  $10,000 trade = $50.00 fee
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-medium">Non-Custodial Platform</h3>
                <p className="text-gray-600">
                  MoneroCare is a non-custodial platform. You maintain full control of your funds at all times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-medium">Fee Collection</h3>
                <p className="text-gray-600">
                  Trading fees are automatically deducted from the trade amount at the time of completion.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-600">
                Note: Network transaction fees are separate from trading fees and vary based on network conditions. 
                Always check the current network fees before initiating a transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};