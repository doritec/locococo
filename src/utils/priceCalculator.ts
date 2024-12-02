import { usePriceStore } from '../store/priceStore';

export const calculateCryptoAmount = (usdAmount: number, price: number): number => {
  if (!usdAmount || !price) return 0;
  return usdAmount / price;
};

export const calculateUsdAmount = (cryptoAmount: number, price: number): number => {
  if (!cryptoAmount || !price) return 0;
  return cryptoAmount * price;
};

export const formatCrypto = (amount: number): string => {
  return amount.toFixed(6);
};

export const formatUsd = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const useCurrentPrice = () => {
  const { xmrPrice, loading, error, fetchPrice, startPriceSubscription } = usePriceStore();
  return { price: xmrPrice, loading, error, fetchPrice, startPriceSubscription };
};