import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../types';

interface Step2Props {
  formMethods: UseFormReturn<FormData>;
}

const Step2: React.FC<Step2Props> = ({ formMethods }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-gray-800 text-2xl font-semibold mb-6 pb-2 border-b-2 border-indigo-600'>
        Step 2: Address Information
      </h2>

      <div className='flex flex-col gap-2'>
        <label htmlFor='address' className='font-medium text-gray-700 text-sm'>
          Address *
        </label>
        <input
          {...register('address')}
          type='text'
          id='address'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.address
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.address && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.address.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='city' className='font-medium text-gray-700 text-sm'>
          City *
        </label>
        <input
          {...register('city')}
          type='text'
          id='city'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.city
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.city && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.city.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='state' className='font-medium text-gray-700 text-sm'>
          State *
        </label>
        <input
          {...register('state')}
          type='text'
          id='state'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.state
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.state && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.state.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='zipCode' className='font-medium text-gray-700 text-sm'>
          ZIP Code *
        </label>
        <input
          {...register('zipCode')}
          type='text'
          id='zipCode'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.zipCode
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.zipCode && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.zipCode.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='country' className='font-medium text-gray-700 text-sm'>
          Country *
        </label>
        <input
          {...register('country')}
          type='text'
          id='country'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.country
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.country && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.country.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Step2;
