import React from 'react';
import { PaymentMethodBadge } from './PaymentMethodBadge';
import { Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  username: string;
  completedTrades: number;
  rating: number;
  price: number;
  paymentMethods: Array<{ type: 'bank' | 'card' | 'cash'; name: string }>;
  limits: { min: number; max: number };
  type: 'buy' | 'sell';
}

export const OfferCard = ({
  username,
  completedTrades,
  rating,
  price,
  paymentMethods,
  limits,
  type,
}: OfferCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <Link to={`/trader/${username}`} className="group">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{username}</h3>
              <Shield className="w-4 h-4 text-green-500" />
            </div>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <span>{completedTrades} trades</span>
            <span>•</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">${price.toLocaleString()}</div>
          <div className="text-sm text-gray-600">per XMR</div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {paymentMethods.map((method, index) => (
          <PaymentMethodBadge key={index} method={method.type} name={method.name} />
        ))}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Limits: ${limits.min.toLocaleString()} - ${limits.max.toLocaleString()}
      </div>
      
      <Link 
        to={`/trade/${username}`}
        className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {type === 'buy' ? 'Buy XMR' : 'Sell XMR'}
      </Link>
    </div>
  );
};