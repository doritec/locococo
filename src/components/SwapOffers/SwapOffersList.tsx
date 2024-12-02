import React, { useState } from 'react';
import { SwapOfferCard } from './SwapOfferCard';
import { mockSwapOffers } from '../../data/mockSwapOffers';
import { useAuthStore } from '../../store/authStore';
import { RegistrationPrompt } from '../RegistrationPrompt';

interface SwapOffersListProps {
  searchTerm: string;
}

export const SwapOffersList = ({ searchTerm }: SwapOffersListProps) => {
  const { user } = useAuthStore();
  const [showAll, setShowAll] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const filteredOffers = mockSwapOffers.filter(offer => 
    offer.fromCrypto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.toCrypto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.trader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedOffers = showAll ? filteredOffers : filteredOffers.slice(0, 6);

  const handleViewMore = () => {
    if (!user) {
      setShowPrompt(true);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedOffers.map((offer, index) => (
          <SwapOfferCard key={`${offer.trader}-${index}`} {...offer} />
        ))}
      </div>

      {filteredOffers.length > 6 && !showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View More Swaps
          </button>
        </div>
      )}

      {showPrompt && <RegistrationPrompt onClose={() => setShowPrompt(false)} />}
    </div>
  );
};