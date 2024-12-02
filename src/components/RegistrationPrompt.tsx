import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, UserPlus } from 'lucide-react';

interface RegistrationPromptProps {
  onClose: () => void;
}

export const RegistrationPrompt = ({ onClose }: RegistrationPromptProps) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <UserPlus className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold">Registration Required</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Please register to view more offers and start trading on MoneroCare.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleRegister}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Register Now
          </button>
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