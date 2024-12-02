import React, { useState } from 'react';
import { FilterSelect } from './FilterSelect';
import { countries } from '../../data/countries';
import { paymentMethods } from '../../data/paymentMethods';
import { useAuthStore } from '../../store/authStore';
import { RegistrationPrompt } from '../RegistrationPrompt';

interface FiltersBarProps {
  onTradeTypeChange: (type: 'buy' | 'sell') => void;
}

export const FiltersBar = ({ onTradeTypeChange }: FiltersBarProps) => {
  const { user } = useAuthStore();
  const [showPrompt, setShowPrompt] = useState(false);

  const handleFilterChange = (type: string) => {
    if (!user) {
      setShowPrompt(true);
      return;
    }
    if (type.toLowerCase() === 'buy' || type.toLowerCase() === 'sell') {
      onTradeTypeChange(type.toLowerCase() as 'buy' | 'sell');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FilterSelect
          label="I want to"
          value="Buy"
          onChange={handleFilterChange}
          options={['Buy', 'Sell']}
        />
        
        <FilterSelect
          label="Cryptocurrency"
          value="Monero (XMR)"
          onChange={() => !user && setShowPrompt(true)}
          options={['Monero (XMR)']}
        />
        
        <FilterSelect
          label="Payment method"
          value="Any"
          onChange={() => !user && setShowPrompt(true)}
          options={['Any', ...paymentMethods]}
        />
        
        <FilterSelect
          label="Location"
          value="Any"
          onChange={() => !user && setShowPrompt(true)}
          options={['Any', ...countries]}
        />
      </div>

      {showPrompt && <RegistrationPrompt onClose={() => setShowPrompt(false)} />}
    </div>
  );
};