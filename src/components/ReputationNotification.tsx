import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const ReputationNotification = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-md border border-indigo-100">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-gray-900">Import Your Reputation</h3>
                  <button
                    onClick={handleDismiss}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Import your trading reputation from LocalCoinSwap, LocalMonero, LocalBitcoins, 
                  Paxful, or Agoradesk.
                </p>
                <Link
                  to="/reputation"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Learn more about reputation import
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};