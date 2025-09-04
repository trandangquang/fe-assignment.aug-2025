import React, { useRef } from 'react';
import type { FormData } from '../types';

interface PDFPreviewProps {
  formData: FormData | null;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ formData }) => {
  const previewRef = useRef<HTMLDivElement>(null);

  if (!formData) {
    return (
      <div className='h-full flex flex-col'>
        <h3 className='text-gray-800 text-2xl font-semibold mb-6'>
          PDF Preview
        </h3>
        <div className='flex-1 flex items-center justify-center'>
          <p className='text-gray-500 text-lg'>
            Fill out the form to see the preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-200'>
        <h3 className='text-gray-800 text-2xl font-semibold'>PDF Preview</h3>
      </div>
      <div
        ref={previewRef}
        className='flex-1 bg-gray-50 border border-gray-200 rounded-lg p-8 font-serif leading-relaxed'
      >
        <h1 className='text-gray-800 text-3xl mb-8 text-center border-b-2 border-indigo-600 pb-4'>
          Form Data Summary
        </h1>

        <div className='mb-8'>
          <h2 className='text-gray-700 text-xl mb-4 border-b border-gray-300 pb-2'>
            Personal Information
          </h2>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Name:</strong>{' '}
            {formData.firstName} {formData.lastName}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Email:</strong> {formData.email}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Phone:</strong> {formData.phone}
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='text-gray-700 text-xl mb-4 border-b border-gray-300 pb-2'>
            Address Information
          </h2>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Address:</strong>{' '}
            {formData.address}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>City:</strong> {formData.city}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>State:</strong> {formData.state}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>ZIP Code:</strong>{' '}
            {formData.zipCode}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Country:</strong>{' '}
            {formData.country}
          </p>
        </div>

        <div className='mb-8'>
          <h2 className='text-gray-700 text-xl mb-4 border-b border-gray-300 pb-2'>
            Professional Information
          </h2>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Occupation:</strong>{' '}
            {formData.occupation}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Company:</strong>{' '}
            {formData.company}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Experience:</strong>{' '}
            {formData.experience}
          </p>
          <p className='mb-2 text-gray-600'>
            <strong className='text-gray-800'>Skills:</strong> {formData.skills}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;
