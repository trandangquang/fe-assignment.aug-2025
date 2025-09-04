import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className='mb-8'>
      <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2'>
        <div className='progress-fill' style={{ width: `${progress}%` }} />
      </div>
      <div className='text-center text-gray-600 font-medium'>
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
