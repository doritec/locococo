import { create } from 'zustand';
import { getXMRPrice, subscribeToXMRPrice } from '../services/priceService';

interface PriceState {
  xmrPrice: number | null;
  loading: boolean;
  error: string | null;
  fetchPrice: () => Promise<void>;
  startPriceSubscription: () => void;
}

export const usePriceStore = create<PriceState>((set) => ({
  xmrPrice: null,
  loading: false,
  error: null,
  
  fetchPrice: async () => {
    set({ loading: true, error: null });
    try {
      const price = await getXMRPrice();
      set({ xmrPrice: price, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch price',
        loading: false 
      });
    }
  },

  startPriceSubscription: () => {
    return subscribeToXMRPrice((price) => {
      set({ xmrPrice: price });
    });
  }
}));