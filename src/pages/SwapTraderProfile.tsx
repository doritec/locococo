import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Star, Clock, Globe, BadgeCheck, ArrowRight, Award, Briefcase, Users, MessageCircle } from 'lucide-react';
import { mockSwapOffers } from '../data/mockSwapOffers';

export const SwapTraderProfile = () => {
  const { username } = useParams();
  const trader = mockSwapOffers.find(offer => offer.trader === username);
  const [showContact, setShowContact] = useState(false);

  if (!trader) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Trader not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-12 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl font-bold">{trader.trader.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                {trader.trader}
                <Shield className="w-6 h-6" />
              </h1>
              <p className="text-white/80 mt-2">
                Member since {trader.registrationDate} • Last seen {trader.lastSeen}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{trader.rating}</p>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{trader.completedTrades.toLocaleString()}</p>
                <p className="text-gray-600">Completed Trades</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{trader.badges?.length || 0}</p>
                <p className="text-gray-600">Badges</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Trader Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>Location: {trader.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Active Hours: 24/7</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {trader.badges?.map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      <Award className="w-4 h-4" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Current Swap Offer</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 bg-white rounded-lg font-medium">
                    {trader.fromCrypto}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="px-4 py-2 bg-white rounded-lg font-medium">
                    {trader.toCrypto}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-medium">{trader.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Limits:</span>
                    <span className="font-medium">{trader.minAmount} - {trader.maxAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
            <div className="flex flex-wrap gap-3">
              {trader.paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-50 rounded-lg flex items-center gap-2"
                >
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Trading Terms</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-600 font-sans">
                {trader.terms}
              </pre>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to={`/trade/${trader.trader}`}
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
            >
              Start Swap with {trader.trader}
            </Link>
            <button
              onClick={() => setShowContact(!showContact)}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact
            </button>
          </div>

          {showContact && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                To contact {trader.trader}, please start a trade first. You can communicate through our secure messaging system once a trade is initiated.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};