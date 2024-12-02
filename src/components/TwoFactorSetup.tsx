import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Shield, Copy, Check } from 'lucide-react';
import speakeasy from 'speakeasy';

interface TwoFactorSetupProps {
  onClose: () => void;
  onComplete: () => void;
}

export const TwoFactorSetup = ({ onClose, onComplete }: TwoFactorSetupProps) => {
  const [secret, setSecret] = useState('');
  const [otpAuthUrl, setOtpAuthUrl] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate new secret
    const newSecret = speakeasy.generateSecret({
      name: 'MoneroCare',
      issuer: 'MoneroCare'
    });
    setSecret(newSecret.base32);
    setOtpAuthUrl(newSecret.otpauth_url || '');
  }, []);

  const handleCopySecret = async () => {
    await navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = () => {
    try {
      const verified = speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: verificationCode,
        window: 2
      });

      if (verified) {
        // Save the secret securely (in this case, localStorage for demo)
        localStorage.setItem('2fa_secret', secret);
        onComplete();
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold">Set Up Two-Factor Authentication</h3>
          <p className="text-gray-600 mt-2">
            Scan the QR code with your authenticator app to get started
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            {otpAuthUrl && (
              <QRCodeSVG
                value={otpAuthUrl}
                size={200}
                level="H"
                includeMargin={true}
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secret Key
            </label>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-gray-50 px-3 py-2 rounded-lg text-sm">
                {secret}
              </code>
              <button
                onClick={handleCopySecret}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Verification Code
            </label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleVerify}
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Verify and Enable
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
    </div>
  );
};