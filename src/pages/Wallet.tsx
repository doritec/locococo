import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { QRCodeSVG } from 'qrcode.react';
import { ChevronDown, ChevronUp, Copy, Check, QrCode, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cryptoAssets = [
  {
    name: 'Monero',
    symbol: 'XMR',
    balance: '0.00',
    address: '465dTZGGuaShWF9LQcpQNTQBbutUpQRLv4oWoEeFoUJW81Np2ropX7Bf5tutQ5t6izLTSXaLPCi3D4ae4yfboLiP3wKTAwi',
    logo: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=035'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: '0.00',
    address: '6TmFDmhUekUuiu5WGs86nbuAjHBNF5151iLdZXWFhTD9',
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.00',
    address: 'bc1qxxvdpr66y8wmvzhhz7q0v9w7u35djjlud9qlcf',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035'
  },
  {
    name: 'Tether (ERC20)',
    symbol: 'USDT',
    network: 'ERC20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'USD Coin (ERC20)',
    symbol: 'USDC',
    network: 'ERC20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035'
  },
  {
    name: 'Dai (ERC20)',
    symbol: 'DAI',
    network: 'ERC20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=035'
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    network: 'BSC',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035'
  },
  {
    name: 'Tether (BEP20)',
    symbol: 'USDT',
    network: 'BEP20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'USD Coin (BEP20)',
    symbol: 'USDC',
    network: 'BEP20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035'
  },
  {
    name: 'Dai (BEP20)',
    symbol: 'DAI',
    network: 'BEP20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=035'
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    balance: '0.00',
    address: 'TT62e3mz6o38tXmAo96f1S424FSUb8Szta',
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=035'
  },
  {
    name: 'Tether (TRC20)',
    symbol: 'USDT',
    network: 'TRC20',
    balance: '0.00',
    address: 'TT62e3mz6o38tXmAo96f1S424FSUb8Szta',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'Celo',
    symbol: 'CELO',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=035'
  },
  {
    name: 'Celo Dollar',
    symbol: 'cUSD',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=035'
  }
];

export const Wallet = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);
  const [showQR, setShowQR] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showSend, setShowSend] = useState<string | null>(null);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleCopy = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSend = (asset: string) => {
    setShowSend(asset);
    setExpandedAsset(asset);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">Wallet</h1>

        <div className="space-y-4">
          {cryptoAssets.map((asset) => (
            <div key={`${asset.symbol}-${asset.network || ''}`} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={asset.logo} alt={asset.name} className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">{asset.name}</h3>
                      <p className="text-sm text-gray-600">{asset.network ? `${asset.symbol} (${asset.network})` : asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{asset.balance} {asset.symbol}</div>
                    <button
                      onClick={() => setExpandedAsset(expandedAsset === `${asset.symbol}-${asset.network || ''}` ? null : `${asset.symbol}-${asset.network || ''}`)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedAsset === `${asset.symbol}-${asset.network || ''}` ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedAsset === `${asset.symbol}-${asset.network || ''}` && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 border-t">
                      <div className="flex items-center justify-between py-4">
                        <button
                          onClick={() => setShowQR(asset.address)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <QrCode className="w-4 h-4" />
                          Deposit
                        </button>
                        <button
                          onClick={() => handleSend(`${asset.symbol}-${asset.network || ''}`)}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                          Send
                        </button>
                      </div>

                      {showSend === `${asset.symbol}-${asset.network || ''}` && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-4">Send {asset.symbol}</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Recipient Address
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                placeholder={`Enter ${asset.symbol} address`}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                  placeholder="0.00"
                                />
                                <button
                                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                  Max
                                </button>
                              </div>
                            </div>
                            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                              Send {asset.symbol}
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Deposit Address
                        </label>
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                          <div className="flex-1 overflow-hidden">
                            <div className="truncate font-mono text-sm">
                              {asset.address}
                            </div>
                          </div>
                          <button
                            onClick={() => handleCopy(asset.address)}
                            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            title={copied === asset.address ? 'Copied!' : 'Copy address'}
                          >
                            {copied === asset.address ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Deposit Address</h3>
            <div className="flex justify-center mb-4">
              <QRCodeSVG value={showQR} size={200} />
            </div>
            <div className="font-mono text-sm break-all mb-4">
              {showQR}
            </div>
            <button
              onClick={() => setShowQR(null)}
              className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};