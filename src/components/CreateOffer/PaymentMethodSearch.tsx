import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { paymentMethods } from '../../data/paymentMethods';

interface PaymentMethodSearchProps {
  onSelect: (method: string) => void;
  onClose: () => void;
}

export const PaymentMethodSearch = ({ onSelect, onClose }: PaymentMethodSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMethods, setFilteredMethods] = useState(paymentMethods);

  useEffect(() => {
    const filtered = paymentMethods.filter(method =>
      method.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMethods(filtered);
  }, [searchTerm]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Select Payment Method</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search payment methods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              autoFocus
            />
          </div>

          <div className="max-h-96 overflow-y-auto">
            {filteredMethods.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No payment methods found
              </div>
            ) : (
              <div className="space-y-2">
                {filteredMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() => onSelect(method)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {method}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};