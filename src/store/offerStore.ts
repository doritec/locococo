import { create } from 'zustand';
import { mockOffers } from '../data/mockOffers';

export interface Offer {
  id: string;
  username: string;
  type: 'buy' | 'sell';
  cryptocurrency: string;
  price: number;
  priceType: 'market' | 'fixed';
  priceMargin?: string;
  minAmount: number;
  maxAmount: number;
  paymentMethods: Array<{ type: 'bank' | 'card' | 'cash'; name: string; instructions?: string }>;
  country: string;
  terms?: string;
  timeLimit: number;
  requireVerification: boolean;
  autoReply: boolean;
  createdAt: string;
}

interface OfferState {
  offers: Offer[];
  addOffer: (offer: Omit<Offer, 'id' | 'createdAt'>) => void;
  getUserOffers: (username: string) => Offer[];
  getAllOffers: () => Offer[];
}

// Initialize with mock offers in local storage if not exists
const initializeOffers = () => {
  const storedOffers = localStorage.getItem('offers');
  if (!storedOffers) {
    localStorage.setItem('offers', JSON.stringify(mockOffers));
    return mockOffers;
  }
  return JSON.parse(storedOffers);
};

export const useOfferStore = create<OfferState>((set, get) => ({
  offers: initializeOffers(),
  
  addOffer: (newOffer) => {
    const offer: Offer = {
      ...newOffer,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };
    
    set((state) => {
      const updatedOffers = [...state.offers, offer];
      localStorage.setItem('offers', JSON.stringify(updatedOffers));
      return { offers: updatedOffers };
    });
  },
  
  getUserOffers: (username) => {
    return get().offers.filter(offer => offer.username === username);
  },
  
  getAllOffers: () => {
    return get().offers;
  },
}));