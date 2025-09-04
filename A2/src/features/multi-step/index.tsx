import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Step1, Step2, Step3, ProgressBar, PDFPreview } from './components';

import type { FormData } from './types';
import { fullSchema } from './validation';
import './styles.css';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData | null>(null);

  const totalSteps = 3;

  const methods = useForm<FormData>({
    resolver: yupResolver(fullSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      occupation: '',
      company: '',
      experience: '',
      skills: '',
    },
  });

  const { getValues, formState, watch } = methods;

  const stepFields: Record<number, Array<keyof FormData>> = {
    1: ['firstName', 'lastName', 'email', 'phone'],
    2: ['address', 'city', 'state', 'zipCode', 'country'],
    3: ['occupation', 'company', 'experience', 'skills'],
  };

  const watchedValues = watch(stepFields[currentStep] as (keyof FormData)[]);

  const isCurrentStepValid = (): boolean => {
    const fields = stepFields[currentStep];
    const areFilled = fields.every((name, idx) => {
      const val = (watchedValues as unknown as string[])[idx] ?? '';
      return String(val).trim() !== '';
    });
    const hasAnyError = fields.some((name) => Boolean(formState.errors[name]));
    return areFilled && !hasAnyError;
  };

  const goNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFormData(null);
    methods.reset();
  };

  const handleFinalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFormData(getValues());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCurrentStepValid()) return;
    if (currentStep === totalSteps) {
      handleFinalSubmit();
    } else {
      goNext();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formMethods={methods} />;
      case 2:
        return <Step2 formMethods={methods} />;
      case 3:
        return <Step3 formMethods={methods} />;
      default:
        return <Step1 formMethods={methods} />;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='flex flex-col lg:flex-row gap-8 mx-auto p-4 lg:p-8 min-h-screen bg-gray-50 w-full'>
        <div className='flex-1 bg-white rounded-xl shadow-lg p-4 lg:p-8'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b-2 border-gray-200'>
            <h1 className='text-gray-800 text-2xl lg:text-3xl font-semibold'>
              Multi-Step Form
            </h1>
            <button
              onClick={handleReset}
              type='button'
              className='btn-reset w-full sm:w-auto'
            >
              Reset Form
            </button>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <form onSubmit={onSubmit} className='min-h-96 animate-fade-in'>
            {renderStep()}

            <div className='flex flex-col sm:flex-row gap-4 justify-end mt-8 pt-6 border-t border-gray-200'>
              {currentStep > 1 && (
                <button
                  type='button'
                  onClick={goPrev}
                  className='btn-secondary w-full sm:w-auto'
                >
                  Previous
                </button>
              )}
              <button
                type='submit'
                disabled={!isCurrentStepValid()}
                className='btn-primary w-full sm:w-auto'
              >
                {currentStep === totalSteps ? 'Submit' : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        <div className='flex-1 bg-white rounded-xl shadow-lg p-4 lg:p-8 overflow-y-auto'>
          <PDFPreview formData={formData} />
        </div>
      </div>
    </FormProvider>
  );
};

export default MultiStepForm;
