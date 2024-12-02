import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cryptos = [
  {
    name: 'Monero',
    symbol: 'XMR',
    logo: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=035',
    description: 'Private. Secure. Untraceable.'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035',
    description: 'Digital Gold Standard'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png',
    description: 'High Performance Blockchain'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035',
    description: 'Smart Contract Platform'
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035',
    description: 'Stable Digital Dollar'
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035',
    description: 'Digital Dollar Reserve'
  }
];

export const CryptoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cryptos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center text-white">
            <img
              src={cryptos[currentIndex].logo}
              alt={cryptos[currentIndex].name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-1">
              {cryptos[currentIndex].name} ({cryptos[currentIndex].symbol})
            </h3>
            <p className="text-white/80">{cryptos[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {cryptos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};