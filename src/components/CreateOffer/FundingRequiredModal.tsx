import React from 'react';
import { AlertTriangle, X, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FundingRequiredModalProps {
  cryptocurrency: string;
  onClose: () => void;
}

export const FundingRequiredModal = ({ cryptocurrency, onClose }: FundingRequiredModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-semibold">Funding Required</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wallet className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-600 text-center">
            Before creating an offer, please ensure your wallet is funded with {cryptocurrency}. 
            This is required to ensure you can fulfill trades when they are initiated.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/wallet"
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            Go to Wallet
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};