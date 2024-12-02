import React from 'react';
import { Building2, CreditCard, Banknote } from 'lucide-react';

const icons = {
  bank: Building2,
  card: CreditCard,
  cash: Banknote,
};

interface PaymentMethodBadgeProps {
  method: keyof typeof icons;
  name: string;
}

export const PaymentMethodBadge = ({ method, name }: PaymentMethodBadgeProps) => {
  const Icon = icons[method];
  
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      <Icon className="w-3 h-3" />
      {name}
    </span>
  );
};