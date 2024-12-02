import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useOfferStore } from '../store/offerStore';
import { Wallet, ArrowUpRight, ArrowDownRight, Users, Bell, Settings, BarChart3, Plus } from 'lucide-react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { getUserOffers } = useOfferStore();

  if (!user) {
    navigate('/login');
    return null;
  }

  const userOffers = getUserOffers(user.username);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome back, {user.username}!</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-500">Balance</span>
            </div>
            <div className="text-2xl font-bold">0.00 XMR</div>
            <div className="text-sm text-gray-500">≈ $0.00 USD</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ArrowDownRight className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Active Offers</span>
            </div>
            <div className="text-2xl font-bold">{userOffers.length}</div>
            <div className="text-sm text-gray-500">Total offers</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm text-gray-500">Completed Trades</span>
            </div>
            <div className="text-2xl font-bold">{user.trades_completed}</div>
            <div className="text-sm text-gray-500">All time</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Rating</span>
            </div>
            <div className="text-2xl font-bold">{user.rating.toFixed(1)}</div>
            <div className="text-sm text-gray-500">Average rating</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Your Trade Offers</h2>
                <button
                  onClick={() => navigate('/create-offer')}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Create Offer
                </button>
              </div>
              
              {userOffers.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  You haven't created any trade offers yet
                </div>
              ) : (
                <div className="space-y-4">
                  {userOffers.map((offer) => (
                    <div key={offer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">
                          {offer.type === 'buy' ? 'Buying' : 'Selling'} {offer.cryptocurrency}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {offer.priceType === 'market' 
                            ? `Market price ${offer.priceMargin}%` 
                            : `Fixed price $${offer.price}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          Limits: ${offer.minAmount} - ${offer.maxAmount}
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(offer.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="text-center text-gray-500 py-8">
                No recent activity to display
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span>Notification Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span>Account Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 className="w-5 h-5 text-gray-500" />
                  <span>Trading Statistics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};