import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Star, Clock, Globe, BadgeCheck, Phone, Mail, Award, Briefcase, Users } from 'lucide-react';
import { mockOffers } from '../data/mockOffers';

export const TraderProfile = () => {
  const { username } = useParams();
  const trader = mockOffers.find(offer => offer.username === username);

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
              <span className="text-4xl font-bold">{trader.username.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                {trader.username}
                <Shield className="w-6 h-6" />
              </h1>
              <p className="text-white/80 mt-2">Member since {trader.registrationDate}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Trader Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>Location: {trader.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Last seen: {trader.lastSeen}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>Verified Email</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>Verified Phone</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Badges & Achievements</h2>
              <div className="flex flex-wrap gap-3">
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

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Trading Terms</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-600 font-sans">
                {trader.terms || "No specific trading terms provided."}
              </pre>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to={`/trade/${trader.username}`}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Trade with {trader.username}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};