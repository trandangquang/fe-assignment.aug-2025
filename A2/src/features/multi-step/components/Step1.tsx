import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../types';

interface Step1Props {
  formMethods: UseFormReturn<FormData>;
}

const Step1: React.FC<Step1Props> = ({ formMethods }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-gray-800 text-2xl font-semibold mb-6 pb-2 border-b-2 border-indigo-600'>
        Step 1: Personal Information
      </h2>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='firstName'
          className='font-medium text-gray-700 text-sm'
        >
          First Name *
        </label>
        <input
          {...register('firstName')}
          type='text'
          id='firstName'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.firstName
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.firstName && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='lastName' className='font-medium text-gray-700 text-sm'>
          Last Name *
        </label>
        <input
          {...register('lastName')}
          type='text'
          id='lastName'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.lastName
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.lastName && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='font-medium text-gray-700 text-sm'>
          Email *
        </label>
        <input
          {...register('email')}
          type='email'
          id='email'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.email && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='phone' className='font-medium text-gray-700 text-sm'>
          Phone Number *
        </label>
        <input
          {...register('phone')}
          type='tel'
          id='phone'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.phone
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.phone && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.phone.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Step1;
