import { SwapOffer } from '../types/offers';

export const mockSwapOffers: SwapOffer[] = [
  {
    trader: "CashohoSwap",
    fromCrypto: "BTC",
    toCrypto: "XMR",
    rate: "1 BTC = 165.32 XMR",
    minAmount: "0.01 BTC",
    maxAmount: "2 BTC",
    completedTrades: 1234,
    rating: 4.95,
    paymentMethods: ["Atomic Swap", "Escrow", "MultiSig"],
    lastSeen: "2 mins ago",
    registrationDate: "Jan 15, 2020",
    terms: `Professional atomic swap service with focus on security and speed.

Key Features:
- Instant atomic swaps
- MultiSig support for large trades
- OTC desk available
- 24/7 availability
- Premium support

Please ensure you understand atomic swap mechanics before trading.`,
    location: "Global",
    badges: ["Premium Trader", "Atomic Swap Expert", "Verified"]
  },
  {
    trader: "CryptoFreedom",
    fromCrypto: "ETH",
    toCrypto: "XMR",
    rate: "1 ETH = 12.45 XMR",
    minAmount: "0.1 ETH",
    maxAmount: "50 ETH",
    completedTrades: 856,
    rating: 4.92,
    paymentMethods: ["Atomic Swap", "MultiSig", "Cross-Chain Bridge"],
    lastSeen: "5 mins ago",
    registrationDate: "Mar 3, 2020",
    terms: `Specialized in ETH to XMR conversions using advanced swap protocols.

Service Features:
- Cross-chain atomic swaps
- Bridge protocol support
- Competitive rates
- Quick execution
- Technical support available

All trades are non-custodial and secure.`,
    location: "Europe",
    badges: ["Bridge Expert", "Fast Trader"]
  },
  {
    trader: "PrivacyPro",
    fromCrypto: "XMR",
    toCrypto: "USDT",
    rate: "1 XMR = 165.50 USDT",
    minAmount: "0.1 XMR",
    maxAmount: "100 XMR",
    completedTrades: 2156,
    rating: 4.98,
    paymentMethods: ["Atomic Swap", "Escrow", "Private Bridge"],
    lastSeen: "Just now",
    registrationDate: "Dec 10, 2019",
    terms: `Privacy-focused cryptocurrency exchange service.

Trading Requirements:
- All trades use atomic swaps
- Private bridge available for USDT
- Enhanced privacy features
- No KYC required
- Secure communication only`,
    location: "Decentralized",
    badges: ["Privacy Expert", "Premium Trader", "High Volume"]
  },
  {
    trader: "ChainBridge",
    fromCrypto: "BNB",
    toCrypto: "XMR",
    rate: "1 BNB = 1.85 XMR",
    minAmount: "1 BNB",
    maxAmount: "500 BNB",
    completedTrades: 945,
    rating: 4.91,
    paymentMethods: ["Cross-Chain Bridge", "Escrow", "MultiSig"],
    lastSeen: "1 hour ago",
    registrationDate: "Apr 15, 2020",
    terms: `Specialized in BSC to Monero bridge services.

Service Details:
- Cross-chain bridge protocol
- MultiSig escrow for large volumes
- Competitive bridge fees
- Fast processing
- Bridge support available`,
    location: "Asia",
    badges: ["Bridge Specialist", "BSC Expert"]
  },
  {
    trader: "jmcabc2008",
    fromCrypto: "USDC",
    toCrypto: "XMR",
    rate: "1 USDC = 0.00605 XMR",
    minAmount: "100 USDC",
    maxAmount: "50000 USDC",
    completedTrades: 1589,
    rating: 4.94,
    paymentMethods: ["Atomic Swap", "Escrow", "StableBridge"],
    lastSeen: "30 mins ago",
    registrationDate: "Feb 8, 2020",
    terms: `Stablecoin to Monero exchange specialist.

Trading Information:
- Instant stablecoin swaps
- Multiple chain support
- Premium rates for large volumes
- Quick settlement
- 24/7 availability`,
    location: "International",
    badges: ["Stablecoin Expert", "Fast Trader", "Verified"]
  },
  {
    trader: "Markantonio",
    fromCrypto: "XMR",
    toCrypto: "BTC",
    rate: "1 XMR = 0.00605 BTC",
    minAmount: "1 XMR",
    maxAmount: "1000 XMR",
    completedTrades: 3267,
    rating: 4.99,
    paymentMethods: ["Atomic Swap", "MultiSig", "Lightning Network"],
    lastSeen: "15 mins ago",
    registrationDate: "Nov 1, 2019",
    terms: `Professional atomic swap service with Lightning Network support.

Features:
- Instant atomic swaps
- Lightning Network integration
- Institutional grade service
- Premium support
- Volume discounts available

Large trades welcome with prior notice.`,
    location: "Global",
    badges: ["Atomic Swap Pioneer", "Lightning Expert", "Premium Trader"]
  }
];