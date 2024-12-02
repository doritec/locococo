import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FiltersBar } from '../components/Filters/FiltersBar';
import { OffersList } from '../components/Offers/OffersList';
import { SwapOffersList } from '../components/SwapOffers/SwapOffersList';
import { HowToBuy } from '../components/HowToBuy';
import { Search } from 'lucide-react';

export const Home = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {tradeType === 'buy' ? 'Buy' : 'Sell'} Monero
          </h2>
          <p className="text-gray-600">
            Browse trusted {tradeType === 'buy' ? 'sellers' : 'buyers'} in your region
          </p>
        </div>
        <FiltersBar onTradeTypeChange={setTradeType} />
        <OffersList type={tradeType} />

        <div className="mt-16 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Cryptocurrency Swaps
              </h2>
              <p className="text-gray-600">
                Exchange cryptocurrencies directly with other traders
              </p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search swaps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <SwapOffersList searchTerm={searchTerm} />
        </div>
      </main>
      <HowToBuy />
    </>
  );
};