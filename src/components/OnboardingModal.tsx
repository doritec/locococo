import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'Setting up your profile',
    description: 'Creating your unique trader profile...',
  },
  {
    title: 'Generating wallet',
    description: 'Creating your non-custodial Monero wallet...',
  },
  {
    title: 'Finalizing setup',
    description: 'Completing final configurations...',
  },
];

export const OnboardingModal = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(c => c + 1);
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 1000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-8">Setting up your account</h2>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index > currentStep ? 'opacity-40' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                {index < currentStep ? (
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                ) : index === currentStep ? (
                  <div className="w-4 h-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};