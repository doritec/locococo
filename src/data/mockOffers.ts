interface Offer {
  username: string;
  completedTrades: number;
  rating: number;
  price: number;
  paymentMethods: Array<{ type: 'bank' | 'card' | 'cash'; name: string }>;
  limits: { min: number; max: number };
  type: 'buy' | 'sell';
  terms?: string;
  lastSeen?: string;
  registrationDate?: string;
  badges?: string[];
  margin?: string;
  location?: string;
}

export const mockOffers: Offer[] = [
  {
    username: "CryptoKing",
    completedTrades: 8456,
    rating: 4.95,
    price: 163500.00,
    paymentMethods: [
      { type: 'bank', name: 'PayPal' },
      { type: 'card', name: 'Wise Transfer' }
    ],
    limits: { min: 100, max: 50000 },
    type: 'sell',
    lastSeen: "5 mins ago",
    registrationDate: "Jan 15, 2020",
    badges: ["Premium Trader", "Verified"],
    margin: "5% below market",
    location: "United States"
  },
  {
    username: "dama36",
    completedTrades: 6234,
    rating: 4.89,
    price: 164000.50,
    paymentMethods: [
      { type: 'bank', name: 'SEPA Transfer' },
      { type: 'card', name: 'Revolut' }
    ],
    limits: { min: 200, max: 30000 },
    type: 'buy',
    lastSeen: "15 mins ago",
    registrationDate: "Mar 3, 2020",
    badges: ["Fast Trader"],
    margin: "2% above market",
    location: "Germany"
  },
  {
    username: "PrivacyPro",
    completedTrades: 4521,
    rating: 4.92,
    price: 163750.75,
    paymentMethods: [
      { type: 'cash', name: 'Cash in Person' },
      { type: 'bank', name: 'Western Union' }
    ],
    limits: { min: 1000, max: 25000 },
    type: 'sell',
    lastSeen: "1 hour ago",
    registrationDate: "Apr 12, 2020",
    badges: ["Verified"],
    margin: "3% below market",
    location: "Canada"
  },
  {
    username: "CryptoCoop",
    completedTrades: 15678,
    rating: 4.98,
    price: 164100.25,
    paymentMethods: [
      { type: 'bank', name: 'Bank Wire' },
      { type: 'card', name: 'Wise' }
    ],
    limits: { min: 5000, max: 500000 },
    type: 'buy',
    terms: `Cooperative trading environment with focus on community trust and reliability.
    
- Fast bank wire processing
- Available 24/7 for support
- Verified members get priority
- Volume discounts available
- Multi-signature escrow for large trades

Please have your verification documents ready for KYC if this is our first trade.`,
    lastSeen: "1 min ago",
    registrationDate: "Aug 1, 2019",
    badges: ["Premium Trader", "Verified", "High Volume"],
    margin: "0.5% above market",
    location: "Switzerland"
  },
  {
    username: "P2PMaster",
    completedTrades: 9876,
    rating: 4.96,
    price: 164300.00,
    paymentMethods: [
      { type: 'bank', name: 'International Wire' },
      { type: 'card', name: 'Stripe' }
    ],
    limits: { min: 1000, max: 100000 },
    type: 'buy',
    terms: `Professional P2P trading service with institutional grade security.

Key trading terms:
- Same day processing for all verified users
- Multi-currency support
- OTC desk available for large volumes
- Dedicated account manager for premium traders
- Enhanced security measures for all transactions

First-time traders must complete full verification.`,
    lastSeen: "10 mins ago",
    registrationDate: "Nov 5, 2019",
    badges: ["Premium Trader", "Verified", "Institutional"],
    margin: "1% above market",
    location: "Singapore"
  },
  {
    username: "YamaMirai2012",
    completedTrades: 7234,
    rating: 4.94,
    price: 164200.50,
    paymentMethods: [
      { type: 'bank', name: 'TransferWise' },
      { type: 'card', name: 'Revolut' }
    ],
    limits: { min: 300, max: 45000 },
    type: 'buy',
    terms: `Global trading service available 24/7.

- Multiple currency pairs supported
- Fast processing times
- Competitive rates
- Secure escrow service
- Professional support team

Please complete verification before trading.`,
    lastSeen: "3 mins ago",
    registrationDate: "Dec 15, 2019",
    badges: ["Premium Trader", "Fast Trader", "Global"],
    margin: "1.5% above market",
    location: "Hong Kong"
  },
  {
    username: "SecureSwap",
    completedTrades: 5643,
    rating: 4.91,
    price: 163900.00,
    paymentMethods: [
      { type: 'bank', name: 'Interac e-Transfer' },
      { type: 'card', name: 'Apple Pay' }
    ],
    limits: { min: 300, max: 40000 },
    type: 'sell',
    lastSeen: "45 mins ago",
    registrationDate: "Feb 8, 2020",
    badges: ["Premium Trader"],
    margin: "4% below market",
    location: "Canada"
  },
  {
    username: "CryptoVault",
    completedTrades: 7823,
    rating: 4.93,
    price: 163800.75,
    paymentMethods: [
      { type: 'bank', name: 'Zelle' },
      { type: 'card', name: 'Cash App' }
    ],
    limits: { min: 300, max: 75000 },
    type: 'sell',
    lastSeen: "25 mins ago",
    registrationDate: "Oct 10, 2019",
    badges: ["Premium Trader", "Fast Trader"],
    margin: "2% below market",
    location: "United States"
  },
  {
    username: "AsiaTrader",
    completedTrades: 12543,
    rating: 4.97,
    price: 164150.25,
    paymentMethods: [
      { type: 'bank', name: 'Alipay' },
      { type: 'bank', name: 'UnionPay' }
    ],
    limits: { min: 1000, max: 200000 },
    type: 'buy',
    terms: `Specialized in Asian markets with multi-language support.

Trading Requirements:
- Fast processing for verified users
- Support in English, Chinese, Japanese, Korean
- Large volume trades welcome
- Institutional accounts available
- 24/7 customer service

All new traders must complete verification process.`,
    lastSeen: "Just now",
    registrationDate: "Jul 20, 2019",
    badges: ["Premium Trader", "Verified", "Regional Expert"],
    margin: "0.8% above market",
    location: "Japan"
  },
  {
    username: "MoneroWhale",
    completedTrades: 18965,
    rating: 4.99,
    price: 163950.50,
    paymentMethods: [
      { type: 'bank', name: 'SWIFT Transfer' },
      { type: 'bank', name: 'OTC Wire' }
    ],
    limits: { min: 10000, max: 1000000 },
    type: 'sell',
    terms: `Institutional-grade OTC desk for large volume trades.

Service Features:
- Dedicated account manager
- Custom pricing for whale accounts
- Multi-signature escrow
- Same-day settlement
- Premium support line
- Institutional KYC required

Minimum trade size: $10,000 USD`,
    lastSeen: "5 mins ago",
    registrationDate: "Mar 15, 2019",
    badges: ["Whale Trader", "Institutional", "Premium", "Verified"],
    margin: "0.2% below market",
    location: "United Arab Emirates"
  },
  {
    username: "NordicExchange",
    completedTrades: 14567,
    rating: 4.96,
    price: 164050.75,
    paymentMethods: [
      { type: 'bank', name: 'Mobile Pay' },
      { type: 'bank', name: 'Swish' },
      { type: 'bank', name: 'Nordic Bank Transfer' }
    ],
    limits: { min: 500, max: 150000 },
    type: 'buy',
    terms: `Specialized in Nordic markets with support for all major Nordic payment systems.

Trading Requirements:
- Instant transfers with Mobile Pay/Swish
- Support in English, Swedish, Norwegian, Danish, Finnish
- Premium rates for regular traders
- Enhanced security with BankID verification
- 24/7 Nordic support team

All trades processed within 15 minutes during business hours.
Weekend support available for verified traders.`,
    lastSeen: "8 mins ago",
    registrationDate: "Jun 5, 2019",
    badges: ["Premium Trader", "Verified", "Regional Expert", "Fast Trader"],
    margin: "0.7% above market",
    location: "Sweden"
  },
  {
    username: "AfricaTrade",
    completedTrades: 3456,
    rating: 4.88,
    price: 164250.00,
    paymentMethods: [
      { type: 'bank', name: 'M-PESA' },
      { type: 'bank', name: 'MTN Mobile Money' }
    ],
    limits: { min: 50, max: 25000 },
    type: 'sell',
    terms: `African market specialist with mobile money support.

- Instant mobile money transfers
- Multi-country support across Africa
- Local currency settlements
- Competitive rates
- Fast verification process`,
    lastSeen: "30 mins ago",
    registrationDate: "Sep 1, 2020",
    badges: ["Regional Expert", "Fast Trader"],
    margin: "3% below market",
    location: "Kenya"
  }
];