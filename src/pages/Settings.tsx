import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Bell, Lock, Globe, User, Mail, MessageCircle, Shield } from 'lucide-react';

export const Settings = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    email: user?.email || '',
    notifications: {
      trades: true,
      messages: true,
      security: true,
      marketing: false
    },
    language: 'en',
    currency: 'USD',
    telegramConnected: false
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async () => {
    setLoading(true);
    // Simulate saving
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaved(true);
    setLoading(false);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleTelegramConnect = () => {
    window.open('https://t.me/monerocare', '_blank');
    setSettings(prev => ({ ...prev, telegramConnected: true }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" />
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={user.username}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-gray-500" />
              Notification Preferences
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-medium">Telegram Notifications</h3>
                  <p className="text-sm text-gray-600">Receive instant notifications via Telegram</p>
                </div>
                <button
                  onClick={handleTelegramConnect}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    settings.telegramConnected
                      ? 'bg-green-100 text-green-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {settings.telegramConnected ? 'Connected' : 'Connect Telegram'}
                </button>
              </div>

              {Object.entries(settings.notifications).map(([key, value]) => (
                <label key={key} className="flex items-center justify-between">
                  <span className="text-gray-700 capitalize">{key} notifications</span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      notifications: {
                        ...prev.notifications,
                        [key]: e.target.checked
                      }
                    }))}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-500" />
              Preferences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Currency
                </label>
                <select
                  value={settings.currency}
                  onChange={(e) => setSettings(prev => ({ ...prev, currency: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-gray-500" />
              Security
            </h2>

            <div>
              <button
                onClick={() => {/* Handle password change */}}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Save Changes'
              )}
            </button>

            {saved && (
              <span className="text-green-600 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Changes saved successfully
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};