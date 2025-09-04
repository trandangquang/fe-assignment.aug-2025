import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../types';

interface Step3Props {
  formMethods: UseFormReturn<FormData>;
}

const Step3: React.FC<Step3Props> = ({ formMethods }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-gray-800 text-2xl font-semibold mb-6 pb-2 border-b-2 border-indigo-600'>
        Step 3: Professional Information
      </h2>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='occupation'
          className='font-medium text-gray-700 text-sm'
        >
          Occupation *
        </label>
        <input
          {...register('occupation')}
          type='text'
          id='occupation'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.occupation
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.occupation && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.occupation.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='company' className='font-medium text-gray-700 text-sm'>
          Company *
        </label>
        <input
          {...register('company')}
          type='text'
          id='company'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.company
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.company && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.company.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='experience'
          className='font-medium text-gray-700 text-sm'
        >
          Years of Experience *
        </label>
        <input
          {...register('experience')}
          type='text'
          id='experience'
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 ${
            errors.experience
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.experience && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.experience.message}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='skills' className='font-medium text-gray-700 text-sm'>
          Skills *
        </label>
        <textarea
          {...register('skills')}
          id='skills'
          rows={4}
          className={`px-3 py-3 border-2 rounded-lg text-base transition-all duration-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 resize-vertical min-h-24 ${
            errors.skills
              ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
              : 'border-gray-300 focus:border-indigo-600'
          }`}
        />
        {errors.skills && (
          <span className='text-red-500 text-sm font-medium'>
            {errors.skills.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Step3;
