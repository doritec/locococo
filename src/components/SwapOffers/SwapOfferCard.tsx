import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star } from 'lucide-react';

interface SwapOfferCardProps {
  trader: string;
  fromCrypto: string;
  toCrypto: string;
  rate: string;
  minAmount: string;
  maxAmount: string;
  completedTrades: number;
  rating: number;
  paymentMethods: string[];
}

export const SwapOfferCard = ({
  trader,
  fromCrypto,
  toCrypto,
  rate,
  minAmount,
  maxAmount,
  completedTrades,
  rating,
  paymentMethods
}: SwapOfferCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <Link to={`/swap-trader/${trader}`} className="group">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{trader}</h3>
            <Shield className="w-4 h-4 text-green-500" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <span>{completedTrades} trades</span>
            <span>•</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium">
          {fromCrypto}
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400" />
        <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium">
          {toCrypto}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Rate</span>
          <span className="font-medium">{rate}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Limits</span>
          <span className="font-medium">{minAmount} - {maxAmount}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {paymentMethods.map((method, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {method}
          </span>
        ))}
      </div>

      <Link
        to={`/swap-trader/${trader}`}
        className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Swap Now
      </Link>
    </div>
  );
};