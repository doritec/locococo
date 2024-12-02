import React from 'react';
import { UserPlus, Search, MessageSquare, Shield, Lock, Zap, Coins } from 'lucide-react';

export const HowToBuy = () => {
  const steps = [
    {
      icon: UserPlus,
      number: 1,
      title: "Register",
      description: "Create an account on Moneiero with instant sign-up and get your free cryptocurrency wallet."
    },
    {
      icon: Search,
      number: 2,
      title: "Search Offers",
      description: "Use the search bar to find the best offers. Use the filters to narrow down the perfect offer."
    },
    {
      icon: MessageSquare,
      number: 3,
      title: "Start a Trade",
      description: "Once you find the right offer, check the terms. Then start the trade and begin chatting with the seller."
    }
  ];

  const supportedCryptos = [
    { name: 'Monero', logo: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=035' },
    { name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035' },
    { name: 'Solana', logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png' },
    { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035' },
    { name: 'Tether', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035' },
    { name: 'USD Coin', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035' },
    { name: 'Dai', logo: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=035' },
    { name: 'BNB', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035' },
    { name: 'TRON', logo: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=035' },
    { name: 'Celo', logo: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=035' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How to trade on Moneiero
        </h2>
        <p className="text-center text-gray-600 mb-12">
          It's easy and secure. All you need is 5 mins.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="font-bold text-2xl mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Supported Cryptocurrencies</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {supportedCryptos.map((crypto) => (
              <div key={crypto.name} className="flex flex-col items-center">
                <img src={crypto.logo} alt={crypto.name} className="w-12 h-12 mb-2" />
                <span className="text-sm text-gray-600">{crypto.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Decentralized</h3>
            <p className="text-gray-600">Non-custodial trading with secure escrow protection</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Anonymous</h3>
            <p className="text-gray-600">Trade privately with no KYC requirements</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast & Secure</h3>
            <p className="text-gray-600">Quick trades with maximum security</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moneiero is a decentralized peer-to-peer trading platform focused on privacy and security. 
            Trade your favorite cryptocurrencies with confidence using our escrow service and advanced 
            security features.
          </p>
        </div>
      </div>
    </section>
  );
};